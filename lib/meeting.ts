import Papa from "papaparse";
export type Meeting = {
  date: string; // yyyy-mm-dd
  name: string;
  topic: string;
  status: string;
  link: string;
  image: string;
};

export async function getMeetings(): Promise<Meeting[]> {
  const url = process.env.SHEET_CSV_URL;
  if (!url) return [];

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return [];

    const { data } = Papa.parse<Record<string, string>>(await res.text(), {
      header: true,
      skipEmptyLines: true,
    });
return data
      .map((row) => ({
        date: (row.Date ?? "").trim(),
        name: (row.Meeting ?? "").trim(),
        topic: (row.Topic ?? "").trim(),
        status: (row.Status ?? "").trim(),
        link: (row.Link ?? "").trim(),
        image: (row.Image ?? "").trim(),
      }))
      .filter((m) => /^\d{4}-\d{2}-\d{2}$/.test(m.date) && m.name)
      .sort((a, b) => a.date.localeCompare(b.date));
  } catch {
    return [];
  }
}

export function splitMeetings(meetings: Meeting[]) {
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Africa/Lagos",
  }); // gives yyyy-mm-dd
  return {
    upcoming: meetings.filter((m) => m.date >= today),
    past: meetings.filter((m) => m.date < today).reverse(),
  };
}
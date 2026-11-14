import Image from "next/image";
import { connection } from "next/server";
import Link from "next/link";
import { getMeetings, splitMeetings, type Meeting } from "@/lib/meeting";

function formatDate(date: string) {
  const d = new Date(`${date}T00:00:00Z`);
  const part = (opts: Intl.DateTimeFormatOptions) =>
    d.toLocaleDateString("en-GB", { ...opts, timeZone: "UTC" }).toUpperCase();
  return {
    weekday: part({ weekday: "short" }),
    day: part({ day: "numeric" }),
    month: part({ month: "short" }),
  };
}

// Cloudinary resizes and compresses from the URL itself
function cardImage(url: string) {
  return url.replace("/upload/", "/upload/w_800,h_450,c_fill,f_auto,q_auto/");
}

export function MeetingCard({ m }: { m: Meeting }) {
  const { weekday, day, month } = formatDate(m.date);
  const status = m.status.toLowerCase();
  const cancelled = status === "cancelled";
  const rescheduled = status === "rescheduled";
  const hasImage = m.image.startsWith("https://res.cloudinary.com/");

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-border-soft bg-white ${
        cancelled ? "opacity-60" : ""
      }`}
    >
      {hasImage && (
        <Image
          src={cardImage(m.image)}
          alt={m.name}
          width={800}
          height={450}
          className="aspect-video w-full object-cover"
        />
      )}
      <div className="flex gap-5 p-6">
        <div className="flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
          <span className="text-xs font-bold tracking-widest text-brand-orange">
            {weekday}
          </span>
          <span className="text-3xl font-bold leading-none">{day}</span>
          <span className="text-xs font-bold tracking-widest">{month}</span>
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-bold text-navy">{m.name}</h3>
          {(cancelled || rescheduled) && (
            <span className="mt-1 inline-block rounded-full bg-brand-orange/20 px-3 py-0.5 text-xs font-semibold text-[#A85A00]">
              {cancelled ? "Cancelled" : "Rescheduled"}
            </span>
          )}
          <p className="mt-2 text-[#3F4B5F]">
            {m.topic || "Topic to be announced"}
          </p>
          <p className="mt-2 text-sm font-semibold text-brand-green">
            7:00 PM · Google Meet
          </p>
          {m.link && !cancelled && (
            <Link
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-green"
            >
              Join on Google Meet
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function Events() {
    await connection();
  const { upcoming } = splitMeetings(await getMeetings());

  return (
    <section id="events" className="bg-soft px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="text-sm font-semibold text-brand-green">
          UPCOMING MEETINGS
        </span>
        <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
          Meet us twice a month
        </h2>
        <p className="mt-3 text-[#3F4B5F]">
          Every second and last Saturday, 7:00 PM, on Google Meet.
        </p>

        {upcoming.length === 0 ? (
          <p className="mt-10 text-[#3F4B5F]">
            No upcoming meetings listed yet. Check back soon.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {upcoming.slice(0, 4).map((m) => (
              <MeetingCard key={`${m.date}-${m.name}`} m={m} />
            ))}
          </div>
        )}

        <Link
          href="/events"
          className="mt-8 inline-block font-semibold text-navy hover:text-brand-green"
        >
          View all events →
        </Link>
      </div>
    </section>
  );
}
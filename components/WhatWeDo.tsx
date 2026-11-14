const cards = [
    {
      nos: "01",
      title: "Collaborate",
      body: "Work with other data people on shared projects and ideas.",
      border: "border-t-brand-blue",
      numColor: "text-brand-blue",
    },
    {
      nos: "02",
      title: "Learn",
      body: "Pick up new skills through monthly meetings and shared resources.",
      border: "border-t-brand-green",
      numColor: "text-brand-green",
    },
    {
      nos: "03",
      title: "Grow",
      body: "Present your work, get feedback and build a track record.",
      border: "border-t-navy",
      numColor: "text-navy",
    },
    {
      nos: "04",
      title: "Excel",
      body: "Turn practice into polished projects you are proud to show.",
      border: "border-t-brand-orange",
      numColor: "text-[#A85A00]",
    },
  ];

export default function WhatWeDo() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="font-semibold text-brand-green text-sm">
          WHAT WE DO
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy max-w-3xl mt-4 mb-10">
          Built around four ideas
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.nos}
              className={`rounded-2xl border border-slate-200 border-t-4 p-6 ${card.border}`}
            >
              <span className={`font-semibold ${card.numColor}`}>
                {card.nos}
              </span>
              <h3 className="text-xl font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-[#3F4B5F]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy bg-[url('/assets/hero-pattern.svg')] bg-cover bg-right px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap tracking-widest gap-4 mb-6">
          <span className="font-semibold text-[#AFC0DA] text-sm">COLLABORATE</span>
          <span className="font-semibold text-[#AFC0DA] text-sm">LEARN</span>
          <span className="font-semibold text-[#AFC0DA] text-sm">GROW</span>
          <span className="font-semibold text-brand-orange text-sm">EXCEL</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
          Where data people collaborate, learn, grow, and{" "}
          <span className="text-brand-orange">excel.</span>
        </h1>
        <p className="text-lg text-[#C9D6EA] max-w-xl mt-6">
          The Data Geeks Community is a place for data enthusiasts to build
          skills, share projects and grow together.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/#join"
            className="bg-brand-orange text-navy px-8 py-3.5 rounded-lg font-semibold hover:bg-white transition-colors duration-200 hover:text-navy"
          >
            Join the Community
          </Link>
          <Link
            href="/#events"
            className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors duration-200"
          >
            See Upcoming Events
          </Link>
        </div>
        {/* <p>
          Join our community of data enthusiasts and professionals to share
          knowledge, network, and advance your skills in the ever-evolving world
          of data.
        </p> */}
      </div>
    </section>
  );
}

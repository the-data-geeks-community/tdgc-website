import Events from "@/components/Events";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import What_We_Do from "@/components/WhatWeDo";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <What_We_Do />
      <Suspense fallback={<section id="events" className="min-h-96 bg-soft" />}>
        <Events />
      </Suspense>
    </main>
  );
}

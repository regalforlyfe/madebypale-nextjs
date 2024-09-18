"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "./_components/Intro";
import Description from "./_components/Description";
import Section from "./_components/Section";
import Footer from "./_components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Intro />
      <Description />
      <Section />
      <div className="h-screen">
        <Footer />
      </div>
    </div>
  );
}

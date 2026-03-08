"use client";

import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { NauticalLines } from "./NauticalLines";

export function About() {
  return (
    <section id="about" className="relative bg-light-bg py-20 md:py-28 px-6">
      <NauticalLines />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-3xl font-black text-dark-text tracking-[0.05em] mb-6">
              ABOUT ME
            </h2>
            <p className="text-dark-text/80 leading-relaxed text-base md:text-lg">
              {profile.about}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {profile.keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white rounded-lg p-5 shadow-sm border border-border"
                >
                  <div className="text-3xl font-black text-navy">{fact.value}</div>
                  <div className="text-dark-text font-medium text-sm mt-1">
                    {fact.label}
                  </div>
                  <div className="text-dark-text/50 text-xs mt-0.5">{fact.sub}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mt-16">
          <h3 className="text-sm font-bold text-dark-text/50 tracking-[0.15em] uppercase mb-6 text-center">
            Companies Worked With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {profile.companies.map((company) => (
              <span
                key={company}
                className="px-5 py-2.5 bg-white rounded-full text-dark-text/70 text-sm font-medium shadow-sm border border-border"
              >
                {company}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <AnimateOnScroll>
            <h3 className="text-sm font-bold text-dark-text/50 tracking-[0.15em] uppercase mb-4">
              Project Cargo Experience
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.cargoExpertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-navy/5 text-dark-text/70 rounded text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h3 className="text-sm font-bold text-dark-text/50 tracking-[0.15em] uppercase mb-4">
              Operations Experience
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.operationsExpertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-navy/5 text-dark-text/70 rounded text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

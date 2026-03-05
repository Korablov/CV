"use client";

import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Experience() {
  return (
    <section id="experience" className="bg-navy py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-light-text tracking-wider mb-12 text-center">
            EXPERIENCE
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-steel/30 -translate-x-1/2" />

          {profile.experience.map((exp, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div
                className={`relative flex items-start mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2 z-10" />

                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-navy-light border border-steel/20 rounded-lg p-5">
                    <div className="text-gold text-xs font-semibold tracking-wider mb-1">
                      {exp.period}
                    </div>
                    <div className="text-light-text font-bold text-lg">
                      {exp.role}
                    </div>
                    <div className="text-steel text-sm mt-1">{exp.vessel}</div>
                    <div className="text-light-text/40 text-xs mt-2">
                      {exp.dwt} DWT · {exp.owner}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <p className="text-light-text/40 text-sm">
            Total maritime career since 2012 —{" "}
            <a
              href={profile.cvPath}
              download
              className="text-steel hover:text-gold transition-colors underline"
            >
              view full history in CV
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

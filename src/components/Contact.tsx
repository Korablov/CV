"use client";

import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { NauticalLines } from "./NauticalLines";

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-dark-text/70 hover:text-steel transition-colors group"
    >
      <span className="text-2xl w-10 text-center">{icon}</span>
      <div>
        <div className="text-xs text-dark-text/40 uppercase tracking-wider font-bold">
          {label}
        </div>
        <div className="text-base group-hover:text-steel transition-colors font-medium">
          {value}
        </div>
      </div>
    </a>
  );
}

export function Contact() {
  const whatsappUrl = `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`;
  const telegramUrl = profile.telegram
    ? `https://t.me/${profile.telegram}`
    : undefined;

  return (
    <section id="contact" className="relative bg-white py-20 md:py-28 px-6">
      <NauticalLines />
      <div className="max-w-xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-black text-dark-text tracking-[0.05em] mb-12">
            GET IN TOUCH
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-col gap-6 items-start mx-auto w-fit">
            <ContactLink
              href={`mailto:${profile.email}`}
              icon="✉"
              label="Email"
              value={profile.email}
            />
            <ContactLink
              href={whatsappUrl}
              icon="💬"
              label="WhatsApp"
              value={profile.phone}
            />
            {telegramUrl && (
              <ContactLink
                href={telegramUrl}
                icon="✈"
                label="Telegram"
                value={`@${profile.telegram}`}
              />
            )}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mt-12">
          <a
            href={profile.cvPath}
            download
            className="inline-block px-10 py-4 bg-steel text-white font-bold rounded tracking-wider text-sm hover:bg-gold-hover transition-colors"
          >
            DOWNLOAD FULL CV
          </a>
        </AnimateOnScroll>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-dark-text/30 text-xs tracking-wider">
          © {new Date().getFullYear()} Volodymyr Korablov
        </p>
      </div>
    </section>
  );
}

"use client";

import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { NauticalLines } from "./NauticalLines";

function ContactCard({
  href,
  label,
  value,
  icon,
  color,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all group"
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="min-w-0 w-full text-center">
        <div className="text-xs text-dark-text/40 uppercase tracking-wider font-bold mb-1">
          {label}
        </div>
        <div className="text-dark-text font-medium text-sm leading-snug break-words overflow-wrap-anywhere group-hover:text-steel transition-colors">
          {value}
        </div>
      </div>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 18.34V9.32H5.66V18.34H8.34ZM7 8.1A1.56 1.56 0 1 0 7 4.98A1.56 1.56 0 0 0 7 8.1ZM18.34 18.34V13.4C18.34 10.76 16.93 9.53 15.05 9.53C13.53 9.53 12.85 10.37 12.47 10.96V9.32H9.8C9.84 10.41 9.8 18.34 9.8 18.34H12.47V13.3C12.47 13.03 12.49 12.76 12.57 12.57C12.79 12.03 13.28 11.47 14.12 11.47C15.21 11.47 15.66 12.3 15.66 13.52V18.34H18.34Z" />
    </svg>
  );
}

export function Contact() {
  const whatsappUrl = `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`;
  const telegramUrl = `https://t.me/${profile.telegram}`;

  return (
    <section id="contact" className="relative bg-white py-20 md:py-28 px-6">
      <NauticalLines />
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-3xl font-black text-dark-text tracking-[0.05em] mb-12 text-center">
            CONTACT
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ContactCard
              href={whatsappUrl}
              label="WhatsApp"
              value={profile.phone}
              icon={<WhatsAppIcon />}
              color="#25D366"
            />
            <ContactCard
              href={telegramUrl}
              label="Telegram"
              value={`@${profile.telegram}`}
              icon={<TelegramIcon />}
              color="#2AABEE"
            />
            <ContactCard
              href={`mailto:${profile.email}`}
              label="Email"
              value={profile.email}
              icon={<EmailIcon />}
              color="#253746"
            />
            <ContactCard
              href={profile.linkedin}
              label="LinkedIn"
              value="capt-korablov"
              icon={<LinkedInIcon />}
              color="#0A66C2"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mt-10 text-center">
          <a
            href={profile.cvPath}
            download
            className="inline-block px-10 py-4 bg-steel text-white font-bold rounded tracking-wider text-sm hover:bg-gold-hover transition-colors"
          >
            DOWNLOAD FULL CV
          </a>
        </AnimateOnScroll>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-dark-text/30 text-xs tracking-wider">
          © {new Date().getFullYear()} Volodymyr Korablov
        </p>
      </div>
    </section>
  );
}

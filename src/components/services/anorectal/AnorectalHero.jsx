import React from "react";
import {
  ArrowUpRight,
  Stethoscope,
  ShieldCheck,
  ChevronRight,
  Activity,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

const AnorectalHero = () => {
  return (
    <section
      id="anorectal-hero"
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND LIGHT SQUARE PATTERN */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #EAF3F9 1px, transparent 1px),
            linear-gradient(to bottom, #EAF3F9 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
          maskImage:
            "linear-gradient(to right, transparent 5%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 5%, black 65%, transparent 100%)",
        }}
      />

      {/* SOFT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-[#EAF7FD] blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#DFF3FC]/60 blur-[110px]" />

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12">

        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-[650px]">

          {/* EYEBROW */}
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#CBE9F8] bg-[#EAF7FD]">
              <Stethoscope
                size={19}
                strokeWidth={1.8}
                className="text-[#2E91C8]"
              />
            </span>

            <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[13px]">
              ANORECTAL SURGERIES
            </span>

            <span className="h-px w-10 bg-[#2E91C8]/35" />
          </div>

          {/* HEADING */}
          <h1 className="max-w-[680px] text-[36px] font-bold leading-[1.12] tracking-[-1.4px] text-[#102D5F] sm:text-[46px] lg:text-[54px] xl:text-[60px]">
            Specialized Care for
            <span className="mt-2 block text-[#2E91C8]">
              Anorectal Conditions
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.85] text-[#52647A] sm:text-[17px]">
            Evaluation and personalized treatment guidance for piles,
            fissures, fistulas and other anorectal conditions.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Clinical Evaluation",
              "Treatment Planning",
              "Recovery Guidance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-[#DCECF5] bg-[#F6FBFE] px-4 py-2.5"
              >
                <ShieldCheck
                  size={15}
                  className="shrink-0 text-[#2E91C8]"
                />

                <span className="text-[12px] font-medium text-[#294766] sm:text-[13px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-wrap items-center gap-4">

            <Link
              to="/contact"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#2E91C8] px-7 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(46,145,200,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#102D5F]"
            >
              Book an Appointment

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="#anorectal-treatments"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#D1E5F0] bg-white px-6 text-[14px] font-semibold text-[#102D5F] transition-all duration-300 hover:border-[#2E91C8] hover:bg-[#F2FAFE]"
            >
              Explore Treatments

              <ChevronRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative z-10 mx-auto w-full max-w-[630px] lg:ml-auto">

          {/* DECORATIVE LIGHT SQUARES */}
          <div className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-[24px] bg-[#E3F4FC] sm:-right-8 sm:-top-8 sm:h-44 sm:w-44" />

          <div className="pointer-events-none absolute -bottom-8 -left-6 h-36 w-36 rounded-[28px] bg-[#D9F0FB] sm:-bottom-10 sm:-left-10 sm:h-48 sm:w-48" />

          <div className="pointer-events-none absolute right-[-18px] top-[45%] h-20 w-20 rotate-12 rounded-[20px] border border-[#C5E7F7] bg-[#F0FAFF]" />

          {/* MAIN IMAGE */}
          <div className="relative h-[390px] overflow-hidden rounded-[28px] border border-[#E0EDF5] bg-[#EAF7FD] shadow-[0_25px_70px_rgba(16,45,95,0.12)] sm:h-[490px] lg:h-[540px]">

            <img
              src="/Anorectal-hero.jpg"
              alt="Anorectal care consultation at Vighnaharta Hospital"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />

            {/* SUBTLE BOTTOM GRADIENT */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182F]/65 via-transparent to-transparent" />

            {/* TOP ICON */}
            <div className="absolute right-5 top-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-[#2E91C8] shadow-lg backdrop-blur-xl sm:right-7 sm:top-7">
              <HeartPulse size={25} strokeWidth={1.6} />
            </div>

            {/* IMAGE BOTTOM TEXT */}
            <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-9">
              <div className="mb-3 h-[3px] w-12 rounded-full bg-[#72D5FF]" />

              <p className="text-[17px] font-semibold leading-[1.4] text-white sm:text-[21px]">
                Care That Puts Your
                <span className="block text-[#A5E8FF]">
                  Comfort First
                </span>
              </p>
            </div>
          </div>

          {/* FLOATING INFORMATION CARD */}
          <div className="absolute -bottom-6 left-4 z-20 flex items-center gap-3 rounded-2xl border border-[#E0EDF5] bg-white px-4 py-3.5 shadow-[0_15px_45px_rgba(16,45,95,0.12)] sm:-bottom-7 sm:left-[-20px] sm:px-5 sm:py-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7FD] text-[#2E91C8]">
              <Activity size={22} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-[13px] font-bold text-[#102D5F] sm:text-[15px]">
                Individualized Care
              </p>

              <p className="mt-0.5 text-[11px] text-slate-500 sm:text-[12px]">
                Diagnosis • Treatment • Guidance
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM ACCENT LINE */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#D5EDF9] to-transparent" />
    </section>
  );
};

export default AnorectalHero;
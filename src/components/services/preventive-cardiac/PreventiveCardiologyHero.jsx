import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  HeartPulse,
  Activity,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PreventiveCardiologyHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F7FBFD]">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[48%] bg-gradient-to-bl from-[#E1F2FA] via-[#EFF9FD] to-transparent" />

      <div className="pointer-events-none absolute -left-32 top-8 h-[330px] w-[330px] rounded-full bg-[#DDEFFA]/60 blur-[90px]" />

      <div className="pointer-events-none absolute right-[8%] top-[10%] h-[280px] w-[280px] rounded-full bg-[#A8DFF5]/25 blur-[90px]" />

      {/* SUBTLE GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#102D5F 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 pb-12 pt-6 sm:px-6 sm:pb-14 sm:pt-8 lg:px-8 lg:pb-16 lg:pt-9">
        <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* LABEL */}
            <div
              data-aos="fade-up"
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#D7EBF5] bg-white px-4 py-2 shadow-[0_5px_18px_rgba(16,45,95,0.04)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#2E91C8] opacity-25" />
                <span className="relative h-2 w-2 rounded-full bg-[#2E91C8]" />
              </span>

              <span className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#277DAE] sm:text-[15px]">
                Preventive Cardiology
              </span>
            </div>

            {/* MAIN HEADING */}
            <h1
              data-aos="fade-up"
              data-aos-delay="80"
              className="m-0 max-w-[760px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
            >
              Proactive Heart Health Through{" "}
              <span className="text-[#2E91C8]">
                Risk Assessment & Prevention
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="m-0 mt-6 max-w-[630px] text-[13px] leading-[1.8] text-[#53667C] sm:text-[15px]"
            >
              Heart health consultation focused on identifying
              cardiovascular risk factors, supporting informed
              lifestyle decisions and guiding appropriate
              preventive care.
            </p>

            {/* HIGHLIGHTS */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E3F4FB] text-[#2E91C8]">
                  <Activity size={16} strokeWidth={1.9} />
                </span>

                <span className="text-[13px] font-semibold text-[#254565] sm:text-[15px]">
                  Cardiovascular Risk Assessment
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E3F4FB] text-[#2E91C8]">
                  <ShieldCheck size={16} strokeWidth={1.9} />
                </span>

                <span className="text-[13px] font-semibold text-[#254565] sm:text-[15px]">
                  Preventive Care Guidance
                </span>
              </div>
            </div>

            {/* CTA BUTTON */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-8"
            >
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#102D5F] px-7 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(16,45,95,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] hover:shadow-[0_16px_32px_rgba(46,145,200,0.23)] sm:text-[15px]"
              >
                <HeartPulse size={19} strokeWidth={1.9} />

                Book Heart Health Consultation

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* SMALL TRUST MESSAGE */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-7 flex items-start gap-3"
            >
              <Stethoscope
                size={20}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-[#2E91C8]"
              />

              <p className="m-0 max-w-[560px] text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
                Preventive recommendations are based on individual
                medical history, clinical evaluation and relevant
                investigations.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE COMPOSITION */}
          <div
            data-aos="fade-left"
            data-aos-delay="120"
            className="relative mx-auto w-full max-w-[650px] lg:mx-0"
          >
            {/* OFFSET FRAME */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-[#A9DFF3] sm:-right-5 sm:-top-5 sm:rounded-[36px]" />

            {/* MAIN IMAGE */}
            <div className="cardiology-image-reveal relative isolate h-[340px] overflow-hidden rounded-[26px] bg-[#D9EAF3] shadow-[0_25px_65px_rgba(16,45,95,0.13)] sm:h-[420px] sm:rounded-[32px] lg:h-[465px] xl:h-[500px]">
              <img
                src="/heart1.webp"
                alt="Doctor reviewing cardiovascular reports during a preventive heart health consultation"
                className="h-full w-full object-cover object-center transition-transform duration-[1200ms] hover:scale-[1.045]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/55 via-transparent to-transparent" />

              {/* IMAGE BOTTOM CAPTION */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 sm:bottom-6 sm:left-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                  <HeartPulse size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="m-0 text-[13px] font-bold text-white sm:text-[15px]">
                    Preventive Heart Care
                  </p>

                  <p className="m-0 mt-0.5 text-[12px] text-white/85 sm:text-[13px]">
                    Assessment • Awareness • Prevention
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING HEART HEALTH PANEL */}
            <div className="cardiology-float absolute -bottom-5 -left-2 z-20 flex max-w-[265px] items-center gap-3 rounded-[16px] border border-[#E4EFF5] bg-white p-3.5 shadow-[0_18px_45px_rgba(16,45,95,0.14)] sm:-bottom-7 sm:-left-7 sm:max-w-[300px] sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F7FD] text-[#2E91C8]">
                <Activity size={22} strokeWidth={1.8} />
              </div>

              <div>
                <p className="m-0 text-[13px] font-bold text-[#102D5F] sm:text-[15px]">
                  Heart Health Assessment
                </p>

                <p className="m-0 mt-1 text-[12px] leading-[1.5] text-[#64748B] sm:text-[13px]">
                  Understand risks. Plan preventive care.
                </p>
              </div>
            </div>

            {/* DECORATIVE HEART ICON */}
            <div className="pointer-events-none absolute -right-4 bottom-[16%] hidden h-16 w-16 items-center justify-center rounded-full border-[7px] border-[#F7FBFD] bg-[#2E91C8] text-white shadow-lg sm:flex">
              <HeartPulse size={27} strokeWidth={1.7} />
            </div>
          </div>
        </div>

        {/* BOTTOM SPACE */}
        <div className="h-8 sm:h-10" />
      </div>

      <style>{`
        @keyframes cardiologyImageReveal {
          from {
            opacity: 0;
            clip-path: inset(0 100% 0 0 round 30px);
            transform: scale(1.045);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0 round 30px);
            transform: scale(1);
          }
        }

        @keyframes cardiologyFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .cardiology-image-reveal {
          animation: cardiologyImageReveal 1.15s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .cardiology-float {
          animation: cardiologyFloat 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cardiology-image-reveal,
          .cardiology-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PreventiveCardiologyHero;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  Activity,
  Brain,
  ShieldCheck,
  MoveUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const NeurospineHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F7FBFD]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#F7FBFD] to-[#EAF3FA]" />

      <div className="pointer-events-none absolute -left-36 top-12 h-[380px] w-[380px] rounded-full bg-[#DCEFFA]/60 blur-[100px]" />

      <div className="pointer-events-none absolute -right-24 top-0 h-[430px] w-[430px] rounded-full bg-[#DDEAF8]/55 blur-[110px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#102D5F 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-9">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* LABEL */}
            <div
              data-aos="fade-up"
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#D7EAF5] bg-white px-4 py-2 shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F5FB] text-[#2E91C8]">
                <Brain size={17} strokeWidth={1.8} />
              </span>

              <span className="text-[12px] font-bold uppercase tracking-[1.3px] text-[#2E91C8] sm:text-[14px]">
                Brain, Spine &amp; Nerve Care
              </span>
            </div>

            {/* HEADING */}
            <h1
              data-aos="fade-up"
              data-aos-delay="70"
              className="m-0 max-w-[730px] text-[32px] font-bold leading-[1.15] tracking-[-0.9px] text-[#102D5F] sm:text-[38px] md:text-[42px] xl:text-[46px]"
            >
              Specialized Evaluation for{" "}
              <span className="text-[#2E91C8]">
                Brain, Spine &amp; Nerve-Related Conditions
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="130"
              className="m-0 mt-6 max-w-[610px] text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
            >
              Medical assessment and appropriate treatment
              guidance for selected conditions affecting the
              brain, spine, spinal cord, peripheral nerves
              and related neurological functions. Our approach
              focuses on understanding symptoms, clinical
              evaluation and guiding patients towards
              suitable medical care and follow-up.
            </p>

            {/* HIGHLIGHTS */}
            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-7 flex flex-wrap gap-x-7 gap-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F3FA] text-[#2E91C8]">
                  <Brain size={20} strokeWidth={1.8} />
                </span>

                <span className="text-[14px] font-semibold text-[#254565] sm:text-[15px]">
                  Brain &amp; Neurological Assessment
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F3FA] text-[#2E91C8]">
                  <Activity size={20} strokeWidth={1.8} />
                </span>

                <span className="text-[14px] font-semibold text-[#254565] sm:text-[15px]">
                  Spine &amp; Nerve Assessment
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F3FA] text-[#2E91C8]">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </span>

                <span className="text-[14px] font-semibold text-[#254565] sm:text-[15px]">
                  Treatment Guidance
                </span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div
              data-aos="fade-up"
              data-aos-delay="230"
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 py-3 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[15px]"
              >
                <CalendarDays size={19} strokeWidth={1.8} />

                Book Consultation

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-[#D4E4EF] bg-white px-6 py-3 text-[14px] font-bold text-[#102D5F] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E91C8] hover:text-[#2E91C8] sm:text-[15px]"
              >
                Contact Hospital

                <MoveUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="relative mx-auto w-full max-w-[650px] lg:mx-0"
          >
            {/* IMAGE FRAME */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-[#D4E4EF] sm:-right-5 sm:-top-5 sm:rounded-[36px]" />

            <div className="group relative h-[350px] overflow-hidden rounded-[26px] bg-[#DCE8F0] shadow-[0_25px_65px_rgba(16,45,95,0.15)] sm:h-[440px] sm:rounded-[32px] lg:h-[500px] xl:h-[540px]">
              <img
                src="/neuro1.png"
                alt="Medical visualization related to brain, spine and nerve care"
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-[1000ms] group-hover:scale-[1.045]"
              />

              {/* IMAGE GRADIENT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/75 via-transparent to-transparent" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-6 left-5 right-5 flex items-center gap-3 sm:bottom-8 sm:left-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                  <Activity size={25} strokeWidth={1.7} />
                </span>

                <div>
                  <p className="m-0 text-[17px] font-bold text-white sm:text-[19px]">
                    Brain, Spine &amp; Nerve Evaluation
                  </p>

                  <p className="m-0 mt-1 text-[12px] text-white/85 sm:text-[14px]">
                    Assessment • Guidance • Follow-up
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING INFORMATION PANEL */}
            <div className="neurospine-float absolute -bottom-6 -left-2 z-20 flex max-w-[235px] items-center gap-3 rounded-[18px] border border-[#E0EAF2] bg-white px-4 py-4 shadow-[0_18px_45px_rgba(16,45,95,0.15)] sm:-bottom-8 sm:-left-8 sm:max-w-[280px] sm:px-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#E9F6FC] text-[#2E91C8]">
                <Brain size={25} strokeWidth={1.7} />
              </span>

              <div>
                <p className="m-0 text-[14px] font-bold text-[#102D5F] sm:text-[16px]">
                  Brain, Spine &amp; Nerve Care
                </p>

                <p className="m-0 mt-1 text-[12px] leading-[1.5] text-[#64748B] sm:text-[13px]">
                  Clinical Assessment &amp; Guidance
                </p>
              </div>
            </div>

            {/* FLOATING DECORATIVE ICON */}
            <div className="pointer-events-none absolute -right-4 top-[20%] hidden h-[66px] w-[66px] items-center justify-center rounded-full border-[7px] border-[#F7FBFD] bg-[#2E91C8] text-white shadow-lg sm:flex">
              <Brain size={28} strokeWidth={1.7} />
            </div>
          </div>
        </div>

        <div className="h-10 sm:h-12" />
      </div>

      <style>{`
        @keyframes neurospineFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .neurospine-float {
          animation: neurospineFloat 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .neurospine-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NeurospineHero;

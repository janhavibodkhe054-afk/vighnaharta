import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MessageCircle,
  ClipboardPlus,
  Stethoscope,
  FileCheck2,
  Info,
  Phone,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Consultation",
    text: "Discuss your healthcare concern with the treating doctor.",
    icon: MessageCircle,
  },
  {
    no: "02",
    title: "Evaluation",
    text: "Clinical assessment based on individual requirements.",
    icon: ClipboardPlus,
  },
  {
    no: "03",
    title: "Clinical Decision",
    text: "The doctor determines the appropriate next step.",
    icon: Stethoscope,
  },
  {
    no: "04",
    title: "Treatment Plan",
    text: "Care is planned according to clinical requirements.",
    icon: FileCheck2,
  },
];

const TreatmentPlanning = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 45,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      {/* =====================================================
          SECTION 4 — HOW TREATMENT IS PLANNED
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-11 sm:py-12 md:py-14 lg:py-16">
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[180px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#EAF7FC] blur-[110px]" />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "radial-gradient(#2E91C8 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* HEADER */}

          <div
            data-aos="fade-up"
            className="mx-auto max-w-[760px] text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#2E91C8]" />

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
                Treatment Planning
              </span>

              <span className="h-px w-7 bg-[#2E91C8]" />
            </div>

            <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-.7px] text-[#102D5F] sm:text-[36px] md:text-[40px] lg:text-[42px]">
              How Treatment is{" "}
              <span className="text-[#2E91C8]">Planned</span>
            </h2>

            <p className="mx-auto mt-3 max-w-[650px] text-[15px] leading-[1.75] text-[#64748B] sm:text-[16px]">
              A simple clinical process focused on understanding individual
              healthcare needs.
            </p>
          </div>

          {/* DESKTOP FLOW */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative mt-9 hidden md:block"
          >
            {/* LINE */}

            <div className="absolute left-[11%] right-[11%] top-[31px] h-px bg-[#D8EAF1]" />

            <div className="tp-line absolute left-[11%] right-[11%] top-[31px] h-[2px] origin-left bg-gradient-to-r from-[#2E91C8] via-[#72D3EF] to-[#2E91C8]" />

            <span className="tp-signal absolute left-[11%] top-[27px] z-10 h-[9px] w-[9px] rounded-full bg-[#2E91C8] shadow-[0_0_14px_rgba(46,145,200,.7)]" />

            <div className="relative grid grid-cols-4 gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.no}
                    data-aos="fade-up"
                    data-aos-delay={150 + index * 70}
                    className="group text-center"
                  >
                    <div className="relative mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full border-[6px] border-white bg-[#102D5F] text-[#75D5F2] shadow-[0_8px_24px_rgba(16,45,95,.13)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#2E91C8]">
                      <Icon size={19} strokeWidth={1.8} />

                      <span className="tp-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/20" />
                    </div>

                    <span className="mt-4 block text-[10px] font-bold uppercase tracking-[1.4px] text-[#2E91C8]">
                      Step {step.no}
                    </span>

                    <h3 className="mt-1 text-[15px] font-bold text-[#102D5F] lg:text-[16px]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-1.5 max-w-[220px] text-[13px] leading-[1.6] text-[#64748B] lg:text-[14px]">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE FLOW */}

          <div className="relative mt-8 md:hidden">
            <div className="absolute bottom-4 left-[20px] top-4 w-px bg-[#D8EAF1]" />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.no}
                    data-aos="fade-up"
                    data-aos-delay={index * 60}
                    className="relative grid grid-cols-[42px_1fr] gap-4"
                  >
                    <div className="relative z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full border-[4px] border-white bg-[#102D5F] text-[#75D5F2] shadow-md">
                      <Icon size={15} />
                    </div>

                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#2E91C8]">
                        Step {step.no}
                      </span>

                      <h3 className="text-[15px] font-bold text-[#102D5F]">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-[13px] leading-[1.6] text-[#64748B]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NOTE */}

          <div
            data-aos="fade-up"
            className="mx-auto mt-8 flex max-w-[850px] items-start gap-3 rounded-[14px] border border-[#DDEBF1] bg-[#F7FBFD] px-4 py-3 sm:items-center"
          >
            <Info
              size={16}
              className="mt-0.5 shrink-0 text-[#2E91C8] sm:mt-0"
            />

            <p className="text-[13px] leading-[1.65] text-[#64748B] sm:text-[14px]">
              Actual care and treatment depend on the treating doctor&apos;s
              clinical assessment.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — AVAILABILITY NOTE
      ====================================================== */}

      <section className="border-y border-[#DDEBF1] bg-[#F4FAFD]">
        <div
          data-aos="fade-up"
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-4 py-5 sm:px-6 md:flex-row md:items-center md:gap-6 lg:px-8"
        >
          <div className="flex shrink-0 items-center gap-3">
            <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#102D5F] text-[#75D5F2]">
              <Info size={16} />
            </span>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#2E91C8]">
                Important Note
              </span>

              <h3 className="text-[15px] font-bold text-[#102D5F]">
                Treatment Availability
              </h3>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-[#D7E7ED] md:block" />

          <p className="text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
            Treatment and procedure availability may vary depending on clinical
            requirements. Please contact the hospital for current availability
            and appropriate medical guidance.
          </p>
        </div>
      </section>

      

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes tpLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes tpSignal {
          0% {
            left: 11%;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            left: calc(89% - 9px);
            opacity: 0;
          }
        }

        @keyframes tpRing {
          0% {
            transform: scale(.85);
            opacity: .5;
          }

          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        @keyframes tpTopSignal {
          0% {
            left: -160px;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            left: 100%;
            opacity: 0;
          }
        }

        .aos-animate .tp-line {
          animation: tpLine 1.4s ease-out both;
        }

        .tp-signal {
          animation: tpSignal 5s ease-in-out infinite;
        }

        .tp-ring {
          animation: tpRing 2.4s ease-out infinite;
        }

        .tp-top-signal {
          animation: tpTopSignal 5.5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .tp-line,
          .tp-signal,
          .tp-ring,
          .tp-top-signal {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default TreatmentPlanning;
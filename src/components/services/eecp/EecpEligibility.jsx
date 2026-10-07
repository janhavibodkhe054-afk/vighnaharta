import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Activity,
  ArrowRight,
  ClipboardPlus,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const considerations = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Persistent Stable Angina",
    text: "EECP may be considered for selected patients experiencing long-term stable angina symptoms.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Symptoms Despite Treatment",
    text: "It may be evaluated when symptoms continue despite appropriate medical management.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "When Procedures Are Not Suitable",
    text: "For some patients who are not suitable candidates for certain invasive procedures, EECP may be considered after specialist assessment.",
  },
];

const evaluationPoints = [
  "Review of medical history",
  "Assessment of current symptoms",
  "Individual treatment decision",
];

const EecpEligibility = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 40,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#DFF4FC]/75 blur-[110px]" />

        <div className="absolute -right-[200px] bottom-[-80px] h-[470px] w-[470px] rounded-full bg-[#E6F6FB] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#2E91C8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          <div
            data-aos="fade-down"
            className="mb-3 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 rounded-full bg-[#2E91C8]" />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.7px] text-[#2E91C8] sm:text-[15px]">
              Patient Evaluation
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#2E91C8]" />
          </div>

          <h2
            data-aos="fade-up"
            className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
          >
            Who May Be Considered{" "}
            <span className="text-[#2E91C8]">for EECP?</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="80"
            className="mx-auto m-0 mt-4 max-w-[780px] text-[13px] leading-[1.7] text-[#617684] sm:text-[15px]"
          >
            EECP is not automatically suitable for every patient
            with a heart condition. A healthcare professional
            should review the patient&apos;s symptoms, medical
            history and overall clinical condition before
            recommending treatment.
          </p>
        </div>

        {/* =====================================================
            MAIN EXPERIENCE
        ====================================================== */}

        <div className="mt-10 grid items-stretch gap-5 lg:mt-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-6 xl:gap-7">
          {/* =================================================
              LEFT — CLINICAL PATHWAY
          ================================================== */}

          <div
            data-aos="fade-right"
            className="relative overflow-hidden rounded-[24px] border border-[#DCEBF1] bg-white p-5 shadow-[0_18px_60px_rgba(16,45,95,0.065)] sm:rounded-[28px] sm:p-7 lg:p-8"
          >
            {/* DECOR */}

            <div className="pointer-events-none absolute -right-[120px] -top-[120px] h-[330px] w-[330px] rounded-full border border-[#DDF1F8]" />

            <div className="pointer-events-none absolute -right-[65px] -top-[65px] h-[220px] w-[220px] rounded-full border border-[#DDF1F8]" />

            {/* TOP */}

            <div className="relative z-10 flex flex-col gap-4 border-b border-[#E4EEF2] pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px]">
                  Clinical Considerations
                </span>

                <h3 className="m-0 mt-1 text-[23px] font-bold leading-[1.25] tracking-[-0.5px] text-[#102D5F] sm:text-[27px]">
                  EECP Patient Assessment
                </h3>
              </div>

              {/* ANIMATED HEART */}

              <div className="relative flex h-[62px] w-[62px] shrink-0 items-center justify-center">
                <span className="eecp-pulse absolute inset-0 rounded-full border border-[#2E91C8]/25" />

                <span className="eecp-pulse eecp-pulse-delay absolute inset-0 rounded-full border border-[#2E91C8]/20" />

                <span className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
                  <HeartPulse
                    className="h-[23px] w-[23px]"
                    strokeWidth={1.8}
                  />
                </span>
              </div>
            </div>

            {/* =================================================
                TIMELINE
            ================================================== */}

            <div className="relative z-10 mt-7">
              {/* LINE */}

              <div className="absolute bottom-[32px] left-[22px] top-[28px] w-px bg-[#D6E9F1] sm:left-[25px]">
                <span className="eecp-flow absolute left-[-1px] top-0 h-[70px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />
              </div>

              <div className="space-y-4">
                {considerations.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      data-aos="fade-up"
                      data-aos-delay={100 + index * 90}
                      className="group relative flex gap-4 sm:gap-5"
                    >
                      {/* NODE */}

                      <div className="relative z-10 flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-[#E8F6FB] text-[#2E91C8] shadow-[0_5px_18px_rgba(16,45,95,0.10)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2E91C8] group-hover:text-white sm:h-[51px] sm:w-[51px]">
                        <Icon
                          className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* CONTENT */}

                      <div className="min-w-0 flex-1 rounded-[17px] border border-[#E1EDF2] bg-[#FAFDFE] p-4 transition-all duration-500 group-hover:-translate-y-[2px] group-hover:border-[#B8DDEA] group-hover:bg-white group-hover:shadow-[0_14px_35px_rgba(16,45,95,0.065)] sm:p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-[13px] font-bold leading-[1.7] tracking-[1px] text-[#2E91C8] sm:text-[15px]">
                              {item.number}
                            </span>

                            <h4 className="m-0 mt-0.5 text-[18px] font-bold leading-[1.3] text-[#102D5F] sm:text-[20px]">
                              {item.title}
                            </h4>
                          </div>

                          <span className="mt-1 hidden h-[8px] w-[8px] shrink-0 rounded-full bg-[#C7E9F5] transition-all duration-300 group-hover:bg-[#2E91C8] sm:block" />
                        </div>

                        <p className="m-0 mt-2 text-[13px] leading-[1.7] text-[#687D8B] sm:text-[15px]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT
          ================================================== */}

          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="relative overflow-hidden rounded-[24px] bg-[#071B3A] shadow-[0_22px_60px_rgba(7,27,58,0.18)] sm:rounded-[28px]"
          >
            {/* GLOWS */}

            <div className="pointer-events-none absolute -right-[100px] -top-[90px] h-[300px] w-[300px] rounded-full bg-[#2E91C8]/20 blur-[70px]" />

            <div className="pointer-events-none absolute -bottom-[120px] -left-[100px] h-[300px] w-[300px] rounded-full bg-[#55B8E9]/10 blur-[80px]" />

            {/* GRID */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(105,203,242,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(105,203,242,.4) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            <div className="relative z-10 flex h-full flex-col p-5 sm:p-7 lg:p-8">
              {/* ICON */}

              <div className="flex items-center justify-between gap-4">
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.08] text-[#69CBF2] backdrop-blur-md">
                  <Stethoscope
                    className="h-[25px] w-[25px]"
                    strokeWidth={1.7}
                  />
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#69CBF2]/20 bg-[#69CBF2]/10 px-3 py-1.5">
                  <span className="eecp-status-dot h-[7px] w-[7px] rounded-full bg-[#69CBF2]" />

                  <span className="text-[13px] font-semibold leading-[1.7] text-[#8ADCF9] sm:text-[15px]">
                    Clinical Review
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="mt-7">
                <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#69CBF2] sm:text-[15px]">
                  Important
                </span>

                <h3 className="m-0 mt-2 max-w-[430px] text-[25px] font-bold leading-[1.2] tracking-[-0.6px] text-white sm:text-[29px]">
                  Medical Evaluation Comes First
                </h3>

                <p className="m-0 mt-4 max-w-[480px] text-[13px] leading-[1.7] text-white/65 sm:text-[15px]">
                  EECP has specific clinical considerations and
                  may not be appropriate for every patient.
                  Treatment suitability should be decided by a
                  qualified healthcare professional.
                </p>
              </div>

              {/* ECG */}

              <div className="mt-7 overflow-hidden rounded-[15px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[13px] font-semibold leading-[1.7] text-white/70 sm:text-[15px]">
                    Individual Assessment
                  </span>

                  <Activity
                    className="h-[17px] w-[17px] text-[#69CBF2]"
                    strokeWidth={1.8}
                  />
                </div>

                <svg
                  viewBox="0 0 620 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    d="M0 48H85L102 48L118 29L138 67L160 12L185 76L210 48H295L312 48L329 34L349 61L371 39L390 48H468L486 48L501 27L521 69L543 17L565 72L584 48H620"
                    stroke="#69CBF2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="eecp-ecg-line"
                  />
                </svg>
              </div>

              {/* CHECKLIST */}

              <div className="mt-6 space-y-3">
                {evaluationPoints.map((point, index) => (
                  <div
                    key={point}
                    data-aos="fade-left"
                    data-aos-delay={220 + index * 70}
                    className="group flex items-center gap-3 rounded-[13px] border border-white/[0.08] bg-white/[0.045] px-3.5 py-3 transition-all duration-300 hover:border-[#69CBF2]/25 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#69CBF2]/12">
                      <ShieldCheck
                        className="h-[14px] w-[14px] text-[#69CBF2]"
                        strokeWidth={2}
                      />
                    </span>

                    <span className="text-[13px] font-medium leading-[1.7] text-white/75 sm:text-[15px]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex-1" />

              {/* NOTE */}

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="m-0 text-[13px] leading-[1.7] text-white/50 sm:text-[15px]">
                  Final treatment decisions depend on individual
                  clinical assessment and medical guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CONSULTATION CTA
        ====================================================== */}

        <div
          data-aos="zoom-in-up"
          data-aos-delay="80"
          className="relative mt-6 overflow-hidden rounded-[22px] border border-[#D9EAF1] bg-white shadow-[0_16px_45px_rgba(16,45,95,0.06)]"
        >
          {/* ACCENT */}

          <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-gradient-to-b from-[#2E91C8] to-[#69CBF2]" />

          <div className="pointer-events-none absolute -right-[70px] top-1/2 h-[190px] w-[190px] -translate-y-1/2 rounded-full bg-[#E8F7FC] blur-[55px]" />

          <div className="relative z-10 flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-6">
            <div className="flex items-start gap-4">
              <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#EAF7FC] text-[#2E91C8]">
                <ClipboardPlus
                  className="h-[22px] w-[22px]"
                  strokeWidth={1.8}
                />

                <span className="absolute -right-1 -top-1 h-[10px] w-[10px] rounded-full border-2 border-white bg-[#55B8E9]" />
              </div>

              <div>
                <h3 className="m-0 text-[19px] font-bold leading-[1.3] text-[#102D5F] sm:text-[21px]">
                  Is EECP Appropriate for You?
                </h3>

                <p className="m-0 mt-1 max-w-[650px] text-[13px] leading-[1.7] text-[#687D8B] sm:text-[15px]">
                  Contact Vighnaharta Hospital for consultation
                  and appropriate medical guidance regarding
                  EECP treatment.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#102D5F] to-[#2E91C8] px-6 py-2.5 text-[13px] font-bold leading-[1.7] text-white shadow-[0_12px_30px_rgba(16,45,95,0.18)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_17px_38px_rgba(16,45,95,0.26)] sm:text-[15px] md:w-auto"
            >
              Contact Hospital

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes eecpPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }

          70% {
            transform: scale(1.45);
            opacity: 0;
          }

          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        .eecp-pulse {
          animation: eecpPulse 2.4s ease-out infinite;
        }

        .eecp-pulse-delay {
          animation-delay: 1.2s;
        }

        @keyframes eecpFlow {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(250px);
            opacity: 0;
          }
        }

        .eecp-flow {
          animation: eecpFlow 4s linear infinite;
        }

        @keyframes eecpEcg {
          0% {
            stroke-dashoffset: 1300;
          }

          100% {
            stroke-dashoffset: 0;
          }
        }

        .eecp-ecg-line {
          stroke-dasharray: 1300;
          stroke-dashoffset: 1300;
          animation: eecpEcg 5s linear infinite;
        }

        @keyframes eecpStatus {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(105, 203, 242, 0.5);
          }

          50% {
            box-shadow: 0 0 0 7px rgba(105, 203, 242, 0);
          }
        }

        .eecp-status-dot {
          animation: eecpStatus 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .eecp-pulse,
          .eecp-flow,
          .eecp-ecg-line,
          .eecp-status-dot {
            animation: none !important;
          }

          .eecp-ecg-line {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default EecpEligibility;
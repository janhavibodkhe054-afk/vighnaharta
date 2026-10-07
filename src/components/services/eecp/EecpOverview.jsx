import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const EecpOverview = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 30,
    });
  }, []);

  const steps = [
    {
      number: "01",
      title: "Compression Cuffs",
      text: "Specialized cuffs are placed around the lower body during the treatment session.",
    },
    {
      number: "02",
      title: "Timed Inflation & Deflation",
      text: "The cuffs inflate and deflate in coordination with the patient’s cardiac cycle.",
    },
    {
      number: "03",
      title: "Blood Flow Support",
      text: "This synchronized process is designed to support circulation and blood flow toward the heart.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20">
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -left-[220px] top-[80px] h-[440px] w-[440px] rounded-full bg-[#EAF7FC]/80 blur-[110px]" />

      <div className="pointer-events-none absolute -right-[220px] bottom-[-120px] h-[450px] w-[450px] rounded-full bg-[#EDF8FC] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            TOP
        ====================================================== */}

        <div className="grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
          {/* =================================================
              LEFT VISUAL
          ================================================== */}

          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[560px] lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#071B3A] to-[#102D5F] px-5 py-8 shadow-[0_24px_70px_rgba(16,45,95,0.15)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:min-h-[430px] lg:px-9 lg:py-11">
              {/* DECORATION */}

              <div className="pointer-events-none absolute -right-[80px] -top-[90px] h-[260px] w-[260px] rounded-full border border-[#55B8E9]/20" />

              <div className="pointer-events-none absolute -right-[40px] -top-[50px] h-[180px] w-[180px] rounded-full border border-[#55B8E9]/20" />

              <div className="pointer-events-none absolute bottom-[-100px] left-[-80px] h-[260px] w-[260px] rounded-full bg-[#2E91C8]/15 blur-[60px]" />

              {/* ICON */}

              <div className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-[17px] border border-white/10 bg-white/[0.08] text-[#69CBF2] backdrop-blur-md sm:h-[64px] sm:w-[64px]">
                <HeartPulse
                  className="h-[27px] w-[27px]"
                  strokeWidth={1.7}
                />
              </div>

              {/* TEXT */}

              <div className="relative z-10 mt-7">
                <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.7px] text-[#69CBF2] sm:text-[15px]">
                  EECP Therapy
                </span>

                <h3 className="m-0 mt-2 max-w-[390px] text-[25px] font-bold leading-[1.2] tracking-[-0.6px] text-white sm:text-[29px] lg:text-[31px]">
                  A Non-Invasive Treatment Approach
                </h3>

                <p className="m-0 mt-4 max-w-[420px] text-[13px] leading-[1.7] text-white/65 sm:text-[15px]">
                  EECP is performed externally using inflatable
                  cuffs placed around the lower body. It does not
                  involve a surgical incision.
                </p>
              </div>

              {/* ECG VISUAL */}

              <div className="relative z-10 mt-8 overflow-hidden rounded-[16px] border border-white/10 bg-[#06182F]/45 px-4 py-5">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Activity
                      className="h-[17px] w-[17px] text-[#69CBF2]"
                      strokeWidth={1.8}
                    />

                    <span className="text-[13px] font-semibold leading-[1.7] text-white/80 sm:text-[15px]">
                      Cardiac-Synchronized Process
                    </span>
                  </div>

                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#69CBF2] shadow-[0_0_12px_rgba(105,203,242,0.8)]" />
                </div>

                <svg
                  viewBox="0 0 600 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    d="M0 49H80L100 49L116 27L136 68L158 13L184 76L208 49H286L304 49L320 34L341 61L362 39L380 49H452L469 49L484 28L503 68L525 19L546 70L565 49H600"
                    stroke="#69CBF2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="overview-ecg"
                  />
                </svg>
              </div>
            </div>

            {/* FLOATING BADGE */}

            <div className="absolute -bottom-5 right-3 z-20 flex items-center gap-3 rounded-[15px] border border-[#DCEBF2] bg-white px-4 py-3 shadow-[0_14px_35px_rgba(16,45,95,0.12)] sm:right-6 lg:-right-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
                <ShieldCheck
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span className="block text-[13px] font-bold leading-[1.5] text-[#102D5F] sm:text-[15px]">
                  Non-Invasive
                </span>

                <span className="block text-[13px] leading-[1.5] text-[#718390] sm:text-[15px]">
                  External treatment
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="pt-4 lg:pt-0"
          >
            {/* LABEL */}

            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-[#2E91C8]" />

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.7px] text-[#2E91C8] sm:text-[15px]">
                Understanding EECP
              </span>
            </div>

            {/* HEADING */}

            <h2 className="m-0 max-w-[650px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
              What is{" "}
              <span className="text-[#2E91C8]">
                EECP Treatment?
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="m-0 mt-5 max-w-[680px] text-[13px] leading-[1.7] text-[#607381] sm:text-[15px]">
              EECP stands for{" "}
              <strong className="font-semibold text-[#334B5A]">
                Enhanced External Counterpulsation
              </strong>
              . It is a non-invasive treatment in which
              inflatable cuffs are placed around the lower body
              and operated in coordination with the cardiac
              cycle.
            </p>

            <p className="m-0 mt-3 max-w-[680px] text-[13px] leading-[1.7] text-[#607381] sm:text-[15px]">
              The synchronized inflation and deflation of these
              cuffs is intended to support circulation and
              increase blood flow toward the heart. Whether EECP
              is appropriate for a patient should be determined
              after medical evaluation.
            </p>

            {/* MEDICAL NOTE */}

            <div className="mt-6 flex max-w-[680px] items-start gap-3 rounded-[16px] border border-[#DCEBF2] bg-[#F5FAFD] p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#2E91C8] shadow-[0_5px_18px_rgba(16,45,95,0.07)]">
                <Stethoscope
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </div>

              <p className="m-0 text-[13px] leading-[1.7] text-[#536B79] sm:text-[15px]">
                EECP treatment should be considered based on
                appropriate medical assessment and individual
                clinical requirements.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            HOW EECP WORKS
        ====================================================== */}

        <div
          data-aos="fade-up"
          className="mt-14 border-t border-[#DFECF1] pt-9 sm:mt-16 sm:pt-10 lg:mt-[72px]"
        >
          <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.6px] text-[#2E91C8] sm:text-[15px]">
                Treatment Process
              </span>

              <h3 className="m-0 mt-1 text-[24px] font-bold leading-[1.25] tracking-[-0.5px] text-[#102D5F] sm:text-[27px] lg:text-[30px]">
                How EECP Works
              </h3>
            </div>

            <p className="m-0 max-w-[470px] text-[13px] leading-[1.7] text-[#718390] sm:text-[15px] md:text-right">
              A synchronized external process designed to
              support circulation during treatment.
            </p>
          </div>

          {/* STEPS */}

          <div className="grid gap-3 md:grid-cols-3 md:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className={`relative ${
                  index !== steps.length - 1
                    ? "md:border-r md:border-[#DCE9EF]"
                    : ""
                }`}
              >
                <div className="group h-full rounded-[18px] border border-[#E0ECF1] bg-[#FAFDFE] p-5 transition-all duration-300 hover:border-[#BBDDEA] hover:bg-white hover:shadow-[0_14px_35px_rgba(16,45,95,0.07)] md:rounded-none md:border-0 md:bg-transparent md:px-7 md:py-3 md:shadow-none md:first:pl-0">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-[13px] font-bold tracking-[1px] text-[#2E91C8] sm:text-[15px]">
                      STEP {step.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#C6E8F4] transition-all duration-300 group-hover:bg-[#2E91C8]" />
                  </div>

                  <h4 className="m-0 text-[19px] font-bold leading-[1.3] text-[#102D5F] sm:text-[21px]">
                    {step.title}
                  </h4>

                  <p className="m-0 mt-2 text-[13px] leading-[1.7] text-[#687D8B] sm:text-[15px]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes overviewEcg {
          0% {
            stroke-dashoffset: 1200;
          }

          100% {
            stroke-dashoffset: 0;
          }
        }

        .overview-ecg {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: overviewEcg 5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .overview-ecg {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default EecpOverview;
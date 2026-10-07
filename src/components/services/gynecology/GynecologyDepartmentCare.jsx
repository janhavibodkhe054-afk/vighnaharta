import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Stethoscope,
  ClipboardPlus,
  HeartPulse,
  Activity,
  Info,
} from "lucide-react";

const careSteps = [
  {
    no: "01",
    title: "Medical Consultation",
    subtitle: "Personalized Discussion & Medical Guidance",
    description:
      "A consultation provides an opportunity to discuss women’s health concerns with the treating doctor and receive appropriate medical guidance based on individual healthcare needs.",
    focus: "Consultation • Medical Guidance",
    icon: Stethoscope,
  },
  {
    no: "02",
    title: "Clinical Evaluation",
    subtitle: "Understanding Individual Healthcare Needs",
    description:
      "Clinical evaluation helps the treating doctor understand the patient’s concern and assess the appropriate next steps in care based on individual medical requirements.",
    focus: "Evaluation • Clinical Assessment",
    icon: ClipboardPlus,
  },
  {
    no: "03",
    title: "Appropriate Treatment Guidance",
    subtitle: "Care Planned According to Clinical Requirements",
    description:
      "Based on consultation and clinical evaluation, the treating doctor can guide the patient regarding an appropriate treatment approach according to the individual condition and medical requirements.",
    focus: "Treatment Guidance • Individual Care",
    icon: HeartPulse,
  },
  {
    no: "04",
    title: "Follow-up Care as Advised",
    subtitle: "Continued Medical Guidance When Required",
    description:
      "Follow-up consultation may be advised by the treating doctor to review the patient’s care and provide further medical guidance when appropriate.",
    focus: "Follow-up • Continued Guidance",
    icon: Activity,
  },
];

const GynecologyDepartmentCare = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-11 sm:py-12 md:py-14 lg:py-16">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[190px] top-[20%] h-[380px] w-[380px] rounded-full bg-[#E9F7FC] blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[-150px] h-[390px] w-[390px] rounded-full bg-[#EDF9FC] blur-[110px]" />

        <svg
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-50"
        >
          <path
            className="gdc-bg-path"
            d="M-80 620 C300 470 480 700 800 540 C1080 400 1230 480 1510 330"
            fill="none"
            stroke="#E2F1F6"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[850px] text-center">
          <div
            data-aos="fade-up"
            className="mb-3 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2E91C8]" />
            <span className="h-[6px] w-[6px] rotate-45 bg-[#69CBF2]" />

            <span className="text-[11px] font-bold uppercase tracking-[2.2px] text-[#2E91C8] sm:text-[12px]">
              Department Care
            </span>

            <span className="h-[6px] w-[6px] rotate-45 bg-[#69CBF2]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2E91C8]" />
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="text-[30px] font-bold leading-[1.13] tracking-[-.9px] text-[#102D5F] sm:text-[36px] md:text-[40px] lg:text-[43px]"
          >
            Thoughtful Care Through Every Step of{" "}
            <span className="relative inline-block text-[#2E91C8]">
              Your Consultation
              <svg
                viewBox="0 0 280 8"
                preserveAspectRatio="none"
                className="absolute -bottom-[6px] left-0 h-[6px] w-full"
              >
                <path
                  className="gdc-title-line"
                  d="M2 5 C75 1 190 8 278 3"
                  fill="none"
                  stroke="#78D4EF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="130"
            className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.8] text-[#64748B] sm:text-[16px] lg:text-[17px]"
          >
            Dedicated consultation and appropriate care for women&apos;s health
            needs, with each step guided by individual clinical evaluation and
            medical requirements.
          </p>
        </div>

        {/* =====================================================
            DESKTOP JOURNEY
        ===================================================== */}
        <div className="relative mt-11 hidden min-h-[500px] lg:block">
          {/* FLOWING PATH */}
          <svg
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {/* BACK PATH */}
            <path
              d="M80 260 C170 260 180 135 310 135 C445 135 450 365 590 365 C725 365 735 135 870 135 C1000 135 1010 260 1120 260"
              fill="none"
              stroke="#E2EEF3"
              strokeWidth="2"
            />

            {/* ANIMATED PATH */}
            <path
              className="gdc-care-path"
              d="M80 260 C170 260 180 135 310 135 C445 135 450 365 590 365 C725 365 735 135 870 135 C1000 135 1010 260 1120 260"
              fill="none"
              stroke="url(#gdcGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <defs>
              <linearGradient
                id="gdcGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#2E91C8" />
                <stop offset="50%" stopColor="#72D2EF" />
                <stop offset="100%" stopColor="#2E91C8" />
              </linearGradient>
            </defs>
          </svg>

          {/* MOVING SIGNAL */}
          <span className="gdc-moving-signal absolute left-[6.5%] top-[51.5%] z-20 h-[8px] w-[8px] rounded-full bg-[#2E91C8] shadow-[0_0_15px_rgba(46,145,200,.8)]" />

          {/* STEP 01 */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="absolute left-[1%] top-[195px] w-[23%]"
          >
            <CareStep
              item={careSteps[0]}
              position="bottom"
            />
          </div>

          {/* STEP 02 */}
          <div
            data-aos="fade-down"
            data-aos-delay="240"
            className="absolute left-[26%] top-[28px] w-[23%]"
          >
            <CareStep
              item={careSteps[1]}
              position="top"
            />
          </div>

          {/* STEP 03 */}
          <div
            data-aos="fade-up"
            data-aos-delay="330"
            className="absolute bottom-[15px] left-[51%] w-[23%]"
          >
            <CareStep
              item={careSteps[2]}
              position="bottom"
            />
          </div>

          {/* STEP 04 */}
          <div
            data-aos="fade-down"
            data-aos-delay="420"
            className="absolute right-[1%] top-[28px] w-[23%]"
          >
            <CareStep
              item={careSteps[3]}
              position="top"
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}
        <div className="relative mx-auto mt-9 max-w-[720px] lg:hidden">
          {/* LINE */}
          <div className="absolute bottom-6 left-[24px] top-6">
            <span className="absolute inset-y-0 left-0 w-px bg-[#DCEBF1]" />
            <span className="gdc-mobile-path absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-[#2E91C8] via-[#72D2EF] to-[#C4E7F2]" />
            <span className="gdc-mobile-signal absolute left-[-3px] top-0 h-[7px] w-[7px] rounded-full bg-[#2E91C8] shadow-[0_0_12px_rgba(46,145,200,.7)]" />
          </div>

          <div className="space-y-4">
            {careSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.no}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  className="relative flex gap-4"
                >
                  {/* NODE */}
                  <div className="relative z-10 mt-3 flex h-[49px] w-[49px] shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-[#102D5F] text-[#83DCF8] shadow-[0_8px_20px_rgba(16,45,95,.14)]">
                    <Icon size={17} strokeWidth={1.7} />

                    <span className="gdc-node-ring absolute inset-[-6px] rounded-full border border-[#2E91C8]/20" />
                  </div>

                  {/* CONTENT */}
                  <div className="group relative flex-1 overflow-hidden rounded-[18px] border border-[#DFECF1] bg-[#F9FCFD] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#BBDDE9] hover:bg-white hover:shadow-[0_12px_30px_rgba(16,45,95,.07)] sm:px-5 sm:py-5">
                    <span className="absolute right-3 top-1 text-[48px] font-black leading-none text-[#102D5F]/[0.035]">
                      {item.no}
                    </span>

                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#2E91C8]">
                          Step {item.no}
                        </span>

                        <span className="h-px w-6 bg-[#B9DDE9]" />
                      </div>

                      <h3 className="mt-1.5 pr-8 text-[16px] font-bold leading-[1.35] text-[#102D5F] sm:text-[17px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[12px] font-semibold leading-[1.5] text-[#2E91C8] sm:text-[13px]">
                        {item.subtitle}
                      </p>

                      <p className="mt-2.5 text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
                        {item.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 border-t border-[#E5EEF2] pt-3">
                        <span className="h-[5px] w-[5px] rounded-full bg-[#69CBF2]" />

                        <span className="text-[9px] font-bold uppercase tracking-[1px] text-[#8295A4]">
                          {item.focus}
                        </span>
                      </div>
                    </div>

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#2E91C8] to-[#7BD8F2] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mx-auto mt-8 max-w-[880px]"
        >
          <div className="flex items-start gap-3 rounded-[16px] border border-[#DDECF1] bg-[#F7FBFD] px-4 py-3.5 sm:items-center sm:px-5">
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white text-[#2E91C8] shadow-[0_5px_15px_rgba(16,45,95,.06)]">
              <Info size={15} strokeWidth={1.8} />
            </span>

            <p className="text-[12px] leading-[1.7] text-[#64748B] sm:text-[13px]">
              Every patient&apos;s healthcare needs may be different.
              Consultation, evaluation, treatment guidance and follow-up care
              are determined according to individual clinical requirements.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gdcTitleLine {
          0% {
            stroke-dasharray: 350;
            stroke-dashoffset: 350;
          }
          100% {
            stroke-dasharray: 350;
            stroke-dashoffset: 0;
          }
        }

        @keyframes gdcPathDraw {
          0% {
            stroke-dasharray: 1800;
            stroke-dashoffset: 1800;
          }
          100% {
            stroke-dasharray: 1800;
            stroke-dashoffset: 0;
          }
        }

        @keyframes gdcBgPath {
          0% {
            stroke-dasharray: 1600;
            stroke-dashoffset: 1600;
          }
          100% {
            stroke-dasharray: 1600;
            stroke-dashoffset: 0;
          }
        }

        @keyframes gdcNodeRing {
          0% {
            transform: scale(.8);
            opacity: .55;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes gdcNodeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes gdcMobilePath {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }

        @keyframes gdcMobileSignal {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: calc(100% - 7px);
            opacity: 0;
          }
        }

        @keyframes gdcPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(46,145,200,.18);
          }
          50% {
            box-shadow: 0 0 0 9px rgba(46,145,200,0);
          }
        }

        .aos-animate .gdc-title-line {
          animation: gdcTitleLine 1.2s ease-out .25s both;
        }

        .aos-animate .gdc-care-path {
          animation: gdcPathDraw 2.1s ease-out .25s both;
        }

        .gdc-bg-path {
          animation: gdcBgPath 3s ease-out both;
        }

        .gdc-mobile-path {
          height: 100%;
          animation: gdcMobilePath 1.6s ease-out both;
        }

        .gdc-mobile-signal {
          animation: gdcMobileSignal 5s ease-in-out infinite;
        }

        .gdc-node-ring {
          animation: gdcNodeRing 2.4s ease-out infinite;
        }

        .gdc-step-node {
          animation: gdcNodeFloat 4.5s ease-in-out infinite;
        }

        .gdc-moving-signal {
          animation: gdcPulse 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .gdc-title-line,
          .gdc-care-path,
          .gdc-bg-path,
          .gdc-mobile-path,
          .gdc-mobile-signal,
          .gdc-node-ring,
          .gdc-step-node,
          .gdc-moving-signal {
            animation: none !important;
          }

          .gdc-mobile-path {
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
};

const CareStep = ({ item, position }) => {
  const Icon = item.icon;

  return (
    <div className="group relative">
      {/* NUMBER + NODE */}
      <div
        className={`mb-3 flex items-center gap-3 ${
          position === "bottom" ? "" : "flex-row-reverse justify-end"
        }`}
      >
        <div className="gdc-step-node relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-[#102D5F] text-[#82DCF8] shadow-[0_9px_24px_rgba(16,45,95,.14)]">
          <Icon size={18} strokeWidth={1.7} />

          <span className="gdc-node-ring absolute inset-[-6px] rounded-full border border-[#2E91C8]/20" />
        </div>

        <div>
          <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#2E91C8]">
            Step {item.no}
          </span>

          <div className="mt-1 h-px w-9 bg-gradient-to-r from-[#69CBF2] to-transparent" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative overflow-hidden rounded-[18px] border border-[#E0EDF2] bg-white p-4 shadow-[0_10px_30px_rgba(16,45,95,.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#BBDDE9] group-hover:shadow-[0_16px_35px_rgba(16,45,95,.08)]">
        <span className="absolute right-2 top-0 text-[52px] font-black leading-none text-[#102D5F]/[0.025]">
          {item.no}
        </span>

        <div className="relative">
          <h3 className="pr-4 text-[16px] font-bold leading-[1.35] text-[#102D5F]">
            {item.title}
          </h3>

          <p className="mt-1.5 text-[11px] font-semibold leading-[1.5] text-[#2E91C8]">
            {item.subtitle}
          </p>

          <p className="mt-2 text-[12px] leading-[1.65] text-[#64748B] xl:text-[13px]">
            {item.description}
          </p>

          <div className="mt-3 flex items-center gap-2 border-t border-[#E7EFF3] pt-2.5">
            <span className="h-[5px] w-[5px] rounded-full bg-[#69CBF2]" />

            <span className="text-[8px] font-bold uppercase tracking-[.9px] text-[#8395A4] xl:text-[9px]">
              {item.focus}
            </span>
          </div>
        </div>

        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#2E91C8] to-[#78D5EF] transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
};

export default GynecologyDepartmentCare;
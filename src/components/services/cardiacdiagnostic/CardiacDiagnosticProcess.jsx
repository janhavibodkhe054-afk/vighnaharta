import React, { useEffect } from "react";
import {
  Stethoscope,
  ClipboardList,
  Activity,
  FileSearch,
  HeartHandshake,
  HeartPulse,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const processSteps = [
  {
    number: "01",
    title: "Medical Consultation",
    description:
      "Discussion of symptoms, history and relevant cardiovascular risk factors.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Test Recommendation",
    description:
      "Selection of appropriate investigations by the treating doctor.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Diagnostic Testing",
    description:
      "Performance of the recommended investigation.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Report Interpretation",
    description:
      "Clinical review of findings in the context of the patient's health.",
    icon: FileSearch,
  },
  {
    number: "05",
    title: "Further Medical Guidance",
    description:
      "Discussion of follow-up, treatment or referral where required.",
    icon: HeartHandshake,
  },
];

const CardiacDiagnosticProcess = () => {
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
    <section className="relative isolate overflow-hidden bg-[#071B3A] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#102D5F] via-[#0B2850] to-[#06162D]" />

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#2E91C8]/15 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#55B8E9]/10 blur-[100px]" />

      {/* MEDICAL GRID TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#8ADCF9 1px, transparent 1px), linear-gradient(90deg, #8ADCF9 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <div className="mx-auto max-w-[900px] text-center">
          <div
            data-aos="fade-up"
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#69CBF2]/25 bg-[#69CBF2]/10 px-4 py-2"
          >
            <Activity
              size={16}
              strokeWidth={1.8}
              className="text-[#8ADCF9]"
            />

            <span className="text-[13px] font-bold uppercase tracking-[1.4px] text-[#8ADCF9] sm:text-[15px]">
              How Cardiac Diagnostic Testing Works
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[36px] lg:text-[42px]"
          >
            From Medical Advice to{" "}
            <span className="text-[#69CBF2]">
              Clinical Interpretation
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mx-auto mt-5 max-w-[770px] text-[14px] leading-[1.85] text-[#C6D8E8] sm:text-[16px]"
          >
            Cardiac investigations are selected according to the
            patient's medical needs and reviewed alongside other
            clinical findings.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL ECG PATHWAY */}
        <div className="relative mt-14 hidden lg:block">
          {/* CONNECTING ECG LINE */}
          <div
            data-aos="fade-up"
            className="pointer-events-none absolute left-[10%] right-[10%] top-[54px] h-[110px]"
          >
            <svg
              viewBox="0 0 1000 110"
              preserveAspectRatio="none"
              className="h-full w-full overflow-visible"
              aria-hidden="true"
            >
              {/* STATIC GUIDE LINE */}
              <path
                d="M0 55 H190 L205 55 L220 38 L237 75 L255 55 H440 L455 55 L470 18 L490 100 L510 55 H690 L705 55 L720 38 L737 75 L755 55 H1000"
                fill="none"
                stroke="#69CBF2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.18"
                vectorEffect="non-scaling-stroke"
              />

              {/* ANIMATED ECG LINE */}
              <path
                d="M0 55 H190 L205 55 L220 38 L237 75 L255 55 H440 L455 55 L470 18 L490 100 L510 55 H690 L705 55 L720 38 L737 75 L755 55 H1000"
                fill="none"
                stroke="#69CBF2"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                className="cardiac-process-ecg"
              />
            </svg>
          </div>

          {/* FIVE STEPS */}
          <div className="relative z-10 grid grid-cols-5 gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  className="group flex flex-col items-center text-center"
                >
                  {/* STEP NUMBER */}
                  <span className="mb-5 text-[13px] font-bold tracking-[2px] text-[#8ADCF9]">
                    STEP {step.number}
                  </span>

                  {/* ICON NODE */}
                  <div className="relative flex h-[108px] w-[108px] items-center justify-center rounded-full border-2 border-[#69CBF2]/45 bg-[#0D3058] shadow-[0_0_0_9px_#0B2850] transition-all duration-500 group-hover:scale-110 group-hover:border-[#69CBF2] group-hover:bg-[#2E91C8] group-hover:shadow-[0_0_35px_rgba(105,203,242,0.25)]">
                    <Icon
                      size={37}
                      strokeWidth={1.55}
                      className="text-[#8ADCF9] transition-colors duration-300 group-hover:text-white"
                    />

                    {/* SMALL NODE DOT */}
                    <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-[3px] border-[#0D3058] bg-[#69CBF2]" />
                  </div>

                  {/* VERTICAL CONNECTOR */}
                  <div className="mt-3 h-9 w-px bg-gradient-to-b from-[#69CBF2]/70 to-transparent" />

                  {/* STEP CONTENT */}
                  <h3 className="m-0 mt-2 max-w-[230px] text-[18px] font-bold leading-[1.35] text-white xl:text-[19px]">
                    {step.title}
                  </h3>

                  <p className="m-0 mt-3 max-w-[225px] text-[13px] leading-[1.75] text-[#B8D0E2] xl:text-[14px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET VERTICAL PATHWAY */}
        <div className="relative mx-auto mt-11 max-w-[760px] lg:hidden">
          {/* VERTICAL LINE */}
          <div className="pointer-events-none absolute bottom-10 left-[30px] top-9 w-[2px] overflow-hidden rounded-full bg-[#69CBF2]/20 sm:left-[36px]">
            <div className="cardiac-process-vertical-line h-full w-full bg-gradient-to-b from-[#69CBF2] via-[#8ADCF9] to-[#69CBF2]" />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 65}
                  className="group relative flex items-start gap-5 sm:gap-7"
                >
                  {/* ICON NODE */}
                  <div className="relative z-10 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border-2 border-[#69CBF2]/55 bg-[#0D3058] text-[#8ADCF9] shadow-[0_0_0_6px_#0B2850] transition-colors duration-300 group-hover:bg-[#2E91C8] group-hover:text-white sm:h-[74px] sm:w-[74px]">
                    <Icon
                      size={27}
                      strokeWidth={1.7}
                      className="sm:h-[31px] sm:w-[31px]"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 pt-1 sm:pt-2">
                    <span className="text-[12px] font-bold tracking-[1.5px] text-[#8ADCF9] sm:text-[13px]">
                      STEP {step.number}
                    </span>

                    <h3 className="m-0 mt-1.5 text-[18px] font-bold leading-[1.4] text-white sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="m-0 mt-2 max-w-[580px] text-[14px] leading-[1.8] text-[#B8D0E2] sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-12 flex max-w-[830px] items-start justify-center gap-3 border-t border-white/15 pt-7 sm:items-center"
        >
          <HeartPulse
            size={23}
            strokeWidth={1.7}
            className="mt-0.5 shrink-0 text-[#8ADCF9] sm:mt-0"
          />

          <p className="m-0 text-[14px] leading-[1.8] text-[#C6D8E8] sm:text-[15px]">
            Diagnostic findings are interpreted together with
            the patient's symptoms, medical history and
            clinical assessment.
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes cardiacProcessECG {
          0% {
            stroke-dashoffset: 1600;
            opacity: 0.25;
          }

          65% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 0.75;
          }
        }

        .cardiac-process-ecg {
          stroke-dasharray: 1600;
          stroke-dashoffset: 1600;
          animation: cardiacProcessECG 6s ease-in-out infinite;
        }

        @keyframes cardiacProcessVertical {
          0% {
            transform: translateY(-100%);
          }

          100% {
            transform: translateY(100%);
          }
        }

        .cardiac-process-vertical-line {
          animation: cardiacProcessVertical 5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cardiac-process-ecg,
          .cardiac-process-vertical-line {
            animation: none !important;
          }

          .cardiac-process-ecg {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CardiacDiagnosticProcess;
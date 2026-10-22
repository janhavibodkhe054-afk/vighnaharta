import React, { useEffect } from "react";
import {
  HeartPulse,
  ClipboardList,
  Activity,
  Stethoscope,
  ShieldCheck,
  CalendarCheck2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    number: "01",
    title: "Medical History Review",
    icon: ClipboardList,
    position: "top",
  },
  {
    number: "02",
    title: "Risk Factor Evaluation",
    icon: Activity,
    position: "right",
  },
  {
    number: "03",
    title: "Relevant Diagnostic Assessment",
    icon: Stethoscope,
    position: "bottomRight",
  },
  {
    number: "04",
    title: "Individual Prevention Plan",
    icon: ShieldCheck,
    position: "bottomLeft",
  },
  {
    number: "05",
    title: "Follow-up as Advised",
    icon: CalendarCheck2,
    position: "left",
  },
];

const desktopPositions = {
  top: "left-1/2 top-[3%] -translate-x-1/2",
  right: "right-[1%] top-[29%]",
  bottomRight: "right-[13%] bottom-[2%]",
  bottomLeft: "left-[13%] bottom-[2%]",
  left: "left-[1%] top-[29%]",
};

const PreventiveCardiologyRiskProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 35,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#071B3A] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#102D5F] via-[#0A2447] to-[#06162D]" />

      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#2E91C8]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#55B8E9]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <div className="mx-auto max-w-[900px] text-center">
          <div
            data-aos="fade-up"
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#69CBF2]/25 bg-[#69CBF2]/10 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#69CBF2]" />

            <span className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#8ADCF9] sm:text-[15px]">
              Heart Risk Assessment Process
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[36px] lg:text-[42px]"
          >
            Understanding Your{" "}
            <span className="text-[#69CBF2]">
              Cardiovascular Risk
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="140"
            className="mx-auto mt-5 max-w-[760px] text-[14px] leading-[1.85] text-[#C6D8E8] sm:text-[16px]"
          >
            Preventive care begins with understanding the
            patient&apos;s existing health conditions and
            individual risk profile.
          </p>
        </div>

        {/* DESKTOP CIRCULAR PATHWAY */}
        <div
          data-aos="zoom-in"
          className="relative mx-auto mt-12 hidden h-[660px] max-w-[1000px] lg:block"
        >
          {/* CIRCULAR PATH */}
          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#69CBF2]/35" />

          <div className="cardiology-risk-orbit absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border-t-[3px] border-[#69CBF2] border-r-transparent border-b-transparent border-l-transparent" />

          {/* CENTRAL HEART */}
          <div className="absolute left-1/2 top-1/2 flex h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#69CBF2]/30 bg-[#0D3058] shadow-[0_0_70px_rgba(46,145,200,0.18)]">
            <div className="cardiology-heart-pulse flex h-[105px] w-[105px] items-center justify-center rounded-full bg-[#2E91C8]/15 text-[#8ADCF9]">
              <HeartPulse size={64} strokeWidth={1.25} />
            </div>

            <p className="m-0 mt-3 text-[19px] font-bold text-white">
              Heart Health
            </p>

            <p className="m-0 mt-1 text-[13px] text-[#AFC9DC]">
              Risk Assessment
            </p>
          </div>

          {/* FIVE STEPS */}
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`group absolute flex w-[235px] flex-col items-center text-center ${desktopPositions[step.position]}`}
              >
                <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-[#69CBF2]/60 bg-[#0D3058] text-[#8ADCF9] shadow-[0_0_0_8px_#0A2447] transition-all duration-300 group-hover:scale-110 group-hover:border-[#69CBF2] group-hover:bg-[#2E91C8] group-hover:text-white">
                  <Icon size={30} strokeWidth={1.7} />

                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#69CBF2] text-[12px] font-bold text-[#071B3A]">
                    {step.number}
                  </span>
                </div>

                <h3 className="m-0 mt-4 max-w-[220px] text-[17px] font-bold leading-[1.4] text-white">
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* MOBILE / TABLET PROCESS */}
        <div className="relative mx-auto mt-10 max-w-[650px] lg:hidden">
          <div className="mb-9 flex justify-center">
            <div className="cardiology-heart-pulse flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border border-[#69CBF2]/35 bg-[#0D3058] text-[#8ADCF9]">
              <HeartPulse size={56} strokeWidth={1.4} />

              <span className="mt-2 text-[14px] font-bold text-white">
                Heart Health
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-9 left-[29px] top-8 w-[2px] bg-gradient-to-b from-[#69CBF2] via-[#69CBF2]/60 to-[#69CBF2]/15 sm:left-[35px]" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    data-aos="fade-up"
                    data-aos-delay={index * 70}
                    className="relative flex items-center gap-5 sm:gap-7"
                  >
                    <div className="relative z-10 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 border-[#69CBF2]/60 bg-[#0D3058] text-[#8ADCF9] sm:h-[72px] sm:w-[72px]">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <div>
                      <span className="text-[12px] font-bold tracking-[1.5px] text-[#69CBF2]">
                        STEP {step.number}
                      </span>

                      <h3 className="m-0 mt-1.5 text-[18px] font-bold leading-[1.4] text-white sm:text-[20px]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-12 max-w-[850px] text-center"
        >
          <p className="m-0 text-[14px] leading-[1.85] text-[#C6D8E8] sm:text-[16px]">
            Each step supports an informed, individualized
            approach to cardiovascular risk assessment and
            preventive care planning.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes cardiologyRiskOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes cardiologyHeartPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.07);
          }
        }

        .cardiology-risk-orbit {
          animation: cardiologyRiskOrbit 16s linear infinite;
        }

        .cardiology-heart-pulse {
          animation: cardiologyHeartPulse 2.6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cardiology-risk-orbit,
          .cardiology-heart-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PreventiveCardiologyRiskProcess;
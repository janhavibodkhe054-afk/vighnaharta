import React, { useEffect } from "react";
import {
  PhoneIncoming,
  Stethoscope,
  Activity,
  ClipboardCheck,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const emergencySteps = [
  {
    number: "01",
    title: "Arrival / Emergency Contact",
    description: "Patient arrival or emergency contact.",
    icon: PhoneIncoming,
  },
  {
    number: "02",
    title: "Initial Assessment",
    description: "Review of symptoms, vital signs and immediate concerns.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Clinical Evaluation",
    description: "Medical examination and investigations as required.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Medical Decision",
    description: "Clinical decisions based on the patient's condition.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Appropriate Care or Referral",
    description: "Further care or referral according to medical needs.",
    icon: HeartHandshake,
  },
];

const EmergencyCardiacEvaluation = () => {
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
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#102D5F] via-[#0B2850] to-[#06162D]" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#2E91C8]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[#C93542]/10 blur-[100px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#8ADCF9 1px, transparent 1px), linear-gradient(90deg, #8ADCF9 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto max-w-[900px] text-center">
          <div
            data-aos="fade-up"
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#F59AA2]/25 bg-[#C93542]/10 px-4 py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#F17883] opacity-40" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#F17883]" />
            </span>

            <span className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#FFABB2] sm:text-[14px]">
              Emergency Cardiac Evaluation
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[36px] lg:text-[42px]"
          >
            Timely Assessment Guides{" "}
            <span className="text-[#8ADCF9]">Emergency Care</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mx-auto mt-5 max-w-[850px] text-[14px] leading-[1.85] text-[#C8D9E9] sm:text-[16px]"
          >
            Emergency medical teams assess symptoms, vital signs
            and the patient's overall condition. ECG and other
            investigations may be used according to clinical need.
          </p>
        </div>

        {/* DESKTOP WORKFLOW */}
        <div className="relative mt-14 hidden lg:block">
          {/* CONNECTING PROGRESS LINE */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[66px] h-[3px] overflow-hidden rounded-full bg-white/15">
            <div className="emergency-workflow-progress h-full w-full bg-gradient-to-r from-[#F17883] via-[#FFB0B7] to-[#F17883]" />
          </div>

          <div className="relative z-10 grid grid-cols-5 gap-5">
            {emergencySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  className="group flex flex-col items-center text-center"
                >
                  <span className="mb-5 text-[13px] font-bold tracking-[1.5px] text-[#FFABB2]">
                    STEP {step.number}
                  </span>

                  {/* CIRCULAR NODE */}
                  <div className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full border-2 border-[#F17883]/60 bg-[#0D3058] text-[#FFABB2] shadow-[0_0_0_9px_#0B2850] transition-all duration-500 group-hover:scale-110 group-hover:border-[#FFABB2] group-hover:bg-[#C93542] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(241,120,131,0.2)]">
                    <Icon size={34} strokeWidth={1.6} />

                    <span className="absolute -bottom-1 h-3 w-3 rounded-full border-[3px] border-[#0D3058] bg-[#F17883]" />
                  </div>

                  <div className="mt-4 h-8 w-px bg-gradient-to-b from-[#F17883]/60 to-transparent" />

                  <h3 className="m-0 mt-2 max-w-[220px] text-[17px] font-bold leading-[1.4] text-white xl:text-[19px]">
                    {step.title}
                  </h3>

                  <p className="m-0 mt-3 max-w-[215px] text-[13px] leading-[1.75] text-[#B9CFE1] xl:text-[14px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET WORKFLOW */}
        <div className="relative mx-auto mt-11 max-w-[760px] lg:hidden">
          {/* VERTICAL PROGRESS CONNECTOR */}
          <div className="pointer-events-none absolute bottom-9 left-[30px] top-8 w-[3px] overflow-hidden rounded-full bg-white/15 sm:left-[36px]">
            <div className="emergency-workflow-vertical h-full w-full bg-gradient-to-b from-[#F17883] via-[#FFB0B7] to-[#F17883]" />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {emergencySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 65}
                  className="group relative flex items-start gap-5 sm:gap-7"
                >
                  {/* NODE */}
                  <div className="relative z-10 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border-2 border-[#F17883]/65 bg-[#0D3058] text-[#FFABB2] shadow-[0_0_0_6px_#0B2850] transition-colors duration-300 group-hover:bg-[#C93542] group-hover:text-white sm:h-[74px] sm:w-[74px]">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 pt-1 sm:pt-2">
                    <span className="text-[12px] font-bold tracking-[1.5px] text-[#FFABB2] sm:text-[13px]">
                      STEP {step.number}
                    </span>

                    <h3 className="m-0 mt-1.5 text-[18px] font-bold leading-[1.4] text-white sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="m-0 mt-2 max-w-[570px] text-[14px] leading-[1.8] text-[#B9CFE1] sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLINICAL GUIDANCE NOTE */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-12 max-w-[1050px] border-t border-white/15 pt-7 sm:mt-14"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#8ADCF9]/25 bg-[#8ADCF9]/10 text-[#8ADCF9]">
              <ShieldCheck size={24} strokeWidth={1.7} />
            </div>

            <div>
              <h3 className="m-0 text-[17px] font-bold text-white sm:text-[19px]">
                Care Based on Clinical Needs
              </h3>

              <p className="m-0 mt-2 text-[14px] leading-[1.85] text-[#C8D9E9] sm:text-[16px]">
                Treatment decisions and any requirement for
                transfer to a higher-level cardiac facility
                depend on the patient's condition and
                available services.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM WORKFLOW LABEL */}
        <div
          data-aos="fade-up"
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[12px] font-semibold text-[#9FC3D9] sm:text-[14px]"
        >
          <HeartPulse size={18} className="text-[#FFABB2]" />
          <span>Emergency Contact</span>
          <ArrowRight size={15} />
          <span>Clinical Assessment</span>
          <ArrowRight size={15} />
          <span>Appropriate Care</span>
        </div>
      </div>

      <style>{`
        @keyframes emergencyWorkflowProgress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .emergency-workflow-progress {
          animation: emergencyWorkflowProgress 5s linear infinite;
        }

        @keyframes emergencyWorkflowVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .emergency-workflow-vertical {
          animation: emergencyWorkflowVertical 5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .emergency-workflow-progress,
          .emergency-workflow-vertical {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EmergencyCardiacEvaluation;
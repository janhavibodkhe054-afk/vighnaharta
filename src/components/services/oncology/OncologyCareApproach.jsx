import React, { useEffect } from "react";
import {
  Stethoscope,
  FileSearch,
  UserRoundCheck,
  ClipboardCheck,
  HeartHandshake,
  ShieldCheck,
  ArrowDown,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    number: "01",
    title: "Medical Consultation",
    description:
      "Understanding the patient's medical history, symptoms and clinical concerns.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Report Review",
    description:
      "Reviewing diagnostic reports and relevant investigation findings.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Specialist Assessment",
    description:
      "Evaluating the diagnosis and individual care requirements.",
    icon: UserRoundCheck,
  },
  {
    number: "04",
    title: "Treatment Recommendation",
    description:
      "Discussing suitable treatment pathways based on specialist evaluation.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Follow-up",
    description:
      "Continued clinical review, guidance and care coordination.",
    icon: HeartHandshake,
  },
];

const OncologyCareApproach = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#071B3A] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#102D5F] via-[#0A2447] to-[#06162D]" />

      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#2E91C8]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#55B8E9]/10 blur-[100px]" />

      {/* SUBTLE DOT PATTERN */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto max-w-[960px] text-center">
          <div
            data-aos="fade-up"
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#69CBF2]/25 bg-[#69CBF2]/10 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#69CBF2]" />

            <span className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#8ADCF9] sm:text-[15px]">
              Our Clinical Approach
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[36px] lg:text-[42px]"
          >
            Every Cancer Diagnosis Requires an{" "}
            <span className="text-[#69CBF2]">
              Individual Approach
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="140"
            className="mx-auto mt-5 max-w-[850px] text-[14px] leading-[1.85] text-[#C6D8E8] sm:text-[16px]"
          >
            The appropriate treatment pathway may involve surgery,
            systemic therapies, radiation treatment or other
            specialist-led interventions, depending on the
            diagnosis. These options should be discussed with the
            treating oncology team.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL TIMELINE */}
        <div className="relative mt-14 hidden lg:block">
          {/* CONNECTING LINE */}
          <div className="absolute left-[10%] right-[10%] top-[53px] h-[2px] bg-gradient-to-r from-[#2E91C8]/40 via-[#69CBF2] to-[#2E91C8]/40" />

          <div className="relative grid grid-cols-5 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group flex flex-col items-center text-center"
                >
                  {/* NUMBER */}
                  <span className="mb-4 text-[15px] font-bold tracking-[2px] text-[#8ADCF9]">
                    {step.number}
                  </span>

                  {/* TIMELINE NODE */}
                  <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-[#69CBF2] bg-[#0D3058] text-[#8ADCF9] shadow-[0_0_0_10px_#0A2447] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2E91C8] group-hover:text-white group-hover:shadow-[0_0_0_10px_#0A2447,0_0_35px_rgba(105,203,242,0.3)]">
                    <Icon size={29} strokeWidth={1.7} />
                  </div>

                  {/* TEXT - NO CARD */}
                  <div className="mt-8 max-w-[230px]">
                    <h3 className="m-0 text-[18px] font-bold leading-[1.4] text-white">
                      {step.title}
                    </h3>

                    <p className="m-0 mt-3 text-[14px] leading-[1.8] text-[#BDD0E1]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET VERTICAL TIMELINE */}
        <div className="relative mx-auto mt-11 max-w-[650px] lg:hidden">
          {/* VERTICAL LINE */}
          <div className="absolute bottom-10 left-[29px] top-8 w-[2px] bg-gradient-to-b from-[#69CBF2] via-[#69CBF2]/60 to-[#69CBF2]/15 sm:left-[35px]" />

          <div className="space-y-9">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 75}
                  className="relative flex items-start gap-5 sm:gap-7"
                >
                  {/* ICON NODE */}
                  <div className="relative z-10 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 border-[#69CBF2] bg-[#0D3058] text-[#8ADCF9] shadow-[0_0_0_6px_#0A2447] sm:h-[72px] sm:w-[72px]">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  {/* CONTENT */}
                  <div className="pt-1">
                    <span className="text-[13px] font-bold tracking-[2px] text-[#69CBF2]">
                      STEP {step.number}
                    </span>

                    <h3 className="m-0 mt-2 text-[19px] font-bold leading-[1.4] text-white sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="m-0 mt-2 text-[14px] leading-[1.8] text-[#BDD0E1] sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM MESSAGE - NO CARD */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-14 flex max-w-[900px] flex-col items-center gap-4 text-center"
        >
          <ShieldCheck
            size={31}
            strokeWidth={1.6}
            className="text-[#69CBF2]"
          />

          <h3 className="m-0 text-[19px] font-bold text-white sm:text-[22px]">
            Individualized Treatment Planning
          </h3>

          <p className="m-0 max-w-[780px] text-[14px] leading-[1.85] text-[#C6D8E8] sm:text-[16px]">
            Treatment decisions depend on the type and stage of
            cancer, overall health and recommendations from the
            treating oncology specialists. Specific treatment
            availability can be confirmed during consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OncologyCareApproach;
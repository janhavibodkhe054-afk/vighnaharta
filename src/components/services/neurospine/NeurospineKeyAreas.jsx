
import React, { useEffect } from "react";
import {
  Network,
  Bone,
  ShieldAlert,
  Brain,
  Stethoscope,
  Activity,
  ShieldCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ==========================================
   BRAIN, SPINE & NERVE CARE AREAS
========================================== */

const neurospineAreas = [
  {
    number: "01",
    title: "Brain-Related Conditions",
    description:
      "Clinical evaluation of symptoms that may be associated with conditions affecting the brain and neurological function.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Headache & Dizziness",
    description:
      "Assessment of persistent headaches, dizziness and other symptoms that may require neurological evaluation.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Spine-Related Nerve Symptoms",
    description:
      "Evaluation of symptoms that may indicate irritation or compression of spinal nerves.",
    icon: Network,
  },
  {
    number: "04",
    title: "Back & Neck Conditions",
    description:
      "Assessment of persistent or clinically significant back and neck concerns.",
    icon: Bone,
  },
  {
    number: "05",
    title: "Spine Trauma",
    description:
      "Medical evaluation of injuries affecting the spinal region.",
    icon: ShieldAlert,
  },
  {
    number: "06",
    title: "Neurological Symptoms",
    description:
      "Assessment of weakness, numbness, balance difficulties or other symptoms that may require specialist review.",
    icon: Brain,
  },
  {
    number: "07",
    title: "Surgical Consultation",
    description:
      "Specialist assessment when an operative approach may need consideration for selected brain, spine or nerve-related conditions.",
    icon: Stethoscope,
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */

const NeurospineKeyAreas = () => {
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
    <section className="relative isolate overflow-hidden bg-[#071B3A] py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#102D5F] via-[#0B244B] to-[#06162D]" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#2E91C8]/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#55B8E9]/10 blur-[120px]" />

      {/* SUBTLE GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* DECORATIVE CIRCLES */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.06]" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-white/[0.06]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* HEADING */}

        <div className="mx-auto mb-14 max-w-[900px] text-center lg:mb-20">
          <div
            data-aos="fade-up"
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-sm"
          >
            <Brain
              size={18}
              className="text-[#69CBF2]"
              strokeWidth={1.8}
            />

            <span className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#BCEBFA] sm:text-[14px]">
              Brain, Spine &amp; Nerve Care
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[38px] lg:text-[44px]"
          >
            Key Areas of{" "}
            <span className="text-[#69CBF2]">
              Brain, Spine &amp; Nerve Evaluation
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mx-auto mt-5 max-w-[730px] text-[14px] leading-[1.85] text-[#C3D4E6] sm:text-[16px]"
          >
            Medical assessment of brain-related concerns,
            spine conditions, nerve symptoms and neurological
            difficulties to support appropriate diagnosis,
            specialist consultation and treatment decisions.
          </p>
        </div>

        {/* DESKTOP CONNECTED PATHWAY */}

        <div className="relative">
          {/* CONNECTION LINE - DESKTOP */}

          <div className="pointer-events-none absolute left-[7%] right-[7%] top-[48px] hidden h-[2px] bg-white/15 lg:block">
            <div className="neuro-path-progress h-full bg-gradient-to-r from-[#2E91C8] via-[#69CBF2] to-[#2E91C8]" />
          </div>

          {/* VERTICAL LINE - MOBILE */}

          <div className="pointer-events-none absolute bottom-[45px] left-[31px] top-[35px] w-[2px] bg-white/15 sm:left-[36px] lg:hidden">
            <div className="neuro-path-progress-vertical w-full bg-gradient-to-b from-[#2E91C8] via-[#69CBF2] to-[#2E91C8]" />
          </div>

          {/* ITEMS */}

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-7 lg:gap-4">
            {neurospineAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  className="group relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0"
                >
                  {/* ICON NODE */}

                  <div className="relative z-10 shrink-0">
                    {/* GLOW */}

                    <div className="absolute -inset-3 rounded-full bg-[#55B8E9]/0 blur-xl transition-all duration-500 group-hover:bg-[#55B8E9]/25" />

                    <div
                      className="
                        relative
                        flex
                        h-[64px]
                        w-[64px]
                        items-center
                        justify-center
                        rounded-full
                        border-[5px]
                        border-[#102D5F]
                        bg-[#173D70]
                        text-[#69CBF2]
                        shadow-[0_0_0_1px_rgba(105,203,242,0.25)]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:bg-[#55B8E9]
                        group-hover:text-[#071B3A]
                        sm:h-[74px]
                        sm:w-[74px]
                        lg:h-[82px]
                        lg:w-[82px]
                        xl:h-[96px]
                        xl:w-[96px]
                      "
                    >
                      <Icon
                        size={30}
                        strokeWidth={1.6}
                        className="sm:h-9 sm:w-9"
                      />
                    </div>
                  </div>

                  {/* TEXT CONTENT */}

                  <div className="min-w-0 flex-1 pt-1 lg:mt-8 lg:w-full lg:pt-0 lg:text-center">
                    {/* NUMBER */}

                    <span className="inline-block text-[12px] font-bold tracking-[2px] text-[#69CBF2] sm:text-[13px]">
                      {area.number}
                    </span>

                    {/* TITLE */}

                    <h3 className="mt-2 text-[18px] font-bold leading-[1.4] text-white sm:text-[20px] lg:min-h-[90px] lg:text-[17px] xl:text-[19px]">
                      {area.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-3 text-[13px] leading-[1.8] text-[#BED0E3] sm:text-[15px] lg:text-[13px] xl:text-[14px]">
                      {area.description}
                    </p>

                    {/* SMALL DECORATIVE DOT */}

                    <div className="mt-5 hidden justify-center lg:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#69CBF2]/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#69CBF2]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CLINICAL NOTE */}

        <div
          data-aos="fade-up"
          className="mx-auto mt-14 max-w-[1000px] border-t border-white/15 pt-7 text-center lg:mt-20"
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ShieldCheck
              size={22}
              className="shrink-0 text-[#69CBF2]"
            />

            <p className="m-0 text-[13px] leading-[1.85] text-[#C3D4E6] sm:text-[15px]">
              The need for further investigations, specialist
              consultation or treatment is determined according
              to the patient's symptoms and clinical findings.
            </p>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}

      <style>{`
        @keyframes neuroPathProgress {
          0% {
            transform: scaleX(0);
          }

          100% {
            transform: scaleX(1);
          }
        }

        .neuro-path-progress {
          width: 100%;
          transform-origin: left center;
          animation: neuroPathProgress 2.5s ease-out forwards;
        }

        @keyframes neuroPathVertical {
          0% {
            height: 0%;
          }

          100% {
            height: 100%;
          }
        }

        .neuro-path-progress-vertical {
          animation: neuroPathVertical 2.5s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .neuro-path-progress,
          .neuro-path-progress-vertical {
            animation: none !important;
            transform: none !important;
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default NeurospineKeyAreas;

import React, { useEffect } from "react";
import {
  ScanFace,
  Droplets,
  Scissors,
  Hand,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ==========================================
   DERMATOLOGY AREAS
========================================== */

const dermatologyAreas = [
  {
    number: "01",
    title: "Skin Conditions",
    description:
      "Evaluation of rashes, irritation and other skin-related concerns.",
    icon: ScanFace,
  },
  {
    number: "02",
    title: "Acne & Inflammatory Skin Concerns",
    description:
      "Clinical assessment and individualized treatment guidance.",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Hair & Scalp Concerns",
    description:
      "Evaluation of hair loss and scalp-related symptoms.",
    icon: Scissors,
  },
  {
    number: "04",
    title: "Nail Conditions",
    description:
      "Assessment of nail changes and related medical concerns.",
    icon: Hand,
  },
  {
    number: "05",
    title: "Skin Infection & Allergy Evaluation",
    description:
      "Appropriate medical review of suspected skin infections and allergic reactions.",
    icon: ShieldAlert,
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */

const DermatologyKeyAreas = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#071B3A] py-14 sm:py-16 lg:py-20">
      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#102D5F] via-[#0B244B] to-[#06162D]" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#2E91C8]/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#55B8E9]/10 blur-[120px]" />

      {/* SUBTLE DOT PATTERN */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* DECORATIVE CIRCLES */}

      <div className="pointer-events-none absolute -right-36 -top-36 h-[480px] w-[480px] rounded-full border border-white/[0.06]" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-white/[0.06]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* ======================================
            SECTION HEADING
        ====================================== */}

        <div className="mx-auto mb-12 max-w-[900px] text-center sm:mb-14 lg:mb-16">
          {/* LABEL */}

          <div
            data-aos="fade-up"
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles
              size={18}
              strokeWidth={1.8}
              className="text-[#69CBF2]"
            />

            <span className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#BCEBFA] sm:text-[14px]">
              Dermatology Services
            </span>
          </div>

          {/* HEADING */}

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[38px] lg:text-[44px]"
          >
            Key Areas of{" "}
            <span className="text-[#69CBF2]">
              Dermatology
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mx-auto mt-5 max-w-[740px] text-[14px] leading-[1.85] text-[#C3D4E6] sm:text-[16px]"
          >
            Medical evaluation of skin, hair, scalp and nail
            concerns to support appropriate diagnosis,
            treatment guidance and follow-up care.
          </p>
        </div>

        {/* ======================================
            CONNECTED PATHWAY
        ====================================== */}

        <div className="relative">
          {/* DESKTOP CONNECTION LINE */}

          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[48px] hidden h-[2px] bg-white/15 lg:block">
            <div className="derma-path-horizontal h-full w-full origin-left bg-gradient-to-r from-[#2E91C8] via-[#69CBF2] to-[#2E91C8]" />
          </div>

          {/* MOBILE CONNECTION LINE */}

          <div className="pointer-events-none absolute bottom-[48px] left-[31px] top-[35px] w-[2px] bg-white/15 sm:left-[36px] lg:hidden">
            <div className="derma-path-vertical w-full bg-gradient-to-b from-[#2E91C8] via-[#69CBF2] to-[#2E91C8]" />
          </div>

          {/* AREAS */}

          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-5 lg:gap-5">
            {dermatologyAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 85}
                  className="group relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0"
                >
                  {/* ICON NODE */}

                  <div className="relative z-10 shrink-0">
                    {/* HOVER GLOW */}

                    <div className="absolute -inset-3 rounded-full bg-[#55B8E9]/0 blur-xl transition-all duration-500 group-hover:bg-[#55B8E9]/30" />

                    {/* OUTER RING */}

                    <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full border-[5px] border-[#102D5F] bg-[#173D70] text-[#69CBF2] shadow-[0_0_0_1px_rgba(105,203,242,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#55B8E9] group-hover:text-[#071B3A] sm:h-[74px] sm:w-[74px] lg:h-[96px] lg:w-[96px]">
                      <Icon
                        size={29}
                        strokeWidth={1.6}
                        className="sm:h-9 sm:w-9"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1 pt-1 lg:mt-7 lg:w-full lg:pt-0 lg:text-center">
                    {/* NUMBER */}

                    <span className="inline-block text-[12px] font-bold tracking-[2px] text-[#69CBF2] sm:text-[13px]">
                      {area.number}
                    </span>

                    {/* TITLE */}

                    <h3 className="m-0 mt-2 text-[18px] font-bold leading-[1.4] text-white sm:text-[20px] lg:min-h-[85px] xl:text-[21px]">
                      {area.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="m-0 mt-3 text-[13px] leading-[1.8] text-[#BED0E3] sm:text-[15px]">
                      {area.description}
                    </p>

                    {/* HOVER INDICATOR */}

                    <div className="mt-5 hidden justify-center lg:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#69CBF2]/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#69CBF2]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================
            BOTTOM NOTE
        ====================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mt-12 max-w-[1000px] border-t border-white/15 pt-7 text-center sm:mt-14 lg:mt-16"
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ShieldCheck
              size={22}
              className="shrink-0 text-[#69CBF2]"
            />

            <p className="m-0 text-[13px] leading-[1.85] text-[#C3D4E6] sm:text-[15px]">
              Further investigations, treatment recommendations
              and specialist referral are determined according
              to individual symptoms and clinical findings.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================
          ANIMATIONS
      ====================================== */}

      <style>{`
        @keyframes dermaPathHorizontal {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .derma-path-horizontal {
          animation: dermaPathHorizontal 2.6s ease-out forwards;
        }

        @keyframes dermaPathVertical {
          from {
            height: 0%;
          }

          to {
            height: 100%;
          }
        }

        .derma-path-vertical {
          animation: dermaPathVertical 2.6s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .derma-path-horizontal,
          .derma-path-vertical {
            animation: none !important;
          }

          .derma-path-vertical {
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default DermatologyKeyAreas;
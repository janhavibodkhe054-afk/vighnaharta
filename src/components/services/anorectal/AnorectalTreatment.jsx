import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardCheck,
  Pill,
  Stethoscope,
  HeartHandshake,
  ArrowUpRight,
  Activity,
  Plus,
  Check,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const treatmentSteps = [
  {
    number: "01",
    title: "Clinical Examination & Diagnosis",
    description:
      "Assessment of symptoms, medical history and clinical findings to identify the condition.",
    icon: ClipboardCheck,
    tag: "Evaluation",
  },
  {
    number: "02",
    title: "Non-Surgical Management",
    description:
      "Medication, dietary guidance and lifestyle measures may help manage certain conditions.",
    icon: Pill,
    tag: "Conservative Care",
  },
  {
    number: "03",
    title: "Surgical Treatment",
    description:
      "Appropriate surgical procedures may be considered when clinically necessary.",
    icon: Stethoscope,
    tag: "Surgical Care",
  },
  {
    number: "04",
    title: "Post-Treatment Care & Follow-Up",
    description:
      "Guidance on recovery, hygiene, wound care and follow-up appointments.",
    icon: HeartHandshake,
    tag: "Recovery",
  },
];

export default function AnorectalTreatment() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="anorectal-treatment-approach"
      className="art-dark relative isolate overflow-hidden bg-[#06182F] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-[#06182F] via-[#092344] to-[#102D5F]" />

      {/* SUBTLE GRID */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #9EDDF8 1px, transparent 1px),
            linear-gradient(to bottom, #9EDDF8 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* MOVING GLOWS */}

      <div className="art-dark-glow-one pointer-events-none absolute -left-32 top-0 -z-10 h-[430px] w-[430px] rounded-full bg-[#2E91C8]/20 blur-[110px]" />

      <div className="art-dark-glow-two pointer-events-none absolute -right-32 bottom-0 -z-10 h-[460px] w-[460px] rounded-full bg-[#55B8E9]/15 blur-[120px]" />

      {/* FLOATING ELEMENTS */}

      <Plus
        size={35}
        strokeWidth={1.3}
        className="art-dark-float-one pointer-events-none absolute left-[5%] top-[16%] text-[#72D5FF]/20"
      />

      <Activity
        size={44}
        strokeWidth={1}
        className="art-dark-float-two pointer-events-none absolute right-[7%] top-[20%] text-[#72D5FF]/15"
      />

      <Plus
        size={26}
        strokeWidth={1.3}
        className="art-dark-float-three pointer-events-none absolute bottom-[13%] right-[8%] text-[#72D5FF]/20"
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADER */}

        <div
          className={`mx-auto mb-12 max-w-[850px] text-center transition-all duration-1000 lg:mb-16 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#72D5FF]/45" />

            <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#72D5FF] sm:text-[13px]">
              OUR TREATMENT APPROACH
            </span>

            <span className="h-px w-9 bg-[#72D5FF]/45" />
          </div>

          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-1px] sm:text-[38px] lg:text-[46px]">
            The Right Treatment Begins
            <span className="block text-[#72D5FF]">
              With the Right Diagnosis
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.9] text-[#C2D2E2] sm:text-[16px]">
            Treatment depends on the diagnosis, severity and individual
            medical needs. Not every anorectal condition requires surgery.
          </p>
        </div>

        {/* TREATMENT GRID */}

        <div className="relative mx-auto max-w-[1160px]">
          {/* DESKTOP CONNECTION LINES */}

          <div className="pointer-events-none absolute left-1/2 top-[25%] hidden h-[50%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#55B8E9]/40 to-transparent lg:block" />

          <div className="pointer-events-none absolute left-[25%] right-[25%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#55B8E9]/40 to-transparent lg:block" />

          {/* CENTER ANIMATED NODE */}

          <div className="art-dark-center-node pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#72D5FF]/40 bg-[#102D5F] shadow-[0_0_35px_rgba(85,184,233,0.25)] lg:flex">
            <Activity size={25} className="text-[#72D5FF]" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:gap-9">
            {treatmentSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`art-dark-card group relative min-h-[260px] overflow-hidden rounded-[26px] border border-white/15 bg-white/[0.055] p-6 backdrop-blur-sm transition-[opacity,transform,border-color,box-shadow,background-color] duration-700 ease-out sm:p-8 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: visible
                      ? `${index * 140}ms`
                      : "0ms",
                  }}
                >
                  {/* HOVER SPOTLIGHT */}

                  <div className="art-dark-spotlight pointer-events-none absolute inset-0" />

                  {/* TOP ACCENT */}

                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#55B8E9] to-[#A5E8FF] transition-all duration-500 group-hover:w-full" />

                  {/* BACKGROUND NUMBER */}

                  <span className="pointer-events-none absolute right-5 top-2 text-[88px] font-extrabold leading-none tracking-[-5px] text-white/[0.055] sm:text-[105px]">
                    {step.number}
                  </span>

                  <div className="relative z-10 flex items-start gap-5">
                    {/* ICON */}

                    <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[18px] border border-[#72D5FF]/25 bg-[#55B8E9]/10 text-[#72D5FF] transition-all duration-500 group-hover:rotate-[-5deg] group-hover:border-[#72D5FF]/60 group-hover:bg-[#55B8E9]/20 sm:h-[68px] sm:w-[68px]">
                      <Icon size={29} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="inline-flex rounded-full border border-[#72D5FF]/20 bg-[#72D5FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1.1px] text-[#8EDFFF]">
                        {step.tag}
                      </span>

                      <h3 className="mt-4 max-w-[370px] text-[20px] font-bold leading-[1.4] text-white sm:text-[23px]">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="relative z-10 mt-5 max-w-[470px] text-[14px] leading-[1.9] text-[#C2D2E2] sm:text-[15px]">
                    {step.description}
                  </p>

                  {/* FOOTER */}

                  <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="flex items-center gap-2 text-[12px] font-medium text-[#9DDFFB]">
                      <Check size={15} />
                      Individualized Care
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#9DDFFB] transition-all duration-300 group-hover:border-[#72D5FF] group-hover:bg-[#72D5FF] group-hover:text-[#06182F]">
                      <MoveUpRight size={17} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}

        <div
          className={`mx-auto mt-12 flex max-w-[1160px] flex-col items-start justify-between gap-5 rounded-[22px] border border-[#72D5FF]/20 bg-[#55B8E9]/[0.08] px-6 py-6 transition-all duration-1000 sm:flex-row sm:items-center sm:px-8 lg:mt-14 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="text-[17px] font-bold text-white sm:text-[19px]">
              Your Care Starts With a Consultation
            </p>

            <p className="mt-1 text-[13px] leading-[1.7] text-[#B8CDDE] sm:text-[14px]">
              Get appropriate evaluation and guidance for your condition.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#55B8E9] px-6 text-[13px] font-bold text-[#06182F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5E8FF] hover:shadow-[0_12px_30px_rgba(85,184,233,0.2)]"
          >
            Book Consultation
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* ANIMATIONS */}

      <style>{`
        @keyframes artDarkGlowOne {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(100px, 55px); }
        }

        @keyframes artDarkGlowTwo {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-100px, -55px); }
        }

        .art-dark-glow-one {
          animation: artDarkGlowOne 16s ease-in-out infinite;
        }

        .art-dark-glow-two {
          animation: artDarkGlowTwo 19s ease-in-out infinite;
        }

        @keyframes artDarkFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(12deg); }
        }

        .art-dark-float-one {
          animation: artDarkFloat 7s ease-in-out infinite;
        }

        .art-dark-float-two {
          animation: artDarkFloat 9s ease-in-out infinite reverse;
        }

        .art-dark-float-three {
          animation: artDarkFloat 8s ease-in-out infinite;
        }

        @keyframes artDarkPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(85, 184, 233, 0.15);
          }
          50% {
            box-shadow: 0 0 0 18px rgba(85, 184, 233, 0);
          }
        }

        .art-dark-center-node {
          animation: artDarkPulse 3.5s ease-in-out infinite;
        }

        .art-dark-spotlight {
          background: radial-gradient(
            circle at 0% 0%,
            rgba(85, 184, 233, 0.14),
            transparent 65%
          );
          opacity: 0.35;
          transition: opacity 0.5s ease;
        }

        .art-dark-card:hover .art-dark-spotlight {
          opacity: 1;
        }

        @media (hover: hover) {
          .art-dark-card:hover {
            transform: translateY(-7px);
            border-color: rgba(114, 213, 255, 0.45);
            background-color: rgba(255, 255, 255, 0.085);
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.18);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .art-dark *,
          .art-dark *::before,
          .art-dark *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .art-dark-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
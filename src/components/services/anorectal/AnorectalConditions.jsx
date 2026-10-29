import React, { useEffect, useRef, useState } from "react";
import {
  Activity,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  ArrowUpRight,
  CircleCheck,
  Plus,
  Cross,
  ScanHeart,
} from "lucide-react";
import { Link } from "react-router-dom";

const conditions = [
  {
    number: "01",
    title: "Piles (Hemorrhoids)",
    description:
      "Swollen blood vessels in or around the anus and lower rectum that may cause bleeding, itching or discomfort.",
    icon: HeartPulse,
    label: "Hemorrhoids",
  },
  {
    number: "02",
    title: "Anal Fissure",
    description:
      "A small tear in the anal canal that may cause sharp pain and bleeding during bowel movements.",
    icon: Activity,
    label: "Anal Fissure",
  },
  {
    number: "03",
    title: "Anal Fistula",
    description:
      "An abnormal tunnel connecting the anal canal to the surrounding skin that may require surgical evaluation.",
    icon: Stethoscope,
    label: "Anal Fistula",
  },
  {
    number: "04",
    title: "Perianal Abscess",
    description:
      "A collection of pus near the anus that may cause pain, swelling or fever and requires prompt medical assessment.",
    icon: ShieldCheck,
    label: "Perianal Abscess",
  },
];

const AnorectalConditions = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="anorectal-treatments"
      className="anorectal-conditions relative isolate overflow-hidden bg-[#F8FCFF] py-16 sm:py-20 lg:py-24"
    >
      {/* ======================================
          ANIMATED BACKGROUND
      ====================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8F1F8 1px, transparent 1px),
            linear-gradient(to bottom, #E8F1F8 1px, transparent 1px)
          `,
          backgroundSize: "54px 54px",
        }}
      />

      {/* MOVING GLOW */}

      <div className="anorectal-moving-glow pointer-events-none absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-[#DFF3FC]/70 blur-[100px]" />

      <div className="anorectal-moving-glow-2 pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#DCEFFC]/60 blur-[110px]" />

      {/* FLOATING MEDICAL SYMBOLS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <Plus
          size={35}
          strokeWidth={1.4}
          className="anorectal-float-one absolute left-[5%] top-[16%] text-[#2E91C8]/15"
        />

        <Cross
          size={27}
          strokeWidth={1.4}
          className="anorectal-float-two absolute right-[8%] top-[18%] text-[#2E91C8]/15"
        />

        <HeartPulse
          size={42}
          strokeWidth={1}
          className="anorectal-float-three absolute bottom-[15%] left-[8%] text-[#2E91C8]/10"
        />

        <ScanHeart
          size={40}
          strokeWidth={1}
          className="anorectal-float-four absolute bottom-[12%] right-[6%] text-[#2E91C8]/10"
        />

      </div>

      {/* ======================================
          MAIN CONTAINER
      ====================================== */}

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">

        {/* ======================================
            SECTION HEADER
        ====================================== */}

        <div
          className={`mx-auto mb-12 max-w-[850px] text-center transition-all duration-1000 lg:mb-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-9 bg-[#2E91C8]/40" />

            <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[13px]">
              COMMON ANORECTAL CONDITIONS
            </span>

            <span className="h-px w-9 bg-[#2E91C8]/40" />

          </div>

          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-1px] text-[#102D5F] sm:text-[38px] lg:text-[44px]">
            Understanding Your Condition
            <span className="block text-[#2E91C8]">
              Is the First Step Towards Treatment
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[710px] text-[14px] leading-[1.9] text-[#5C6E80] sm:text-[16px]">
            Anorectal conditions may cause pain, bleeding, swelling or
            discomfort. Early clinical assessment helps identify the
            condition and guide appropriate treatment.
          </p>
        </div>

        {/* ======================================
            ANIMATED CONDITION CARDS
        ====================================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">

          {conditions.map((condition, index) => {
            const Icon = condition.icon;

            return (
              <article
                key={condition.number}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 130}ms`
                    : "0ms",
                }}
                className={`anorectal-card group relative flex min-h-[320px] flex-col overflow-hidden rounded-[24px] border border-[#E0ECF4] bg-white p-6 shadow-[0_12px_35px_rgba(16,45,95,0.05)] transition-all duration-700 ease-out sm:p-7 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
              >

                {/* MOVING LIGHT SWEEP */}

                <div className="anorectal-card-shine pointer-events-none absolute inset-0 z-0" />

                {/* TOP ANIMATED BORDER */}

                <div className="absolute left-0 top-0 h-[4px] w-0 bg-gradient-to-r from-[#2E91C8] to-[#55B8E9] transition-all duration-500 group-hover:w-full" />

                {/* NUMBER */}

                <span className="absolute right-5 top-4 text-[48px] font-extrabold leading-none tracking-[-3px] text-[#EAF4FA] transition-colors duration-500 group-hover:text-[#D8EFFA]">
                  {condition.number}
                </span>

                {/* ICON */}

                <div className="relative z-10 mb-8 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] border border-[#D9ECF7] bg-[#EFF9FE] text-[#2E91C8] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#2E91C8] group-hover:text-white">

                  <Icon size={27} strokeWidth={1.7} />

                </div>

                {/* CONTENT */}

                <div className="relative z-10">

                  <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-[#2E91C8]">
                    {condition.label}
                  </span>

                  <h3 className="text-[20px] font-bold leading-[1.3] text-[#102D5F]">
                    {condition.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.85] text-[#64748B]">
                    {condition.description}
                  </p>

                </div>

                {/* BOTTOM */}

                <div className="relative z-10 mt-auto flex items-center justify-between pt-7">

                  <span className="flex items-center gap-2 text-[12px] font-semibold text-[#2E91C8]">
                    <CircleCheck size={15} />
                    Clinical Evaluation
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8EAF4] text-[#2E91C8] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#2E91C8] group-hover:bg-[#2E91C8] group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </span>

                </div>

              </article>
            );
          })}

        </div>

        {/* ======================================
            BOTTOM CTA STRIP
        ====================================== */}

        <div
          className={`mt-12 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-[#DDECF5] bg-white px-6 py-6 shadow-[0_10px_30px_rgba(16,45,95,0.04)] transition-all duration-1000 sm:flex-row sm:px-8 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? "500ms" : "0ms",
          }}
        >

          <div className="flex items-start gap-4">

            <div className="anorectal-icon-pulse flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FD] text-[#2E91C8]">
              <Stethoscope size={23} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-[17px] font-bold text-[#102D5F]">
                Experiencing Persistent Symptoms?
              </h3>

              <p className="mt-1 text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
                Seek medical consultation for accurate diagnosis and
                appropriate treatment guidance.
              </p>
            </div>

          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#102D5F] px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] hover:shadow-[0_12px_25px_rgba(46,145,200,0.2)]"
          >
            Consult Our Team

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

      </div>

      {/* ======================================
          CUSTOM ANIMATIONS
      ====================================== */}

      <style>{`

        /* FLOATING SYMBOLS */

        @keyframes anorectalFloatOne {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-22px) rotate(12deg);
          }
        }

        @keyframes anorectalFloatTwo {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(25px) rotate(-12deg);
          }
        }

        @keyframes anorectalFloatThree {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-18px) rotate(8deg);
          }
        }

        .anorectal-float-one {
          animation: anorectalFloatOne 7s ease-in-out infinite;
        }

        .anorectal-float-two {
          animation: anorectalFloatTwo 9s ease-in-out infinite;
        }

        .anorectal-float-three {
          animation: anorectalFloatThree 8s ease-in-out infinite;
        }

        .anorectal-float-four {
          animation: anorectalFloatTwo 11s ease-in-out infinite;
        }

        /* MOVING GLOW */

        @keyframes anorectalGlowMove {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(100px, 50px);
          }
        }

        @keyframes anorectalGlowMoveTwo {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-100px, -60px);
          }
        }

        .anorectal-moving-glow {
          animation: anorectalGlowMove 15s ease-in-out infinite;
        }

        .anorectal-moving-glow-2 {
          animation: anorectalGlowMoveTwo 18s ease-in-out infinite;
        }

        /* CARD SHINE */

        .anorectal-card-shine {
          background: linear-gradient(
            110deg,
            transparent 30%,
            rgba(85, 184, 233, 0.10) 48%,
            transparent 65%
          );

          transform: translateX(-150%);
          transition: transform 0.9s ease;
        }

        .anorectal-card:hover .anorectal-card-shine {
          transform: translateX(150%);
        }

        /* CARD HOVER */

        @media (hover: hover) {
          .anorectal-card:hover {
            transform: translateY(-9px);
            border-color: #A9DDF4;
            box-shadow: 0 24px 55px rgba(16, 45, 95, 0.12);
          }
        }

        /* ICON PULSE */

        @keyframes anorectalIconPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(46, 145, 200, 0.15);
          }

          50% {
            box-shadow: 0 0 0 10px rgba(46, 145, 200, 0);
          }
        }

        .anorectal-icon-pulse {
          animation: anorectalIconPulse 3s ease-in-out infinite;
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .anorectal-conditions *,
          .anorectal-conditions *::before,
          .anorectal-conditions *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .anorectal-conditions .anorectal-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }

      `}</style>
    </section>
  );
};

export default AnorectalConditions;
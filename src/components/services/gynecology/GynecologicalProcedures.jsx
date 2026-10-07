import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Venus,
  Stethoscope,
  ClipboardPlus,
  FileCheck2,
  HeartPulse,
  ArrowRight,
  Info,
} from "lucide-react";

const carePoints = [
  {
    title: "Clinical Evaluation",
    description:
      "The patient’s healthcare needs are evaluated before appropriate care is planned.",
    icon: Stethoscope,
  },
  {
    title: "Individual Care Planning",
    description:
      "The approach to care is determined according to individual clinical requirements.",
    icon: ClipboardPlus,
  },
  {
    title: "Appropriate Procedure Guidance",
    description:
      "When a procedure is considered appropriate, the treating doctor can provide guidance based on the patient’s medical requirements.",
    icon: FileCheck2,
  },
];

const GynecologicalProcedures = () => {
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
    <section className="relative overflow-hidden bg-[#F7FBFD] py-11 sm:py-12 md:py-14 lg:py-16">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#E2F5FB] blur-[110px]" />

        <div className="absolute -bottom-[170px] right-[-130px] h-[380px] w-[380px] rounded-full bg-[#EAF8FC] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage: "radial-gradient(#2E91C8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1280px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            MAIN CONTAINER
        ==================================================== */}

        <div className="relative overflow-hidden rounded-[22px] border border-[#DCEBF1] bg-white shadow-[0_20px_55px_rgba(16,45,95,.07)] sm:rounded-[26px] lg:grid lg:grid-cols-[1.08fr_.92fr]">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10 xl:px-11">
            {/* DECORATIVE NUMBER */}

            <span className="pointer-events-none absolute right-5 top-2 text-[80px] font-black leading-none text-[#102D5F]/[0.025] sm:text-[100px]">
              04
            </span>

            {/* LABEL */}

            <div
              data-aos="fade-right"
              className="relative mb-3 flex items-center gap-3"
            >
              <span className="gyp-label-line h-[2px] w-8 origin-left rounded-full bg-[#2E91C8]" />

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px]">
                Women&apos;s Health Treatment
              </span>
            </div>

            {/* HEADING */}

            <h2
              data-aos="fade-up"
              data-aos-delay="70"
              className="relative max-w-[570px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
            >
              Gynecological{" "}
              <span className="relative inline-block text-[#2E91C8]">
                Procedures
                <svg
                  viewBox="0 0 190 8"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[6px] left-0 h-[6px] w-full"
                >
                  <path
                    className="gyp-title-line"
                    d="M2 5 C55 1 130 8 188 3"
                    fill="none"
                    stroke="#76D2EE"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-delay="130"
              className="relative mt-5 max-w-[590px] text-[13px] leading-[1.7] text-[#64748B] sm:text-[15px]"
            >
              Appropriate gynecological evaluation and procedures based on the
              patient&apos;s medical requirements.
            </p>

            {/* SUPPORTING INFO */}

            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="relative mt-3 max-w-[590px] text-[13px] leading-[1.7] text-[#718293] sm:text-[15px]"
            >
              Care begins with medical consultation and clinical evaluation.
              When further care or a procedure is considered appropriate, the
              treating doctor can guide the patient according to individual
              clinical findings and healthcare needs.
            </p>

            {/* =================================================
                CARE POINTS
            ================================================== */}

            <div className="relative mt-6 space-y-2">
              {carePoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    data-aos="fade-right"
                    data-aos-delay={220 + index * 70}
                    className="gyp-care-row group flex items-start gap-3 rounded-[14px] border border-transparent px-2 py-2.5 transition-all duration-300 hover:border-[#E1EDF2] hover:bg-[#F9FCFD]"
                  >
                    {/* ICON */}

                    <div className="relative flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[11px] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.7} />

                      <span className="gyp-small-ring absolute inset-[-4px] rounded-[14px] border border-[#2E91C8]/10" />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0">
                      <h3 className="text-[13px] font-bold leading-[1.7] text-[#102D5F] sm:text-[15px]">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 max-w-[500px] text-[13px] leading-[1.7] text-[#64748B] sm:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE VISUAL
          ================================================== */}

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="group relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:h-full lg:min-h-[620px]"
          >
            {/* IMAGE */}
            <img
              src="/women-health.png"
              alt="Women's Health Treatment"
              className="absolute inset-0 z-0 block h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-[1.03]"
            />

            {/* VERY LIGHT BOTTOM OVERLAY */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#071B3A]/35 via-transparent to-transparent" />

            {/* TOP LABEL */}
            <div
              data-aos="fade-down"
              data-aos-delay="280"
              className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-[#071B3A]/45 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6"
            >
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#7DDCF7] opacity-30" />
                <span className="relative h-[7px] w-[7px] rounded-full bg-[#7DDCF7]" />
              </span>

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-white sm:text-[15px]">
                Individual Care
              </span>
            </div>

            {/* SIDE LABEL */}
            <div
              data-aos="fade-left"
              data-aos-delay="340"
              className="absolute right-5 top-5 z-20 hidden sm:block"
            >
              <span className="rounded-full border border-white/25 bg-[#071B3A]/45 px-3 py-2 text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-white backdrop-blur-md sm:text-[15px]">
                Women&apos;s Health
              </span>
            </div>

            {/* BOTTOM INFO */}
            <div
              data-aos="fade-up"
              data-aos-delay="380"
              className="absolute bottom-5 left-5 right-5 z-20 sm:bottom-6 sm:left-6 sm:right-6"
            >
              <div className="rounded-[16px] border border-white/20 bg-[#071B3A]/55 px-4 py-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <HeartPulse
                    size={15}
                    strokeWidth={1.7}
                    className="text-[#86E0F8]"
                  />

                  <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#86E0F8] sm:text-[15px]">
                    Care Approach
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] font-semibold leading-[1.7] text-white sm:text-[15px]">
                  <span>Evaluation</span>

                  <ArrowRight size={13} className="text-[#79DDF7]" />

                  <span>Clinical Guidance</span>

                  <ArrowRight size={13} className="text-[#79DDF7]" />

                  <span>Appropriate Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MEDICAL NOTE
        ====================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mx-auto mt-5 flex max-w-[900px] items-start gap-3 px-1 sm:items-center"
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
            <Info size={15} strokeWidth={1.8} />
          </span>

          <p className="text-[13px] leading-[1.7] text-[#64748B] sm:text-[15px]">
            The need for any procedure and the appropriate approach to care
            depend on individual clinical evaluation and medical requirements.
          </p>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes gypLabelLine {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @keyframes gypTitleLine {
          0% {
            stroke-dasharray: 250;
            stroke-dashoffset: 250;
          }

          100% {
            stroke-dasharray: 250;
            stroke-dashoffset: 0;
          }
        }

        @keyframes gypImageLight {
          0% {
            left: -35%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          100% {
            left: 125%;
            opacity: 0;
          }
        }

        @keyframes gypOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gypOrbitReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes gypCenter {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.04);
          }
        }

        @keyframes gypCenterRing {
          0% {
            transform: scale(.8);
            opacity: .55;
          }

          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes gypPath {
          0% {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            opacity: 0;
          }

          100% {
            stroke-dasharray: 5 6;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes gypNode {
          0%,
          100% {
            box-shadow:
              0 0 0 0
              rgba(122, 219, 247, .28);
          }

          50% {
            box-shadow:
              0 0 0 8px
              rgba(122, 219, 247, 0);
          }
        }

        @keyframes gypFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes gypSmallRing {
          0% {
            transform: scale(.8);
            opacity: .45;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @keyframes gypButtonShine {
          0% {
            left: -45%;
          }

          100% {
            left: 125%;
          }
        }

        .aos-animate .gyp-label-line {
          animation:
            gypLabelLine
            .7s
            ease-out
            both;
        }

        .aos-animate .gyp-title-line {
          animation:
            gypTitleLine
            1.1s
            ease-out
            .25s
            both;
        }

        .aos-animate .gyp-image-light {
          animation:
            gypImageLight
            1.2s
            ease-out
            .7s
            forwards;
        }

        .gyp-orbit {
          animation:
            gypOrbit
            18s
            linear
            infinite;
        }

        .gyp-orbit-reverse {
          animation:
            gypOrbitReverse
            14s
            linear
            infinite;
        }

        .gyp-center {
          animation:
            gypCenter
            4s
            ease-in-out
            infinite;
        }

        .gyp-center-ring {
          animation:
            gypCenterRing
            2.3s
            ease-out
            infinite;
        }

        .gyp-ring-delay {
          animation-delay: 1.15s;
        }

        .gyp-path {
          animation:
            gypPath
            1.2s
            ease-out
            .3s
            both;
        }

        .gyp-path-two {
          animation-delay: .5s;
        }

        .gyp-path-three {
          animation-delay: .7s;
        }

        .gyp-path-four {
          animation-delay: .9s;
        }

        .gyp-node {
          animation:
            gypNode
            2.4s
            ease-in-out
            infinite;
        }

        .gyp-floating-icon {
          animation:
            gypFloat
            4s
            ease-in-out
            infinite;
        }

        .gyp-small-ring {
          animation:
            gypSmallRing
            2.2s
            ease-out
            infinite;
        }

        .gyp-button:hover .gyp-button-shine {
          animation:
            gypButtonShine
            .75s
            ease-out
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .gyp-label-line,
          .gyp-title-line,
          .gyp-image-light,
          .gyp-orbit,
          .gyp-orbit-reverse,
          .gyp-center,
          .gyp-center-ring,
          .gyp-path,
          .gyp-node,
          .gyp-floating-icon,
          .gyp-small-ring,
          .gyp-button-shine {
            animation: none !important;
          }

          .gyp-title-line {
            stroke-dasharray: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GynecologicalProcedures;

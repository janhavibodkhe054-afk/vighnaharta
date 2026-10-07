import React, { useEffect, useRef, useState } from "react";

import {
  Target,
  Eye,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const MissionVision = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mv-section relative isolate overflow-hidden bg-[#F7FCFF] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 ${
        visible ? "mv-visible" : ""
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(85,184,233,0.14),transparent_27%),radial-gradient(circle_at_88%_70%,rgba(46,145,200,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f4fbff_55%,#ffffff_100%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-image:radial-gradient(#2E91C8_1px,transparent_1px)] [background-size:26px_26px]" />

      {/* =====================================================
          MOVING BLOBS
      ====================================================== */}

      <div className="mv-blob-one pointer-events-none absolute -left-[130px] top-[22%] h-[300px] w-[300px] rounded-full bg-[#BCEBFA]/35 blur-[80px] sm:h-[400px] sm:w-[400px]" />

      <div className="mv-blob-two pointer-events-none absolute -right-[160px] bottom-[8%] h-[340px] w-[340px] rounded-full bg-[#D4F2FC]/60 blur-[90px] lg:h-[480px] lg:w-[480px]" />

      {/* =====================================================
          FLOATING PLUS
      ====================================================== */}

      <span className="mv-plus mv-plus-1">+</span>
      <span className="mv-plus mv-plus-2">+</span>
      <span className="mv-plus mv-plus-3">+</span>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mv-header mx-auto mb-8 max-w-[790px] text-center sm:mb-10 md:mb-11 lg:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2E91C8]" />

            <HeartPulse
              className="mv-heart-small h-4 w-4 shrink-0 text-[#2E91C8]"
              strokeWidth={1.8}
            />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px] sm:tracking-[2px]">
              Our Purpose
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2E91C8]" />
          </div>

          <h2 className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
            The Purpose Behind{" "}
            <span className="text-[#2E91C8]">
              Every Step We Take
            </span>
          </h2>

          <p className="mx-auto mb-0 mt-4 max-w-[640px] text-[13px] leading-[1.7] text-[#64788A] sm:text-[15px]">
            Guided by responsible healthcare, compassionate service and a
            commitment to continuously improve patient care.
          </p>
        </div>

        {/* ===================================================
            JOURNEY
        ==================================================== */}

        <div className="relative mx-auto max-w-[1180px]">
          {/* =================================================
              CENTER PATH — DESKTOP
          ================================================== */}

          <div className="absolute left-1/2 top-[80px] hidden h-[calc(100%-160px)] w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-[#D9EDF5] lg:block">
            <span className="mv-travel absolute left-0 top-0 h-[100px] w-full rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent shadow-[0_0_12px_rgba(46,145,200,0.5)]" />
          </div>

          {/* =================================================
              MISSION
          ================================================== */}

          <div className="mv-mission grid items-center gap-5 lg:grid-cols-[1fr_100px_1fr] lg:gap-8">
            {/* MISSION TITLE */}

            <div className="order-1 lg:text-right">
              <span className="mb-2 block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px]">
                01 / Our Mission
              </span>

              <h3 className="m-0 text-[24px] font-bold leading-[1.14] tracking-[-0.7px] text-[#102D5F] min-[360px]:text-[26px] sm:text-[29px] md:text-[31px] lg:text-[33px] xl:text-[35px]">
                Accessible Care.

                <span className="mt-1 block text-[#2E91C8]">
                  Ethical Practice.
                </span>
              </h3>

              <p className="mt-3 max-w-[420px] text-[13px] leading-[1.7] text-[#708391] sm:text-[15px] lg:ml-auto">
                Patient-focused healthcare supported by expertise, facilities
                and compassionate service.
              </p>
            </div>

            {/* MISSION NODE */}

            <div className="order-2 hidden items-center justify-center lg:flex">
              <div className="mv-node relative flex h-[70px] w-[70px] items-center justify-center rounded-full border-[7px] border-[#F7FCFF] bg-[#2E91C8] text-white shadow-[0_12px_35px_rgba(46,145,200,0.22)]">
                <Target
                  className="h-6 w-6"
                  strokeWidth={1.7}
                />

                <span className="mv-node-wave absolute inset-[-7px] rounded-full border border-[#2E91C8]/30" />
              </div>
            </div>

            {/* MISSION INFO */}

            <div className="order-3">
              <InfoPanel
                icon={ShieldCheck}
                number="01"
              >
                To provide accessible, ethical and patient-focused healthcare
                through appropriate medical expertise, modern facilities and
                compassionate service.
              </InfoPanel>
            </div>
          </div>

          {/* =================================================
              UNIQUE CENTER
          ================================================== */}

          <div className="relative z-20 my-7 flex items-center sm:my-9 lg:my-5">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B8DAE8] to-[#8ECDE4]" />

            <div className="relative mx-4">
              <span className="mv-center-wave absolute inset-0 rounded-full border border-[#2E91C8]/30" />

              <span className="mv-center-wave-two absolute inset-0 rounded-full border border-[#55B8E9]/20" />

              <div className="mv-center-heart relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full border-[5px] border-white bg-[#102D5F] text-white shadow-[0_12px_35px_rgba(16,45,95,0.22)] sm:h-[56px] sm:w-[56px]">
                <HeartPulse
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#B8DAE8] to-[#8ECDE4]" />
          </div>

          {/* =================================================
              MOVING ECG
          ================================================== */}

          <div className="pointer-events-none mx-auto -mt-[52px] mb-5 hidden max-w-[330px] lg:block">
            <svg
              viewBox="0 0 500 60"
              className="h-[48px] w-full"
              fill="none"
            >
              <path
                className="mv-ecg"
                d="M0 30 H145 L165 30 L180 14 L198 47 L219 6 L241 30 H500"
                stroke="#2E91C8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* =================================================
              VISION
          ================================================== */}

          <div className="mv-vision grid items-center gap-5 lg:grid-cols-[1fr_100px_1fr] lg:gap-8">
            {/* VISION INFO */}

            <div className="order-3 lg:order-1">
              <InfoPanel
                icon={Sparkles}
                number="02"
              >
                To become a trusted healthcare destination for Alephata, Junnar
                and surrounding communities by continuously improving the
                quality, accessibility and range of medical services.
              </InfoPanel>
            </div>

            {/* VISION NODE */}

            <div className="order-2 hidden items-center justify-center lg:flex">
              <div className="mv-node relative flex h-[70px] w-[70px] items-center justify-center rounded-full border-[7px] border-[#F7FCFF] bg-[#102D5F] text-white shadow-[0_12px_35px_rgba(16,45,95,0.18)]">
                <Eye
                  className="h-6 w-6"
                  strokeWidth={1.7}
                />

                <span className="mv-node-wave absolute inset-[-7px] rounded-full border border-[#2E91C8]/30" />
              </div>
            </div>

            {/* VISION TITLE */}

            <div className="order-1 lg:order-3">
              <span className="mb-2 block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px]">
                02 / Our Vision
              </span>

              <h3 className="m-0 text-[24px] font-bold leading-[1.14] tracking-[-0.7px] text-[#102D5F] min-[360px]:text-[26px] sm:text-[29px] md:text-[31px] lg:text-[33px] xl:text-[35px]">
                Trusted Today.

                <span className="mt-1 block text-[#2E91C8]">
                  Better Tomorrow.
                </span>
              </h3>

              <p className="mt-3 max-w-[420px] text-[13px] leading-[1.7] text-[#708391] sm:text-[15px]">
                Continuously improving healthcare for Alephata, Junnar and
                surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        .mv-header,
        .mv-mission,
        .mv-vision {
          opacity: 0;
        }

        .mv-visible .mv-header {
          animation:
            mvReveal
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .mv-visible .mv-mission {
          animation:
            mvMission
            0.9s
            0.2s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .mv-visible .mv-vision {
          animation:
            mvVision
            0.9s
            0.55s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .mv-visible .mv-travel {
          animation:
            mvTravel
            3.8s
            0.8s
            linear
            infinite;
        }

        .mv-visible .mv-ecg {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;

          animation:
            mvEcg
            3.8s
            1s
            linear
            infinite;
        }

        .mv-visible .mv-node {
          animation:
            mvNode
            4s
            1s
            ease-in-out
            infinite;
        }

        .mv-visible .mv-node-wave {
          animation:
            mvWave
            2.6s
            1s
            ease-out
            infinite;
        }

        .mv-visible .mv-center-heart {
          animation:
            mvHeart
            2.2s
            1s
            ease-in-out
            infinite;
        }

        .mv-visible .mv-center-wave {
          animation:
            mvWave
            2.5s
            1s
            ease-out
            infinite;
        }

        .mv-visible .mv-center-wave-two {
          animation:
            mvWave
            2.5s
            1.7s
            ease-out
            infinite;
        }

        .mv-visible .mv-heart-small {
          animation:
            mvHeart
            2.2s
            ease-in-out
            infinite;
        }

        .mv-blob-one {
          animation:
            mvBlob1
            9s
            ease-in-out
            infinite
            alternate;
        }

        .mv-blob-two {
          animation:
            mvBlob2
            11s
            ease-in-out
            infinite
            alternate;
        }

        .mv-panel:hover .mv-shine {
          left: 135%;
        }

        .mv-shine {
          transition:
            left
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .mv-plus {
          position: absolute;
          pointer-events: none;
          color: rgba(46, 145, 200, 0.12);
          font-weight: 300;
          line-height: 1;

          animation:
            mvPlus
            5s
            ease-in-out
            infinite;
        }

        .mv-plus-1 {
          left: 5%;
          top: 20%;
          font-size: 30px;
        }

        .mv-plus-2 {
          right: 5%;
          top: 35%;
          font-size: 21px;
          animation-delay: 1.4s;
        }

        .mv-plus-3 {
          left: 8%;
          bottom: 10%;
          font-size: 24px;
          animation-delay: 2.6s;
        }

        @keyframes mvReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes mvMission {
          from {
            opacity: 0;
            transform: translate3d(-60px, 25px, 0);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes mvVision {
          from {
            opacity: 0;
            transform: translate3d(60px, 25px, 0);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes mvTravel {
          0% {
            top: -12%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes mvEcg {
          0% {
            stroke-dashoffset: 700;
            opacity: 0;
          }

          15% {
            opacity: 0.7;
          }

          75% {
            stroke-dashoffset: 0;
            opacity: 0.7;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes mvNode {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes mvWave {
          0% {
            transform: scale(0.85);
            opacity: 0.8;
          }

          100% {
            transform: scale(1.65);
            opacity: 0;
          }
        }

        @keyframes mvHeart {
          0%,
          100% {
            transform: scale(1);
          }

          15% {
            transform: scale(1.1);
          }

          30% {
            transform: scale(1);
          }

          45% {
            transform: scale(1.07);
          }
        }

        @keyframes mvBlob1 {
          to {
            transform:
              translate3d(55px, 35px, 0)
              scale(1.1);
          }
        }

        @keyframes mvBlob2 {
          to {
            transform:
              translate3d(-50px, -30px, 0)
              scale(1.08);
          }
        }

        @keyframes mvPlus {
          50% {
            transform:
              translate3d(6px, -15px, 0)
              rotate(15deg);
          }
        }

        @media (max-width: 767px) {
          .mv-blob-one,
          .mv-blob-two {
            animation: none;
          }

          .mv-plus {
            opacity: 0.55;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mv-header,
          .mv-mission,
          .mv-vision {
            opacity: 1 !important;
            transform: none !important;
          }

          .mv-header,
          .mv-mission,
          .mv-vision,
          .mv-travel,
          .mv-ecg,
          .mv-node,
          .mv-node-wave,
          .mv-center-heart,
          .mv-center-wave,
          .mv-center-wave-two,
          .mv-heart-small,
          .mv-blob-one,
          .mv-blob-two,
          .mv-plus {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   INFO PANEL
========================================================= */

const InfoPanel = ({
  icon: Icon,
  number,
  children,
}) => (
  <div className="mv-panel group relative overflow-hidden rounded-[20px] border border-[#D9EAF1] bg-white/90 p-4 shadow-[0_18px_50px_rgba(16,45,95,0.07)] backdrop-blur-xl transition-all duration-500 min-[360px]:p-5 sm:p-6 lg:min-h-[205px] lg:hover:-translate-y-1.5 lg:hover:shadow-[0_25px_65px_rgba(16,45,95,0.12)] xl:p-7">
    {/* TOP LINE */}

    <div className="absolute left-0 top-0 h-[3px] w-[70px] rounded-r-full bg-gradient-to-r from-[#102D5F] to-[#55B8E9] transition-all duration-500 group-hover:w-[145px]" />

    {/* BACKGROUND NUMBER */}

    <span className="pointer-events-none absolute -right-2 -top-7 text-[100px] font-black leading-none text-[#102D5F]/[0.025]">
      {number}
    </span>

    {/* ICON */}

    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 group-hover:bg-[#2E91C8] group-hover:text-white">
      <Icon
        className="h-5 w-5"
        strokeWidth={1.7}
      />
    </div>

    {/* CONTENT */}

    <p className="relative z-10 m-0 mt-4 text-[13px] font-medium leading-[1.7] text-[#607686] sm:mt-5 sm:text-[15px]">
      {children}
    </p>

    {/* SHINE */}

    <div className="mv-shine pointer-events-none absolute inset-y-[-20%] -left-[80%] w-[35%] rotate-[15deg] bg-gradient-to-r from-transparent via-[#69CBF2]/15 to-transparent" />
  </div>
);

export default MissionVision;
import React from "react";
import { Link } from "react-router-dom";

import {
  ChevronRight,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#071B3A]">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/abouthero.png"
          alt="Vighnaharta Hospital"
          className="about-bg-image h-full w-full object-cover object-center sm:object-[center_40%] lg:object-center"
        />
      </div>

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B3A]/95 via-[#071B3A]/88 to-[#071B3A]/70 sm:from-[#071B3A]/96 sm:via-[#071B3A]/82 sm:to-[#071B3A]/55 lg:from-[#071B3A]/96 lg:via-[#071B3A]/78 lg:to-[#071B3A]/28" />

      {/* =====================================================
          BLUE IMAGE WASH
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2E91C8]/[0.06] via-transparent to-[#55B8E9]/[0.05]" />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#071B3A]/70 via-[#071B3A]/20 to-transparent" />

      {/* =====================================================
          MOVING LIGHT SWEEP
      ====================================================== */}

      <div className="about-light-sweep pointer-events-none absolute -top-[40%] left-[-30%] hidden h-[180%] w-[18%] rotate-[15deg] bg-gradient-to-r from-transparent via-white/[0.035] to-transparent lg:block" />

      {/* =====================================================
          MOVING GLOWS
      ====================================================== */}

      <div className="about-glow-one pointer-events-none absolute -left-[120px] -top-[100px] h-[260px] w-[260px] rounded-full bg-[#2E91C8]/15 blur-[80px] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px] lg:blur-[110px]" />

      <div className="about-glow-two pointer-events-none absolute -bottom-[150px] right-[10%] h-[280px] w-[280px] rounded-full bg-[#55B8E9]/10 blur-[90px] lg:h-[380px] lg:w-[380px]" />

      {/* =====================================================
          DOT PATTERN
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] sm:[background-size:24px_24px]" />

      {/* =====================================================
          FLOATING MEDICAL +
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
        <span className="about-medical-plus about-plus-one">+</span>
        <span className="about-medical-plus about-plus-two">+</span>
        <span className="about-medical-plus about-plus-three">+</span>
      </div>

      {/* =====================================================
          RIGHT SIDE MEDICAL ORBIT
      ====================================================== */}

      <div className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 lg:block xl:right-[8%]">
        <div className="about-medical-orbit relative h-[205px] w-[205px] xl:h-[235px] xl:w-[235px]">
          {/* OUTER RING */}

          <div className="about-ring-one absolute inset-0 rounded-full border border-dashed border-[#69CBF2]/20" />

          {/* MIDDLE RING */}

          <div className="about-ring-two absolute inset-[23px] rounded-full border border-white/[0.09]" />

          {/* INNER GLASS */}

          <div className="absolute inset-[48px] rounded-full border border-[#69CBF2]/15 bg-[#071B3A]/25 backdrop-blur-sm" />

          {/* CENTER */}

          <div className="about-center-pulse absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#69CBF2]/25 bg-[#071B3A]/70 text-[#69CBF2] shadow-[0_0_50px_rgba(46,145,200,0.18)] backdrop-blur-md xl:h-[86px] xl:w-[86px]">
            <HeartPulse
              className="h-[30px] w-[30px] xl:h-[34px] xl:w-[34px]"
              strokeWidth={1.4}
            />
          </div>

          {/* ORBIT DOT 01 */}

          <div className="about-orbit-one absolute inset-0">
            <span className="absolute left-1/2 top-[-6px] flex h-[13px] w-[13px] -translate-x-1/2 items-center justify-center rounded-full bg-[#69CBF2] shadow-[0_0_18px_rgba(105,203,242,0.85)]">
              <span className="h-1 w-1 rounded-full bg-white" />
            </span>
          </div>

          {/* ORBIT DOT 02 */}

          <div className="about-orbit-two absolute inset-[23px]">
            <span className="absolute bottom-[4px] right-[4px] h-[9px] w-[9px] rounded-full bg-white/75 shadow-[0_0_14px_rgba(255,255,255,0.5)]" />
          </div>

          {/* MEDICAL CROSS */}

          <span className="about-orbit-cross absolute -left-[17px] top-[45px] text-[26px] font-light text-[#69CBF2]/35">
            +
          </span>
        </div>
      </div>

      {/* =====================================================
          ECG LINE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-[35px] right-[4%] hidden w-[260px] overflow-hidden opacity-35 lg:block xl:w-[330px]">
        <svg
          viewBox="0 0 500 70"
          fill="none"
          className="h-[48px] w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="about-ecg-path"
            d="
              M0 37
              H85
              L100 37
              L115 21
              L132 56
              L150 8
              L169 37
              H230
              L245 37
              L258 24
              L274 51
              L291 15
              L309 37
              H500
            "
            stroke="#69CBF2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1380px] min-h-[390px] items-center px-4 sm:min-h-[410px] sm:px-6 md:min-h-[430px] lg:min-h-[450px] lg:px-8 xl:min-h-[470px]">
        <div className="about-content w-full max-w-[720px] py-10 sm:py-12 md:py-14 lg:py-16">
          {/* =================================================
              LABEL
          ================================================== */}

          <div className="mb-3 flex items-center gap-2.5 sm:mb-4">
            <span className="about-label-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#69CBF2]/20 bg-[#69CBF2]/10 sm:h-8 sm:w-8">
              <HeartPulse
                className="h-3.5 w-3.5 text-[#69CBF2] sm:h-4 sm:w-4"
                strokeWidth={1.7}
              />
            </span>

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#69CBF2] sm:text-[15px] sm:tracking-[2px]">
              Vighnaharta Hospital
            </span>

            <span className="about-label-line hidden h-px w-[45px] bg-gradient-to-r from-[#69CBF2] to-transparent sm:block" />
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h1 className="m-0 max-w-[680px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
            About{" "}
            <span className="bg-gradient-to-r from-[#69CBF2] via-[#8DDDFB] to-[#BDEBFB] bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          {/* =================================================
              ACCENT
          ================================================== */}

          <div className="mt-4 flex items-center gap-1.5 sm:mt-5">
            <span className="about-accent-main h-[3px] w-10 rounded-full bg-[#55B8E9] sm:w-12" />

            <span className="h-[3px] w-3 rounded-full bg-white/30" />
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p className="mt-4 max-w-[610px] text-[13px] font-normal leading-[1.7] text-white/70 sm:mt-5 sm:text-[15px]">
            Compassionate, reliable and advanced multispeciality healthcare
            for patients and families in Alephata and surrounding areas.
          </p>

          {/* =================================================
              MINI TRUST ROW
          ================================================== */}

          <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <TrustPill icon={Clock3} text="24×7 Care" />

            <TrustPill
              icon={Stethoscope}
              text="Multispeciality"
            />

            <TrustPill
              icon={ShieldCheck}
              text="Patient Focused"
            />
          </div>

          {/* =================================================
              BREADCRUMB
          ================================================== */}

          <div className="mt-5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md sm:mt-6 sm:gap-2 sm:px-4 sm:py-2.5">
            <Link
              to="/"
              className="text-[13px] font-medium leading-[1.7] text-white/65 transition-colors duration-300 hover:text-white sm:text-[15px]"
            >
              Home
            </Link>

            <ChevronRight
              className="h-[13px] w-[13px] shrink-0 text-[#69CBF2] sm:h-[15px] sm:w-[15px]"
              strokeWidth={1.8}
            />

            <span className="text-[13px] font-semibold leading-[1.7] text-[#69CBF2] sm:text-[15px]">
              About Us
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP FLOATING INFO
      ====================================================== */}

      <div className="about-side-info pointer-events-none absolute bottom-8 right-8 hidden items-center gap-3 lg:flex xl:bottom-10 xl:right-[5%]">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-[#69CBF2] backdrop-blur-md">
          <span className="about-side-pulse absolute inset-0 rounded-full border border-[#69CBF2]/20" />

          <Stethoscope
            className="relative z-10 h-4 w-4"
            strokeWidth={1.7}
          />
        </div>

        <div>
          <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#69CBF2] sm:text-[15px]">
            Trusted Healthcare
          </span>

          <span className="mt-0.5 block text-[13px] font-medium leading-[1.7] text-white/65 sm:text-[15px]">
            Alephata, Pune
          </span>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ANIMATED ACCENT
      ====================================================== */}

      <div className="about-bottom-line pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#55B8E9] to-transparent opacity-70" />

      {/* =====================================================
          CSS ANIMATIONS
      ====================================================== */}

      <style>{`
        /* =================================================
           BACKGROUND CINEMATIC MOVEMENT
        ================================================= */

        .about-bg-image {
          transform: scale(1.04);
          animation:
            aboutBackgroundMove
            16s
            ease-in-out
            infinite
            alternate;
          will-change: transform;
        }

        @keyframes aboutBackgroundMove {
          0% {
            transform:
              scale(1.04)
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              scale(1.11)
              translate3d(-1.3%, -0.7%, 0);
          }
        }

        /* =================================================
           LIGHT SWEEP
        ================================================= */

        .about-light-sweep {
          animation:
            aboutLightSweep
            8s
            ease-in-out
            infinite;
        }

        @keyframes aboutLightSweep {
          0% {
            left: -30%;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          55% {
            opacity: 0.8;
          }

          100% {
            left: 115%;
            opacity: 0;
          }
        }

        /* =================================================
           GLOWS
        ================================================= */

        .about-glow-one {
          animation:
            aboutGlowOne
            8s
            ease-in-out
            infinite
            alternate;
        }

        .about-glow-two {
          animation:
            aboutGlowTwo
            10s
            ease-in-out
            infinite
            alternate;
        }

        @keyframes aboutGlowOne {
          from {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          to {
            transform:
              translate3d(45px, 25px, 0)
              scale(1.1);
          }
        }

        @keyframes aboutGlowTwo {
          from {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          to {
            transform:
              translate3d(-40px, -20px, 0)
              scale(1.1);
          }
        }

        /* =================================================
           CONTENT REVEAL
        ================================================= */

        .about-content {
          animation:
            aboutContentReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes aboutContentReveal {
          from {
            opacity: 0;
            transform:
              translate3d(-25px, 18px, 0);
          }

          to {
            opacity: 1;
            transform:
              translate3d(0, 0, 0);
          }
        }

        /* =================================================
           LABEL ICON
        ================================================= */

        .about-label-icon {
          animation:
            aboutLabelPulse
            2.5s
            ease-in-out
            infinite;
        }

        @keyframes aboutLabelPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 0
              rgba(105, 203, 242, 0);
          }

          50% {
            box-shadow:
              0 0 0 8px
              rgba(105, 203, 242, 0.07);
          }
        }

        /* =================================================
           LABEL LINE
        ================================================= */

        .about-label-line {
          transform-origin: left center;
          animation:
            aboutLabelLine
            2.6s
            ease-in-out
            infinite;
        }

        @keyframes aboutLabelLine {
          0%,
          100% {
            transform: scaleX(0.55);
            opacity: 0.45;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        /* =================================================
           ACCENT LINE
        ================================================= */

        .about-accent-main {
          transform-origin: left center;
          animation:
            aboutAccent
            3s
            ease-in-out
            infinite;
        }

        @keyframes aboutAccent {
          0%,
          100% {
            transform: scaleX(0.7);
          }

          50% {
            transform: scaleX(1);
          }
        }

        /* =================================================
           MEDICAL ORBIT FLOAT
        ================================================= */

        .about-medical-orbit {
          animation:
            aboutMedicalFloat
            5s
            ease-in-out
            infinite;
        }

        @keyframes aboutMedicalFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-13px);
          }
        }

        /* =================================================
           ROTATING RINGS
        ================================================= */

        .about-ring-one {
          animation:
            aboutRotate
            19s
            linear
            infinite;
        }

        .about-ring-two {
          animation:
            aboutRotateReverse
            13s
            linear
            infinite;
        }

        .about-orbit-one {
          animation:
            aboutRotate
            8s
            linear
            infinite;
        }

        .about-orbit-two {
          animation:
            aboutRotateReverse
            6s
            linear
            infinite;
        }

        @keyframes aboutRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aboutRotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        /* =================================================
           CENTER PULSE
        ================================================= */

        .about-center-pulse::before,
        .about-center-pulse::after {
          content: "";
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
        }

        .about-center-pulse::before {
          inset: -12px;
          border:
            1px solid
            rgba(105, 203, 242, 0.2);
          animation:
            aboutCenterPulse
            2.8s
            ease-out
            infinite;
        }

        .about-center-pulse::after {
          inset: -24px;
          border:
            1px solid
            rgba(105, 203, 242, 0.09);
          animation:
            aboutCenterPulse
            2.8s
            0.8s
            ease-out
            infinite;
        }

        @keyframes aboutCenterPulse {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        /* =================================================
           ORBIT CROSS
        ================================================= */

        .about-orbit-cross {
          animation:
            aboutCrossFloat
            4s
            ease-in-out
            infinite;
        }

        @keyframes aboutCrossFloat {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(-12px)
              rotate(15deg);
          }
        }

        /* =================================================
           FLOATING MEDICAL +
        ================================================= */

        .about-medical-plus {
          position: absolute;
          font-weight: 300;
          line-height: 1;
          color:
            rgba(105, 203, 242, 0.18);
          animation:
            aboutPlusFloat
            5s
            ease-in-out
            infinite;
        }

        .about-plus-one {
          left: 6%;
          top: 18%;
          font-size: 25px;
        }

        .about-plus-two {
          left: 56%;
          bottom: 16%;
          font-size: 18px;
          animation-delay: 1.4s;
        }

        .about-plus-three {
          right: 3%;
          top: 20%;
          font-size: 22px;
          animation-delay: 2.7s;
        }

        @keyframes aboutPlusFloat {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              rotate(0deg);
          }

          50% {
            transform:
              translate3d(5px, -13px, 0)
              rotate(14deg);
          }
        }

        /* =================================================
           ECG
        ================================================= */

        .about-ecg-path {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          filter:
            drop-shadow(
              0 0 5px
              rgba(105, 203, 242, 0.4)
            );
          animation:
            aboutECG
            4s
            linear
            infinite;
        }

        @keyframes aboutECG {
          0% {
            stroke-dashoffset: 800;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          75% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        /* =================================================
           TRUST PILLS
        ================================================= */

        .about-trust-pill {
          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            border-color 0.3s ease;
        }

        .about-trust-pill:hover {
          transform: translateY(-2px);
          background:
            rgba(255, 255, 255, 0.1);
          border-color:
            rgba(105, 203, 242, 0.25);
        }

        /* =================================================
           SIDE INFO
        ================================================= */

        .about-side-info {
          animation:
            aboutSideReveal
            1s
            0.35s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes aboutSideReveal {
          from {
            opacity: 0;
            transform: translateX(20px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .about-side-pulse {
          animation:
            aboutSidePulse
            2.4s
            ease-out
            infinite;
        }

        @keyframes aboutSidePulse {
          from {
            transform: scale(0.8);
            opacity: 0.8;
          }

          to {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        /* =================================================
           BOTTOM LINE
        ================================================= */

        .about-bottom-line {
          background-size: 200% 100%;
          animation:
            aboutBottomMove
            4s
            linear
            infinite;
        }

        @keyframes aboutBottomMove {
          from {
            background-position: 200% 0;
          }

          to {
            background-position: -200% 0;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 767px) {
          .about-bg-image {
            animation-duration: 20s;
          }

          .about-glow-one,
          .about-glow-two {
            animation: none;
          }

          .about-light-sweep {
            display: none;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .about-bg-image,
          .about-light-sweep,
          .about-glow-one,
          .about-glow-two,
          .about-content,
          .about-label-icon,
          .about-label-line,
          .about-accent-main,
          .about-medical-orbit,
          .about-ring-one,
          .about-ring-two,
          .about-orbit-one,
          .about-orbit-two,
          .about-center-pulse::before,
          .about-center-pulse::after,
          .about-orbit-cross,
          .about-medical-plus,
          .about-ecg-path,
          .about-side-info,
          .about-side-pulse,
          .about-bottom-line {
            animation: none !important;
          }

          .about-content,
          .about-side-info {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   TRUST PILL
========================================================= */

const TrustPill = ({ icon: Icon, text }) => {
  return (
    <div className="about-trust-pill inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1.5 backdrop-blur-md sm:gap-2 sm:px-3 sm:py-2">
      <Icon
        className="h-3.5 w-3.5 shrink-0 text-[#69CBF2] sm:h-4 sm:w-4"
        strokeWidth={1.7}
      />

      <span className="text-[13px] font-semibold leading-[1.7] text-white/80 sm:text-[15px]">
        {text}
      </span>
    </div>
  );
};

export default AboutHero;
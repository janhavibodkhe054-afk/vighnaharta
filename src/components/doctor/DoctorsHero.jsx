import React from "react";
import { Link } from "react-router-dom";

import {
  ChevronRight,
  HeartPulse,
  Stethoscope,
  UserRound,
} from "lucide-react";

const DoctorsHero = () => {
  return (
    <section className="relative isolate flex min-h-[360px] w-full items-center overflow-hidden bg-[#06182F] min-[360px]:min-h-[370px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[430px] xl:min-h-[460px]">
      {/* =====================================================
          FULL BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/doctor-hero.png"
          alt="Vighnaharta Hospital Medical Team"
          className="doctors-bg-image block h-full w-full object-cover object-center sm:object-[center_38%] lg:object-center"
        />
      </div>

      {/* =====================================================
          IMAGE OVERLAYS
      ====================================================== */}

      {/* Main Dark Overlay */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#04152D]/[0.98] via-[#06182F]/[0.88] to-[#06182F]/[0.58] sm:from-[#04152D]/[0.98] sm:via-[#06182F]/[0.84] sm:to-[#06182F]/[0.48] lg:from-[#04152D]/[0.97] lg:via-[#06182F]/[0.76] lg:to-[#06182F]/[0.28]" />

      {/* Bottom Blend */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[150px] bg-gradient-to-t from-[#06182F]/90 via-[#06182F]/40 to-transparent" />

      {/* Top Blend */}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[110px] bg-gradient-to-b from-[#04152D]/45 to-transparent" />

      {/* Blue Image Wash */}

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#2E91C8]/[0.05] via-transparent to-[#55B8E9]/[0.06]" />

      {/* =====================================================
          MOVING GLOW BACKGROUND
      ====================================================== */}

      <div className="doctors-glow-one pointer-events-none absolute -left-[100px] top-[30px] z-0 h-[240px] w-[240px] rounded-full bg-[#2E91C8]/15 blur-[80px] sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px] lg:blur-[110px]" />

      <div className="doctors-glow-two pointer-events-none absolute right-[-120px] top-[-100px] z-0 h-[300px] w-[300px] rounded-full bg-[#55B8E9]/10 blur-[100px] lg:h-[420px] lg:w-[420px]" />

      {/* =====================================================
          DOT PATTERN
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block">
        <span className="doctor-particle particle-1" />
        <span className="doctor-particle particle-2" />
        <span className="doctor-particle particle-3" />
        <span className="doctor-particle particle-4" />
        <span className="doctor-particle particle-5" />
      </div>

      {/* =====================================================
          RIGHT MEDICAL ORBIT
      ====================================================== */}

      <div className="pointer-events-none absolute right-[3%] top-1/2 z-[2] hidden -translate-y-1/2 lg:block xl:right-[6%]">
        <div className="doctor-medical-float relative h-[220px] w-[220px] xl:h-[270px] xl:w-[270px]">
          {/* Outer Ring */}

          <div className="doctor-ring-one absolute inset-0 rounded-full border border-dashed border-[#69CBF2]/25" />

          {/* Middle Ring */}

          <div className="doctor-ring-two absolute inset-[24px] rounded-full border border-white/[0.10]" />

          {/* Inner Ring */}

          <div className="absolute inset-[50px] rounded-full border border-[#69CBF2]/15 bg-[#2E91C8]/[0.05] backdrop-blur-sm" />

          {/* Center */}

          <div className="doctor-center-pulse absolute left-1/2 top-1/2 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#69CBF2]/25 bg-[#071B3A]/75 text-[#69CBF2] shadow-[0_0_55px_rgba(46,145,200,0.18)] backdrop-blur-md xl:h-[102px] xl:w-[102px]">
            <Stethoscope
              className="h-[35px] w-[35px] xl:h-[42px] xl:w-[42px]"
              strokeWidth={1.25}
            />
          </div>

          {/* Orbit 01 */}

          <div className="doctor-orbit-one absolute inset-0">
            <span className="absolute left-1/2 top-[-7px] flex h-[15px] w-[15px] -translate-x-1/2 items-center justify-center rounded-full bg-[#69CBF2] shadow-[0_0_22px_rgba(105,203,242,0.9)]">
              <span className="h-[5px] w-[5px] rounded-full bg-white" />
            </span>
          </div>

          {/* Orbit 02 */}

          <div className="doctor-orbit-two absolute inset-[24px]">
            <span className="absolute bottom-[3px] right-[3px] h-[11px] w-[11px] rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.65)]" />
          </div>

          {/* Orbit 03 */}

          <div className="doctor-orbit-three absolute inset-[50px]">
            <span className="absolute left-[-4px] top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-[#55B8E9] shadow-[0_0_15px_rgba(85,184,233,0.8)]" />
          </div>

          {/* Floating + */}

          <span className="doctor-cross-one absolute -left-6 top-[38px] text-[30px] font-light leading-none text-[#69CBF2]/30">
            +
          </span>

          <span className="doctor-cross-two absolute -right-3 bottom-[36px] text-[23px] font-light leading-none text-white/20">
            +
          </span>

          {/* Floating Line */}

          <span className="doctor-floating-line absolute -right-[25px] top-[55px] h-px w-[45px] bg-gradient-to-r from-[#69CBF2]/70 to-transparent" />
        </div>
      </div>

      {/* =====================================================
          ECG
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-[30px] right-[4%] z-[2] hidden w-[260px] overflow-hidden opacity-35 lg:block xl:w-[330px]">
        <svg
          viewBox="0 0 500 80"
          className="h-[55px] w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="doctor-ecg-path"
            d="
              M0 42
              H72
              L88 42
              L102 23
              L119 61
              L138 8
              L157 42
              H213
              L228 42
              L242 26
              L258 57
              L275 15
              L295 42
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

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 py-10 min-[360px]:px-4 sm:px-6 sm:py-12 md:py-14 lg:px-8 lg:py-16">
        <div className="doctors-hero-content max-w-[720px]">
          {/* LABEL */}

          <div className="mb-3 flex items-center gap-2.5 sm:mb-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#69CBF2]/20 bg-[#69CBF2]/10 backdrop-blur-sm sm:h-9 sm:w-9">
              <HeartPulse
                className="h-4 w-4 text-[#69CBF2]"
                strokeWidth={1.8}
              />
            </span>

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#69CBF2] sm:text-[15px] sm:tracking-[2px]">
              Vighnaharta Hospital
            </span>

            <span className="doctors-label-line hidden h-px w-[45px] bg-gradient-to-r from-[#69CBF2] to-transparent sm:block" />
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h1 className="m-0 max-w-[680px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#69CBF2] via-[#8EDFFC] to-[#B8E9FA] bg-clip-text text-transparent">
              Doctors
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p className="m-0 mt-3 max-w-[610px] text-[13px] font-normal leading-[1.7] text-white/70 sm:mt-4 sm:text-[15px]">
            Get to know the doctors associated with Vighnaharta Hospital,
            Alephata, including our founders and visiting specialists.
          </p>

          {/* =================================================
              MEDICAL TEAM INDICATOR
          ================================================== */}

          <div className="doctors-team-pill mt-5 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-[#06182F]/40 px-3.5 py-2.5 backdrop-blur-md sm:mt-6 sm:px-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2E91C8] text-white shadow-[0_7px_22px_rgba(46,145,200,0.22)] sm:h-10 sm:w-10">
              <UserRound
                className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#69CBF2] sm:text-[15px]">
                Medical Team
              </span>

              <span className="block text-[13px] font-semibold leading-[1.7] text-white/85 sm:text-[15px]">
                Founders &amp; Visiting Doctors
              </span>
            </div>
          </div>

          {/* =================================================
              BREADCRUMB
          ================================================== */}

          <div className="mt-6 flex flex-wrap items-center gap-1.5 text-[13px] font-medium leading-[1.7] sm:mt-7 sm:gap-2 sm:text-[15px]">
            <Link
              to="/"
              className="text-white/50 transition-colors duration-300 hover:text-[#69CBF2]"
            >
              Home
            </Link>

            <ChevronRight
              className="h-4 w-4 text-white/25"
              strokeWidth={1.8}
            />

            <span className="font-semibold text-[#69CBF2]">
              Doctor Details
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="doctors-bottom-accent absolute bottom-0 left-0 right-0 z-10 h-[3px] bg-gradient-to-r from-transparent via-[#55C8F2] to-transparent opacity-80" />

      {/* =====================================================
          CSS ANIMATIONS
      ====================================================== */}

      <style>{`
        /* =================================================
           BACKGROUND IMAGE
        ================================================= */

        .doctors-bg-image {
          transform: scale(1.04);
          animation: doctorsBackgroundMove 16s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes doctorsBackgroundMove {
          0% {
            transform: scale(1.04) translate3d(0, 0, 0);
          }

          100% {
            transform: scale(1.10) translate3d(-1.2%, -0.8%, 0);
          }
        }

        /* =================================================
           MOVING GLOWS
        ================================================= */

        .doctors-glow-one {
          animation: doctorsGlowOne 8s ease-in-out infinite alternate;
        }

        .doctors-glow-two {
          animation: doctorsGlowTwo 10s ease-in-out infinite alternate;
        }

        @keyframes doctorsGlowOne {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          100% {
            transform: translate3d(45px, 25px, 0) scale(1.12);
          }
        }

        @keyframes doctorsGlowTwo {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-45px, 35px, 0);
          }
        }

        /* =================================================
           MAIN MEDICAL FLOAT
        ================================================= */

        .doctor-medical-float {
          animation: doctorMedicalFloat 5s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes doctorMedicalFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        /* =================================================
           ROTATING RINGS
        ================================================= */

        .doctor-ring-one {
          animation: doctorRotate 20s linear infinite;
        }

        .doctor-ring-two {
          animation: doctorRotateReverse 14s linear infinite;
        }

        @keyframes doctorRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes doctorRotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        /* =================================================
           ORBITS
        ================================================= */

        .doctor-orbit-one {
          animation: doctorRotate 8s linear infinite;
        }

        .doctor-orbit-two {
          animation: doctorRotateReverse 6s linear infinite;
        }

        .doctor-orbit-three {
          animation: doctorRotate 5s linear infinite;
        }

        /* =================================================
           CENTER PULSE
        ================================================= */

        .doctor-center-pulse::before,
        .doctor-center-pulse::after {
          content: "";
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
        }

        .doctor-center-pulse::before {
          inset: -14px;
          border: 1px solid rgba(105, 203, 242, 0.22);
          animation: doctorCenterPulse 2.8s ease-out infinite;
        }

        .doctor-center-pulse::after {
          inset: -27px;
          border: 1px solid rgba(105, 203, 242, 0.10);
          animation: doctorCenterPulse 2.8s 0.8s ease-out infinite;
        }

        @keyframes doctorCenterPulse {
          0% {
            transform: scale(0.82);
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          100% {
            transform: scale(1.18);
            opacity: 0;
          }
        }

        /* =================================================
           FLOATING +
        ================================================= */

        .doctor-cross-one {
          animation: doctorCrossFloatOne 4s ease-in-out infinite;
        }

        .doctor-cross-two {
          animation: doctorCrossFloatTwo 5s ease-in-out infinite;
        }

        @keyframes doctorCrossFloatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(4px, -12px, 0) rotate(12deg);
          }
        }

        @keyframes doctorCrossFloatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(-5px, 10px, 0) rotate(-12deg);
          }
        }

        .doctor-floating-line {
          animation: doctorFloatingLine 3.5s ease-in-out infinite;
        }

        @keyframes doctorFloatingLine {
          0%,
          100% {
            width: 35px;
            opacity: 0.25;
          }

          50% {
            width: 60px;
            opacity: 0.8;
          }
        }

        /* =================================================
           ECG
        ================================================= */

        .doctor-ecg-path {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          filter: drop-shadow(
            0 0 5px rgba(105, 203, 242, 0.45)
          );
          animation: doctorECG 4s linear infinite;
        }

        @keyframes doctorECG {
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
           PARTICLES
        ================================================= */

        .doctor-particle {
          position: absolute;
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: #69CBF2;

          box-shadow:
            0 0 8px rgba(105, 203, 242, 0.7),
            0 0 18px rgba(105, 203, 242, 0.35);

          opacity: 0;

          animation:
            doctorParticleFloat
            7s
            linear
            infinite;
        }

        .particle-1 {
          left: 55%;
          bottom: 2%;
          animation-delay: 0s;
        }

        .particle-2 {
          left: 65%;
          bottom: 8%;
          animation-delay: 1.3s;
        }

        .particle-3 {
          left: 75%;
          bottom: 0;
          animation-delay: 2.6s;
        }

        .particle-4 {
          left: 86%;
          bottom: 10%;
          animation-delay: 3.9s;
        }

        .particle-5 {
          left: 94%;
          bottom: 4%;
          animation-delay: 5.2s;
        }

        @keyframes doctorParticleFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(0.5);
            opacity: 0;
          }

          15% {
            opacity: 0.6;
          }

          50% {
            transform: translate3d(12px, -130px, 0) scale(0.8);
            opacity: 0.4;
          }

          100% {
            transform: translate3d(-8px, -280px, 0) scale(1.1);
            opacity: 0;
          }
        }

        /* =================================================
           CONTENT REVEAL
        ================================================= */

        @keyframes doctorsHeroReveal {
          from {
            opacity: 0;
            transform: translate3d(-26px, 20px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .doctors-hero-content {
          animation:
            doctorsHeroReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        /* =================================================
           TEAM PILL
        ================================================= */

        .doctors-team-pill {
          transition:
            border-color 0.3s ease,
            background-color 0.3s ease,
            transform 0.3s ease;
        }

        .doctors-team-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(105, 203, 242, 0.25);
          background: rgba(255, 255, 255, 0.09);
        }

        /* =================================================
           LABEL LINE
        ================================================= */

        .doctors-label-line {
          transform-origin: left center;
          animation:
            doctorsLabelLine
            2.4s
            ease-in-out
            infinite;
        }

        @keyframes doctorsLabelLine {
          0%,
          100% {
            transform: scaleX(0.55);
            opacity: 0.4;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        /* =================================================
           BOTTOM ACCENT
        ================================================= */

        .doctors-bottom-accent {
          background-size: 200% 100%;
          animation:
            doctorAccentMove
            4s
            linear
            infinite;
        }

        @keyframes doctorAccentMove {
          0% {
            background-position: 200% 0;
          }

          100% {
            background-position: -200% 0;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 767px) {
          .doctors-bg-image {
            animation-duration: 20s;
            object-position: 62% center;
          }

          .doctors-glow-one,
          .doctors-glow-two {
            animation: none;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .doctors-bg-image,
          .doctors-glow-one,
          .doctors-glow-two,
          .doctor-medical-float,
          .doctor-ring-one,
          .doctor-ring-two,
          .doctor-orbit-one,
          .doctor-orbit-two,
          .doctor-orbit-three,
          .doctor-center-pulse::before,
          .doctor-center-pulse::after,
          .doctor-cross-one,
          .doctor-cross-two,
          .doctor-floating-line,
          .doctor-ecg-path,
          .doctor-particle,
          .doctors-hero-content,
          .doctors-label-line,
          .doctors-bottom-accent {
            animation: none !important;
          }

          .doctors-hero-content {
            opacity: 1 !important;
            transform: none !important;
          }

          .doctors-bg-image {
            transform: scale(1.04) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DoctorsHero;
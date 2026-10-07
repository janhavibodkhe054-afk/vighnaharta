import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Camera,
  ChevronRight,
  Image,
  Images,
  Sparkles,
} from "lucide-react";

const GalleryHero = () => {
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
    <section className="relative isolate flex min-h-[330px] items-center overflow-hidden bg-[#071B3A] sm:min-h-[350px] md:min-h-[370px] lg:min-h-[390px] xl:min-h-[410px]">
      {/* =====================================================
          FULL BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-30 overflow-hidden">
        <img
          src="/gallery-hero.png"
          alt=""
          aria-hidden="true"
          className="gallery-hero-bg block h-full w-full object-cover object-center"
        />
      </div>

      {/* =====================================================
          IMAGE OVERLAY
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#04152D]/95 via-[#071B3A]/82 to-[#071B3A]/48 md:from-[#04152D]/95 md:via-[#071B3A]/78 md:to-[#071B3A]/38 lg:from-[#04152D]/96 lg:via-[#071B3A]/76 lg:to-[#071B3A]/28" />

      {/* BOTTOM DARK FADE */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[65%] bg-gradient-to-t from-[#06182F]/80 via-[#06182F]/20 to-transparent" />

      {/* SOFT BLUE WASH */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#2E91C8]/[0.07] via-transparent to-[#55B8E9]/[0.05]" />

      {/* =====================================================
          GRID
      ====================================================== */}

      <div className="gallery-grid absolute inset-0 -z-10 opacity-[0.055]" />

      {/* =====================================================
          GLOW
      ====================================================== */}

      <div className="gallery-glow pointer-events-none absolute right-[8%] top-1/2 -z-10 hidden h-[270px] w-[270px] -translate-y-1/2 rounded-full bg-[#2E91C8]/20 blur-[80px] md:block" />

      {/* =====================================================
          LARGE DECORATIVE WORD
      ====================================================== */}

      <span className="pointer-events-none absolute -bottom-5 left-[2%] -z-10 hidden select-none text-[105px] font-black uppercase leading-none tracking-[-7px] text-white/[0.018] lg:block xl:text-[125px]">
        Gallery
      </span>

      {/* =====================================================
          TOP LIGHT
      ====================================================== */}

      <div className="gallery-top-light pointer-events-none absolute left-[-20%] top-0 h-px w-[35%] bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto grid w-full max-w-[1380px] items-center gap-6 px-3 py-10 min-[360px]:px-4 sm:px-6 sm:py-11 md:grid-cols-[1fr_.8fr] md:gap-8 md:py-12 lg:px-8">
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="relative z-20 max-w-[670px]">
          {/* LABEL */}

          <div
            className="mb-3 flex items-center gap-2.5"
            data-aos="fade-right"
          >
            <span className="gallery-mini-icon relative flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-white/10 bg-[#06182F]/45 text-[#69CBF2] backdrop-blur-md sm:h-9 sm:w-9">
              <Images
                className="h-4 w-4"
                strokeWidth={1.6}
              />

              <span className="gallery-mini-pulse absolute inset-[-1px] rounded-[9px] border border-[#69CBF2]/25" />
            </span>

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#69CBF2] sm:text-[15px] sm:tracking-[2px]">
              Inside Vighnaharta Hospital
            </span>

            <span className="h-px w-7 bg-gradient-to-r from-[#69CBF2] to-transparent sm:w-9" />
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h1
            className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
            data-aos="fade-up"
            data-aos-delay="70"
          >
            Hospital{" "}
            <span className="relative inline-block text-[#69CBF2]">
              Gallery

              <span className="gallery-title-line absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#69CBF2] via-[#2E91C8] to-transparent" />
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="m-0 mt-4 max-w-[550px] text-[13px] leading-[1.7] text-white/70 sm:text-[15px]"
            data-aos="fade-up"
            data-aos-delay="130"
          >
            Explore our hospital spaces, facilities and patient care
            environment through our gallery.
          </p>

          {/* =================================================
              BREADCRUMB
          ================================================== */}

          <div
            className="mt-5 flex items-center gap-2 text-[13px] font-semibold leading-[1.7] text-white/45 sm:text-[15px]"
            data-aos="fade-up"
            data-aos-delay="190"
          >
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[#69CBF2]"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4 shrink-0 text-[#69CBF2]" />

            <span className="text-white">
              Gallery
            </span>
          </div>
        </div>

        
      </div>

      {/* =====================================================
          BOTTOM GALLERY INDEX
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/[0.07] bg-[#06182F]/45 backdrop-blur-md">
        <div className="mx-auto flex min-h-[42px] max-w-[1380px] items-center justify-between gap-4 px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#69CBF2]" />

            <span className="truncate text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-white/45 sm:text-[15px]">
              Visual Tour
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <span
                key={item}
                className={`gallery-index-dot h-[2px] rounded-full ${
                  item === 1
                    ? "w-5 bg-[#69CBF2]"
                    : "w-2 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`
        /* ===============================================
           BACKGROUND IMAGE
        =============================================== */

        .gallery-hero-bg {
          transform: scale(1.03);
          animation:
            galleryBgMove
            16s
            ease-in-out
            infinite
            alternate;
          will-change: transform;
        }

        @keyframes galleryBgMove {
          0% {
            transform:
              scale(1.03)
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              scale(1.08)
              translate3d(-1%, -0.5%, 0);
          }
        }

        /* ===============================================
           GRID
        =============================================== */

        .gallery-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.08) 1px,
              transparent 1px
            );

          background-size: 55px 55px;

          animation:
            gridMove
            16s
            linear
            infinite;
        }

        /* ===============================================
           MAIN FRAME
        =============================================== */

        .gallery-main-frame {
          animation:
            mainFrame
            5s
            ease-in-out
            infinite;
        }

        .gallery-frame-back {
          animation:
            backFrame
            6s
            ease-in-out
            infinite;
        }

        .gallery-frame-middle {
          animation:
            middleFrame
            7s
            ease-in-out
            infinite;
        }

        /* ===============================================
           ORBIT
        =============================================== */

        .gallery-orbit {
          animation:
            orbitRotate
            25s
            linear
            infinite;
        }

        .orbit-light {
          animation:
            orbitGlow
            2s
            ease-in-out
            infinite;
        }

        /* ===============================================
           CAMERA
        =============================================== */

        .gallery-camera {
          animation:
            cameraFloat
            3.5s
            ease-in-out
            infinite;
        }

        .camera-wave {
          animation:
            cameraWave
            2.5s
            ease-out
            infinite;
        }

        .camera-wave-two {
          animation-delay: 1.15s;
        }

        /* ===============================================
           SCAN
        =============================================== */

        .gallery-scan {
          animation:
            scanMove
            3s
            linear
            infinite;
        }

        /* ===============================================
           FOCUS
        =============================================== */

        .focus {
          animation:
            focusPulse
            3s
            ease-in-out
            infinite;
        }

        /* ===============================================
           FLOATING
        =============================================== */

        .gallery-float-left {
          animation:
            floatLeft
            4.5s
            ease-in-out
            infinite;
        }

        .gallery-float-right {
          animation:
            floatRight
            5s
            ease-in-out
            infinite;
        }

        /* ===============================================
           TITLE LINE
        =============================================== */

        .gallery-title-line {
          width: 0;

          animation:
            titleDraw
            1.2s
            0.6s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        /* ===============================================
           MINI PULSE
        =============================================== */

        .gallery-mini-pulse {
          animation:
            miniPulse
            2.4s
            ease-out
            infinite;
        }

        /* ===============================================
           GLOW
        =============================================== */

        .gallery-glow {
          animation:
            glowPulse
            6s
            ease-in-out
            infinite
            alternate;
        }

        /* ===============================================
           TOP LIGHT
        =============================================== */

        .gallery-top-light {
          animation:
            topLight
            7s
            linear
            infinite;
        }

        /* ===============================================
           INDEX
        =============================================== */

        .gallery-index-dot {
          animation:
            indexPulse
            4s
            ease-in-out
            infinite;
        }

        /* ===============================================
           KEYFRAMES
        =============================================== */

        @keyframes gridMove {
          to {
            background-position: 55px 55px;
          }
        }

        @keyframes mainFrame {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes backFrame {
          0%,
          100% {
            transform:
              translate(-8px, 3px)
              rotate(-9deg);
          }

          50% {
            transform:
              translate(-16px, -3px)
              rotate(-12deg);
          }
        }

        @keyframes middleFrame {
          0%,
          100% {
            transform:
              translate(8px, 3px)
              rotate(8deg);
          }

          50% {
            transform:
              translate(16px, 8px)
              rotate(11deg);
          }
        }

        @keyframes orbitRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitGlow {
          50% {
            box-shadow:
              0 0 18px
              rgba(105, 203, 242, 0.8);
          }
        }

        @keyframes cameraFloat {
          50% {
            transform: scale(1.06);
          }
        }

        @keyframes cameraWave {
          0% {
            transform: scale(0.8);
            opacity: 0.7;
          }

          100% {
            transform: scale(1.65);
            opacity: 0;
          }
        }

        @keyframes scanMove {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(185px);
            opacity: 0;
          }
        }

        @keyframes focusPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(0.85);
          }
        }

        @keyframes floatLeft {
          50% {
            transform:
              translate(-5px, -9px)
              rotate(-7deg);
          }
        }

        @keyframes floatRight {
          50% {
            transform:
              translate(6px, 8px)
              rotate(7deg);
          }
        }

        @keyframes titleDraw {
          to {
            width: 100%;
          }
        }

        @keyframes miniPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }

          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes glowPulse {
          to {
            transform:
              translateY(-50%)
              scale(1.2);

            opacity: 0.75;
          }
        }

        @keyframes topLight {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(420%);
          }
        }

        @keyframes indexPulse {
          0%,
          100% {
            opacity: 0.45;
          }

          50% {
            opacity: 1;
          }
        }

        /* ===============================================
           MOBILE
        =============================================== */

        @media (max-width: 767px) {
          .gallery-grid {
            animation: none;
          }

          .gallery-hero-bg {
            object-position: center center;
            animation-duration: 20s;
          }
        }

        /* ===============================================
           REDUCED MOTION
        =============================================== */

        @media (prefers-reduced-motion: reduce) {
          .gallery-hero-bg,
          .gallery-grid,
          .gallery-main-frame,
          .gallery-frame-back,
          .gallery-frame-middle,
          .gallery-orbit,
          .orbit-light,
          .gallery-camera,
          .camera-wave,
          .gallery-scan,
          .focus,
          .gallery-float-left,
          .gallery-float-right,
          .gallery-title-line,
          .gallery-mini-pulse,
          .gallery-glow,
          .gallery-top-light,
          .gallery-index-dot {
            animation: none !important;
          }

          .gallery-title-line {
            width: 100%;
          }

          .gallery-hero-bg {
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  );
};

export default GalleryHero;
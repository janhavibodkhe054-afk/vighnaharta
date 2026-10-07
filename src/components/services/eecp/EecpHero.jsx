import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  HeartPulse,
  Activity,
  ShieldPlus,
} from "lucide-react";

const EecpHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 20,
    });
  }, []);

  return (
    <section className="relative isolate flex min-h-[500px] overflow-hidden bg-[#071B3A] sm:min-h-[480px] lg:min-h-[470px]">
      {/* =====================================================
          FULL SECTION BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-30">
        <img
          src="/eecp-hero.png"
          alt="EECP Treatment at Vighnaharta Hospital"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* =====================================================
          OVERLAYS
      ====================================================== */}

      <div className="absolute inset-0 -z-20 bg-[#06182F]/35" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#06182F]/95 via-[#071B3A]/78 to-[#071B3A]/20 sm:from-[#06182F]/94 sm:via-[#071B3A]/72 sm:to-[#071B3A]/15 lg:from-[#06182F]/94 lg:via-[#071B3A]/66 lg:to-transparent" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#06182F]/55 via-transparent to-[#06182F]/15" />

      {/* =====================================================
          BLUE GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-[160px] top-0 -z-10 h-[380px] w-[380px] rounded-full bg-[#2E91C8]/15 blur-[120px]" />

      {/* =====================================================
          DECORATIVE ECG
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-[35px] right-[-20px] hidden w-[40%] opacity-[0.12] lg:block">
        <svg
          viewBox="0 0 900 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 96H155L184 96L210 49L246 139L285 18L326 157L365 96H480L510 96L535 64L568 123L602 72L630 96H900"
            stroke="#69CBF2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="eecp-heart-line"
          />
        </svg>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1380px] items-center px-4 py-10 sm:px-6 sm:py-11 lg:px-8 lg:py-12">
        <div className="w-full max-w-[720px]">
          {/* BREADCRUMB */}

          <div
            data-aos="fade-down"
            className="mb-4 flex flex-wrap items-center gap-2 text-[13px] font-medium leading-[1.7] text-white/60 sm:text-[15px]"
          >
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[#69CBF2]"
            >
              Home
            </Link>

            <span className="text-white/30">/</span>

            <Link
              to="/services"
              className="transition-colors duration-300 hover:text-[#69CBF2]"
            >
              Services
            </Link>

            <span className="text-white/30">/</span>

            <span className="text-[#8EDFFC]">
              EECP Treatment
            </span>
          </div>

          {/* LABEL */}

          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="mb-3 flex items-center gap-3"
          >
            <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-[#69CBF2]/30 bg-[#2E91C8]/15 text-[#69CBF2] backdrop-blur-md">
              <HeartPulse
                className="h-[18px] w-[18px]"
                strokeWidth={1.8}
              />
            </span>

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.8px] text-[#69CBF2] sm:text-[15px]">
              EECP Treatment
            </span>

            <span className="hidden h-px w-10 bg-[#69CBF2]/50 sm:block" />
          </div>

          {/* HEADING */}

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="m-0 max-w-[700px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
          >
            Non-Invasive Support for{" "}
            <span className="text-[#69CBF2]">
              Cardiac Care
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="m-0 mt-4 max-w-[650px] text-[13px] leading-[1.7] text-white/75 sm:text-[15px]"
          >
            EECP (Enhanced External Counterpulsation) is a
            non-invasive treatment approach used as part of
            appropriate cardiac care. Treatment is considered
            after medical evaluation and according to individual
            clinical requirements.
          </p>

          {/* HIGHLIGHTS */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 flex flex-wrap gap-2 sm:gap-2.5"
          >
            <HeroPill
              icon={ShieldPlus}
              text="Non-Invasive"
            />

            <HeroPill
              icon={HeartPulse}
              text="Cardiac Care Support"
            />

            <HeroPill
              icon={Activity}
              text="Clinical Evaluation"
            />
          </div>

          {/* CTA */}

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-5"
          >
            <Link
              to="/contact"
              className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#2E91C8] to-[#55B8E9] px-6 py-2.5 text-[13px] font-bold leading-[1.7] text-white shadow-[0_12px_30px_rgba(46,145,200,.25)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_36px_rgba(46,145,200,.34)] min-[420px]:w-auto sm:text-[15px]"
            >
              Contact Hospital

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-gradient-to-r from-[#102D5F] via-[#55B8E9] to-[#102D5F]" />

      <style>{`
        @keyframes eecpLine {
          from {
            stroke-dashoffset: 1300;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        .eecp-heart-line {
          stroke-dasharray: 1300;
          stroke-dashoffset: 1300;
          animation: eecpLine 5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .eecp-heart-line {
            animation: none !important;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   PILL
========================================================= */

const HeroPill = ({ icon: Icon, text }) => {
  return (
    <div className="flex min-h-[38px] items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-white/90 backdrop-blur-md">
      <Icon
        className="h-[15px] w-[15px] shrink-0 text-[#69CBF2]"
        strokeWidth={1.9}
      />

      <span className="text-[13px] font-semibold leading-[1.7] sm:text-[15px]">
        {text}
      </span>
    </div>
  );
};

export default EecpHero;
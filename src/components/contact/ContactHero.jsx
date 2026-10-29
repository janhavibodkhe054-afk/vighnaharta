import React from "react";
import { Link } from "react-router-dom";

import {
  ChevronRight,
  Phone,
  Clock3,
} from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#06182F]">
      {/* =====================================================
          FULL BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-30 overflow-hidden">
        <img
          src="/contact-hero.png"
          alt=""
          aria-hidden="true"
          className="contact-bg-image block h-full w-full object-cover object-center sm:object-[center_45%] lg:object-center"
        />
      </div>

      {/* =====================================================
          ORIGINAL NAVY / BLUE OVERLAY
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#04152D]/[0.98] via-[#061B36]/[0.90] to-[#071B3A]/55 sm:from-[#04152D]/[0.98] sm:via-[#061B36]/85 sm:to-[#071B3A]/45 lg:from-[#04152D]/[0.98] lg:via-[#061B36]/78 lg:to-[#071B3A]/25" />

      {/* =====================================================
          LEFT READABILITY GRADIENT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-[#04152D]/55 via-[#06182F]/20 to-transparent md:w-[85%] lg:w-[72%]" />

      {/* =====================================================
          BOTTOM OVERLAY
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%] bg-gradient-to-t from-[#06182F]/85 via-[#06182F]/20 to-transparent" />

      {/* =====================================================
          ORIGINAL BLUE GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-[120px] -top-[130px] -z-10 h-[300px] w-[300px] rounded-full bg-[#2E91C8]/15 blur-[90px] sm:h-[360px] sm:w-[360px] lg:h-[470px] lg:w-[470px] lg:blur-[120px]" />

      <div className="pointer-events-none absolute -right-[150px] bottom-[-160px] -z-10 h-[320px] w-[320px] rounded-full bg-[#55B8E9]/10 blur-[90px] lg:h-[460px] lg:w-[460px]" />

      {/* =====================================================
          DOT PATTERN
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:radial-gradient(#69CBF2_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[340px] w-full max-w-[1380px] items-center px-3 min-[360px]:min-h-[350px] min-[360px]:px-4 sm:min-h-[370px] sm:px-6 md:min-h-[390px] lg:min-h-[410px] lg:px-8 xl:min-h-[430px]">
        <div className="w-full py-9 sm:py-10 md:py-11 lg:py-12">
          <div className="contact-hero-content max-w-[730px]">
            {/* LABEL */}

            <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
              <span className="h-[2px] w-7 rounded-full bg-[#55B8E9] sm:w-9" />

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#69CBF2] sm:text-[15px] sm:tracking-[2px]">
                Contact Vighnaharta Hospital
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================== */}

            <h1 className="m-0 max-w-[720px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
              We're Here When{" "}
              <span className="bg-gradient-to-r from-[#55B8E9] to-[#7BD5F6] bg-clip-text text-transparent">
                You Need Us
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p className="m-0 mt-4 max-w-[610px] text-[13px] leading-[1.7] text-white/65 sm:text-[15px]">
              Contact Vighnaharta Hospital, Alephata for appointments,
              medical assistance and hospital information.
            </p>

            {/* =================================================
                BREADCRUMB
            ================================================== */}

            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 backdrop-blur-md sm:mt-6 sm:gap-2 sm:px-4 sm:py-2.5">
              <Link
                to="/"
                className="text-[13px] font-medium leading-[1.7] text-white/55 transition-colors duration-300 hover:text-white sm:text-[15px]"
              >
                Home
              </Link>

              <ChevronRight
                className="h-4 w-4 shrink-0 text-[#69CBF2]"
                strokeWidth={1.8}
              />

              <span className="text-[13px] font-semibold leading-[1.7] text-[#69CBF2] sm:text-[15px]">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE BOTTOM QUICK INFO
      ====================================================== */}

      <div className="relative z-20 border-t border-white/[0.07] bg-[#06182F]/70 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-[1380px] grid-cols-2 divide-x divide-white/[0.07] px-3 min-[360px]:px-4 sm:px-6">
          {/* CALL */}

          <a
            href="tel:+917757004175"
            className="flex min-h-[68px] items-center gap-2.5 pr-2 min-[360px]:gap-3 sm:min-h-[74px] sm:pr-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2E91C8]/15 text-[#69CBF2] sm:h-10 sm:w-10">
              <Phone
                className="h-4 w-4"
                strokeWidth={1.8}
              />
            </div>

            <div className="min-w-0">
              <span className="block text-[13px] font-bold uppercase leading-[1.5] tracking-[0.7px] text-white/40 sm:text-[15px]">
                Call Hospital
              </span>

              <span className="mt-0.5 block whitespace-nowrap text-[13px] font-semibold leading-[1.5] text-white/85 sm:text-[15px]">
                +91 7757004175
              </span>
            </div>
          </a>

          {/* HOURS */}

          <div className="flex min-h-[68px] items-center gap-2.5 pl-2 min-[360px]:gap-3 sm:min-h-[74px] sm:pl-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2E91C8]/15 text-[#69CBF2] sm:h-10 sm:w-10">
              <Clock3
                className="h-4 w-4"
                strokeWidth={1.8}
              />
            </div>

            <div className="min-w-0">
              <span className="block text-[13px] font-bold uppercase leading-[1.5] tracking-[0.7px] text-white/40 sm:text-[15px]">
                Hospital Hours
              </span>

              <span className="mt-0.5 block text-[13px] font-semibold leading-[1.5] text-white/85 sm:text-[15px]">
                Open 24 Hours
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ORIGINAL BLUE BOTTOM LINE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-[#55B8E9]/40 to-transparent" />

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        .contact-bg-image {
          transform: scale(1.025);
          animation:
            contactBgMove
            16s
            ease-in-out
            infinite
            alternate;
          will-change: transform;
        }

        @keyframes contactBgMove {
          0% {
            transform:
              scale(1.025)
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              scale(1.075)
              translate3d(-0.8%, -0.5%, 0);
          }
        }

        @keyframes contactHeroReveal {
          from {
            opacity: 0;
            transform: translate3d(-24px, 18px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .contact-hero-content {
          animation:
            contactHeroReveal
            0.85s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @media (max-width: 767px) {
          .contact-bg-image {
            object-position: 60% center;
            animation-duration: 20s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-bg-image,
          .contact-hero-content {
            animation: none !important;
          }

          .contact-bg-image {
            transform: scale(1.025) !important;
          }

          .contact-hero-content {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactHero;
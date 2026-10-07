import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Activity,
  Ambulance,
  ArrowRight,
  FlaskConical,
  HeartPulse,
  Pill,
  Scissors,
} from "lucide-react";

/* =========================================================
   FACILITIES
========================================================= */

const facilities = [
  { title: "ICU", icon: Activity },
  { title: "OT", icon: Scissors },
  { title: "Laboratory", icon: FlaskConical },
  { title: "Pharmacy", icon: Pill },
  { title: "Ambulance", icon: Ambulance },
];

/* =========================================================
   FACILITIES HERO
========================================================= */

const FacilitiesHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 20,
    });

    AOS.refresh();
  }, []);

  const scrollToFacilities = () => {
    document
      .getElementById("facilities-overview")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#071B3A]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_82%_35%,rgba(46,145,200,.22),transparent_30%),linear-gradient(112deg,#06182F_0%,#081F3E_52%,#0A3157_100%)]" />

      <div className="facility-hero-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.045]" />

      <div className="hero-glow pointer-events-none absolute -right-[100px] top-[35%] -z-10 h-[350px] w-[350px] rounded-full bg-[#2E91C8]/20 blur-[100px] sm:h-[450px] sm:w-[450px]" />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-7 px-3 py-9 min-[360px]:px-4 min-[390px]:px-5 sm:px-6 sm:py-11 md:grid-cols-[.88fr_1.12fr] md:gap-5 md:py-10 lg:min-h-[410px] lg:gap-7 lg:px-8 lg:py-12 xl:min-h-[430px] 2xl:max-w-[1500px]">
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="relative z-20 mx-auto w-full max-w-[620px] md:mx-0">
          {/* LABEL */}

          <div
            className="mb-3 flex items-center gap-2.5"
            data-aos="fade-right"
          >
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-[#69CBF2]/20 bg-[#69CBF2]/10 text-[#69CBF2] sm:h-9 sm:w-9">
              <HeartPulse
                className="h-4 w-4"
                strokeWidth={1.6}
              />

              <span className="label-pulse absolute inset-[-1px] rounded-[9px] border border-[#69CBF2]/20" />
            </span>

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#69CBF2] sm:text-[15px] sm:tracking-[2px]">
              Our Hospital Facilities
            </span>

            <span className="h-px w-6 bg-gradient-to-r from-[#69CBF2] to-transparent sm:w-9" />
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h1
            className="m-0 max-w-[610px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            Essential Healthcare

            <span className="mt-0.5 block text-[#69CBF2]">
              Facilities Under One Roof
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="m-0 mt-3 max-w-[510px] text-[13px] leading-[1.7] text-white/60 sm:mt-4 sm:text-[15px]"
            data-aos="fade-up"
            data-aos-delay="110"
          >
            Essential facilities for diagnosis, treatment, surgical care and
            emergencies.
          </p>

          {/* =================================================
              CTA
          ================================================== */}

          <div
            className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            <button
              type="button"
              onClick={scrollToFacilities}
              className="group flex min-h-[44px] items-center gap-2.5 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-[13px] font-bold leading-[1.4] text-[#102D5F] shadow-[0_10px_30px_rgba(0,0,0,.14)] transition-all duration-300 hover:-translate-y-1 sm:min-h-[48px] sm:pl-5 sm:text-[15px]"
            >
              Explore Facilities

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#102D5F] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#2E91C8] sm:h-9 sm:w-9">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>

            <a
              href="tel:+919766999474"
              className="group flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[13px] font-bold leading-[1.4] text-white backdrop-blur-md transition-all duration-300 hover:border-[#FF7180]/35 hover:bg-[#FF5266]/10 sm:min-h-[48px] sm:px-5 sm:text-[15px]"
            >
              <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF5266]/10 text-[#FF7380]">
                <Activity className="h-3.5 w-3.5" />

                <span className="emergency-ring absolute inset-0 rounded-full border border-[#FF7380]/35" />
              </span>

              24×7 Emergency
            </a>
          </div>
        </div>

        {/* ===================================================
            RIGHT IMAGE VISUAL
        ==================================================== */}

        <div
          className="relative mx-auto h-[260px] w-full max-w-[680px] min-[360px]:h-[275px] min-[390px]:h-[290px] sm:h-[340px] md:h-[320px] lg:h-[360px] xl:h-[380px]"
          data-aos="fade-left"
          data-aos-delay="80"
        >
          {/* BACK PLATE */}

          <div className="image-back-plate absolute inset-x-[7%] bottom-[2%] top-[6%] rotate-[2deg] rounded-[22px] border border-white/[0.07] bg-white/[0.025] sm:rounded-[28px]" />

          {/* =================================================
              IMAGE CARD
          ================================================== */}

          <div className="hero-image-card absolute inset-x-[2%] bottom-[10%] top-[2%] overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#0A2848] shadow-[0_25px_60px_rgba(0,0,0,.3)] min-[390px]:inset-x-[4%] sm:inset-x-[5%] sm:rounded-[28px] md:left-[3%] md:right-[12%] lg:left-[4%] lg:right-[14%]">
            <img
              src="/facilities-hero.png"
              alt="Vighnaharta Hospital facilities"
              className="hero-image block h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#06182F]/15 via-transparent to-[#06182F]/10" />

            <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#06182F]/80 to-transparent" />

            {/* CORNERS */}

            <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#69CBF2]/70 sm:left-4 sm:top-4 sm:h-7 sm:w-7" />

            <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-[#69CBF2]/70 sm:right-4 sm:top-4 sm:h-7 sm:w-7" />

            <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#69CBF2]/70 sm:bottom-4 sm:left-4 sm:h-7 sm:w-7" />

            <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#69CBF2]/70 sm:bottom-4 sm:right-4 sm:h-7 sm:w-7" />

            {/* SCAN */}

            <span className="scan-line absolute left-[5%] right-[5%] top-0 h-px bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent shadow-[0_0_12px_rgba(105,203,242,.9)]" />

            {/* IMAGE BOTTOM LABEL */}

            <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.2px] text-[#69CBF2] sm:text-[15px]">
                Vighnaharta Hospital
              </span>

              <p className="m-0 mt-[1px] text-[13px] font-semibold leading-[1.7] text-white sm:text-[15px]">
                Healthcare Facilities
              </p>
            </div>
          </div>

          {/* =================================================
              DESKTOP FACILITY RAIL
          ================================================== */}

          <div className="absolute right-0 top-1/2 z-30 hidden w-[175px] -translate-y-1/2 md:block lg:w-[205px]">
            <span className="absolute bottom-3 left-[19px] top-3 w-px bg-gradient-to-b from-transparent via-[#69CBF2]/30 to-transparent lg:left-[21px]" />

            <span className="rail-light absolute left-[18px] top-0 h-[40px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#69CBF2] to-transparent lg:left-[20px]" />

            <div className="relative space-y-1.5">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;

                return (
                  <div
                    key={facility.title}
                    className="facility-item group flex min-h-[44px] items-center gap-2.5 rounded-[12px] border border-white/[0.09] bg-[#071B3A]/90 p-1.5 pr-3 shadow-[0_8px_22px_rgba(0,0,0,.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-[#69CBF2]/35 hover:bg-[#0A2A4D] lg:min-h-[48px] lg:rounded-[14px] lg:p-2 lg:pr-3.5"
                    data-aos="fade-left"
                    data-aos-delay={150 + index * 50}
                  >
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-[#69CBF2]/15 bg-[#69CBF2]/10 text-[#69CBF2] lg:h-9 lg:w-9 lg:rounded-[10px]">
                      <Icon
                        className="h-4 w-4"
                        strokeWidth={1.5}
                      />

                      <span className="facility-ring absolute inset-[-1px] rounded-[9px] border border-[#69CBF2]/25 lg:rounded-[10px]" />
                    </span>

                    <span className="whitespace-nowrap text-[13px] font-bold leading-[1.5] text-white/80 sm:text-[15px]">
                      {facility.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              MOBILE / SMALL TABLET FACILITY CHIPS
          ================================================== */}

          <div className="absolute bottom-0 left-1/2 z-30 flex w-[96%] -translate-x-1/2 gap-1.5 overflow-x-auto pb-[2px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <div
                  key={facility.title}
                  className="flex min-h-[38px] shrink-0 items-center gap-1.5 rounded-full border border-white/[0.1] bg-[#071B3A]/95 px-3 py-1.5 shadow-[0_6px_16px_rgba(0,0,0,.2)] backdrop-blur-xl"
                >
                  <Icon
                    className="h-3.5 w-3.5 shrink-0 text-[#69CBF2]"
                    strokeWidth={1.6}
                  />

                  <span className="whitespace-nowrap text-[13px] font-semibold leading-[1.5] text-white/75 sm:text-[15px]">
                    {facility.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* DECORATION */}

          <span className="floating-dot absolute left-[8%] top-[3%] h-1.5 w-1.5 rounded-full bg-[#69CBF2]" />

          <span className="floating-dot dot-two absolute right-[8%] top-[15%] h-1 w-1 rounded-full bg-white/60" />
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.07]">
        <span className="bottom-runner absolute top-[-1px] h-[2px] w-[120px] bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent" />
      </div>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`
        .facility-hero-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            );

          background-size: 55px 55px;

          mask-image:
            linear-gradient(
              to right,
              transparent 5%,
              black 65%
            );
        }

        .hero-glow {
          animation:
            heroGlow
            8s
            ease-in-out
            infinite
            alternate;
        }

        .image-back-plate {
          animation:
            backPlate
            6s
            ease-in-out
            infinite;
        }

        .hero-image-card {
          animation:
            imageFloat
            6s
            ease-in-out
            infinite;
        }

        .hero-image {
          transform: scale(1.03);

          animation:
            imageZoom
            11s
            ease-in-out
            infinite
            alternate;
        }

        .scan-line {
          animation:
            scanMove
            4s
            linear
            infinite;
        }

        .rail-light {
          animation:
            railMove
            3.6s
            linear
            infinite;
        }

        .facility-ring,
        .label-pulse {
          animation:
            ringPulse
            2.5s
            ease-out
            infinite;
        }

        .emergency-ring {
          animation:
            emergencyPulse
            2s
            ease-out
            infinite;
        }

        .floating-dot {
          animation:
            dotFloat
            4s
            ease-in-out
            infinite;
        }

        .dot-two {
          animation-delay: 1.3s;
        }

        .bottom-runner {
          animation:
            bottomTravel
            7s
            linear
            infinite;
        }

        @keyframes heroGlow {
          to {
            transform:
              translate(-35px, 20px)
              scale(1.12);
          }
        }

        @keyframes backPlate {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(2deg);
          }

          50% {
            transform:
              translateY(-5px)
              rotate(1deg);
          }
        }

        @keyframes imageFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes imageZoom {
          from {
            transform: scale(1.03);
          }

          to {
            transform: scale(1.08);
          }
        }

        @keyframes scanMove {
          0% {
            top: 3%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            top: 97%;
            opacity: 0;
          }
        }

        @keyframes railMove {
          0% {
            top: 0;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            top: calc(100% - 40px);
            opacity: 0;
          }
        }

        @keyframes ringPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.65;
          }

          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes emergencyPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.7;
          }

          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes dotFloat {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }

          50% {
            transform: translateY(-9px);
            opacity: 1;
          }
        }

        @keyframes bottomTravel {
          from {
            transform: translateX(-130px);
          }

          to {
            transform: translateX(calc(100vw + 130px));
          }
        }

        /* =================================================
           320PX
        ================================================= */

        @media (max-width: 359px) {
          .hero-image-card {
            left: 0;
            right: 0;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 767px) {
          .facility-hero-grid {
            mask-image: none;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .hero-glow,
          .image-back-plate,
          .hero-image-card,
          .hero-image,
          .scan-line,
          .rail-light,
          .facility-ring,
          .label-pulse,
          .emergency-ring,
          .floating-dot,
          .bottom-runner {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FacilitiesHero;
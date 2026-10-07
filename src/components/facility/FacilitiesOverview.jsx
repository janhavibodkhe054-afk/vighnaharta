import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Activity,
  Ambulance,
  FlaskConical,
  HeartPulse,
  Pill,
  Scissors,
  Sparkles,
} from "lucide-react";

/* =========================================================
   FACILITIES
========================================================= */

const facilities = [
  {
    no: "01",
    title: "Critical Care",
    text: "ICU and emergency support for patients requiring close medical attention.",
    icon: Activity,
    tag: "ICU + Emergency",
  },
  {
    no: "02",
    title: "Surgical Infrastructure",
    text: "Operation Theatre infrastructure to support applicable surgical procedures.",
    icon: Scissors,
    tag: "Operation Theatre",
  },
  {
    no: "03",
    title: "Diagnostic Support",
    text: "Pathology Laboratory, Digital X-Ray and ECG facilities for essential diagnostic requirements.",
    icon: FlaskConical,
    tag: "Lab + X-Ray + ECG",
  },
  {
    no: "04",
    title: "Patient Support",
    text: "In-house pharmacy, ambulance support and cashless treatment assistance for eligible patients.",
    icon: Pill,
    tag: "Pharmacy + Ambulance",
  },
];

/* =========================================================
   FACILITIES OVERVIEW
========================================================= */

const FacilitiesOverview = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });

    AOS.refresh();
  }, []);

  return (
    <section
      id="facilities-overview"
      className="relative isolate overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFD_50%,#FFFFFF_100%)]" />

      <div className="blueprint-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.28]" />

      <div className="absolute -left-[180px] top-[30%] -z-10 h-[350px] w-[350px] rounded-full bg-[#69CBF2]/10 blur-[100px]" />

      <div className="absolute -right-[180px] bottom-[5%] -z-10 h-[350px] w-[350px] rounded-full bg-[#2E91C8]/10 blur-[100px]" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="grid items-end gap-5 md:grid-cols-[.85fr_1.15fr] md:gap-10">
          <div data-aos="fade-right">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#EAF7FC] text-[#2E91C8] sm:h-9 sm:w-9">
                <Sparkles
                  className="h-4 w-4"
                  strokeWidth={1.7}
                />
              </span>

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px] sm:tracking-[2px]">
                Everything Patients Need
              </span>

              <span className="h-px w-8 bg-[#2E91C8]/30" />
            </div>

            <h2 className="m-0 max-w-[590px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
              Facilities Designed

              <span className="block text-[#2E91C8]">
                Around Patient Care.
              </span>
            </h2>
          </div>

          <div
            className="md:border-l md:border-[#102D5F]/10 md:pl-8"
            data-aos="fade-left"
          >
            <p className="m-0 max-w-[650px] text-[13px] leading-[1.7] text-[#64748B] sm:text-[15px]">
              From critical care and surgical infrastructure to diagnostics,
              medicines and emergency transportation, Vighnaharta Hospital
              brings essential healthcare support together at one location.
            </p>
          </div>
        </div>

        {/* ===================================================
            DESKTOP BLUEPRINT
        ==================================================== */}

        <div className="relative mt-10 hidden h-[460px] lg:block xl:mt-12">
          {/* BLUEPRINT FRAME */}

          <div className="absolute inset-x-0 top-[40px] h-[350px] rounded-[34px] border border-[#102D5F]/[0.06] bg-white/45 backdrop-blur-[2px]">
            <span className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#2E91C8]/25" />

            <span className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#2E91C8]/25" />

            <span className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[#2E91C8]/25" />

            <span className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#2E91C8]/25" />

            <span className="absolute left-6 top-[-13px] bg-[#F9FCFD] px-3 text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#94A3B8] sm:text-[15px]">
              Patient Care Infrastructure
            </span>
          </div>

          {/* =================================================
              MAIN ROUTE
          ================================================== */}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1300 430"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M40 245 H155 V150 H340 V275 H530 V115 H735 V245 H925 V165 H1115 V245 H1260"
              stroke="#DCECF4"
              strokeWidth="2"
              strokeDasharray="7 8"
            />

            <path
              className="care-signal"
              d="M40 245 H155 V150 H340 V275 H530 V115 H735 V245 H925 V165 H1115 V245 H1260"
              stroke="#2E91C8"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* =================================================
              START
          ================================================== */}

          <div className="absolute left-[1%] top-[222px] z-20">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#2E91C8]/20 bg-white text-[#2E91C8] shadow-[0_10px_30px_rgba(16,45,95,.08)]">
              <HeartPulse
                className="h-5 w-5"
                strokeWidth={1.6}
              />

              <span className="start-ring absolute inset-0 rounded-full border border-[#2E91C8]/25" />
            </div>
          </div>

          {/* =================================================
              FACILITY 01
          ================================================== */}

          <BlueprintFacility
            item={facilities[0]}
            className="left-[9%] top-[25px] w-[260px]"
            aos="fade-down-right"
          />

          {/* =================================================
              FACILITY 02
          ================================================== */}

          <BlueprintFacility
            item={facilities[1]}
            className="left-[31%] top-[260px] w-[270px]"
            aos="fade-up"
          />

          {/* =================================================
              FACILITY 03
          ================================================== */}

          <BlueprintFacility
            item={facilities[2]}
            className="right-[27%] top-[-8px] w-[285px]"
            aos="fade-down"
          />

          {/* =================================================
              FACILITY 04
          ================================================== */}

          <BlueprintFacility
            item={facilities[3]}
            className="right-[3%] top-[205px] w-[280px]"
            aos="fade-left"
          />

          {/* =================================================
              SMALL SIGNAL DOTS
          ================================================== */}

          <BlueprintNode className="left-[12%] top-[145px]" />

          <BlueprintNode className="left-[40%] top-[280px]" />

          <BlueprintNode className="left-[56.5%] top-[120px]" />

          <BlueprintNode className="right-[13%] top-[250px]" />

          {/* =================================================
              MOVING CARE SIGNAL
          ================================================== */}

          <div className="care-traveller absolute left-[3%] top-[239px] z-10 h-3 w-3 rounded-full bg-[#69CBF2] shadow-[0_0_0_6px_rgba(105,203,242,.12),0_0_20px_rgba(46,145,200,.65)]" />

          {/* =================================================
              END
          ================================================== */}

          <div className="absolute right-[1%] top-[222px] z-20">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#102D5F] text-white shadow-[0_12px_30px_rgba(16,45,95,.18)]">
              <Ambulance
                className="h-5 w-5"
                strokeWidth={1.5}
              />

              <span className="end-ring absolute inset-0 rounded-full border border-[#69CBF2]/30" />
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE + TABLET
        ==================================================== */}

        <div className="relative mt-8 lg:hidden">
          {/* VERTICAL ROUTE */}

          <div className="absolute bottom-[28px] left-[18px] top-[28px] w-px bg-[#D9EAF2] min-[360px]:left-[20px] sm:left-[26px]" />

          <div className="mobile-signal absolute left-[17px] top-[25px] h-[65px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent min-[360px]:left-[19px] sm:left-[25px]" />

          {/* =================================================
              START
          ================================================== */}

          <div
            className="relative mb-4 flex items-center gap-3"
            data-aos="fade-right"
          >
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#102D5F] text-white min-[360px]:h-10 min-[360px]:w-10 sm:h-[52px] sm:w-[52px]">
              <HeartPulse
                className="h-4 w-4 sm:h-5 sm:w-5"
                strokeWidth={1.7}
              />

              <span className="start-ring absolute inset-0 rounded-full border border-[#69CBF2]/30" />
            </span>

            <div>
              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-[#2E91C8] sm:text-[15px]">
                Patient Care
              </span>

              <p className="m-0 text-[13px] font-bold leading-[1.7] text-[#102D5F] sm:text-[15px]">
                Care Infrastructure Journey
              </p>
            </div>
          </div>

          {/* =================================================
              FACILITIES
          ================================================== */}

          <div className="space-y-3">
            {facilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.no}
                  className="relative pl-[48px] min-[360px]:pl-[52px] sm:pl-[70px]"
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  {/* SMALL NODE */}

                  <span className="absolute left-[14px] top-1/2 z-10 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#2E91C8] shadow-[0_0_0_1px_rgba(46,145,200,.18)] min-[360px]:left-[20px] sm:left-[26px]">
                    <span className="mobile-node-ring pointer-events-none absolute inset-[-4px] rounded-full border border-[#2E91C8]/20" />
                  </span>

                  {/* =================================================
                      FACILITY STRIP
                  ================================================== */}

                  <div className="mobile-blueprint-card group relative overflow-hidden rounded-[18px] border border-[#102D5F]/[0.07] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(16,45,95,.055)] transition-all duration-300 hover:border-[#2E91C8]/20 hover:shadow-[0_15px_35px_rgba(16,45,95,.08)] sm:px-5">
                    <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#2E91C8]" />

                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#EAF7FC] text-[#2E91C8] sm:h-11 sm:w-11">
                        <Icon
                          className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                          strokeWidth={1.5}
                        />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <span className="pt-0.5 text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#2E91C8] sm:text-[15px]">
                            {item.tag}
                          </span>

                          <span className="shrink-0 text-[22px] font-black leading-none text-[#102D5F]/[0.07] sm:text-[25px]">
                            {item.no}
                          </span>
                        </div>

                        <h3 className="m-0 mt-1 text-[13px] font-bold leading-[1.6] text-[#102D5F] sm:text-[15px]">
                          {item.title}
                        </h3>

                        <p className="m-0 mt-1.5 text-[13px] leading-[1.7] text-[#64748B] sm:text-[15px]">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    <span className="blueprint-scan pointer-events-none absolute bottom-0 top-0 w-[60px] -skew-x-12 bg-gradient-to-r from-transparent via-[#69CBF2]/[0.07] to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              END
          ================================================== */}

          <div
            className="relative mt-4 flex items-center gap-3"
            data-aos="fade-right"
          >
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2E91C8]/15 bg-white text-[#2E91C8] min-[360px]:h-10 min-[360px]:w-10 sm:h-[52px] sm:w-[52px]">
              <Ambulance
                className="h-4 w-4 sm:h-5 sm:w-5"
                strokeWidth={1.6}
              />
            </span>

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.2px] text-[#94A3B8] sm:text-[15px]">
              Essential Healthcare Support
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`
        .blueprint-grid {
          background-image:
            linear-gradient(
              rgba(46, 145, 200, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(46, 145, 200, 0.07) 1px,
              transparent 1px
            );

          background-size: 32px 32px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 20%,
              black 85%,
              transparent
            );
        }

        .care-signal {
          stroke-dasharray: 40 1500;
          animation: careSignal 6s linear infinite;
        }

        .care-traveller {
          animation: traveller 8s ease-in-out infinite;
        }

        .blueprint-card {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .blueprint-card:hover {
          transform: translateY(-6px);
          border-color: rgba(46, 145, 200, 0.22);
          box-shadow: 0 20px 50px rgba(16, 45, 95, 0.1);
        }

        .blueprint-icon {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .blueprint-card:hover .blueprint-icon {
          transform:
            rotate(-7deg)
            scale(1.08);
        }

        .blueprint-number {
          transition:
            transform 0.4s ease,
            color 0.4s ease;
        }

        .blueprint-card:hover .blueprint-number {
          transform: translateY(-3px);
          color: rgba(46, 145, 200, 0.12);
        }

        .blueprint-accent {
          transition:
            width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .blueprint-card:hover .blueprint-accent {
          width: 55px;
        }

        .node-pulse {
          animation:
            nodePulse
            2.7s
            ease-out
            infinite;
        }

        .start-ring {
          animation:
            startPulse
            2.5s
            ease-out
            infinite;
        }

        .end-ring {
          animation:
            startPulse
            2.8s
            1s
            ease-out
            infinite;
        }

        .mobile-signal {
          animation:
            mobileSignal
            4.5s
            linear
            infinite;
        }

        .mobile-node-ring {
          animation:
            nodePulse
            2.5s
            ease-out
            infinite;
        }

        .mobile-blueprint-card:hover .blueprint-scan {
          animation:
            cardScan
            0.8s
            ease
            forwards;
        }

        @keyframes careSignal {
          from {
            stroke-dashoffset: 1540;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes traveller {
          0% {
            left: 3%;
            top: 239px;
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          20% {
            left: 12%;
            top: 144px;
          }

          40% {
            left: 27%;
            top: 269px;
          }

          60% {
            left: 43%;
            top: 109px;
          }

          80% {
            left: 71%;
            top: 159px;
          }

          94% {
            opacity: 1;
          }

          100% {
            left: 96%;
            top: 239px;
            opacity: 0;
          }
        }

        @keyframes nodePulse {
          0% {
            transform: scale(0.7);
            opacity: 0.55;
          }

          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes startPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }

          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @keyframes mobileSignal {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }

          12% {
            opacity: 1;
          }

          88% {
            opacity: 1;
          }

          100% {
            transform: translateY(560px);
            opacity: 0;
          }
        }

        @keyframes cardScan {
          from {
            left: -100px;
          }

          to {
            left: 120%;
          }
        }

        @media (max-width: 359px) {
          .mobile-blueprint-card {
            border-radius: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .care-signal,
          .care-traveller,
          .node-pulse,
          .start-ring,
          .end-ring,
          .mobile-signal,
          .mobile-node-ring {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   DESKTOP FACILITY PANEL
========================================================= */

const BlueprintFacility = ({
  item,
  className,
  aos,
}) => {
  const Icon = item.icon;

  return (
    <div
      className={`blueprint-card absolute z-20 rounded-[22px] border border-[#102D5F]/[0.07] bg-white p-4 shadow-[0_12px_35px_rgba(16,45,95,.06)] ${className}`}
      data-aos={aos}
    >
      <div className="mb-2.5 flex items-start justify-between gap-3">
        <span className="blueprint-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#EAF7FC] text-[#2E91C8]">
          <Icon
            className="h-5 w-5"
            strokeWidth={1.5}
          />
        </span>

        <span className="blueprint-number shrink-0 text-[28px] font-black leading-none text-[#102D5F]/[0.055]">
          {item.no}
        </span>
      </div>

      <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#2E91C8] sm:text-[15px]">
        {item.tag}
      </span>

      <h3 className="m-0 mt-1 text-[13px] font-bold leading-[1.5] text-[#102D5F] sm:text-[15px]">
        {item.title}
      </h3>

      <p className="m-0 mt-1.5 text-[13px] leading-[1.7] text-[#64748B] sm:text-[15px]">
        {item.text}
      </p>

      <span className="blueprint-accent mt-3 block h-[2px] w-7 rounded-full bg-[#55B8E9]" />
    </div>
  );
};

/* =========================================================
   SMALL SIGNAL NODE
========================================================= */

const BlueprintNode = ({ className }) => {
  return (
    <div
      className={`pointer-events-none absolute z-10 ${className}`}
    >
      <span className="relative block h-[10px] w-[10px] rounded-full border-[3px] border-white bg-[#2E91C8] shadow-[0_0_0_1px_rgba(46,145,200,.18),0_4px_12px_rgba(46,145,200,.25)]">
        <span className="node-pulse absolute inset-[-4px] rounded-full border border-[#2E91C8]/20" />
      </span>
    </div>
  );
};

export default FacilitiesOverview;
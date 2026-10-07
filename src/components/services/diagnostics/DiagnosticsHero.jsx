import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  FlaskConical,
  ScanLine,
} from "lucide-react";

const DiagnosticsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
    });

    AOS.refresh();
  }, []);

  const diagnostics = [
    {
      icon: FlaskConical,
      title: "Pathology",
      no: "01",
    },
    {
      icon: ScanLine,
      title: "Digital X-Ray",
      no: "02",
    },
    {
      icon: Activity,
      title: "ECG",
      no: "03",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#06182F] pt-[125px] sm:pt-[135px] lg:pt-[145px]">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[230px] top-[50px] h-[500px] w-[500px] rounded-full bg-[#2E91C8]/10 blur-[140px]" />

        <div className="absolute -right-[200px] -top-[220px] h-[560px] w-[560px] rounded-full bg-[#55B8E9]/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="absolute left-[52%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 pb-12 sm:px-6 sm:pb-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-8 lg:pb-16">
        {/* =====================================================
            LEFT
        ====================================================== */}

        <div data-aos="fade-right">
          {/* LABEL */}

          <div className="flex items-center gap-3">
            <span className="relative flex h-[8px] w-[8px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#69CBF2] opacity-50" />

              <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#69CBF2]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2.4px] text-[#69CBF2] sm:text-[12px]">
              Diagnostic Support
            </span>
          </div>

          {/* HEADING */}

          <h1 className="mt-5 max-w-[700px] text-[34px] font-bold leading-[1.1] tracking-[-1px] text-white sm:text-[41px] md:text-[46px] lg:text-[49px] xl:text-[52px]">
            Essential Diagnostics
            <span className="mt-1 block text-[#69CBF2]">
              Supporting Clinical Decisions
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-5 max-w-[600px] text-[15px] leading-[1.8] text-white/60 sm:text-[17px]">
            Timely diagnostic support plays an important role in clinical
            evaluation.
          </p>

          {/* SERVICES */}

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            {diagnostics.map((item, index) => {
              const Icon = item.icon;

              return (
                <React.Fragment key={item.title}>
                  <div className="group flex items-center gap-2.5">
                    <span className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#69CBF2]/15 bg-[#69CBF2]/10 text-[#69CBF2] transition-all duration-300 group-hover:border-[#69CBF2]/30 group-hover:bg-[#69CBF2]/15">
                      <Icon size={15} strokeWidth={1.8} />
                    </span>

                    <span className="text-[13px] font-semibold text-white/80 sm:text-[14px]">
                      {item.title}
                    </span>
                  </div>

                  {index !== diagnostics.length - 1 && (
                    <span className="hidden h-[4px] w-[4px] rounded-full bg-white/20 sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* CTA */}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/book-appointment"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#2E91C8] px-6 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(46,145,200,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#55B8E9] sm:text-[14px]"
            >
              <CalendarDays size={15} />

              Book Consultation

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#diagnostic-services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-[13px] font-bold text-white/85 backdrop-blur-sm transition-all duration-300 hover:border-[#69CBF2]/30 hover:bg-white/[0.08] hover:text-white sm:text-[14px]"
            >
              View Diagnostics
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT — DIAGNOSTIC INTERFACE
        ====================================================== */}

        <div
          data-aos="fade-left"
          data-aos-delay="120"
          className="relative hidden min-h-[390px] lg:block"
        >
          {/* MAIN PANEL */}

          <div className="absolute inset-y-[15px] left-0 right-0 overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] backdrop-blur-sm">
            {/* PANEL GRID */}

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(105,203,242,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(105,203,242,.8) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            {/* TOP BAR */}

            <div className="relative flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-[#69CBF2]" />

                <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-white/45">
                  Diagnostic Services
                </span>
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[1.3px] text-[#69CBF2]">
                Clinical Support
              </span>
            </div>

            {/* ECG VISUAL */}

            <div className="relative flex h-[155px] items-center overflow-hidden px-7">
              <div className="absolute left-7 right-7 top-1/2 h-px bg-[#69CBF2]/10" />

              <svg
                viewBox="0 0 600 120"
                preserveAspectRatio="none"
                className="h-[100px] w-full overflow-visible"
              >
                <defs>
                  <linearGradient
                    id="diagnosticLine"
                    x1="0"
                    x2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#69CBF2"
                      stopOpacity="0"
                    />

                    <stop
                      offset="15%"
                      stopColor="#69CBF2"
                      stopOpacity="1"
                    />

                    <stop
                      offset="85%"
                      stopColor="#69CBF2"
                      stopOpacity="1"
                    />

                    <stop
                      offset="100%"
                      stopColor="#69CBF2"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  className="diagnostic-path"
                  d="M0 65
                     L65 65
                     L90 65
                     L105 45
                     L120 84
                     L137 16
                     L157 98
                     L177 65
                     L245 65
                     L270 65
                     L286 48
                     L301 80
                     L318 24
                     L338 92
                     L356 65
                     L430 65
                     L450 65
                     L465 50
                     L480 78
                     L497 28
                     L515 90
                     L535 65
                     L600 65"
                  fill="none"
                  stroke="url(#diagnosticLine)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* SCAN LINE */}

              <span className="diagnostic-scan absolute bottom-4 top-4 w-px bg-gradient-to-b from-transparent via-[#69CBF2]/80 to-transparent shadow-[0_0_16px_rgba(105,203,242,.8)]" />
            </div>

            {/* THREE SERVICES */}

            <div className="relative grid grid-cols-3 border-t border-white/[0.07]">
              {diagnostics.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`group relative px-5 py-6 ${
                      index !== diagnostics.length - 1
                        ? "border-r border-white/[0.07]"
                        : ""
                    }`}
                  >
                    <span className="text-[9px] font-bold tracking-[1.4px] text-white/25">
                      {item.no}
                    </span>

                    <span className="mt-4 flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-[#69CBF2]/15 bg-[#69CBF2]/10 text-[#69CBF2] transition-all duration-300 group-hover:bg-[#69CBF2]/20">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>

                    <h3 className="mt-3 text-[13px] font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DECORATIVE CORNERS */}

          <span className="absolute left-[-7px] top-[45px] h-[28px] w-px bg-[#69CBF2]/50" />
          <span className="absolute left-[-7px] top-[45px] h-px w-[28px] bg-[#69CBF2]/50" />

          <span className="absolute bottom-[45px] right-[-7px] h-[28px] w-px bg-[#69CBF2]/50" />
          <span className="absolute bottom-[45px] right-[-7px] h-px w-[28px] bg-[#69CBF2]/50" />
        </div>
      </div>

      {/* ================= BOTTOM ACCENT ================= */}

      <div className="relative h-px w-full overflow-hidden bg-white/[0.06]">
        <span className="diagnostic-bottom absolute h-px w-[180px] bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent" />
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        @keyframes diagnosticDraw {
          0% {
            stroke-dashoffset: 1300;
          }

          100% {
            stroke-dashoffset: 0;
          }
        }

        .diagnostic-path {
          stroke-dasharray: 1300;
          stroke-dashoffset: 1300;
          animation: diagnosticDraw 3s ease-out forwards;
        }

        @keyframes diagnosticScan {
          0% {
            left: 5%;
            opacity: 0;
          }

          12% {
            opacity: 1;
          }

          88% {
            opacity: 1;
          }

          100% {
            left: 95%;
            opacity: 0;
          }
        }

        .diagnostic-scan {
          animation: diagnosticScan 4.5s ease-in-out infinite;
        }

        @keyframes diagnosticBottom {
          0% {
            left: -180px;
          }

          100% {
            left: 100%;
          }
        }

        .diagnostic-bottom {
          animation: diagnosticBottom 6s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .diagnostic-path,
          .diagnostic-scan,
          .diagnostic-bottom {
            animation: none !important;
          }

          .diagnostic-path {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default DiagnosticsHero;
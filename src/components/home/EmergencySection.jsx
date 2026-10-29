import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Ambulance, ArrowRight } from "lucide-react";

const EmergencySection = () => {
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
    <section className="relative w-full overflow-hidden bg-[#F7FCFE]">
      {/* TOP ACCENT */}
      <div className="absolute left-0 right-0 top-0 z-30 h-[3px] overflow-hidden bg-[#E3EFF3]">
        <span className="emergency-top-light absolute top-0 h-full w-[180px] bg-gradient-to-r from-transparent via-[#E64B4B] to-transparent" />
      </div>

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[140px] -top-[150px] h-[320px] w-[320px] rounded-full bg-[#DFF4FB]/70 blur-[90px]" />
        <div className="absolute bottom-[-150px] left-[45%] h-[300px] w-[300px] rounded-full bg-[#FFF0EC]/60 blur-[100px]" />
      </div>

      <div className="relative z-10 grid w-full lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
        {/* ================= LEFT ================= */}
        <div className="relative flex items-center px-4 py-7 sm:px-6 sm:py-8 md:px-10 lg:px-[5vw] lg:py-9 xl:px-[7vw]">
          <div className="flex w-full max-w-[950px] items-center gap-4 sm:gap-5 lg:gap-6">
            {/* AMBULANCE */}
            <div data-aos="zoom-in" className="relative hidden shrink-0 sm:block">
              <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-[19px] bg-white text-[#E64B4B] shadow-[0_10px_28px_rgba(16,45,95,.08)] lg:h-[70px] lg:w-[70px]">
                <span className="emergency-ring absolute inset-[-6px] rounded-[24px] border border-[#E64B4B]/15" />

                <Ambulance
                  size={27}
                  strokeWidth={1.6}
                  className="emergency-ambulance"
                />

                <span className="absolute -right-[3px] -top-[3px] h-[13px] w-[13px] rounded-full border-[3px] border-[#F7FCFE] bg-[#22C55E]" />
              </div>
            </div>

            {/* CONTENT */}
            <div data-aos="fade-right" className="min-w-0 flex-1">
              <div className="mb-2 flex items-center gap-2.5">
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#E64B4B] opacity-30" />
                  <span className="relative h-[7px] w-[7px] rounded-full bg-[#E64B4B]" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#E64B4B] sm:text-[11px]">
                  24×7 Emergency Care
                </span>

                <span className="h-px w-8 bg-gradient-to-r from-[#E64B4B]/50 to-transparent" />
              </div>

              <h2 className="text-[25px] font-bold leading-[1.15] tracking-[-.7px] text-[#102D5F] sm:text-[29px] md:text-[32px] lg:text-[34px] xl:text-[36px]">
                Medical Emergency?{" "}
                <span className="text-[#2E91C8]">
                  We’re Here 24×7.
                </span>
              </h2>

              <p className="mt-2.5 max-w-[760px] text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px] lg:text-[15px]">
                Round-the-clock emergency support for prompt patient assessment
                and appropriate medical care.
              </p>

              {/* ECG */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="relative mt-4 h-[22px] max-w-[720px] overflow-hidden"
              >
                <span className="absolute left-0 right-0 top-1/2 h-px bg-[#DCE9EE]" />

                <svg
                  viewBox="0 0 720 22"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <path
                    className="emergency-ecg"
                    d="M0 11 H105 L117 11 L124 3 L133 19 L143 7 L151 11 H270 L282 11 L290 3 L299 19 L309 7 L317 11 H435 L447 11 L455 3 L464 19 L474 7 L482 11 H600 L612 11 L620 3 L629 19 L639 7 L647 11 H720"
                    fill="none"
                    stroke="#E64B4B"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="emergency-ecg-dot absolute top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#E64B4B] shadow-[0_0_12px_rgba(230,75,75,.7)]" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="relative flex items-center overflow-hidden bg-[#102D5F] px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8 xl:px-8"
        >
          <div className="pointer-events-none absolute -right-[90px] -top-[100px] h-[220px] w-[220px] rounded-full bg-[#2E91C8]/25 blur-[65px]" />

          <span className="absolute left-0 top-[15%] hidden h-[70%] w-[3px] bg-gradient-to-b from-transparent via-[#69CBF2] to-transparent lg:block" />

          <div className="relative z-10 w-full">
            <div className="flex items-center gap-2">
              <span className="relative flex h-[8px] w-[8px]">
                <span className="emergency-red-pulse absolute inset-0 rounded-full bg-[#FF7272]" />
                <span className="relative h-[8px] w-[8px] rounded-full bg-[#FF7272]" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[1.6px] text-[#8EDCF7] sm:text-[10px]">
                Emergency Helpline
              </span>

              <span className="ml-auto rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[9px] font-bold text-white/65">
                24×7
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="emergency-phone flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] bg-white/[0.08] text-[#79D8F7]">
                <Phone size={18} strokeWidth={1.8} />
              </span>

              <div>
                <span className="block text-[9px] uppercase tracking-[1px] text-white/45">
                  Call Now
                </span>

                <a
                  href="tel:+917757004175"
                  className="mt-0.5 block whitespace-nowrap text-[22px] font-bold tracking-[-.4px] text-white transition-colors hover:text-[#85DDF9] sm:text-[24px]"
                >
                  +91 9766999474
                </a>
              </div>
            </div>

            <a
              href="tel:+917757004175"
              className="group mt-4 flex min-h-[45px] w-full items-center justify-between rounded-full bg-white px-4 text-[12px] font-bold text-[#102D5F] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,.18)] sm:text-[13px]"
            >
              <span className="flex items-center gap-2">
                <Phone size={14} />
                Call Emergency Unit
              </span>

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes topLight {
          0% {
            left: -180px;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes ringPulse {
          0% {
            transform: scale(.85);
            opacity: .6;
          }
          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        @keyframes ambulanceMotion {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }

        @keyframes ecgDraw {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        @keyframes ecgDot {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: calc(100% - 6px);
            opacity: 0;
          }
        }

        @keyframes redPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255,114,114,.45);
          }
          100% {
            box-shadow: 0 0 0 10px rgba(255,114,114,0);
          }
        }

        @keyframes phoneMotion {
          0%, 100% {
            transform: rotate(0deg);
          }
          45% {
            transform: rotate(-5deg);
          }
          55% {
            transform: rotate(5deg);
          }
        }

        .emergency-top-light {
          animation: topLight 5.5s ease-in-out infinite;
        }

        .emergency-ring {
          animation: ringPulse 2.4s ease-out infinite;
        }

        .emergency-ambulance {
          animation: ambulanceMotion 2.6s ease-in-out infinite;
        }

        .emergency-ecg {
          animation: ecgDraw 4.5s linear infinite;
        }

        .emergency-ecg-dot {
          animation: ecgDot 4.5s linear infinite;
        }

        .emergency-red-pulse {
          animation: redPulse 1.8s ease-out infinite;
        }

        .emergency-phone {
          animation: phoneMotion 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .emergency-top-light,
          .emergency-ring,
          .emergency-ambulance,
          .emergency-ecg,
          .emergency-ecg-dot,
          .emergency-red-pulse,
          .emergency-phone {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EmergencySection;
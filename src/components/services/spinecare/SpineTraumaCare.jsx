import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Activity, ShieldPlus } from "lucide-react";

const SpineTraumaCare = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#55B8E9]/[0.07] blur-[110px]" />
        <div className="absolute -right-[170px] bottom-[-160px] h-[450px] w-[450px] rounded-full bg-[#2E91C8]/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* LABEL */}
        <div
          data-aos="fade-up"
          className="mb-7 flex items-center gap-3 sm:mb-9"
        >
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
            Featured Treatment
          </span>

          <span className="h-px flex-1 bg-gradient-to-r from-[#B7DCEB] to-transparent" />

          <span className="hidden text-[10px] font-bold uppercase tracking-[1.6px] text-[#9AAABA] sm:block">
            Spine Care
          </span>
        </div>

        {/* =====================================================
            FEATURED TREATMENT
        ===================================================== */}
        <div className="relative">
          {/* IMAGE */}
          <div
            data-aos="fade-right"
            className="relative h-[330px] overflow-hidden rounded-[24px] bg-[#DDEFF7] sm:h-[400px] md:h-[470px] lg:h-[520px] lg:w-[72%] lg:rounded-[30px]"
          >
            <img
              src="/spine1.jpg"
              alt="Spine Trauma Care"
              className="h-full w-full object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.035]"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/15 via-transparent to-[#071B3A]/10 lg:bg-gradient-to-r lg:from-[#071B3A]/15 lg:via-transparent lg:to-[#071B3A]/30" />

            {/* CORNERS */}
            <span className="absolute left-5 top-5 h-8 w-8 border-l border-t border-white/45" />
            <span className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-white/45" />

            {/* SPINE SCAN */}
            <div className="pointer-events-none absolute bottom-[8%] left-[8%] top-[8%] w-[50px]">
              <span className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-white/25" />

              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute left-1/2 h-[7px] w-[12px] -translate-x-1/2 rounded-full border border-white/40 bg-[#2E91C8]/35"
                  style={{ top: `${index * 10}%` }}
                />
              ))}

              <span className="trauma-scan absolute left-1/2 top-0 h-[2px] w-[48px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_rgba(105,203,242,.9)]" />
            </div>

            {/* IMAGE BADGE */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#071B3A]/65 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:left-5">
              <Activity
                size={14}
                strokeWidth={1.8}
                className="text-[#69CBF2]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[1.3px] text-white sm:text-[11px]">
                Spine Trauma Care
              </span>
            </div>
          </div>

          {/* =====================================================
              FLOATING CONTENT PANEL
          ===================================================== */}
          <div
            data-aos="fade-left"
            data-aos-delay="120"
            className="relative z-20 mx-3 -mt-8 overflow-hidden rounded-[22px] bg-[#E5E7EB] px-5 py-7 shadow-[0_25px_65px_rgba(7,27,58,.16)] sm:mx-7 sm:-mt-12 sm:px-7 sm:py-8 md:mx-10 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[43%] lg:-translate-y-1/2 lg:rounded-[28px] lg:px-9 lg:py-10"
          >
            {/* GLOW */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#2E91C8]/10 blur-[70px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-[210px] w-[210px] rounded-full border border-[#102D5F]/[0.06]" />

            {/* NUMBER */}
            <span className="pointer-events-none absolute -right-1 -top-4 text-[100px] font-black leading-none text-[#102D5F]/[0.035] sm:text-[130px]">
              01
            </span>

            <div className="relative">
              {/* ICON + LABEL */}
              <div className="mb-5 flex items-center gap-4 sm:mb-6">
                <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] border border-[#2E91C8]/20 bg-[#2E91C8]/10 text-[#2E91C8]">
                  <ShieldPlus size={23} strokeWidth={1.7} />

                  <span className="trauma-pulse absolute inset-[-5px] rounded-[20px] border border-[#2E91C8]/15" />
                </div>

                <div>
                  <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px]">
                    Treatment Spotlight
                  </span>

                  <span className="mt-0.5 block text-[13px] font-semibold leading-[1.7] text-[#64748B] sm:text-[15px]">
                    Spine Care
                  </span>
                </div>
              </div>

              {/* HEADING */}
              <h2 className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
                Spine Trauma <span className="text-[#2E91C8]">Care</span>
              </h2>

              {/* DESCRIPTION */}
              <p className="m-0 mt-4 max-w-[520px] text-[13px] leading-[1.7] text-[#526273] sm:mt-5 sm:text-[15px]">
                Assessment and treatment support for trauma-related spine
                injuries and conditions.
              </p>

              {/* DIVIDER */}
              <div className="my-5 flex items-center gap-3 sm:my-6">
                <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#2E91C8]" />

                <span className="h-px flex-1 bg-gradient-to-r from-[#2E91C8]/35 via-[#2E91C8]/15 to-transparent" />
              </div>

              {/* CARE NOTE */}
              <div className="flex items-start gap-3">
                <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#2E91C8]" />

                <p className="m-0 text-[13px] font-semibold leading-[1.7] text-[#526273] sm:text-[15px]">
                  Care is planned according to the nature of the spine injury
                  and individual clinical requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DETAIL */}
        <div
          data-aos="fade-up"
          className="mt-8 flex items-center gap-4 lg:mt-10 lg:w-[68%]"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C7E1EC]" />

          <div className="flex items-center gap-2">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2E91C8] opacity-30" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#2E91C8]" />
            </span>

            <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[1.5px] text-[#8295A8] sm:text-[11px]">
              Assessment • Treatment Support
            </span>
          </div>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C7E1EC]" />
        </div>
      </div>

      <style>{`
        @keyframes traumaScan {
          0% {
            top: 0%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            top: 95%;
            opacity: 0;
          }
        }

        @keyframes traumaPulse {
          0% {
            transform: scale(.9);
            opacity: .55;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        .trauma-scan {
          animation: traumaScan 5s ease-in-out infinite;
        }

        .trauma-pulse {
          animation: traumaPulse 2.3s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .trauma-scan,
          .trauma-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SpineTraumaCare;

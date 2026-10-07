import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, CalendarDays, Phone, Activity, MoveUp } from "lucide-react";

const SpineCareHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[-120px] h-[430px] w-[430px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />
        <div className="absolute -right-[150px] bottom-[-160px] h-[460px] w-[460px] rounded-full bg-[#2E91C8]/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#102D5F 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute left-[7%] top-[15%] hidden h-[70%] w-px bg-gradient-to-b from-transparent via-[#2E91C8]/10 to-transparent xl:block" />
      </div>

      <div className="relative mx-auto grid min-h-[570px] max-w-[1440px] items-center gap-10 px-4 py-12 sm:min-h-[600px] sm:px-6 sm:py-14 md:grid-cols-[1fr_.9fr] md:gap-8 lg:min-h-[640px] lg:grid-cols-[1.02fr_.98fr] lg:gap-12 lg:px-8 lg:py-[72px] xl:gap-16">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="relative z-20 mx-auto w-full max-w-[650px] md:mx-0">
          {/* LABEL */}
          <div
            data-aos="fade-up"
            className="mb-5 inline-flex items-center gap-3"
          >
            <span className="relative flex h-[9px] w-[9px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2E91C8] opacity-30" />
              <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-[#2E91C8]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2.2px] text-[#2E91C8] sm:text-[12px]">
              Spine Care
            </span>

            <span className="h-px w-9 bg-gradient-to-r from-[#2E91C8]/60 to-transparent" />
          </div>

          {/* HEADING */}
          <h1
            data-aos="fade-up"
            data-aos-delay="70"
            className="max-w-[680px] text-[34px] font-bold leading-[1.1] tracking-[-1.2px] text-[#102D5F] sm:text-[40px] md:text-[43px] lg:text-[50px] xl:text-[54px]"
          >
            Evaluation & Care for{" "}
            <span className="relative text-[#2E91C8]">
              Spine, Back and Neck
              <span className="spine-heading-line absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-[#2E91C8] via-[#55B8E9] to-transparent" />
            </span>{" "}
            Conditions
          </h1>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-up"
            data-aos-delay="140"
            className="mt-7 max-w-[620px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]"
          >
            Medical evaluation and treatment support for spine injuries and
            other back or neck-related conditions.
          </p>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="210"
            className="mt-7 flex flex-col gap-3 min-[430px]:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] hover:shadow-[0_15px_35px_rgba(46,145,200,.25)] sm:text-[14px]"
            >
              <CalendarDays size={16} strokeWidth={1.9} />
              Book Spine Consultation

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:+919766999474"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-[#D4E7F0] bg-white px-6 text-[13px] font-bold text-[#102D5F] shadow-[0_8px_25px_rgba(16,45,95,.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E91C8]/40 hover:text-[#2E91C8] sm:text-[14px]"
            >
              <Phone
                size={16}
                strokeWidth={1.9}
                className="text-[#2E91C8]"
              />
              Call Hospital
            </a>
          </div>

          {/* CARE AREAS */}
          <div
            data-aos="fade-up"
            data-aos-delay="280"
            className="mt-8 border-t border-[#DDECF3] pt-5"
          >
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {[
                "Spine Injuries",
                "Back & Neck Evaluation",
                "Surgical Consultation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-[21px] w-[21px] items-center justify-center rounded-full bg-[#E7F6FC]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#2E91C8]" />
                  </span>

                  <span className="text-[12px] font-semibold text-[#536578] sm:text-[13px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SPINE VISUAL
        ===================================================== */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="relative mx-auto w-full max-w-[590px] md:mx-0 md:ml-auto"
        >
          {/* DECORATIVE VERTICAL LABEL */}
          <div className="absolute -left-7 top-1/2 z-20 hidden -translate-y-1/2 -rotate-90 items-center gap-3 lg:flex">
            <span className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#8BA7B8]">
              Spine Care
            </span>

            <span className="h-px w-10 bg-[#B7D6E4]" />
          </div>

          {/* BACK FRAME */}
          <div className="absolute -right-3 top-6 h-[92%] w-[94%] rounded-[30px] border border-[#D7EAF2] bg-[#EAF7FC] sm:-right-5" />

          {/* IMAGE */}
          <div className="group relative h-[330px] overflow-hidden rounded-[26px] border border-white bg-[#DDEFF7] shadow-[0_28px_70px_rgba(16,45,95,.15)] min-[430px]:h-[390px] sm:h-[440px] md:h-[480px] lg:h-[520px]">
            <img
              src="/spine-hero.png"
              alt="Spine Care"
              className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/55 via-transparent to-[#102D5F]/5" />

            {/* VERTICAL SPINE SCAN */}
            <div className="pointer-events-none absolute bottom-[7%] right-[7%] top-[7%] z-10 w-[58px]">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/25" />

              {Array.from({ length: 11 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute left-1/2 flex h-[9px] w-[14px] -translate-x-1/2 items-center justify-center rounded-[50%] border border-white/45 bg-[#2E91C8]/35 backdrop-blur-sm"
                  style={{
                    top: `${index * 9}%`,
                  }}
                >
                  <span className="h-[2px] w-[4px] rounded-full bg-white/80" />
                </span>
              ))}

              <span className="spine-scanner absolute left-1/2 top-0 h-[45px] w-[40px] -translate-x-1/2 rounded-full bg-[#69CBF2]/25 blur-[5px]" />

              <span className="spine-scanner-line absolute left-1/2 top-0 h-[2px] w-[48px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_rgba(105,203,242,.9)]" />
            </div>

            {/* TOP STATUS */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#071B3A]/55 px-3 py-2 backdrop-blur-md sm:left-5 sm:top-5">
              <Activity
                size={13}
                strokeWidth={1.8}
                className="text-[#69CBF2]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-white sm:text-[10px]">
                Spine Care
              </span>
            </div>

            {/* BOTTOM INFORMATION */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
              <div className="flex items-center gap-3 rounded-[16px] border border-white/15 bg-[#071B3A]/70 p-3 backdrop-blur-md sm:max-w-[340px] sm:p-4">
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-white text-[#2E91C8]">
                  <MoveUp size={19} strokeWidth={1.8} />
                </div>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[1.3px] text-[#8EDBF7]">
                    Focused Care
                  </span>

                  <span className="mt-[2px] block text-[13px] font-semibold leading-[1.4] text-white sm:text-[14px]">
                    Spine • Back • Neck
                  </span>
                </div>
              </div>
            </div>

            {/* CORNERS */}
            <span className="absolute right-[82px] top-5 h-7 w-7 border-r border-t border-white/35" />
            <span className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-white/35" />
          </div>

          {/* SIDE STATUS NODE */}
          <div className="absolute -right-2 top-[26%] z-20 hidden sm:block lg:-right-5">
            <div className="relative flex h-[45px] w-[45px] items-center justify-center rounded-full border-[5px] border-[#F7FBFD] bg-[#102D5F] text-white shadow-[0_10px_30px_rgba(16,45,95,.18)]">
              <Activity size={16} strokeWidth={1.8} />

              <span className="spine-node-pulse absolute inset-[-4px] rounded-full border border-[#2E91C8]/40" />
            </div>
          </div>

          {/* DOT DECORATION */}
          <div className="absolute -bottom-5 -left-5 -z-0 hidden grid-cols-5 gap-2 lg:grid">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="h-[4px] w-[4px] rounded-full bg-[#2E91C8]/25"
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM MEDICAL LINE */}
      <div className="relative mx-auto hidden max-w-[1440px] px-8 md:block">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C6E1EC] to-transparent" />

        <span className="spine-bottom-signal absolute bottom-[-2px] left-[15%] h-[5px] w-[80px] rounded-full bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent" />
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}
      <style>{`
        @keyframes spineScan {
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
            top: 92%;
            opacity: 0;
          }
        }

        @keyframes spinePulse {
          0% {
            transform: scale(.9);
            opacity: .6;
          }

          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @keyframes spineHeading {
          0% {
            transform: scaleX(0);
          }

          100% {
            transform: scaleX(1);
          }
        }

        @keyframes bottomSignal {
          0% {
            left: 10%;
            opacity: 0;
          }

          20% {
            opacity: .8;
          }

          80% {
            opacity: .8;
          }

          100% {
            left: 82%;
            opacity: 0;
          }
        }

        .spine-scanner,
        .spine-scanner-line {
          animation: spineScan 4.8s ease-in-out infinite;
        }

        .spine-node-pulse {
          animation: spinePulse 2.3s ease-out infinite;
        }

        .spine-heading-line {
          animation: spineHeading 1.2s ease-out .5s both;
        }

        .spine-bottom-signal {
          animation: bottomSignal 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .spine-scanner,
          .spine-scanner-line,
          .spine-node-pulse,
          .spine-heading-line,
          .spine-bottom-signal {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SpineCareHero;
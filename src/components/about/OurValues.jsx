import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  HeartHandshake,
  Heart,
  ShieldCheck,
  MessageCircleMore,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Patient First",
    description: "Patient wellbeing remains at the centre of our care.",
    position: "lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
  },
  {
    number: "02",
    icon: Heart,
    title: "Compassion",
    description: "Treating patients and families with dignity and respect.",
    position: "lg:left-[4%] lg:top-[28%] xl:left-[6%]",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Clinical Responsibility",
    description: "Following appropriate medical standards and protocols.",
    position: "lg:left-[9%] lg:bottom-[3%] xl:left-[12%]",
  },
  {
    number: "04",
    icon: MessageCircleMore,
    title: "Transparency",
    description: "Clear communication with patients and their families.",
    position: "lg:right-[9%] lg:bottom-[3%] xl:right-[12%]",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "Consistently strengthening our services, facilities and patient experience.",
    position: "lg:right-[4%] lg:top-[28%] xl:right-[6%]",
  },
];

const OurValues = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
      anchorPlacement: "top-bottom",
    });

    const refreshAOS = () => AOS.refresh();

    window.addEventListener("load", refreshAOS);

    return () => window.removeEventListener("load", refreshAOS);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAF7FC]/80 blur-[80px] sm:h-[430px] sm:w-[430px] lg:h-[520px] lg:w-[520px] lg:blur-[110px] xl:h-[620px] xl:w-[620px]" />

      <div className="values-glow-left pointer-events-none absolute -left-[160px] bottom-[-120px] h-[300px] w-[300px] rounded-full bg-[#F0F9FD] blur-[80px] lg:h-[420px] lg:w-[420px]" />

      <div className="values-glow-right pointer-events-none absolute -right-[160px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#EAF7FC]/60 blur-[90px] lg:h-[400px] lg:w-[400px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.022] [background-image:radial-gradient(#102D5F_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* =====================================================
          FLOATING DECORATION
      ====================================================== */}

      <span className="values-plus values-plus-one">+</span>
      <span className="values-plus values-plus-two">+</span>
      <span className="values-plus values-plus-three">+</span>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="mx-auto mb-8 max-w-[760px] text-center sm:mb-9 md:mb-10 lg:mb-11 xl:mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-[2px] w-6 rounded-full bg-[#2E91C8] sm:w-8" />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px] sm:tracking-[2px]">
              Our Core Values
            </span>

            <span className="h-[2px] w-6 rounded-full bg-[#2E91C8] sm:w-8" />
          </div>

          <h2 className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
            The Values Behind{" "}
            <span className="text-[#2E91C8]">
              Every Care Decision
            </span>
          </h2>

          <p className="mx-auto mb-0 mt-3 max-w-[590px] text-[13px] leading-[1.7] text-[#728392] sm:mt-4 sm:text-[15px]">
            Principles that shape how we care, communicate and continuously
            improve.
          </p>
        </div>

        {/* ===================================================
            DESKTOP RADIAL DESIGN
        ==================================================== */}

        <div className="relative mx-auto hidden h-[610px] max-w-[1180px] lg:block xl:h-[650px]">
          {/* OUTER ORBIT */}

          <div
            className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9EAF1] xl:h-[520px] xl:w-[520px]"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
          />

          {/* ROTATING DASHED ORBIT */}

          <div
            className="orbit-spin absolute left-1/2 top-1/2 h-[410px] w-[410px] rounded-full border border-dashed border-[#2E91C8]/25 xl:h-[455px] xl:w-[455px]"
            data-aos="zoom-in"
            data-aos-delay="180"
            data-aos-duration="1100"
          >
            <span className="orbit-moving-dot absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#2E91C8] shadow-[0_0_0_7px_rgba(46,145,200,0.10)]" />

            <span className="absolute bottom-[25px] right-[45px] h-2 w-2 rounded-full bg-[#69CBF2]" />
          </div>

          {/* INNER ORBIT */}

          <div
            className="absolute left-1/2 top-1/2 h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E1EEF3] bg-white/30 xl:h-[345px] xl:w-[345px]"
            data-aos="zoom-in"
            data-aos-delay="260"
            data-aos-duration="1000"
          />

          {/* EXTRA ORBIT DOTS */}

          <span className="orbit-dot-one absolute left-1/2 top-[calc(50%-235px)] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#2E91C8] shadow-[0_0_0_6px_rgba(46,145,200,0.10)]" />

          <span className="absolute left-[calc(50%-235px)] top-1/2 h-2 w-2 rounded-full bg-[#69CBF2]" />

          <span className="absolute right-[calc(50%-235px)] top-1/2 h-2 w-2 rounded-full bg-[#69CBF2]" />

          {/* =================================================
              CENTER — PATIENT FIRST
          ================================================== */}

          <div
            className="absolute left-1/2 top-1/2 z-20 flex h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-[9px] shadow-[0_25px_65px_rgba(16,45,95,0.13)] xl:h-[280px] xl:w-[280px] xl:p-[10px]"
            data-aos="zoom-in"
            data-aos-delay="350"
            data-aos-duration="900"
          >
            <div className="absolute inset-0 rounded-full border border-[#CFE6EF]" />

            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#102D5F] via-[#0D3566] to-[#11618D] px-7 text-center text-white">
              <div className="pointer-events-none absolute -right-12 -top-12 h-[150px] w-[150px] rounded-full bg-[#69CBF2]/20 blur-[35px]" />

              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:13px_13px]" />

              <div className="center-heart relative z-10 mb-3 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md xl:h-[64px] xl:w-[64px]">
                <HeartHandshake
                  className="h-[25px] w-[25px] text-[#7BD4F5] xl:h-7 xl:w-7"
                  strokeWidth={1.6}
                />

                <span className="center-ring absolute inset-[-1px] rounded-full border border-[#69CBF2]/25" />

                <span className="center-ring-two absolute inset-[-1px] rounded-full border border-[#69CBF2]/15" />
              </div>

              <span className="relative z-10 text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#79D4F6] sm:text-[15px]">
                At The Centre
              </span>

              <h3 className="relative z-10 m-0 mt-1 text-[24px] font-bold tracking-[-0.7px] xl:text-[27px]">
                Patient First
              </h3>

              <p className="relative z-10 m-0 mt-2 max-w-[195px] text-[13px] leading-[1.7] text-white/65 sm:text-[15px]">
                Patient wellbeing remains at the centre of our care.
              </p>
            </div>
          </div>

          {/* =================================================
              SUPPORTING VALUES
          ================================================== */}

          {values.slice(1).map((item, index) => {
            const Icon = item.icon;

            const aosAnimation =
              index === 0
                ? "fade-right"
                : index === 1
                ? "fade-right"
                : index === 2
                ? "fade-left"
                : "fade-left";

            return (
              <div
                key={item.title}
                className={`value-orbit-item group absolute z-30 w-[230px] xl:w-[250px] ${item.position}`}
                data-aos={aosAnimation}
                data-aos-delay={450 + index * 120}
                data-aos-duration="850"
              >
                <div className="value-card relative overflow-hidden rounded-[20px] border border-[#DDEBF1] bg-white/95 px-4 py-4 shadow-[0_12px_35px_rgba(16,45,95,0.07)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[#C2E1EC] group-hover:shadow-[0_20px_45px_rgba(16,45,95,0.12)] xl:px-5 xl:py-5">
                  <span className="absolute left-0 top-0 h-[3px] w-10 rounded-r-full bg-[#2E91C8] transition-all duration-500 group-hover:w-[75px]" />

                  <span className="absolute right-3 top-3 text-[13px] font-bold leading-[1.7] tracking-[1px] text-[#B3C0C9] sm:text-[15px]">
                    {item.number}
                  </span>

                  <div className="value-icon mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-500 group-hover:bg-[#102D5F] group-hover:text-white xl:h-11 xl:w-11">
                    <Icon
                      className="h-[18px] w-[18px] xl:h-5 xl:w-5"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="m-0 pr-7 text-[13px] font-bold leading-[1.5] text-[#102D5F] sm:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="m-0 mt-1.5 text-[13px] leading-[1.7] text-[#748593] sm:text-[15px]">
                    {item.description}
                  </p>

                  <div className="value-shine pointer-events-none absolute inset-y-[-30%] -left-[70%] w-[35%] rotate-[15deg] bg-gradient-to-r from-transparent via-[#69CBF2]/15 to-transparent" />
                </div>
              </div>
            );
          })}

          {/* =================================================
              CONNECTOR LINES
          ================================================== */}

          <div className="pointer-events-none absolute left-[28%] top-[37%] h-px w-[90px] rotate-[16deg] bg-gradient-to-r from-transparent to-[#BBDDE9]" />

          <div className="pointer-events-none absolute right-[28%] top-[37%] h-px w-[90px] -rotate-[16deg] bg-gradient-to-l from-transparent to-[#BBDDE9]" />

          <div className="pointer-events-none absolute bottom-[25%] left-[30%] h-px w-[85px] -rotate-[15deg] bg-gradient-to-r from-transparent to-[#BBDDE9]" />

          <div className="pointer-events-none absolute bottom-[25%] right-[30%] h-px w-[85px] rotate-[15deg] bg-gradient-to-l from-transparent to-[#BBDDE9]" />
        </div>

        {/* ===================================================
            MOBILE + TABLET
        ==================================================== */}

        <div className="relative mx-auto max-w-[760px] lg:hidden">
          {/* FLOW LINE */}

          <div className="pointer-events-none absolute bottom-[25px] left-[21px] top-[25px] w-px overflow-hidden bg-gradient-to-b from-[#2E91C8]/15 via-[#2E91C8]/35 to-[#2E91C8]/10 min-[360px]:left-[23px] sm:left-[25px]">
            <span className="mobile-line-flow absolute left-[-1px] top-0 h-[75px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />
          </div>

          <div className="flex flex-col gap-3 min-[360px]:gap-3.5 sm:gap-4">
            {values.map((item, index) => {
              const Icon = item.icon;
              const isPatientFirst = index === 0;

              return (
                <div
                  key={item.title}
                  className="mobile-value relative pl-[55px] min-[360px]:pl-[61px] sm:pl-[68px]"
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  data-aos-duration="700"
                >
                  {/* NODE */}

                  <div
                    className={`absolute left-0 top-[14px] z-20 flex h-[43px] w-[43px] items-center justify-center rounded-full border-[5px] border-white shadow-[0_8px_20px_rgba(16,45,95,0.12)] min-[360px]:h-[47px] min-[360px]:w-[47px] sm:h-[51px] sm:w-[51px] ${
                      isPatientFirst
                        ? "bg-[#102D5F] text-white"
                        : "bg-[#EAF7FC] text-[#2E91C8]"
                    }`}
                  >
                    <Icon
                      className="h-[17px] w-[17px] min-[360px]:h-[19px] min-[360px]:w-[19px] sm:h-5 sm:w-5"
                      strokeWidth={1.7}
                    />

                    {isPatientFirst && (
                      <span className="patient-ring absolute inset-[-2px] rounded-full border border-[#2E91C8]/25" />
                    )}
                  </div>

                  {/* CONTENT */}

                  <div
                    className={`value-mobile-card relative overflow-hidden rounded-[16px] border px-3.5 py-3.5 transition-all duration-500 min-[360px]:px-4 min-[360px]:py-4 sm:rounded-[19px] sm:px-5 sm:py-5 ${
                      isPatientFirst
                        ? "border-[#102D5F] bg-[#102D5F] shadow-[0_12px_30px_rgba(16,45,95,0.12)]"
                        : "border-[#E0ECF1] bg-white shadow-[0_8px_25px_rgba(16,45,95,0.045)]"
                    }`}
                  >
                    {isPatientFirst && (
                      <>
                        <div className="pointer-events-none absolute -right-12 -top-12 h-[130px] w-[130px] rounded-full bg-[#55B8E9]/20 blur-[35px]" />

                        <Sparkles className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 text-white/10" />
                      </>
                    )}

                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <span
                          className={`mb-1 block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.2px] sm:text-[15px] ${
                            isPatientFirst
                              ? "text-[#6ED0F4]"
                              : "text-[#2E91C8]"
                          }`}
                        >
                          Value {item.number}
                        </span>

                        <h3
                          className={`m-0 text-[13px] font-bold leading-[1.5] sm:text-[15px] ${
                            isPatientFirst
                              ? "text-white"
                              : "text-[#102D5F]"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <span
                        className={`shrink-0 text-[22px] font-bold leading-none ${
                          isPatientFirst
                            ? "text-white/10"
                            : "text-[#102D5F]/[0.06]"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <p
                      className={`relative z-10 m-0 mt-1.5 text-[13px] leading-[1.7] sm:mt-2 sm:text-[15px] ${
                        isPatientFirst
                          ? "text-white/65"
                          : "text-[#748593]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        .orbit-spin {
          transform: translate(-50%, -50%);
          animation: slowOrbit 42s linear infinite;
        }

        .center-heart {
          animation: centerHeart 3s ease-in-out infinite;
        }

        .center-ring {
          animation: centerRing 2.3s ease-out infinite;
        }

        .center-ring-two {
          animation: centerRing 2.3s 0.9s ease-out infinite;
        }

        .patient-ring {
          animation: centerRing 2.3s ease-out infinite;
        }

        .orbit-moving-dot {
          animation: orbitDotPulse 2s ease-in-out infinite;
        }

        .value-card:hover .value-shine {
          left: 135%;
        }

        .value-shine {
          transition: left 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .mobile-line-flow {
          animation: mobileFlow 3.5s linear infinite;
        }

        .values-glow-left {
          animation: glowLeft 9s ease-in-out infinite alternate;
        }

        .values-glow-right {
          animation: glowRight 11s ease-in-out infinite alternate;
        }

        .values-plus {
          position: absolute;
          pointer-events: none;
          color: rgba(46, 145, 200, 0.11);
          font-weight: 300;
          line-height: 1;
          animation: plusFloat 5s ease-in-out infinite;
        }

        .values-plus-one {
          left: 5%;
          top: 18%;
          font-size: 28px;
        }

        .values-plus-two {
          right: 5%;
          top: 32%;
          font-size: 20px;
          animation-delay: 1.4s;
        }

        .values-plus-three {
          left: 8%;
          bottom: 10%;
          font-size: 24px;
          animation-delay: 2.6s;
        }

        @keyframes slowOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes centerHeart {
          0%,
          100% {
            transform: scale(1);
          }

          44% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }

          58% {
            transform: scale(1);
          }

          64% {
            transform: scale(1.04);
          }

          70% {
            transform: scale(1);
          }
        }

        @keyframes centerRing {
          0% {
            opacity: 0.6;
            transform: scale(0.9);
          }

          100% {
            opacity: 0;
            transform: scale(1.55);
          }
        }

        @keyframes orbitDotPulse {
          0%,
          100% {
            box-shadow: 0 0 0 5px rgba(46, 145, 200, 0.08);
          }

          50% {
            box-shadow: 0 0 0 11px rgba(46, 145, 200, 0.02);
          }
        }

        @keyframes mobileFlow {
          0% {
            top: -10%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes glowLeft {
          to {
            transform: translate3d(45px, -25px, 0) scale(1.08);
          }
        }

        @keyframes glowRight {
          to {
            transform: translate3d(-40px, 30px, 0) scale(1.1);
          }
        }

        @keyframes plusFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(6px, -14px, 0) rotate(14deg);
          }
        }

        @media (max-width: 767px) {
          .values-glow-left,
          .values-glow-right {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-spin,
          .center-heart,
          .center-ring,
          .center-ring-two,
          .patient-ring,
          .orbit-moving-dot,
          .mobile-line-flow,
          .values-glow-left,
          .values-glow-right,
          .values-plus {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurValues;
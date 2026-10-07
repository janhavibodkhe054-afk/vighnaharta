import React from "react";

import {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Activity,
  Cross,
} from "lucide-react";

const carePoints = [
  {
    icon: Stethoscope,
    title: "Experienced Doctors",
    text: "Clinical care guided by experienced medical professionals.",
  },
  {
    icon: Activity,
    title: "Essential Infrastructure",
    text: "Diagnostics, emergency support and treatment facilities.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Focused Care",
    text: "Appropriate treatment delivered with compassion and attention.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="who-section relative overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-[130px] top-[18%] h-[280px] w-[280px] rounded-full bg-[#EAF7FC]/70 blur-[70px] sm:h-[340px] sm:w-[340px] lg:-left-[180px] lg:h-[430px] lg:w-[430px] lg:blur-[90px]" />

      <div className="pointer-events-none absolute -right-[140px] bottom-[-100px] h-[280px] w-[280px] rounded-full bg-[#F0F9FD] blur-[70px] lg:h-[380px] lg:w-[380px]" />

      {/* Decorative cross */}

      <Cross
        className="pointer-events-none absolute right-[7%] top-[10%] hidden h-7 w-7 text-[#2E91C8]/10 lg:block xl:h-9 xl:w-9"
        strokeWidth={1.3}
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:gap-16 2xl:gap-20">
          {/* =================================================
              LEFT — VISUAL COMPOSITION
          ================================================== */}

          <div className="who-reveal-left relative mx-auto w-full max-w-[570px] lg:mx-0">
            {/* BACK SHAPE */}

            <div className="pointer-events-none absolute -left-2 top-7 h-[88%] w-[88%] rounded-[22px] bg-[#EAF7FC] sm:-left-3 sm:top-9 sm:rounded-[26px] lg:-left-4 lg:top-10 xl:-left-5 xl:rounded-[30px]" />

            {/* IMAGE FRAME */}

            <div className="group relative ml-auto w-[94%] overflow-hidden rounded-[20px] bg-[#E9F3F7] shadow-[0_20px_55px_rgba(16,45,95,0.10)] sm:rounded-[24px] lg:w-[95%] lg:rounded-[26px] xl:rounded-[30px]">
              <img
                src="/doctor.png"
                alt="Vighnaharta Hospital healthcare facility"
                loading="lazy"
                className="h-[300px] w-full object-cover object-center transition-transform duration-[1200ms] min-[360px]:h-[330px] min-[430px]:h-[380px] sm:h-[440px] md:h-[500px] lg:h-[480px] lg:group-hover:scale-[1.035] xl:h-[540px] 2xl:h-[570px]"
              />

              {/* IMAGE OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/55 via-transparent to-transparent" />

              {/* TOP MINI LABEL */}

              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/20 bg-[#071B3A]/30 px-3 py-1.5 backdrop-blur-md min-[360px]:left-4 min-[360px]:top-4 sm:px-4 sm:py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#69CBF2] opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#69CBF2]" />
                </span>

                <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.2px] text-white sm:text-[15px] sm:tracking-[1.5px]">
                  Multispeciality Healthcare
                </span>
              </div>

              {/* IMAGE BOTTOM TEXT */}

              <div className="absolute bottom-0 left-0 right-0 p-4 min-[360px]:p-5 sm:p-6 xl:p-7">
                <div className="max-w-[390px] border-l-2 border-[#69CBF2] pl-3 sm:pl-4">
                  <span className="block text-[13px] font-semibold uppercase leading-[1.7] tracking-[1.3px] text-[#77D3F5] sm:text-[15px]">
                    Alephata • Junnar • Pune
                  </span>

                  <p className="m-0 mt-1 text-[13px] font-semibold leading-[1.7] text-white sm:text-[15px]">
                    Dependable medical care, closer to the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — CONTENT
          ================================================== */}

          <div className="who-reveal-right min-w-0 pt-2 sm:pt-3 lg:pt-0">
            {/* LABEL */}

            <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
              <span className="h-[2px] w-7 rounded-full bg-[#2E91C8] sm:w-9" />

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px] sm:tracking-[2px]">
                Who We Are
              </span>
            </div>

            {/* HEADING */}

            <h2 className="m-0 max-w-[680px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
              Healthcare Built Around{" "}
              <span className="text-[#2E91C8]">
                Patients &amp; Their Needs
              </span>
            </h2>

            {/* INTRO */}

            <p className="m-0 mt-4 max-w-[650px] text-[13px] font-medium leading-[1.7] text-[#42566A] sm:mt-5 sm:text-[15px]">
              Vighnaharta Hospital is a multispeciality healthcare facility
              located in Alephata, Taluka Junnar, Pune.
            </p>

            <p className="m-0 mt-3 max-w-[660px] text-[13px] leading-[1.7] text-[#68798B] sm:mt-4 sm:text-[15px]">
              Our aim is to make dependable medical care accessible to patients
              through experienced doctors, essential medical infrastructure,
              diagnostic facilities, emergency support and patient-focused
              treatment.
            </p>

            {/* =================================================
                CARE PRINCIPLES
            ================================================== */}

            <div className="mt-6 overflow-hidden rounded-[18px] border border-[#E1EDF2] bg-[#FBFDFE] sm:mt-7 sm:rounded-[20px] xl:mt-8 xl:rounded-[22px]">
              {carePoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`who-point group relative flex items-start gap-3 px-3.5 py-3.5 transition-all duration-300 min-[360px]:gap-3.5 min-[360px]:px-4 sm:gap-4 sm:px-5 sm:py-4 xl:px-6 xl:py-[18px] lg:hover:bg-white ${
                      index !== carePoints.length - 1
                        ? "border-b border-[#E4EEF2]"
                        : ""
                    }`}
                    style={{
                      animationDelay: `${index * 120 + 250}ms`,
                    }}
                  >
                    {/* HOVER LINE */}

                    <span className="absolute bottom-0 left-0 top-0 w-[3px] origin-center scale-y-0 rounded-r-full bg-[#2E91C8] transition-transform duration-300 lg:group-hover:scale-y-100" />

                    {/* NUMBER */}

                    <span className="hidden w-7 shrink-0 pt-2 text-[13px] font-bold leading-[1.7] tracking-[1px] text-[#A6B6C2] sm:block sm:text-[15px]">
                      0{index + 1}
                    </span>

                    {/* ICON */}

                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 min-[360px]:h-[44px] min-[360px]:w-[44px] sm:h-[46px] sm:w-[46px] sm:rounded-[13px] lg:group-hover:-translate-y-0.5 lg:group-hover:bg-[#102D5F] lg:group-hover:text-white xl:h-[50px] xl:w-[50px]">
                      <Icon
                        className="h-[18px] w-[18px] sm:h-5 sm:w-5 xl:h-[21px] xl:w-[21px]"
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0 flex-1">
                      <span className="mb-0.5 block text-[13px] font-bold leading-[1.7] tracking-[1px] text-[#A6B6C2] sm:hidden">
                        0{index + 1}
                      </span>

                      <h3 className="m-0 text-[13px] font-bold leading-[1.7] text-[#102D5F] sm:text-[15px]">
                        {item.title}
                      </h3>

                      <p className="m-0 mt-1 text-[13px] leading-[1.7] text-[#718291] sm:mt-1.5 sm:text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                CLOSING STATEMENT
            ================================================== */}

            <div className="mt-5 flex items-start gap-3 border-l-[3px] border-[#2E91C8] bg-gradient-to-r from-[#EFF9FD] to-transparent px-3.5 py-3 min-[360px]:px-4 sm:mt-6 sm:gap-4 sm:px-5 sm:py-4 xl:mt-7">
              <HeartPulse
                className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#2E91C8] sm:h-5 sm:w-5"
                strokeWidth={1.7}
              />

              <p className="m-0 max-w-[610px] text-[13px] font-medium leading-[1.7] text-[#53687A] sm:text-[15px]">
                From routine consultations to emergency care and surgical
                procedures, our approach revolves around{" "}
                <strong className="font-semibold text-[#102D5F]">
                  accurate evaluation, appropriate treatment and compassionate
                  care.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATION CSS
      ====================================================== */}

      <style>{`
        @keyframes whoRevealLeft {
          from {
            opacity: 0;
            transform: translate3d(-32px, 24px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes whoRevealRight {
          from {
            opacity: 0;
            transform: translate3d(32px, 24px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes whoPointReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes whoFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .who-reveal-left {
          animation: whoRevealLeft 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .who-reveal-right {
          animation: whoRevealRight 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.12s
            both;
        }

        .who-point {
          opacity: 0;
          animation: whoPointReveal 0.65s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .who-float {
          animation: whoFloat 4s ease-in-out infinite;
        }

        @media (max-width: 359px) {
          .who-section {
            overflow-x: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .who-reveal-left,
          .who-reveal-right,
          .who-point,
          .who-float {
            opacity: 1;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
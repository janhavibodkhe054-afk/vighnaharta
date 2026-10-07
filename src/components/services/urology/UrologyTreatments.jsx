import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  Droplets,
  Activity,
  Stethoscope,
} from "lucide-react";

const UrologyTreatments = () => {
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
    <section className="relative overflow-hidden bg-[#F7FBFD] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[20%] h-[360px] w-[360px] rounded-full bg-[#DFF4FB]/70 blur-[110px]" />
        <div className="absolute -right-[170px] bottom-[-140px] h-[380px] w-[380px] rounded-full bg-[#EAF7FC] blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[760px] text-center">
          <div
            data-aos="fade-up"
            className="mb-3 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2E91C8]" />
            <span className="h-[6px] w-[6px] rotate-45 bg-[#2E91C8]" />

            <span className="text-[11px] font-bold uppercase tracking-[2.2px] text-[#2E91C8] sm:text-[12px]">
              Urology Treatments
            </span>

            <span className="h-[6px] w-[6px] rotate-45 bg-[#2E91C8]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2E91C8]" />
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="text-[30px] font-bold leading-[1.14] tracking-[-.9px] text-[#102D5F] sm:text-[36px] md:text-[40px] lg:text-[43px]"
          >
            Focused Treatment for{" "}
            <span className="text-[#2E91C8]">Urological Conditions</span>
          </h2>
        </div>

        {/* =====================================================
            TREATMENT STAGE
        ===================================================== */}
        <div className="relative mt-9 sm:mt-10 lg:mt-12">
          <div className="grid overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(16,45,95,.09)] sm:rounded-[28px] lg:grid-cols-2 lg:rounded-[32px]">
            {/* =================================================
                KIDNEY STONE
            ================================================= */}
            <div
              data-aos="fade-right"
              className="group relative min-h-[390px] overflow-hidden sm:min-h-[440px] lg:min-h-[500px]"
            >
              <img
                src="/images/treatments/kidney-stone-treatment.jpg"
                alt="Kidney Stone Treatment"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/95 via-[#06182F]/40 to-[#06182F]/5" />

              {/* IMAGE REVEAL */}
              <span className="uro-treatment-curtain absolute inset-0 z-30 bg-[#102D5F]" />

              {/* LIGHT SWEEP */}
              <span className="uro-treatment-shine absolute -left-[40%] top-0 z-20 h-full w-[28%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* SCAN */}
              <span className="uro-treatment-scan absolute left-[8%] right-[8%] top-[12%] h-px bg-gradient-to-r from-transparent via-[#7DDAF8] to-transparent shadow-[0_0_14px_rgba(125,218,248,.8)]" />

              {/* TOP */}
              <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-[#06182F]/55 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-[7px] w-[7px]">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#7DDAF8] opacity-40" />
                    <span className="relative h-[7px] w-[7px] rounded-full bg-[#7DDAF8]" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-white">
                    Urology Care
                  </span>
                </span>

                <span className="text-[11px] font-bold tracking-[1px] text-white/45">
                  01
                </span>
              </div>

              {/* CONTENT */}
              <div
                data-aos="fade-up"
                data-aos-delay="180"
                className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-7 lg:p-8"
              >
                <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[14px] border border-white/15 bg-white/10 text-[#86DFFB] backdrop-blur-md">
                  <Droplets size={20} strokeWidth={1.7} />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#84DDF9]">
                  Kidney Care
                </span>

                <h3 className="mt-2 text-[25px] font-bold tracking-[-.5px] text-white sm:text-[28px] lg:text-[30px]">
                  Kidney Stone Treatment
                </h3>

                <p className="mt-3 max-w-[470px] text-[14px] leading-[1.75] text-white/70 sm:text-[15px]">
                  Evaluation and treatment for kidney stone-related symptoms
                  and conditions.
                </p>

                <Link
                  to="/services/treatments/kidney-stone-treatment"
                  className="group/btn mt-5 inline-flex items-center gap-3 text-[13px] font-bold text-white"
                >
                  <span>View Treatment</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#102D5F] transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-[#78D8F7]">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

            {/* =================================================
                PROSTATE
            ================================================= */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="relative flex min-h-[390px] items-center overflow-hidden bg-[#102D5F] px-5 py-8 sm:min-h-[440px] sm:px-7 lg:min-h-[500px] lg:px-10"
            >
              {/* BACKGROUND DECORATION */}
              <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-[280px] w-[280px] rounded-full bg-[#2E91C8]/20 blur-[75px]" />

              <div className="pointer-events-none absolute -bottom-[120px] -left-[100px] h-[280px] w-[280px] rounded-full bg-[#55B8E9]/10 blur-[90px]" />

              <span className="pointer-events-none absolute -right-5 bottom-[-25px] text-[150px] font-black leading-none text-white/[0.025] sm:text-[190px]">
                02
              </span>

              {/* ABSTRACT CLINICAL PATH */}
              <div className="pointer-events-none absolute right-6 top-1/2 hidden h-[270px] w-[145px] -translate-y-1/2 sm:block">
                <svg
                  viewBox="0 0 145 270"
                  className="absolute inset-0 h-full w-full"
                >
                  <path
                    className="uro-prostate-path"
                    d="M72 12 C72 55 30 60 30 110 C30 155 115 155 115 200 C115 235 88 245 72 258"
                    fill="none"
                    stroke="rgba(116,215,247,.30)"
                    strokeWidth="1.5"
                    strokeDasharray="5 6"
                  />
                </svg>

                <span className="uro-prostate-dot absolute left-[69px] top-[8px] h-[7px] w-[7px] rounded-full bg-[#7AD9F7] shadow-[0_0_14px_rgba(122,217,247,.8)]" />

                <div className="absolute left-[9px] top-[90px] flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#7CD8F7]/25 bg-white/[0.06] text-[#7DDAF8] backdrop-blur-sm">
                  <Activity size={16} />
                </div>

                <div className="absolute bottom-[15px] right-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#7CD8F7]/25 bg-white/[0.06] text-[#7DDAF8] backdrop-blur-sm">
                  <Stethoscope size={16} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-[430px]">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  className="uro-prostate-icon relative mb-5 flex h-[54px] w-[54px] items-center justify-center rounded-[17px] border border-white/10 bg-white/[0.07] text-[#82DCF9]"
                >
                  <Activity size={22} strokeWidth={1.7} />

                  <span className="uro-prostate-ring absolute inset-[-6px] rounded-[21px] border border-[#79D8F7]/20" />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="flex items-center gap-2.5"
                >
                  <span className="h-[6px] w-[6px] rotate-45 bg-[#78D8F7]" />

                  <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#78D8F7]">
                    Prostate Care
                  </span>

                  <span className="h-px w-8 bg-gradient-to-r from-[#78D8F7]/60 to-transparent" />
                </div>

                <h3
                  data-aos="fade-up"
                  data-aos-delay="260"
                  className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-.6px] text-white sm:text-[29px] lg:text-[31px]"
                >
                  Prostate Treatment
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-delay="320"
                  className="mt-4 max-w-[390px] text-[14px] leading-[1.8] text-white/65 sm:text-[15px]"
                >
                  Evaluation and appropriate treatment support for
                  prostate-related conditions.
                </p>

                <Link
                  data-aos="fade-up"
                  data-aos-delay="380"
                  to="/services/treatments/prostate-treatment"
                  className="group mt-6 inline-flex min-h-[46px] items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#76D7F7]/40 hover:bg-white/[0.12]"
                >
                  View Treatment

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* CENTER DIVIDER NODE */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="absolute left-1/2 top-1/2 z-40 hidden h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-[#F7FBFD] bg-white text-[#2E91C8] shadow-[0_10px_30px_rgba(16,45,95,.15)] lg:flex"
          >
            <Stethoscope size={17} strokeWidth={1.7} />

            <span className="uro-divider-ring absolute inset-[-7px] rounded-full border border-[#2E91C8]/20" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes uroTreatmentCurtain {
          0% { transform: translateX(0); }
          100% { transform: translateX(105%); }
        }

        @keyframes uroTreatmentShine {
          0% { left: -40%; opacity: 0; }
          15% { opacity: 1; }
          100% { left: 125%; opacity: 0; }
        }

        @keyframes uroTreatmentScan {
          0% { top: 12%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 88%; opacity: 0; }
        }

        @keyframes uroProstatePath {
          0% {
            stroke-dasharray: 8 7;
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dasharray: 8 7;
            stroke-dashoffset: 0;
          }
        }

        @keyframes uroProstateDot {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          45% {
            transform: translate(-42px, 95px);
            opacity: 1;
          }
          75% {
            transform: translate(42px, 185px);
            opacity: 1;
          }
          100% {
            transform: translate(0, 245px);
            opacity: 0;
          }
        }

        @keyframes uroProstateRing {
          0% {
            transform: scale(.8);
            opacity: .65;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @keyframes uroProstateIcon {
          0%,100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes uroDividerRing {
          0% {
            transform: scale(.8);
            opacity: .6;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        .aos-animate .uro-treatment-curtain {
          animation: uroTreatmentCurtain 1.05s cubic-bezier(.77,0,.18,1) .15s forwards;
        }

        .aos-animate .uro-treatment-shine {
          animation: uroTreatmentShine 1.1s ease-out 1s forwards;
        }

        .uro-treatment-scan {
          animation: uroTreatmentScan 5s ease-in-out infinite;
        }

        .aos-animate .uro-prostate-path {
          animation: uroProstatePath 1.7s ease-out .4s both;
        }

        .uro-prostate-dot {
          animation: uroProstateDot 4.8s ease-in-out infinite;
        }

        .uro-prostate-ring,
        .uro-divider-ring {
          animation: uroProstateRing 2.2s ease-out infinite;
        }

        .uro-prostate-icon {
          animation: uroProstateIcon 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .uro-treatment-curtain {
            transform: translateX(105%);
          }

          .uro-treatment-shine,
          .uro-treatment-scan,
          .uro-prostate-path,
          .uro-prostate-dot,
          .uro-prostate-ring,
          .uro-prostate-icon,
          .uro-divider-ring {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default UrologyTreatments;
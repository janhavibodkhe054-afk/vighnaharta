import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, Stethoscope, Plus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPreview = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="about-section relative overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="about-bg-one absolute -left-[170px] top-[12%] h-[390px] w-[390px] rounded-full bg-[#EAF7FC]/80 blur-[90px]" />
        <div className="about-bg-two absolute -right-[180px] bottom-[-150px] h-[370px] w-[370px] rounded-full bg-[#F0F9FC] blur-[100px]" />

        <div className="absolute right-[8%] top-[12%] hidden text-[#2E91C8]/10 lg:block">
          <Plus size={24} strokeWidth={1.3} />
        </div>

        <div className="absolute bottom-[15%] left-[4%] hidden text-[#2E91C8]/10 lg:block">
          <Plus size={18} strokeWidth={1.3} />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-11 md:gap-14 lg:grid-cols-[.94fr_1.06fr] lg:gap-16 xl:gap-20">
          {/* =====================================================
              IMAGE SIDE
          ===================================================== */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="relative mx-auto w-full max-w-[560px] lg:mx-0"
          >
            {/* BACK SHAPE */}
            <div
              data-aos="zoom-in"
              data-aos-delay="150"
              className="absolute -left-3 -top-3 h-[130px] w-[130px] rounded-[26px] bg-[#E7F6FB] sm:-left-5 sm:-top-5 sm:h-[170px] sm:w-[170px] lg:-left-7 lg:-top-7"
            />

            {/* VERTICAL DECORATION */}
            <div className="absolute -left-3 bottom-[18%] z-20 hidden items-center gap-2 sm:flex">
              <span className="h-[38px] w-[3px] rounded-full bg-[#2E91C8]" />
              <span className="h-[17px] w-[3px] rounded-full bg-[#8DD5EF]" />
            </div>

            {/* IMAGE */}
            <div className="about-image-wrap group relative z-10 overflow-hidden rounded-[24px] bg-[#EDF4F7] shadow-[0_24px_65px_rgba(16,45,95,.12)] sm:rounded-[28px] lg:rounded-[32px]">
              <img
                src="/about.png"
                alt="Vighnaharta Hospital"
                loading="lazy"
                className="h-[320px] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035] sm:h-[420px] md:h-[470px] lg:h-[500px] xl:h-[525px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/30 via-transparent to-transparent" />

              {/* SCROLL REVEAL CURTAIN */}
              <span className="about-curtain pointer-events-none absolute inset-0 z-20 bg-[#102D5F]" />

              {/* MOVING LIGHT */}
              <span className="about-image-light pointer-events-none absolute -left-[45%] top-0 h-full w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* BOTTOM IMAGE LABEL */}
              <div className="absolute bottom-5 left-5 z-10 hidden sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-white/65">
                  Vighnaharta Hospital
                </p>

                <p className="mt-1 text-[14px] font-semibold text-white">
                  Alephata, Pune
                </p>
              </div>
            </div>

            {/* 24/7 CARD */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="about-float-card absolute -bottom-5 right-3 z-30 flex items-center gap-3 rounded-[17px] border border-white bg-white/95 px-4 py-3 shadow-[0_16px_35px_rgba(16,45,95,.14)] backdrop-blur-md sm:-bottom-6 sm:right-5 sm:px-5 sm:py-4 lg:-right-5"
            >
              <div className="about-heart relative flex h-[43px] w-[43px] items-center justify-center rounded-[13px] bg-[#EAF7FC] text-[#2E91C8]">
                <span className="about-heart-ring absolute inset-0 rounded-[13px] border border-[#2E91C8]/15" />
                <HeartPulse size={20} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[14px] font-bold leading-none text-[#102D5F]">
                  24×7
                </p>
                <p className="mt-1 text-[10px] font-medium text-[#7B8B9A]">
                  Multispeciality Care
                </p>
              </div>
            </div>

            {/* STETHOSCOPE */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="about-stethoscope absolute -right-4 top-[12%] z-30 hidden h-[58px] w-[58px] items-center justify-center rounded-[17px] border-[5px] border-white bg-[#102D5F] text-white shadow-[0_12px_30px_rgba(16,45,95,.2)] sm:flex lg:-right-5 xl:h-[64px] xl:w-[64px]"
            >
              <Stethoscope size={24} strokeWidth={1.7} />
            </div>

            {/* DOT MATRIX */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="absolute -bottom-9 left-8 hidden grid-cols-6 gap-2 sm:grid"
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  className="about-dot h-[3px] w-[3px] rounded-full bg-[#2E91C8]/30"
                  style={{ animationDelay: `${i * 0.08}s` }}
                />
              ))}
            </div>
          </div>

          {/* =====================================================
              CONTENT SIDE
          ===================================================== */}
          <div className="min-w-0 lg:pl-1">
            {/* LABEL */}
            <div
              data-aos="fade-left"
              className="mb-3 flex items-center gap-3"
            >
              <span className="about-label-line h-[2px] w-9 origin-left rounded-full bg-[#2E91C8]" />

              <span className="text-[11px] font-bold uppercase tracking-[2.2px] text-[#2E91C8] sm:text-[12px]">
                About Vighnaharta Hospital
              </span>
            </div>

            {/* HEADING */}
            <h2
              data-aos="fade-up"
              data-aos-delay="70"
              className="max-w-[680px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
            >
              Healing with Care,
              <span className="relative mt-1 block text-[#2E91C8]">
                Compassion & Clinical Excellence

                <svg
                  viewBox="0 0 320 8"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-[6px] w-[180px] opacity-30 sm:w-[220px]"
                >
                  <path
                    className="about-underline"
                    d="M2 5 C80 1, 170 8, 318 3"
                    fill="none"
                    stroke="#2E91C8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-7 max-w-[680px] space-y-3.5 text-[14px] leading-[1.8] text-[#5F6F82] sm:text-[15px] lg:text-[16px]">
              <p data-aos="fade-up" data-aos-delay="140">
                At Vighnaharta Hospital, we believe quality healthcare begins
                with the right diagnosis, timely treatment and compassionate
                patient care.
              </p>

              <p data-aos="fade-up" data-aos-delay="200">
                Located in Alephata, Taluka Junnar, our multispeciality hospital
                brings multiple medical specialties, diagnostic facilities and
                emergency services together under one roof.
              </p>

              <p data-aos="fade-up" data-aos-delay="260">
                Led by{" "}
                <strong className="font-semibold text-[#102D5F]">
                  Dr. Nagesh Hingmire and Dr. Deepali Hingmire
                </strong>
                , our team works towards providing accessible and dependable
                healthcare for every patient who walks through our doors.
              </p>
            </div>

            {/* SMALL FEATURE LINE */}
            <div
              data-aos="fade-up"
              data-aos-delay="320"
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-[#E5EEF2] py-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#EAF7FC]">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#2E91C8]" />
                </span>

                <span className="text-[12px] font-semibold text-[#102D5F] sm:text-[13px]">
                  Multispeciality Care
                </span>
              </div>

              <span className="hidden h-5 w-px bg-[#DDE8ED] sm:block" />

              <div className="flex items-center gap-2.5">
                <span className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#EAF7FC]">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#2E91C8]" />
                </span>

                <span className="text-[12px] font-semibold text-[#102D5F] sm:text-[13px]">
                  Diagnostic Support
                </span>
              </div>

              <span className="hidden h-5 w-px bg-[#DDE8ED] md:block" />

              <div className="flex items-center gap-2.5">
                <span className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#FFF0F0]">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#E64B4B]" />
                </span>

                <span className="text-[12px] font-semibold text-[#102D5F] sm:text-[13px]">
                  24×7 Emergency
                </span>
              </div>
            </div>

            {/* CTA */}
            <div data-aos="fade-up" data-aos-delay="390" className="mt-6">
              <Link
                to="/about"
                className="group relative inline-flex min-h-[50px] items-center gap-3 overflow-hidden rounded-full bg-[#102D5F] px-6 text-[13px] font-semibold text-white shadow-[0_10px_28px_rgba(16,45,95,.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] hover:shadow-[0_16px_35px_rgba(46,145,200,.24)] sm:px-7 sm:text-[14px]"
              >
                <span className="about-button-light absolute -left-[45%] top-0 h-full w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <span className="relative">Know More About Us</span>

                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutCurtain {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(105%);
          }
        }

        @keyframes aboutImageLight {
          0% {
            left: -45%;
          }
          100% {
            left: 125%;
          }
        }

        @keyframes aboutFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes aboutStethoscope {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(4deg);
          }
        }

        @keyframes aboutHeartRing {
          0% {
            transform: scale(.8);
            opacity: .55;
          }
          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        @keyframes aboutDot {
          0%, 100% {
            opacity: .25;
            transform: scale(.8);
          }
          50% {
            opacity: .8;
            transform: scale(1.2);
          }
        }

        @keyframes aboutUnderline {
          0% {
            stroke-dasharray: 350;
            stroke-dashoffset: 350;
          }
          100% {
            stroke-dasharray: 350;
            stroke-dashoffset: 0;
          }
        }

        @keyframes aboutLabelLine {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes aboutBgFloatOne {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -14px);
          }
        }

        @keyframes aboutBgFloatTwo {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-18px, 14px);
          }
        }

        @keyframes aboutButtonLight {
          0% {
            left: -45%;
          }
          100% {
            left: 125%;
          }
        }

        .aos-animate .about-curtain {
          animation: aboutCurtain 1.15s cubic-bezier(.77,0,.18,1) .18s forwards;
        }

        .aos-animate .about-image-light {
          animation: aboutImageLight 1.2s ease-out 1s forwards;
        }

        .aos-animate .about-underline {
          animation: aboutUnderline 1.25s ease-out .35s forwards;
        }

        .aos-animate .about-label-line {
          animation: aboutLabelLine .8s ease-out forwards;
        }

        .about-float-card {
          animation: aboutFloat 4s ease-in-out infinite;
        }

        .about-stethoscope {
          animation: aboutStethoscope 4.5s ease-in-out infinite;
        }

        .about-heart-ring {
          animation: aboutHeartRing 2s ease-out infinite;
        }

        .about-dot {
          animation: aboutDot 2.2s ease-in-out infinite;
        }

        .about-bg-one {
          animation: aboutBgFloatOne 9s ease-in-out infinite;
        }

        .about-bg-two {
          animation: aboutBgFloatTwo 10s ease-in-out infinite;
        }

        .group:hover .about-button-light {
          animation: aboutButtonLight .75s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-curtain {
            transform: translateX(105%);
          }

          .about-image-light,
          .about-float-card,
          .about-stethoscope,
          .about-heart-ring,
          .about-dot,
          .about-underline,
          .about-label-line,
          .about-bg-one,
          .about-bg-two,
          .about-button-light {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;
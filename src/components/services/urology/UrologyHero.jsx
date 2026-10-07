import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  CalendarDays,
  Phone,
  Droplets,
  Activity,
  Stethoscope,
  Circle,
} from "lucide-react";

const UrologyHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });

    setTimeout(() => AOS.refresh(), 100);
  }, []);

  const careAreas = ["Kidney", "Urinary", "Prostate"];

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="uro-bg-one absolute -left-[180px] -top-[190px] h-[400px] w-[400px] rounded-full bg-[#55B8E9]/10 blur-[100px]" />
        <div className="uro-bg-two absolute -bottom-[200px] right-[-160px] h-[420px] w-[420px] rounded-full bg-[#2E91C8]/10 blur-[110px]" />

        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(#102D5F 1px, transparent 1px), linear-gradient(90deg,#102D5F 1px,transparent 1px)", backgroundSize: "42px 42px" }} />
      </div>

      {/* TOP SIGNAL */}
      <div className="absolute left-0 right-0 top-0 z-30 h-[2px] overflow-hidden bg-[#DCECF2]">
        <span className="uro-top-signal absolute top-0 h-full w-[180px] bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent" />
      </div>

      {/* MAIN */}
      <div className="relative mx-auto grid w-full max-w-[1380px] items-center gap-8 px-4 py-9 sm:px-6 sm:py-10 md:grid-cols-[1fr_.92fr] md:gap-8 md:py-11 lg:gap-12 lg:px-8 lg:py-12 xl:gap-16 xl:py-14">
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="relative z-20 mx-auto w-full max-w-[650px] md:mx-0">
          {/* LABEL */}
          <div data-aos="fade-right" className="mb-3 flex items-center gap-2.5">
            <span className="relative flex h-[30px] w-[30px] items-center justify-center">
              <span className="uro-label-bg absolute inset-0 rotate-45 rounded-[8px] bg-[#DFF3FA]" />

              <Droplets
                size={14}
                strokeWidth={1.8}
                className="relative z-10 text-[#2E91C8]"
              />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2.3px] text-[#2E91C8] sm:text-[12px]">
              Urology
            </span>

            <span className="uro-label-line h-px w-[38px] origin-left bg-gradient-to-r from-[#2E91C8] to-transparent" />
          </div>

          {/* HEADING */}
          <h1 data-aos="fade-up" data-aos-delay="70" className="max-w-[650px] text-[32px] font-bold leading-[1.1] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[40px] lg:text-[44px] xl:text-[48px]">
            Care for{" "}
            <span className="relative inline-block text-[#2E91C8]">
              Urinary,
              <svg className="absolute -bottom-[6px] left-0 h-[7px] w-full" viewBox="0 0 180 8" preserveAspectRatio="none">
                <path className="uro-draw-line" d="M2 5 C48 1 122 2 178 4" fill="none" stroke="#69CBF2" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Kidney & Prostate-Related Conditions
          </h1>

          {/* DESCRIPTION */}
          <p data-aos="fade-up" data-aos-delay="140" className="mt-5 max-w-[590px] text-[15px] leading-[1.75] text-[#64748B] sm:text-[16px] lg:text-[17px]">
            Evaluation and treatment support for kidney, urinary and
            prostate-related conditions.
          </p>

          {/* CARE AREAS */}
          <div data-aos="fade-up" data-aos-delay="190" className="mt-5 flex max-w-[530px] items-center">
            {careAreas.map((item, index) => (
              <React.Fragment key={item}>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={220 + index * 80}
                  className="group flex shrink-0 items-center gap-2"
                >
                  <span className="relative flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#CBE4EE] bg-white">
                    <span className="uro-care-ring absolute inset-[4px] rounded-full border border-[#2E91C8]/15" />
                    <span className="h-[5px] w-[5px] rounded-full bg-[#2E91C8] transition-transform duration-300 group-hover:scale-[1.6]" />
                  </span>

                  <span className="text-[11px] font-semibold text-[#52667A] sm:text-[12px] lg:text-[13px]">
                    {item}
                  </span>
                </div>

                {index !== careAreas.length - 1 && (
                  <span className="uro-care-line mx-2 h-px flex-1 bg-[#D4E6ED] sm:mx-3" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* BUTTONS */}
          <div data-aos="fade-up" data-aos-delay="300" className="mt-6 flex flex-col gap-2.5 min-[430px]:flex-row">
            <Link
              to="/contact"
              className="group relative inline-flex min-h-[48px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#102D5F] px-5 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(16,45,95,.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2E91C8] sm:px-6 sm:text-[14px]"
            >
              <span className="uro-button-shine absolute -left-[45%] top-0 h-full w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <CalendarDays
                size={15}
                strokeWidth={1.8}
                className="relative"
              />

              <span className="relative">
                Book Urology Consultation
              </span>

              <ArrowRight
                size={14}
                strokeWidth={2}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:+919766999474"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#CEE3EC] bg-white px-5 text-[13px] font-bold text-[#102D5F] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2E91C8]/50 hover:text-[#2E91C8] sm:text-[14px]"
            >
              <Phone size={15} strokeWidth={1.8} />
              Call Hospital
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT VISUAL
        ===================================================== */}
        <div data-aos="fade-left" data-aos-duration="1050" data-aos-delay="80" className="relative mx-auto w-full max-w-[570px] md:ml-auto">
          {/* ORBIT */}
          <div className="absolute left-1/2 top-1/2 hidden h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2E91C8]/15 lg:block">
            <span className="uro-orbit-dot absolute left-1/2 top-[-5px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-[#2E91C8] shadow-[0_0_14px_rgba(46,145,200,.55)]" />
          </div>

          {/* BACK SHAPE */}
          <div data-aos="zoom-in" data-aos-delay="160" className="absolute -right-2 -top-3 h-[130px] w-[130px] rounded-[25px] bg-[#DFF3FA] sm:-right-4 sm:-top-4 sm:h-[160px] sm:w-[160px]" />

          {/* IMAGE */}
          <div className="relative mx-auto h-[330px] w-[94%] sm:h-[390px] md:h-[400px] lg:h-[430px] lg:w-[90%] xl:h-[445px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px_85px_28px_85px] bg-[#D9F0F8] sm:translate-x-4 sm:translate-y-4" />

            <div className="group absolute inset-0 overflow-hidden rounded-[28px_85px_28px_85px] border-[4px] border-white bg-[#DCEEF5] shadow-[0_24px_60px_rgba(16,45,95,.16)]">
              <img
                src="/uorology-hero.png"
                alt="Urology care at Vighnaharta Hospital"
                className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/80 via-transparent to-transparent" />

              {/* SCROLL CURTAIN */}
              <span className="uro-image-curtain pointer-events-none absolute inset-0 z-30 bg-[#102D5F]" />

              {/* LIGHT SWEEP */}
              <span className="uro-image-light pointer-events-none absolute -left-[40%] top-0 z-20 h-full w-[25%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              {/* SCAN */}
              <span className="uro-scan absolute left-[8%] right-[8%] top-[10%] z-10 h-px bg-gradient-to-r from-transparent via-[#8BE0FA] to-transparent shadow-[0_0_12px_rgba(105,203,242,.7)]" />

              {/* TOP LABEL */}
              <div data-aos="zoom-in" data-aos-delay="350" className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-[#06182F]/60 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#6DD0F5] opacity-40" />
                  <span className="relative h-[7px] w-[7px] rounded-full bg-[#6DD0F5]" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-white">
                  Urology Care
                </span>
              </div>

              {/* MEDICAL PATH */}
              <div className="absolute right-5 top-[23%] z-20 h-[160px] w-[110px] sm:right-7 sm:w-[125px]">
                <svg viewBox="0 0 125 160" className="absolute inset-0 h-full w-full">
                  <path className="uro-path-line" d="M25 25 C25 60 45 70 56 95" fill="none" stroke="rgba(128,218,248,.55)" strokeWidth="1.3" strokeDasharray="4 4" />
                  <path className="uro-path-line" d="M100 25 C100 60 80 70 69 95" fill="none" stroke="rgba(128,218,248,.55)" strokeWidth="1.3" strokeDasharray="4 4" />
                  <path className="uro-path-line" d="M62 95 L62 140" fill="none" stroke="rgba(128,218,248,.65)" strokeWidth="1.3" />
                </svg>

                <div className="uro-float-one absolute left-[4px] top-[5px] flex h-[38px] w-[38px] items-center justify-center rounded-[15px_11px_17px_12px] border border-[#7CD8F7]/40 bg-[#06182F]/65 text-[#8BE0FA] backdrop-blur-md">
                  <Droplets size={15} strokeWidth={1.6} />
                </div>

                <div className="uro-float-two absolute right-[4px] top-[5px] flex h-[38px] w-[38px] items-center justify-center rounded-[11px_15px_12px_17px] border border-[#7CD8F7]/40 bg-[#06182F]/65 text-[#8BE0FA] backdrop-blur-md">
                  <Droplets size={15} strokeWidth={1.6} />
                </div>

                <div className="absolute left-1/2 top-[80px] flex h-[35px] w-[35px] -translate-x-1/2 items-center justify-center rounded-full border border-[#80DCF8]/40 bg-[#06182F]/70 text-[#8BE0FA] backdrop-blur-md">
                  <Activity size={14} strokeWidth={1.7} />

                  <span className="uro-center-pulse absolute inset-[-5px] rounded-full border border-[#80DCF8]/30" />
                </div>

                <span className="uro-path-dot absolute left-1/2 top-[52px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_#83DDF9]" />
              </div>

              {/* BOTTOM */}
              <div data-aos="fade-up" data-aos-delay="420" className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-5 sm:left-5">
                <span className="text-[9px] font-bold uppercase tracking-[1.6px] text-[#8EDCF7]">
                  Focused Urology Care
                </span>

                <div className="mt-1.5 flex items-center gap-2 text-[12px] font-semibold text-white sm:text-[14px]">
                  <span>Kidney</span>
                  <Circle size={4} fill="currentColor" />
                  <span>Urinary</span>
                  <Circle size={4} fill="currentColor" />
                  <span>Prostate</span>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING BADGE */}
          <div data-aos="zoom-in-up" data-aos-delay="450" className="absolute -bottom-3 left-0 z-40 sm:-bottom-4 sm:left-1 lg:-left-2">
            <div className="uro-floating-card flex items-center gap-2.5 rounded-[15px] border border-white bg-white/95 p-2.5 pr-4 shadow-[0_15px_35px_rgba(16,45,95,.14)] backdrop-blur-md">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#102D5F] text-[#6DD0F5]">
                <Stethoscope size={17} strokeWidth={1.7} />
              </div>

              <div>
                <span className="block text-[8px] font-bold uppercase tracking-[1.1px] text-[#2E91C8]">
                  Department
                </span>

                <span className="mt-0.5 block text-[12px] font-bold text-[#102D5F]">
                  Urology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ECG */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-[26px] overflow-hidden opacity-25 md:block">
        <svg viewBox="0 0 1440 26" preserveAspectRatio="none" className="h-full w-full">
          <path className="uro-ecg-line" d="M0 14 H260 L275 14 L284 4 L296 23 L307 9 L317 14 H620 L636 14 L645 4 L657 23 L668 9 L679 14 H1000 L1016 14 L1025 4 L1037 23 L1048 9 L1059 14 H1440" fill="none" stroke="#2E91C8" strokeWidth="1.3" />
        </svg>
      </div>

      <style>{`
        @keyframes uroDraw {
          from { stroke-dasharray: 220; stroke-dashoffset: 220; }
          to { stroke-dasharray: 220; stroke-dashoffset: 0; }
        }

        @keyframes uroCurtain {
          0% { transform: translateX(0); }
          100% { transform: translateX(105%); }
        }

        @keyframes uroImageLight {
          0% { left: -40%; opacity: 0; }
          15% { opacity: 1; }
          100% { left: 125%; opacity: 0; }
        }

        @keyframes uroScanMove {
          0% { top: 10%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 88%; opacity: 0; }
        }

        @keyframes uroPulse {
          0% { transform: scale(.75); opacity: .6; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        @keyframes uroFloatOne {
          0%,100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }

        @keyframes uroFloatTwo {
          0%,100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(6px) rotate(-2deg); }
        }

        @keyframes uroPathDot {
          0% { transform: translate(-50%, -25px); opacity: 0; }
          15% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translate(-50%, 78px); opacity: 0; }
        }

        @keyframes uroCardFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes uroOrbit {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }

        @keyframes uroCarePulse {
          0%,100% { transform: scale(.8); opacity: .25; }
          50% { transform: scale(1.1); opacity: .8; }
        }

        @keyframes uroCareLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes uroEcg {
          0% { stroke-dasharray: 1600; stroke-dashoffset: 1600; }
          100% { stroke-dasharray: 1600; stroke-dashoffset: 0; }
        }

        @keyframes uroBgOne {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(20px,12px); }
        }

        @keyframes uroBgTwo {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-18px,-10px); }
        }

        @keyframes uroLabel {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes uroLabelBg {
          0% { transform: rotate(45deg) scale(.6); opacity: 0; }
          100% { transform: rotate(45deg) scale(1); opacity: 1; }
        }

        @keyframes uroButtonShine {
          0% { left: -45%; }
          100% { left: 125%; }
        }

        .aos-animate .uro-image-curtain {
          animation: uroCurtain 1.05s cubic-bezier(.77,0,.18,1) .15s forwards;
        }

        .aos-animate .uro-image-light {
          animation: uroImageLight 1.1s ease-out 1s forwards;
        }

        .aos-animate .uro-draw-line {
          animation: uroDraw 1.25s ease-out .25s both;
        }

        .aos-animate .uro-label-line {
          animation: uroLabel .8s ease-out both;
        }

        .aos-animate .uro-label-bg {
          animation: uroLabelBg .65s ease-out both;
        }

        .aos-animate .uro-care-line {
          transform-origin: left;
          animation: uroCareLine .8s ease-out .25s both;
        }

        .uro-scan {
          animation: uroScanMove 5s ease-in-out infinite;
        }

        .uro-center-pulse {
          animation: uroPulse 2.3s ease-out infinite;
        }

        .uro-float-one {
          animation: uroFloatOne 4s ease-in-out infinite;
        }

        .uro-float-two {
          animation: uroFloatTwo 4.4s ease-in-out infinite;
        }

        .uro-path-dot {
          animation: uroPathDot 3.6s ease-in-out infinite;
        }

        .uro-floating-card {
          animation: uroCardFloat 4s ease-in-out infinite;
        }

        .uro-orbit-dot {
          transform-origin: 0 225px;
          animation: uroOrbit 12s linear infinite;
        }

        .uro-care-ring {
          animation: uroCarePulse 2.4s ease-in-out infinite;
        }

        .uro-ecg-line {
          animation: uroEcg 5s linear infinite;
        }

        .uro-bg-one {
          animation: uroBgOne 10s ease-in-out infinite;
        }

        .uro-bg-two {
          animation: uroBgTwo 11s ease-in-out infinite;
        }

        .group:hover .uro-button-shine {
          animation: uroButtonShine .75s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .uro-image-curtain {
            transform: translateX(105%);
          }

          .uro-image-light,
          .uro-draw-line,
          .uro-label-line,
          .uro-label-bg,
          .uro-care-line,
          .uro-scan,
          .uro-center-pulse,
          .uro-float-one,
          .uro-float-two,
          .uro-path-dot,
          .uro-floating-card,
          .uro-orbit-dot,
          .uro-care-ring,
          .uro-ecg-line,
          .uro-bg-one,
          .uro-bg-two,
          .uro-button-shine {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default UrologyHero;
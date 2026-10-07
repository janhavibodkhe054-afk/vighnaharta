import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Venus, ArrowRight, CalendarDays, Stethoscope, HeartPulse } from "lucide-react";

const GynecologyHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FCFE]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="gyn-bg-one absolute -left-[180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#DDF3FA]/70 blur-[105px]" />
        <div className="gyn-bg-two absolute -right-[170px] bottom-[-180px] h-[430px] w-[430px] rounded-full bg-[#E8F7FC] blur-[110px]" />

        <svg viewBox="0 0 1440 700" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-[0.55]">
          <path className="gyn-bg-path" d="M-50 560 C260 420 410 650 720 500 C980 375 1160 470 1500 260" fill="none" stroke="#D8EDF5" strokeWidth="1" />
          <path className="gyn-bg-path gyn-bg-path-delay" d="M-50 600 C270 460 440 680 750 535 C1040 400 1200 500 1500 315" fill="none" stroke="#E2F1F6" strokeWidth="1" />
        </svg>

        <div className="absolute left-[6%] top-[24%] hidden h-[5px] w-[5px] rotate-45 bg-[#69CBF2]/45 lg:block" />
        <div className="absolute right-[5%] top-[18%] hidden h-[7px] w-[7px] rounded-full border border-[#2E91C8]/25 lg:block" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1380px] items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-[1fr_.92fr] md:py-14 lg:gap-12 lg:px-8 lg:py-16 xl:gap-16">
        {/* ================= LEFT ================= */}
        <div className="relative z-10">
          {/* LABEL */}
          <div data-aos="fade-right" className="mb-4 flex items-center gap-3">
            <span className="gyn-label-line h-[2px] w-8 origin-left rounded-full bg-[#2E91C8]" />

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              Gynecology &amp; Women&apos;s Health
            </span>
          </div>

          {/* HEADING */}
          <h1 data-aos="fade-up" data-aos-delay="70" className="max-w-[650px] text-[34px] font-bold leading-[1.08] tracking-[-1.2px] text-[#102D5F] sm:text-[40px] md:text-[43px] lg:text-[48px] xl:text-[52px]">
            Dedicated Medical Care for{" "}
            <span className="relative inline-block text-[#2E91C8]">
              Women&apos;s Health
              <svg viewBox="0 0 300 10" preserveAspectRatio="none" className="absolute -bottom-[6px] left-0 h-[7px] w-full">
                <path className="gyn-heading-line" d="M2 6 C75 1 205 9 298 3" fill="none" stroke="#72CCE9" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p data-aos="fade-up" data-aos-delay="140" className="mt-6 max-w-[590px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]">
            Medical consultation and appropriate care for women&apos;s health needs at different stages of life.
          </p>

          {/* CARE SIGNAL */}
          <div data-aos="fade-up" data-aos-delay="210" className="mt-6 flex max-w-[570px] flex-wrap items-center gap-x-5 gap-y-3 border-y border-[#DCECF2] py-3.5">
            <CarePoint icon={Stethoscope} text="Medical Consultation" />
            <CarePoint icon={HeartPulse} text="Patient-Focused Care" />
            <CarePoint icon={Venus} text="Women’s Health" />
          </div>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="280" className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="gyn-primary-btn group relative inline-flex min-h-[48px] items-center gap-2.5 overflow-hidden rounded-full bg-[#102D5F] px-5 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(16,45,95,.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2E91C8] sm:px-6 sm:text-[14px]">
              <span className="gyn-btn-shine absolute -left-[45%] top-0 h-full w-[32%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <CalendarDays size={15} className="relative" />
              <span className="relative">Book Consultation</span>
              <ArrowRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div data-aos="fade-left" data-aos-duration="1050" className="relative mx-auto w-full max-w-[590px] md:mx-0 md:ml-auto">
          {/* BACK SHAPE */}
          <div data-aos="zoom-in" data-aos-delay="120" className="absolute -right-4 top-5 h-[88%] w-[87%] rounded-[44%_56%_48%_52%/38%_42%_58%_62%] bg-gradient-to-br from-[#DDF3FA] to-[#EDF9FC] sm:-right-6" />

          {/* ORBIT */}
          <div className="gyn-orbit pointer-events-none absolute -right-2 top-[10%] z-20 hidden h-[80%] w-[86%] rounded-[48%] border border-dashed border-[#2E91C8]/20 sm:block">
            <span className="absolute left-[15%] top-[-4px] h-[8px] w-[8px] rounded-full bg-[#69CBF2] shadow-[0_0_12px_rgba(105,203,242,.6)]" />
          </div>

          {/* IMAGE */}
          <div className="group relative z-10 ml-auto h-[340px] w-[94%] overflow-hidden rounded-[28px_70px_28px_70px] bg-[#EAF7FC] shadow-[0_24px_60px_rgba(16,45,95,.11)] sm:h-[400px] md:h-[420px] lg:h-[455px] xl:h-[475px]">
            <img src="/gynecology-hero.png" alt="Gynecology and Women's Health" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/45 via-transparent to-white/5" />

            {/* SCROLL IMAGE REVEAL */}
            <span className="gyn-image-curtain absolute inset-0 z-30 bg-[#DDEFF6]" />

            {/* LIGHT SWEEP */}
            <span className="gyn-image-light absolute -left-[40%] top-0 z-20 h-full w-[26%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* TOP LABEL */}
            <div data-aos="zoom-in" data-aos-delay="340" className="absolute left-4 top-4 z-20 rounded-full border border-white/35 bg-white/80 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#2E91C8] opacity-30" />
                  <span className="relative h-[7px] w-[7px] rounded-full bg-[#2E91C8]" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#102D5F]">
                  Women&apos;s Health
                </span>
              </div>
            </div>

            {/* BOTTOM IMAGE TEXT */}
            <div data-aos="fade-up" data-aos-delay="400" className="absolute bottom-5 left-5 right-5 z-20 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#8DE0FA]">
                Dedicated Care
              </span>

              <p className="mt-1 max-w-[330px] text-[15px] font-semibold leading-[1.45] text-white sm:text-[16px]">
                Consultation and appropriate care focused on women&apos;s health.
              </p>
            </div>

            {/* SCAN */}
            <span className="gyn-scan absolute left-[8%] right-[8%] top-[15%] z-10 h-px bg-gradient-to-r from-transparent via-[#A8E8FA] to-transparent shadow-[0_0_13px_rgba(168,232,250,.7)]" />
          </div>

          {/* FLOATING CLINICAL BADGE */}
          <div data-aos="zoom-in-up" data-aos-delay="450" className="gyn-floating-card absolute -bottom-4 left-0 z-30 flex items-center gap-3 rounded-[17px] border border-[#D9EAF0] bg-white px-4 py-3 shadow-[0_14px_35px_rgba(16,45,95,.10)] sm:-left-4 sm:px-5">
            <div className="gyn-symbol relative flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
              <Venus size={18} strokeWidth={1.8} />
              <span className="gyn-symbol-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/15" />
            </div>

            <div>
              <span className="text-[9px] font-bold uppercase tracking-[1.2px] text-[#2E91C8]">
                Women&apos;s Healthcare
              </span>

              <p className="mt-0.5 text-[12px] font-bold text-[#102D5F] sm:text-[13px]">
                Consultation • Evaluation • Care
              </p>
            </div>
          </div>

          {/* SMALL DECORATION */}
          <div className="gyn-small-float absolute -right-2 bottom-[17%] z-30 hidden h-[42px] w-[42px] items-center justify-center rounded-full border border-white bg-white/90 text-[#2E91C8] shadow-[0_10px_25px_rgba(16,45,95,.09)] backdrop-blur sm:flex">
            <HeartPulse size={17} strokeWidth={1.7} />
          </div>
        </div>
      </div>

      {/* BOTTOM SOFT LINE */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 34" preserveAspectRatio="none" className="h-[25px] w-full sm:h-[30px]">
          <path d="M0 25 C280 0 450 34 720 17 C980 1 1170 29 1440 8 L1440 34 L0 34 Z" fill="white" />
        </svg>
      </div>

      <style>{`
        @keyframes gynLabel {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes gynHeadingLine {
          0% { stroke-dasharray: 350; stroke-dashoffset: 350; }
          100% { stroke-dasharray: 350; stroke-dashoffset: 0; }
        }

        @keyframes gynImageReveal {
          0% { transform: translateX(0); }
          100% { transform: translateX(105%); }
        }

        @keyframes gynImageLight {
          0% { left: -40%; opacity: 0; }
          15% { opacity: 1; }
          100% { left: 125%; opacity: 0; }
        }

        @keyframes gynScan {
          0% { top: 15%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 88%; opacity: 0; }
        }

        @keyframes gynOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gynFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes gynSmallFloat {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(5deg); }
        }

        @keyframes gynRing {
          0% { transform: scale(.8); opacity: .55; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes gynPath {
          0% { stroke-dasharray: 1600; stroke-dashoffset: 1600; }
          100% { stroke-dasharray: 1600; stroke-dashoffset: 0; }
        }

        @keyframes gynBgOne {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(25px,18px); }
        }

        @keyframes gynBgTwo {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-22px,-16px); }
        }

        @keyframes gynButtonShine {
          0% { left: -45%; }
          100% { left: 125%; }
        }

        .aos-animate .gyn-label-line {
          animation: gynLabel .75s ease-out both;
        }

        .aos-animate .gyn-heading-line {
          animation: gynHeadingLine 1.2s ease-out .25s both;
        }

        .aos-animate .gyn-image-curtain {
          animation: gynImageReveal 1.05s cubic-bezier(.77,0,.18,1) .12s forwards;
        }

        .aos-animate .gyn-image-light {
          animation: gynImageLight 1.15s ease-out .95s forwards;
        }

        .gyn-scan {
          animation: gynScan 5.5s ease-in-out infinite;
        }

        .gyn-orbit {
          animation: gynOrbit 22s linear infinite;
        }

        .gyn-floating-card {
          animation: gynFloat 4.5s ease-in-out infinite;
        }

        .gyn-small-float {
          animation: gynSmallFloat 4s ease-in-out infinite;
        }

        .gyn-symbol-ring {
          animation: gynRing 2.3s ease-out infinite;
        }

        .gyn-bg-path {
          animation: gynPath 3s ease-out both;
        }

        .gyn-bg-path-delay {
          animation-delay: .4s;
        }

        .gyn-bg-one {
          animation: gynBgOne 10s ease-in-out infinite;
        }

        .gyn-bg-two {
          animation: gynBgTwo 11s ease-in-out infinite;
        }

        .gyn-primary-btn:hover .gyn-btn-shine {
          animation: gynButtonShine .75s ease-out forwards;
        }

        @media (max-width: 767px) {
          .gyn-orbit {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gyn-label-line,
          .gyn-heading-line,
          .gyn-image-curtain,
          .gyn-image-light,
          .gyn-scan,
          .gyn-orbit,
          .gyn-floating-card,
          .gyn-small-float,
          .gyn-symbol-ring,
          .gyn-bg-path,
          .gyn-bg-one,
          .gyn-bg-two,
          .gyn-btn-shine {
            animation: none !important;
          }

          .gyn-image-curtain {
            transform: translateX(105%);
          }
        }
      `}</style>
    </section>
  );
};

const CarePoint = ({ icon: Icon, text }) => {
  return (
    <div className="group flex items-center gap-2">
      <span className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white">
        <Icon size={13} strokeWidth={1.8} />
      </span>

      <span className="text-[11px] font-semibold text-[#536A7C] sm:text-[12px]">
        {text}
      </span>
    </div>
  );
};

export default GynecologyHero;
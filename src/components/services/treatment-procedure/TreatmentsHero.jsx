import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Stethoscope, ArrowRight, CalendarDays, Activity, Plus } from "lucide-react";

const TreatmentsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 30 });
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#06182F]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[120px] -top-[170px] h-[390px] w-[390px] rounded-full bg-[#2E91C8]/15 blur-[100px]" />
        <div className="absolute -bottom-[190px] right-[5%] h-[360px] w-[360px] rounded-full bg-[#55B8E9]/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* LARGE DECORATIVE TEXT */}
        <span className="absolute right-[3%] top-1/2 hidden -translate-y-1/2 select-none text-[150px] font-black leading-none tracking-[-10px] text-white/[0.018] lg:block xl:text-[190px]">
          CARE
        </span>

        {/* PLUS DECORATIONS */}
        <Plus className="treat-plus absolute left-[7%] top-[24%] hidden text-[#69CBF2]/25 lg:block" size={18} strokeWidth={1.2} />
        <Plus className="treat-plus-two absolute right-[8%] top-[20%] hidden text-white/15 md:block" size={14} strokeWidth={1.2} />
      </div>

      {/* TOP CLINICAL SIGNAL */}
      <div className="absolute left-0 right-0 top-0 h-px bg-white/[0.06]">
        <span className="treat-top-signal absolute top-0 h-px w-[140px] bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent shadow-[0_0_10px_rgba(105,203,242,.65)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1380px] items-center px-4 py-11 sm:px-6 sm:py-12 md:py-14 lg:px-8 lg:py-16">
        <div className="grid w-full items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          {/* ================= LEFT ================= */}
          <div className="max-w-[850px]">
            {/* LABEL */}
            <div data-aos="fade-right" className="mb-3 flex items-center gap-3">
              <span className="treat-label-line h-[2px] w-8 origin-left rounded-full bg-[#69CBF2]" />

              <span className="text-[11px] font-bold uppercase tracking-[2.2px] text-[#78DDF7] sm:text-[12px]">
                Vighnaharta Hospital
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-white/30" />

              <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-white/45 sm:text-[11px]">
                Treatment Directory
              </span>
            </div>

            {/* HEADING */}
            <h1 data-aos="fade-up" data-aos-delay="60" className="text-[34px] font-bold leading-[1.05] tracking-[-1.2px] text-white sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px]">
              Treatments{" "}
              <span className="relative inline-block text-[#72D7F3]">
                &amp; Procedures
                <svg viewBox="0 0 300 8" preserveAspectRatio="none" className="absolute -bottom-[7px] left-0 h-[6px] w-full">
                  <path className="treat-title-line" d="M2 5 C80 1 205 8 298 3" fill="none" stroke="#69CBF2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* SUBHEADING */}
            <p data-aos="fade-up" data-aos-delay="120" className="mt-5 max-w-[760px] text-[16px] font-medium leading-[1.7] text-white/80 sm:text-[17px] lg:text-[19px]">
              Medical &amp; Surgical Care Based on Individual Clinical Requirements
            </p>

            {/* SUPPORTING LINE */}
            <div data-aos="fade-up" data-aos-delay="180" className="mt-5 flex max-w-[730px] items-start gap-3 border-l-2 border-[#55B8E9]/55 pl-4">
              <p className="text-[13px] leading-[1.7] text-[#B9C9D8] sm:text-[14px]">
                Explore treatment and procedure information across orthopedic, spine, surgical, urological and women&apos;s healthcare services available at Vighnaharta Hospital.
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div data-aos="fade-left" data-aos-delay="180" className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-stretch">
            <Link to="/contact" className="treat-btn group relative inline-flex min-h-[48px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#2E91C8] px-5 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(46,145,200,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#55B8E9] sm:px-6 sm:text-[14px]">
              <span className="treat-btn-shine absolute -left-[45%] top-0 h-full w-[32%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <CalendarDays size={15} className="relative" />
              <span className="relative">Book Consultation</span>
              <ArrowRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="hidden items-center justify-center gap-2 lg:flex">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[9px] font-bold uppercase tracking-[1.3px] text-white/35">Individual Care</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM CLINICAL STRIP ================= */}
      <div data-aos="fade-up" data-aos-delay="230" className="relative border-t border-white/[0.08] bg-white/[0.025]">
        <div className="mx-auto flex w-full max-w-[1380px] items-center gap-3 overflow-hidden px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center gap-2 text-[#73D9F5]">
            <Activity size={15} strokeWidth={1.8} />
            <span className="text-[9px] font-bold uppercase tracking-[1.4px] sm:text-[10px]">Care Path</span>
          </div>

          <div className="h-4 w-px shrink-0 bg-white/10" />

          <div className="flex min-w-max items-center gap-2.5 text-[10px] font-semibold text-white/60 sm:gap-3 sm:text-[11px]">
            <span>Clinical Evaluation</span>
            <ArrowRight size={10} className="text-[#55B8E9]" />
            <span>Treatment Planning</span>
            <ArrowRight size={10} className="text-[#55B8E9]" />
            <span>Appropriate Care</span>
          </div>

          <div className="relative ml-auto hidden h-[28px] w-[100px] items-center md:flex">
            <svg viewBox="0 0 100 28" className="h-full w-full overflow-visible">
              <path className="treat-ecg" d="M0 14 H22 L28 14 L33 5 L39 23 L45 10 L51 14 H70 L75 14 L79 8 L84 19 L89 14 H100" fill="none" stroke="#69CBF2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <Stethoscope size={14} className="ml-3 shrink-0 text-white/35" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes treatLabel {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes treatTitle {
          0% { stroke-dasharray: 350; stroke-dashoffset: 350; }
          100% { stroke-dasharray: 350; stroke-dashoffset: 0; }
        }

        @keyframes treatSignal {
          0% { left: -160px; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        @keyframes treatECG {
          0% { stroke-dasharray: 200; stroke-dashoffset: 200; }
          45%, 100% { stroke-dasharray: 200; stroke-dashoffset: 0; }
        }

        @keyframes treatPlus {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: .25; }
          50% { transform: rotate(90deg) scale(1.15); opacity: .45; }
        }

        @keyframes treatPlusTwo {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes treatButton {
          0% { left: -45%; }
          100% { left: 125%; }
        }

        .aos-animate .treat-label-line {
          animation: treatLabel .7s ease-out both;
        }

        .aos-animate .treat-title-line {
          animation: treatTitle 1.15s ease-out .2s both;
        }

        .treat-top-signal {
          animation: treatSignal 5.5s linear infinite;
        }

        .treat-ecg {
          animation: treatECG 3.4s ease-in-out infinite;
        }

        .treat-plus {
          animation: treatPlus 5s ease-in-out infinite;
        }

        .treat-plus-two {
          animation: treatPlusTwo 4s ease-in-out infinite;
        }

        .treat-btn:hover .treat-btn-shine {
          animation: treatButton .75s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .treat-label-line,
          .treat-title-line,
          .treat-top-signal,
          .treat-ecg,
          .treat-plus,
          .treat-plus-two,
          .treat-btn-shine {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TreatmentsHero;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, CalendarDays, Cross, Scissors, ShieldPlus, Activity } from "lucide-react";

const GeneralSurgeryHero = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 40 });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[190px] top-[-160px] h-[480px] w-[480px] rounded-full bg-[#55B8E9]/10 blur-[120px]" />
        <div className="absolute -right-[170px] bottom-[-170px] h-[470px] w-[470px] rounded-full bg-[#2E91C8]/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#102D5F 1px, transparent 1px), linear-gradient(90deg, #102D5F 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
      </div>

      <div className="relative mx-auto grid min-h-[580px] max-w-[1440px] items-center gap-10 px-4 py-12 sm:min-h-[610px] sm:px-6 sm:py-14 md:grid-cols-[1.03fr_.97fr] md:gap-9 lg:min-h-[650px] lg:gap-14 lg:px-8 lg:py-[72px] xl:gap-16">
        
        {/* LEFT */}
        <div className="relative z-20 mx-auto w-full max-w-[680px] md:mx-0">
          <div data-aos="fade-up" className="mb-5 flex items-center gap-3">
            <div className="relative flex h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#E4F4FA] text-[#2E91C8]">
              <Scissors size={15} strokeWidth={1.8} />
              <span className="surgery-pulse absolute inset-[-4px] rounded-[13px] border border-[#2E91C8]/20" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              General & Advanced Surgery
            </span>

            <span className="h-px w-8 bg-gradient-to-r from-[#2E91C8]/60 to-transparent" />
          </div>

          <h1 data-aos="fade-up" data-aos-delay="70" className="max-w-[680px] text-[34px] font-bold leading-[1.1] tracking-[-1.2px] text-[#102D5F] sm:text-[40px] md:text-[43px] lg:text-[50px] xl:text-[54px]">
            Surgical Consultation &{" "}
            <span className="relative text-[#2E91C8]">
              Appropriate Operative Care
              <span className="surgery-title-line absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-[#2E91C8] via-[#69CBF2] to-transparent" />
            </span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="140" className="mt-7 max-w-[610px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]">
            Evaluation and surgical care for conditions requiring appropriate operative management.
          </p>

          <div data-aos="fade-up" data-aos-delay="210" className="mt-7">
            <Link to="/contact" className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[14px]">
              <CalendarDays size={16} strokeWidth={1.9} />
              Book Surgical Consultation
              <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* SMALL CARE STRIP */}
          <div data-aos="fade-up" data-aos-delay="280" className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#DCEAF1] pt-5">
            <div className="flex items-center gap-2">
              <ShieldPlus size={15} strokeWidth={1.8} className="text-[#2E91C8]" />
              <span className="text-[12px] font-semibold text-[#5F7183] sm:text-[13px]">Surgical Consultation</span>
            </div>

            <span className="hidden h-4 w-px bg-[#D4E5EC] sm:block" />

            <div className="flex items-center gap-2">
              <Activity size={15} strokeWidth={1.8} className="text-[#2E91C8]" />
              <span className="text-[12px] font-semibold text-[#5F7183] sm:text-[13px]">Operative Care</span>
            </div>

            <span className="hidden h-4 w-px bg-[#D4E5EC] sm:block" />

            <div className="flex items-center gap-2">
              <Cross size={15} strokeWidth={1.8} className="text-[#2E91C8]" />
              <span className="text-[12px] font-semibold text-[#5F7183] sm:text-[13px]">Hospital-Based Care</span>
            </div>
          </div>
        </div>

        {/* RIGHT - SURGICAL VISUAL */}
        <div data-aos="fade-left" data-aos-delay="100" className="relative mx-auto w-full max-w-[590px] md:ml-auto">
          
          {/* BACK SHAPE */}
          <div className="absolute -right-3 top-5 h-[94%] w-[94%] rounded-[32px] bg-[#DFF1F8] sm:-right-5" />

          <div className="group relative h-[350px] overflow-hidden rounded-[26px] border border-white shadow-[0_28px_70px_rgba(16,45,95,.16)] min-[430px]:h-[400px] sm:h-[450px] md:h-[490px] lg:h-[530px] lg:rounded-[30px]">
            <img src="/general-advance-surgery.png" alt="General and Advanced Surgery" className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/75 via-[#071B3A]/5 to-[#071B3A]/10" />

            {/* TOP TAG */}
            <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-[#071B3A]/60 px-3 py-2 backdrop-blur-md sm:left-5 sm:top-5">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#69CBF2] opacity-40" />
                <span className="relative h-[7px] w-[7px] rounded-full bg-[#69CBF2]" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-white sm:text-[10px]">
                Surgical Care
              </span>
            </div>

            {/* SURGICAL TARGET */}
            <div className="absolute right-5 top-[26%] hidden h-[105px] w-[105px] items-center justify-center sm:flex">
              <span className="surgery-ring absolute inset-0 rounded-full border border-white/25" />
              <span className="absolute inset-[14px] rounded-full border border-dashed border-[#69CBF2]/50" />
              <span className="absolute inset-[31px] rounded-full border border-white/30" />
              <span className="h-[8px] w-[8px] rounded-full bg-[#69CBF2] shadow-[0_0_16px_rgba(105,203,242,.9)]" />

              <span className="absolute left-1/2 top-[-12px] h-[25px] w-px -translate-x-1/2 bg-white/30" />
              <span className="absolute bottom-[-12px] left-1/2 h-[25px] w-px -translate-x-1/2 bg-white/30" />
              <span className="absolute left-[-12px] top-1/2 h-px w-[25px] -translate-y-1/2 bg-white/30" />
              <span className="absolute right-[-12px] top-1/2 h-px w-[25px] -translate-y-1/2 bg-white/30" />
            </div>

            {/* SCAN LINE */}
            <span className="surgery-scan pointer-events-none absolute left-0 right-0 top-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-[#69CBF2]/80 to-transparent shadow-[0_0_15px_rgba(105,203,242,.65)]" />

            {/* BOTTOM INFO */}
            <div className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-5 sm:left-5 sm:right-5">
              <div className="flex items-center gap-3 rounded-[18px] border border-white/15 bg-[#071B3A]/75 p-3.5 backdrop-blur-md sm:p-4">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[13px] bg-white text-[#2E91C8]">
                  <Scissors size={19} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[1.4px] text-[#8EDBF7]">
                    General & Advanced Surgery
                  </span>

                  <span className="mt-1 block text-[13px] font-semibold text-white sm:text-[14px]">
                    Surgical Consultation & Operative Care
                  </span>
                </div>
              </div>
            </div>

            {/* CORNER MARKERS */}
            <span className="absolute left-5 top-[82px] h-8 w-8 border-l border-t border-white/35" />
            <span className="absolute bottom-[92px] right-5 h-8 w-8 border-b border-r border-white/35" />
          </div>

          {/* FLOATING OT NODE */}
          <div className="absolute -left-3 bottom-[25%] z-30 hidden sm:block lg:-left-6">
            <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border-[5px] border-[#F7FBFD] bg-[#102D5F] text-white shadow-[0_12px_30px_rgba(16,45,95,.2)]">
              <ShieldPlus size={21} strokeWidth={1.8} />
              <span className="surgery-node-pulse absolute inset-[-5px] rounded-[22px] border border-[#2E91C8]/30" />
            </div>
          </div>

          {/* DECORATIVE DOTS */}
          <div className="absolute -bottom-5 -right-4 -z-0 hidden grid-cols-5 gap-2 lg:grid">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={index} className="h-[4px] w-[4px] rounded-full bg-[#2E91C8]/25" />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes surgeryTitleLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes surgeryScan {
          0% { top: 5%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 92%; opacity: 0; }
        }

        @keyframes surgeryPulse {
          0% { transform: scale(.85); opacity: .55; }
          100% { transform: scale(1.55); opacity: 0; }
        }

        @keyframes surgeryRing {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(90deg) scale(1.05); }
        }

        .surgery-title-line { animation: surgeryTitleLine 1.2s ease-out .5s both; }
        .surgery-scan { animation: surgeryScan 5.5s ease-in-out infinite; }
        .surgery-pulse, .surgery-node-pulse { animation: surgeryPulse 2.4s ease-out infinite; }
        .surgery-ring { animation: surgeryRing 8s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .surgery-title-line,
          .surgery-scan,
          .surgery-pulse,
          .surgery-node-pulse,
          .surgery-ring {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GeneralSurgeryHero;
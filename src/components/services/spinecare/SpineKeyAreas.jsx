import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Activity, ShieldPlus, ScanLine, Stethoscope } from "lucide-react";

const areas = [
  { no: "01", title: "Spine Injuries", icon: Activity, side: "left" },
  { no: "02", title: "Trauma-Related Spine Conditions", icon: ShieldPlus, side: "right" },
  { no: "03", title: "Back & Neck Evaluation", icon: ScanLine, side: "left" },
  { no: "04", title: "Surgical Consultation", icon: Stethoscope, side: "right" },
];

const SpineKeyAreas = () => {
  useEffect(() => {
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#2E91C8]/[0.07] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(#102D5F 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[780px] text-center">
          <div data-aos="fade-up" className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#2E91C8]" />
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">Key Areas of Care</span>
            <span className="h-px w-7 bg-[#2E91C8]" />
          </div>

          <h2 data-aos="fade-up" data-aos-delay="70" className="text-[32px] font-bold leading-[1.13] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
            Focused Care for{" "}
            <span className="text-[#2E91C8]">Spine-Related Concerns</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="130" className="mx-auto mt-5 max-w-[690px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]">
            Medical evaluation and treatment support for spine injuries and other back or neck-related conditions.
          </p>
        </div>

        {/* =====================================================
            DESKTOP SPINE TIMELINE
        ===================================================== */}
        <div className="relative mx-auto mt-14 hidden min-h-[620px] max-w-[1000px] md:block">
          {/* CENTRAL SPINE BACKGROUND */}
          <div className="absolute left-1/2 top-0 h-[570px] w-[150px] -translate-x-1/2">
            <div className="absolute left-1/2 top-0 h-full w-[70px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#E9F7FC]/30 via-[#DDF2FA]/80 to-[#E9F7FC]/30 blur-[16px]" />

            {/* CENTER LINE */}
            <div className="absolute left-1/2 top-[22px] h-[520px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#A9D6E8] to-transparent" />

            {/* MOVING SCANNER */}
            <div className="spine-flow absolute left-1/2 top-[25px] z-20 h-[55px] w-[64px] -translate-x-1/2 rounded-full bg-[#55B8E9]/20 blur-[7px]" />
            <div className="spine-flow-line absolute left-1/2 top-[25px] z-30 h-[2px] w-[78px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent shadow-[0_0_12px_rgba(46,145,200,.55)]" />

            {/* VERTEBRAE */}
            {Array.from({ length: 18 }).map((_, index) => (
              <div key={index} className="absolute left-1/2 z-10 -translate-x-1/2" style={{ top: `${26 + index * 28}px` }}>
                <div className={`vertebra relative flex h-[16px] items-center justify-center rounded-[50%] border border-[#A9D7E8] bg-white shadow-[0_3px_9px_rgba(16,45,95,.06)] ${index < 5 ? "w-[27px]" : index < 12 ? "w-[34px]" : "w-[39px]"}`}>
                  <span className="h-[3px] w-[8px] rounded-full bg-[#BCE1EF]" />
                </div>
              </div>
            ))}
          </div>

          {/* CARE AREAS */}
          {areas.map((area, index) => {
            const Icon = area.icon;
            const positions = ["top-[25px]", "top-[175px]", "top-[325px]", "top-[475px]"];

            return (
              <div key={area.title} className={`absolute left-0 right-0 ${positions[index]}`}>
                {/* CENTRAL NODE */}
                <div data-aos="zoom-in" data-aos-delay={index * 90} className="absolute left-1/2 top-[23px] z-30 flex h-[36px] w-[36px] -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#F7FBFD] bg-[#102D5F] shadow-[0_7px_20px_rgba(16,45,95,.16)]">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#69CBF2]" />
                  <span className="spine-node-pulse absolute inset-[-5px] rounded-full border border-[#2E91C8]/30" />
                </div>

                {/* CONNECTOR */}
                <div className={`absolute top-[40px] h-px w-[110px] border-t border-dashed border-[#A9D4E5] lg:w-[155px] ${area.side === "left" ? "left-[calc(50%-155px)] lg:left-[calc(50%-200px)]" : "right-[calc(50%-155px)] lg:right-[calc(50%-200px)]"}`} />

                {/* CONTENT */}
                <div data-aos={area.side === "left" ? "fade-right" : "fade-left"} data-aos-delay={100 + index * 80} className={`absolute top-0 w-[280px] lg:w-[330px] ${area.side === "left" ? "left-0 text-right" : "right-0 text-left"}`}>
                  <div className={`flex items-center gap-4 ${area.side === "left" ? "flex-row-reverse" : ""}`}>
                    <div className="group flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] border border-[#D5EAF3] bg-white text-[#2E91C8] shadow-[0_12px_35px_rgba(16,45,95,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E91C8]/40 hover:bg-[#102D5F] hover:text-white">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <div>
                      <div className={`mb-1.5 flex items-center gap-2 ${area.side === "left" ? "justify-end" : ""}`}>
                        <span className="text-[10px] font-bold tracking-[1.6px] text-[#2E91C8]">{area.no}</span>
                        <span className="h-px w-5 bg-[#B7D9E7]" />
                        <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#94A3B8]">Spine Care</span>
                      </div>

                      <h3 className="text-[15px] font-bold leading-[1.45] text-[#102D5F] lg:text-[17px]">{area.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* TOP / BOTTOM MARKERS */}
          <div className="absolute left-1/2 top-[-5px] z-20 -translate-x-1/2">
            <span className="block h-[9px] w-[9px] rounded-full bg-[#2E91C8] shadow-[0_0_0_6px_rgba(46,145,200,.10)]" />
          </div>

          <div className="absolute bottom-[48px] left-1/2 z-20 -translate-x-1/2">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#C9E4EE] bg-white">
              <span className="h-[7px] w-[7px] rounded-full bg-[#2E91C8]" />
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}
        <div className="relative mt-10 md:hidden">
          {/* SPINE */}
          <div className="absolute bottom-[32px] left-[28px] top-[20px] w-[20px]">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#BBDDEA]" />

            {Array.from({ length: 14 }).map((_, index) => (
              <span key={index} className="absolute left-1/2 h-[7px] w-[12px] -translate-x-1/2 rounded-[50%] border border-[#B9DBE8] bg-white" style={{ top: `${index * 7.2}%` }} />
            ))}

            <span className="spine-mobile-flow absolute left-1/2 top-0 h-[55px] w-[18px] -translate-x-1/2 rounded-full bg-[#55B8E9]/30 blur-[4px]" />
          </div>

          <div className="space-y-3">
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div key={area.title} data-aos="fade-up" data-aos-delay={index * 70} className="group relative flex min-h-[92px] items-center gap-4">
                  <div className="relative z-10 flex h-[57px] w-[57px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#F7FBFD] bg-[#102D5F] text-white shadow-[0_8px_24px_rgba(16,45,95,.14)] transition-all duration-300 group-hover:bg-[#2E91C8]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1 border-b border-[#DCEAF1] py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">{area.no}</span>
                      <span className="h-px w-5 bg-[#B7D9E7]" />
                      <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#94A3B8]">Spine Care</span>
                    </div>

                    <h3 className="mt-1.5 text-[14px] font-bold leading-[1.5] text-[#102D5F] sm:text-[15px]">{area.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div data-aos="fade-up" className="mx-auto mt-10 flex max-w-[720px] items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#BFDDEA]" />

          <div className="flex items-center gap-2">
            <Activity size={14} className="text-[#2E91C8]" />
            <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[1.5px] text-[#7B91A5] sm:text-[11px]">Spine • Back • Neck</span>
          </div>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#BFDDEA]" />
        </div>
      </div>

      <style>{`
        @keyframes spineFlow {
          0% { top: 3%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { top: 91%; opacity: 0; }
        }

        @keyframes spineNodePulse {
          0% { transform: scale(.85); opacity: .55; }
          100% { transform: scale(1.65); opacity: 0; }
        }

        @keyframes spineMobileFlow {
          0% { transform: translate(-50%, -50px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(-50%, 330px); opacity: 0; }
        }

        @keyframes vertebraFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(1.5px); }
        }

        .spine-flow,
        .spine-flow-line {
          animation: spineFlow 5.5s ease-in-out infinite;
        }

        .spine-node-pulse {
          animation: spineNodePulse 2.3s ease-out infinite;
        }

        .spine-mobile-flow {
          animation: spineMobileFlow 4.5s linear infinite;
        }

        .vertebra {
          animation: vertebraFloat 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .spine-flow,
          .spine-flow-line,
          .spine-node-pulse,
          .spine-mobile-flow,
          .vertebra {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SpineKeyAreas;
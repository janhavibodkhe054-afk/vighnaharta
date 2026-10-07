import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Activity, ShieldPlus, MoveUp, Stethoscope, CalendarDays, ArrowRight } from "lucide-react";

const consultPoints = [
  { no: "01", title: "Back or Neck Concerns Following Injury", icon: Activity },
  { no: "02", title: "Spine-Related Trauma", icon: ShieldPlus },
  { no: "03", title: "Persistent Back or Neck Symptoms", icon: MoveUp },
  { no: "04", title: "When Specialist Evaluation Has Been Advised", icon: Stethoscope },
];

const SpineWhenToConsult = () => {
  useEffect(() => {
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[170px] top-[10%] h-[400px] w-[400px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[-100px] h-[440px] w-[440px] rounded-full bg-[#2E91C8]/[0.07] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(#102D5F 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[780px] text-center">
          <div data-aos="fade-up" className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#2E91C8]" />
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">When to Consult</span>
            <span className="h-px w-7 bg-[#2E91C8]" />
          </div>

          <h2 data-aos="fade-up" data-aos-delay="70" className="text-[32px] font-bold leading-[1.13] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
            When to Consider a{" "}
            <span className="text-[#2E91C8]">Spine Consultation</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="130" className="mx-auto mt-5 max-w-[690px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]">
            Medical evaluation may be considered for injury-related or ongoing back, neck and spine concerns.
          </p>
        </div>

        {/* DESKTOP PATHWAY */}
        <div className="relative mx-auto mt-14 hidden max-w-[1080px] md:block">
          {/* BACK LINE */}
          <div className="absolute left-[9%] right-[9%] top-[54px] h-px bg-[#C6E2ED]" />

          {/* ANIMATED LINE */}
          <div className="consult-flow absolute left-[9%] top-[52px] z-10 h-[5px] w-[85px] rounded-full bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent shadow-[0_0_12px_rgba(46,145,200,.45)]" />

          <div className="grid grid-cols-4 gap-5 lg:gap-8">
            {consultPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} data-aos="fade-up" data-aos-delay={index * 90} className="group relative text-center">
                  {/* NODE */}
                  <div className="relative mx-auto flex h-[108px] w-[108px] items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-[#CBE4EE]" />
                    <span className="absolute inset-[9px] rounded-full border border-dashed border-[#BBDDEA] transition-transform duration-700 group-hover:rotate-45" />

                    <div className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white text-[#2E91C8] shadow-[0_12px_35px_rgba(16,45,95,.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#102D5F] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <span className="consult-pulse absolute inset-[2px] rounded-full border border-[#2E91C8]/20" />
                  </div>

                  {/* CONTENT */}
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">{item.no}</span>
                      <span className="h-px w-5 bg-[#BCDCE9]" />
                      <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#94A3B8]">Consult</span>
                    </div>

                    <h3 className="mx-auto mt-2.5 max-w-[215px] text-[14px] font-bold leading-[1.55] text-[#102D5F] lg:text-[16px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE */}
        <div className="relative mt-10 md:hidden">
          <div className="absolute bottom-[35px] left-[27px] top-[28px] w-px bg-[#C6E1EC]">
            <span className="consult-mobile-flow absolute left-[-1px] top-0 h-[60px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />
          </div>

          <div className="space-y-2">
            {consultPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} data-aos="fade-up" data-aos-delay={index * 70} className="group relative flex min-h-[90px] items-center gap-4">
                  <div className="relative z-10 flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#F7FBFD] bg-white text-[#2E91C8] shadow-[0_8px_24px_rgba(16,45,95,.10)] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1 border-b border-[#DCEAF1] py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">{item.no}</span>
                      <span className="h-px w-5 bg-[#BCDCE9]" />
                    </div>

                    <h3 className="mt-1.5 text-[14px] font-bold leading-[1.5] text-[#102D5F] sm:text-[15px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONSULTATION STRIP */}
        <div data-aos="fade-up" className="mx-auto mt-12 max-w-[900px] overflow-hidden rounded-[22px] border border-[#D7EAF2] bg-white shadow-[0_15px_45px_rgba(16,45,95,.06)]">
          <div className="grid sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div className="flex h-full items-center justify-center bg-[#EAF7FC] px-6 py-5">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#102D5F] text-white">
                <Stethoscope size={21} strokeWidth={1.7} />
              </div>
            </div>

            <div className="px-5 py-5 text-center sm:px-6 sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#2E91C8] sm:text-[11px]">Spine Evaluation</span>

              <h3 className="mt-1.5 text-[16px] font-bold text-[#102D5F] sm:text-[17px]">
                Need a Spine Consultation?
              </h3>

              <p className="mt-1.5 text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
                Book a consultation for appropriate medical evaluation of your spine, back or neck concern.
              </p>
            </div>

            <div className="px-5 pb-5 sm:px-6 sm:pb-0">
              <Link to="/contact" className="group flex min-h-[47px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#102D5F] px-5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[14px]">
                <CalendarDays size={15} strokeWidth={1.9} />
                Book Consultation
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes consultFlow {
          0% { left: 8%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: 83%; opacity: 0; }
        }

        @keyframes consultPulse {
          0% { transform: scale(.9); opacity: .45; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        @keyframes consultMobileFlow {
          0% { transform: translateY(-50px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(270px); opacity: 0; }
        }

        .consult-flow {
          animation: consultFlow 5.5s ease-in-out infinite;
        }

        .consult-pulse {
          animation: consultPulse 2.5s ease-out infinite;
        }

        .consult-mobile-flow {
          animation: consultMobileFlow 4s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .consult-flow,
          .consult-pulse,
          .consult-mobile-flow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SpineWhenToConsult;
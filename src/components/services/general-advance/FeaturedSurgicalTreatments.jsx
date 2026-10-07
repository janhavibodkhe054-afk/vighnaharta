import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, Check, Stethoscope, CalendarDays, Plus } from "lucide-react";

const FeaturedSurgicalTreatments = () => {
  useEffect(() => {
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 40 });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#06182F] py-14 sm:py-16 lg:py-[72px]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[220px] top-[-230px] h-[520px] w-[520px] rounded-full bg-[#2E91C8]/10 blur-[130px]" />
        <div className="absolute -right-[220px] bottom-[-250px] h-[520px] w-[520px] rounded-full bg-[#55B8E9]/[0.08] blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-5 border-b border-white/10 pb-8 md:grid-cols-[.9fr_1.1fr] md:items-end md:gap-12">
          <div data-aos="fade-right">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[6px] w-[6px] rotate-45 bg-[#69CBF2]" />
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#69CBF2] sm:text-[12px]">
                Featured Treatments
              </span>
            </div>

            <h2 className="text-[32px] font-bold leading-[1.12] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[46px]">
              Featured Surgical
              <span className="block text-[#69CBF2]">Treatments</span>
            </h2>
          </div>

          <p data-aos="fade-left" className="max-w-[610px] text-[15px] leading-[1.8] text-[#AFC1CF] sm:text-[16px] lg:text-[17px]">
            Surgical treatment is considered according to the patient’s condition, clinical evaluation and individual medical requirements.
          </p>
        </div>

        {/* SPLIT TREATMENT STAGE */}
        <div className="relative mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#0A2141] lg:mt-10">
          {/* CENTER DIVIDER */}
          <div className="absolute bottom-8 left-1/2 top-8 z-20 hidden w-px -translate-x-1/2 bg-white/10 lg:block">
            <span className="surgery-light absolute left-[-1px] top-0 h-[80px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#69CBF2] to-transparent shadow-[0_0_16px_rgba(105,203,242,.7)]" />
          </div>

          {/* CENTER PLUS */}
          <div className="absolute left-1/2 top-1/2 z-30 hidden h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-[#0A2141] bg-[#69CBF2] text-[#06182F] lg:flex">
            <Plus size={17} strokeWidth={2.4} />
          </div>

          <div className="grid lg:grid-cols-2">
            {/* ==================================================
                HERNIA
            ================================================== */}
            <article data-aos="fade-right" className="group relative overflow-hidden border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-9">
              <span className="pointer-events-none absolute -right-2 -top-7 text-[125px] font-black leading-none tracking-[-8px] text-white/[0.025]">
                01
              </span>

              <div className="absolute inset-0 bg-gradient-to-br from-[#2E91C8]/0 to-[#2E91C8]/0 transition-all duration-500 group-hover:from-[#2E91C8]/[0.08] group-hover:to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#69CBF2]/20 bg-[#69CBF2]/10 text-[#69CBF2]">
                      <span className="text-[11px] font-bold">01</span>
                    </span>

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[1.6px] text-[#69CBF2] sm:text-[11px]">
                        Surgical Treatment
                      </span>
                      <span className="mt-0.5 block text-[10px] text-white/35">
                        General Surgery
                      </span>
                    </div>
                  </div>

                  <Stethoscope size={20} strokeWidth={1.5} className="text-white/25" />
                </div>

                <h3 className="mt-7 text-[24px] font-bold tracking-[-0.5px] text-white sm:text-[27px]">
                  Hernia Surgery
                </h3>

                <p className="mt-3 max-w-[470px] text-[14px] leading-[1.75] text-[#B3C5D3] sm:text-[15px]">
                  Surgical evaluation and treatment for patients diagnosed with hernia where surgery is clinically indicated.
                </p>

                <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

                <div className="space-y-3">
                  {[
                    "Surgical consultation and evaluation",
                    "Assessment based on individual condition",
                    "Appropriate surgical treatment when indicated",
                    "Follow-up care as advised",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-[2px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#69CBF2]/10 text-[#69CBF2]">
                        <Check size={10} strokeWidth={2.5} />
                      </span>

                      <span className="text-[13px] leading-[1.6] text-[#CAD7E0] sm:text-[14px]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/services/treatments/hernia-surgery" className="group/link mt-7 inline-flex items-center gap-3 text-[13px] font-bold text-white sm:text-[14px]">
                  View Treatment

                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#69CBF2] text-[#06182F] transition-all duration-300 group-hover/link:rotate-45 group-hover/link:bg-white">
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </span>
                </Link>
              </div>
            </article>

            {/* ==================================================
                APPENDIX
            ================================================== */}
            <article data-aos="fade-left" className="group relative overflow-hidden p-5 sm:p-7 lg:p-9">
              <span className="pointer-events-none absolute -right-2 -top-7 text-[125px] font-black leading-none tracking-[-8px] text-white/[0.025]">
                02
              </span>

              <div className="absolute inset-0 bg-gradient-to-bl from-[#2E91C8]/0 to-[#2E91C8]/0 transition-all duration-500 group-hover:from-[#2E91C8]/[0.08] group-hover:to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#69CBF2]/20 bg-[#69CBF2]/10 text-[#69CBF2]">
                      <span className="text-[11px] font-bold">02</span>
                    </span>

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[1.6px] text-[#69CBF2] sm:text-[11px]">
                        Appendix-Related Care
                      </span>
                      <span className="mt-0.5 block text-[10px] text-white/35">
                        General Surgery
                      </span>
                    </div>
                  </div>

                  <Stethoscope size={20} strokeWidth={1.5} className="text-white/25" />
                </div>

                <h3 className="mt-7 text-[24px] font-bold tracking-[-0.5px] text-white sm:text-[27px]">
                  Appendix Surgery
                </h3>

                <p className="mt-3 max-w-[470px] text-[14px] leading-[1.75] text-[#B3C5D3] sm:text-[15px]">
                  Evaluation and surgical care for appendix-related conditions where appropriate.
                </p>

                <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

                <div className="space-y-3">
                  {[
                    "Medical and surgical evaluation",
                    "Assessment of appendix-related conditions",
                    "Appropriate surgical care when indicated",
                    "Follow-up care as advised",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-[2px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#69CBF2]/10 text-[#69CBF2]">
                        <Check size={10} strokeWidth={2.5} />
                      </span>

                      <span className="text-[13px] leading-[1.6] text-[#CAD7E0] sm:text-[14px]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                
              </div>
            </article>
          </div>
        </div>

        {/* BOTTOM CONSULTATION BAR */}
        <div data-aos="fade-up" className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#69CBF2] opacity-30" />
                <span className="relative h-[7px] w-[7px] rounded-full bg-[#69CBF2]" />
              </span>

              <span className="text-[12px] font-bold text-white">
                Surgical Consultation
              </span>
            </div>

            <p className="mt-1 max-w-[680px] text-[13px] leading-[1.6] text-white/50 sm:text-[14px]">
              The appropriate treatment approach is determined after clinical evaluation and according to individual medical requirements.
            </p>
          </div>

          <Link to="/contact" className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-white px-5 text-[13px] font-bold text-[#102D5F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#69CBF2]">
            <CalendarDays size={15} strokeWidth={1.8} />
            Book Consultation
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes surgeryLight {
          0% { top: -80px; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .surgery-light {
          animation: surgeryLight 4.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .surgery-light {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedSurgicalTreatments;
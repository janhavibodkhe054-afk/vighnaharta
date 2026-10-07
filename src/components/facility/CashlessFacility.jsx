import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  Headphones,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    no: "01",
    title: "Insurance / TPA",
    text: "Applicable arrangements",
    icon: Building2,
  },
  {
    no: "02",
    title: "Eligibility",
    text: "Patient eligibility",
    icon: ShieldCheck,
  },
  {
    no: "03",
    title: "Authorization",
    text: "Subject to approval",
    icon: FileCheck2,
  },
  {
    no: "04",
    title: "Hospital Support",
    text: "Process information",
    icon: Headphones,
  },
];

const CashlessFacility = () => {
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
    <section className="relative isolate overflow-hidden bg-[#06182F] py-12 sm:py-14 md:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_0%,rgba(46,145,200,.16),transparent_36%),linear-gradient(180deg,#071B3A_0%,#06182F_100%)]" />
      <div className="cash-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.28]" />

      <div className="cash-orb absolute -left-[170px] top-[15%] -z-10 h-[360px] w-[360px] rounded-full bg-[#2E91C8]/10 blur-[110px]" />
      <div className="cash-orb-two absolute -right-[160px] bottom-[-100px] -z-10 h-[380px] w-[380px] rounded-full bg-[#69CBF2]/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            CENTER HEADER
        ===================================================== */}
        <div className="mx-auto max-w-[930px] text-center">
          <div className="mb-4 flex items-center justify-center gap-3" data-aos="fade-up">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#69CBF2]/50 sm:w-12" />

            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#69CBF2]/20 bg-[#69CBF2]/10 text-[#69CBF2]">
              <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={1.7} />
              <span className="cash-icon-ring absolute inset-[-5px] rounded-full border border-[#69CBF2]/15" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#69CBF2] sm:text-[12px]">
              Insurance Support
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#69CBF2]/50 sm:w-12" />
          </div>

          <h2 className="text-[32px] font-bold leading-[1.06] tracking-[-.8px] text-white sm:text-[38px] md:text-[42px] lg:text-[46px]" data-aos="fade-up" data-aos-delay="60">
            Cashless Treatment
            <span className="text-[#69CBF2]"> Support</span>
          </h2>

          <div className="mx-auto mt-5 max-w-[850px] space-y-2.5 text-[16px] leading-[1.8] text-[#B7C7D9] sm:text-[17px] lg:text-[18px]" data-aos="fade-up" data-aos-delay="110">
            <p>
              Cashless treatment support is available for eligible patients
              under applicable insurance and TPA arrangements.
            </p>

            <p>
              Our hospital team can assist patients and families with relevant
              information regarding the applicable cashless treatment process.
            </p>
          </div>
        </div>

        {/* =====================================================
            APPROVAL JOURNEY
        ===================================================== */}
        <div className="relative mx-auto mt-10 max-w-[1200px] sm:mt-12 lg:mt-14" data-aos="fade-up">

          {/* DESKTOP FLOW */}
          <div className="relative hidden md:block">
            {/* BASE LINE */}
            <div className="absolute left-[10%] right-[10%] top-[51px] h-px bg-white/10" />

            <div className="absolute left-[10%] right-[10%] top-[49px] h-[5px] overflow-hidden">
              <span className="cash-flow absolute left-0 top-0 h-[3px] w-[150px] rounded-full bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent" />
            </div>

            <div className="grid grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="group relative text-center" key={step.no} data-aos="fade-up" data-aos-delay={index * 90}>
                    {/* NODE */}
                    <div className="relative z-10 mx-auto flex h-[102px] w-[102px] items-center justify-center rounded-full border border-white/10 bg-[#071B3A]">
                      <span className="cash-node relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#69CBF2]/20 bg-[#0B274C] text-[#69CBF2] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2E91C8] group-hover:text-white">
                        <Icon className="h-[25px] w-[25px]" strokeWidth={1.5} />

                        <span className="cash-node-ring absolute inset-[-6px] rounded-full border border-[#69CBF2]/15" />
                      </span>

                      <span className="absolute -right-1 top-0 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/10 bg-[#102D5F] px-1.5 text-[10px] font-bold text-[#69CBF2]">
                        {step.no}
                      </span>
                    </div>

                    {/* TEXT */}
                    <div className="mx-auto mt-5 max-w-[220px]">
                      <h3 className="text-[15px] font-bold text-white lg:text-[16px]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 text-[14px] leading-[1.7] text-[#8FA5BC] sm:text-[15px]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE FLOW */}
          <div className="relative md:hidden">
            <div className="absolute bottom-[32px] left-[25px] top-[32px] w-px bg-white/10" />

            <span className="cash-mobile-flow absolute left-[24px] top-0 h-[80px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#69CBF2] to-transparent" />

            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="relative flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-white/[0.035] p-3.5 backdrop-blur-sm min-[390px]:p-4" key={step.no} data-aos="fade-left" data-aos-delay={index * 70}>
                    <span className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#06182F] bg-[#0B274C] text-[#69CBF2]">
                      <Icon className="h-[20px] w-[20px]" strokeWidth={1.6} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold uppercase tracking-[1.3px] text-[#69CBF2] sm:text-[12px]">
                        Step {step.no}
                      </span>

                      <h3 className="mt-0.5 text-[15px] font-bold text-white sm:text-[16px]">
                        {step.title}
                      </h3>

                      <p className="mt-0.5 text-[14px] leading-[1.7] text-[#94A8BD] sm:text-[15px]">
                        {step.text}
                      </p>
                    </div>

                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2E91C8]/60" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            IMPORTANT NOTE
        ===================================================== */}
        <div className="mx-auto mt-10 max-w-[1180px] sm:mt-12" data-aos="fade-up">
          <div className="cash-note relative overflow-hidden rounded-[22px] border border-[#69CBF2]/15 bg-[#0A2343]/70 px-4 py-5 backdrop-blur-md sm:px-6 sm:py-6 lg:px-8">
            <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-[#69CBF2] via-[#2E91C8] to-transparent" />

            <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#69CBF2]/20 bg-[#69CBF2]/10 text-[#69CBF2]">
                <FileCheck2 className="h-[21px] w-[21px]" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[1.6px] text-[#69CBF2] sm:text-[12px]">
                  Important Note
                </span>

                <p className="mt-2 text-[14px] font-medium leading-[1.7] text-[#D3DFEA] sm:text-[15px]">
                  Cashless treatment is subject to policy coverage, insurer/TPA
                  terms, eligibility and authorization. Insurance/TPA
                  availability should be confirmed with the hospital before
                  treatment.
                </p>
              </div>

              <BadgeCheck className="hidden h-10 w-10 text-[#69CBF2]/20 md:block" />
            </div>

            <span className="cash-note-light pointer-events-none absolute -top-[50%] h-[200%] w-[90px] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          </div>
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}
        <div className="mx-auto mt-6 max-w-[1180px]" data-aos="fade-up">
          <div className="flex flex-col items-start justify-between gap-5 rounded-[22px] border border-white/[0.07] bg-white/[0.035] p-4 sm:flex-row sm:items-center sm:p-5 lg:px-7">
            <div className="flex items-center gap-4">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2E91C8] text-white shadow-[0_0_30px_rgba(46,145,200,.22)]">
                <PhoneCall className="h-[19px] w-[19px]" />
                <span className="cash-phone-ring absolute inset-[-5px] rounded-full border border-[#69CBF2]/20" />
              </span>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#69CBF2] sm:text-[12px]">
                  Need Information?
                </span>

                <p className="mt-1 text-[14px] font-semibold text-white sm:text-[15px] lg:text-[16px]">
                  Contact our hospital team for cashless treatment information.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="cash-cta group relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-[14px] bg-[#2E91C8] px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(46,145,200,.18)] sm:w-auto sm:text-[14px]"
            >
              <span className="cash-cta-fill absolute inset-y-0 left-0 bg-[#69CBF2]" />

              <span className="relative z-10">
                Contact Hospital
              </span>

              <ArrowRight className="relative z-10 h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .cash-grid{
          background-image:
            linear-gradient(rgba(105,203,242,.045) 1px,transparent 1px),
            linear-gradient(90deg,rgba(105,203,242,.045) 1px,transparent 1px);
          background-size:46px 46px;
          mask-image:linear-gradient(
            to bottom,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }

        .cash-icon-ring,
        .cash-node-ring,
        .cash-phone-ring{
          animation:cashPulse 2.8s ease-out infinite;
        }

        .cash-flow{
          animation:cashFlow 5s linear infinite;
        }

        .cash-mobile-flow{
          animation:cashMobileFlow 4.5s linear infinite;
        }

        .cash-note-light{
          left:-15%;
          animation:cashNoteLight 6s ease-in-out infinite;
        }

        .cash-cta-fill{
          width:0;
          transition:width .45s cubic-bezier(.22,1,.36,1);
        }

        .cash-cta:hover .cash-cta-fill{
          width:100%;
        }

        .cash-orb{
          animation:cashOrb 9s ease-in-out infinite;
        }

        .cash-orb-two{
          animation:cashOrb 11s 2s ease-in-out infinite reverse;
        }

        @keyframes cashPulse{
          0%{
            transform:scale(.75);
            opacity:.6;
          }

          100%{
            transform:scale(1.65);
            opacity:0;
          }
        }

        @keyframes cashFlow{
          0%{
            left:0;
            opacity:0;
          }

          12%{
            opacity:1;
          }

          88%{
            opacity:1;
          }

          100%{
            left:calc(100% - 150px);
            opacity:0;
          }
        }

        @keyframes cashMobileFlow{
          0%{
            transform:translateY(-70px);
            opacity:0;
          }

          12%{
            opacity:1;
          }

          88%{
            opacity:1;
          }

          100%{
            transform:translateY(390px);
            opacity:0;
          }
        }

        @keyframes cashNoteLight{
          0%{
            left:-15%;
            opacity:0;
          }

          15%{
            opacity:1;
          }

          80%{
            opacity:1;
          }

          100%{
            left:110%;
            opacity:0;
          }
        }

        @keyframes cashOrb{
          0%,100%{
            transform:translate3d(0,0,0);
          }

          50%{
            transform:translate3d(25px,-20px,0);
          }
        }

        @media(prefers-reduced-motion:reduce){
          .cash-icon-ring,
          .cash-node-ring,
          .cash-phone-ring,
          .cash-flow,
          .cash-mobile-flow,
          .cash-note-light,
          .cash-orb,
          .cash-orb-two{
            animation:none!important;
          }
        }
      `}</style>
    </section>
  );
};

export default CashlessFacility;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  Check,
  Cross,
  HeartPulse,
  PhoneCall,
  Scissors,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const points = [
  {
    title: "Dedicated surgical infrastructure",
    icon: Scissors,
  },
  {
    title: "Supports applicable surgical procedures",
    icon: Stethoscope,
  },
  {
    title: "Integrated hospital-based care",
    icon: ShieldCheck,
  },
  {
    title: "Surgical support within the hospital",
    icon: HeartPulse,
  },
];

const OperationTheatre = () => {
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
    <section className="relative isolate overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(135deg,#FFFFFF_0%,#F7FBFD_55%,#EEF8FC_100%)]" />

      <div className="ot-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.22]" />

      <div className="absolute -left-[170px] top-[10%] -z-10 h-[360px] w-[360px] rounded-full bg-[#69CBF2]/10 blur-[110px]" />

      <div className="absolute -right-[160px] bottom-[5%] -z-10 h-[360px] w-[360px] rounded-full bg-[#2E91C8]/10 blur-[110px]" />

      <Cross className="ot-cross pointer-events-none absolute left-[5%] top-[14%] h-7 w-7 text-[#2E91C8]/10" strokeWidth={1.3} />

      <div className="mx-auto grid w-full max-w-[1380px] items-center gap-10 px-3 min-[360px]:px-4 sm:px-6 md:grid-cols-[.95fr_1.05fr] md:gap-10 lg:gap-16 lg:px-8">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="relative order-2 md:order-1">

          {/* LABEL */}
          <div className="mb-4 flex items-center gap-2.5" data-aos="fade-right">

            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#2E91C8]/15 bg-[#EAF7FC] text-[#2E91C8]">
              <Scissors className="h-[18px] w-[18px]" strokeWidth={1.6} />
              <span className="ot-icon-ring absolute inset-[-4px] rounded-full border border-[#2E91C8]/10" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              Surgical Infrastructure
            </span>

            <span className="h-px w-10 bg-gradient-to-r from-[#2E91C8]/50 to-transparent" />

          </div>

          {/* HEADING */}
          <div data-aos="fade-up" data-aos-delay="60">

            <h2 className="text-[32px] font-bold leading-[1.05] tracking-[-.8px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
              Operation Theatre
            </h2>

            <h3 className="mt-3 max-w-[590px] text-[16px] font-semibold leading-[1.5] text-[#2E91C8] sm:text-[17px] lg:text-[19px]">
              Infrastructure Supporting Surgical Care
            </h3>

          </div>

          {/* DESCRIPTION */}
          <div className="mt-5 max-w-[620px] space-y-3 text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]" data-aos="fade-up" data-aos-delay="110">

            <p>
              The hospital’s Operation Theatre provides dedicated surgical
              infrastructure for applicable procedures performed at
              Vighnaharta Hospital.
            </p>

            <p>
              It supports the hospital’s surgical departments and helps provide
              coordinated care from evaluation through procedure and recovery.
            </p>

          </div>

          {/* =====================================================
              KEY POINTS
          ===================================================== */}
          <div className="relative mt-7" data-aos="fade-up" data-aos-delay="160">

            {/* TOP LINE */}
            <div className="absolute left-0 right-0 top-[20px] hidden h-px bg-[#D9EAF2] min-[500px]:block" />

            <div className="ot-progress absolute left-0 top-[19px] hidden h-[3px] rounded-full bg-gradient-to-r from-[#2E91C8] via-[#69CBF2] to-transparent min-[500px]:block" />

            <div className="grid gap-3 min-[500px]:grid-cols-2">

              {points.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="ot-point group relative flex items-center gap-3 rounded-[16px] border border-[#102D5F]/[0.07] bg-white px-3.5 py-3.5 shadow-[0_8px_25px_rgba(16,45,95,.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E91C8]/20 hover:shadow-[0_14px_35px_rgba(16,45,95,.08)]"
                  >

                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white">

                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />

                    </span>

                    <span className="text-[14px] font-semibold leading-[1.5] text-[#334155] sm:text-[15px] lg:text-[16px]">
                      {point.title}
                    </span>

                    <span className="absolute right-3 top-2 text-[22px] font-black leading-none text-[#102D5F]/[0.035]">
                      0{index + 1}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

          {/* CTA */}
          <div className="mt-8" data-aos="fade-up" data-aos-delay="210">

            <a
              href="tel:+917757004175"
              className="ot-cta group relative inline-flex min-h-[48px] overflow-hidden rounded-full bg-[#102D5F] text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,.16)] sm:min-h-[50px] sm:text-[14px]"
            >

              <span className="relative z-10 flex items-center gap-2.5 px-5 sm:px-6">
                <PhoneCall className="h-4 w-4 text-[#69CBF2]" />
                Contact Hospital
              </span>

              <span className="relative z-10 flex w-[48px] items-center justify-center bg-[#2E91C8] sm:w-[52px]">
                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
              </span>

              <span className="ot-cta-fill pointer-events-none absolute bottom-0 left-0 top-0 bg-[#0A3763]" />

            </a>

          </div>

        </div>

        {/* =====================================================
            RIGHT IMAGE
        ===================================================== */}
        <div className="relative order-1 mx-auto w-full max-w-[650px] md:order-2 md:mx-0" data-aos="fade-left">

          {/* LARGE BACK NUMBER */}
          <span className="pointer-events-none absolute -right-1 -top-7 z-0 text-[70px] font-black leading-none text-[#102D5F]/[0.045] sm:text-[90px] lg:-right-5 lg:text-[115px]">
            04
          </span>

          {/* OUTER SURGICAL FRAME */}
          <div className="relative z-10 rounded-[26px] border border-[#102D5F]/[0.08] bg-white p-2 shadow-[0_20px_60px_rgba(16,45,95,.10)] sm:rounded-[32px] sm:p-3">

            {/* TOP STATUS BAR */}
            <div className="flex items-center justify-between px-2 pb-2 pt-1 sm:px-3 sm:pb-3">

              <div className="flex items-center gap-2">

                <span className="relative h-2.5 w-2.5 rounded-full bg-[#2E91C8]">
                  <span className="ot-status-ring absolute inset-[-4px] rounded-full border border-[#2E91C8]/25" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#102D5F] sm:text-[12px]">
                  Surgical Care
                </span>

              </div>

              <div className="flex items-center gap-1.5">

                <span className="h-1.5 w-1.5 rounded-full bg-[#D7EAF3]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#A9D9EC]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#2E91C8]" />

              </div>

            </div>

            {/* IMAGE */}
            <div className="ot-image-wrap group relative h-[280px] overflow-hidden rounded-[20px] bg-[#DCEAF1] min-[360px]:h-[300px] min-[390px]:h-[325px] sm:h-[390px] md:h-[410px] lg:h-[445px] sm:rounded-[25px]">

              <img
                src="/ot.png"
                alt="Operation Theatre at Vighnaharta Hospital"
                className="ot-image h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/70 via-transparent to-transparent" />

              {/* SCANNING BEAM */}
              <span className="ot-scanner pointer-events-none absolute bottom-0 top-0 w-[100px] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* CORNERS */}
              <span className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-white/60" />
              <span className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-white/60" />
              <span className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-white/60" />
              <span className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-white/60" />

              {/* IMAGE BOTTOM INFO */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">

                <div>

                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-[1.6px] text-[#69CBF2] sm:text-[12px]">
                    Operation Theatre
                  </span>

                  <span className="text-[16px] font-semibold text-white sm:text-[17px]">
                    Surgical Infrastructure
                  </span>

                </div>

                <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md min-[390px]:flex">
                  <Scissors className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </span>

              </div>

            </div>
          </div>

          {/* =====================================================
              FLOATING STATUS CARD
          ===================================================== */}
          <div className="ot-floating-card absolute -bottom-5 left-2 z-30 flex items-center gap-3 rounded-[16px] border border-[#102D5F]/[0.06] bg-white/95 px-3.5 py-3 shadow-[0_14px_40px_rgba(16,45,95,.14)] backdrop-blur-xl min-[390px]:left-4 sm:-left-5 sm:bottom-8 sm:px-4">

            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#EAF7FC] text-[#2E91C8]">

              <Check className="h-[18px] w-[18px]" strokeWidth={2} />

              <span className="ot-check-ring absolute inset-0 rounded-[11px] border border-[#2E91C8]/25" />

            </span>

            <div>

              <span className="block text-[11px] font-bold uppercase tracking-[1px] text-[#2E91C8] sm:text-[12px]">
                Hospital Based
              </span>

              <span className="mt-0.5 block text-[13px] font-semibold text-[#102D5F] sm:text-[14px]">
                Surgical Support
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          CSS
      ===================================================== */}
      <style>{`
        .ot-grid{
          background-image:
            linear-gradient(rgba(46,145,200,.055) 1px,transparent 1px),
            linear-gradient(90deg,rgba(46,145,200,.055) 1px,transparent 1px);
          background-size:38px 38px;
          mask-image:linear-gradient(to right,transparent,black 35%,black 80%,transparent);
        }

        .ot-image{
          transform:scale(1.02);
          transition:transform 1s cubic-bezier(.22,1,.36,1);
        }

        .ot-image-wrap:hover .ot-image{
          transform:scale(1.075);
        }

        .ot-scanner{
          left:-130px;
          animation:otScanner 5s ease-in-out infinite;
        }

        .ot-status-ring,
        .ot-check-ring{
          animation:otPulse 2.5s ease-out infinite;
        }

        .ot-floating-card{
          animation:otFloat 4.5s ease-in-out infinite;
        }

        .ot-icon-ring{
          animation:otIconRing 3s ease-out infinite;
        }

        .ot-cross{
          animation:otCross 6s ease-in-out infinite;
        }

        .ot-progress{
          width:0;
          animation:otProgress 4s ease-in-out infinite;
        }

        .ot-cta-fill{
          width:0;
          transition:width .45s cubic-bezier(.22,1,.36,1);
        }

        .ot-cta:hover .ot-cta-fill{
          width:100%;
        }

        @keyframes otScanner{
          0%{
            left:-130px;
            opacity:0;
          }

          15%{
            opacity:1;
          }

          75%{
            opacity:1;
          }

          100%{
            left:120%;
            opacity:0;
          }
        }

        @keyframes otPulse{
          0%{
            transform:scale(.8);
            opacity:.6;
          }

          100%{
            transform:scale(1.55);
            opacity:0;
          }
        }

        @keyframes otFloat{
          0%,100%{
            transform:translateY(0);
          }

          50%{
            transform:translateY(-7px);
          }
        }

        @keyframes otIconRing{
          0%{
            transform:scale(.85);
            opacity:.5;
          }

          100%{
            transform:scale(1.5);
            opacity:0;
          }
        }

        @keyframes otCross{
          0%,100%{
            transform:translateY(0) rotate(0deg);
          }

          50%{
            transform:translateY(-10px) rotate(15deg);
          }
        }

        @keyframes otProgress{
          0%{
            width:0;
            opacity:0;
          }

          15%{
            opacity:1;
          }

          70%{
            width:100%;
            opacity:1;
          }

          100%{
            width:100%;
            opacity:0;
          }
        }

        @media(max-width:767px){
          .ot-grid{
            mask-image:linear-gradient(to bottom,black,transparent 70%);
          }
        }

        @media(max-width:359px){
          .ot-floating-card{
            max-width:185px;
          }
        }

        @media(prefers-reduced-motion:reduce){
          .ot-scanner,
          .ot-status-ring,
          .ot-check-ring,
          .ot-floating-card,
          .ot-icon-ring,
          .ot-cross,
          .ot-progress{
            animation:none!important;
          }

          .ot-image{
            transform:none!important;
          }
        }
      `}</style>

    </section>
  );
};

export default OperationTheatre;
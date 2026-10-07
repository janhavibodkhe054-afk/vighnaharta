import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Activity,
  ArrowRight,
  Eye,
  HeartPulse,
  PhoneCall,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";

const points = [
  { title: "Critical care support", icon: HeartPulse },
  { title: "Close patient observation", icon: Eye },
  { title: "Support during medical emergencies", icon: Activity },
  { title: "Integrated with hospital care", icon: ShieldPlus },
];

const ICUFacility = () => {
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
    <section className="relative isolate overflow-hidden bg-[#F7FBFD] py-12 sm:py-14 md:py-16 lg:py-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_15%_50%,rgba(46,145,200,.09),transparent_28%),linear-gradient(180deg,#F7FBFD_0%,#FFFFFF_100%)]" />

      <div className="icu-dots pointer-events-none absolute inset-0 -z-20 opacity-[0.2]" />

      <span className="icu-plus pointer-events-none absolute right-[5%] top-[15%] text-[38px] font-light text-[#2E91C8]/10">
        +
      </span>

      <div className="mx-auto grid w-full max-w-[1380px] items-center gap-8 px-3 min-[360px]:px-4 sm:px-6 md:grid-cols-[1.05fr_.95fr] md:gap-8 lg:gap-14 lg:px-8">

        {/* =====================================================
            IMAGE SIDE
        ===================================================== */}
        <div className="relative mx-auto w-full max-w-[650px] md:mx-0" data-aos="fade-right">

          {/* SECTION NUMBER */}
          <span className="pointer-events-none absolute -top-5 left-1 z-20 text-[55px] font-black leading-none text-[#102D5F]/[0.045] sm:-top-7 sm:text-[80px] lg:text-[105px]">
            03
          </span>

          {/* BACK SHAPE */}
          <div className="absolute -bottom-3 -left-3 h-[82%] w-[85%] rounded-[24px] bg-[#102D5F] sm:-bottom-4 sm:-left-4 sm:rounded-[30px]" />

          {/* IMAGE */}
          <div className="icu-image-wrap group relative h-[270px] overflow-hidden rounded-[22px] bg-[#DDEBF2] shadow-[0_22px_55px_rgba(16,45,95,.15)] min-[360px]:h-[290px] min-[390px]:h-[310px] sm:h-[370px] sm:rounded-[28px] md:h-[390px] lg:h-[430px]">

            <img
              src="/icu.png"
              alt="ICU Facility at Vighnaharta Hospital"
              className="icu-image h-full w-full object-cover object-center"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#06182F]/45 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#06182F]/75 to-transparent" />

            {/* SCANNER */}
            <span className="icu-scan pointer-events-none absolute left-[5%] right-[5%] top-0 h-px bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent shadow-[0_0_15px_rgba(105,203,242,.9)]" />

            {/* FOCUS CORNERS */}
            <span className="absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-white/60" />
            <span className="absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-white/60" />
            <span className="absolute bottom-4 left-4 h-7 w-7 border-b-2 border-l-2 border-white/60" />
            <span className="absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-white/60" />

            {/* IMAGE LABEL */}
            <div className="absolute bottom-5 left-5 z-10 sm:bottom-6 sm:left-6">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-[1.7px] text-[#69CBF2] sm:text-[11px]">
                Critical Care Support
              </span>

              <span className="text-[15px] font-semibold text-white sm:text-[16px]">
                Vighnaharta Hospital
              </span>
            </div>
          </div>

          {/* =====================================================
              FLOATING ICU MONITOR
          ===================================================== */}
          <div className="monitor-card absolute -bottom-5 right-2 z-30 w-[165px] rounded-[16px] border border-white/70 bg-white/95 p-3 shadow-[0_15px_40px_rgba(16,45,95,.16)] backdrop-blur-xl min-[390px]:right-4 min-[390px]:w-[180px] sm:-right-4 sm:bottom-6 sm:w-[205px] lg:-right-6">

            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#EAF7FC] text-[#2E91C8]">
                  <Activity className="h-4 w-4" />

                  <span className="monitor-ring absolute inset-0 rounded-[9px] border border-[#2E91C8]/25" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[.8px] text-[#102D5F] sm:text-[10px]">
                  Patient Support
                </span>
              </div>

              <span className="status-dot h-2 w-2 shrink-0 rounded-full bg-[#2E91C8]" />
            </div>

            {/* ECG */}
            <div className="relative h-[30px] overflow-hidden">
              <svg
                viewBox="0 0 180 35"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  className="ecg-line"
                  d="M0 18 H35 L42 18 L48 8 L56 29 L64 4 L72 18 H105 L111 18 L116 11 L122 24 L129 8 L136 18 H180"
                  stroke="#2E91C8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-1 flex items-center justify-between gap-2">
              <span className="text-[9px] uppercase tracking-[.8px] text-[#94A3B8]">
                ICU Facility
              </span>

              <span className="text-[9px] font-bold text-[#2E91C8] sm:text-[10px]">
                Critical Care
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTENT SIDE
        ===================================================== */}
        <div className="relative pt-6 sm:pt-7 md:pt-0">

          {/* LABEL */}
          <div className="mb-3 flex items-center gap-2.5" data-aos="fade-left">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#EAF7FC] text-[#2E91C8]">
              <Stethoscope className="h-4 w-4" strokeWidth={1.6} />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[11px]">
              Critical Care
            </span>

            <span className="h-px w-9 bg-gradient-to-r from-[#2E91C8]/50 to-transparent" />
          </div>

          {/* HEADING */}
          <div data-aos="fade-up" data-aos-delay="60">
            <h2 className="text-[30px] font-bold leading-[1.05] tracking-[-.8px] text-[#102D5F] sm:text-[36px] md:text-[40px] lg:text-[44px]">
              ICU Facility
            </h2>

            <h3 className="mt-2.5 max-w-[550px] text-[15px] font-semibold leading-[1.5] text-[#2E91C8] sm:text-[16px] lg:text-[18px]">
              Support for Patients Requiring Critical Medical Attention
            </h3>
          </div>

          {/* MAIN DESCRIPTION */}
          <div className="mt-5 max-w-[590px] space-y-3 text-[14px] leading-[1.8] text-[#64748B] sm:text-[15px] lg:text-[16px]" data-aos="fade-up" data-aos-delay="110">
            <p>
              Vighnaharta Hospital has an ICU facility to support patients who
              require closer medical observation and critical care during
              treatment.
            </p>

            <p>
              The facility forms an important part of the hospital’s emergency
              and inpatient care support.
            </p>
          </div>

          {/* =====================================================
              KEY POINTS
          ===================================================== */}
          <div className="relative mt-6 border-l border-[#D8EAF2] pl-5 sm:mt-7 sm:pl-6" data-aos="fade-up" data-aos-delay="160">

            <span className="point-flow pointer-events-none absolute left-[-2px] top-0 h-[50px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />

            <div className="grid gap-x-5 gap-y-4 min-[430px]:grid-cols-2">
              {points.map((point) => {
                const Icon = point.icon;

                return (
                  <div key={point.title} className="icu-point group flex items-center gap-3">

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white text-[#2E91C8] shadow-[0_5px_18px_rgba(16,45,95,.08)] ring-1 ring-[#102D5F]/[0.05] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#102D5F] group-hover:text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>

                    <span className="text-[13px] font-semibold leading-[1.5] text-[#334155] sm:text-[14px]">
                      {point.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}
          <div className="mt-7 flex flex-wrap items-center gap-3" data-aos="fade-up" data-aos-delay="210">

            <a
              href="tel:+919766999474"
              className="icu-cta group relative flex min-h-[46px] overflow-hidden rounded-full bg-[#102D5F] text-[12px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,.16)] sm:min-h-[48px] sm:text-[13px]"
            >
              <span className="relative z-10 flex items-center gap-2.5 px-4 sm:px-5">
                <PhoneCall className="h-4 w-4 text-[#69CBF2]" />
                Need Emergency Assistance?
              </span>

              <span className="relative z-10 flex w-[46px] items-center justify-center bg-[#2E91C8] sm:w-[48px]">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>

              <span className="cta-fill pointer-events-none absolute bottom-0 left-0 top-0 bg-[#0A3763]" />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`
        .icu-dots{
          background-image:radial-gradient(rgba(46,145,200,.17) 1px,transparent 1px);
          background-size:28px 28px;
          mask-image:linear-gradient(to right,black,transparent 72%);
        }

        .icu-image-wrap{
          isolation:isolate;
        }

        .icu-image{
          transform:scale(1.02);
          transition:transform 1.1s cubic-bezier(.22,1,.36,1);
        }

        .icu-image-wrap:hover .icu-image{
          transform:scale(1.075);
        }

        .icu-scan{
          animation:icuScan 4.5s linear infinite;
        }

        .monitor-card{
          animation:monitorFloat 4.5s ease-in-out infinite;
        }

        .monitor-ring{
          animation:monitorPulse 2.4s ease-out infinite;
        }

        .status-dot{
          animation:statusPulse 1.8s ease-in-out infinite;
        }

        .ecg-line{
          stroke-dasharray:280;
          stroke-dashoffset:280;
          animation:ecgDraw 3s linear infinite;
        }

        .point-flow{
          animation:pointFlow 3.5s linear infinite;
        }

        .icu-plus{
          animation:plusFloat 5s ease-in-out infinite;
        }

        .cta-fill{
          width:0;
          transition:width .45s cubic-bezier(.22,1,.36,1);
        }

        .icu-cta:hover .cta-fill{
          width:100%;
        }

        @keyframes icuScan{
          0%{
            top:3%;
            opacity:0;
          }

          12%{
            opacity:1;
          }

          88%{
            opacity:1;
          }

          100%{
            top:97%;
            opacity:0;
          }
        }

        @keyframes monitorFloat{
          0%,100%{
            transform:translateY(0);
          }

          50%{
            transform:translateY(-7px);
          }
        }

        @keyframes monitorPulse{
          0%{
            transform:scale(.75);
            opacity:.6;
          }

          100%{
            transform:scale(1.55);
            opacity:0;
          }
        }

        @keyframes statusPulse{
          0%,100%{
            opacity:.45;
            box-shadow:0 0 0 0 rgba(46,145,200,.25);
          }

          50%{
            opacity:1;
            box-shadow:0 0 0 6px rgba(46,145,200,0);
          }
        }

        @keyframes ecgDraw{
          0%{
            stroke-dashoffset:280;
            opacity:.3;
          }

          35%,75%{
            opacity:1;
          }

          100%{
            stroke-dashoffset:0;
            opacity:.25;
          }
        }

        @keyframes pointFlow{
          from{
            transform:translateY(-50px);
            opacity:0;
          }

          15%{
            opacity:1;
          }

          85%{
            opacity:1;
          }

          to{
            transform:translateY(135px);
            opacity:0;
          }
        }

        @keyframes plusFloat{
          0%,100%{
            transform:translateY(0) rotate(0deg);
          }

          50%{
            transform:translateY(-9px) rotate(12deg);
          }
        }

        @media(max-width:767px){
          .icu-dots{
            mask-image:linear-gradient(to bottom,black,transparent 65%);
          }
        }

        @media(max-width:359px){
          .monitor-card{
            width:155px;
            right:6px;
          }
        }

        @media(prefers-reduced-motion:reduce){
          .icu-scan,
          .monitor-card,
          .monitor-ring,
          .status-dot,
          .ecg-line,
          .point-flow,
          .icu-plus{
            animation:none!important;
          }

          .icu-image{
            transform:none!important;
          }
        }
      `}</style>
    </section>
  );
};

export default ICUFacility;
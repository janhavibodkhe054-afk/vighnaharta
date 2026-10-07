import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Activity,
  Ambulance,
  FlaskConical,
  HeartPulse,
  Pill,
  ScanLine,
  Scissors,
  ShieldCheck,
  Waypoints,
  Plus,
} from "lucide-react";

const facilities = [
  { no: "01", title: "ICU Facility", icon: HeartPulse },
  { no: "02", title: "Operation Theatre", icon: Scissors },
  { no: "03", title: "Pathology Laboratory", icon: FlaskConical },
  { no: "04", title: "Digital X-Ray", icon: ScanLine },
  { no: "05", title: "ECG Facility", icon: Activity },
  { no: "06", title: "In-House Pharmacy", icon: Pill },
  { no: "07", title: "24×7 Ambulance", icon: Ambulance },
  { no: "08", title: "Cashless Treatment Support", icon: ShieldCheck },
];

const FacilitiesDirectory = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFD_50%,#FFFFFF_100%)]" />
      <div className="directory-dots pointer-events-none absolute inset-0 -z-20 opacity-[0.22]" />

      <div className="directory-orb absolute -left-[180px] top-[18%] -z-10 h-[380px] w-[380px] rounded-full bg-[#69CBF2]/10 blur-[120px]" />
      <div className="directory-orb-two absolute -right-[180px] bottom-[4%] -z-10 h-[380px] w-[380px] rounded-full bg-[#2E91C8]/10 blur-[120px]" />

      <Plus className="directory-plus absolute left-[5%] top-[14%] h-5 w-5 text-[#2E91C8]/10" />
      <Plus className="directory-plus-two absolute bottom-[12%] right-[5%] h-6 w-6 text-[#2E91C8]/10" />

      <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mx-auto mb-9 max-w-[900px] text-center sm:mb-11 lg:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3" data-aos="fade-up">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#2E91C8]/50" />

            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
              <Waypoints className="h-4 w-4" />
              <span className="directory-header-ring absolute inset-[-4px] rounded-full border border-[#2E91C8]/15" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              Hospital Directory
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#2E91C8]/50" />
          </div>

          <h2 className="text-[32px] font-bold leading-[1.06] tracking-[-.8px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]" data-aos="fade-up" data-aos-delay="60">
            Hospital Facilities
            <span className="text-[#2E91C8]"> at a Glance</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]" data-aos="fade-up" data-aos-delay="110">
            A quick directory of essential healthcare facilities available at Vighnaharta Hospital.
          </p>
        </div>

        {/* =====================================================
            MAIN LAYOUT
        ===================================================== */}
        <div className="relative grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch lg:gap-12 xl:grid-cols-[.92fr_1.08fr] xl:gap-16">

          {/* =====================================================
              LEFT VISUAL
          ===================================================== */}
          <div className="relative" data-aos="fade-right">
            <div className="relative h-full min-h-[390px] sm:min-h-[480px] lg:min-h-[650px]">

              {/* BACK SHAPE */}
              <div className="absolute bottom-0 left-0 right-[9%] top-[8%] rounded-[28px] bg-[#EAF7FC] sm:rounded-[34px]" />

              {/* DECORATIVE NUMBER */}
              <span className="absolute -left-1 top-0 z-10 text-[72px] font-black leading-none text-[#102D5F]/[0.05] sm:text-[90px] lg:text-[105px]">
                10
              </span>

              {/* IMAGE */}
              <div className="directory-photo group absolute bottom-[38px] left-[6%] right-0 top-[38px] overflow-hidden rounded-[24px] shadow-[0_25px_65px_rgba(16,45,95,.13)] sm:bottom-[45px] sm:left-[8%] sm:top-[45px] sm:rounded-[30px] lg:bottom-[52px] lg:top-[52px]">
                <img
                  src="/image.png"
                  alt="Vighnaharta Hospital Facilities"
                  className="directory-photo-img h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/80 via-[#071B3A]/5 to-transparent" />

                {/* SCAN */}
                <span className="directory-scan absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent shadow-[0_0_14px_rgba(105,203,242,.7)]" />

                {/* LIGHT */}
                <span className="directory-photo-light pointer-events-none absolute -top-[20%] h-[150%] w-[24%] rotate-[16deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                {/* CORNERS */}
                <span className="absolute left-5 top-5 h-9 w-9 border-l-2 border-t-2 border-white/55" />
                <span className="absolute right-5 top-5 h-9 w-9 border-r-2 border-t-2 border-white/55" />
                <span className="absolute bottom-5 left-5 h-9 w-9 border-b-2 border-l-2 border-white/55" />
                <span className="absolute bottom-5 right-5 h-9 w-9 border-b-2 border-r-2 border-white/55" />

                {/* IMAGE BOTTOM CONTENT */}
                <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-8 sm:left-8 sm:right-8">
                  <span className="mb-2 block text-[11px] font-bold uppercase tracking-[1.7px] text-[#69CBF2] sm:text-[12px]">
                    Vighnaharta Hospital
                  </span>

                  <h3 className="max-w-[410px] text-[19px] font-bold leading-[1.35] text-white sm:text-[22px] lg:text-[25px]">
                    Essential Healthcare Facilities Under One Roof
                  </h3>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-[2px] w-12 bg-[#69CBF2]" />

                    <span className="text-[11px] font-semibold uppercase tracking-[1.4px] text-white/70 sm:text-[12px]">
                      Care • Diagnostics • Support
                    </span>
                  </div>
                </div>
              </div>

              {/* FLOATING DIRECTORY COUNT */}
              <div className="directory-float absolute bottom-2 left-2 z-20 flex items-center gap-3 rounded-[18px] border border-[#102D5F]/[0.07] bg-white px-4 py-3 shadow-[0_16px_40px_rgba(16,45,95,.13)] sm:bottom-4 sm:left-4 sm:px-5 sm:py-4">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#102D5F] text-[#69CBF2]">
                  <Waypoints className="h-[19px] w-[19px]" />

                  <span className="directory-count-ring absolute inset-[-5px] rounded-[16px] border border-[#2E91C8]/20" />
                </span>

                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[1.4px] text-[#2E91C8] sm:text-[12px]">
                    Directory
                  </span>

                  <span className="mt-0.5 block text-[15px] font-bold text-[#102D5F] sm:text-[16px]">
                    08 Facilities
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE NAV INDICATOR */}
              <div className="absolute right-[-7px] top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center lg:flex">
                <span className="h-12 w-px bg-gradient-to-b from-transparent to-[#2E91C8]/30" />

                <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#2E91C8]/15 bg-white shadow-[0_5px_18px_rgba(16,45,95,.08)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2E91C8]" />
                  <span className="directory-side-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/15" />
                </span>

                <span className="h-12 w-px bg-gradient-to-b from-[#2E91C8]/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT DIRECTORY
          ===================================================== */}
          <div className="relative" data-aos="fade-left">

            {/* DIRECTORY TOP */}
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#102D5F]/10 pb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[1.7px] text-[#2E91C8] sm:text-[12px]">
                  Find a Facility
                </span>

                <h3 className="mt-1.5 text-[20px] font-bold text-[#102D5F] sm:text-[23px] lg:text-[26px]">
                  Hospital Directory
                </h3>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#2E91C8]">
                  <span className="directory-live-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/25" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#94A3B8] sm:text-[12px]">
                  08 Facilities
                </span>
              </div>
            </div>

            {/* LIST */}
            <div className="relative">
              {/* MAIN VERTICAL LINE */}
              <div className="absolute bottom-[24px] left-[27px] top-[24px] w-px bg-[#DCEBF2] sm:left-[31px]" />

              {/* MOVING SIGNAL */}
              <span className="directory-signal absolute left-[26px] top-0 z-10 h-[75px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent sm:left-[30px]" />

              <div>
                {facilities.map((facility, index) => {
                  const Icon = facility.icon;

                  return (
                    <div
                      key={facility.no}
                      className="directory-row group relative flex items-center gap-3 py-[6px] sm:gap-4 sm:py-[7px]"
                      data-aos="fade-left"
                      data-aos-delay={index * 55}
                    >
                      {/* NUMBER NODE */}
                      <div className="relative z-20 flex h-[54px] w-[54px] shrink-0 items-center justify-center sm:h-[62px] sm:w-[62px]">
                        <span className="directory-node relative flex h-[44px] w-[44px] items-center justify-center rounded-full border-[6px] border-white bg-[#EAF7FC] shadow-[0_5px_18px_rgba(16,45,95,.07)] sm:h-[48px] sm:w-[48px]">
                          <span className="text-[10px] font-black text-[#2E91C8] sm:text-[11px]">
                            {facility.no}
                          </span>

                          <span className="directory-node-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/15" />
                        </span>
                      </div>

                      {/* FACILITY */}
                      <div className="directory-item relative flex min-w-0 flex-1 items-center gap-3 overflow-hidden border-b border-[#102D5F]/[0.07] px-1 py-3 sm:gap-4 sm:py-3.5">
                        {/* HOVER WASH */}
                        <span className="directory-item-wash pointer-events-none absolute inset-y-1 left-0 rounded-[14px] bg-[#F1F9FC]" />

                        {/* TRAVELLING BOTTOM LINE */}
                        <span className="absolute bottom-0 left-0 right-0 h-px bg-[#E3EFF4]">
                          <span className="directory-travel-line absolute bottom-0 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#2E91C8] via-[#69CBF2] to-transparent" />
                          <span className="directory-travel-dot absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#2E91C8]" />
                        </span>

                        {/* ICON */}
                        <span className="directory-icon relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-[#2E91C8]/10 bg-[#F0F9FD] text-[#2E91C8] sm:h-12 sm:w-12">
                          <Icon className="h-[19px] w-[19px] sm:h-5 sm:w-5" strokeWidth={1.6} />
                        </span>

                        {/* TITLE */}
                        <div className="relative z-10 min-w-0 flex-1">
                          <span className="block text-[11px] font-bold uppercase tracking-[1.3px] text-[#94A3B8] sm:text-[12px]">
                            Facility {facility.no}
                          </span>

                          <h4 className="mt-0.5 text-[14px] font-bold leading-[1.4] text-[#102D5F] sm:text-[15px] lg:text-[16px]">
                            {facility.title}
                          </h4>
                        </div>

                        {/* DIRECTION */}
                        <span className="directory-arrow relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2E91C8]/15 bg-white">
                          <span className="relative h-[2px] w-3 bg-[#2E91C8]">
                            <span className="absolute -right-[1px] -top-[3px] h-[7px] w-[7px] rotate-45 border-r-2 border-t-2 border-[#2E91C8]" />
                          </span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[16px] bg-[#F3FAFD] px-4 py-3.5 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2E91C8]" />

                <span className="text-[11px] font-bold uppercase tracking-[1.3px] text-[#64748B] sm:text-[12px]">
                  Hospital Facilities
                </span>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[1.3px] text-[#2E91C8] sm:text-[12px]">
                Vighnaharta Hospital
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .directory-dots{
          background-image:radial-gradient(
            rgba(46,145,200,.14) 1px,
            transparent 1px
          );
          background-size:30px 30px;
          mask-image:linear-gradient(
            to bottom,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }

        .directory-photo-img{
          transform:scale(1.025);
          transition:transform 1.1s cubic-bezier(.22,1,.36,1);
        }

        .directory-photo:hover .directory-photo-img{
          transform:scale(1.075);
        }

        .directory-photo-light{
          left:-35%;
          animation:directoryLight 6s ease-in-out infinite;
        }

        .directory-scan{
          top:0%;
          animation:directoryScan 5.5s ease-in-out infinite;
        }

        .directory-float{
          animation:directoryFloat 4.5s ease-in-out infinite;
        }

        .directory-header-ring,
        .directory-count-ring,
        .directory-side-ring,
        .directory-live-ring,
        .directory-node-ring{
          animation:directoryPulse 2.7s ease-out infinite;
        }

        .directory-signal{
          animation:directorySignal 6.5s linear infinite;
        }

        .directory-row{
          transition:transform .35s cubic-bezier(.22,1,.36,1);
        }

        .directory-row:hover{
          transform:translateX(4px);
        }

        .directory-item-wash{
          width:0;
          transition:width .55s cubic-bezier(.22,1,.36,1);
        }

        .directory-row:hover .directory-item-wash{
          width:100%;
        }

        .directory-travel-line{
          width:0;
          transition:width .7s cubic-bezier(.22,1,.36,1);
        }

        .directory-row:hover .directory-travel-line{
          width:100%;
        }

        .directory-travel-dot{
          opacity:0;
          transform:
            translateY(-50%)
            scale(.5);
          transition:
            opacity .25s ease,
            transform .35s ease;
        }

        .directory-row:hover .directory-travel-dot{
          opacity:1;
          transform:
            translateY(-50%)
            scale(1);
        }

        .directory-node{
          transition:
            transform .4s cubic-bezier(.22,1,.36,1),
            background-color .35s ease,
            box-shadow .35s ease;
        }

        .directory-row:hover .directory-node{
          transform:scale(1.12);
          background:#102D5F;
          box-shadow:
            0 0 0 6px rgba(46,145,200,.07),
            0 8px 22px rgba(16,45,95,.12);
        }

        .directory-row:hover .directory-node > span:first-child{
          color:#69CBF2;
        }

        .directory-icon{
          transition:
            transform .45s cubic-bezier(.22,1,.36,1),
            background-color .35s ease,
            color .35s ease,
            box-shadow .35s ease;
        }

        .directory-row:hover .directory-icon{
          transform:translateY(-3px) rotate(-5deg) scale(1.05);
          background:#102D5F;
          color:white;
          box-shadow:0 10px 25px rgba(16,45,95,.12);
        }

        .directory-arrow{
          transition:
            transform .35s ease,
            background-color .35s ease;
        }

        .directory-row:hover .directory-arrow{
          transform:translateX(5px);
          background:#EAF7FC;
        }

        .directory-orb{
          animation:directoryOrb 10s ease-in-out infinite;
        }

        .directory-orb-two{
          animation:directoryOrb 12s 2s ease-in-out infinite reverse;
        }

        .directory-plus{
          animation:directoryPlus 7s ease-in-out infinite;
        }

        .directory-plus-two{
          animation:directoryPlus 9s 1s ease-in-out infinite reverse;
        }

        @keyframes directoryLight{
          0%{
            left:-35%;
            opacity:0;
          }

          15%{
            opacity:1;
          }

          80%{
            opacity:1;
          }

          100%{
            left:120%;
            opacity:0;
          }
        }

        @keyframes directoryScan{
          0%,100%{
            top:0%;
            opacity:0;
          }

          15%{
            opacity:.8;
          }

          50%{
            top:100%;
            opacity:.8;
          }

          65%,100%{
            top:100%;
            opacity:0;
          }
        }

        @keyframes directoryFloat{
          0%,100%{
            translate:0 0;
          }

          50%{
            translate:0 -7px;
          }
        }

        @keyframes directoryPulse{
          0%{
            transform:scale(.75);
            opacity:.55;
          }

          100%{
            transform:scale(1.7);
            opacity:0;
          }
        }

        @keyframes directorySignal{
          0%{
            top:-75px;
            opacity:0;
          }

          10%{
            opacity:1;
          }

          90%{
            opacity:1;
          }

          100%{
            top:100%;
            opacity:0;
          }
        }

        @keyframes directoryOrb{
          0%,100%{
            transform:translate3d(0,0,0);
          }

          50%{
            transform:translate3d(25px,-20px,0);
          }
        }

        @keyframes directoryPlus{
          0%,100%{
            transform:translateY(0) rotate(0deg);
          }

          50%{
            transform:translateY(-15px) rotate(90deg);
          }
        }

        @media(max-width:639px){
          .directory-dots{
            background-size:26px 26px;
          }
        }

        @media(prefers-reduced-motion:reduce){
          .directory-photo-light,
          .directory-scan,
          .directory-float,
          .directory-header-ring,
          .directory-count-ring,
          .directory-side-ring,
          .directory-live-ring,
          .directory-node-ring,
          .directory-signal,
          .directory-orb,
          .directory-orb-two,
          .directory-plus,
          .directory-plus-two{
            animation:none!important;
          }

          .directory-photo-img{
            transform:none!important;
          }
        }
      `}</style>
    </section>
  );
};

export default FacilitiesDirectory;
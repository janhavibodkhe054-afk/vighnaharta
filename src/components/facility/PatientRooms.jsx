import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BedSingle,
  Eye,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const carePoints = [
  { no: "01", title: "Inpatient accommodation", icon: BedSingle },
  { no: "02", title: "Patient observation and care", icon: Eye },
  { no: "03", title: "Clean hospital environment", icon: ShieldCheck },
  { no: "04", title: "Support during recovery", icon: HeartHandshake },
];

const PatientRooms = () => {
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
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#F7FBFD_0%,#FFFFFF_48%,#F3FAFD_100%)]" />
      <div className="patient-plan-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.3]" />

      <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid gap-6 border-b border-[#102D5F]/10 pb-8 md:grid-cols-[.8fr_1.2fr] md:items-end md:gap-12 lg:pb-10">

          <div data-aos="fade-right">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[11px] font-bold tracking-[2px] text-[#2E91C8] sm:text-[12px]">
                07
              </span>

              <span className="h-px w-8 bg-[#2E91C8]/40" />

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
                Inpatient Care
              </span>
            </div>

            <h2 className="text-[32px] font-bold leading-[1.05] tracking-[-.8px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
              Patient Rooms
            </h2>

            <h3 className="mt-3 text-[16px] font-semibold leading-[1.5] text-[#2E91C8] sm:text-[17px] lg:text-[19px]">
              A Comfortable Space During Hospital Stay
            </h3>
          </div>

          <div data-aos="fade-left">
            <div className="max-w-[720px] space-y-3 text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]">
              <p>
                Patient rooms provide a dedicated space for patients who require
                hospital admission, observation and continued medical care.
              </p>

              <p>
                Our focus is to maintain a clean and supportive environment for
                patients and accompanying family members during their hospital
                stay.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CARE FLOOR
        ===================================================== */}
        <div className="relative mt-8 overflow-hidden rounded-[24px] border border-[#102D5F]/[0.08] bg-white shadow-[0_20px_60px_rgba(16,45,95,.07)] sm:mt-10 sm:rounded-[30px]" data-aos="fade-up">

          {/* TOP BAR */}
          <div className="flex items-center justify-between border-b border-[#102D5F]/[0.07] px-4 py-3 sm:px-6">

            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#102D5F] text-white">
                <BedSingle className="h-4 w-4" />

                <span className="patient-status-ring absolute inset-[-4px] rounded-full border border-[#2E91C8]/20" />
              </span>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#2E91C8] sm:text-[12px]">
                  Care Zone
                </span>

                <span className="block text-[13px] font-semibold text-[#102D5F] sm:text-[14px]">
                  Patient Stay
                </span>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#D8EAF2]" />
              <span className="h-2 w-2 rounded-full bg-[#A9DCEC]" />
              <span className="h-2 w-6 rounded-full bg-[#2E91C8]" />
            </div>
          </div>

          {/* =====================================================
              MAIN FLOOR LAYOUT
          ===================================================== */}
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">

            {/* ===================================================
                LEFT CARE MAP
            =================================================== */}
            <div className="relative min-h-[390px] overflow-hidden border-b border-[#102D5F]/[0.07] p-5 sm:min-h-[440px] sm:p-7 lg:min-h-[500px] lg:border-b-0 lg:border-r lg:p-9">

              <div className="patient-map-lines absolute inset-0 opacity-[0.45]" />

              {/* ROOM SHAPE */}
              <div className="relative z-10 h-full min-h-[350px] sm:min-h-[390px] lg:min-h-[420px]">

                {/* CENTER */}
                <div className="absolute left-1/2 top-1/2 flex h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-[#2E91C8]/15 bg-[#F0F9FD] sm:h-[150px] sm:w-[150px]">

                  <div className="text-center">
                    <span className="patient-bed-pulse relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#102D5F] text-white shadow-[0_10px_30px_rgba(16,45,95,.18)]">
                      <BedSingle className="h-6 w-6" strokeWidth={1.5} />
                    </span>

                    <span className="mt-3 block text-[11px] font-bold uppercase tracking-[1.5px] text-[#2E91C8] sm:text-[12px]">
                      Patient
                    </span>

                    <span className="block text-[14px] font-bold text-[#102D5F] sm:text-[15px]">
                      Care Space
                    </span>
                  </div>

                </div>

                {/* CONNECTING SVG */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 420" preserveAspectRatio="none">
                  <path d="M300 210 C230 210 220 95 115 95" fill="none" stroke="#D6EAF3" strokeWidth="2" strokeDasharray="6 7" />
                  <path d="M300 210 C370 210 380 95 485 95" fill="none" stroke="#D6EAF3" strokeWidth="2" strokeDasharray="6 7" />
                  <path d="M300 210 C230 210 220 325 115 325" fill="none" stroke="#D6EAF3" strokeWidth="2" strokeDasharray="6 7" />
                  <path d="M300 210 C370 210 380 325 485 325" fill="none" stroke="#D6EAF3" strokeWidth="2" strokeDasharray="6 7" />

                  <circle className="patient-dot patient-dot-1" cx="300" cy="210" r="5" fill="#2E91C8" />
                  <circle className="patient-dot patient-dot-2" cx="300" cy="210" r="5" fill="#2E91C8" />
                  <circle className="patient-dot patient-dot-3" cx="300" cy="210" r="5" fill="#2E91C8" />
                  <circle className="patient-dot patient-dot-4" cx="300" cy="210" r="5" fill="#2E91C8" />
                </svg>

                {/* POINT 01 */}
                <CareMarker
                  item={carePoints[0]}
                  className="left-0 top-2 sm:left-[2%] sm:top-4"
                  aos="fade-right"
                />

                {/* POINT 02 */}
                <CareMarker
                  item={carePoints[1]}
                  className="right-0 top-2 sm:right-[2%] sm:top-4"
                  aos="fade-left"
                />

                {/* POINT 03 */}
                <CareMarker
                  item={carePoints[2]}
                  className="bottom-2 left-0 sm:bottom-4 sm:left-[2%]"
                  aos="fade-right"
                />

                {/* POINT 04 */}
                <CareMarker
                  item={carePoints[3]}
                  className="bottom-2 right-0 sm:bottom-4 sm:right-[2%]"
                  aos="fade-left"
                />

              </div>
            </div>

            {/* ===================================================
                RIGHT PHOTO WINDOW
            =================================================== */}
            <div className="relative min-h-[340px] bg-[#EAF5F9] p-3 sm:min-h-[420px] sm:p-4 lg:min-h-[500px]" data-aos="fade-left">

              <div className="patient-photo group relative h-full min-h-[320px] overflow-hidden rounded-[18px] sm:min-h-[390px] sm:rounded-[22px] lg:min-h-[468px]">

                <img
                  src="/patientroom.png"
                  alt="Patient Rooms at Vighnaharta Hospital"
                  className="patient-photo-img absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/65 via-transparent to-transparent" />

                {/* CURTAIN REVEAL */}
                <div className="patient-curtain pointer-events-none absolute inset-0 z-20 bg-[#EAF7FC]" />

                {/* MOVING LIGHT */}
                <span className="patient-light pointer-events-none absolute -top-[20%] h-[150%] w-[24%] rotate-[15deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                {/* TOP INDEX */}
                <div className="absolute left-5 top-5 z-10">
                  <span className="text-[52px] font-black leading-none text-white/[0.18] sm:text-[68px]">
                    07
                  </span>
                </div>

                {/* FOCUS CORNERS */}
                <span className="absolute right-5 top-5 h-9 w-9 border-r-2 border-t-2 border-white/60" />
                <span className="absolute bottom-5 right-5 h-9 w-9 border-b-2 border-r-2 border-white/60" />

                {/* BOTTOM INFO */}
                <div className="absolute bottom-6 left-5 right-5 z-10 sm:bottom-7 sm:left-7 sm:right-7">

                  <span className="mb-2 block text-[11px] font-bold uppercase tracking-[1.7px] text-[#69CBF2] sm:text-[12px]">
                    Inpatient Care
                  </span>

                  <div className="flex items-end justify-between gap-4">

                    <p className="max-w-[350px] text-[17px] font-semibold leading-[1.4] text-white sm:text-[19px]">
                      A Dedicated Space for Continued Patient Care
                    </p>

                    <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md min-[390px]:flex">
                      <HeartHandshake className="h-5 w-5" />
                    </span>

                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* =====================================================
              BOTTOM STATUS STRIP
          ===================================================== */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#102D5F]/[0.07] bg-[#FBFDFE] px-4 py-3 sm:px-6">

            <div className="flex items-center gap-2">
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#2E91C8]">
                <span className="patient-status-ring absolute inset-[-4px] rounded-full border border-[#2E91C8]/25" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#64748B] sm:text-[12px]">
                Hospital Stay Support
              </span>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#2E91C8] sm:text-[12px]">
              Patient • Care • Recovery
            </span>

          </div>
        </div>
      </div>

      <style>{`
        .patient-plan-grid{
          background-image:
            linear-gradient(rgba(46,145,200,.06) 1px,transparent 1px),
            linear-gradient(90deg,rgba(46,145,200,.06) 1px,transparent 1px);
          background-size:44px 44px;
          mask-image:linear-gradient(to bottom,transparent,black 15%,black 85%,transparent);
        }

        .patient-map-lines{
          background-image:
            linear-gradient(rgba(46,145,200,.06) 1px,transparent 1px),
            linear-gradient(90deg,rgba(46,145,200,.06) 1px,transparent 1px);
          background-size:24px 24px;
        }

        .patient-photo-img{
          transform:scale(1.06);
          transition:transform 1.2s cubic-bezier(.22,1,.36,1);
        }

        .patient-photo:hover .patient-photo-img{
          transform:scale(1.11);
        }

        .patient-curtain{
          transform-origin:right;
          animation:patientCurtain 1.25s .2s cubic-bezier(.76,0,.24,1) forwards;
        }

        .patient-light{
          left:-35%;
          animation:patientLight 6s 1.3s ease-in-out infinite;
        }

        .patient-status-ring{
          animation:patientPulse 2.5s ease-out infinite;
        }

        .patient-bed-pulse::before,
        .patient-bed-pulse::after{
          content:"";
          position:absolute;
          inset:-8px;
          border:1px solid rgba(46,145,200,.22);
          border-radius:999px;
          animation:patientBedPulse 2.8s ease-out infinite;
        }

        .patient-bed-pulse::after{
          animation-delay:1.4s;
        }

        .patient-marker{
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .patient-marker:hover{
          transform:translateY(-4px);
          border-color:rgba(46,145,200,.25);
          box-shadow:0 15px 35px rgba(16,45,95,.09);
        }

        .patient-dot-1{
          animation:patientDot1 4s linear infinite;
        }

        .patient-dot-2{
          animation:patientDot2 4s 1s linear infinite;
        }

        .patient-dot-3{
          animation:patientDot3 4s 2s linear infinite;
        }

        .patient-dot-4{
          animation:patientDot4 4s 3s linear infinite;
        }

        @keyframes patientCurtain{
          0%{
            transform:scaleX(1);
          }

          100%{
            transform:scaleX(0);
          }
        }

        @keyframes patientLight{
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

        @keyframes patientPulse{
          0%{
            transform:scale(.75);
            opacity:.6;
          }

          100%{
            transform:scale(1.7);
            opacity:0;
          }
        }

        @keyframes patientBedPulse{
          0%{
            transform:scale(.7);
            opacity:.55;
          }

          100%{
            transform:scale(1.55);
            opacity:0;
          }
        }

        @keyframes patientDot1{
          0%{transform:translate(0,0);opacity:0;}
          10%{opacity:1;}
          100%{transform:translate(-185px,-115px);opacity:0;}
        }

        @keyframes patientDot2{
          0%{transform:translate(0,0);opacity:0;}
          10%{opacity:1;}
          100%{transform:translate(185px,-115px);opacity:0;}
        }

        @keyframes patientDot3{
          0%{transform:translate(0,0);opacity:0;}
          10%{opacity:1;}
          100%{transform:translate(-185px,115px);opacity:0;}
        }

        @keyframes patientDot4{
          0%{transform:translate(0,0);opacity:0;}
          10%{opacity:1;}
          100%{transform:translate(185px,115px);opacity:0;}
        }

        @media(max-width:639px){
          .patient-plan-grid{
            background-size:32px 32px;
          }
        }

        @media(prefers-reduced-motion:reduce){
          .patient-curtain{
            display:none;
          }

          .patient-light,
          .patient-status-ring,
          .patient-bed-pulse::before,
          .patient-bed-pulse::after,
          .patient-dot-1,
          .patient-dot-2,
          .patient-dot-3,
          .patient-dot-4{
            animation:none!important;
          }

          .patient-photo-img{
            transform:none!important;
          }
        }
      `}</style>
    </section>
  );
};

const CareMarker = ({ item, className, aos }) => {
  const Icon = item.icon;

  return (
    <div
      className={`patient-marker absolute z-20 w-[135px] rounded-[16px] border border-[#102D5F]/[0.07] bg-white/95 p-3 shadow-[0_8px_25px_rgba(16,45,95,.055)] backdrop-blur-sm min-[390px]:w-[155px] sm:w-[180px] ${className}`}
      data-aos={aos}
    >
      <div className="flex items-start gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EAF7FC] text-[#2E91C8]">
          <Icon className="h-4 w-4" strokeWidth={1.6} />
        </span>

        <div>
          <span className="block text-[11px] font-bold tracking-[1px] text-[#2E91C8] sm:text-[12px]">
            {item.no}
          </span>

          <p className="mt-0.5 text-[12px] font-semibold leading-[1.4] text-[#334155] min-[390px]:text-[13px] sm:text-[14px] lg:text-[15px]">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientRooms;
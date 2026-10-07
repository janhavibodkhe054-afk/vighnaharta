import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Ambulance,
  ArrowUpRight,
  Clock3,
  MapPin,
  PhoneCall,
  Siren,
} from "lucide-react";

const AmbulanceFacility = () => {
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
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FBFD_52%,#FFFFFF_100%)]" />
      <div className="ambulance-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.28]" />

      <div className="absolute -left-[180px] top-[20%] -z-10 h-[360px] w-[360px] rounded-full bg-[#69CBF2]/10 blur-[110px]" />
      <div className="absolute -right-[180px] bottom-[5%] -z-10 h-[380px] w-[380px] rounded-full bg-[#2E91C8]/10 blur-[110px]" />

      <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            CENTER HEADING
        ===================================================== */}
        <div className="mx-auto max-w-[900px] text-center">

          <div className="mb-4 flex items-center justify-center gap-2.5" data-aos="fade-up">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2E91C8]/50 sm:w-12" />

            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
              <Siren className="h-[18px] w-[18px]" strokeWidth={1.7} />
              <span className="ambulance-pulse absolute inset-[-4px] rounded-full border border-[#2E91C8]/20" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              24×7 Emergency Support
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2E91C8]/50 sm:w-12" />
          </div>

          <h2 className="text-[32px] font-bold leading-[1.06] tracking-[-.8px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]" data-aos="fade-up" data-aos-delay="60">
            Ambulance Facility
            <span className="text-[#2E91C8]"> Available 24×7</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]" data-aos="fade-up" data-aos-delay="110">
            Vighnaharta Hospital provides 24×7 ambulance support as part of its
            emergency care services, helping patients access hospital care when
            urgent medical attention is required.
          </p>

        </div>

        {/* =====================================================
            MAIN AMBULANCE EXPERIENCE
        ===================================================== */}
        <div className="relative mx-auto mt-9 max-w-[1240px] sm:mt-11 lg:mt-12" data-aos="fade-up" data-aos-delay="100">

          <div className="overflow-hidden rounded-[24px] border border-[#102D5F]/[0.08] bg-white shadow-[0_20px_60px_rgba(16,45,95,.08)] sm:rounded-[32px]">

            <div className="grid lg:grid-cols-[1.3fr_.7fr]">

              {/* =================================================
                  IMAGE
              ================================================= */}
              <div className="relative p-2.5 sm:p-3 lg:p-4">

                <div className="ambulance-photo group relative h-[290px] overflow-hidden rounded-[19px] bg-[#E5F0F5] min-[360px]:h-[315px] min-[430px]:h-[350px] sm:h-[410px] md:h-[450px] lg:h-[475px] sm:rounded-[26px]">

                  <img
                    src="/ambulance.png"
                    alt="24x7 Ambulance Facility at Vighnaharta Hospital"
                    className="ambulance-photo-img h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/70 via-[#071B3A]/5 to-transparent" />

                  {/* MOVING LIGHT */}
                  <span className="ambulance-light pointer-events-none absolute -top-[20%] h-[150%] w-[22%] rotate-[15deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                  {/* CORNERS */}
                  <span className="absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-white/60" />
                  <span className="absolute right-5 top-5 h-8 w-8 border-r-2 border-t-2 border-white/60" />
                  <span className="absolute bottom-5 left-5 h-8 w-8 border-b-2 border-l-2 border-white/60" />
                  <span className="absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-white/60" />

                  {/* 24/7 BADGE */}
                  <div className="absolute left-5 top-5 z-10 ml-4 mt-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 backdrop-blur-md">

                    <span className="relative h-2.5 w-2.5 rounded-full bg-[#69CBF2]">
                      <span className="ambulance-live absolute inset-[-4px] rounded-full border border-[#69CBF2]/50" />
                    </span>

                    <span className="text-[11px] font-bold uppercase tracking-[1.3px] text-white sm:text-[12px]">
                      24×7 Support
                    </span>

                  </div>

                  {/* BOTTOM TEXT */}
                  <div className="absolute bottom-6 left-5 right-5 z-10 sm:bottom-7 sm:left-7 sm:right-7">

                    <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[1.6px] text-[#69CBF2] sm:text-[12px]">
                      Emergency Ambulance
                    </span>

                    <h3 className="max-w-[470px] text-[18px] font-semibold leading-[1.4] text-white sm:text-[20px]">
                      Emergency Assistance Available 24 Hours
                    </h3>

                  </div>

                </div>

              </div>

              {/* =================================================
                  EMERGENCY ACTION PANEL
              ================================================= */}
              <div className="relative border-t border-[#102D5F]/[0.07] bg-[#F8FCFE] p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-7 xl:p-8">

                <div className="flex h-full flex-col">

                  {/* STATUS */}
                  <div className="flex items-center justify-between gap-3 border-b border-[#102D5F]/[0.08] pb-5">

                    <div className="flex items-center gap-3">

                      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#102D5F] text-white">
                        <Ambulance className="h-5 w-5" />

                        <span className="ambulance-status-ring absolute inset-[-4px] rounded-full border border-[#2E91C8]/20" />
                      </span>

                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-[1.4px] text-[#2E91C8] sm:text-[12px]">
                          Emergency Support
                        </span>

                        <span className="mt-0.5 block text-[14px] font-semibold text-[#102D5F] sm:text-[15px]">
                          Available 24 Hours
                        </span>
                      </div>

                    </div>

                    <Clock3 className="h-5 w-5 text-[#2E91C8]" />

                  </div>

                  {/* =================================================
                      MINI ROUTE
                  ================================================= */}
                  <div className="relative my-7 flex-1">

                    <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#94A3B8] sm:text-[12px]">
                      Emergency Access
                    </span>

                    <div className="relative mt-5">

                      {/* BASE ROUTE */}
                      <div className="absolute bottom-[22px] left-[20px] top-[22px] w-px bg-[#D7E9F1]" />

                      <span className="ambulance-route absolute left-[19px] top-0 h-[58px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />

                      {/* CALL */}
                      <div className="relative flex items-center gap-4 pb-7">

                        <span className="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#F8FCFE] bg-[#EAF7FC] text-[#2E91C8]">
                          <PhoneCall className="h-[17px] w-[17px]" />
                        </span>

                        <div>
                          <span className="block text-[11px] font-bold uppercase tracking-[1.2px] text-[#2E91C8] sm:text-[12px]">
                            Step 01
                          </span>

                          <span className="mt-0.5 block text-[14px] font-semibold text-[#334155] sm:text-[15px] lg:text-[16px]">
                            Call Hospital
                          </span>
                        </div>

                      </div>

                      {/* AMBULANCE */}
                      <div className="relative flex items-center gap-4 pb-7">

                        <span className="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#F8FCFE] bg-[#EAF7FC] text-[#2E91C8]">
                          <Ambulance className="h-[17px] w-[17px]" />
                        </span>

                        <div>
                          <span className="block text-[11px] font-bold uppercase tracking-[1.2px] text-[#2E91C8] sm:text-[12px]">
                            Step 02
                          </span>

                          <span className="mt-0.5 block text-[14px] font-semibold text-[#334155] sm:text-[15px] lg:text-[16px]">
                            Ambulance Support
                          </span>
                        </div>

                      </div>

                      {/* HOSPITAL */}
                      <div className="relative flex items-center gap-4">

                        <span className="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#F8FCFE] bg-[#102D5F] text-white">
                          <MapPin className="h-[17px] w-[17px]" />
                        </span>

                        <div>
                          <span className="block text-[11px] font-bold uppercase tracking-[1.2px] text-[#2E91C8] sm:text-[12px]">
                            Step 03
                          </span>

                          <span className="mt-0.5 block text-[14px] font-semibold text-[#334155] sm:text-[15px] lg:text-[16px]">
                            Hospital Care
                          </span>
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      CALL CTA
                  ================================================= */}
                  <a
                    href="tel:+919766999474"
                    className="ambulance-call group relative overflow-hidden rounded-[18px] bg-[#102D5F] shadow-[0_14px_35px_rgba(16,45,95,.16)]"
                  >

                    <span className="ambulance-call-fill pointer-events-none absolute inset-y-0 left-0 bg-[#2E91C8]" />

                    <div className="relative z-10 flex items-center justify-between gap-3 px-4 py-4 sm:px-5">

                      <div className="flex items-center gap-3">

                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#69CBF2]">
                          <PhoneCall className="h-[18px] w-[18px]" />
                        </span>

                        <div>

                          <span className="block text-[11px] font-bold uppercase tracking-[1.3px] text-[#69CBF2] sm:text-[12px]">
                            Call Now
                          </span>

                          <span className="mt-0.5 block text-[17px] font-bold text-white sm:text-[19px]">
                            +91 9766999474
                          </span>

                        </div>

                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E91C8] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#102D5F]">
                        <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-45" />
                      </span>

                    </div>

                  </a>

                </div>

              </div>

            </div>
          </div>

          {/* =====================================================
              MOVING AMBULANCE ROUTE
          ===================================================== */}
          <div className="relative mx-auto mt-5 max-w-[1000px] overflow-hidden py-3">

            <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-[#2E91C8]/20" />

            <div className="ambulance-drive relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#2E91C8] text-white shadow-[0_7px_20px_rgba(46,145,200,.25)]">
              <Ambulance className="h-[17px] w-[17px]" />
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .ambulance-grid{
          background-image:
            radial-gradient(
              rgba(46,145,200,.12) 1px,
              transparent 1px
            );
          background-size:30px 30px;
          mask-image:linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .ambulance-photo-img{
          transform:scale(1.02);
          transition:transform 1.1s cubic-bezier(.22,1,.36,1);
        }

        .ambulance-photo:hover .ambulance-photo-img{
          transform:scale(1.065);
        }

        .ambulance-light{
          left:-35%;
          animation:ambulanceLight 6s ease-in-out infinite;
        }

        .ambulance-pulse,
        .ambulance-live,
        .ambulance-status-ring{
          animation:ambulancePulse 2.5s ease-out infinite;
        }

        .ambulance-route{
          animation:ambulanceRoute 4s linear infinite;
        }

        .ambulance-call-fill{
          width:0;
          transition:width .45s cubic-bezier(.22,1,.36,1);
        }

        .ambulance-call:hover .ambulance-call-fill{
          width:100%;
        }

        .ambulance-drive{
          animation:ambulanceDrive 7s ease-in-out infinite;
        }

        @keyframes ambulanceLight{
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

        @keyframes ambulancePulse{
          0%{
            transform:scale(.75);
            opacity:.6;
          }

          100%{
            transform:scale(1.7);
            opacity:0;
          }
        }

        @keyframes ambulanceRoute{
          0%{
            transform:translateY(-55px);
            opacity:0;
          }

          15%{
            opacity:1;
          }

          85%{
            opacity:1;
          }

          100%{
            transform:translateY(175px);
            opacity:0;
          }
        }

        @keyframes ambulanceDrive{
          0%,100%{
            left:2%;
          }

          50%{
            left:calc(100% - 44px);
          }
        }

        @media(max-width:639px){
          .ambulance-grid{
            mask-image:linear-gradient(
              to bottom,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }
        }

        @media(prefers-reduced-motion:reduce){
          .ambulance-light,
          .ambulance-pulse,
          .ambulance-live,
          .ambulance-status-ring,
          .ambulance-route,
          .ambulance-drive{
            animation:none!important;
          }

          .ambulance-photo-img{
            transform:none!important;
          }
        }
      `}</style>

    </section>
  );
};

export default AmbulanceFacility;
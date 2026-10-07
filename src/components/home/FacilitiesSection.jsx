import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CheckCircle2,
  MapPin,
  Pill,
  ShieldPlus,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    no: "01",
    title: "Located within the hospital",
    icon: MapPin,
  },
  {
    no: "02",
    title: "Convenient access to prescribed medicines",
    icon: Pill,
  },
  {
    no: "03",
    title: "Supports patients during hospital treatment",
    icon: ShieldPlus,
  },
];

const PharmacyFacility = () => {
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

      <div className="pharmacy-dots pointer-events-none absolute inset-0 -z-20 opacity-[0.28]" />

      <div className="absolute -left-[180px] top-[15%] -z-10 h-[380px] w-[380px] rounded-full bg-[#69CBF2]/10 blur-[110px]" />

      <div className="absolute -right-[180px] bottom-[5%] -z-10 h-[380px] w-[380px] rounded-full bg-[#2E91C8]/10 blur-[110px]" />

      <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mx-auto max-w-[900px] text-center">

          <div
            className="mb-4 flex items-center justify-center gap-2.5"
            data-aos="fade-up"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
              <Pill className="h-4 w-4" strokeWidth={1.7} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              Medicines & Support
            </span>

            <span className="h-px w-8 bg-[#2E91C8]/30" />
          </div>

          <h2
            className="text-[32px] font-bold leading-[1.06] tracking-[-.8px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            In-House
            <span className="text-[#2E91C8]"> Pharmacy</span>
          </h2>

          <h3
            className="mt-3 text-[16px] font-semibold leading-[1.5] text-[#2E91C8] sm:text-[17px] lg:text-[19px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Prescribed Medicines Within the Hospital
          </h3>

          <p
            className="mx-auto mt-5 max-w-[800px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            The in-house pharmacy provides convenient access to prescribed
            medicines within the hospital, helping patients and families avoid
            unnecessary travel during treatment.
          </p>

        </div>

        {/* =====================================================
            PHARMACY VISUAL
        ===================================================== */}
        <div className="relative mt-10 sm:mt-12">

          <div
            className="relative mx-auto max-w-[1180px]"
            data-aos="zoom-in"
            data-aos-delay="120"
          >

            {/* LARGE OUTER FRAME */}
            <div className="relative overflow-hidden rounded-[26px] border border-[#102D5F]/[0.07] bg-[#F8FCFE] p-2 shadow-[0_20px_60px_rgba(16,45,95,.08)] sm:rounded-[34px] sm:p-3">

              {/* TOP PHARMACY BAR */}
              <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-1 sm:px-4 sm:pb-3">

                <div className="flex items-center gap-2.5">

                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#2E91C8]">
                    <span className="pharmacy-pulse absolute inset-[-5px] rounded-full border border-[#2E91C8]/25" />
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#102D5F] sm:text-[12px]">
                    Hospital Pharmacy
                  </span>

                </div>

                <div className="hidden items-center gap-2 min-[430px]:flex">

                  <span className="h-1.5 w-6 rounded-full bg-[#D8ECF5]" />
                  <span className="h-1.5 w-6 rounded-full bg-[#A9DCEC]" />
                  <span className="h-1.5 w-6 rounded-full bg-[#2E91C8]" />

                </div>

              </div>

              {/* IMAGE */}
              <div className="pharmacy-image-wrap group relative h-[270px] overflow-hidden rounded-[20px] bg-[#E7F1F5] min-[360px]:h-[290px] min-[430px]:h-[330px] sm:h-[390px] md:h-[430px] lg:h-[460px] sm:rounded-[27px]">

                <img
                  src="/home-pharmacy.png"
                  alt="In-House Pharmacy at Vighnaharta Hospital"
                  className="pharmacy-image h-full w-full object-cover object-center"
                />

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/40 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#071B3A]/55 to-transparent" />

                {/* SCAN */}
                <span className="pharmacy-scan pointer-events-none absolute bottom-0 top-0 w-[100px] -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                {/* CORNERS */}
                <span className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-white/60" />
                <span className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-white/60" />
                <span className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-white/60" />
                <span className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-white/60" />

                {/* IMAGE BADGE */}
                <div className="absolute bottom-5 left-5 z-10 sm:bottom-7 sm:left-7">

                  <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[1.6px] text-[#69CBF2] sm:text-[12px]">
                    Patient Support
                  </span>

                  <span className="text-[17px] font-semibold text-white sm:text-[19px]">
                    Medicines Within the Hospital
                  </span>

                </div>

              </div>

            </div>

            {/* =====================================================
                FLOATING MEDICINE ACCESS BADGE
            ===================================================== */}
            <div className="pharmacy-float absolute -bottom-5 left-1/2 z-30 flex w-[88%] max-w-[450px] -translate-x-1/2 items-center gap-3 rounded-[18px] border border-[#102D5F]/[0.07] bg-white px-4 py-3.5 shadow-[0_18px_45px_rgba(16,45,95,.13)] sm:-bottom-7 sm:px-5 sm:py-4">

              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EAF7FC] text-[#2E91C8]">

                <CheckCircle2
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />

                <span className="pharmacy-check-ring absolute inset-0 rounded-[12px] border border-[#2E91C8]/20" />

              </span>

              <div className="min-w-0">

                <span className="block text-[11px] font-bold uppercase tracking-[1.3px] text-[#2E91C8] sm:text-[12px]">
                  In-House Support
                </span>

                <span className="mt-0.5 block text-[14px] font-semibold text-[#102D5F] sm:text-[15px] lg:text-[16px]">
                  Convenient Access to Prescribed Medicines
                </span>

              </div>

            </div>

          </div>

          {/* =====================================================
              3 HIGHLIGHTS
          ===================================================== */}
          <div className="relative mx-auto mt-14 max-w-[1100px] sm:mt-16">

            {/* CONNECTION LINE */}
            <div className="absolute left-[15%] right-[15%] top-[25px] hidden h-px bg-[#D7EAF2] md:block">

              <span className="pharmacy-flow absolute top-[-1px] h-[3px] w-[90px] rounded-full bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent" />

            </div>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.no}
                    className="pharmacy-item group relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 90}
                  >

                    {/* DESKTOP NODE */}
                    <div className="relative z-10 mb-4 hidden justify-center md:flex">

                      <span className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full border-[5px] border-white bg-[#EAF7FC] text-[#2E91C8] shadow-[0_5px_20px_rgba(16,45,95,.08)]">

                        <Icon
                          className="h-[18px] w-[18px]"
                          strokeWidth={1.6}
                        />

                        <span className="pharmacy-node-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/20" />

                      </span>

                    </div>

                    {/* CARD */}
                    <div className="relative overflow-hidden rounded-[20px] border border-[#102D5F]/[0.07] bg-white px-4 py-5 shadow-[0_10px_30px_rgba(16,45,95,.05)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#2E91C8]/20 group-hover:shadow-[0_18px_40px_rgba(16,45,95,.09)] sm:px-5">

                      <div className="flex items-center gap-3 md:block">

                        {/* MOBILE ICON */}
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-[#EAF7FC] text-[#2E91C8] md:hidden">
                          <Icon
                            className="h-[19px] w-[19px]"
                            strokeWidth={1.6}
                          />
                        </span>

                        <div className="min-w-0">

                          <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#2E91C8] sm:text-[12px]">
                            {item.no}
                          </span>

                          <h3 className="mt-1 text-[14px] font-semibold leading-[1.55] text-[#334155] sm:text-[15px] lg:text-[16px]">
                            {item.title}
                          </h3>

                        </div>

                      </div>

                      <span className="pharmacy-card-accent absolute bottom-0 left-0 h-[3px] w-0 bg-[#2E91C8]" />

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          CSS
      ===================================================== */}
      <style>{`
        .pharmacy-dots{
          background-image:
            radial-gradient(
              rgba(46,145,200,.14) 1px,
              transparent 1px
            );
          background-size:30px 30px;
          mask-image:linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 80%,
            transparent
          );
        }

        .pharmacy-image{
          transform:scale(1.02);
          transition:transform 1s cubic-bezier(.22,1,.36,1);
        }

        .pharmacy-image-wrap:hover .pharmacy-image{
          transform:scale(1.065);
        }

        .pharmacy-scan{
          left:-130px;
          animation:pharmacyScan 5s ease-in-out infinite;
        }

        .pharmacy-pulse{
          animation:pharmacyPulse 2.3s ease-out infinite;
        }

        .pharmacy-check-ring{
          animation:pharmacyPulse 2.7s ease-out infinite;
        }

        .pharmacy-float{
          animation:pharmacyFloat 4.5s ease-in-out infinite;
        }

        .pharmacy-flow{
          animation:pharmacyFlow 4.5s linear infinite;
        }

        .pharmacy-node-ring{
          animation:pharmacyNode 2.7s ease-out infinite;
        }

        .pharmacy-card-accent{
          transition:width .45s cubic-bezier(.22,1,.36,1);
        }

        .pharmacy-item:hover .pharmacy-card-accent{
          width:100%;
        }

        @keyframes pharmacyScan{
          0%{
            left:-130px;
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

        @keyframes pharmacyPulse{
          0%{
            transform:scale(.75);
            opacity:.6;
          }

          100%{
            transform:scale(1.65);
            opacity:0;
          }
        }

        @keyframes pharmacyFloat{
          0%,100%{
            translate:0 0;
          }

          50%{
            translate:0 -7px;
          }
        }

        @keyframes pharmacyFlow{
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
            left:calc(100% - 90px);
            opacity:0;
          }
        }

        @keyframes pharmacyNode{
          0%{
            transform:scale(.8);
            opacity:.55;
          }

          100%{
            transform:scale(1.6);
            opacity:0;
          }
        }

        @media(max-width:767px){
          .pharmacy-dots{
            mask-image:linear-gradient(
              to bottom,
              black,
              transparent 75%
            );
          }
        }

        @media(prefers-reduced-motion:reduce){
          .pharmacy-scan,
          .pharmacy-pulse,
          .pharmacy-check-ring,
          .pharmacy-float,
          .pharmacy-flow,
          .pharmacy-node-ring{
            animation:none!important;
          }

          .pharmacy-image{
            transform:none!important;
          }
        }
      `}</style>

    </section>
  );
};

export default PharmacyFacility;
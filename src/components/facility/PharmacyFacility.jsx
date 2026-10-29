import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  Check,
  MapPin,
  Pill,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";

const highlights = [
  {
    title: "Located within the hospital",
    icon: MapPin,
  },
  {
    title: "Convenient access to prescribed medicines",
    icon: Pill,
  },
  {
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
      offset: 60,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F7FBFD] py-12 sm:py-14 md:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_85%_25%,rgba(105,203,242,.12),transparent_28%),linear-gradient(180deg,#F7FBFD_0%,#FFFFFF_100%)]" />

      <div className="pharmacy-pattern pointer-events-none absolute inset-0 -z-20 opacity-[0.22]" />

      <div className="pharmacy-blob pointer-events-none absolute -left-[150px] top-[15%] -z-10 h-[320px] w-[320px] rounded-full bg-[#2E91C8]/[0.07] blur-[100px] sm:h-[380px] sm:w-[380px]" />

      <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-9 lg:grid-cols-[1.02fr_.98fr] lg:gap-14 xl:gap-16">

          {/* =====================================================
              LEFT - IMAGE
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-[650px] md:mx-0" data-aos="fade-right">

            {/* LARGE NUMBER */}
            <span className="pointer-events-none absolute -left-1 -top-6 z-0 text-[64px] font-black leading-none text-[#102D5F]/[0.045] sm:-top-8 sm:text-[90px] lg:-left-4 lg:text-[110px]">
              06
            </span>

            {/* IMAGE COMPOSITION */}
            <div className="relative z-10 pt-5 sm:pt-7 lg:pt-9">

              {/* BACK SHAPE */}
              <div className="absolute bottom-[-10px] right-[-5px] top-[60px] w-[88%] rounded-[22px] bg-[#102D5F] min-[360px]:right-[-8px] sm:bottom-[-14px] sm:right-[-14px] sm:rounded-[30px] lg:right-[-18px]" />

              {/* MAIN IMAGE */}
              <div className="pharmacy-image-wrap group relative h-[260px] w-full overflow-hidden rounded-[20px] bg-[#DCEAF0] shadow-[0_20px_55px_rgba(16,45,95,.14)] min-[360px]:h-[285px] min-[390px]:h-[310px] sm:h-[390px] sm:rounded-[28px] md:h-[400px] lg:h-[440px] xl:h-[470px]">

                <img
                  src="/g6.jpg"
                  alt="In-House Pharmacy at Vighnaharta Hospital"
                  loading="lazy"
                  decoding="async"
                  className="pharmacy-image absolute inset-0 h-full w-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden"
                    );
                  }}
                />

                {/* FALLBACK IF IMAGE PATH IS WRONG */}
                <div className="hidden absolute inset-0 z-[1] items-center justify-center bg-[#EAF7FC]">
                  <div className="px-5 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#2E91C8] shadow-md">
                      <Pill className="h-6 w-6" />
                    </span>

                    <p className="mt-3 text-[14px] font-semibold text-[#102D5F] sm:text-[15px]">
                      Pharmacy Image
                    </p>

                    <p className="mt-1 text-[12px] text-[#64748B]">
                      Add pharmacy.png inside public folder
                    </p>
                  </div>
                </div>

                {/* OVERLAYS */}
                <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-tr from-[#06182F]/55 via-transparent to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[45%] bg-gradient-to-t from-[#06182F]/75 to-transparent" />

                {/* MOVING LIGHT */}
                <span className="pharmacy-scan pointer-events-none absolute bottom-0 top-0 z-[3] w-[100px] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* FRAME CORNERS */}
                <span className="absolute left-4 top-4 z-[4] h-7 w-7 border-l-2 border-t-2 border-white/60 sm:h-9 sm:w-9" />
                <span className="absolute right-4 top-4 z-[4] h-7 w-7 border-r-2 border-t-2 border-white/60 sm:h-9 sm:w-9" />
                <span className="absolute bottom-4 left-4 z-[4] h-7 w-7 border-b-2 border-l-2 border-white/60 sm:h-9 sm:w-9" />
                <span className="absolute bottom-4 right-4 z-[4] h-7 w-7 border-b-2 border-r-2 border-white/60 sm:h-9 sm:w-9" />

                {/* IMAGE TEXT */}
                <div className="absolute bottom-5 left-5 right-5 z-[5] sm:bottom-6 sm:left-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-white/15 bg-white/10 text-[#69CBF2] backdrop-blur-md">
                      <Pill className="h-4 w-4" />
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#69CBF2] min-[360px]:text-[11px] sm:text-[12px]">
                      Medicines & Support
                    </span>
                  </div>

                  <span className="block max-w-[330px] text-[15px] font-semibold leading-[1.4] text-white min-[360px]:text-[16px] sm:text-[18px]">
                    Pharmacy Within the Hospital
                  </span>
                </div>
              </div>

              {/* FLOATING PANEL */}
              <div className="pharmacy-ticket relative z-30 mx-auto -mt-3 w-[calc(100%-24px)] max-w-[330px] overflow-hidden rounded-[17px] border border-[#102D5F]/[0.07] bg-white shadow-[0_16px_40px_rgba(16,45,95,.14)] min-[430px]:absolute min-[430px]:-bottom-7 min-[430px]:right-3 min-[430px]:mt-0 min-[430px]:w-[220px] sm:-right-4 sm:w-[235px]">

                <div className="flex items-center justify-between bg-[#102D5F] px-3.5 py-2.5 sm:px-4">
                  <div className="flex items-center gap-2">
                    <Pill className="h-4 w-4 shrink-0 text-[#69CBF2]" />

                    <span className="text-[10px] font-bold uppercase tracking-[1px] text-white sm:text-[11px]">
                      Pharmacy Support
                    </span>
                  </div>

                  <span className="relative h-2 w-2 shrink-0 rounded-full bg-[#69CBF2]">
                    <span className="pharmacy-status absolute inset-[-4px] rounded-full border border-[#69CBF2]/40" />
                  </span>
                </div>

                <div className="p-3.5 sm:p-4">
                  <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#2E91C8] sm:text-[12px]">
                    In-House Facility
                  </span>

                  <div className="mt-3 space-y-2">
                    <div className="h-[5px] w-full overflow-hidden rounded-full bg-[#EAF3F7]">
                      <span className="pharmacy-line block h-full rounded-full bg-[#69CBF2]" />
                    </div>

                    <div className="h-[5px] w-[78%] rounded-full bg-[#EAF3F7]" />

                    <div className="h-[5px] w-[58%] rounded-full bg-[#EAF3F7]" />
                  </div>

                  <div className="mt-3 flex items-center gap-2 border-t border-[#102D5F]/[0.07] pt-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-[12px] font-semibold leading-[1.4] text-[#102D5F] sm:text-[13px]">
                      Prescribed Medicines
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT - CONTENT
          ===================================================== */}
          <div className="relative pt-1 min-[430px]:pt-7 sm:pt-9 md:pt-0">

            {/* LABEL */}
            <div className="mb-4 flex items-center gap-2.5" data-aos="fade-left">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#EAF7FC] text-[#2E91C8]">
                <Pill className="h-[18px] w-[18px]" strokeWidth={1.6} />

                <span className="pharmacy-icon-ring absolute inset-0 rounded-[11px] border border-[#2E91C8]/20" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[1.7px] text-[#2E91C8] sm:text-[12px] sm:tracking-[2px]">
                Medicines & Support
              </span>

              <span className="h-px min-w-4 flex-1 bg-gradient-to-r from-[#2E91C8]/50 to-transparent sm:max-w-12" />
            </div>

            {/* HEADING */}
            <div data-aos="fade-up" data-aos-delay="60">
              <h2 className="text-[32px] font-bold leading-[1.05] tracking-[-.8px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
                In-House Pharmacy
              </h2>

              <h3 className="mt-3 max-w-[580px] text-[16px] font-semibold leading-[1.5] text-[#2E91C8] sm:text-[17px] lg:text-[19px]">
                Prescribed Medicines Within the Hospital
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]" data-aos="fade-up" data-aos-delay="110">
              The in-house pharmacy provides convenient access to prescribed
              medicines within the hospital, helping patients and families
              avoid unnecessary travel during treatment.
            </p>

            {/* HIGHLIGHTS */}
            <div className="relative mt-6 overflow-hidden rounded-[20px] border border-[#102D5F]/[0.07] bg-white shadow-[0_14px_40px_rgba(16,45,95,.06)] sm:mt-7 sm:rounded-[22px]" data-aos="fade-up" data-aos-delay="160">

              <div className="h-[3px] w-full bg-gradient-to-r from-[#102D5F] via-[#2E91C8] to-[#69CBF2]" />

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className={`pharmacy-highlight group relative flex items-center gap-3 px-3.5 py-4 min-[360px]:gap-4 min-[360px]:px-4 sm:px-5 sm:py-[18px] ${index !== highlights.length - 1 ? "border-b border-[#102D5F]/[0.07]" : ""}`}>

                    <span className="absolute right-3 text-[25px] font-black leading-none text-[#102D5F]/[0.04] sm:right-5 sm:text-[34px]">
                      0{index + 1}
                    </span>

                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white min-[360px]:h-11 min-[360px]:w-11 min-[360px]:rounded-[12px]">
                      <Icon className="h-[18px] w-[18px] min-[360px]:h-[19px] min-[360px]:w-[19px]" strokeWidth={1.6} />
                    </span>

                    <span className="relative z-10 max-w-[430px] pr-6 text-[14px] font-semibold leading-[1.55] text-[#334155] sm:pr-8 sm:text-[15px] lg:text-[16px]">
                      {item.title}
                    </span>

                    <span className="pharmacy-highlight-fill pointer-events-none absolute bottom-0 left-0 top-0 bg-[#F4FAFD]" />
                  </div>
                );
              })}
            </div>

            {/* BOTTOM */}
            <div className="mt-6 flex items-center gap-3" data-aos="fade-up" data-aos-delay="210">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#102D5F] text-white">
                <Stethoscope className="h-4 w-4" />
              </span>

              <div className="h-px min-w-3 flex-1 bg-gradient-to-r from-[#2E91C8]/30 to-transparent" />

              <span className="text-right text-[10px] font-bold uppercase tracking-[1.2px] text-[#94A3B8] min-[360px]:text-[11px] sm:text-[12px] sm:tracking-[1.4px]">
                Hospital Support Facility
              </span>

              <ArrowRight className="h-4 w-4 shrink-0 text-[#2E91C8]" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pharmacy-pattern{
          background-image:radial-gradient(rgba(46,145,200,.14) 1px,transparent 1px);
          background-size:30px 30px;
          mask-image:linear-gradient(to right,black,transparent 75%);
        }

        .pharmacy-blob{
          animation:pharmacyBlob 8s ease-in-out infinite;
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

        .pharmacy-ticket{
          animation:pharmacyFloat 4.5s ease-in-out infinite;
        }

        .pharmacy-status{
          animation:pharmacyPulse 2s ease-out infinite;
        }

        .pharmacy-icon-ring{
          animation:pharmacyIconPulse 2.7s ease-out infinite;
        }

        .pharmacy-line{
          width:0;
          animation:pharmacyLine 3s ease-in-out infinite;
        }

        .pharmacy-highlight{
          isolation:isolate;
        }

        .pharmacy-highlight-fill{
          z-index:0;
          width:0;
          transition:width .45s cubic-bezier(.22,1,.36,1);
        }

        .pharmacy-highlight:hover .pharmacy-highlight-fill{
          width:100%;
        }

        @keyframes pharmacyBlob{
          0%,100%{transform:translateY(0) scale(1);}
          50%{transform:translateY(-18px) scale(1.06);}
        }

        @keyframes pharmacyScan{
          0%{left:-130px;opacity:0;}
          15%{opacity:1;}
          75%{opacity:1;}
          100%{left:120%;opacity:0;}
        }

        @keyframes pharmacyFloat{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-6px);}
        }

        @keyframes pharmacyPulse{
          0%{transform:scale(.7);opacity:.7;}
          100%{transform:scale(1.8);opacity:0;}
        }

        @keyframes pharmacyIconPulse{
          0%{transform:scale(.8);opacity:.5;}
          100%{transform:scale(1.55);opacity:0;}
        }

        @keyframes pharmacyLine{
          0%{width:0;opacity:.4;}
          55%{width:100%;opacity:1;}
          100%{width:100%;opacity:.35;}
        }

        @media(max-width:767px){
          .pharmacy-pattern{
            mask-image:linear-gradient(to bottom,black,transparent 70%);
          }
        }

        @media(max-width:359px){
          .pharmacy-ticket{
            max-width:280px;
          }
        }

        @media(prefers-reduced-motion:reduce){
          .pharmacy-blob,
          .pharmacy-scan,
          .pharmacy-ticket,
          .pharmacy-status,
          .pharmacy-icon-ring,
          .pharmacy-line{
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
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Pill,
  ShieldCheck,
  Stethoscope,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "In-House Pharmacy",
    subtitle: "Medicines Within the Hospital",
    description: "Convenient access to prescribed medicines within the hospital.",
    icon: Pill,
  },
  {
    number: "02",
    title: "Operation Theatre",
    subtitle: "Surgical Infrastructure",
    description: "Equipped surgical infrastructure for applicable procedures.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Cashless Treatment Facility",
    subtitle: "Insurance & TPA Support",
    description: "Support for eligible patients under applicable insurance and TPA arrangements.",
    icon: ShieldCheck,
  },
];

const HospitalSupportServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="support-section relative isolate overflow-hidden bg-[#F7FBFD] py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20">

      {/* BACKGROUND */}
      <div className="support-blob-one pointer-events-none absolute -left-[170px] top-[5%] -z-10 h-[400px] w-[400px] rounded-full bg-[#DDF3FA]/70 blur-[110px]" />
      <div className="support-blob-two pointer-events-none absolute -right-[190px] bottom-[-100px] -z-10 h-[450px] w-[450px] rounded-full bg-[#E5F7FC] blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] [background-image:radial-gradient(#102D5F_1px,transparent_1px)] [background-size:25px_25px]" />

      <span className="support-plus support-plus-one">+</span>
      <span className="support-plus support-plus-two">+</span>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">

          <div data-aos="fade-right">
            <div className="mb-3 flex items-center gap-3">
              <span className="support-building flex h-9 w-9 items-center justify-center rounded-full bg-[#E1F3FA] text-[#2E91C8]">
                <Building2 className="h-[17px] w-[17px]" strokeWidth={1.8} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#2E91C8] sm:text-[11px]">
                Patient Support
              </span>

              <span className="support-heading-line h-[2px] w-9 rounded-full bg-[#2E91C8]" />
            </div>

            <h2 className="m-0 max-w-[650px] text-[29px] font-bold leading-[1.1] tracking-[-0.9px] text-[#102D5F] min-[360px]:text-[32px] sm:text-[38px] md:text-[42px] lg:text-[44px] xl:text-[48px]">
              Essential Support Services{" "}
              <span className="text-[#2E91C8]">
                Within the Hospital
              </span>
            </h2>
          </div>

          <div data-aos="fade-left" data-aos-delay="120">
            <p className="m-0 max-w-[650px] text-[12px] leading-[1.8] text-[#637987] sm:text-[14px] md:text-[15px]">
              Along with medical and diagnostic care, essential support facilities are available within the hospital to make treatment and hospital visits more convenient for patients and their families.
            </p>
          </div>
        </div>

        {/* DESKTOP UNIQUE FLOW */}
        <div className="relative mt-12 hidden min-h-[430px] lg:block xl:mt-14">

          {/* BACKGROUND FLOW PATH */}
          <svg className="pointer-events-none absolute left-0 top-[40px] h-[270px] w-full overflow-visible" viewBox="0 0 1200 270" fill="none" preserveAspectRatio="none">
            <path d="M90 155 C250 155 260 65 430 65 C600 65 600 205 770 205 C930 205 950 105 1110 105" stroke="#D4EAF2" strokeWidth="2" strokeDasharray="7 8" />

            <path className="support-flow-path" d="M90 155 C250 155 260 65 430 65 C600 65 600 205 770 205 C930 205 950 105 1110 105" stroke="url(#supportGradient)" strokeWidth="3" strokeLinecap="round" />

            <defs>
              <linearGradient id="supportGradient" x1="90" y1="0" x2="1110" y2="0">
                <stop stopColor="#2E91C8" />
                <stop offset="0.5" stopColor="#69CBF2" />
                <stop offset="1" stopColor="#102D5F" />
              </linearGradient>
            </defs>
          </svg>

          {/* MOVING DOT */}
          <div className="support-traveller pointer-events-none absolute left-[7%] top-[188px] z-10 h-3 w-3 rounded-full bg-[#2E91C8] shadow-[0_0_0_7px_rgba(46,145,200,0.12)]" />

          <div className="relative grid grid-cols-3 gap-10">

            {services.map((service, index) => {
              const Icon = service.icon;

              const positions = [
                "pt-[135px]",
                "pt-[45px]",
                "pt-[85px]",
              ];

              return (
                <div key={service.title} className={positions[index]} data-aos="fade-up" data-aos-delay={180 + index * 180}>

                  <div className="support-service group relative mx-auto max-w-[330px]">

                    {/* NODE */}
                    <div className="support-node relative z-20 mx-auto mb-5 flex h-[78px] w-[78px] items-center justify-center rounded-full border-[7px] border-[#F7FBFD] bg-[#102D5F] text-white shadow-[0_12px_35px_rgba(16,45,95,0.16)] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#2E91C8]">
                      <Icon className="h-[26px] w-[26px]" strokeWidth={1.65} />

                      <span className="support-node-ring absolute inset-[-6px] rounded-full border border-[#2E91C8]/25" />
                    </div>

                    {/* CONTENT */}
                    <div className="support-content relative overflow-hidden rounded-[22px] border border-[#DCEBF1] bg-white/90 p-6 text-center shadow-[0_15px_45px_rgba(16,45,95,0.055)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#C3E2ED] group-hover:shadow-[0_22px_55px_rgba(16,45,95,0.1)]">

                      <span className="absolute right-4 top-2 text-[46px] font-black leading-none text-[#102D5F]/[0.035]">
                        {service.number}
                      </span>

                      <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#2E91C8]">
                        Service {service.number}
                      </span>

                      <h3 className="m-0 mt-2 text-[20px] font-bold leading-[1.25] text-[#102D5F] xl:text-[22px]">
                        {service.title}
                      </h3>

                      <p className="m-0 mt-1.5 text-[11px] font-bold text-[#2E91C8] xl:text-[12px]">
                        {service.subtitle}
                      </p>

                      <div className="support-accent mx-auto my-3 h-[2px] w-8 rounded-full bg-[#C6E4EF]" />

                      <p className="m-0 text-[12px] leading-[1.7] text-[#687D89] xl:text-[13px]">
                        {service.description}
                      </p>

                      <div className="support-shine pointer-events-none absolute inset-y-[-30%] -left-[70%] w-[30%] rotate-[14deg] bg-gradient-to-r from-transparent via-[#69CBF2]/15 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE + TABLET FLOW */}
        <div className="relative mt-9 lg:hidden">

          <div className="absolute bottom-[45px] left-[25px] top-[25px] w-px overflow-hidden bg-[#D3E8F0] min-[360px]:left-[27px]">
            <span className="support-mobile-flow absolute left-[-1px] top-0 h-[90px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />
          </div>

          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div key={service.title} className="relative pl-[66px] min-[360px]:pl-[72px]" data-aos="fade-left" data-aos-delay={index * 120}>

                  <div className="support-node absolute left-0 top-5 z-20 flex h-[51px] w-[51px] items-center justify-center rounded-full border-[5px] border-[#F7FBFD] bg-[#102D5F] text-white shadow-[0_8px_25px_rgba(16,45,95,0.14)] min-[360px]:h-[55px] min-[360px]:w-[55px]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                    <span className="support-node-ring absolute inset-[-4px] rounded-full border border-[#2E91C8]/25" />
                  </div>

                  <div className="support-content group relative overflow-hidden rounded-[18px] border border-[#DCEBF1] bg-white p-4 shadow-[0_10px_30px_rgba(16,45,95,0.05)] sm:p-5">

                    <span className="absolute right-3 top-2 text-[35px] font-black leading-none text-[#102D5F]/[0.035]">
                      {service.number}
                    </span>

                    <span className="relative z-10 text-[8px] font-bold uppercase tracking-[1.4px] text-[#2E91C8]">
                      Service {service.number}
                    </span>

                    <h3 className="relative z-10 m-0 mt-1 text-[16px] font-bold text-[#102D5F] sm:text-[18px]">
                      {service.title}
                    </h3>

                    <p className="relative z-10 m-0 mt-1 text-[10px] font-bold text-[#2E91C8] sm:text-[11px]">
                      {service.subtitle}
                    </p>

                    <p className="relative z-10 m-0 mt-2.5 text-[11px] leading-[1.7] text-[#687D89] sm:text-[12px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CASHLESS INFORMATION */}
        <div className="mt-9 grid overflow-hidden rounded-[20px] border border-[#D9E9EF] bg-white shadow-[0_14px_45px_rgba(16,45,95,0.05)] sm:mt-11 lg:grid-cols-[1fr_auto] lg:items-stretch" data-aos="fade-up" data-aos-delay="150">

          <div className="flex items-start gap-4 p-5 sm:p-6 lg:px-7">

            <div className="cashless-icon relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#E8F6FC] text-[#2E91C8]">
              <BadgeCheck className="h-5 w-5" strokeWidth={1.8} />
            </div>

            <div>
              <span className="block text-[9px] font-bold uppercase tracking-[1.3px] text-[#2E91C8] sm:text-[10px]">
                Cashless Treatment Information
              </span>

              <p className="m-0 mt-1.5 max-w-[820px] text-[11px] leading-[1.7] text-[#687D89] sm:text-[12px] md:text-[13px]">
                Cashless treatment is subject to policy coverage, insurer/TPA terms, eligibility and authorization.
              </p>

              <div className="mt-2.5 flex items-start gap-2">
                <Check className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[#2E91C8]" strokeWidth={2} />
                <span className="text-[10px] leading-[1.6] text-[#8A9AA4] sm:text-[11px]">
                  Insurance / TPA availability should be confirmed with the hospital before treatment.
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center border-t border-[#D9E9EF] bg-[#F7FBFD] p-5 lg:min-w-[270px] lg:border-l lg:border-t-0 lg:p-6">

            <Link to="/contact" className="contact-support-btn group relative inline-flex min-h-[48px] w-full items-center justify-between gap-3 overflow-hidden rounded-full bg-[#102D5F] px-5 py-2.5 text-[12px] font-bold text-white transition-all duration-300 sm:text-[13px]">

              <span className="relative z-10">
                Contact Hospital
              </span>

              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </span>

              <span className="contact-support-fill absolute inset-0 -translate-x-full bg-[#2E91C8] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .support-blob-one{animation:supportBlobOne 9s ease-in-out infinite alternate}
        .support-blob-two{animation:supportBlobTwo 11s ease-in-out infinite alternate}
        .support-building{animation:supportBuilding 3s ease-in-out infinite}
        .support-heading-line{transform-origin:left;animation:supportLine 3s ease-in-out infinite}
        .support-node-ring{animation:supportRing 2.6s ease-out infinite}
        .support-service:nth-child(2) .support-node-ring{animation-delay:.7s}
        .support-service:nth-child(3) .support-node-ring{animation-delay:1.4s}
        .support-service:hover .support-accent{width:55px;background:#2E91C8}
        .support-accent{transition:all .45s ease}
        .support-service:hover .support-shine{left:140%}
        .support-shine{transition:left .9s cubic-bezier(.22,1,.36,1)}
        .support-mobile-flow{animation:supportMobileFlow 3.5s linear infinite}
        .cashless-icon{animation:cashlessFloat 3s ease-in-out infinite}
        .support-plus{position:absolute;pointer-events:none;color:rgba(46,145,200,.08);font-weight:300;line-height:1;animation:supportPlus 5s ease-in-out infinite}
        .support-plus-one{right:5%;top:8%;font-size:70px}
        .support-plus-two{left:5%;bottom:12%;font-size:35px;animation-delay:1.5s}

        .support-flow-path{
          stroke-dasharray:1600;
          stroke-dashoffset:1600;
          animation:supportDraw 3s cubic-bezier(.22,1,.36,1) forwards;
        }

        .support-traveller{
          animation:supportTraveller 7s 2.4s ease-in-out infinite;
        }

        @keyframes supportDraw{
          to{stroke-dashoffset:0}
        }

        @keyframes supportTraveller{
          0%{left:7%;top:188px;opacity:0}
          5%{opacity:1}
          30%{left:34%;top:98px}
          55%{left:61%;top:238px}
          82%{left:84%;top:138px}
          95%{opacity:1}
          100%{left:92%;top:138px;opacity:0}
        }

        @keyframes supportRing{
          0%{transform:scale(.8);opacity:.65}
          100%{transform:scale(1.55);opacity:0}
        }

        @keyframes supportMobileFlow{
          0%{top:-10%;opacity:0}
          15%{opacity:1}
          85%{opacity:1}
          100%{top:100%;opacity:0}
        }

        @keyframes supportBlobOne{
          to{transform:translate3d(55px,30px,0) scale(1.08)}
        }

        @keyframes supportBlobTwo{
          to{transform:translate3d(-45px,-30px,0) scale(1.08)}
        }

        @keyframes supportBuilding{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-4px)}
        }

        @keyframes supportLine{
          0%,100%{transform:scaleX(1)}
          50%{transform:scaleX(.6)}
        }

        @keyframes cashlessFloat{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-4px)}
        }

        @keyframes supportPlus{
          0%,100%{transform:translateY(0) rotate(0)}
          50%{transform:translateY(-13px) rotate(12deg)}
        }

        @media(max-width:767px){
          .support-blob-one,.support-blob-two{animation:none}
        }

        @media(prefers-reduced-motion:reduce){
          .support-blob-one,.support-blob-two,.support-building,.support-heading-line,.support-node-ring,.support-mobile-flow,.cashless-icon,.support-plus,.support-flow-path,.support-traveller{animation:none!important}
          .support-flow-path{stroke-dashoffset:0!important}
        }
      `}</style>
    </section>
  );
};

export default HospitalSupportServices;
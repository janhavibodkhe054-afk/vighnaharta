import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Droplets,
  HeartPulse,
  Thermometer,
  Activity,
  ClipboardPlus,
} from "lucide-react";

const careAreas = [
  { no: "01", title: "Diabetes Management", icon: Droplets },
  { no: "02", title: "Hypertension Management", icon: HeartPulse },
  { no: "03", title: "Fever & Infections", icon: Thermometer },
  { no: "04", title: "Acute Medical Illnesses", icon: Activity },
  { no: "05", title: "Chronic Medical Conditions", icon: ClipboardPlus },
];

const MedicineKeyAreas = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-14 sm:py-16 lg:py-20">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[5%] h-[430px] w-[430px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[-100px] h-[450px] w-[450px] rounded-full bg-[#2E91C8]/[0.07] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#102D5F 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[780px] text-center">

          <div data-aos="fade-up" className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#2E91C8]" />

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              Key Areas of Care
            </span>

            <span className="h-px w-7 bg-[#2E91C8]" />
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="text-[32px] font-bold leading-[1.13] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]"
          >
            Medical Care Across{" "}
            <span className="text-[#2E91C8]">
              Everyday Health Needs
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="130"
            className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]"
          >
            General Medicine provides evaluation and management across common
            medical conditions and ongoing health concerns.
          </p>
        </div>

        {/* =====================================================
            DESKTOP HEALTH MONITOR
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="relative mx-auto mt-14 hidden max-w-[1120px] overflow-hidden rounded-[28px] border border-[#D8EAF2] bg-white shadow-[0_20px_60px_rgba(16,45,95,.07)] md:block"
        >

          {/* MONITOR HEADER */}
          <div className="flex items-center justify-between border-b border-[#E2EEF3] px-7 py-4">

            <div className="flex items-center gap-3">
              <div className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#102D5F] text-white">
                <HeartPulse size={16} strokeWidth={1.8} />

                <span className="monitor-pulse absolute inset-[-4px] rounded-full border border-[#2E91C8]/25" />
              </div>

              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-[#2E91C8]">
                  General Medicine
                </span>

                <span className="mt-[2px] block text-[12px] font-semibold text-[#102D5F]">
                  Key Areas of Care
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2E91C8] opacity-30" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#2E91C8]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[1.3px] text-[#8A9BAC]">
                Medical Care
              </span>
            </div>
          </div>

          {/* MONITOR BODY */}
          <div className="relative px-7 pb-9 pt-10 lg:px-10">

            {/* ECG BACKGROUND */}
            <div className="pointer-events-none absolute inset-x-0 top-[70px] h-[95px] overflow-hidden opacity-[0.055]">
              <svg
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <path
                  d="M0 52 H130 L155 52 L175 18 L200 82 L225 35 L250 52 H390 L415 52 L435 18 L460 82 L485 35 L510 52 H650 L675 52 L695 18 L720 82 L745 35 L770 52 H910 L935 52 L955 18 L980 82 L1005 35 L1030 52 H1200"
                  fill="none"
                  stroke="#2E91C8"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* CONNECTION LINE */}
            <div className="absolute left-[10%] right-[10%] top-[83px] h-px bg-[#C5E1EC]" />

            {/* MOVING MONITOR SIGNAL */}
            <div className="health-monitor-flow absolute left-[10%] top-[81px] z-10 h-[5px] w-[85px] rounded-full bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent shadow-[0_0_12px_rgba(46,145,200,.45)]" />

            {/* 5 CARE POINTS */}
            <div className="relative grid grid-cols-5 gap-3 lg:gap-5">

              {careAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    className="group relative text-center"
                  >

                    {/* MONITOR NODE */}
                    <div className="relative mx-auto flex h-[88px] w-[88px] items-center justify-center">

                      <span className="absolute inset-0 rounded-full border border-[#C9E3ED] transition-all duration-500 group-hover:scale-110 group-hover:border-[#2E91C8]/40" />

                      <span className="absolute inset-[8px] rounded-full border border-dashed border-[#C1DFEA] transition-transform duration-700 group-hover:rotate-45" />

                      <div className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#F0F9FC] text-[#2E91C8] shadow-[0_8px_25px_rgba(16,45,95,.07)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#102D5F] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>

                      {/* ACTIVE DOT */}
                      <span className="absolute -bottom-[3px] left-1/2 z-20 h-[8px] w-[8px] -translate-x-1/2 rounded-full border-2 border-white bg-[#2E91C8]" />

                    </div>

                    {/* NUMBER */}
                    <div className="mt-5 flex items-center justify-center gap-2">
                      <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">
                        {area.no}
                      </span>

                      <span className="h-px w-5 bg-[#BEDDE9]" />
                    </div>

                    {/* TITLE */}
                    <h3 className="mx-auto mt-2.5 max-w-[180px] text-[14px] font-bold leading-[1.5] text-[#102D5F] lg:text-[16px]">
                      {area.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* LOWER MONITOR LINE */}
            <div className="mt-9 flex items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6E1EC]" />

              <div className="flex items-center gap-2">
                <Activity
                  size={14}
                  strokeWidth={1.8}
                  className="text-[#2E91C8]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#8497A9]">
                  Evaluation • Management • Ongoing Care
                </span>
              </div>

              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6E1EC]" />
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE HEALTH MONITOR
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="relative mt-10 overflow-hidden rounded-[22px] border border-[#D8EAF2] bg-white shadow-[0_15px_45px_rgba(16,45,95,.06)] md:hidden"
        >

          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between border-b border-[#E2EEF3] px-4 py-4 sm:px-5">

            <div className="flex items-center gap-3">
              <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#102D5F] text-white">
                <HeartPulse size={16} strokeWidth={1.8} />
              </div>

              <div>
                <span className="block text-[9px] font-bold uppercase tracking-[1.4px] text-[#2E91C8]">
                  General Medicine
                </span>

                <span className="mt-[1px] block text-[12px] font-semibold text-[#102D5F]">
                  Care Monitor
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2E91C8] opacity-30" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#2E91C8]" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[1px] text-[#94A3B8]">
                Care
              </span>
            </div>
          </div>

          {/* MOBILE BODY */}
          <div className="relative px-4 py-5 sm:px-5">

            {/* VERTICAL LINE */}
            <div className="absolute bottom-[36px] left-[42px] top-[45px] w-px bg-[#C7E2ED]">

              <span className="mobile-health-flow absolute left-[-1px] top-0 h-[70px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />

            </div>

            <div className="space-y-1">

              {careAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 60}
                    className="group relative flex min-h-[85px] items-center gap-4"
                  >

                    {/* ICON */}
                    <div className="relative z-10 flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-[#EFF9FC] text-[#2E91C8] shadow-[0_7px_22px_rgba(16,45,95,.09)] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1 border-b border-[#E0EDF2] py-4">

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[1.4px] text-[#2E91C8]">
                          {area.no}
                        </span>

                        <span className="h-px w-5 bg-[#BEDDE9]" />

                        <span className="text-[9px] font-bold uppercase tracking-[1px] text-[#94A3B8]">
                          Medical Care
                        </span>
                      </div>

                      <h3 className="mt-1.5 text-[14px] font-bold leading-[1.5] text-[#102D5F] sm:text-[15px]">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE ECG */}
            <div className="mt-5 h-[35px] overflow-hidden opacity-40">
              <svg
                viewBox="0 0 400 40"
                className="medicine-mobile-ecg h-full w-[200%]"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 21 H45 L55 21 L62 7 L70 34 L80 15 L90 21 H140 L150 21 L158 7 L167 34 L177 15 L187 21 H235 L245 21 L253 7 L262 34 L272 15 L282 21 H330 L340 21 L348 7 L357 34 L367 15 L377 21 H400"
                  fill="none"
                  stroke="#2E91C8"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes healthMonitorFlow {
          0% {
            left: 8%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            left: 84%;
            opacity: 0;
          }
        }

        @keyframes monitorPulse {
          0% {
            transform: scale(.85);
            opacity: .55;
          }

          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @keyframes mobileHealthFlow {
          0% {
            transform: translateY(-60px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            transform: translateY(330px);
            opacity: 0;
          }
        }

        @keyframes mobileECG {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .health-monitor-flow {
          animation: healthMonitorFlow 6s ease-in-out infinite;
        }

        .monitor-pulse {
          animation: monitorPulse 2.3s ease-out infinite;
        }

        .mobile-health-flow {
          animation: mobileHealthFlow 4.5s linear infinite;
        }

        .medicine-mobile-ecg {
          animation: mobileECG 6s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .health-monitor-flow,
          .monitor-pulse,
          .mobile-health-flow,
          .medicine-mobile-ecg {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MedicineKeyAreas;
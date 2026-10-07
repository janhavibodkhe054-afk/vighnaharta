import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Activity,
  HeartPulse,
  Thermometer,
  ArrowDown,
  Check,
} from "lucide-react";

const acuteCare = [
  "Fever / infection-related concerns",
  "Sudden medical illness",
  "Appropriate medical evaluation",
];

const ongoingCare = [
  "Diabetes management",
  "Hypertension management",
  "Chronic medical condition follow-up",
];

const AcuteChronicCare = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[-140px] h-[450px] w-[450px] rounded-full bg-[#2E91C8]/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[790px] text-center">

          <div data-aos="fade-up" className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#2E91C8]" />

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              Acute & Chronic Care
            </span>

            <span className="h-px w-7 bg-[#2E91C8]" />
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="text-[32px] font-bold leading-[1.13] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]"
          >
            Care for Immediate &{" "}
            <span className="text-[#2E91C8]">
              Ongoing Health Concerns
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="130"
            className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]"
          >
            General Medicine supports appropriate evaluation and management
            for acute medical concerns as well as ongoing health conditions.
          </p>
        </div>

        {/* =====================================================
            SPLIT SCREEN
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="relative mx-auto mt-11 max-w-[1120px] overflow-hidden rounded-[26px] border border-[#D9EAF2] shadow-[0_24px_65px_rgba(16,45,95,.09)] sm:mt-14 lg:rounded-[30px]"
        >

          <div className="grid md:grid-cols-2">

            {/* =================================================
                ACUTE MEDICAL CARE
            ================================================= */}
            <div className="group relative overflow-hidden bg-[#EFF9FC] px-5 py-8 sm:px-7 sm:py-9 lg:min-h-[430px] lg:px-10 lg:py-11">

              {/* BACKGROUND GRAPH */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                <svg
                  viewBox="0 0 600 220"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-0 h-[55%] w-full"
                >
                  <path
                    d="M0 125 H70 L95 125 L115 72 L140 175 L170 100 L195 125 H270 L295 125 L320 60 L345 180 L375 95 L400 125 H480 L505 125 L530 75 L555 160 L580 125 H600"
                    fill="none"
                    stroke="#2E91C8"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              {/* NUMBER */}
              <span className="pointer-events-none absolute -right-2 -top-6 text-[120px] font-black leading-none text-[#102D5F]/[0.025] sm:text-[150px]">
                01
              </span>

              <div className="relative z-10">

                {/* ICON */}
                <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-white text-[#2E91C8] shadow-[0_10px_30px_rgba(16,45,95,.08)]">
                  <Activity size={25} strokeWidth={1.7} />

                  <span className="acute-pulse absolute inset-[-5px] rounded-[22px] border border-[#2E91C8]/20" />
                </div>

                {/* LABEL */}
                <span className="mt-6 block text-[10px] font-bold uppercase tracking-[1.8px] text-[#2E91C8] sm:text-[11px]">
                  Immediate Medical Concerns
                </span>

                {/* TITLE */}
                <h3 className="mt-2 text-[25px] font-bold tracking-[-0.5px] text-[#102D5F] sm:text-[29px] lg:text-[32px]">
                  Acute Medical Care
                </h3>

                {/* DIVIDER */}
                <div className="my-6 flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#2E91C8]" />
                  <span className="h-px flex-1 bg-gradient-to-r from-[#A8D7E8] to-transparent" />
                </div>

                {/* POINTS */}
                <div className="space-y-4">
                  {acuteCare.map((item, index) => (
                    <div
                      key={item}
                      data-aos="fade-right"
                      data-aos-delay={170 + index * 70}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#CDE5EF] bg-white text-[#2E91C8]">
                        <Check size={14} strokeWidth={2.2} />
                      </span>

                      <span className="text-[14px] font-semibold leading-[1.6] text-[#4F6275] sm:text-[15px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTIVE SIGNAL */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden bg-[#DDEEF5]">
                <span className="acute-signal absolute inset-y-0 w-[100px] bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent" />
              </div>
            </div>

            {/* =================================================
                ONGOING MEDICAL CARE
            ================================================= */}
            <div className="group relative overflow-hidden bg-[#071B3A] px-5 py-8 sm:px-7 sm:py-9 lg:min-h-[430px] lg:px-10 lg:py-11">

              {/* GLOWS */}
              <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-[270px] w-[270px] rounded-full bg-[#2E91C8]/15 blur-[75px]" />

              <div className="pointer-events-none absolute -bottom-[130px] -left-[100px] h-[280px] w-[280px] rounded-full border border-white/[0.04]" />

              {/* DOT GRID */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* NUMBER */}
              <span className="pointer-events-none absolute -right-2 -top-6 text-[120px] font-black leading-none text-white/[0.025] sm:text-[150px]">
                02
              </span>

              <div className="relative z-10">

                {/* ICON */}
                <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border border-[#69CBF2]/15 bg-[#69CBF2]/10 text-[#69CBF2]">
                  <HeartPulse size={25} strokeWidth={1.7} />

                  <span className="ongoing-pulse absolute inset-[-5px] rounded-[22px] border border-[#69CBF2]/20" />
                </div>

                {/* LABEL */}
                <span className="mt-6 block text-[10px] font-bold uppercase tracking-[1.8px] text-[#69CBF2] sm:text-[11px]">
                  Ongoing Health Management
                </span>

                {/* TITLE */}
                <h3 className="mt-2 text-[25px] font-bold tracking-[-0.5px] text-white sm:text-[29px] lg:text-[32px]">
                  Ongoing Medical Care
                </h3>

                {/* DIVIDER */}
                <div className="my-6 flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#69CBF2]" />
                  <span className="h-px flex-1 bg-gradient-to-r from-[#69CBF2]/40 to-transparent" />
                </div>

                {/* POINTS */}
                <div className="space-y-4">
                  {ongoingCare.map((item, index) => (
                    <div
                      key={item}
                      data-aos="fade-left"
                      data-aos-delay={170 + index * 70}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#69CBF2]/20 bg-[#69CBF2]/10 text-[#69CBF2]">
                        <Check size={14} strokeWidth={2.2} />
                      </span>

                      <span className="text-[14px] font-semibold leading-[1.6] text-[#D5E2EB] sm:text-[15px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTIVE SIGNAL */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden bg-white/[0.05]">
                <span className="ongoing-signal absolute inset-y-0 w-[100px] bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent" />
              </div>
            </div>
          </div>

          {/* CENTER DIVIDER NODE - DESKTOP */}
          <div className="absolute left-1/2 top-1/2 z-30 hidden h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-white bg-[#2E91C8] text-white shadow-[0_10px_30px_rgba(16,45,95,.2)] md:flex">
            <HeartPulse size={21} strokeWidth={1.8} />

            <span className="center-pulse absolute inset-[-5px] rounded-full border border-[#2E91C8]/25" />
          </div>
        </div>

        {/* =====================================================
            BOTTOM CARE FLOW
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-8 max-w-[780px]"
        >
          <div className="flex flex-col items-center text-center">

            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#D4E8F0] bg-white text-[#2E91C8] shadow-[0_6px_20px_rgba(16,45,95,.06)]">
              <ArrowDown size={15} />
            </div>

            <span className="h-5 w-px bg-[#C6E1EC]" />

            <div className="inline-flex items-center gap-3 rounded-full border border-[#D8EAF2] bg-[#F7FBFD] px-4 py-2.5 sm:px-5">
              <Thermometer
                size={14}
                strokeWidth={1.8}
                className="text-[#2E91C8]"
              />

              <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#66798B] sm:text-[12px]">
                Appropriate Care Based on Medical Evaluation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes carePulse {
          0% {
            transform: scale(.85);
            opacity: .55;
          }

          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes acuteSignal {
          0% {
            left: -100px;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes ongoingSignal {
          0% {
            right: -100px;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            right: 100%;
            opacity: 0;
          }
        }

        .acute-pulse,
        .ongoing-pulse,
        .center-pulse {
          animation: carePulse 2.4s ease-out infinite;
        }

        .acute-signal {
          animation: acuteSignal 4.5s ease-in-out infinite;
        }

        .ongoing-signal {
          animation: ongoingSignal 4.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .acute-pulse,
          .ongoing-pulse,
          .center-pulse,
          .acute-signal,
          .ongoing-signal {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AcuteChronicCare;
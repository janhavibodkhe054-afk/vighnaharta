import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MessageCircle,
  ClipboardPlus,
  FileCheck2,
  Stethoscope,
  HeartPulse,
  Info,
} from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Consultation",
    text: "Discussion of the patient’s condition and medical concerns.",
    icon: MessageCircle,
  },
  {
    no: "02",
    title: "Clinical Evaluation",
    text: "Appropriate medical evaluation based on individual clinical requirements.",
    icon: ClipboardPlus,
  },
  {
    no: "03",
    title: "Treatment Planning",
    text: "The treating doctor determines an appropriate treatment approach after evaluation.",
    icon: FileCheck2,
  },
  {
    no: "04",
    title: "Procedure",
    tag: "When Indicated",
    text: "A surgical procedure may be considered when clinically indicated.",
    icon: Stethoscope,
  },
  {
    no: "05",
    title: "Hospital Care",
    text: "Hospital-based care and follow-up guidance are provided as appropriate.",
    icon: HeartPulse,
  },
];

const SurgicalCareJourney = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 45,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[160px] top-[-180px] h-[400px] w-[400px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />
        <div className="absolute -right-[170px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#2E91C8]/[0.07] blur-[120px]" />

        <div className="absolute left-[6%] top-[25%] hidden h-[7px] w-[7px] rotate-45 bg-[#2E91C8]/20 lg:block" />
        <div className="absolute right-[8%] top-[18%] hidden h-[7px] w-[7px] rotate-45 bg-[#2E91C8]/20 lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-4 md:grid-cols-[.85fr_1.15fr] md:items-end md:gap-12">
          <div data-aos="fade-right">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[6px] w-[6px] rotate-45 bg-[#2E91C8]" />
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
                Surgical Care Journey
              </span>
            </div>

            <h2 className="text-[32px] font-bold leading-[1.12] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
              From Consultation
              <span className="block text-[#2E91C8]">to Hospital Care</span>
            </h2>
          </div>

          <p
            data-aos="fade-left"
            className="max-w-[620px] text-[15px] leading-[1.8] text-[#64748B] sm:text-[16px] lg:text-[17px]"
          >
            A general overview of how surgical care may progress based on
            individual clinical evaluation and medical requirements.
          </p>
        </div>

        {/* =====================================================
            DESKTOP - SURGICAL ROUTE
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="relative mt-10 hidden min-h-[410px] overflow-hidden rounded-[26px] border border-[#D7E8EF] bg-white px-6 md:block lg:mt-12 lg:px-9"
        >
          {/* SUBTLE GRID */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#102D5F 1px, transparent 1px), linear-gradient(90deg, #102D5F 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          {/* ROUTE LINE */}
          <div className="absolute left-[7%] right-[7%] top-1/2 h-[2px] -translate-y-1/2 bg-[#D5E7EE]">
            <span className="journey-route-signal absolute left-0 top-1/2 h-[6px] w-[100px] -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent shadow-[0_0_18px_rgba(46,145,200,.55)]" />
          </div>

          {/* ROUTE ARROWS */}
          {[20, 40, 60, 80].map((left) => (
            <span
              key={left}
              style={{ left: `${left}%` }}
              className="absolute top-1/2 z-[2] h-[7px] w-[7px] -translate-y-1/2 rotate-45 border-r border-t border-[#9FCFDF]"
            />
          ))}

          <div className="relative grid h-[410px] grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const topStep = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  data-aos={topStep ? "fade-down" : "fade-up"}
                  data-aos-delay={index * 100}
                  className="group relative"
                >
                  {/* NODE */}
                  <div className="absolute left-1/2 top-1/2 z-20 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-white bg-[#102D5F] text-white shadow-[0_7px_22px_rgba(16,45,95,.18)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2E91C8]">
                    <span className="journey-node-ring absolute inset-[-7px] rounded-full border border-[#2E91C8]/20" />
                    <Icon size={16} strokeWidth={1.8} />
                  </div>

                  {/* STEM */}
                  <span
                    className={`absolute left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[#B9DCE8] to-[#DCEBF0] ${
                      topStep
                        ? "bottom-1/2 h-[54px]"
                        : "top-1/2 h-[54px]"
                    }`}
                  />

                  {/* CONTENT */}
                  <div
                    className={`absolute left-1/2 w-[92%] max-w-[205px] -translate-x-1/2 ${
                      topStep ? "bottom-[245px]" : "top-[245px]"
                    }`}
                  >
                    <div className={topStep ? "text-center" : "text-center"}>
                      <div className="mb-2 flex items-center justify-center gap-2">
                        <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">
                          {step.no}
                        </span>

                        {step.tag && (
                          <span className="rounded-full bg-[#E8F7FC] px-2 py-[3px] text-[8px] font-bold uppercase tracking-[.7px] text-[#2E91C8]">
                            {step.tag}
                          </span>
                        )}
                      </div>

                      <h3 className="text-[14px] font-bold leading-[1.4] text-[#102D5F] lg:text-[16px]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 text-[12px] leading-[1.6] text-[#64748B] lg:text-[13px]">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  {/* LARGE STEP NUMBER */}
                  <span
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 text-[72px] font-black leading-none text-[#102D5F]/[0.025] ${
                      topStep ? "top-5" : "bottom-4"
                    }`}
                  >
                    {step.no}
                  </span>
                </div>
              );
            })}
          </div>

          {/* START */}
          <div className="absolute left-[3%] top-1/2 -translate-y-1/2">
            <span className="block h-[8px] w-[8px] rounded-full bg-[#2E91C8] shadow-[0_0_0_6px_rgba(46,145,200,.10)]" />
          </div>

          {/* END */}
          <div className="absolute right-[3%] top-1/2 -translate-y-1/2">
            <span className="journey-end-pulse block h-[8px] w-[8px] rounded-full bg-[#2E91C8] shadow-[0_0_0_6px_rgba(46,145,200,.10)]" />
          </div>
        </div>

        {/* =====================================================
            MOBILE - COMPACT ZIGZAG
        ===================================================== */}
        <div className="relative mt-8 md:hidden">
          <div className="absolute bottom-[42px] left-1/2 top-[30px] w-px -translate-x-1/2 bg-[#CDE3EC]">
            <span className="journey-mobile-signal absolute left-[-1px] top-0 h-[60px] w-[3px] bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const leftSide = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  data-aos={leftSide ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 60}
                  className="relative grid min-h-[125px] grid-cols-[1fr_48px_1fr] items-center"
                >
                  {/* LEFT CONTENT */}
                  <div className={leftSide ? "pr-4 text-right" : ""}>
                    {leftSide && (
                      <>
                        <div className="flex items-center justify-end gap-2">
                          {step.tag && (
                            <span className="rounded-full bg-[#E6F5FB] px-2 py-1 text-[8px] font-bold uppercase text-[#2E91C8]">
                              {step.tag}
                            </span>
                          )}

                          <span className="text-[9px] font-bold tracking-[1.4px] text-[#2E91C8]">
                            {step.no}
                          </span>
                        </div>

                        <h3 className="mt-1 text-[14px] font-bold leading-[1.4] text-[#102D5F]">
                          {step.title}
                        </h3>

                        <p className="mt-1.5 text-[12px] leading-[1.6] text-[#64748B]">
                          {step.text}
                        </p>
                      </>
                    )}
                  </div>

                  {/* CENTER NODE */}
                  <div className="relative z-10 mx-auto flex h-[44px] w-[44px] items-center justify-center rounded-full border-[5px] border-[#F7FBFD] bg-[#102D5F] text-white shadow-[0_6px_18px_rgba(16,45,95,.15)]">
                    <Icon size={15} strokeWidth={1.8} />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className={!leftSide ? "pl-4" : ""}>
                    {!leftSide && (
                      <>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold tracking-[1.4px] text-[#2E91C8]">
                            {step.no}
                          </span>

                          {step.tag && (
                            <span className="rounded-full bg-[#E6F5FB] px-2 py-1 text-[8px] font-bold uppercase text-[#2E91C8]">
                              {step.tag}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-1 text-[14px] font-bold leading-[1.4] text-[#102D5F]">
                          {step.title}
                        </h3>

                        <p className="mt-1.5 text-[12px] leading-[1.6] text-[#64748B]">
                          {step.text}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DISCLAIMER */}
        <div
          data-aos="zoom-in"
          className="mx-auto mt-8 grid max-w-[920px] grid-cols-[38px_1fr] gap-3 rounded-[16px] border border-[#D6E8EF] bg-white px-4 py-4 shadow-[0_8px_28px_rgba(16,45,95,.045)] sm:grid-cols-[42px_1fr] sm:px-5"
        >
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#E8F7FC] text-[#2E91C8] sm:h-[42px] sm:w-[42px]">
            <Info size={17} strokeWidth={1.8} />
          </div>

          <div>
            <span className="text-[12px] font-bold text-[#102D5F] sm:text-[13px]">
              General Information
            </span>

            <p className="mt-1 text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
              This is a general informational flow and is not a guaranteed
              pathway for every patient. The actual care process, treatment
              plan and need for a procedure depend on individual clinical
              evaluation and medical requirements.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes routeSignal {
          0% {
            left: 0%;
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            left: calc(100% - 100px);
            opacity: 0;
          }
        }

        @keyframes nodeRing {
          0% {
            transform: scale(.85);
            opacity: .5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes endPulse {
          0%, 100% {
            box-shadow: 0 0 0 5px rgba(46,145,200,.10);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(46,145,200,0);
          }
        }

        @keyframes mobileSignal {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(540px);
            opacity: 0;
          }
        }

        .journey-route-signal {
          animation: routeSignal 6.5s ease-in-out infinite;
        }

        .journey-node-ring {
          animation: nodeRing 2.5s ease-out infinite;
        }

        .journey-end-pulse {
          animation: endPulse 2s ease-in-out infinite;
        }

        .journey-mobile-signal {
          animation: mobileSignal 5.5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-route-signal,
          .journey-node-ring,
          .journey-end-pulse,
          .journey-mobile-signal {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SurgicalCareJourney;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Activity,
  FlaskConical,
  HeartPulse,
  ScanLine,
  Sparkles,
  FileHeart,
  Landmark,
} from "lucide-react";

/* ==========================================
   ESSENTIAL HEALTHCARE DATA
========================================== */

const diagnostics = [
  {
    no: "01",
    title: "Pathology Laboratory",
    text:
      "In-hospital pathology support for applicable laboratory investigations required as part of diagnosis and treatment.",
    image: "/pathology-lab.jpg",
    icon: FlaskConical,
    tag: "Laboratory Support",
  },
  {
    no: "02",
    title: "Digital X-Ray Facility",
    text:
      "Digital X-Ray support is available for applicable imaging requirements as part of patient evaluation and treatment.",
    image: "/digital-xray1.png",
    icon: ScanLine,
    tag: "Imaging Support",
  },
  {
    no: "03",
    title: "ECG Facility",
    text:
      "ECG facility is available to support cardiac assessment when advised as part of medical evaluation.",
    image: "/pexels.jpg",
    icon: HeartPulse,
    tag: "Cardiac Assessment",
  },
  {
    no: "04",
    title: "Cardiac Rehabilitation Centre",
    text:
      "The first cardiac rehabilitation centre in Junnar Taluka, providing dedicated cardiac recovery and rehabilitation support as part of appropriate medical care.",
    image: "/cardiac-rehab.webp",
    icon: Activity,
    tag: "Cardiac Rehabilitation",
  },
  {
    no: "05",
    title: "Mediclaim Assistance",
    text:
      "Guidance and assistance with applicable health insurance and Mediclaim procedures, documentation and claim-related formalities.",
    image: "/insurance.jpg",
    icon: FileHeart,
    tag: "Health Insurance Support",
  },
  {
    no: "06",
    title: "MJPJAY Scheme Support",
    text:
      "Guidance for eligible patients regarding the Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY), subject to applicable scheme rules and hospital empanelment.",
    image: "/mjpjay.webp",
    icon: Landmark,
    tag: "Government Healthcare Scheme",
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */

const DiagnosticFacilities = () => {
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
    <section className="relative isolate overflow-hidden bg-[#071B3A] py-12 sm:py-14 md:py-16 lg:py-20">
      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_10%_20%,rgba(85,184,233,.13),transparent_28%),radial-gradient(circle_at_90%_75%,rgba(46,145,200,.13),transparent_30%),linear-gradient(135deg,#071B3A_0%,#081F42_50%,#06182F_100%)]" />

      <div className="diagnostic-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.15]" />

      <div className="diagnostic-orb pointer-events-none absolute -left-[150px] top-[25%] -z-10 h-[330px] w-[330px] rounded-full border border-[#69CBF2]/10" />

      <div className="diagnostic-orb diagnostic-orb-two pointer-events-none absolute -right-[170px] bottom-[10%] -z-10 h-[380px] w-[380px] rounded-full border border-[#69CBF2]/10" />

      {/* ======================================
          MAIN CONTAINER
      ====================================== */}

      <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* ======================================
            HEADER
        ====================================== */}

        <div className="grid items-end gap-5 md:grid-cols-[.9fr_1.1fr] md:gap-10 lg:gap-14">
          <div data-aos="fade-right">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#69CBF2]/15 bg-[#69CBF2]/10 text-[#69CBF2]">
                <Activity
                  className="h-[18px] w-[18px]"
                  strokeWidth={1.6}
                />

                <span className="diagnostic-pulse absolute inset-0 rounded-[11px] border border-[#69CBF2]/20" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#69CBF2] sm:text-[12px]">
                Essential Healthcare
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-[#69CBF2]/60 to-transparent" />
            </div>

            <h2 className="max-w-[650px] text-[32px] font-bold leading-[1.08] tracking-[-.8px] text-white sm:text-[38px] md:text-[42px] lg:text-[46px]">
              Essential Healthcare
              <span className="block text-[#69CBF2]">
                Facilities & Support
              </span>
            </h2>
          </div>

          <div
            className="md:border-l md:border-white/10 md:pl-8"
            data-aos="fade-left"
          >
            <p className="max-w-[680px] text-[16px] leading-[1.8] text-[#C1CFDD] sm:text-[17px] lg:text-[18px]">
              From essential diagnostic facilities and cardiac
              rehabilitation to Mediclaim assistance and government
              healthcare scheme guidance, Vighnaharta Hospital
              brings comprehensive healthcare support closer to you.
            </p>
          </div>
        </div>

        {/* ======================================
            HEALTHCARE FACILITIES
        ====================================== */}

        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          {/* DESKTOP CONNECTION LINE */}

          <div className="absolute left-[8%] right-[8%] top-[34px] hidden h-px bg-white/10 lg:block">
            <div className="diagnostic-signal absolute left-0 top-[-1px] h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent" />
          </div>

          {/* TOP NODES */}

          <div className="relative z-10 mb-6 hidden grid-cols-3 gap-y-8 lg:grid">
            {diagnostics.slice(0, 3).map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.no}
                  className="flex justify-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="diagnostic-node relative flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#69CBF2]/20 bg-[#0B294F] text-[#69CBF2] shadow-[0_0_0_8px_rgba(105,203,242,.025)]">
                    <Icon
                      className="h-[23px] w-[23px]"
                      strokeWidth={1.5}
                    />

                    <span className="diagnostic-node-ring absolute inset-[-1px] rounded-full border border-[#69CBF2]/25" />

                    <span className="absolute -bottom-6 text-[10px] font-bold tracking-[1.5px] text-[#69CBF2]">
                      {item.no}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ======================================
              CARDS GRID
          ====================================== */}

          <div className="grid gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-7">
            {diagnostics.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.no}
                  className="diagnostic-card group relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-white/[0.055] p-1.5 backdrop-blur-sm sm:rounded-[28px] sm:p-2"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                >
                  {/* IMAGE */}

                  <div className="diagnostic-image-wrap relative h-[240px] overflow-hidden rounded-[19px] bg-[#102D5F] min-[390px]:h-[260px] sm:h-[285px] lg:h-[260px] xl:h-[290px] sm:rounded-[22px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="diagnostic-image h-full w-full object-contain object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/90 via-[#06182F]/10 to-transparent" />

                    {/* SCANNER */}

                    <span className="diagnostic-scan pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent shadow-[0_0_18px_rgba(105,203,242,.8)]" />

                    {/* CORNERS */}

                    <span className="absolute left-4 top-4 h-7 w-7 border-l border-t border-white/45" />
                    <span className="absolute right-4 top-4 h-7 w-7 border-r border-t border-white/45" />
                    <span className="absolute bottom-4 left-4 h-7 w-7 border-b border-l border-white/45" />
                    <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-white/45" />

                    {/* MOBILE NUMBER */}

                    <span className="absolute right-5 top-4 text-[42px] font-black leading-none text-white/[0.12] lg:hidden">
                      {item.no}
                    </span>

                    {/* IMAGE INFO */}

                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-white/15 bg-white/10 text-[#69CBF2] backdrop-blur-md">
                          <Icon
                            className="h-4 w-4"
                            strokeWidth={1.6}
                          />
                        </span>

                        <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#69CBF2] sm:text-[12px]">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-[20px] font-bold leading-[1.2] text-white sm:text-[22px]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="relative px-3 pb-4 pt-5 sm:px-4 sm:pb-5">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-[2px] w-8 rounded-full bg-[#69CBF2]" />

                      <span className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#69CBF2] sm:text-[12px]">
                        Healthcare Facility & Support
                      </span>
                    </div>

                    <p className="text-[14px] leading-[1.75] text-[#C1CFDD] sm:text-[15px] lg:text-[16px]">
                      {item.text}
                    </p>
                  </div>

                  {/* HOVER LIGHT */}

                  <span className="diagnostic-shine pointer-events-none absolute bottom-0 top-0 w-[100px] -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                </article>
              );
            })}
          </div>

          {/* ======================================
              BOTTOM HIGHLIGHT
          ====================================== */}

          <div
            className="mt-7 flex items-center justify-center gap-3 sm:mt-9"
            data-aos="fade-up"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#69CBF2]/40 sm:w-20" />

            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#69CBF2]" />

              <span className="text-[11px] font-bold uppercase tracking-[1.3px] text-[#AFC4D6] sm:text-[12px]">
                Essential Healthcare Support
              </span>
            </div>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#69CBF2]/40 sm:w-20" />
          </div>
        </div>
      </div>

      {/* ======================================
          CSS ANIMATIONS
      ====================================== */}

      <style>{`
        .diagnostic-grid {
          background-image:
            linear-gradient(
              rgba(105,203,242,.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(105,203,242,.08) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .diagnostic-orb {
          animation: diagnosticOrb 8s ease-in-out infinite;
        }

        .diagnostic-orb-two {
          animation-delay: -4s;
        }

        .diagnostic-pulse {
          animation: diagnosticPulse 2.5s ease-out infinite;
        }

        .diagnostic-signal {
          width: 18%;
          animation: diagnosticSignal 5s ease-in-out infinite;
        }

        .diagnostic-node {
          transition:
            transform .4s cubic-bezier(.22,1,.36,1),
            background-color .4s ease,
            color .4s ease;
        }

        .diagnostic-node:hover {
          transform: translateY(-5px) scale(1.05);
          background: #2E91C8;
          color: white;
        }

        .diagnostic-node-ring {
          animation: diagnosticNodePulse 2.8s ease-out infinite;
        }

        .diagnostic-card {
          transition:
            transform .5s cubic-bezier(.22,1,.36,1),
            border-color .4s ease,
            background-color .4s ease,
            box-shadow .4s ease;
        }

        .diagnostic-card:hover {
          transform: translateY(-8px);
          border-color: rgba(105,203,242,.25);
          background: rgba(255,255,255,.075);
          box-shadow: 0 25px 60px rgba(0,0,0,.20);
        }

        .diagnostic-image {
          transform: scale(1.02);
          transition: transform 1s cubic-bezier(.22,1,.36,1);
        }

        .diagnostic-card:hover .diagnostic-image {
          transform: scale(1.08);
        }

        .diagnostic-scan {
          animation: diagnosticScan 4.8s linear infinite;
        }

        .diagnostic-shine {
          left: -140px;
        }

        .diagnostic-card:hover .diagnostic-shine {
          animation: diagnosticShine .9s ease forwards;
        }

        @keyframes diagnosticOrb {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: .6;
          }

          50% {
            transform: scale(1.08) translateY(-15px);
            opacity: 1;
          }
        }

        @keyframes diagnosticPulse {
          0% {
            transform: scale(.75);
            opacity: .6;
          }

          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @keyframes diagnosticSignal {
          0% {
            left: 0;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            left: 82%;
            opacity: 0;
          }
        }

        @keyframes diagnosticNodePulse {
          0% {
            transform: scale(.8);
            opacity: .5;
          }

          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        @keyframes diagnosticScan {
          0% {
            top: 4%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            top: 96%;
            opacity: 0;
          }
        }

        @keyframes diagnosticShine {
          from {
            left: -140px;
          }

          to {
            left: 120%;
          }
        }

        @media (max-width: 1023px) {
          .diagnostic-grid {
            mask-image: linear-gradient(
              to bottom,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .diagnostic-orb,
          .diagnostic-pulse,
          .diagnostic-signal,
          .diagnostic-node-ring,
          .diagnostic-scan {
            animation: none !important;
          }

          .diagnostic-image {
            transform: none !important;
          }

          .diagnostic-card {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DiagnosticFacilities;

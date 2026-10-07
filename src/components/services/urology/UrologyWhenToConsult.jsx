import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Droplets,
  Activity,
  Stethoscope,
  ClipboardPlus,
  ArrowRight,
  CalendarDays,
  Info,
} from "lucide-react";

const consultationAreas = [
  {
    no: "01",
    title: "Urinary Concerns",
    description:
      "If you have concerns related to urinary health, a urology consultation can help with appropriate clinical evaluation and guidance.",
    label: "Urological Evaluation",
    icon: Droplets,
  },
  {
    no: "02",
    title: "Kidney Stone-Related Symptoms",
    description:
      "Kidney stone-related concerns may require medical evaluation to understand the condition and determine appropriate next steps in care.",
    label: "Kidney-Related Care",
    icon: Activity,
  },
  {
    no: "03",
    title: "Prostate-Related Concerns",
    description:
      "A specialist consultation can support the clinical evaluation of prostate-related concerns and appropriate treatment planning.",
    label: "Prostate Evaluation",
    icon: ClipboardPlus,
  },
  {
    no: "04",
    title: "Specialist Evaluation Advised",
    description:
      "If specialist urological evaluation has been advised as part of your medical care, consultation can help determine the appropriate course of care.",
    label: "Specialist Consultation",
    icon: Stethoscope,
  },
];

const UrologyWhenToConsult = () => {
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
    <section className="relative overflow-hidden bg-[#F7FBFD] py-11 sm:py-12 md:py-14 lg:py-16">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[170px] top-[5%] h-[380px] w-[380px] rounded-full bg-[#DFF4FB]/65 blur-[110px]" />
        <div className="absolute -bottom-[170px] right-[-150px] h-[380px] w-[380px] rounded-full bg-[#EAF7FC] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#102D5F 1px, transparent 1px), linear-gradient(90deg,#102D5F 1px,transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-9 lg:grid-cols-[.82fr_1.18fr] lg:gap-14 xl:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative">
            {/* LABEL */}
            <div
              data-aos="fade-right"
              className="mb-3 flex items-center gap-3"
            >
              <span className="consult-label-line h-[2px] w-9 origin-left rounded-full bg-[#2E91C8]" />

              <span className="text-[11px] font-bold uppercase tracking-[2.1px] text-[#2E91C8] sm:text-[12px]">
                When to Consult
              </span>
            </div>

            {/* HEADING */}
            <h2
              data-aos="fade-up"
              data-aos-delay="70"
              className="max-w-[520px] text-[30px] font-bold leading-[1.13] tracking-[-.9px] text-[#102D5F] sm:text-[36px] md:text-[40px] lg:text-[42px]"
            >
              When to Consult a{" "}
              <span className="relative text-[#2E91C8]">
                Urology Specialist
                <svg
                  viewBox="0 0 250 8"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[6px] left-0 h-[6px] w-full"
                >
                  <path
                    className="consult-underline"
                    d="M2 5 C70 1 165 7 248 3"
                    fill="none"
                    stroke="#69CBF2"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* INTRO */}
            <p
              data-aos="fade-up"
              data-aos-delay="140"
              className="mt-5 max-w-[520px] text-[14px] leading-[1.8] text-[#64748B] sm:text-[15px] lg:text-[16px]"
            >
              Urological concerns can involve the urinary system, kidneys or
              prostate. Appropriate medical evaluation can help understand the
              concern and determine the next steps in care.
            </p>

            {/* CONSULTATION INFO */}
            <div
              data-aos="fade-up"
              data-aos-delay="210"
              className="relative mt-6 max-w-[520px] overflow-hidden rounded-[20px] border border-[#DCEBF1] bg-white p-5 shadow-[0_12px_35px_rgba(16,45,95,.06)] sm:p-6"
            >
              <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#2E91C8] via-[#69CBF2] to-transparent" />

              <div className="flex items-start gap-3.5">
                <div className="consult-icon relative flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[13px] bg-[#EAF7FC] text-[#2E91C8]">
                  <Stethoscope size={19} strokeWidth={1.7} />
                  <span className="consult-icon-ring absolute inset-[-5px] rounded-[17px] border border-[#2E91C8]/15" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#2E91C8]">
                    Specialist Consultation
                  </span>

                  <h3 className="mt-1.5 text-[16px] font-bold leading-[1.35] text-[#102D5F] sm:text-[17px]">
                    Start with Appropriate Clinical Evaluation
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
                    The treating doctor can evaluate the concern and guide the
                    patient regarding appropriate further care based on
                    individual clinical requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              data-aos="fade-up"
              data-aos-delay="280"
              className="mt-5 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group relative inline-flex min-h-[47px] items-center gap-2.5 overflow-hidden rounded-full bg-[#102D5F] px-5 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(16,45,95,.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2E91C8] sm:px-6 sm:text-[14px]"
              >
                <span className="consult-button-shine absolute -left-[45%] top-0 h-full w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <CalendarDays size={15} className="relative" />

                <span className="relative">
                  Book Consultation
                </span>

                <ArrowRight
                  size={14}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONSULTATION PATH
          ===================================================== */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="relative"
          >
            {/* TOP INFO */}
            <div className="mb-4 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#2E91C8] opacity-30" />
                  <span className="relative h-[7px] w-[7px] rounded-full bg-[#2E91C8]" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#7890A2]">
                  Consultation Guide
                </span>
              </div>

              <span className="text-[10px] font-semibold text-[#A0AFBA]">
                01 — 04
              </span>
            </div>

            {/* PATH CONTAINER */}
            <div className="relative overflow-hidden rounded-[24px] border border-[#DDEBF1] bg-white px-4 py-5 shadow-[0_18px_50px_rgba(16,45,95,.07)] sm:px-6 sm:py-6">
              {/* DECOR */}
              <div className="pointer-events-none absolute -right-[80px] -top-[100px] h-[230px] w-[230px] rounded-full bg-[#E9F7FC] blur-[65px]" />

              <span className="absolute right-5 top-4 text-[70px] font-black leading-none text-[#102D5F]/[0.025] sm:text-[90px]">
                U
              </span>

              {/* VERTICAL PATH */}
              <div className="absolute bottom-[38px] left-[39px] top-[38px] sm:left-[47px]">
                <span className="absolute inset-y-0 left-0 w-px bg-[#D8E9EF]" />

                <span className="consult-path-line absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-[#2E91C8] via-[#69CBF2] to-[#B8E4F2]" />

                <span className="consult-moving-dot absolute left-[-3px] top-0 h-[7px] w-[7px] rounded-full bg-[#2E91C8] shadow-[0_0_12px_rgba(46,145,200,.75)]" />
              </div>

              {/* ITEMS */}
              <div className="relative space-y-2">
                {consultationAreas.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.no}
                      data-aos="fade-left"
                      data-aos-delay={120 + index * 100}
                      className="consult-row group relative flex gap-4 rounded-[17px] px-1 py-3 transition-all duration-300 hover:bg-[#F8FCFD] sm:gap-5 sm:px-2"
                    >
                      {/* NODE */}
                      <div className="relative z-10 flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full border-[4px] border-white bg-[#102D5F] text-[#7AD9F7] shadow-[0_7px_18px_rgba(16,45,95,.14)]">
                        <Icon size={17} strokeWidth={1.7} />

                        <span className="consult-node-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/20" />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0 flex-1 border-b border-[#E7EFF3] pb-4 group-last:border-b-0 group-last:pb-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold tracking-[1.4px] text-[#2E91C8]">
                            {item.no}
                          </span>

                          <span className="h-px w-5 bg-[#C6E3EE]" />

                          <span className="text-[9px] font-bold uppercase tracking-[1px] text-[#8A9BA8]">
                            {item.label}
                          </span>
                        </div>

                        <h3 className="mt-1.5 text-[15px] font-bold leading-[1.35] text-[#102D5F] sm:text-[16px]">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 max-w-[500px] text-[13px] leading-[1.65] text-[#64748B] sm:text-[14px]">
                          {item.description}
                        </p>
                      </div>

                      {/* HOVER ARROW */}
                      <div className="hidden self-center sm:block">
                        <ArrowRight
                          size={15}
                          className="text-[#B5C6D0] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2E91C8]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM STATUS */}
              <div
                data-aos="fade-up"
                data-aos-delay="520"
                className="relative mt-4 flex items-start gap-2.5 rounded-[13px] bg-[#F3FAFD] px-3.5 py-3"
              >
                <Info
                  size={15}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#2E91C8]"
                />

                <p className="text-[11px] leading-[1.65] text-[#667B8D] sm:text-[12px]">
                  These are general reasons to consider urological
                  consultation. Individual evaluation and care requirements
                  may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes consultLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes consultUnderline {
          0% {
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dasharray: 300;
            stroke-dashoffset: 0;
          }
        }

        @keyframes consultPath {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }

        @keyframes consultDot {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: calc(100% - 7px);
            opacity: 0;
          }
        }

        @keyframes consultRing {
          0% {
            transform: scale(.8);
            opacity: .55;
          }
          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        @keyframes consultFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes consultButtonShine {
          0% {
            left: -45%;
          }
          100% {
            left: 125%;
          }
        }

        .aos-animate .consult-label-line {
          animation: consultLine .75s ease-out both;
        }

        .aos-animate .consult-underline {
          animation: consultUnderline 1.2s ease-out .3s both;
        }

        .aos-animate .consult-path-line {
          animation: consultPath 1.6s ease-out .35s both;
        }

        .consult-moving-dot {
          animation: consultDot 4.5s ease-in-out infinite;
        }

        .consult-node-ring,
        .consult-icon-ring {
          animation: consultRing 2.3s ease-out infinite;
        }

        .consult-icon {
          animation: consultFloat 4s ease-in-out infinite;
        }

        .group:hover .consult-button-shine {
          animation: consultButtonShine .75s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .consult-label-line,
          .consult-underline,
          .consult-path-line,
          .consult-moving-dot,
          .consult-node-ring,
          .consult-icon-ring,
          .consult-icon,
          .consult-button-shine {
            animation: none !important;
          }

          .consult-path-line {
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default UrologyWhenToConsult;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Droplets,
  Activity,
  Stethoscope,
  ClipboardPlus,
  Circle,
} from "lucide-react";

const areas = [
  {
    no: "01",
    title: "Kidney Stones",
    subtitle: "Kidney Stone-Related Care",
    description:
      "Evaluation and treatment support for patients with kidney stone-related symptoms and conditions.",
    tag: "Evaluation • Treatment Support",
    icon: Droplets,
  },
  {
    no: "02",
    title: "Urinary Problems",
    subtitle: "Urinary Health Evaluation",
    description:
      "Medical evaluation for urinary concerns with appropriate treatment guidance based on clinical findings.",
    tag: "Assessment • Medical Guidance",
    icon: Activity,
  },
  {
    no: "03",
    title: "Prostate-Related Conditions",
    subtitle: "Prostate Care",
    description:
      "Evaluation and appropriate treatment support for prostate-related conditions based on individual clinical requirements.",
    tag: "Evaluation • Treatment Planning",
    icon: Circle,
  },
  {
    no: "04",
    title: "Urological Evaluation",
    subtitle: "Specialist Consultation",
    description:
      "Clinical evaluation of kidney, urinary and prostate-related concerns to help determine appropriate next steps in care.",
    tag: "Consultation • Evaluation",
    icon: Stethoscope,
  },
];

const UrologyKeyAreas = () => {
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
    <section className="relative overflow-hidden bg-white py-11 sm:py-12 md:py-14 lg:py-16">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[20%] h-[360px] w-[360px] rounded-full bg-[#EAF7FC] blur-[110px]" />
        <div className="absolute -right-[170px] bottom-[-120px] h-[350px] w-[350px] rounded-full bg-[#F1FAFD] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "radial-gradient(#2E91C8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-[760px] text-center">
          <div
            data-aos="fade-up"
            className="mb-3 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2E91C8]" />
            <span className="h-[6px] w-[6px] rotate-45 bg-[#2E91C8]" />

            <span className="text-[11px] font-bold uppercase tracking-[2.2px] text-[#2E91C8] sm:text-[12px]">
              Key Areas
            </span>

            <span className="h-[6px] w-[6px] rotate-45 bg-[#2E91C8]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2E91C8]" />
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="text-[30px] font-bold leading-[1.14] tracking-[-.9px] text-[#102D5F] sm:text-[36px] md:text-[40px] lg:text-[43px]"
          >
            Focused Areas of{" "}
            <span className="text-[#2E91C8]">Urology Care</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="130"
            className="mx-auto mt-3 max-w-[650px] text-[14px] leading-[1.75] text-[#64748B] sm:text-[15px] lg:text-[16px]"
          >
            Evaluation and treatment support across key urinary, kidney and
            prostate-related healthcare needs.
          </p>
        </div>

        {/* =====================================================
            DESKTOP
        ===================================================== */}
        <div className="relative mt-8 hidden min-h-[470px] lg:block">
          {/* CENTER ANATOMICAL VISUAL */}
          <div
            data-aos="zoom-in"
            data-aos-delay="120"
            className="absolute left-1/2 top-1/2 h-[340px] w-[235px] -translate-x-1/2 -translate-y-1/2"
          >
            {/* OUTER SHAPE */}
            <div className="absolute left-1/2 top-1/2 h-[295px] w-[182px] -translate-x-1/2 -translate-y-1/2 rounded-[48%_48%_44%_44%] border border-[#2E91C8]/10 bg-gradient-to-b from-[#F4FBFD] to-[#E8F6FB] shadow-[0_20px_50px_rgba(46,145,200,.05)]" />

            <div className="uro-anatomy-orbit absolute left-1/2 top-1/2 h-[245px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-[48%] border border-dashed border-[#2E91C8]/20">
              <span className="absolute left-1/2 top-[-4px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#2E91C8]" />
            </div>

            {/* LEFT ORGAN */}
            <div className="uro-organ-left absolute left-[47px] top-[65px] h-[67px] w-[43px] rotate-[10deg] rounded-[60%_40%_55%_45%] border border-[#2E91C8]/25 bg-white shadow-[0_10px_30px_rgba(46,145,200,.10)]">
              <span className="absolute right-[7px] top-[17px] h-[30px] w-[13px] rounded-full bg-[#EAF7FC]" />

              <span className="absolute -left-[5px] top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-[#69CBF2] shadow-[0_0_12px_rgba(105,203,242,.6)]" />
            </div>

            {/* RIGHT ORGAN */}
            <div className="uro-organ-right absolute right-[47px] top-[65px] h-[67px] w-[43px] -rotate-[10deg] rounded-[40%_60%_45%_55%] border border-[#2E91C8]/25 bg-white shadow-[0_10px_30px_rgba(46,145,200,.10)]">
              <span className="absolute left-[7px] top-[17px] h-[30px] w-[13px] rounded-full bg-[#EAF7FC]" />

              <span className="absolute -right-[5px] top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-[#69CBF2] shadow-[0_0_12px_rgba(105,203,242,.6)]" />
            </div>

            {/* URINARY PATH */}
            <svg
              viewBox="0 0 235 340"
              className="absolute inset-0 h-full w-full"
            >
              <path
                className="uro-main-path"
                d="M76 132 C79 177 101 183 109 220 C112 235 112 246 117 258"
                fill="none"
                stroke="#55B8E9"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                className="uro-main-path uro-path-delay"
                d="M159 132 C156 177 134 183 126 220 C123 235 123 246 117 258"
                fill="none"
                stroke="#55B8E9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* CENTER NODE */}
            <div className="absolute left-1/2 top-[211px] flex h-[52px] w-[52px] -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-white bg-[#102D5F] text-[#79D8F7] shadow-[0_12px_30px_rgba(16,45,95,.18)]">
              <Droplets size={19} strokeWidth={1.7} />

              <span className="uro-center-ring absolute inset-[-8px] rounded-full border border-[#2E91C8]/25" />
              <span className="uro-center-ring uro-ring-delay absolute inset-[-8px] rounded-full border border-[#2E91C8]/20" />
            </div>

            {/* FLOW DOT */}
            <span className="uro-flow-dot absolute left-1/2 top-[134px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#2E91C8] shadow-[0_0_13px_rgba(46,145,200,.8)]" />

            {/* LABEL */}
            <div className="absolute bottom-[13px] left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[#B9DEEC]" />
                <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#2E91C8]">
                  Urology Care
                </span>
                <span className="h-px w-5 bg-[#B9DEEC]" />
              </div>
            </div>
          </div>

          {/* CONNECTORS */}
          <svg
            viewBox="0 0 1200 470"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <path
              className="uro-connector"
              d="M425 105 C505 105 520 140 570 172"
              fill="none"
              stroke="#C6E3EE"
              strokeWidth="1.4"
              strokeDasharray="5 6"
            />

            <path
              className="uro-connector uro-delay-1"
              d="M775 105 C695 105 680 140 630 172"
              fill="none"
              stroke="#C6E3EE"
              strokeWidth="1.4"
              strokeDasharray="5 6"
            />

            <path
              className="uro-connector uro-delay-2"
              d="M425 365 C505 365 525 325 570 292"
              fill="none"
              stroke="#C6E3EE"
              strokeWidth="1.4"
              strokeDasharray="5 6"
            />

            <path
              className="uro-connector uro-delay-3"
              d="M775 365 C695 365 675 325 630 292"
              fill="none"
              stroke="#C6E3EE"
              strokeWidth="1.4"
              strokeDasharray="5 6"
            />
          </svg>

          {/* AREA 01 */}
          <div
            data-aos="fade-right"
            data-aos-delay="170"
            className="absolute left-0 top-[38px] w-[35%]"
          >
            <PathItem {...areas[0]} align="right" />
          </div>

          {/* AREA 02 */}
          <div
            data-aos="fade-left"
            data-aos-delay="250"
            className="absolute right-0 top-[38px] w-[35%]"
          >
            <PathItem {...areas[1]} />
          </div>

          {/* AREA 03 */}
          <div
            data-aos="fade-right"
            data-aos-delay="330"
            className="absolute bottom-[25px] left-0 w-[35%]"
          >
            <PathItem {...areas[2]} align="right" />
          </div>

          {/* AREA 04 */}
          <div
            data-aos="fade-left"
            data-aos-delay="410"
            className="absolute bottom-[25px] right-0 w-[35%]"
          >
            <PathItem {...areas[3]} />
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}
        <div className="relative mx-auto mt-8 max-w-[680px] lg:hidden">
          {/* VERTICAL LINE */}
          <span className="uro-mobile-line absolute bottom-7 left-[23px] top-7 w-px origin-top bg-gradient-to-b from-[#2E91C8] via-[#A9D9EA] to-[#DCECF2]" />

          <div className="space-y-3">
            {areas.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.no}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  className="relative flex gap-3.5 sm:gap-4"
                >
                  {/* NODE */}
                  <div className="relative z-10 mt-3 flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full border-[4px] border-white bg-[#102D5F] text-[#7AD8F7] shadow-[0_8px_20px_rgba(16,45,95,.14)]">
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      fill={
                        item.title === "Prostate-Related Conditions"
                          ? "currentColor"
                          : "none"
                      }
                    />

                    <span className="uro-mobile-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/20" />
                  </div>

                  {/* CONTENT */}
                  <div className="group relative flex-1 overflow-hidden rounded-[17px] border border-[#E1EDF2] bg-[#F9FCFD] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9DEEC] hover:bg-white hover:shadow-[0_12px_28px_rgba(16,45,95,.07)] sm:px-5">
                    <span className="absolute right-3 top-1 text-[44px] font-black leading-none text-[#102D5F]/[0.035]">
                      {item.no}
                    </span>

                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#2E91C8]">
                          Care Area {item.no}
                        </span>

                        <span className="h-px w-6 bg-[#B7DDEA]" />
                      </div>

                      <h3 className="mt-1.5 pr-7 text-[15px] font-bold leading-[1.35] text-[#102D5F] sm:text-[16px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] font-semibold text-[#2E91C8] sm:text-[12px]">
                        {item.subtitle}
                      </p>

                      <p className="mt-2 max-w-[520px] text-[13px] leading-[1.65] text-[#64748B] sm:text-[14px]">
                        {item.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 border-t border-[#E4EEF2] pt-2.5">
                        <span className="h-[5px] w-[5px] rounded-full bg-[#55B8E9]" />

                        <span className="text-[9px] font-bold uppercase tracking-[1px] text-[#8496A6]">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#2E91C8] to-[#79D9F8] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mx-auto mt-7 flex max-w-[790px] items-start justify-center gap-3 border-t border-[#E3EDF1] pt-5 text-center sm:items-center"
        >
          <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
            <ClipboardPlus size={14} strokeWidth={1.7} />
          </span>

          <p className="max-w-[680px] text-[12px] leading-[1.65] text-[#64748B] sm:text-[13px]">
            Appropriate care is planned according to individual clinical
            evaluation and medical requirements.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes uroPathDraw {
          0% {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
          }
          100% {
            stroke-dasharray: 500;
            stroke-dashoffset: 0;
          }
        }

        @keyframes uroConnectorDraw {
          0% {
            stroke-dasharray: 8 7;
            stroke-dashoffset: 220;
            opacity: 0;
          }
          100% {
            stroke-dasharray: 8 7;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes uroOrganLeft {
          0%, 100% {
            transform: translateY(0) rotate(10deg);
          }
          50% {
            transform: translateY(-6px) rotate(7deg);
          }
        }

        @keyframes uroOrganRight {
          0%, 100% {
            transform: translateY(0) rotate(-10deg);
          }
          50% {
            transform: translateY(6px) rotate(-7deg);
          }
        }

        @keyframes uroCenterRing {
          0% {
            transform: scale(.78);
            opacity: .65;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @keyframes uroFlow {
          0% {
            transform: translate(-50%, 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, 118px);
            opacity: 0;
          }
        }

        @keyframes uroOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes uroMobileRing {
          0% {
            transform: scale(.85);
            opacity: .5;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @keyframes uroMobileLine {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        .aos-animate .uro-main-path {
          animation: uroPathDraw 1.45s ease-out .3s both;
        }

        .aos-animate .uro-path-delay {
          animation-delay: .45s;
        }

        .aos-animate .uro-connector {
          animation: uroConnectorDraw 1s ease-out .55s both;
        }

        .aos-animate .uro-delay-1 {
          animation-delay: .7s;
        }

        .aos-animate .uro-delay-2 {
          animation-delay: .85s;
        }

        .aos-animate .uro-delay-3 {
          animation-delay: 1s;
        }

        .aos-animate .uro-mobile-line {
          animation: uroMobileLine 1.3s ease-out .2s both;
        }

        .uro-organ-left {
          animation: uroOrganLeft 4.2s ease-in-out infinite;
        }

        .uro-organ-right {
          animation: uroOrganRight 4.6s ease-in-out infinite;
        }

        .uro-center-ring {
          animation: uroCenterRing 2.2s ease-out infinite;
        }

        .uro-ring-delay {
          animation-delay: 1.1s;
        }

        .uro-flow-dot {
          animation: uroFlow 3.2s ease-in-out infinite;
        }

        .uro-anatomy-orbit {
          animation: uroOrbit 14s linear infinite;
        }

        .uro-mobile-ring {
          animation: uroMobileRing 2.2s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .uro-main-path,
          .uro-connector,
          .uro-organ-left,
          .uro-organ-right,
          .uro-center-ring,
          .uro-flow-dot,
          .uro-anatomy-orbit,
          .uro-mobile-ring,
          .uro-mobile-line {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

const PathItem = ({
  no,
  title,
  subtitle,
  description,
  tag,
  icon: Icon,
  align = "left",
}) => {
  const right = align === "right";

  return (
    <div
      className={`group flex items-start gap-4 ${
        right ? "flex-row-reverse text-right" : ""
      }`}
    >
      {/* ICON */}
      <div className="relative mt-1 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px] border border-[#D8EAF1] bg-white text-[#2E91C8] shadow-[0_10px_25px_rgba(16,45,95,.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#A9D8E9] group-hover:shadow-[0_14px_30px_rgba(16,45,95,.10)]">
        <Icon
          size={21}
          strokeWidth={1.7}
          fill={
            title === "Prostate-Related Conditions"
              ? "currentColor"
              : "none"
          }
        />

        <span
          className={`absolute -top-[5px] flex h-[20px] w-[20px] items-center justify-center rounded-full border-[3px] border-white bg-[#102D5F] text-[7px] font-bold text-white ${
            right ? "-left-[5px]" : "-right-[5px]"
          }`}
        >
          {no}
        </span>
      </div>

      {/* TEXT */}
      <div className="min-w-0 max-w-[285px]">
        <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#2E91C8]">
          Care Area {no}
        </span>

        <h3 className="mt-1 text-[16px] font-bold leading-[1.3] text-[#102D5F] lg:text-[17px]">
          {title}
        </h3>

        <p className="mt-1 text-[11px] font-semibold text-[#2E91C8] lg:text-[12px]">
          {subtitle}
        </p>

        <p className="mt-2 text-[13px] leading-[1.6] text-[#64748B]">
          {description}
        </p>

        <div
          className={`mt-2.5 flex items-center gap-2 ${
            right ? "justify-end" : ""
          }`}
        >
          <span className="h-[5px] w-[5px] rounded-full bg-[#55B8E9]" />

          <span className="text-[9px] font-bold uppercase tracking-[1px] text-[#8A9AAA]">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UrologyKeyAreas;
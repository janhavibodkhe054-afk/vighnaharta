import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowUpRight,
  ClipboardCheck,
  HeartPulse,
  Mail,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardiacDiagnosticHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F7FBFD]">
      {/* BACKGROUND GRADIENTS */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] bg-gradient-to-bl from-[#E1F2FA] via-[#EFF8FD] to-transparent" />

      <div className="pointer-events-none absolute -left-32 top-8 h-[320px] w-[320px] rounded-full bg-[#DDEFFA]/60 blur-[90px]" />

      <div className="pointer-events-none absolute right-[8%] top-[8%] h-[300px] w-[300px] rounded-full bg-[#A8DFF5]/25 blur-[90px]" />

      {/* BACKGROUND DOTS */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#102D5F 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 pb-12 pt-6 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 xl:gap-16">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            {/* LABEL */}
            <div
              data-aos="fade-up"
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#D7EBF5] bg-white px-4 py-2 shadow-[0_5px_18px_rgba(16,45,95,0.04)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#2E91C8] opacity-25" />
                <span className="relative h-2 w-2 rounded-full bg-[#2E91C8]" />
              </span>

              <span className="text-[13px] font-bold uppercase tracking-[1.4px] text-[#277DAE] sm:text-[15px]">
                Cardiac Diagnostic Services
              </span>
            </div>

            {/* MAIN HEADING */}
            <h1
              data-aos="fade-up"
              data-aos-delay="70"
              className="m-0 max-w-[760px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
            >
              Better Heart Care Starts with{" "}
              <span className="text-[#2E91C8]">
                Accurate Diagnosis
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="130"
              className="m-0 mt-6 max-w-[600px] text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
            >
              Cardiac diagnostic tests to assess heart health
              and support informed medical decisions.
            </p>

            {/* KEY HIGHLIGHTS */}
            <div
              data-aos="fade-up"
              data-aos-delay="190"
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E3F4FB] text-[#2E91C8]">
                  <Activity size={18} strokeWidth={1.8} />
                </span>

                <span className="text-[14px] font-semibold text-[#254565] sm:text-[15px]">
                  Heart Health Assessment
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E3F4FB] text-[#2E91C8]">
                  <ClipboardCheck size={18} strokeWidth={1.8} />
                </span>

                <span className="text-[14px] font-semibold text-[#254565] sm:text-[15px]">
                  Diagnostic Support
                </span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div
              data-aos="fade-up"
              data-aos-delay="240"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_28px_rgba(16,45,95,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[15px]"
              >
                <HeartPulse size={19} strokeWidth={1.8} />

                Enquire About Cardiac Tests

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-[#BFD9E9] bg-white px-6 py-3 text-[14px] font-semibold text-[#102D5F] transition-all duration-300 hover:border-[#2E91C8] hover:bg-[#EAF6FC] sm:text-[15px]"
              >
                <Mail size={18} strokeWidth={1.8} />

                Contact Hospital

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            data-aos-delay="120"
            className="relative mx-auto w-full max-w-[650px] lg:mx-0"
          >
            {/* OFFSET BORDER */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-[#A9DFF3] sm:-right-5 sm:-top-5 sm:rounded-[36px]" />

            {/* MAIN IMAGE */}
            <div className="cardiac-diagnostic-image relative isolate h-[340px] overflow-hidden rounded-[26px] bg-[#D9EAF3] shadow-[0_25px_65px_rgba(16,45,95,0.14)] sm:h-[420px] sm:rounded-[32px] lg:h-[465px] xl:h-[500px]">
              <img
                src="/cardiac1.png"
                alt="Cardiac diagnostic equipment and ECG monitoring setup"
                className="h-full w-full object-cover object-center transition-transform duration-[1200ms] hover:scale-[1.045]"
                fetchPriority="high"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/65 via-[#071B3A]/5 to-transparent" />

              {/* IMAGE BOTTOM CAPTION */}
              <div className="absolute bottom-6 left-5 right-5 flex items-center gap-3 sm:left-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                  <HeartPulse size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="m-0 text-[15px] font-bold text-white sm:text-[17px]">
                    Cardiac Diagnostic Evaluation
                  </p>

                  <p className="m-0 mt-1 text-[12px] text-white/85 sm:text-[13px]">
                    Assessment • Investigation • Clinical Guidance
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING ECG MONITOR PANEL */}
            <div className="cardiac-diagnostic-float absolute -bottom-6 -left-2 z-20 w-[235px] overflow-hidden rounded-[18px] border border-[#DDEBF4] bg-white p-4 shadow-[0_18px_45px_rgba(16,45,95,0.15)] sm:-bottom-8 sm:-left-8 sm:w-[285px] sm:p-5">

              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold uppercase tracking-[1px] text-[#102D5F] sm:text-[13px]">
                  Cardiac Assessment
                </span>

                <Activity
                  size={19}
                  className="text-[#2E91C8]"
                />
              </div>

              {/* ECG WAVEFORM */}
              <div className="mt-3 overflow-hidden rounded-lg bg-[#EFF8FC] px-2 py-3">
                <svg
                  viewBox="0 0 260 65"
                  fill="none"
                  className="h-[65px] w-full"
                  role="img"
                  aria-label="Decorative ECG waveform"
                >
                  <path
                    d="M0 34 H38 L48 34 L58 25 L70 44 L83 34 H106 L119 34 L133 5 L150 59 L165 34 H193 L203 34 L213 25 L225 43 L237 34 H260"
                    stroke="#2E91C8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cardiac-diagnostic-ecg"
                  />
                </svg>
              </div>

              <p className="m-0 mt-3 text-[12px] leading-[1.6] text-[#64748B] sm:text-[13px]">
                Supporting informed heart care decisions
              </p>
            </div>

            {/* DECORATIVE ICON */}
            <div className="pointer-events-none absolute -right-4 bottom-[18%] hidden h-16 w-16 items-center justify-center rounded-full border-[7px] border-[#F7FBFD] bg-[#2E91C8] text-white shadow-lg sm:flex">
              <Activity size={27} strokeWidth={1.7} />
            </div>
          </div>
        </div>

        <div className="h-10 sm:h-12" />
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes cardiacDiagnosticImageReveal {
          from {
            opacity: 0;
            clip-path: inset(0 100% 0 0 round 30px);
            transform: scale(1.04);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0 round 30px);
            transform: scale(1);
          }
        }

        @keyframes cardiacDiagnosticFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes cardiacDiagnosticECG {
          0% {
            stroke-dashoffset: 500;
            opacity: 0.4;
          }
          60% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.85;
          }
        }

        .cardiac-diagnostic-image {
          animation: cardiacDiagnosticImageReveal 1.1s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .cardiac-diagnostic-float {
          animation: cardiacDiagnosticFloat 5s ease-in-out infinite;
        }

        .cardiac-diagnostic-ecg {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: cardiacDiagnosticECG 3.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cardiac-diagnostic-image,
          .cardiac-diagnostic-float,
          .cardiac-diagnostic-ecg {
            animation: none !important;
          }

          .cardiac-diagnostic-ecg {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CardiacDiagnosticHero;
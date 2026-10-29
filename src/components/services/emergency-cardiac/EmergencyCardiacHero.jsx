import React, { useEffect } from "react";
import {
  Activity,
  ArrowUpRight,
  Clock3,
  HeartPulse,
  PhoneCall,
  ShieldPlus,
  AlertTriangle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const EmergencyCardiacHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F7FAFD]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#F7FAFD] to-[#EAF4FA]" />

      <div className="pointer-events-none absolute -left-32 top-10 h-[340px] w-[340px] rounded-full bg-[#DCEFFA]/60 blur-[95px]" />

      <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[#FCE8E9]/50 blur-[110px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#102D5F 1px, transparent 1px)",
          backgroundSize: "27px 27px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-9">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* LABEL */}
            <div
              data-aos="fade-up"
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#F1D7DA] bg-white px-4 py-2 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#D33E4B] opacity-30" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#D33E4B]" />
              </span>

              <span className="text-[12px] font-bold uppercase tracking-[1.3px] text-[#C93542] sm:text-[14px]">
                Emergency Cardiac Services
              </span>
            </div>

            {/* HEADING */}
            <h1
              data-aos="fade-up"
              data-aos-delay="70"
              className="m-0 max-w-[720px] text-[32px] font-bold leading-[1.15] tracking-[-0.9px] text-[#102D5F] sm:text-[38px] md:text-[42px] xl:text-[46px]"
            >
              Urgent Medical Attention for{" "}
              <span className="text-[#C93542]">
                Suspected Cardiac Emergencies
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="130"
              className="m-0 mt-6 max-w-[590px] text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
            >
              Prompt emergency medical evaluation for patients
              experiencing symptoms that may indicate a serious
              heart-related condition.
            </p>

            {/* SERVICE HIGHLIGHTS */}
            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-7 flex flex-wrap gap-x-7 gap-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F3FA] text-[#2E91C8]">
                  <Clock3 size={20} strokeWidth={1.8} />
                </span>

                <span className="text-[14px] font-semibold text-[#254565] sm:text-[15px]">
                  24×7 Emergency Support
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F3FA] text-[#2E91C8]">
                  <HeartPulse size={20} strokeWidth={1.8} />
                </span>

                <span className="text-[14px] font-semibold text-[#254565] sm:text-[15px]">
                  Initial Cardiac Evaluation
                </span>
              </div>
            </div>

            {/* EMERGENCY CTA */}
            <div
              data-aos="fade-up"
              data-aos-delay="230"
              className="mt-8"
            >
              <a
                href="tel:+917757004175"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#C93542] px-7 py-3 text-[15px] font-bold text-white shadow-[0_14px_30px_rgba(201,53,66,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A92C39] hover:shadow-[0_18px_35px_rgba(201,53,66,0.28)] sm:text-[16px]"
              >
                <PhoneCall size={21} strokeWidth={2} />

                Call Emergency – +91 7757004175

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* SAFETY NOTE */}
            <div
              data-aos="fade-up"
              data-aos-delay="280"
              className="mt-7 flex max-w-[590px] items-start gap-3 rounded-[15px] border border-[#F1DDDF] bg-[#FFF6F6] px-4 py-3.5"
            >
              <AlertTriangle
                size={20}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-[#C93542]"
              />

              <p className="m-0 text-[12px] leading-[1.7] text-[#76535A] sm:text-[13px]">
                If a heart attack is suspected, seek emergency
                medical help immediately. You can also call{" "}
                <a
                  href="tel:112"
                  className="font-bold text-[#A92C39]"
                >
                  112
                </a>{" "}
                for emergency assistance in India. Do not
                drive yourself to the hospital.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="relative mx-auto w-full max-w-[650px] lg:mx-0"
          >
            {/* OUTER FRAME */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-[#D4E4EF] sm:-right-5 sm:-top-5 sm:rounded-[36px]" />

            {/* MAIN IMAGE */}
            <div className="group relative h-[350px] overflow-hidden rounded-[26px] bg-[#DCE8F0] shadow-[0_25px_65px_rgba(16,45,95,0.15)] sm:h-[440px] sm:rounded-[32px] lg:h-[500px] xl:h-[540px]">
              <img
                src="/attack.png"
                alt="Emergency department with cardiac monitoring equipment"
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-[1000ms] group-hover:scale-[1.045]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/80 via-[#071B3A]/10 to-transparent" />

              {/* IMAGE BOTTOM CAPTION */}
              <div className="absolute bottom-6 left-5 right-5 flex items-center gap-3 sm:bottom-8 sm:left-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                  <ShieldPlus size={25} strokeWidth={1.7} />
                </span>

                <div>
                  <p className="m-0 text-[17px] font-bold text-white sm:text-[19px]">
                    Emergency Medical Assessment
                  </p>

                  <p className="m-0 mt-1 text-[12px] text-white/85 sm:text-[14px]">
                    Prompt Evaluation • Medical Guidance
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING MONITOR PANEL */}
            <div className="emergency-cardiac-float absolute -bottom-6 -left-2 z-20 w-[225px] rounded-[18px] border border-[#E0EAF2] bg-white p-4 shadow-[0_18px_45px_rgba(16,45,95,0.15)] sm:-bottom-8 sm:-left-8 sm:w-[280px] sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[12px] font-bold text-[#102D5F] sm:text-[14px]">
                  Cardiac Monitoring
                </span>

                <Activity
                  size={19}
                  className="text-[#C93542]"
                />
              </div>

              <div className="mt-3 overflow-hidden rounded-lg bg-[#F0F7FB] px-2 py-3">
                <svg
                  viewBox="0 0 260 65"
                  fill="none"
                  className="h-[60px] w-full"
                  role="img"
                  aria-label="Decorative cardiac monitoring waveform"
                >
                  <path
                    d="M0 34 H40 L53 34 L63 24 L75 44 L87 34 H110 L122 34 L136 5 L152 59 L168 34 H195 L207 34 L217 24 L230 44 L242 34 H260"
                    stroke="#C93542"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="emergency-cardiac-wave"
                  />
                </svg>
              </div>

              <p className="m-0 mt-3 text-[12px] leading-[1.6] text-[#64748B] sm:text-[13px]">
                Emergency cardiac evaluation support
              </p>
            </div>

            {/* DECORATIVE BADGE */}
            <div className="pointer-events-none absolute -right-4 top-[20%] hidden h-[66px] w-[66px] items-center justify-center rounded-full border-[7px] border-[#F7FAFD] bg-[#C93542] text-white shadow-lg sm:flex">
              <HeartPulse size={28} strokeWidth={1.7} />
            </div>
          </div>
        </div>

        <div className="h-10 sm:h-12" />
      </div>

      <style>{`
        @keyframes emergencyCardiacFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .emergency-cardiac-float {
          animation: emergencyCardiacFloat 5s ease-in-out infinite;
        }

        @keyframes emergencyCardiacWave {
          0% {
            stroke-dashoffset: 500;
            opacity: 0.4;
          }
          65% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.85;
          }
        }

        .emergency-cardiac-wave {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: emergencyCardiacWave 3.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .emergency-cardiac-float,
          .emergency-cardiac-wave {
            animation: none !important;
          }

          .emergency-cardiac-wave {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default EmergencyCardiacHero;
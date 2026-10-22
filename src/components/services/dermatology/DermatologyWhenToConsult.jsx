import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ScanFace,
  Check,
  CalendarDays,
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  AlertCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ==========================================
   CONSULTATION REASONS
========================================== */

const consultationReasons = [
  "Persistent or recurring skin rashes.",
  "Acne or inflammatory skin concerns.",
  "Unexplained hair loss or scalp symptoms.",
  "Nail changes requiring medical evaluation.",
  "Skin lesions that change in size, colour or appearance.",
  "Skin problems that do not improve or continue to recur.",
];

/* ==========================================
   MAIN COMPONENT
========================================== */

const DermatologyWhenToConsult = () => {
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
    <section className="relative isolate overflow-hidden bg-[#F8FBFE] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#F8FBFE] to-[#EDF6FC]" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#DCEFFA]/50 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#E1ECFA]/50 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* MAIN GRID */}

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">

          {/* ======================================
              LEFT IMAGE
          ====================================== */}

          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[590px] lg:mx-0"
          >
            {/* DECORATIVE BORDER */}

            <div className="pointer-events-none absolute -left-3 -top-3 h-full w-full rounded-[28px] border border-[#D6E8F3] sm:-left-5 sm:-top-5" />

            {/* IMAGE */}

            <div className="group relative h-[370px] overflow-hidden rounded-[26px] bg-[#DCEAF3] shadow-[0_25px_65px_rgba(16,45,95,0.13)] sm:h-[470px] lg:h-[570px]">
              <img
                src="/dermatology1.png"
                alt="Dermatologist assessing skin health during consultation"
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
              />

              {/* GRADIENT OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/75 via-[#071B3A]/10 to-transparent" />

              {/* IMAGE CAPTION */}

              <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                    <ScanFace size={25} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p className="m-0 text-[18px] font-bold text-white sm:text-[21px]">
                      Dermatology Consultation
                    </p>

                    <p className="m-0 mt-1 text-[12px] text-white/85 sm:text-[14px]">
                      Skin • Hair • Nail Health
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING ICON */}

            <div className="derma-consult-float absolute -right-3 top-9 flex h-[66px] w-[66px] items-center justify-center rounded-[20px] border-[6px] border-[#F8FBFE] bg-[#102D5F] text-white shadow-[0_12px_30px_rgba(16,45,95,0.16)] sm:-right-6 sm:top-12 sm:h-[76px] sm:w-[76px]">
              <Stethoscope size={30} strokeWidth={1.7} />
            </div>
          </div>

          {/* ======================================
              RIGHT CONTENT
          ====================================== */}

          <div className="relative">

            {/* SECTION LABEL */}

            <div
              data-aos="fade-up"
              className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#D8E9F4] bg-white px-4 py-2"
            >
              <ScanFace
                size={17}
                strokeWidth={1.8}
                className="text-[#2E91C8]"
              />

              <span className="text-[12px] font-bold uppercase tracking-[1.3px] text-[#2E91C8] sm:text-[14px]">
                Dermatology Consultation
              </span>
            </div>

            {/* HEADING */}

            <h2
              data-aos="fade-up"
              data-aos-delay="70"
              className="m-0 max-w-[720px] text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] lg:text-[42px]"
            >
              When to Consult a{" "}
              <span className="text-[#2E91C8]">
                Dermatologist
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="m-0 mt-4 text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
            >
              Persistent skin concerns, changes in hair or
              nail health, and unusual skin symptoms may
              require professional medical evaluation.
            </p>

            {/* ======================================
                CONSULTATION CHECKLIST
            ====================================== */}

            <div className="mt-7">
              {consultationReasons.map((reason, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 45}
                  className={`group flex items-start gap-4 py-4 transition-all duration-300 ${
                    index !== consultationReasons.length - 1
                      ? "border-b border-[#DFEAF2]"
                      : ""
                  }`}
                >
                  {/* CHECK ICON */}

                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D6EAF4] bg-[#EAF6FC] text-[#2E91C8] transition-all duration-300 group-hover:border-[#102D5F] group-hover:bg-[#102D5F] group-hover:text-white">
                    <Check size={19} strokeWidth={2.3} />
                  </span>

                  {/* TEXT */}

                  <p className="m-0 flex-1 text-[14px] font-medium leading-[1.8] text-[#344B64] transition-colors duration-300 group-hover:text-[#102D5F] sm:text-[16px]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div data-aos="fade-up" className="mt-7">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_28px_rgba(16,45,95,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[15px]"
              >
                <CalendarDays size={19} strokeWidth={1.8} />

                Book Dermatology Consultation

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* ======================================
            BOTTOM MEDICAL NOTE
        ====================================== */}

        <div
          data-aos="fade-up"
          className="mt-12 flex flex-col items-start gap-4 rounded-[20px] border border-[#DCE8F2] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(16,45,95,0.04)] sm:mt-14 sm:flex-row sm:items-center sm:px-7 lg:mt-16"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EAF6FC] text-[#2E91C8]">
            <AlertCircle size={25} strokeWidth={1.7} />
          </div>

          <div className="flex-1">
            <h3 className="m-0 text-[16px] font-bold text-[#102D5F] sm:text-[18px]">
              Early Medical Assessment Matters
            </h3>

            <p className="m-0 mt-1.5 text-[13px] leading-[1.8] text-[#617185] sm:text-[15px]">
              Skin lesions that change in size, colour or
              appearance should be evaluated by a qualified
              medical professional. Further investigations
              or treatment depend on clinical findings.
            </p>
          </div>

          <ShieldCheck
            size={28}
            className="hidden shrink-0 text-[#2E91C8] sm:block"
          />
        </div>
      </div>

      {/* FLOATING ANIMATION */}

      <style>{`
        @keyframes dermaConsultFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .derma-consult-float {
          animation: dermaConsultFloat 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .derma-consult-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DermatologyWhenToConsult;
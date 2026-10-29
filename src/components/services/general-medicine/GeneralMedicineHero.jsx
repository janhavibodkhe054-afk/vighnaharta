import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  CalendarDays,
  Phone,
  HeartPulse,
  Activity,
  Stethoscope,
  Cross,
} from "lucide-react";

const GeneralMedicineHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });
  }, []);

  const careAreas = [
    "Diabetes Management",
    "Hypertension Management",
    "Acute & Chronic Medical Care",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[-130px] h-[450px] w-[450px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[-160px] h-[480px] w-[480px] rounded-full bg-[#2E91C8]/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#102D5F 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute left-[5%] top-[15%] hidden h-[68%] w-px bg-gradient-to-b from-transparent via-[#2E91C8]/10 to-transparent xl:block" />
      </div>

      <div className="relative mx-auto grid min-h-[570px] max-w-[1440px] items-center gap-10 px-4 py-12 sm:min-h-[600px] sm:px-6 sm:py-14 md:grid-cols-[1.02fr_.98fr] md:gap-8 lg:min-h-[640px] lg:gap-14 lg:px-8 lg:py-[72px] xl:gap-16">
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="relative z-20 mx-auto w-full max-w-[660px] md:mx-0">
          {/* LABEL */}
          <div
            data-aos="fade-up"
            className="mb-5 inline-flex items-center gap-3"
          >
            <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E5F5FB] text-[#2E91C8]">
              <Stethoscope size={14} strokeWidth={1.9} />

              <span className="medicine-label-pulse absolute inset-[-3px] rounded-full border border-[#2E91C8]/20" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[2.2px] text-[#2E91C8] sm:text-[12px]">
              General Medicine
            </span>

            <span className="h-px w-8 bg-gradient-to-r from-[#2E91C8]/60 to-transparent" />
          </div>

          {/* HEADING */}
          <h1
            data-aos="fade-up"
            data-aos-delay="70"
            className="max-w-[690px] text-[34px] font-bold leading-[1.1] tracking-[-1.2px] text-[#102D5F] sm:text-[40px] md:text-[43px] lg:text-[50px] xl:text-[54px]"
          >
            Medical Care for{" "}
            <span className="relative text-[#2E91C8]">
              Acute & Ongoing
              <span className="medicine-heading-line absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-[#2E91C8] via-[#55B8E9] to-transparent" />
            </span>{" "}
            Health Concerns
          </h1>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-up"
            data-aos-delay="140"
            className="mt-7 max-w-[610px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]"
          >
            Evaluation and management of common medical conditions and ongoing
            health concerns.
          </p>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="210"
            className="mt-7 flex flex-col gap-3 min-[430px]:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[14px]"
            >
              <CalendarDays size={16} strokeWidth={1.9} />

              Book Consultation

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:+917757004175"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-[#D4E7F0] bg-white px-6 text-[13px] font-bold text-[#102D5F] shadow-[0_8px_25px_rgba(16,45,95,.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E91C8]/40 hover:text-[#2E91C8] sm:text-[14px]"
            >
              <Phone
                size={16}
                strokeWidth={1.9}
                className="text-[#2E91C8]"
              />

              Call Hospital
            </a>
          </div>

          {/* CARE AREAS */}
          <div
            data-aos="fade-up"
            data-aos-delay="280"
            className="mt-8 border-t border-[#DCEBF2] pt-5"
          >
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {careAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full bg-[#E7F6FC]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#2E91C8]" />
                  </span>

                  <span className="text-[12px] font-semibold text-[#536578] sm:text-[13px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT CLINICAL DASHBOARD
        ===================================================== */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="relative mx-auto w-full max-w-[600px] md:mx-0 md:ml-auto"
        >
          {/* BACK FRAME */}
          <div className="absolute -right-3 top-5 h-[94%] w-[93%] rounded-[30px] border border-[#D4EAF3] bg-[#E8F6FB] sm:-right-5" />

          {/* IMAGE */}
          <div className="group relative h-[340px] overflow-hidden rounded-[26px] border border-white bg-[#DDEFF7] shadow-[0_28px_70px_rgba(16,45,95,.15)] min-[430px]:h-[390px] sm:h-[440px] md:h-[480px] lg:h-[520px]">
            <img
              src="/general-medicine.png"
              alt="General Medicine"
              className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/60 via-transparent to-[#071B3A]/5" />

            {/* TOP STATUS */}
            <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-[#071B3A]/60 px-3 py-2 backdrop-blur-md sm:left-5 sm:top-5">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#69CBF2] opacity-40" />
                <span className="relative h-[7px] w-[7px] rounded-full bg-[#69CBF2]" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-white sm:text-[10px]">
                General Medicine
              </span>
            </div>

            {/* CLINICAL MONITOR */}
            <div className="absolute right-4 top-4 z-20 w-[125px] overflow-hidden rounded-[15px] border border-white/15 bg-[#071B3A]/70 p-3 backdrop-blur-md sm:right-5 sm:top-5 sm:w-[145px]">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <HeartPulse
                    size={13}
                    strokeWidth={1.8}
                    className="text-[#69CBF2]"
                  />

                  <span className="text-[8px] font-bold uppercase tracking-[1px] text-white/65 sm:text-[9px]">
                    Clinical Care
                  </span>
                </div>

                <span className="h-[5px] w-[5px] rounded-full bg-[#69CBF2]" />
              </div>

              {/* ECG */}
              <div className="relative h-[35px] overflow-hidden">
                <svg
                  viewBox="0 0 160 45"
                  className="absolute inset-0 h-full w-[200%] medicine-ecg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 24 H20 L28 24 L34 9 L42 38 L50 18 L58 24 H82 L90 24 L96 12 L103 35 L111 18 L118 24 H160"
                    fill="none"
                    stroke="#69CBF2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-[3px] flex-1 rounded-full bg-white/10">
                  <span className="block h-full w-[65%] rounded-full bg-[#69CBF2]/70" />
                </span>

                <Activity
                  size={10}
                  className="text-[#69CBF2]"
                />
              </div>
            </div>

            {/* BOTTOM DASHBOARD */}
            <div className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-5 sm:left-5 sm:right-5">
              <div className="overflow-hidden rounded-[17px] border border-white/15 bg-[#071B3A]/75 backdrop-blur-md">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-white text-[#2E91C8]">
                    <Stethoscope size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[1.3px] text-[#8EDBF7]">
                      Medical Evaluation
                    </span>

                    <span className="mt-[2px] block text-[13px] font-semibold text-white sm:text-[14px]">
                      Acute & Ongoing Health Concerns
                    </span>
                  </div>

                  <div className="hidden h-[34px] w-px bg-white/10 sm:block" />

                  <Activity
                    size={18}
                    strokeWidth={1.7}
                    className="hidden shrink-0 text-[#69CBF2] sm:block"
                  />
                </div>

                {/* MOVING HEALTH LINE */}
                <div className="relative h-[3px] overflow-hidden bg-white/[0.05]">
                  <span className="medicine-bottom-scan absolute inset-y-0 w-[90px] bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent" />
                </div>
              </div>
            </div>

            {/* CORNERS */}
            <span className="absolute left-5 top-[75px] h-7 w-7 border-l border-t border-white/35" />
            <span className="absolute bottom-[90px] right-5 h-7 w-7 border-b border-r border-white/35" />
          </div>

          {/* FLOATING MEDICAL NODE */}
          <div className="absolute -right-2 top-[48%] z-30 hidden sm:block lg:-right-5">
            <div className="relative flex h-[48px] w-[48px] items-center justify-center rounded-full border-[5px] border-[#F7FBFD] bg-[#102D5F] text-white shadow-[0_10px_30px_rgba(16,45,95,.18)]">
              <Cross size={17} strokeWidth={2} />

              <span className="medicine-node-pulse absolute inset-[-5px] rounded-full border border-[#2E91C8]/35" />
            </div>
          </div>

          {/* DOTS */}
          <div className="absolute -bottom-5 -left-5 -z-0 hidden grid-cols-5 gap-2 lg:grid">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="h-[4px] w-[4px] rounded-full bg-[#2E91C8]/25"
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="relative mx-auto hidden max-w-[1440px] px-8 md:block">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C6E1EC] to-transparent" />

        <span className="medicine-page-signal absolute bottom-[-2px] left-[12%] h-[5px] w-[90px] rounded-full bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent" />
      </div>

      <style>{`
        @keyframes medicineHeading {
          0% {
            transform: scaleX(0);
          }

          100% {
            transform: scaleX(1);
          }
        }

        @keyframes medicineECG {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes medicineScan {
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

        @keyframes medicinePulse {
          0% {
            transform: scale(.85);
            opacity: .6;
          }

          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @keyframes medicinePageSignal {
          0% {
            left: 10%;
            opacity: 0;
          }

          15% {
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

        .medicine-heading-line {
          animation: medicineHeading 1.2s ease-out .5s both;
        }

        .medicine-ecg {
          animation: medicineECG 5s linear infinite;
        }

        .medicine-bottom-scan {
          animation: medicineScan 4s ease-in-out infinite;
        }

        .medicine-node-pulse,
        .medicine-label-pulse {
          animation: medicinePulse 2.3s ease-out infinite;
        }

        .medicine-page-signal {
          animation: medicinePageSignal 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .medicine-heading-line,
          .medicine-ecg,
          .medicine-bottom-scan,
          .medicine-node-pulse,
          .medicine-label-pulse,
          .medicine-page-signal {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GeneralMedicineHero;
import React, { useEffect } from "react";
import {
  Activity,
  HeartPulse,
  Gauge,
  Radio,
  Heart,
  ShieldCheck,
  Clock3,
  ArrowUpRight,
  Info,
  PhoneCall,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const diagnosticTests = [
  {
    number: "02",
    title: "2D Echocardiography",
    description:
      "Uses ultrasound to assess the structure, movement and pumping function of the heart.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "TMT / Cardiac Stress Test",
    description:
      "Assesses the heart's response to physical exercise under appropriate medical supervision.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Holter Monitoring",
    description:
      "Records heart rhythm continuously over an extended period, commonly 24–48 hours or longer depending on the device.",
    icon: Radio,
  },
  {
    number: "05",
    title: "ABPM",
    description:
      "Measures blood pressure repeatedly during daily activities and sleep over a monitoring period, commonly 24 hours.",
    icon: Heart,
  },
];

const CardiacDiagnosticInvestigations = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 20,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F4F3FA] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#E4E8F8]/70 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#DCECF8]/60 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-10 max-w-[850px] text-center sm:mb-12">
          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6E8F4] bg-white px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#2E91C8]" />

            <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#2E91C8] sm:text-[14px]">
              Heart Health Investigations
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] lg:text-[42px]"
          >
            Cardiac Diagnostic{" "}
            <span className="text-[#2E91C8]">
              Investigations
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mx-auto mt-4 max-w-[740px] text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
          >
            Diagnostic investigations help doctors assess
            heart function, evaluate symptoms and guide
            appropriate medical decisions.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-7">
          {/* LEFT FEATURED ECG */}
          <div
            data-aos="fade-right"
            className="relative flex flex-col overflow-hidden rounded-[26px] bg-gradient-to-br from-[#102D5F] via-[#0C2A52] to-[#071B3A] p-6 shadow-[0_22px_55px_rgba(16,45,95,0.16)] sm:p-8 lg:p-9"
          >
            {/* GRID TEXTURE */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  "linear-gradient(#69CBF2 1px, transparent 1px), linear-gradient(90deg, #69CBF2 1px, transparent 1px)",
                backgroundSize: "25px 25px",
              }}
            />

            <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[#2E91C8]/20 blur-[70px]" />

            {/* TOP */}
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex h-[65px] w-[65px] items-center justify-center rounded-[18px] border border-white/15 bg-white/10 text-[#8ADCF9]">
                <Activity size={33} strokeWidth={1.6} />
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#8ADCF9]/25 bg-[#8ADCF9]/10 px-3 py-1.5 text-[12px] font-semibold text-[#A9E5FA]">
                <ShieldCheck size={14} />
                Confirmed
              </span>
            </div>

            {/* ECG CONTENT */}
            <div className="relative z-10 mt-8">
              <span className="text-[13px] font-bold tracking-[1.5px] text-[#8ADCF9]">
                01 / CARDIAC INVESTIGATION
              </span>

              <h3 className="m-0 mt-3 text-[27px] font-bold leading-[1.2] text-white sm:text-[32px]">
                ECG
                <span className="mt-1 block text-[18px] font-medium text-[#B9D6E8] sm:text-[20px]">
                  Electrocardiogram
                </span>
              </h3>

              <p className="m-0 mt-5 max-w-[490px] text-[14px] leading-[1.85] text-[#D3E3EF] sm:text-[16px]">
                Records the electrical activity of the heart
                to support clinical evaluation.
              </p>
            </div>

            {/* ECG VISUAL */}
            <div className="relative z-10 my-8 overflow-hidden rounded-[17px] border border-white/10 bg-[#071B3A]/45 px-4 py-5 sm:my-10">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[12px] font-semibold tracking-[1px] text-[#A9D8ED]">
                  ECG WAVEFORM
                </span>

                <span className="flex items-center gap-2 text-[12px] text-[#A9D8ED]">
                  <span className="h-2 w-2 rounded-full bg-[#69CBF2]" />
                  Illustration
                </span>
              </div>

              <svg
                viewBox="0 0 600 130"
                fill="none"
                className="h-[120px] w-full sm:h-[145px]"
                role="img"
                aria-label="Illustrative ECG waveform"
              >
                <path
                  d="M0 72 H75 L95 72 L112 58 L133 91 L151 72 H205 L225 72 L244 18 L265 116 L288 72 H370 L390 72 L408 58 L428 91 L448 72 H505 L525 72 L544 18 L565 116 L585 72 H600"
                  stroke="#69CBF2"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cardiac-investigation-wave"
                />
              </svg>
            </div>

            {/* BOTTOM */}
            <div className="relative z-10 mt-auto flex items-center justify-between gap-3 border-t border-white/15 pt-5">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#C8E3F1] sm:text-[14px]">
                <HeartPulse size={18} className="text-[#8ADCF9]" />
                Heart Rhythm Assessment
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#8ADCF9]">
                <Activity size={19} />
              </div>
            </div>
          </div>

          {/* RIGHT INVESTIGATION LIST */}
          <div className="flex flex-col gap-4">
            {diagnosticTests.map((test, index) => {
              const Icon = test.icon;

              return (
                <div
                  key={test.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                  className="group relative flex flex-1 items-start gap-4 overflow-hidden rounded-[20px] border border-[#E1E8F0] bg-white p-5 shadow-[0_7px_25px_rgba(16,45,95,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DDEC] hover:shadow-[0_14px_35px_rgba(16,45,95,0.09)] sm:gap-5 sm:p-6"
                >
                  {/* ICON */}
                  <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[15px] bg-[#EAF6FC] text-[#2E91C8] transition-colors duration-300 group-hover:bg-[#102D5F] group-hover:text-white sm:h-[60px] sm:w-[60px]">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="m-0 text-[18px] font-bold leading-[1.35] text-[#102D5F] sm:text-[20px]">
                        {test.title}
                      </h3>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5E9] px-2.5 py-1 text-[11px] font-semibold text-[#A96B21] sm:text-[12px]">
                        <Clock3 size={13} />
                        Availability to be Confirmed
                      </span>
                    </div>

                    <p className="m-0 mt-2.5 text-[14px] leading-[1.75] text-[#53667C] sm:text-[15px]">
                      {test.description}
                    </p>
                  </div>

                  <span className="absolute right-4 top-4 text-[12px] font-bold text-[#CBDDE9]">
                    {test.number}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* AVAILABILITY NOTICE */}
        <div
          data-aos="fade-up"
          className="mt-8 flex flex-col gap-4 rounded-[19px] border border-[#DCE6F0] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F6FC] text-[#2E91C8]">
              <Info size={22} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="m-0 text-[16px] font-bold text-[#102D5F] sm:text-[18px]">
                Test Availability & Clinical Guidance
              </h3>

              <p className="m-0 mt-1.5 max-w-[800px] text-[13px] leading-[1.8] text-[#53667C] sm:text-[15px]">
                ECG is a confirmed investigation. Availability
                of 2D Echo, TMT, Holter Monitoring and ABPM
                must be confirmed with the hospital.
                Tests are recommended according to individual
                clinical requirements.
              </p>
            </div>
          </div>

          <a
            href="tel:+918042756213"
            className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#102D5F] px-5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#2E91C8] sm:text-[14px]"
          >
            <PhoneCall size={17} />
            Confirm Availability
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .cardiac-investigation-wave {
          stroke-dasharray: 1300;
          stroke-dashoffset: 1300;
          animation: cardiacInvestigationDraw 4.5s ease-in-out infinite;
        }

        @keyframes cardiacInvestigationDraw {
          0% {
            stroke-dashoffset: 1300;
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

        @media (prefers-reduced-motion: reduce) {
          .cardiac-investigation-wave {
            animation: none !important;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CardiacDiagnosticInvestigations;
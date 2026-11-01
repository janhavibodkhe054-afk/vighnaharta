
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Check,
  CalendarDays,
  ArrowUpRight,
  AlertTriangle,
  PhoneCall,
  ShieldAlert,
  Activity,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ==========================================
   CONSULTATION REASONS
========================================== */

const consultationReasons = [
  "Persistent headaches, dizziness or other brain-related neurological symptoms.",

  "Persistent neck or back pain with radiating symptoms.",

  "Numbness, tingling or weakness affecting an arm or leg.",

  "Symptoms following a head or spine-related injury.",

  "A recommendation for specialist brain, spine or nerve evaluation.",
];

/* ==========================================
   MAIN COMPONENT
========================================== */

const NeurospineWhenToConsult = () => {
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
    <section className="relative isolate overflow-hidden bg-[#F8FBFE] py-12 sm:py-16 lg:py-20">
      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#E1F0FA]/60 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#E8F1FA]/60 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* ======================================
            MAIN GRID
        ====================================== */}

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

            <div className="group relative h-[360px] overflow-hidden rounded-[26px] bg-[#DCEAF3] shadow-[0_25px_65px_rgba(16,45,95,0.13)] sm:h-[470px] lg:h-[550px]">
              <img
                src="/neuro2.png"
                alt="Medical consultation for brain, spine and nerve-related symptoms"
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
              />

              {/* GRADIENT */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/75 via-[#071B3A]/10 to-transparent" />

              {/* IMAGE CAPTION */}

              <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                    <Activity size={25} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p className="m-0 text-[18px] font-bold text-white sm:text-[21px]">
                      Brain, Spine &amp; Nerve Assessment
                    </p>

                    <p className="m-0 mt-1 text-[12px] text-white/85 sm:text-[14px]">
                      Consultation • Evaluation • Guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING ICON */}

            <div className="neuro-consult-float absolute -right-3 top-9 flex h-[66px] w-[66px] items-center justify-center rounded-[20px] border-[6px] border-[#F8FBFE] bg-[#102D5F] text-white shadow-[0_12px_30px_rgba(16,45,95,0.16)] sm:-right-6 sm:top-12 sm:h-[76px] sm:w-[76px]">
              <Brain size={30} strokeWidth={1.7} />
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
              <Brain
                size={17}
                strokeWidth={1.8}
                className="text-[#2E91C8]"
              />

              <span className="text-[12px] font-bold uppercase tracking-[1.3px] text-[#2E91C8] sm:text-[14px]">
                Brain, Spine &amp; Nerve Consultation
              </span>
            </div>

            {/* HEADING */}

            <h2
              data-aos="fade-up"
              data-aos-delay="70"
              className="m-0 max-w-[720px] text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] lg:text-[42px]"
            >
              When to Seek{" "}
              <span className="text-[#2E91C8]">
                Brain, Spine &amp; Nerve Consultation
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="m-0 mt-4 text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
            >
              Certain symptoms affecting the brain, spine,
              nerves or neurological function may require
              medical assessment and specialist guidance.
            </p>

            {/* ======================================
                CONSULTATION CHECKLIST
            ====================================== */}

            <div className="mt-7">
              {consultationReasons.map((reason, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 50}
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

            {/* CONSULTATION CTA */}

            <div data-aos="fade-up" className="mt-7">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_28px_rgba(16,45,95,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[15px]"
              >
                <CalendarDays size={19} strokeWidth={1.8} />

                Book Consultation

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* ======================================
            URGENT WARNING
        ====================================== */}

        <div
          data-aos="fade-up"
          className="relative mt-12 overflow-hidden rounded-[22px] border border-[#F2D0D4] bg-[#FFF5F5] sm:mt-14 lg:mt-16"
        >
          {/* RED LEFT ACCENT */}

          <div className="absolute bottom-0 left-0 top-0 w-[5px] bg-[#C93542]" />

          <div className="flex flex-col gap-5 px-5 py-6 sm:flex-row sm:items-start sm:gap-6 sm:px-7 sm:py-7 lg:px-9">
            {/* WARNING ICON */}

            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[17px] bg-[#FCE4E6] text-[#C93542]">
              <ShieldAlert size={30} strokeWidth={1.7} />
            </div>

            {/* WARNING CONTENT */}

            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center gap-2">
                <AlertTriangle
                  size={19}
                  className="shrink-0 text-[#C93542]"
                />

                <h3 className="m-0 text-[18px] font-bold text-[#A82D39] sm:text-[21px]">
                  Urgent Warning — Seek Immediate Medical Care
                </h3>
              </div>

              <p className="m-0 text-[14px] leading-[1.85] text-[#684A50] sm:text-[16px]">
                Sudden facial drooping, speech difficulty,
                severe sudden headache, new bladder or bowel
                dysfunction, numbness around the groin or
                rapidly progressive limb weakness may indicate
                a medical emergency and require immediate
                assessment.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+917757004175"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#C93542] px-5 py-2.5 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-[#A82D39] sm:text-[14px]"
                >
                  <PhoneCall size={17} />

                  Call Emergency – +91 7757004175
                </a>

                <span className="text-[12px] font-medium leading-[1.6] text-[#8A5D63] sm:text-[13px]">
                  For emergency assistance in India, call 112.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================
          ANIMATION
      ====================================== */}

      <style>{`
        @keyframes neuroConsultFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .neuro-consult-float {
          animation: neuroConsultFloat 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .neuro-consult-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NeurospineWhenToConsult;

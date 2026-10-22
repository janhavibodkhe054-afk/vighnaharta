import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  CalendarDays,
  ArrowUpRight,
  PhoneCall,
  ShieldCheck,
  Activity,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const NeurospineFinalCTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F8FBFE] py-14 sm:py-16 lg:py-20">
      {/* LIGHT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#F8FBFE] to-[#EAF5FC]" />

      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#D7EDFA]/60 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#DFEAFB]/60 blur-[110px]" />

      {/* DECORATIVE CIRCLES */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-[350px] w-[350px] rounded-full border border-[#2E91C8]/10 sm:h-[500px] sm:w-[500px]" />

      <div className="pointer-events-none absolute -right-12 -top-20 h-[270px] w-[270px] rounded-full border border-[#2E91C8]/10 sm:h-[390px] sm:w-[390px]" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 text-center sm:px-6 lg:px-8">
        {/* LABEL */}
        <div
          data-aos="fade-up"
          className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#D8EAF5] bg-white px-4 py-2 shadow-sm"
        >
          <Brain size={18} className="text-[#2E91C8]" />

          <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#2E91C8] sm:text-[14px]">
            Neurospine Care
          </span>
        </div>

        {/* HEADING */}
        <h2
          data-aos="fade-up"
          data-aos-delay="70"
          className="mx-auto max-w-[900px] text-[32px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[39px] lg:text-[46px]"
        >
          Take the Next Step Towards{" "}
          <span className="text-[#2E91C8]">
            Better Spine &amp; Nerve Health
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          data-aos="fade-up"
          data-aos-delay="130"
          className="mx-auto mt-5 max-w-[730px] text-[14px] leading-[1.9] text-[#53667C] sm:text-[16px]"
        >
          If you are experiencing persistent back pain,
          neck discomfort or nerve-related symptoms,
          seek medical evaluation to understand your
          condition and discuss appropriate next steps.
        </p>

        {/* CTA BUTTONS */}
        <div
          data-aos="fade-up"
          data-aos-delay="190"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-7 py-3 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:w-auto sm:text-[15px]"
          >
            <CalendarDays size={19} />

            Book Consultation

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            to="/contact"
            className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full border border-[#D2E4F0] bg-white px-7 py-3 text-[14px] font-bold text-[#102D5F] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E91C8] hover:text-[#2E91C8] sm:w-auto sm:text-[15px]"
          >
            Contact Hospital

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* SUPPORT DETAILS */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="mx-auto mt-10 flex max-w-[800px] flex-col items-center justify-center gap-4 border-t border-[#DCE8F2] pt-7 sm:flex-row sm:gap-8"
        >
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={20} className="text-[#2E91C8]" />

            <span className="text-[13px] font-medium text-[#53667C] sm:text-[15px]">
              Clinical Evaluation &amp; Guidance
            </span>
          </div>

          <span className="hidden h-5 w-px bg-[#D3E2EE] sm:block" />

          <a
            href="tel:+919766999474"
            className="flex items-center gap-2.5 text-[13px] font-semibold text-[#102D5F] transition-colors hover:text-[#2E91C8] sm:text-[15px]"
          >
            <PhoneCall size={19} className="text-[#2E91C8]" />

            Emergency: +91 9766999474
          </a>
        </div>

        {/* IMPORTANT NOTE */}
        <p
          data-aos="fade-up"
          className="mx-auto mt-6 max-w-[760px] text-[12px] leading-[1.8] text-[#64748B] sm:text-[13px]"
        >
          For sudden or rapidly worsening weakness, new
          bladder or bowel dysfunction, or numbness around
          the groin, seek emergency medical assessment
          immediately rather than waiting for a routine
          appointment.
        </p>
      </div>

      {/* ANIMATED DECORATIVE ICON */}
      <div className="pointer-events-none absolute bottom-8 left-8 hidden text-[#2E91C8]/15 lg:block">
        <Activity
          size={75}
          strokeWidth={0.8}
          className="neuro-cta-pulse"
        />
      </div>

      <style>{`
        @keyframes neuroCTAPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }

          50% {
            opacity: 0.75;
            transform: scale(1.08);
          }
        }

        .neuro-cta-pulse {
          animation: neuroCTAPulse 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .neuro-cta-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NeurospineFinalCTA;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  CalendarDays,
  Stethoscope,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const consultationReasons = [
  "A suspicious lump or abnormal finding requiring assessment.",
  "An abnormal investigation report suggesting possible cancer.",
  "A confirmed cancer diagnosis requiring specialist guidance.",
  "A need to understand treatment recommendations or seek a second opinion.",
  "Follow-up advice after previous cancer treatment.",
];

const OncologyWhenToConsult = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 35,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F8FBFE] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#DCEFFA]/50 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#E8F3FC]/70 blur-[100px]" />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-20">
          {/* LEFT IMAGE */}
          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[600px] lg:mx-0"
          >
            {/* IMAGE FRAME */}
            <div className="relative h-[340px] overflow-hidden rounded-[24px] bg-[#DFECF4] shadow-[0_20px_55px_rgba(16,45,95,0.10)] sm:h-[440px] sm:rounded-[30px] lg:h-[520px]">
              <img
                src="/oncology2.png"
                alt="Doctor discussing medical reports during an oncology consultation"
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/40 via-transparent to-transparent" />

              {/* IMAGE BOTTOM LABEL */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 sm:bottom-7 sm:left-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                  <Stethoscope size={22} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="m-0 text-[15px] font-bold text-white sm:text-[17px]">
                    Oncology Consultation
                  </p>

                  <p className="m-0 mt-0.5 text-[13px] text-white/85">
                    Medical Assessment & Guidance
                  </p>
                </div>
              </div>
            </div>

            {/* DECORATIVE OFFSET FRAME */}
            <div className="pointer-events-none absolute -bottom-4 -left-4 -z-10 hidden h-full w-full rounded-[30px] border border-[#B9DEEF] sm:block" />

            {/* FLOATING ICON */}
            <div className="absolute -right-3 top-8 flex h-16 w-16 items-center justify-center rounded-2xl border-[6px] border-[#F8FBFE] bg-[#102D5F] text-white shadow-lg sm:-right-6 sm:h-[76px] sm:w-[76px]">
              <Stethoscope size={29} strokeWidth={1.6} />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10">
            {/* LABEL */}
            <div
              data-aos="fade-up"
              className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#D7EAF5] bg-white px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#2E91C8]" />

              <span className="text-[13px] font-bold uppercase tracking-[1.3px] text-[#2E91C8] sm:text-[15px]">
                Consultation Guidance
              </span>
            </div>

            {/* HEADING */}
            <h2
              data-aos="fade-up"
              data-aos-delay="70"
              className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] lg:text-[40px]"
            >
              When to Consult an{" "}
              <span className="text-[#2E91C8]">
                Oncology Specialist
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="110"
              className="m-0 mt-4 max-w-[650px] text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
            >
              Certain symptoms, investigation findings or an
              existing diagnosis may require specialist medical
              evaluation. Consider seeking oncology consultation
              in the following situations.
            </p>

            {/* CONSULTATION REASONS — NO CARDS */}
            <div className="mt-7 space-y-0">
              {consultationReasons.map((reason, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={130 + index * 55}
                  className="group flex items-start gap-4 border-b border-[#DFEAF1] py-4 first:pt-0 last:border-b-0"
                >
                  {/* CHECK ICON */}
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5F4FB] text-[#2E91C8] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white">
                    <Check size={18} strokeWidth={2.2} />
                  </div>

                  {/* TEXT */}
                  <p className="m-0 flex-1 text-[15px] font-medium leading-[1.7] text-[#29435E] sm:text-[16px]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                to="/contact"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[15px]"
              >
                <CalendarDays size={18} />

                Book Consultation

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OncologyWhenToConsult;
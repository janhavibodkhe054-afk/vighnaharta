import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  Check,
  AlertTriangle,
  PhoneCall,
  Stethoscope,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const indications = [
  "Chest discomfort or symptoms requiring cardiac assessment.",
  "Palpitations or suspected heart rhythm abnormalities.",
  "Breathlessness where a cardiac cause needs evaluation.",
  "High blood pressure requiring additional assessment.",
  "Follow-up of a previously diagnosed heart condition.",
  "Preventive assessment when advised by a healthcare professional.",
];

const CardiacTestingWhenRecommended = () => {
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
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[340px] w-[340px] rounded-full bg-[#E1F1FA]/65 blur-[90px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#EAF2FC]/70 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">

          {/* LEFT IMAGE */}
          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[590px] lg:mx-0"
          >
            {/* IMAGE FRAME */}
            <div className="relative overflow-hidden rounded-[26px] bg-[#DCECF5] shadow-[0_25px_65px_rgba(16,45,95,0.12)] sm:rounded-[32px]">
              <img
                src="/cardiac2.png"
                alt="Doctor discussing cardiac diagnostic assessment with a patient"
                loading="lazy"
                className="h-[340px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.045] sm:h-[450px] lg:h-[530px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/70 via-transparent to-transparent" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                    <HeartPulse size={25} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p className="m-0 text-[17px] font-bold text-white sm:text-[20px]">
                      Heart Health Assessment
                    </p>

                    <p className="m-0 mt-1 text-[12px] text-white/85 sm:text-[14px]">
                      Consultation • Evaluation • Guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING ELEMENT */}
            <div className="absolute -right-2 top-7 flex items-center gap-3 rounded-2xl border border-[#DFEAF3] bg-white px-4 py-3 shadow-[0_15px_40px_rgba(16,45,95,0.12)] sm:-right-5 sm:top-10 sm:px-5 sm:py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9F6FC] text-[#2E91C8]">
                <Stethoscope size={21} strokeWidth={1.8} />
              </span>

              <div>
                <p className="m-0 text-[13px] font-bold text-[#102D5F] sm:text-[15px]">
                  Clinical Evaluation
                </p>

                <p className="m-0 mt-0.5 text-[11px] text-[#64748B] sm:text-[12px]">
                  Doctor-guided assessment
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* LABEL */}
            <div
              data-aos="fade-up"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6EAF5] bg-[#EDF8FD] px-4 py-2"
            >
              <Activity
                size={16}
                strokeWidth={1.8}
                className="text-[#2E91C8]"
              />

              <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#2E91C8] sm:text-[14px]">
                When to Consider Testing
              </span>
            </div>

            {/* HEADING */}
            <h2
              data-aos="fade-up"
              data-aos-delay="70"
              className="m-0 max-w-[680px] text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] lg:text-[40px]"
            >
              When Might Cardiac Testing{" "}
              <span className="text-[#2E91C8]">
                Be Recommended?
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="110"
              className="m-0 mt-4 text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
            >
              Your doctor may recommend cardiac investigations
              based on symptoms, medical history and individual
              health needs.
            </p>

            {/* INDICATIONS */}
            <div className="mt-7">
              {indications.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 55, 275)}
                  className={`group flex items-start gap-4 py-3.5 transition-all duration-300 ${
                    index !== indications.length - 1
                      ? "border-b border-[#E1EAF2]"
                      : ""
                  }`}
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#CDE8F5] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 group-hover:border-[#2E91C8] group-hover:bg-[#2E91C8] group-hover:text-white">
                    <Check size={17} strokeWidth={2.2} />
                  </span>

                  <p className="m-0 flex-1 text-[14px] font-medium leading-[1.75] text-[#354D66] sm:text-[16px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              data-aos="fade-up"
              className="mt-7"
            >
              <Link
                to="/contact"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(16,45,95,0.13)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[15px]"
              >
                <HeartPulse size={19} strokeWidth={1.8} />

                Enquire About Cardiac Testing

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* EMERGENCY WARNING */}
        <div
          data-aos="fade-up"
          className="relative mt-12 overflow-hidden rounded-[20px] border border-[#F2D6D8] bg-[#FFF5F5] sm:mt-14"
        >
          <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#D33E4B]" />

          <div className="flex flex-col gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FCE4E6] text-[#C93542]">
                <AlertTriangle size={24} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="m-0 text-[17px] font-bold text-[#A52B38] sm:text-[19px]">
                  Important: Know When to Seek Emergency Care
                </h3>

                <p className="m-0 mt-2 max-w-[930px] text-[13px] leading-[1.8] text-[#704C51] sm:text-[15px]">
                  New or severe chest pain, significant
                  breathlessness, fainting or suspected heart
                  attack symptoms require emergency assessment
                  rather than routine diagnostic booking.
                </p>
              </div>
            </div>

            <a
              href="tel:+919766999474"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 self-start rounded-full bg-[#C93542] px-5 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#A82936] sm:self-auto sm:text-[14px]"
            >
              <PhoneCall size={18} strokeWidth={1.8} />
              Emergency Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardiacTestingWhenRecommended;
import React, { useEffect } from "react";
import {
  HeartPulse,
  Wind,
  UserRoundX,
  AlertTriangle,
  PhoneCall,
  ArrowUpRight,
  Siren,
  Activity,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const warningSigns = [
  {
    number: "01",
    title: "Chest Pain or Pressure",
    description:
      "New, severe or persistent chest discomfort, including pressure or tightness.",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Sudden Breathlessness",
    description:
      "Unexpected breathing difficulty, especially with other concerning symptoms.",
    icon: Wind,
  },
  {
    number: "03",
    title: "Fainting or Collapse",
    description:
      "Sudden loss of consciousness or collapse requires urgent evaluation.",
    icon: UserRoundX,
  },
  {
    number: "04",
    title: "Other Concerning Symptoms",
    description:
      "Cold sweating, nausea, dizziness or discomfort spreading to the arm, jaw or back may occur with cardiac emergencies.",
    icon: Activity,
  },
];

const EmergencyCardiacWarningSigns = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 25,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#F4F3FA] py-12 sm:py-16 lg:py-20">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-[#F8E6E9]/60 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#DFEAF8]/60 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-10 max-w-[850px] text-center sm:mb-12">
          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#F1D7DA] bg-white px-4 py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#C93542] opacity-30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#C93542]" />
            </span>

            <span className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#C93542] sm:text-[14px]">
              Recognise the Warning Signs
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] lg:text-[42px]"
          >
            Warning Signs That Need{" "}
            <span className="text-[#C93542]">
              Immediate Attention
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="mx-auto mt-4 max-w-[720px] text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
          >
            Recognising possible cardiac emergency symptoms
            can help you seek medical attention without delay.
          </p>
        </div>

        {/* WARNING SIGNS GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {warningSigns.map((sign, index) => {
            const Icon = sign.icon;

            return (
              <article
                key={sign.number}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100}
                className="group relative flex min-h-[205px] items-start gap-5 overflow-hidden rounded-[23px] border border-[#E8E5EB] bg-white p-6 shadow-[0_10px_35px_rgba(16,45,95,0.045)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#F0CDD1] hover:shadow-[0_20px_45px_rgba(16,45,95,0.1)] sm:gap-6 sm:p-7"
              >
                {/* HOVER GLOW */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#FFF0F1] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* ICON */}
                <div className="relative z-10 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[18px] border border-[#F4DDE0] bg-[#FFF0F1] text-[#C93542] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C93542] group-hover:text-white sm:h-[74px] sm:w-[74px]">
                  <Icon size={32} strokeWidth={1.7} />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 min-w-0 flex-1">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="m-0 text-[19px] font-bold leading-[1.35] text-[#102D5F] sm:text-[21px]">
                      {sign.title}
                    </h3>

                    <span className="shrink-0 text-[15px] font-bold text-[#E7D9DC]">
                      {sign.number}
                    </span>
                  </div>

                  <p className="m-0 text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]">
                    {sign.description}
                  </p>
                </div>

                {/* SIDE ACCENT */}
                <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#C93542] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* EMERGENCY ACTION STRIP */}
        <div
          data-aos="fade-up"
          className="relative mt-9 overflow-hidden rounded-[23px] bg-gradient-to-r from-[#102D5F] via-[#0C2850] to-[#071B3A] px-6 py-7 shadow-[0_20px_45px_rgba(16,45,95,0.13)] sm:px-8 lg:px-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-[250px] w-[250px] rounded-full bg-[#C93542]/15 blur-[60px]" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-[17px] border border-white/15 bg-white/10 text-[#FF9AA2]">
                <Siren size={28} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="m-0 text-[20px] font-bold leading-[1.35] text-white sm:text-[23px]">
                  Don't Ignore Possible Cardiac Emergency Symptoms
                </h3>

                <p className="m-0 mt-2 max-w-[780px] text-[13px] leading-[1.8] text-[#C8D8E8] sm:text-[15px]">
                  Seek emergency medical assessment immediately.
                  Do not wait for a routine appointment or
                  attempt to drive yourself to the hospital.
                </p>
              </div>
            </div>

            <a
              href="tel:+919766999474"
              className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-2.5 self-start rounded-full bg-[#C93542] px-6 py-3 text-[14px] font-bold text-white shadow-[0_12px_28px_rgba(201,53,66,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E04B58] lg:self-auto sm:text-[15px]"
            >
              <PhoneCall size={19} strokeWidth={1.8} />
              Call +91 9766999474
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* SAFETY NOTE */}
        <div
          data-aos="fade-up"
          className="mt-5 flex items-start justify-center gap-2.5"
        >
          <AlertTriangle
            size={17}
            strokeWidth={1.8}
            className="mt-0.5 shrink-0 text-[#C93542]"
          />

          <p className="m-0 max-w-[950px] text-[12px] leading-[1.8] text-[#6B7280] sm:text-[14px]">
            These symptoms may have different causes, but
            potentially serious cardiac conditions require
            prompt medical assessment. For emergency assistance
            in India, you can also call{" "}
            <a
              href="tel:112"
              className="font-bold text-[#C93542]"
            >
              112
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCardiacWarningSigns;
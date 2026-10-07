import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Activity, Stethoscope, ShieldPlus, Cross } from "lucide-react";

const areas = [
  {
    no: "01",
    title: "Hernia",
    text: "Evaluation and appropriate surgical care for hernia-related conditions.",
    icon: Activity,
  },
  {
    no: "02",
    title: "Appendix-Related Care",
    text: "Medical evaluation and surgical care for appendix-related conditions when appropriate.",
    icon: Cross,
  },
  {
    no: "03",
    title: "Minor Surgical Procedures",
    text: "Appropriate minor surgical procedures based on individual clinical requirements.",
    icon: Stethoscope,
  },
  {
    no: "04",
    title: "Major Surgical Procedures",
    text: "Surgical care for conditions requiring major operative management when clinically appropriate.",
    icon: ShieldPlus,
  },
];

const SurgeryKeyAreas = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[-180px] h-[400px] w-[400px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[-200px] h-[420px] w-[420px] rounded-full bg-[#2E91C8]/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-4 border-b border-[#D8E8EF] pb-7 md:grid-cols-[.8fr_1.2fr] md:items-end md:gap-10">
          <div data-aos="fade-right">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[6px] w-[6px] rotate-45 bg-[#2E91C8]" />

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
                Key Areas
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] md:text-[40px] lg:text-[42px]">
              Key Areas of{" "}
              <span className="text-[#2E91C8]">
                Surgical Care
              </span>
            </h2>
          </div>

          <p
            data-aos="fade-left"
            className="max-w-[620px] text-[15px] leading-[1.8] text-[#64748B] sm:text-[16px] lg:text-[17px]"
          >
            Evaluation and surgical care for conditions requiring appropriate
            operative management, based on individual clinical requirements.
          </p>
        </div>

        {/* AREAS */}
        <div className="mt-7 grid gap-x-8 md:grid-cols-2 lg:mt-9 lg:gap-x-14">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="group relative border-b border-[#D7E6ED] py-6 sm:py-7"
              >
                <div className="grid grid-cols-[48px_1fr] gap-4 sm:grid-cols-[54px_1fr] sm:gap-5">
                  {/* ICON */}
                  <div className="relative">
                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] border border-[#D1E6EE] bg-white text-[#2E91C8] shadow-[0_8px_24px_rgba(16,45,95,.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#2E91C8]/30 group-hover:bg-[#102D5F] group-hover:text-white sm:h-[54px] sm:w-[54px]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <span className="absolute -bottom-2 left-1/2 h-4 w-px -translate-x-1/2 bg-[#BCDCE8]" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold tracking-[1.6px] text-[#2E91C8]">
                        {area.no}
                      </span>

                      <span className="h-px w-6 bg-[#B9DCE8]" />

                      <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#91A3B2]">
                        Surgical Care
                      </span>
                    </div>

                    <h3 className="mt-2 text-[17px] font-bold leading-[1.4] text-[#102D5F] sm:text-[18px] lg:text-[19px]">
                      {area.title}
                    </h3>

                    <p className="mt-2 max-w-[440px] text-[14px] leading-[1.7] text-[#64748B] sm:text-[15px]">
                      {area.text}
                    </p>
                  </div>
                </div>

                {/* HOVER LINE */}
                <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#2E91C8] transition-all duration-500 group-hover:w-[80px]" />
              </div>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div
          data-aos="fade-up"
          className="mt-7 flex flex-col gap-3 rounded-[16px] border border-[#D6E8EF] bg-white px-4 py-4 sm:flex-row sm:items-center sm:px-5"
        >
          <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] bg-[#EAF7FC] text-[#2E91C8]">
            <Stethoscope size={17} strokeWidth={1.8} />
          </div>

          <div>
            <span className="block text-[12px] font-bold text-[#102D5F] sm:text-[13px]">
              Surgical Evaluation
            </span>

            <p className="mt-0.5 text-[13px] leading-[1.6] text-[#64748B] sm:text-[14px]">
              The appropriate surgical approach is determined according to
              individual clinical evaluation and medical requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgeryKeyAreas;
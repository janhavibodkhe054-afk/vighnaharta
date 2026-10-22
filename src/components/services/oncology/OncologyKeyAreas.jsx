import React, { useEffect } from "react";
import {
  Stethoscope,
  FileSearch,
  ClipboardCheck,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const careAreas = [
  {
    number: "01",
    title: "Cancer-Related Consultation",
    description:
      "Medical assessment and guidance for patients with suspected or diagnosed cancer.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Diagnostic Report Review",
    description:
      "Review of relevant medical reports and investigation findings.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Treatment Planning Guidance",
    description:
      "Discussion of appropriate treatment options based on specialist evaluation.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Follow-up & Care Coordination",
    description:
      "Ongoing clinical review and referral or coordination where required.",
    icon: HeartHandshake,
  },
];

const OncologyKeyAreas = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F4F3FA] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-[#E8E4F5]/60 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-[#E4E8F5]/60 blur-[90px]" />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}

        <div className="mb-9 max-w-[760px] sm:mb-11">

          {/* LABEL */}

          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9EBF5] bg-white px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#2E91C8]" />

            <span className="text-[13px] font-bold uppercase tracking-[1.4px] text-[#2E91C8] sm:text-[15px]">
              Our Care Focus
            </span>
          </div>

          {/* HEADING */}

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] lg:text-[40px]"
          >
            Key Areas of{" "}
            <span className="text-[#2E91C8]">
              Oncology Care
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="m-0 mt-4 max-w-[670px] text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
          >
            From the initial consultation to follow-up guidance,
            oncology care involves thoughtful evaluation,
            specialist recommendations and coordinated support
            based on each patient&apos;s medical needs.
          </p>
        </div>

        {/* CARE CARDS */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {careAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 85}
                className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-[22px] border border-[#E2EDF4] bg-white p-6 shadow-[0_8px_30px_rgba(16,45,95,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#B5DFF1] hover:shadow-[0_20px_45px_rgba(16,45,95,0.12)] sm:p-7"
              >

                {/* HOVER GLOW */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E3F5FC] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* TOP ROW */}

                <div className="relative z-10 mb-7 flex items-start justify-between">

                  {/* ICON */}

                  <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[17px] border border-[#DCEEF7] bg-[#EDF8FD] text-[#2E91C8] transition-all duration-500 group-hover:rotate-[-5deg] group-hover:bg-[#102D5F] group-hover:text-white">
                    <Icon
                      size={29}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* NUMBER */}

                  <span className="text-[32px] font-bold leading-none tracking-[-1px] text-[#E0EDF5] transition-colors duration-500 group-hover:text-[#C5E5F5]">
                    {item.number}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="relative z-10 flex flex-1 flex-col">

                  <h3 className="m-0 text-[19px] font-bold leading-[1.35] text-[#102D5F] sm:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="m-0 mt-3 text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]">
                    {item.description}
                  </p>

                  {/* ARROW ICON */}

                  <div className="mt-auto flex justify-end pt-7">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E0EBF2] text-[#2E91C8] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#102D5F] group-hover:bg-[#102D5F] group-hover:text-white">
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.8}
                      />
                    </div>

                  </div>
                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM INFORMATION */}

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-8 flex flex-col gap-3 rounded-[16px] border border-[#DDEBF3] bg-white/80 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6"
        >

          {/* ICON */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F6FC] text-[#2E91C8]">
            <HeartHandshake
              size={20}
              strokeWidth={1.8}
            />
          </div>

          {/* TEXT */}

          <p className="m-0 text-[14px] leading-[1.75] text-[#53667C] sm:text-[16px]">
            <span className="font-bold text-[#102D5F]">
              Individualized Care:
            </span>{" "}
            Consultation, investigation review and treatment
            recommendations depend on the patient&apos;s clinical
            condition and specialist assessment.
          </p>

        </div>

      </div>
    </section>
  );
};

export default OncologyKeyAreas;
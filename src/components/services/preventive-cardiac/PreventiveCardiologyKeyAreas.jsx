import React, { useEffect } from "react";
import {
  HeartPulse,
  Activity,
  Droplets,
  TestTubeDiagonal,
  Footprints,
  CalendarCheck2,
  ArrowUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const careAreas = [
  {
    number: "01",
    title: "Cardiovascular Risk Assessment",
    description:
      "Reviewing individual factors associated with heart disease.",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Blood Pressure Management",
    description:
      "Evaluation and guidance for blood pressure-related cardiovascular risk.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Diabetes & Heart Health",
    description:
      "Understanding the relationship between diabetes and cardiovascular risk.",
    icon: Droplets,
  },
  {
    number: "04",
    title: "Cholesterol & Lipid Risk",
    description:
      "Assessment of cholesterol-related cardiovascular concerns where indicated.",
    icon: TestTubeDiagonal,
  },
  {
    number: "05",
    title: "Lifestyle & Prevention Guidance",
    description:
      "Appropriate advice regarding activity, nutrition, smoking and other modifiable risks.",
    icon: Footprints,
  },
  {
    number: "06",
    title: "Preventive Follow-up",
    description:
      "Periodic review based on individual clinical recommendations.",
    icon: CalendarCheck2,
  },
];

const PreventiveCardiologyKeyAreas = () => {
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
    <section className="relative isolate overflow-hidden bg-[#F4F3FA] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-[#E8E4F5]/65 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-[#E4E8F5]/65 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* SECTION INTRO */}
        <div className="mb-9 max-w-[850px] sm:mb-11">
          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9EBF5] bg-white px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#2E91C8]" />

            <span className="text-[13px] font-bold uppercase tracking-[1.4px] text-[#2E91C8] sm:text-[15px]">
              Our Care Focus
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] lg:text-[40px]"
          >
            Key Areas of{" "}
            <span className="text-[#2E91C8]">
              Preventive Cardiology Care
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="m-0 mt-4 max-w-[740px] text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]"
          >
            Preventive cardiology focuses on identifying
            cardiovascular risk factors, understanding their
            potential impact and guiding appropriate preventive
            care through clinical evaluation and follow-up.
          </p>
        </div>

        {/* CARE AREA GRID */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {careAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 85}
                className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[22px] border border-[#E2EAF1] bg-white p-6 shadow-[0_8px_30px_rgba(16,45,95,0.045)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#B5DFF1] hover:shadow-[0_20px_45px_rgba(16,45,95,0.11)] sm:p-7"
              >
                {/* SOFT HOVER GLOW */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E3F5FC] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* ICON AND NUMBER */}
                <div className="relative z-10 mb-6 flex items-start justify-between">
                  <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[17px] border border-[#DCEEF7] bg-[#EDF8FD] text-[#2E91C8] transition-all duration-500 group-hover:bg-[#102D5F] group-hover:text-white">
                    <Icon size={29} strokeWidth={1.7} />
                  </div>

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

                  {/* DECORATIVE ARROW */}
                  <div className="mt-auto flex justify-end pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E0EBF2] text-[#2E91C8] transition-all duration-300 group-hover:border-[#102D5F] group-hover:bg-[#102D5F] group-hover:text-white">
                      <ArrowUpRight size={18} strokeWidth={1.8} />
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
          className="mt-8 flex items-start gap-4 rounded-[17px] border border-[#E1E9F2] bg-white/85 px-5 py-5 sm:items-center sm:px-6"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F6FC] text-[#2E91C8]">
            <HeartPulse size={22} strokeWidth={1.8} />
          </div>

          <p className="m-0 text-[14px] leading-[1.8] text-[#53667C] sm:text-[16px]">
            <span className="font-bold text-[#102D5F]">
              Personalized Prevention:
            </span>{" "}
            Cardiovascular risk evaluation and preventive
            recommendations depend on medical history, clinical
            findings and the treating doctor's assessment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreventiveCardiologyKeyAreas;
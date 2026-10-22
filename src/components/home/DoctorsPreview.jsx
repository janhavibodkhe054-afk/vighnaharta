import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  CalendarDays,
  ArrowUpRight,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const doctors = [
  {
    name: "Dr. Nagesh Hingmire",
    qualification: "[Exact Qualification]",
    speciality: "[Speciality / Designation]",
    profile:
      "Short verified profile about the doctor, area of clinical practice and approach to patient care.",
    image: "/nagesh.png",
  },
  {
    name: "Dr. Deepali Hingmire",
    qualification: "[Exact Qualification]",
    speciality: "[Speciality / Designation]",
    profile:
      "Short verified profile about the doctor, area of clinical practice and approach to patient care.",
    image: "/deepali.webp",
  },
];

const DoctorsPreview = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#EAF7FC]/70 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E7F1FA]/60 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-12 max-w-[780px] text-center sm:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DCEAF3] bg-[#F4FAFD] px-4 py-2">
            <Stethoscope
              size={17}
              className="text-[#2E91C8]"
            />

            <span className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#2E91C8] sm:text-[14px]">
              Our Medical Team
            </span>
          </div>

          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[38px] lg:text-[44px]">
            Meet Our{" "}
            <span className="text-[#2E91C8]">
              Doctors
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-[1.8] text-[#64748B] sm:text-[16px]">
            Get to know the medical professionals
            supporting patient consultation and care
            at Vighnaharta Hospital.
          </p>
        </div>

        {/* DOCTORS */}

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {doctors.map((doctor, index) => {
            const reverse = index % 2 !== 0;

            return (
              <article
                key={doctor.name}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* ===============================
                    DOCTOR PHOTO
                =============================== */}

                <div
                  data-aos={reverse ? "fade-left" : "fade-right"}
                  className="relative mx-auto w-full max-w-[540px] lg:mx-0"
                >
                  {/* DECORATIVE BACK PANEL */}

                  <div
                    className={`absolute inset-0 translate-y-4 rounded-[26px] bg-[#E7F4FA] sm:translate-y-5 ${
                      reverse
                        ? "-translate-x-3 sm:-translate-x-5"
                        : "translate-x-3 sm:translate-x-5"
                    }`}
                  />

                  {/* PHOTO CONTAINER */}

                  <div className="group relative h-[380px] overflow-hidden rounded-[24px] border border-[#E0EAF1] bg-[#EAF4F8] shadow-[0_22px_55px_rgba(16,45,95,0.12)] sm:h-[470px] lg:h-[530px] xl:h-[560px]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      className="h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.035]"
                    />

                    {/* SUBTLE PHOTO GRADIENT */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102D5F]/10 via-transparent to-transparent" />

                    {/* DOCTOR NUMBER */}

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">
                      <UserRound
                        size={16}
                        className="text-[#2E91C8]"
                      />

                      <span className="text-[12px] font-bold tracking-[1px] text-[#102D5F]">
                        DOCTOR 0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ===============================
                    DOCTOR INFORMATION
                =============================== */}

                <div
                  data-aos={reverse ? "fade-right" : "fade-left"}
                  className="relative flex flex-col items-start py-3 lg:py-6"
                >
                  {/* SMALL LABEL */}

                  <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#DDEAF3] bg-[#F3F9FD] px-4 py-2">
                    <ShieldCheck
                      size={17}
                      className="text-[#2E91C8]"
                    />

                    <span className="text-[12px] font-bold uppercase tracking-[1.3px] text-[#2E91C8]">
                      Medical Professional
                    </span>
                  </div>

                  {/* NAME */}

                  <h3 className="text-[29px] font-bold leading-[1.2] tracking-[-0.6px] text-[#102D5F] sm:text-[35px] lg:text-[39px]">
                    {doctor.name}
                  </h3>

                  {/* QUALIFICATION */}

                  <p className="mt-4 text-[15px] font-bold leading-[1.6] text-[#2E91C8] sm:text-[17px]">
                    {doctor.qualification}
                  </p>

                  {/* SPECIALITY */}

                  <p className="mt-1.5 text-[14px] font-medium leading-[1.7] text-[#60758A] sm:text-[16px]">
                    {doctor.speciality}
                  </p>

                  {/* DIVIDER */}

                  <div className="my-6 h-px w-full max-w-[490px] bg-[#DFE9F1]" />

                  {/* PROFILE */}

                  <p className="max-w-[530px] text-[14px] leading-[1.9] text-[#5B6F82] sm:text-[16px]">
                    {doctor.profile}
                  </p>

                  {/* CONSULTATION CTA */}

                  <Link
                    to="/contact"
                    className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#102D5F] px-6 py-3 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[15px]"
                  >
                    <CalendarDays size={19} />

                    Book Consultation

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoctorsPreview;
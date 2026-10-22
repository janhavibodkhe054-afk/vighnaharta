import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  CalendarDays,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

/* ==========================================
   DOCTORS DATA
========================================== */

const doctors = [
  {
    id: 1,
    name: "Dr. Nagesh Hingmire",
    qualification: "M.D. Med. (Ayu)",
    speciality: "Consulting Physician",
    location: "Pune, Maharashtra",
    description:
      "Dr. Nagesh Hingmire provides patient-focused medical consultation, clinical assessment and appropriate treatment guidance.",
    image: "/nagesh.png",
  },
  {
    id: 2,
    name: "Dr. Deepali Hingmire",
    qualification: "B.A.M.S., CSD, CVD, I.C.U.",
    speciality: "Medical Practitioner",
    location: "Pune, Maharashtra",
    description:
      "Dr. Deepali Hingmire is a medical practitioner associated with Mutation Dermacare, providing healthcare consultation and guidance.",
    image: "/deepali.webp",
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */

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
    <section
      id="our-doctors"
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#EAF7FC]/70 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E7F1FA]/60 blur-[110px]" />

      {/* MAIN CONTAINER */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* ======================================
            SECTION HEADING
        ====================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-12 max-w-[780px] text-center sm:mb-14 lg:mb-16"
        >
          {/* LABEL */}

          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#DCEAF3] bg-[#F4FAFD] px-4 py-2">
            <Stethoscope
              size={18}
              strokeWidth={1.8}
              className="text-[#2E91C8]"
            />

            <span className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#2E91C8] sm:text-[14px]">
              Our Medical Team
            </span>
          </div>

          {/* HEADING */}

          <h2 className="m-0 text-[32px] font-bold leading-[1.2] tracking-[-0.8px] text-[#102D5F] sm:text-[38px] lg:text-[44px]">
            Meet Our{" "}
            <span className="text-[#2E91C8]">
              Doctors
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-[1.8] text-[#64748B] sm:text-[16px]">
            Meet the medical professionals dedicated to
            patient consultation, clinical evaluation
            and personalized care at Vighnaharta Hospital.
          </p>
        </div>

        {/* ======================================
            DOCTORS ALTERNATING LAYOUT
        ====================================== */}

        <div className="space-y-14 sm:space-y-20 lg:space-y-24">

          {doctors.map((doctor, index) => {
            const reverse = index % 2 !== 0;

            return (
              <article
                key={doctor.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20"
              >

                {/* ==================================
                    DOCTOR IMAGE
                ================================== */}

                <div
                  data-aos={reverse ? "fade-left" : "fade-right"}
                  className={`relative mx-auto w-full max-w-[540px] lg:mx-0 ${
                    reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* DECORATIVE BACK PANEL */}

                  <div
                    className={`pointer-events-none absolute inset-0 translate-y-4 rounded-[28px] bg-[#E7F4FA] sm:translate-y-5 ${
                      reverse
                        ? "-translate-x-3 sm:-translate-x-5"
                        : "translate-x-3 sm:translate-x-5"
                    }`}
                  />

                  {/* IMAGE FRAME */}

                  <div className="group relative h-[370px] overflow-hidden rounded-[26px] border border-[#DCE8F0] bg-gradient-to-b from-[#F1F8FC] to-[#E4F1F8] shadow-[0_22px_55px_rgba(16,45,95,0.12)] sm:h-[470px] lg:h-[520px] xl:h-[550px]">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      className="h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.035]"
                    />

                    {/* SOFT BOTTOM GRADIENT */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102D5F]/10 via-transparent to-transparent" />

                    {/* DOCTOR LABEL */}

                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">

                      <Stethoscope
                        size={15}
                        className="text-[#2E91C8]"
                      />

                      <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#102D5F]">
                        Medical Professional
                      </span>

                    </div>

                  </div>
                </div>

                {/* ==================================
                    DOCTOR INFORMATION
                ================================== */}

                <div
                  data-aos={reverse ? "fade-right" : "fade-left"}
                  className={`relative flex flex-col items-start py-2 lg:py-6 ${
                    reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >

                  {/* LABEL */}

                  <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#DDEAF3] bg-[#F3F9FD] px-4 py-2">

                    <ShieldCheck
                      size={17}
                      strokeWidth={1.8}
                      className="text-[#2E91C8]"
                    />

                    <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#2E91C8]">
                      {doctor.speciality}
                    </span>

                  </div>

                  {/* DOCTOR NAME */}

                  <h3 className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.7px] text-[#102D5F] sm:text-[36px] lg:text-[40px] xl:text-[43px]">
                    {doctor.name}
                  </h3>

                  {/* QUALIFICATION */}

                  <p className="m-0 mt-4 text-[16px] font-bold leading-[1.6] text-[#2E91C8] sm:text-[18px]">
                    {doctor.qualification}
                  </p>

                  {/* DESIGNATION */}

                  <p className="m-0 mt-2 text-[15px] font-semibold leading-[1.7] text-[#405B75] sm:text-[17px]">
                    {doctor.speciality}
                  </p>

                  {/* LOCATION */}

                  <div className="mt-4 flex items-center gap-2 text-[#718398]">

                    <MapPin
                      size={17}
                      className="shrink-0 text-[#2E91C8]"
                    />

                    <span className="text-[13px] font-medium sm:text-[15px]">
                      {doctor.location}
                    </span>

                  </div>

                  {/* DIVIDER */}

                  <div className="my-6 h-px w-full max-w-[500px] bg-[#DFE9F1]" />

                  {/* SHORT DESCRIPTION */}

                  <p className="m-0 max-w-[530px] text-[14px] leading-[1.9] text-[#5B6F82] sm:text-[16px]">
                    {doctor.description}
                  </p>

                  {/* CONSULTATION BUTTON */}

                  <Link
                    to="/contact"
                    className="group mt-8 inline-flex min-h-[53px] items-center justify-center gap-3 rounded-full bg-[#102D5F] px-7 py-3 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(16,45,95,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[15px]"
                  >

                    <CalendarDays
                      size={19}
                      strokeWidth={1.8}
                    />

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
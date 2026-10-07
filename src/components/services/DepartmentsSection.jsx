import React from "react";
import { Link } from "react-router-dom";

import {
  Activity,
  ArrowRight,
  Bone,
  Check,
  HeartPulse,
  Stethoscope,
  Syringe,
  Venus,
} from "lucide-react";

/* =========================================================
   DEPARTMENTS DATA
========================================================= */

const departments = [
  {
    number: "01",
    title: "Orthopedics & Trauma Care",
    subtitle: "Bone, Joint & Injury Care",
    description:
      "Evaluation and treatment for bone, joint and musculoskeletal conditions, including injuries and orthopedic trauma.",
    icon: Bone,
    image: "/orthopedics.png",
    path: "/services/orthopedics-trauma",
    areas: [
      "Fractures",
      "Joint Injuries",
      "Ligament Injuries",
      "Orthopedic Trauma",
      "Orthopedic Surgery",
    ],
  },

  {
    number: "02",
    title: "Spine Care",
    subtitle: "Spine, Back & Neck Care",
    description:
      "Medical evaluation and treatment support for spine injuries and other back or neck-related conditions.",
    icon: Activity,
    image: "/spinecare.png",
    path: "/services/spine-care",
    areas: [
      "Spine Injuries",
      "Trauma-Related Spine Conditions",
      "Back & Neck Evaluation",
      "Surgical Consultation",
    ],
  },

  {
    number: "03",
    title: "General Medicine",
    subtitle: "Acute & Chronic Medical Care",
    description:
      "Evaluation and management of common medical conditions and ongoing health concerns.",
    icon: Stethoscope,
    image: "/general.png",
    path: "/services/general-medicine",
    areas: [
      "Diabetes Management",
      "Hypertension Management",
      "Fever & Infections",
      "Acute Medical Illnesses",
      "Chronic Medical Conditions",
    ],
  },

  {
    number: "04",
    title: "General & Advanced Surgery",
    subtitle: "Surgical Consultation & Care",
    description:
      "Evaluation and surgical care for conditions requiring appropriate operative management.",
    icon: Syringe,
    image: "/surgery.png",
    path: "/services/general-surgery",
    areas: [
      "Hernia",
      "Appendix-Related Care",
      "Minor Surgical Procedures",
      "Major Surgical Procedures",
    ],
  },

  {
    number: "05",
    title: "Urology",
    subtitle: "Urinary & Urological Care",
    description:
      "Evaluation and treatment support for kidney, urinary and prostate-related conditions.",
    icon: HeartPulse,
    image: "/urology.png",
    path: "/services/urology",
    areas: [
      "Kidney Stones",
      "Urinary Problems",
      "Prostate-Related Conditions",
      "Urological Evaluation",
    ],
  },

  {
    number: "06",
    title: "Gynecology & Women’s Health",
    subtitle: "Dedicated Women's Healthcare",
    description:
      "Medical consultation and appropriate care for women’s health needs at different stages of life.",
    icon: Venus,
    image: "/womenhealth.png",
    path: "/services/gynecology",
    areas: [],
  },

  {
    number: "07",
    title: "EECP Treatment",
    subtitle: "Non-Invasive Cardiac Support",
    description:
      "Non-invasive treatment support designed to help improve blood flow as part of appropriate cardiac care.",
    icon: HeartPulse,
    image: "/eecp.png",
    path: "/services/eecp-treatment",
    areas: [
      "Non-Invasive Treatment",
      "Cardiac Care Support",
      "Blood Flow Support",
      "Clinical Evaluation",
    ],
  },
];

/* =========================================================
   DUPLICATE DATA FOR SEAMLESS LOOP
========================================================= */

const sliderDepartments = [...departments, ...departments];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const DepartmentsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6FBFD] py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-[180px] top-[120px] h-[450px] w-[450px] rounded-full bg-[#DDF3FB]/70 blur-[120px]" />

      <div className="pointer-events-none absolute -right-[200px] bottom-[50px] h-[480px] w-[480px] rounded-full bg-[#E5F5FA] blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#2E91C8 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[850px] text-center">
          {/* LABEL */}

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#2E91C8]" />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[2px] text-[#2E91C8] sm:text-[15px]">
              Medical Departments
            </span>

            <span className="h-[2px] w-9 bg-[#2E91C8]" />
          </div>

          {/* HEADING */}

          <h2 className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
            Specialized Care Across{" "}
            <span className="text-[#2E91C8]">
              Multiple Departments
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto m-0 mt-4 max-w-[760px] text-[13px] leading-[1.7] text-[#647887] sm:text-[15px] lg:mt-5">
            Our medical departments provide evaluation, diagnosis and
            treatment for a range of healthcare needs. Patients can access
            specialist consultation and appropriate medical care based on
            their condition.
          </p>
        </div>
      </div>

      {/* =====================================================
          CONTINUOUS SLIDER
      ====================================================== */}

      <div className="relative z-10 mt-9 w-full sm:mt-11 lg:mt-14">
        {/* LEFT FADE */}

        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-30 w-5 bg-gradient-to-r from-[#F6FBFD] via-[#F6FBFD]/80 to-transparent sm:w-12 md:w-16 lg:w-[90px]" />

        {/* RIGHT FADE */}

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-30 w-5 bg-gradient-to-l from-[#F6FBFD] via-[#F6FBFD]/80 to-transparent sm:w-12 md:w-16 lg:w-[90px]" />

        {/* VIEWPORT */}

        <div className="overflow-hidden py-3 lg:py-4">
          <div className="department-marquee flex w-max items-stretch">
            {sliderDepartments.map((department, index) => (
              <DepartmentCard
                key={`${department.number}-${index}`}
                department={department}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <div className="relative z-10 mx-auto mt-8 w-full max-w-[1380px] px-4 sm:mt-10 sm:px-6 lg:mt-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[20px] border border-[#D7E9F0] bg-white px-5 py-5 shadow-[0_10px_35px_rgba(16,45,95,0.05)] sm:flex-row sm:px-6 lg:px-8 lg:py-6">
          <div className="text-center sm:text-left">
            <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-[#2E91C8] sm:text-[15px]">
              Need Specialist Care?
            </span>

            <p className="m-0 mt-1 text-[13px] leading-[1.7] text-[#687D8B] sm:text-[15px]">
              Book a consultation with the appropriate department.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-[#2E91C8] px-6 py-2.5 text-[13px] font-bold text-white shadow-[0_10px_28px_rgba(46,145,200,0.20)] transition-all duration-300 hover:bg-[#102D5F] sm:w-auto sm:text-[15px] lg:hover:-translate-y-0.5"
          >
            Book Specialist Consultation

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>

      {/* =====================================================
          SLIDER CSS
      ====================================================== */}

      <style>{`
        /* ================================================
           CONTINUOUS INFINITE SLIDER
        ================================================= */

        @keyframes departmentMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .department-marquee {
          animation: departmentMarquee 65s linear infinite;
          will-change: transform;
        }

        /* ================================================
           MOBILE SPEED
        ================================================= */

        @media (max-width: 1023px) {
          .department-marquee {
            animation-duration: 58s;
          }
        }

        @media (max-width: 639px) {
          .department-marquee {
            animation-duration: 50s;
          }
        }

        /* ================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .department-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   DEPARTMENT CARD
========================================================= */

const DepartmentCard = ({ department }) => {
  const Icon = department.icon;

  const isGynecology =
    department.title === "Gynecology & Women’s Health";

  return (
    <div className="flex px-2 sm:px-2.5 lg:px-3">
      <article className="group flex h-full w-[292px] flex-col overflow-hidden rounded-[22px] border border-[#DCE9EF] bg-white shadow-[0_12px_40px_rgba(16,45,95,0.06)] transition-all duration-500 hover:-translate-y-[6px] hover:border-[#BBDCE9] hover:shadow-[0_25px_65px_rgba(16,45,95,0.13)] min-[360px]:w-[310px] sm:w-[340px] md:w-[360px] lg:w-[390px] xl:w-[410px] sm:rounded-[24px]">
        {/* =================================================
            IMAGE
        ================================================== */}

        <div className="relative h-[205px] shrink-0 overflow-hidden bg-[#E7F3F8] sm:h-[220px] md:h-[230px] lg:h-[235px] xl:h-[245px]">
          <img
            src={department.image}
            alt={department.title}
            loading="lazy"
            draggable="false"
            className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/75 via-[#061B35]/10 to-transparent" />

          {/* NUMBER */}

          <span className="absolute bottom-4 left-5 text-[42px] font-bold leading-none tracking-[-2px] text-white sm:text-[46px]">
            {department.number}
          </span>

          {/* ICON */}

          <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/50 bg-white/95 text-[#2E91C8] shadow-[0_8px_25px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 group-hover:bg-[#2E91C8] group-hover:text-white sm:h-[52px] sm:w-[52px]">
            <Icon
              className="h-[22px] w-[22px]"
              strokeWidth={1.7}
            />
          </div>

          {/* SUBTITLE */}

          <div className="absolute bottom-4 left-[82px] right-4 sm:left-[90px]">
            <span className="text-[13px] font-semibold uppercase leading-[1.7] tracking-[1px] text-[#BCEBFC] sm:text-[15px]">
              {department.subtitle}
            </span>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="flex min-h-[410px] flex-1 flex-col p-5 sm:min-h-[425px] sm:p-6 lg:min-h-[435px] xl:p-7">
          {/* TITLE */}

          <h3 className="m-0 text-[20px] font-bold leading-[1.25] tracking-[-0.4px] text-[#102D5F] sm:text-[22px] lg:text-[23px]">
            {department.title}
          </h3>

          {/* ACCENT */}

          <div className="mt-3 h-[3px] w-10 rounded-full bg-[#2E91C8] transition-all duration-500 group-hover:w-16" />

          {/* DESCRIPTION */}

          <p className="m-0 mt-3.5 text-[13px] leading-[1.7] text-[#687D8B] sm:text-[15px]">
            {department.description}
          </p>

          {/* =================================================
              KEY AREAS
          ================================================== */}

          <div className="mt-5">
            <span className="mb-3 block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.4px] text-[#97A8B2] sm:text-[15px]">
              {department.areas.length > 0
                ? "Key Areas"
                : "Department Care"}
            </span>

            {department.areas.length > 0 ? (
              <div className="grid grid-cols-1 gap-2.5 min-[430px]:grid-cols-2 sm:grid-cols-2">
                {department.areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-[2px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#E9F7FC] text-[#2E91C8]">
                      <Check
                        className="h-3 w-3"
                        strokeWidth={2.4}
                      />
                    </span>

                    <span className="text-[13px] font-medium leading-[1.5] text-[#536B79] sm:text-[15px]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="m-0 rounded-[12px] bg-[#F4FAFD] px-3.5 py-3 text-[13px] leading-[1.7] text-[#687D8B] sm:text-[15px]">
                {isGynecology
                  ? "Dedicated consultation and appropriate care for women’s health needs."
                  : "Appropriate consultation and medical care based on individual clinical requirements."}
              </p>
            )}
          </div>

          {/* SPACER */}

          <div className="flex-1" />

          {/* =================================================
              VIEW DEPARTMENT
          ================================================== */}

          <div className="mt-6 border-t border-[#E5EEF2] pt-5">
            <Link
              to={department.path}
              className="group/btn flex min-h-[48px] w-full items-center justify-between rounded-[13px] bg-[#102D5F] px-4 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#2E91C8] sm:min-h-[50px] sm:px-5 sm:text-[15px]"
            >
              <span>View Department</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-[#2E91C8]">
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-[2px]"
                  strokeWidth={2}
                />
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default DepartmentsSection;
import React, { useEffect, useRef, useState } from "react";

import {
  HeartPulse,
  Stethoscope,
  UserRound,
  Award,
} from "lucide-react";

/* =========================================================
   DOCTORS DATA
========================================================= */

const doctors = [
  {
    name: "Dr. Nagesh Hingmire",
    type: "Founder",
    specialization: "Founder",
    qualification: "",
    image: "/images/doctors/dr-nagesh-hingmire.jpg",
  },
  {
    name: "Dr. Deepali Hingmire",
    type: "Founder",
    specialization: "Founder",
    qualification: "",
    image: "/images/doctors/dr-deepali-hingmire.jpg",
  },
  {
    name: "Dr. Pritam Titar",
    type: "Visiting Doctor",
    specialization: "Cardiology",
    qualification: "MBBS, MD Medicine, DNB Cardiology",
    image: "/images/doctors/dr-pritam-titar.jpg",
  },
  {
    name: "Dr. Abhijit Ghangale",
    type: "Visiting Doctor",
    specialization: "Neurosurgery",
    qualification: "MBBS, MS, MCh Neurosurgery",
    image: "/images/doctors/dr-abhijit-ghangale.jpg",
  },
  {
    name: "Dr. Rahul Jadhav",
    type: "Visiting Doctor",
    specialization: "Gastro",
    qualification: "MBBS, MD Medicine, DM Gastro",
    image: "/images/doctors/dr-rahul-jadhav.jpg",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const DoctorDetails = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const founders = doctors.filter(
    (doctor) => doctor.type === "Founder"
  );

  const visitingDoctors = doctors.filter(
    (doctor) => doctor.type === "Visiting Doctor"
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`doctor-details-section relative isolate overflow-hidden bg-[#F8FCFE] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 ${
        visible ? "doctor-details-visible" : ""
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#F8FCFE_0%,#FFFFFF_48%,#F7FBFD_100%)]" />

      <div className="doctor-details-glow-one pointer-events-none absolute -left-[180px] top-[100px] -z-10 h-[380px] w-[380px] rounded-full bg-[#E5F6FC] blur-[110px] lg:h-[500px] lg:w-[500px]" />

      <div className="doctor-details-glow-two pointer-events-none absolute -right-[180px] bottom-[50px] -z-10 h-[400px] w-[400px] rounded-full bg-[#EAF7FC] blur-[110px] lg:h-[520px] lg:w-[520px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] [background-image:radial-gradient(#102D5F_1px,transparent_1px)] [background-size:25px_25px]" />

      {/* =====================================================
          BIG DECORATIVE +
      ====================================================== */}

      <div className="pointer-events-none absolute right-[3%] top-[25%] hidden select-none text-[220px] font-extralight leading-none text-[#2E91C8]/[0.025] xl:block">
        +
      </div>

      {/* =====================================================
          ROTATING DECORATIVE RING
      ====================================================== */}

      <div className="doctor-bg-ring pointer-events-none absolute -left-[45px] bottom-[16%] hidden h-[120px] w-[120px] rounded-full border border-dashed border-[#2E91C8]/10 lg:block">
        <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#55B8E9]/40" />
      </div>

      {/* =====================================================
          FLOATING MEDICAL PLUS
      ====================================================== */}

      <span className="doctor-floating-plus doctor-plus-one">
        +
      </span>

      <span className="doctor-floating-plus doctor-plus-two">
        +
      </span>

      <span className="doctor-floating-plus doctor-plus-three">
        +
      </span>

      {/* =====================================================
          VERTICAL MEDICAL PULSE
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[250px] hidden h-[65%] w-px -translate-x-1/2 lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E91C8]/10 to-transparent" />

        <span className="doctor-path-light absolute left-1/2 top-0 h-[80px] w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-[#55B8E9] to-transparent shadow-[0_0_15px_rgba(85,184,233,0.35)]" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="doctor-details-header mx-auto mb-6 max-w-[760px] text-center sm:mb-7 md:mb-8">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="doctor-header-line h-[2px] w-7 rounded-full bg-gradient-to-r from-transparent to-[#2E91C8] sm:w-9" />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px] sm:tracking-[2px]">
              Our Medical Team
            </span>

            <span className="doctor-header-line h-[2px] w-7 rounded-full bg-gradient-to-l from-transparent to-[#2E91C8] sm:w-9" />
          </div>

          <h2 className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
            Meet Our{" "}
            <span className="text-[#2E91C8]">
              Doctors
            </span>
          </h2>

          <p className="mx-auto m-0 mt-3 max-w-[590px] text-[13px] leading-[1.7] text-[#6D7F8D] sm:mt-4 sm:text-[15px]">
            Meet the founders and visiting specialists associated with
            Vighnaharta Hospital, Alephata.
          </p>
        </div>

        {/* ===================================================
            ECG DIVIDER
        ==================================================== */}

        <div className="doctor-ecg-divider mx-auto mb-7 max-w-[500px] sm:mb-9">
          <svg
            viewBox="0 0 500 45"
            fill="none"
            className="h-[32px] w-full sm:h-[36px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 23 H160 L180 23 L195 10 L211 36 L230 4 L249 23 H500"
              stroke="#2E91C8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="doctor-detail-ecg"
            />

            <circle
              cx="249"
              cy="23"
              r="3"
              fill="#55B8E9"
              className="doctor-ecg-dot"
            />
          </svg>
        </div>

        {/* ===================================================
            FOUNDERS TITLE
        ==================================================== */}

        <SectionTitle
          icon={HeartPulse}
          eyebrow="Hospital Leadership"
          title="Founder Doctors"
        />

        {/* ===================================================
            FOUNDERS
        ==================================================== */}

        <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
          {founders.map((doctor, index) => (
            <DoctorCard
              key={doctor.name}
              doctor={doctor}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div className="mx-auto my-9 flex max-w-[1080px] items-center gap-3 sm:my-11 lg:my-12">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D5E7EE]" />

          <div className="doctor-divider-icon relative">
            <span className="doctor-divider-pulse absolute inset-0 rounded-full border border-[#2E91C8]/25" />

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#D8EAF1] bg-white text-[#2E91C8] shadow-[0_7px_25px_rgba(16,45,95,0.08)]">
              <Stethoscope
                className="h-4 w-4"
                strokeWidth={1.7}
              />
            </div>
          </div>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D5E7EE]" />
        </div>

        {/* ===================================================
            VISITING DOCTORS TITLE
        ==================================================== */}

        <SectionTitle
          icon={Stethoscope}
          eyebrow="Specialist Care"
          title="Visiting Doctors"
        />

        {/* ===================================================
            VISITING DOCTORS
        ==================================================== */}

        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {visitingDoctors.map((doctor, index) => (
            <DoctorCard
              key={doctor.name}
              doctor={doctor}
              index={index + 2}
            />
          ))}
        </div>

        {/* ===================================================
            BOTTOM SIGNATURE
        ==================================================== */}

        <div className="mx-auto mt-9 flex max-w-[1100px] items-center justify-center gap-3 sm:mt-11">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C8E3ED] sm:w-14" />

          <div className="flex items-center gap-2">
            <HeartPulse
              className="doctor-signature-heart h-4 w-4 text-[#2E91C8]"
              strokeWidth={1.7}
            />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.2px] text-[#93A4AF] sm:text-[15px]">
              Vighnaharta Hospital • Alephata
            </span>
          </div>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C8E3ED] sm:w-14" />
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        .doctor-details-glow-one {
          animation: doctorGlowMoveOne 9s ease-in-out infinite alternate;
        }

        .doctor-details-glow-two {
          animation: doctorGlowMoveTwo 11s ease-in-out infinite alternate;
        }

        @keyframes doctorGlowMoveOne {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }

          to {
            transform: translate3d(55px, 35px, 0) scale(1.08);
          }
        }

        @keyframes doctorGlowMoveTwo {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }

          to {
            transform: translate3d(-50px, -35px, 0) scale(1.08);
          }
        }

        .doctor-details-header {
          opacity: 0;
          transform: translateY(18px);
        }

        .doctor-details-visible .doctor-details-header {
          animation: doctorHeaderReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes doctorHeaderReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .doctor-header-line {
          animation: doctorHeaderLine 2.8s ease-in-out infinite;
        }

        @keyframes doctorHeaderLine {
          0%,
          100% {
            opacity: 0.45;
            transform: scaleX(0.65);
          }

          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        .doctor-path-light {
          animation: doctorPathMove 4.8s linear infinite;
        }

        @keyframes doctorPathMove {
          0% {
            top: -8%;
            opacity: 0;
          }

          12% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .doctor-detail-ecg {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          filter: drop-shadow(0 0 4px rgba(46, 145, 200, 0.25));
          animation: doctorDetailECG 4s ease-in-out infinite;
        }

        @keyframes doctorDetailECG {
          0% {
            stroke-dashoffset: 700;
            opacity: 0;
          }

          15% {
            opacity: 0.7;
          }

          70% {
            stroke-dashoffset: 0;
            opacity: 0.7;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        .doctor-ecg-dot {
          transform-origin: center;
          transform-box: fill-box;
          animation: doctorECGDot 2s ease-in-out infinite;
        }

        @keyframes doctorECGDot {
          0%,
          100% {
            transform: scale(0.7);
            opacity: 0.4;
          }

          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        .doctor-floating-plus {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          color: rgba(46, 145, 200, 0.12);
          font-weight: 300;
          line-height: 1;
          animation: doctorPlusFloat 5s ease-in-out infinite;
        }

        .doctor-plus-one {
          top: 13%;
          left: 5%;
          font-size: 30px;
        }

        .doctor-plus-two {
          top: 48%;
          right: 4%;
          font-size: 22px;
          animation-delay: 1.2s;
        }

        .doctor-plus-three {
          bottom: 12%;
          left: 8%;
          font-size: 25px;
          animation-delay: 2.3s;
        }

        @keyframes doctorPlusFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(5px, -14px, 0) rotate(15deg);
          }
        }

        .doctor-bg-ring {
          animation: doctorBgRing 18s linear infinite;
        }

        @keyframes doctorBgRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .doctor-card {
          opacity: 0;
          transform: translate3d(0, 28px, 0) scale(0.98);
        }

        .doctor-details-visible .doctor-card {
          animation: doctorCardReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes doctorCardReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 28px, 0) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .doctor-image-shine {
          transition:
            left 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.25s ease;
        }

        .doctor-card:hover .doctor-image-shine {
          left: 135%;
        }

        .doctor-live-dot {
          box-shadow: 0 0 0 rgba(105, 203, 242, 0.5);
          animation: doctorLivePulse 2s infinite;
        }

        @keyframes doctorLivePulse {
          0% {
            box-shadow: 0 0 0 0 rgba(105, 203, 242, 0.5);
          }

          70% {
            box-shadow: 0 0 0 7px rgba(105, 203, 242, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(105, 203, 242, 0);
          }
        }

        .doctor-divider-pulse {
          animation: doctorDividerPulse 2.4s ease-out infinite;
        }

        @keyframes doctorDividerPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }

          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        .doctor-signature-heart {
          animation: doctorSignatureBeat 1.8s ease-in-out infinite;
        }

        @keyframes doctorSignatureBeat {
          0%,
          100% {
            transform: scale(1);
          }

          15% {
            transform: scale(1.18);
          }

          30% {
            transform: scale(1);
          }

          45% {
            transform: scale(1.12);
          }

          60% {
            transform: scale(1);
          }
        }

        @media (max-width: 767px) {
          .doctor-floating-plus {
            opacity: 0.55;
          }

          .doctor-image-shine {
            display: none;
          }

          .doctor-details-glow-one,
          .doctor-details-glow-two {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .doctor-details-glow-one,
          .doctor-details-glow-two,
          .doctor-details-header,
          .doctor-header-line,
          .doctor-path-light,
          .doctor-detail-ecg,
          .doctor-ecg-dot,
          .doctor-floating-plus,
          .doctor-bg-ring,
          .doctor-card,
          .doctor-live-dot,
          .doctor-divider-pulse,
          .doctor-signature-heart {
            animation: none !important;
          }

          .doctor-card,
          .doctor-details-header {
            opacity: 1 !important;
            transform: none !important;
          }

          .doctor-image-shine {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = ({
  icon: Icon,
  eyebrow,
  title,
}) => {
  return (
    <div className="mx-auto mb-5 max-w-[1120px] sm:mb-6">
      <div className="flex items-center gap-3">
        <div className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 hover:bg-[#2E91C8] hover:text-white sm:h-12 sm:w-12">
          <Icon
            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.7}
          />
        </div>

        <div>
          <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-[#2E91C8] sm:text-[15px]">
            {eyebrow}
          </span>

          <h3 className="m-0 mt-[1px] text-[20px] font-bold leading-[1.25] tracking-[-0.4px] text-[#102D5F] sm:text-[23px] lg:text-[25px]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   DOCTOR CARD
========================================================= */

const DoctorCard = ({
  doctor,
  index,
}) => {
  const isFounder = doctor.type === "Founder";

  return (
    <article
      className="doctor-card group relative overflow-hidden rounded-[20px] border border-[#DCEAF0] bg-white shadow-[0_14px_40px_rgba(16,45,95,0.06)] transition-all duration-500 sm:rounded-[23px] lg:hover:-translate-y-1.5 lg:hover:border-[#BFE1EE] lg:hover:shadow-[0_24px_60px_rgba(16,45,95,0.12)]"
      style={{
        animationDelay: `${index * 100 + 180}ms`,
      }}
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative aspect-[1.18/1] overflow-hidden bg-gradient-to-br from-[#EAF7FC] to-[#DDEEF5] sm:aspect-[1.12/1]">
        <img
          src={doctor.image}
          alt={doctor.name}
          loading="lazy"
          className="block h-full w-full object-cover object-top transition-transform duration-700 lg:group-hover:scale-[1.05]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B3A]/45 via-transparent to-transparent" />

        {/* IMAGE SHINE */}

        <div className="doctor-image-shine pointer-events-none absolute inset-y-[-20%] -left-[80%] w-[42%] rotate-[12deg] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 lg:group-hover:opacity-100" />

        {/* =================================================
            TYPE BADGE
        ================================================== */}

        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-md sm:left-4 sm:top-4">
          {isFounder ? (
            <HeartPulse
              className="h-4 w-4 text-[#2E91C8]"
              strokeWidth={1.8}
            />
          ) : (
            <Stethoscope
              className="h-4 w-4 text-[#2E91C8]"
              strokeWidth={1.8}
            />
          )}

          <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[0.6px] text-[#102D5F] sm:text-[15px]">
            {doctor.type}
          </span>
        </div>

        {/* =================================================
            SPECIALITY / LEADERSHIP PILL
        ================================================== */}

        <div className="absolute bottom-4 left-4 hidden items-center gap-2 rounded-full border border-white/20 bg-[#071B3A]/65 px-3 py-1.5 shadow-[0_5px_20px_rgba(0,0,0,0.12)] backdrop-blur-md sm:flex">
          <span className="doctor-live-dot h-[6px] w-[6px] rounded-full bg-[#69CBF2]" />

          <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[0.6px] text-white/90 sm:text-[15px]">
            {isFounder
              ? "Hospital Leadership"
              : doctor.specialization}
          </span>
        </div>

        {/* NUMBER */}

        <span className="absolute bottom-3 right-4 text-[34px] font-bold leading-none text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* =====================================================
          DETAILS
      ====================================================== */}

      <div className="relative p-4 min-[360px]:p-5 sm:p-5 lg:p-6">
        {/* SPECIALITY */}

        {!isFounder && (
          <div className="mb-2 inline-flex items-center gap-1.5">
            <span className="h-[6px] w-[6px] rounded-full bg-[#2E91C8]" />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#2E91C8] sm:text-[15px]">
              {doctor.specialization}
            </span>
          </div>
        )}

        {/* NAME */}

        <h3 className="m-0 text-[20px] font-bold leading-[1.25] tracking-[-0.4px] text-[#102D5F] min-[360px]:text-[21px] sm:text-[22px] lg:text-[23px]">
          {doctor.name}
        </h3>

        {/* FOUNDER */}

        {isFounder && (
          <div className="mt-2 flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#EEF8FC] text-[#2E91C8]">
              <UserRound
                className="h-4 w-4"
                strokeWidth={1.7}
              />
            </div>

            <span className="text-[13px] font-semibold leading-[1.7] text-[#6F8290] sm:text-[15px]">
              Founder, Vighnaharta Hospital
            </span>
          </div>
        )}

        {/* QUALIFICATION */}

        {doctor.qualification && (
          <>
            <div className="my-3 h-px w-full bg-[#E5EEF2] sm:my-4" />

            <div className="flex items-start gap-2.5">
              <div className="mt-[1px] flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-[#EEF8FC] text-[#2E91C8] transition-all duration-300 group-hover:bg-[#2E91C8] group-hover:text-white">
                <Award
                  className="h-4 w-4"
                  strokeWidth={1.7}
                />
              </div>

              <div className="min-w-0">
                <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[0.8px] text-[#9AABB5] sm:text-[15px]">
                  Qualification
                </span>

                <p className="m-0 mt-0.5 text-[13px] font-semibold leading-[1.7] text-[#536B7B] sm:text-[15px]">
                  {doctor.qualification}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* =====================================================
          HOVER ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#102D5F] via-[#2E91C8] to-[#55B8E9] transition-all duration-500 group-hover:w-full" />
    </article>
  );
};

export default DoctorDetails;
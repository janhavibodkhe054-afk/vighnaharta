import React from "react";

import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import {
  FaBone,
  FaPersonWalking,
  FaUserDoctor,
  FaDroplet,
  FaPerson,
  FaVenus,
  FaSuitcaseMedical,
  FaScissors,
} from "react-icons/fa6";

/* =========================================================
   DATA
========================================================= */

const treatments = [
  {
    number: "01",
    title: "Fracture Treatment",
    category: "Orthopedic Care",
    description:
      "Evaluation and treatment for fractures and bone injuries based on the type and severity of the injury.",
    icon: FaBone,
    image: "/fracture.png",
  },
  {
    number: "02",
    title: "Knee Ligament Treatment",
    category: "Orthopedic Care",
    description:
      "Evaluation and appropriate treatment for ligament-related knee injuries.",
    icon: FaPersonWalking,
    image: "/knee.png",
  },
  {
    number: "03",
    title: "Spine Trauma Care",
    category: "Spine Care",
    description:
      "Assessment and treatment support for trauma-related spine injuries and conditions.",
    icon: Activity,
    image: "/spine.png",
  },
  {
    number: "04",
    title: "Hernia Surgery",
    category: "Surgical Care",
    description:
      "Surgical evaluation and treatment for patients diagnosed with hernia where surgery is clinically indicated.",
    icon: FaUserDoctor,
    image: "/hernia.png",
  },
  {
    number: "05",
    title: "Appendix Surgery",
    category: "Surgical Care",
    description:
      "Evaluation and surgical care for appendix-related conditions where appropriate.",
    icon: FaScissors,
    image: "/appendix.png",
  },
  {
    number: "06",
    title: "Kidney Stone Treatment",
    category: "Urology",
    description:
      "Evaluation and treatment for kidney stone-related symptoms and conditions.",
    icon: FaDroplet,
    image: "/kedney.png",
  },
  {
    number: "07",
    title: "Prostate Treatment",
    category: "Urology",
    description:
      "Evaluation and appropriate treatment support for prostate-related conditions.",
    icon: FaPerson,
    image: "/prostrate.png",
  },
  {
    number: "08",
    title: "Gynecological Procedures",
    category: "Women's Health",
    description:
      "Appropriate gynecological evaluation and procedures based on the patient’s medical requirements.",
    icon: FaVenus,
    image: "/gynac.png",
  },
];

/* =========================================================
   MAIN
========================================================= */

const TreatmentsProcedures = () => {
  return (
    <section className="treatments-section relative isolate overflow-hidden py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20">
      {/* BACKGROUND IMAGE */}

      <div className="treatment-bg pointer-events-none absolute inset-0 -z-30" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#06182F]/90" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#06182F]/95 via-[#071F3E]/88 to-[#092C4D]/90" />

      {/* GLOW */}

      <div className="pointer-events-none absolute -left-[200px] top-[60px] h-[500px] w-[500px] rounded-full bg-[#2E91C8]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-[180px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#55B8E9]/10 blur-[130px]" />

      {/* DOT PATTERN */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#69CBF2_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="treatment-header mb-9 grid grid-cols-1 gap-5 md:mb-11 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-10 lg:mb-12">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <HeartPulse
                className="h-[22px] w-[22px] text-[#55C8F2]"
                strokeWidth={1.8}
              />

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#55C8F2] sm:text-[15px]">
                Treatments & Procedures
              </span>

              <span className="hidden h-px w-10 bg-[#69CBF2]/60 sm:block" />
            </div>

            <h2 className="m-0 max-w-[800px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
              Medical & Surgical Care for Your{" "}
              <span className="text-[#55C8F2]">
                Healthcare Needs
              </span>
            </h2>
          </div>

          <p className="m-0 max-w-[560px] text-[13px] leading-[1.7] text-white/65 sm:text-[15px]">
            Our team provides evaluation and treatment for a range of medical,
            orthopedic, surgical and urological conditions based on individual
            clinical requirements.
          </p>
        </div>

        {/* ===================================================
            CARDS
        ==================================================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:gap-6">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.title}
              treatment={treatment}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            NOTE
        ==================================================== */}

        <div className="treatment-note mt-6 flex items-start gap-3 rounded-[16px] border border-[#69CBF2]/15 bg-[#06182F]/65 px-4 py-4 backdrop-blur-xl sm:mt-7 sm:px-5">
          <FaSuitcaseMedical className="mt-[3px] h-4 w-4 shrink-0 text-[#69CBF2]" />

          <p className="m-0 text-[13px] leading-[1.7] text-white/60 sm:text-[15px]">
            Treatment and procedure availability may vary depending on clinical
            requirements. Please contact the hospital for current availability
            and appropriate medical guidance.
          </p>
        </div>

        {/* ===================================================
            INFORMATION PANEL — NO BUTTONS
        ==================================================== */}

        <div className="treatment-info mt-7 rounded-[20px] border border-[#55C8F2]/20 bg-[#06182F]/70 px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:mt-8 sm:px-6 lg:mt-9 lg:px-7 lg:py-6">
          <div className="flex items-start gap-3 sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#55C8F2]/30 bg-[#55C8F2]/10">
              <Stethoscope
                className="h-[18px] w-[18px] text-[#69CBF2]"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <h3 className="m-0 text-[17px] font-bold leading-[1.3] text-white sm:text-[19px]">
                Individual Treatment Planning
              </h3>

              <p className="m-0 mt-1 text-[13px] leading-[1.7] text-white/60 sm:text-[15px]">
                Treatment decisions are based on clinical evaluation and the
                individual healthcare requirements of each patient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        .treatment-bg {
          background-image: url("/images/services/treatments-bg.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;

          transform: scale(1.04);
          animation: bgBreathing 14s ease-in-out infinite alternate;
        }

        @keyframes bgBreathing {
          from {
            transform: scale(1.04);
          }

          to {
            transform: scale(1.09);
          }
        }

        /* ================================================
           3D FLIP
        ================================================= */

        .treatment-card {
          perspective: 1400px;
        }

        .treatment-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition:
            transform 0.75s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .treatment-card-face {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .treatment-card-back {
          transform: rotateY(180deg);
        }

        @media (hover: hover) and (pointer: fine) {
          .treatment-card:hover .treatment-card-inner {
            transform: rotateY(180deg);
          }
        }

        /* ================================================
           REVEAL
        ================================================= */

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(26px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .treatment-card {
          opacity: 0;
          animation:
            cardReveal
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        @keyframes headerReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .treatment-header {
          animation:
            headerReveal
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .treatment-note,
        .treatment-info {
          animation:
            headerReveal
            0.8s
            0.5s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        /* ================================================
           MOBILE
        ================================================= */

        @media (max-width: 767px) {
          .treatment-bg {
            background-attachment: scroll;
          }
        }

        /* ================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .treatment-bg,
          .treatment-card,
          .treatment-header,
          .treatment-note,
          .treatment-info {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .treatment-card-inner {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   TREATMENT CARD
========================================================= */

const TreatmentCard = ({ treatment, index }) => {
  const Icon = treatment.icon;

  return (
    <div
      className="treatment-card h-[290px] min-[430px]:h-[300px] sm:h-[310px] md:h-[320px] lg:h-[325px] xl:h-[330px]"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="treatment-card-inner">
        {/* =================================================
            FRONT
        ================================================== */}

        <article className="treatment-card-face grid grid-cols-[1.1fr_0.9fr] rounded-[20px] border border-[#55C8F2]/45 bg-[#082443] shadow-[0_15px_45px_rgba(0,0,0,0.18)] sm:rounded-[22px]">
          {/* FRONT CONTENT */}

          <div className="relative z-10 flex min-w-0 flex-col p-4 min-[430px]:p-5 sm:p-6">
            {/* TOP */}

            <div className="flex items-start justify-between gap-3">
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] border border-[#55C8F2]/35 bg-[#2E91C8]/25 text-[#69CBF2] sm:h-[54px] sm:w-[54px]">
                <Icon className="h-[21px] w-[21px] sm:h-[23px] sm:w-[23px]" />
              </div>

              <span className="text-[18px] font-bold text-white/25 sm:text-[20px]">
                {treatment.number}
              </span>
            </div>

            {/* MAIN */}

            <div className="mt-4">
              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.2px] text-[#55C8F2] sm:text-[15px]">
                {treatment.category}
              </span>

              <h3 className="m-0 mt-1.5 text-[17px] font-bold leading-[1.2] tracking-[-0.3px] text-white min-[430px]:text-[18px] sm:text-[20px] lg:text-[21px]">
                {treatment.title}
              </h3>

              <p className="m-0 mt-3 line-clamp-4 text-[13px] leading-[1.7] text-white/65 sm:text-[15px]">
                {treatment.description}
              </p>
            </div>

            {/* BOTTOM DECORATION */}

            <div className="mt-auto pt-3">
              <span className="block h-[3px] w-9 rounded-full bg-[#55C8F2]" />
            </div>
          </div>

          {/* FRONT IMAGE */}

          <div className="relative overflow-hidden">
            <img
              src={treatment.image}
              alt={treatment.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#082443]/50 via-transparent to-transparent" />

            {/* IMAGE INFO */}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06182F]/90 via-[#06182F]/35 to-transparent p-3 pt-12 sm:p-4">
              <div className="rounded-[11px] border border-white/15 bg-[#06182F]/70 p-2.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <ShieldCheck
                    className="h-4 w-4 shrink-0 text-[#69CBF2]"
                    strokeWidth={1.8}
                  />

                  <span className="text-[13px] font-bold leading-[1.7] text-white sm:text-[15px]">
                    Medical Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* =================================================
            BACK
        ================================================== */}

        <article className="treatment-card-face treatment-card-back rounded-[20px] border border-[#55C8F2]/60 bg-[#071B3A] shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:rounded-[22px]">
          {/* FULL IMAGE */}

          <img
            src={treatment.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms]"
          />

          {/* OVERLAYS */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/95 via-[#06182F]/55 to-[#06182F]/15" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#06182F]/55 to-transparent" />

          {/* BACK CONTENT */}

          <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
            {/* TOP */}

            <div className="flex items-center justify-between">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] border border-white/20 bg-white/10 text-white backdrop-blur-md">
                <Icon className="h-[20px] w-[20px]" />
              </div>

              <span className="rounded-full border border-white/20 bg-[#06182F]/50 px-3 py-1.5 text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#8EDFFC] backdrop-blur-md sm:text-[15px]">
                {treatment.category}
              </span>
            </div>

            {/* BOTTOM */}

            <div className="mt-auto">
              <span className="text-[13px] font-bold leading-[1.7] tracking-[1.3px] text-[#69CBF2] sm:text-[15px]">
                {treatment.number}
              </span>

              <h3 className="m-0 mt-1 text-[21px] font-bold leading-[1.2] text-white sm:text-[23px]">
                {treatment.title}
              </h3>

              <p className="m-0 mt-2 max-w-[470px] text-[13px] leading-[1.7] text-white/75 sm:text-[15px]">
                {treatment.description}
              </p>

              {/* NO BUTTON */}
              <div className="mt-4 flex items-center gap-3">
                <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#69CBF2]" />

                <span className="h-px w-12 bg-[#69CBF2]/60" />

                <span className="text-[13px] font-semibold leading-[1.7] text-white/65 sm:text-[15px]">
                  Individual Clinical Care
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TreatmentsProcedures;
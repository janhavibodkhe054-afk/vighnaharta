
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Bone,
  Activity,
  Stethoscope,
  HeartPulse,
  Venus,
  ArrowUpRight,
  Brain,
  Ribbon,
  ScanFace,
  Scissors,
  Ambulance,
  ShieldCheck,
  ScanHeart,
  Syringe,
} from "lucide-react";

/* =========================================================
   SPECIALITIES DATA — ALL 14 SERVICES
========================================================= */

const specialities = [
  {
    id: "01",
    title: "Cardiac Diagnostic Services",
    description:
      "Cardiac diagnostic evaluation to help assess heart health and guide appropriate medical care.",
    icon: ScanHeart,
    image: "/cardiac1.png",
    link: "/services/cardiac-diagnostic-services",
  },
  {
    id: "02",
    title: "Oncology Treatment",
    description:
      "Clinical consultation and appropriate treatment guidance for cancer-related conditions.",
    icon: Ribbon,
    image: "/oncology1.png",
    link: "/services/oncology-treatment",
  },
  {
    id: "03",
    title: "Preventive Cardiology",
    description:
      "Heart health evaluation and preventive guidance focused on identifying and managing cardiovascular risk factors.",
    icon: ShieldCheck,
    image: "/heart1.webp",
    link: "/services/preventive-cardiology",
  },
  {
    id: "04",
    title: "Emergency Cardiac Services",
    description:
      "Timely clinical assessment and appropriate medical support for urgent cardiac concerns.",
    icon: Ambulance,
    image: "/attack.png",
    link: "/services/emergency-cardiac-services",
  },
  {
    id: "05",
    title: "Neurospine Care",
    description:
      "Specialist evaluation and appropriate treatment guidance for neurological and spine-related conditions.",
    icon: Brain,
    image: "/neuro1.png",
    link: "/services/neurospine-care",
  },
  {
    id: "06",
    title: "Dermatology Services",
    description:
      "Evaluation and treatment guidance for skin, hair and nail-related health concerns.",
    icon: ScanFace,
    image: "/dermatology.png",
    link: "/services/dermatology-services",
  },
  {
    id: "07",
    title: "Anorectal Surgeries",
    description:
      "Evaluation and appropriate treatment planning for piles, fissures, fistulas and other anorectal conditions.",
    icon: Scissors,
    image: "/Anorectal-hero.jpg",
    link: "/services/anorectal-surgeries",
  },
  {
    id: "08",
    title: "Orthopedics & Trauma Care",
    description:
      "Evaluation and treatment for bone, joint and musculoskeletal conditions, including injuries and orthopedic trauma.",
    icon: Bone,
    image: "/orthopedics.png",
    link: "/services/orthopedics-trauma",
  },
  {
    id: "09",
    title: "Spine Care",
    description:
      "Medical evaluation and treatment support for spine injuries and other back or neck-related conditions.",
    icon: Activity,
    image: "/spinecare.png",
    link: "/services/spine-care",
  },
  {
    id: "10",
    title: "General Medicine",
    description:
      "Evaluation and management of common medical conditions and ongoing health concerns.",
    icon: Stethoscope,
    image: "/general.png",
    link: "/services/general-medicine",
  },
  {
    id: "11",
    title: "General & Advanced Surgery",
    description:
      "Evaluation and surgical care for conditions requiring appropriate operative management.",
    icon: Syringe,
    image: "/surgery.png",
    link: "/services/general-surgery",
  },
  {
    id: "12",
    title: "Urology",
    description:
      "Evaluation and treatment support for kidney, urinary and prostate-related conditions.",
    icon: HeartPulse,
    image: "/urology.png",
    link: "/services/urology",
  },
  {
    id: "13",
    title: "Gynecology & Women's Health",
    description:
      "Medical consultation and appropriate care for women's health needs at different stages of life.",
    icon: Venus,
    image: "/womenhealth.png",
    link: "/services/gynecology",
  },
  {
    id: "14",
    title: "EECP Treatment",
    description:
      "Non-invasive treatment support designed to help improve blood flow as part of appropriate cardiac care.",
    icon: HeartPulse,
    image: "/eecp.png",
    link: "/services/eecp-treatment",
  },
];

/* =========================================================
   SLIDER DATA

   Duplicate cards are required for seamless infinite movement.
========================================================= */

const sliderItems = [...specialities, ...specialities];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const SpecialitiesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 40,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-12 sm:py-14 lg:py-16 xl:py-[72px]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[180px] -top-[190px] h-[440px] w-[440px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />

        <div className="absolute -bottom-[200px] -left-[180px] h-[430px] w-[430px] rounded-full bg-[#2E91C8]/[0.07] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "radial-gradient(#102D5F 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[820px] text-center">
          {/* LABEL */}

          <div
            data-aos="fade-up"
            className="mb-3 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2E91C8]" />

            <span className="h-[6px] w-[6px] rotate-45 bg-[#2E91C8]" />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[2px] text-[#2E91C8] sm:text-[15px]">
              Our Specialities
            </span>

            <span className="h-[6px] w-[6px] rotate-45 bg-[#2E91C8]" />

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2E91C8]" />
          </div>

          {/* HEADING */}

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]"
          >
            Specialized Care,
            <span className="text-[#2E91C8]">
              {" "}
              All in One Place
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            data-aos="fade-up"
            data-aos-delay="130"
            className="mx-auto mt-4 max-w-[690px] text-[13px] leading-[1.7] text-[#64748B] sm:text-[15px]"
          >
            Access focused medical care across key departments with
            appropriate consultation, evaluation and treatment support.
          </p>
        </div>
      </div>

      {/* =====================================================
          CONTINUOUS SPECIALITIES SLIDER
      ====================================================== */}

      <div
        data-aos="fade-up"
        data-aos-delay="180"
        className="relative z-10 mt-8 w-full overflow-hidden sm:mt-10 lg:mt-12"
      >
        {/* LEFT FADE */}

        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-30 w-8 bg-gradient-to-r from-[#F7FBFD] to-transparent sm:w-16 lg:w-[100px]" />

        {/* RIGHT FADE */}

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-30 w-8 bg-gradient-to-l from-[#F7FBFD] to-transparent sm:w-16 lg:w-[100px]" />

        {/* SLIDER */}

        <div className="speciality-marquee flex w-max items-stretch">
          {sliderItems.map((item, index) => (
            <SpecialityCard
              key={`${item.id}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM DETAIL
      ====================================================== */}

      <div
        data-aos="fade-up"
        data-aos-delay="240"
        className="relative z-10 mx-auto mt-7 flex max-w-[1240px] items-center justify-center gap-3 px-4 sm:mt-8 sm:px-6 lg:px-8"
      >
        <span className="hidden h-px max-w-[100px] flex-1 bg-gradient-to-r from-transparent to-[#B9DCE9] sm:block" />

        <span className="relative flex h-[7px] w-[7px] shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2E91C8] opacity-25" />

          <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#2E91C8]" />
        </span>

        <span className="text-center text-[13px] font-semibold leading-[1.7] text-[#8295A8] sm:text-[15px]">
          Comprehensive Medical & Specialist Care
        </span>

        <span className="hidden h-px max-w-[100px] flex-1 bg-gradient-to-l from-transparent to-[#B9DCE9] sm:block" />
      </div>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        /* ================================================
           CONTINUOUS SLIDER
        ================================================= */

        @keyframes specialityMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .speciality-marquee {
          animation: specialityMarquee 104s linear infinite;
          will-change: transform;
        }

        /* ================================================
           IMAGE SCAN
        ================================================= */

        @keyframes specialityScan {
          from {
            left: -45%;
          }

          to {
            left: 120%;
          }
        }

        .speciality-card:hover .speciality-scan {
          animation: specialityScan 1.1s ease-out forwards;
        }

        /* ================================================
           IMAGE
        ================================================= */

        .speciality-card:hover .speciality-image {
          transform: scale(1.07);
        }

        /* ================================================
           RESPONSIVE SPEED
        ================================================= */

        @media (max-width: 1023px) {
          .speciality-marquee {
            animation-duration: 92s;
          }
        }

        @media (max-width: 639px) {
          .speciality-marquee {
            animation-duration: 80s;
          }
        }

        /* ================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .speciality-marquee {
            animation-play-state: paused;
          }

          .speciality-scan {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   SPECIALITY CARD
========================================================= */

const SpecialityCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="px-2 sm:px-2.5 lg:px-3">
      <Link
        to={item.link}
        className="speciality-card group relative block h-full w-[285px] overflow-hidden rounded-[22px] border border-[#DCEAF0] bg-white shadow-[0_8px_30px_rgba(16,45,95,.045)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#B8DEEC] hover:shadow-[0_22px_50px_rgba(16,45,95,.12)] min-[360px]:w-[305px] sm:w-[330px] lg:w-[360px]"
      >
        {/* =================================================
            IMAGE
        ================================================== */}

        <div className="relative h-[185px] overflow-hidden sm:h-[205px] lg:h-[215px]">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            draggable="false"
            className="speciality-image h-full w-full select-none object-cover transition-transform duration-[900ms] ease-out"
          />

          {/* IMAGE OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/65 via-[#071B3A]/5 to-transparent" />

          <div className="absolute inset-0 bg-[#2E91C8]/0 transition-colors duration-500 group-hover:bg-[#2E91C8]/[0.05]" />

          {/* NUMBER */}

          <div className="absolute left-4 top-4 flex min-h-[30px] min-w-[42px] items-center justify-center rounded-full border border-white/25 bg-[#071B3A]/45 px-2 text-[13px] font-bold leading-[1.7] tracking-[1px] text-white backdrop-blur-md sm:text-[15px]">
            {item.id}
          </div>

          {/* ARROW */}

          <div className="absolute right-4 top-4 flex h-[38px] w-[38px] translate-y-[-4px] items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
            />
          </div>

          {/* BOTTOM TEXT */}

          <div className="absolute bottom-4 left-4">
            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.4px] text-[#A9E2F7] sm:text-[15px]">
              Medical Department
            </span>
          </div>

          {/* SCAN LIGHT */}

          <span className="speciality-scan absolute left-[-45%] top-0 h-full w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative flex min-h-[190px] flex-col px-5 pb-5 pt-7 sm:min-h-[205px] sm:px-5 sm:pb-6 lg:px-6">
          {/* FLOATING ICON */}

          <div className="absolute -top-[28px] left-5 flex h-[56px] w-[56px] items-center justify-center rounded-[17px] border-[4px] border-white bg-[#EAF7FC] text-[#2E91C8] shadow-[0_8px_22px_rgba(16,45,95,.11)] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#102D5F] group-hover:text-white lg:left-6">
            <Icon
              size={23}
              strokeWidth={1.7}
            />
          </div>

          {/* DECORATIVE NUMBER */}

          <span className="pointer-events-none absolute right-4 top-1 text-[64px] font-black leading-none text-[#102D5F]/[0.035] transition-colors duration-500 group-hover:text-[#2E91C8]/[0.07]">
            {item.id}
          </span>

          {/* TEXT */}

          <div className="relative z-10 mt-3 flex h-full flex-col">
            <h3 className="m-0 text-[18px] font-bold leading-[1.35] text-[#102D5F] sm:text-[20px]">
              {item.title}
            </h3>

            <p className="m-0 mt-2.5 text-[13px] leading-[1.7] text-[#64748B] sm:text-[15px]">
              {item.description}
            </p>

            {/* FOOTER */}

            <div className="mt-auto flex items-center justify-between border-t border-[#E4EDF1] pt-3.5">
              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#2E91C8] sm:text-[15px]">
                Explore Department
              </span>

              <span className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#EFF8FB] text-[#102D5F] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#2E91C8] group-hover:text-white">
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}

        <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#2E91C8] to-[#69CBF2] transition-all duration-500 group-hover:w-full" />
      </Link>
    </div>
  );
};

export default SpecialitiesSection;

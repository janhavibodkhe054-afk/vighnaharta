import React, { useEffect } from "react";

import {
  Award,
  BadgeCheck,
  GraduationCap,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

/* ==========================================
   LEADERSHIP DATA
========================================== */

const leaders = [
  {
    name: "Dr. Nagesh Hingmire",
    designation: "Consulting Physician",
    qualification: "M.D. Med. (Ayu)",
    location: "Pune, Maharashtra",
    bio: "Dr. Nagesh Hingmire provides patient-focused medical consultation, clinical assessment and appropriate treatment guidance.",
    image: "/nagesh.png",
  },
  
{
  name: "Dr. Deepali Hingmire",
  designation: "Medical Practitioner",
  qualification: "B.A.M.S.",
  location: "Pune, Maharashtra",
  association:
    "Mutation Dermacare — A Cosmetic Brand Built by a Doctor",
  bio:
    "Dr. Deepali Hingmire is a medical practitioner associated with Mutation Dermacare — A Cosmetic Brand Built by a Doctor, providing healthcare consultation and guidance.",
  image: "/deepali.webp",
},

];

/* ==========================================
   CREDENTIAL COMPONENT
========================================== */

const Credential = ({ icon: Icon, label, value }) => {
  return (
    <div className="group flex min-w-0 items-center gap-3 rounded-[15px] border border-white/[0.08] bg-white/[0.045] px-4 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-[#55B8E9]/30 hover:bg-white/[0.075]">
      <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-[12px] bg-[#2E91C8]/15 text-[#69CBF2] transition-all duration-300 group-hover:bg-[#2E91C8] group-hover:text-white">
        <Icon size={20} strokeWidth={1.7} />
      </div>

      <div className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[1px] text-white/45 sm:text-[12px]">
          {label}
        </span>

        <span className="mt-1 block break-words text-[13px] font-semibold leading-[1.6] text-white/90 sm:text-[15px]">
          {value}
        </span>
      </div>
    </div>
  );
};

/* ==========================================
   MAIN COMPONENT
========================================== */

const LeadershipSection = () => {
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
      id="hospital-leadership"
      className="relative isolate overflow-hidden bg-[#06182F] py-14 sm:py-16 lg:py-20"
    >
      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#071B3A] via-[#092343] to-[#06182F]" />

      <div className="pointer-events-none absolute -left-[180px] top-[5%] h-[460px] w-[460px] rounded-full bg-[#2E91C8]/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-[200px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#55B8E9]/10 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#69CBF2 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* ======================================
          MAIN CONTAINER
      ====================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* ======================================
            SECTION HEADING
        ====================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-12 max-w-[790px] text-center sm:mb-14 lg:mb-16"
        >
          {/* LABEL */}

          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#55B8E9]" />

            <span className="text-[12px] font-bold uppercase tracking-[1.7px] text-[#69CBF2] sm:text-[14px]">
              Our Leadership
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#55B8E9]" />
          </div>

          {/* HEADING */}

          <h2 className="m-0 text-[32px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[38px] lg:text-[46px]">
            The People Behind <span className="text-[#69CBF2]">Our Care</span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-[1.8] text-white/65 sm:text-[16px]">
            Meet the medical professionals supporting patient consultation,
            responsible clinical assessment and compassionate healthcare.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/15" />

            <HeartPulse size={19} className="text-[#69CBF2]" />

            <span className="h-px w-10 bg-white/15" />
          </div>
        </div>

        {/* ======================================
            DOCTOR PROFILES
        ====================================== */}

        <div className="mx-auto max-w-[1240px] space-y-16 sm:space-y-20 lg:space-y-24">
          {leaders.map((doctor, index) => {
            const reverse = index % 2 !== 0;
            const isNagesh = index === 0;

            return (
              <article key={doctor.name} className="relative">
                {/* LARGE BACKGROUND NUMBER */}

                <span
                  className={`pointer-events-none absolute -top-14 hidden select-none text-[190px] font-black leading-none tracking-[-12px] text-white/[0.025] lg:block ${
                    reverse ? "-left-5" : "-right-5"
                  }`}
                >
                  0{index + 1}
                </span>

                {/* MAIN GRID */}

                <div className="relative z-10 grid grid-cols-1 items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
                  {/* ==================================
                      DOCTOR PHOTO
                  ================================== */}

                  <div
                    data-aos={reverse ? "fade-left" : "fade-right"}
                    className={`relative mx-auto w-full max-w-[500px] lg:mx-0 ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* BACK BORDER */}

                    <div
                      className={`pointer-events-none absolute top-5 h-[95%] w-[95%] rounded-[28px] border border-[#55B8E9]/25 ${
                        reverse ? "-right-4" : "-left-4"
                      }`}
                    />

                    {/* BACKGROUND GLOW */}

                    <div className="pointer-events-none absolute -bottom-8 left-1/2 h-[260px] w-[75%] -translate-x-1/2 rounded-full bg-[#2E91C8]/20 blur-[65px]" />

                    {/* IMAGE CONTAINER */}

                    <div
                      className={`group relative h-[390px] overflow-hidden rounded-[26px] border shadow-[0_30px_70px_rgba(0,0,0,0.28)] sm:h-[480px] lg:h-[540px] xl:h-[570px] ${
                        isNagesh
                          ? "border-[#DCEEF7] bg-gradient-to-b from-[#FFFFFF] via-[#F0FAFF] to-[#D9F1FC]"
                          : "border-white/10 bg-gradient-to-b from-[#183B60] to-[#0B2747]"
                      }`}
                    >
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        loading="lazy"
                        className="h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.035]"
                      />

                      {/* DARK GRADIENT ONLY FOR DEEPALI */}

                      {!isNagesh && (
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04152C]/75 via-transparent to-transparent" />
                      )}

                      {/* DOCTOR NUMBER */}

                      <div
                        className={`absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border text-[14px] font-bold backdrop-blur-md ${
                          isNagesh
                            ? "border-[#DCE8F0] bg-[#F1F8FC] text-[#102D5F]"
                            : "border-white/20 bg-[#06182F]/50 text-[#69CBF2]"
                        }`}
                      >
                        0{index + 1}
                      </div>

                      {/* BOTTOM IMAGE INFO */}

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                        <div
                          className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-md ${
                            isNagesh
                              ? "border-[#DCE8F0] bg-white/90"
                              : "border-white/15 bg-white/10"
                          }`}
                        >
                          <BadgeCheck
                            size={16}
                            className={
                              isNagesh ? "text-[#2E91C8]" : "text-[#69CBF2]"
                            }
                          />

                          <span
                            className={`text-[11px] font-bold uppercase tracking-[1px] sm:text-[12px] ${
                              isNagesh ? "text-[#102D5F]" : "text-white/90"
                            }`}
                          >
                            Medical Leadership
                          </span>
                        </div>

                        <h3
                          className={`m-0 text-[23px] font-bold sm:text-[27px] ${
                            isNagesh ? "text-[#102D5F]" : "text-white"
                          }`}
                        >
                          {doctor.name}
                        </h3>

                        <p
                          className={`m-0 mt-1 text-[13px] font-medium sm:text-[15px] ${
                            isNagesh ? "text-[#2E91C8]" : "text-[#8DDCF8]"
                          }`}
                        >
                          {doctor.designation}
                        </p>
                      </div>
                    </div>

                    {/* FLOATING MEDICAL ICON */}

                    <div
                      className={`leadership-float absolute bottom-[20%] hidden h-[68px] w-[68px] items-center justify-center rounded-full border-[6px] border-[#06182F] bg-[#2E91C8] text-white shadow-[0_12px_35px_rgba(46,145,200,0.3)] sm:flex ${
                        reverse ? "-left-5" : "-right-5"
                      }`}
                    >
                      <Stethoscope size={28} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* ==================================
                      DOCTOR INFORMATION
                  ================================== */}

                  <div
                    data-aos={reverse ? "fade-right" : "fade-left"}
                    className={`min-w-0 ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* PROFILE LABEL */}

                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#55B8E9]/30 bg-[#2E91C8]/15 text-[13px] font-bold text-[#69CBF2]">
                        0{index + 1}
                      </span>

                      <span className="h-px w-8 bg-[#55B8E9]/50" />

                      <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-white/55 sm:text-[13px]">
                        Leadership Profile
                      </span>
                    </div>

                    {/* NAME */}

                    <h3 className="m-0 text-[29px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[35px] lg:text-[40px]">
                      {doctor.name}
                    </h3>

                    {/* DESIGNATION */}

                    <p className="m-0 mt-3 text-[15px] font-semibold text-[#69CBF2] sm:text-[17px]">
                      {doctor.designation}
                    </p>

                    {/* CREDENTIALS */}

                    <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Credential
                        icon={GraduationCap}
                        label="Qualification"
                        value={doctor.qualification}
                      />

                      <Credential
                        icon={Stethoscope}
                        label="Designation"
                        value={doctor.designation}
                      />

                      <Credential
                        icon={MapPin}
                        label="Location"
                        value={doctor.location}
                      />

                      <Credential
                        icon={ShieldCheck}
                        label="Professional Association"
                        value={doctor.association || "Vighnaharta Hospital"}
                      />
                    </div>

                    {/* PROFESSIONAL BIO */}

                    <div className="relative mt-7 overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.045] px-5 py-5 backdrop-blur-md sm:px-6">
                      <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-[#69CBF2] via-[#2E91C8] to-transparent" />

                      <div className="mb-3 flex items-center gap-2">
                        <Award size={18} className="text-[#69CBF2]" />

                        <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#69CBF2] sm:text-[13px]">
                          Professional Bio
                        </span>
                      </div>

                      <p className="m-0 text-[14px] leading-[1.85] text-white/70 sm:text-[15px]">
                        {doctor.bio}
                      </p>
                    </div>

                    {/* APPROACH */}

                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#55B8E9]/20 bg-[#2E91C8]/15 text-[#69CBF2]">
                        <HeartPulse size={21} strokeWidth={1.7} />
                      </div>

                      <div>
                        <span className="block text-[12px] font-bold uppercase tracking-[1.1px] text-[#69CBF2]">
                          Our Approach
                        </span>

                        <span className="mt-1 block text-[13px] leading-[1.6] text-white/60 sm:text-[14px]">
                          Responsible • Compassionate • Patient-Focused
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROFILE DIVIDER */}

                {index !== leaders.length - 1 && (
                  <div className="mt-16 flex items-center sm:mt-20 lg:mt-24">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-[#2E91C8]/25" />

                    <div className="mx-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#2E91C8]/25 bg-[#09213E] text-[#55B8E9]">
                      <Sparkles size={18} strokeWidth={1.6} />
                    </div>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-[#2E91C8]/25" />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* ======================================
          ANIMATIONS
      ====================================== */}

      <style>{`
        @keyframes leadershipFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .leadership-float {
          animation: leadershipFloat 4.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .leadership-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadershipSection;

import React from "react";

import {
  Award,
  BadgeCheck,
  BriefcaseMedical,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const leaders = [
  {
    name: "Dr. Nagesh Hingmire",
    designation: "[Speciality / Designation]",
    qualification: "[Exact Qualification]",
    experience: "[Experience]",
    registration: "[Registration Number]",
    bio: "[Verified professional bio about Dr. Nagesh Hingmire, including clinical expertise, professional approach and areas of practice.]",
    image: "/images/doctors/dr-nagesh-hingmire.jpg",
  },
  {
    name: "Dr. Deepali Hingmire",
    designation: "[Speciality / Designation]",
    qualification: "[Exact Qualification]",
    experience: "[Experience]",
    registration: "[Registration Number]",
    bio: "[Verified professional bio about Dr. Deepali Hingmire, including clinical expertise, professional approach and areas of practice.]",
    image: "/images/doctors/dr-deepali-hingmire.jpg",
  },
];

const LeadershipSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#06182F] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-[180px] top-[5%] h-[360px] w-[360px] rounded-full bg-[#2E91C8]/10 blur-[100px] lg:h-[520px] lg:w-[520px] lg:blur-[130px]" />

      <div className="pointer-events-none absolute -right-[200px] bottom-[5%] h-[380px] w-[380px] rounded-full bg-[#55B8E9]/10 blur-[110px] lg:h-[560px] lg:w-[560px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E91C8]/[0.04] blur-[110px] lg:h-[650px] lg:w-[650px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#69CBF2_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#071B3A] to-transparent" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto mb-9 max-w-[790px] text-center sm:mb-11 md:mb-12 lg:mb-14 xl:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#55B8E9] sm:w-10" />

            <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#69CBF2] sm:text-[15px] sm:tracking-[2px]">
              Our Leadership
            </span>

            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#55B8E9] sm:w-10" />
          </div>

          <h2 className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
            The People Behind{" "}
            <span className="bg-gradient-to-r from-[#55B8E9] to-[#7DD8F7] bg-clip-text text-transparent">
              Our Care
            </span>
          </h2>

          <p className="mx-auto mb-0 mt-3 max-w-[610px] text-[13px] leading-[1.7] text-white/55 sm:mt-4 sm:text-[15px]">
            Medical leadership focused on responsible, compassionate and
            patient-centred healthcare.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-white/10" />

            <HeartPulse
              className="h-4 w-4 text-[#55B8E9]"
              strokeWidth={1.6}
            />

            <span className="h-px w-8 bg-white/10" />
          </div>
        </div>

        {/* ===================================================
            DOCTOR PROFILES
        ==================================================== */}

        <div className="mx-auto flex max-w-[1240px] flex-col gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24">
          {leaders.map((doctor, index) => {
            const reverse = index % 2 !== 0;

            return (
              <article
                key={doctor.name}
                className="leadership-reveal relative"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* LARGE BACKGROUND NUMBER */}

                <span
                  className={`pointer-events-none absolute hidden select-none text-[170px] font-black leading-none tracking-[-12px] text-white/[0.018] lg:block xl:text-[210px] ${
                    reverse
                      ? "-left-[40px] -top-[55px]"
                      : "-right-[20px] -top-[55px]"
                  }`}
                >
                  0{index + 1}
                </span>

                {/* GRID */}

                <div className="relative z-10 grid grid-cols-1 items-center gap-7 sm:gap-8 md:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 xl:grid-cols-[0.86fr_1.14fr] xl:gap-16 2xl:gap-20">
                  {/* PHOTO SIDE */}

                  <div
                    className={`relative mx-auto w-full max-w-[470px] ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Back outline */}

                    <div
                      className={`pointer-events-none absolute top-5 h-[94%] w-[94%] rounded-[22px] border border-[#55B8E9]/15 sm:top-7 sm:rounded-[26px] xl:rounded-[30px] ${
                        reverse
                          ? "-right-3 sm:-right-5"
                          : "-left-3 sm:-left-5"
                      }`}
                    />

                    {/* Blue glow */}

                    <div
                      className={`pointer-events-none absolute bottom-[8%] h-[45%] w-[45%] rounded-full bg-[#2E91C8]/20 blur-[50px] ${
                        reverse ? "-right-[8%]" : "-left-[8%]"
                      }`}
                    />

                    {/* PHOTO */}

                    <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0B2747] shadow-[0_30px_70px_rgba(0,0,0,0.28)] sm:rounded-[24px] lg:rounded-[26px] xl:rounded-[30px]">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        loading="lazy"
                        className="block h-[350px] w-full object-cover object-top transition-transform duration-[1200ms] min-[360px]:h-[390px] min-[430px]:h-[440px] sm:h-[500px] md:h-[540px] lg:h-[500px] lg:group-hover:scale-[1.025] xl:h-[560px] 2xl:h-[590px]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04152C]/95 via-[#06182F]/10 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#2E91C8]/10 to-transparent opacity-0 transition-opacity duration-700 lg:group-hover:opacity-100" />

                      {/* TOP NUMBER */}

                      <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-4 sm:top-4">
                        <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-white/15 bg-[#06182F]/50 px-2 text-[13px] font-bold leading-[1.7] text-[#69CBF2] backdrop-blur-md sm:h-9 sm:min-w-9 sm:text-[15px]">
                          0{index + 1}
                        </span>

                        <span className="h-px w-7 bg-white/25" />
                      </div>

                      {/* BOTTOM IMAGE CONTENT */}

                      <div className="absolute bottom-0 left-0 right-0 p-4 min-[360px]:p-5 sm:p-6 xl:p-7">
                        <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 backdrop-blur-md">
                          <BadgeCheck
                            className="h-3.5 w-3.5 text-[#69CBF2]"
                            strokeWidth={1.8}
                          />

                          <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.2px] text-white/80 sm:text-[15px]">
                            Medical Leadership
                          </span>
                        </div>

                        <h3 className="m-0 text-[20px] font-bold tracking-[-0.4px] text-white min-[360px]:text-[22px] sm:text-[25px] xl:text-[28px]">
                          {doctor.name}
                        </h3>

                        <p className="m-0 mt-1 text-[13px] font-medium leading-[1.7] text-[#71D1F4] sm:text-[15px]">
                          {doctor.designation}
                        </p>
                      </div>
                    </div>

                    {/* FLOATING MEDICAL ICON */}

                    <div
                      className={`doctor-float absolute bottom-[19%] hidden h-[64px] w-[64px] items-center justify-center rounded-full border-[6px] border-[#06182F] bg-gradient-to-br from-[#3BA9DC] to-[#247EB1] text-white shadow-[0_12px_35px_rgba(46,145,200,0.32)] sm:flex xl:h-[72px] xl:w-[72px] ${
                        reverse ? "-left-5" : "-right-5"
                      }`}
                    >
                      <Stethoscope
                        className="h-6 w-6 xl:h-7 xl:w-7"
                        strokeWidth={1.7}
                      />

                      <span className="doctor-pulse-ring pointer-events-none absolute inset-[-3px] rounded-full border border-[#55B8E9]/25" />
                    </div>
                  </div>

                  {/* CONTENT SIDE */}

                  <div
                    className={`min-w-0 ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* LABEL */}

                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-[#2E91C8]/35 bg-[#2E91C8]/10 px-2 text-[13px] font-bold leading-[1.7] text-[#69CBF2] sm:h-8 sm:min-w-8 sm:text-[15px]">
                        0{index + 1}
                      </span>

                      <span className="h-px w-7 bg-gradient-to-r from-[#55B8E9]/60 to-transparent sm:w-10" />

                      <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-white/45 sm:text-[15px] sm:tracking-[1.6px]">
                        Leadership Profile
                      </span>
                    </div>

                    {/* NAME */}

                    <h3 className="m-0 text-[25px] font-bold leading-[1.14] tracking-[-1px] text-white min-[360px]:text-[28px] sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[40px]">
                      {doctor.name}
                    </h3>

                    {/* DESIGNATION */}

                    <p className="m-0 mt-2 text-[13px] font-semibold leading-[1.7] text-[#62C7F0] sm:text-[15px]">
                      {doctor.designation}
                    </p>

                    {/* CREDENTIALS */}

                    <div className="mt-5 grid grid-cols-1 gap-2 min-[430px]:grid-cols-2 sm:mt-6 sm:gap-3 lg:mt-7">
                      <Credential
                        icon={GraduationCap}
                        label="Qualification"
                        value={doctor.qualification}
                      />

                      <Credential
                        icon={Stethoscope}
                        label="Speciality"
                        value={doctor.designation}
                      />

                      <Credential
                        icon={BriefcaseMedical}
                        label="Experience"
                        value={doctor.experience}
                      />

                      <Credential
                        icon={ShieldCheck}
                        label="Registration"
                        value={doctor.registration}
                      />
                    </div>

                    {/* BIO */}

                    <div className="relative mt-5 overflow-hidden rounded-[16px] border border-white/[0.07] bg-white/[0.035] px-4 py-4 backdrop-blur-md min-[360px]:px-5 sm:mt-6 sm:rounded-[18px] sm:px-6 sm:py-5 xl:mt-7">
                      <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-[#69CBF2] via-[#2E91C8] to-transparent" />

                      <div className="mb-2 flex items-center gap-2">
                        <Award
                          className="h-3.5 w-3.5 text-[#69CBF2] sm:h-4 sm:w-4"
                          strokeWidth={1.7}
                        />

                        <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-[#69CBF2] sm:text-[15px]">
                          Professional Bio
                        </span>
                      </div>

                      <p className="m-0 max-w-[650px] text-[13px] leading-[1.7] text-white/55 sm:text-[15px]">
                        {doctor.bio}
                      </p>
                    </div>

                    {/* BOTTOM SIGNATURE LINE */}

                    <div className="mt-5 flex items-center gap-3 sm:mt-6">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2E91C8]/20 bg-[#2E91C8]/10 text-[#69CBF2] sm:h-10 sm:w-10">
                        <HeartPulse
                          className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-[#69CBF2] sm:text-[15px]">
                          Our Approach
                        </span>

                        <span className="mt-0.5 block text-[13px] font-medium leading-[1.7] text-white/50 sm:text-[15px]">
                          Responsible • Compassionate • Patient-Focused
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROFILE DIVIDER */}

                {index !== leaders.length - 1 && (
                  <div className="mt-12 flex items-center sm:mt-14 md:mt-16 lg:mt-20">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-[#2E91C8]/20" />

                    <div className="mx-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2E91C8]/20 bg-[#09213E] text-[#55B8E9] sm:mx-4 sm:h-10 sm:w-10">
                      <Sparkles
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        strokeWidth={1.6}
                      />
                    </div>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-[#2E91C8]/20" />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          CSS ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes leadershipReveal {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes doctorFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes doctorRing {
          0% {
            opacity: 0.7;
            transform: scale(0.9);
          }

          70% {
            opacity: 0;
            transform: scale(1.4);
          }

          100% {
            opacity: 0;
            transform: scale(1.4);
          }
        }

        .leadership-reveal {
          opacity: 0;
          animation: leadershipReveal 0.85s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .doctor-float {
          animation: doctorFloat 4s ease-in-out infinite;
        }

        .doctor-pulse-ring {
          animation: doctorRing 2.4s ease-out infinite;
        }

        @media (max-width: 359px) {
          section {
            overflow-x: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .leadership-reveal,
          .doctor-float,
          .doctor-pulse-ring {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   CREDENTIAL
========================================================= */

const Credential = ({ icon: Icon, label, value }) => {
  return (
    <div className="group flex min-w-0 items-center gap-3 rounded-[14px] border border-white/[0.07] bg-white/[0.035] px-3 py-3 backdrop-blur-md transition-all duration-300 min-[360px]:px-3.5 sm:rounded-[16px] sm:px-4 sm:py-3.5 lg:hover:-translate-y-0.5 lg:hover:border-[#2E91C8]/25 lg:hover:bg-white/[0.055]">
      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] border border-[#2E91C8]/15 bg-[#2E91C8]/10 text-[#69CBF2] transition-all duration-300 min-[360px]:h-[40px] min-[360px]:w-[40px] sm:h-[42px] sm:w-[42px] lg:group-hover:bg-[#2E91C8] lg:group-hover:text-white">
        <Icon
          className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
          strokeWidth={1.7}
        />
      </div>

      <div className="min-w-0">
        <span className="block text-[13px] font-semibold uppercase leading-[1.7] tracking-[1px] text-white/35 sm:text-[15px]">
          {label}
        </span>

        <span className="mt-0.5 block break-words text-[13px] font-semibold leading-[1.7] text-white/80 sm:text-[15px]">
          {value}
        </span>
      </div>
    </div>
  );
};

export default LeadershipSection;
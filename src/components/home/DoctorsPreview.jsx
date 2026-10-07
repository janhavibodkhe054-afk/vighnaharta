import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Nagesh Hingmire",
    qualification: "[Exact Qualification]",
    speciality: "[Speciality / Designation]",
    profile:
      "Short verified profile about the doctor, area of clinical practice and approach to patient care.",
    image: "/images/doctors/dr-nagesh-hingmire.jpg",
  },
  {
    name: "Dr. Deepali Hingmire",
    qualification: "[Exact Qualification]",
    speciality: "[Speciality / Designation]",
    profile:
      "Short verified profile about the doctor, area of clinical practice and approach to patient care.",
    image: "/images/doctors/dr-deepali-hingmire.jpg",
  },
];

const DoctorsPreview = () => {
  return (
    <section
      className="
        relative overflow-hidden bg-white

        py-10
        sm:py-12
        md:py-14
        lg:py-16
        xl:py-20
        2xl:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute

          -left-[120px] top-[70px]
          h-[250px] w-[250px]

          rounded-full
          bg-[#EAF7FC]/70
          blur-[60px]

          sm:-left-[160px]
          sm:h-[320px]
          sm:w-[320px]

          lg:-left-52
          lg:top-20
          lg:h-[420px]
          lg:w-[420px]
          lg:blur-[80px]
        "
      />

      <div
        className="
          pointer-events-none absolute

          -right-[130px] bottom-0
          h-[260px] w-[260px]

          rounded-full
          bg-[#F0F9FD]
          blur-[60px]

          sm:h-[320px]
          sm:w-[320px]

          lg:-right-52
          lg:h-[400px]
          lg:w-[400px]
          lg:blur-[80px]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto w-full max-w-[1380px]

          px-3
          min-[360px]:px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mb-7

            flex flex-col
            gap-4

            sm:mb-8
            sm:gap-5

            md:mb-9

            lg:mb-10
            lg:flex-row
            lg:items-end
            lg:justify-between

            xl:mb-11
          "
        >
          <div className="min-w-0">
            {/* LABEL */}

            <div
              className="
                mb-2.5
                flex items-center
                gap-2

                sm:mb-3
                sm:gap-3
              "
            >
              <span
                className="
                  h-[2px] w-6
                  shrink-0 rounded-full
                  bg-[#2E91C8]

                  min-[380px]:w-7
                  sm:w-8
                "
              />

              <span
                className="
                  text-[8px]
                  font-bold uppercase
                  leading-[1.5]
                  tracking-[1.4px]
                  text-[#2E91C8]

                  min-[360px]:text-[9px]
                  min-[380px]:tracking-[1.7px]

                  sm:text-[10px]
                  sm:tracking-[2px]

                  lg:text-[11px]
                  lg:tracking-[2.2px]
                "
              >
                Our Medical Team
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                m-0

                text-[clamp(27px,8vw,34px)]
                font-bold
                leading-[1.15]
                tracking-[-0.8px]
                text-[#102D5F]

                sm:text-[36px]
                sm:tracking-[-1px]

                md:text-[39px]

                lg:text-[42px]

                xl:text-[46px]
              "
            >
              Meet Our{" "}
              <span className="text-[#2E91C8]">
                Doctors
              </span>
            </h2>
          </div>

          {/* ===============================================
              DESKTOP VIEW ALL
          ================================================ */}

          <Link
            to="/doctor"
            className="
              group hidden shrink-0
              items-center gap-2.5

              text-[13px]
              font-semibold
              text-[#102D5F]

              transition-colors
              duration-300

              hover:text-[#2E91C8]

              lg:flex
            "
          >
            View All Doctors

            <span
              className="
                flex h-9 w-9
                items-center justify-center

                rounded-full
                bg-[#EAF7FC]
                text-[#2E91C8]

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:bg-[#2E91C8]
                group-hover:text-white
              "
            >
              <ArrowRight size={15} />
            </span>
          </Link>
        </div>

        {/* ===================================================
            DOCTORS GRID
        ==================================================== */}

        <div
          className="
            grid grid-cols-1

            gap-4

            sm:gap-5

            lg:grid-cols-2
            lg:gap-5

            xl:gap-6
          "
        >
          {doctors.map((doctor, index) => (
            <article
              key={doctor.name}
              className="
                group relative
                min-w-0
                overflow-hidden

                rounded-[18px]

                border
                border-[#DFEAF0]

                bg-[#F9FCFD]

                transition-all
                duration-500

                min-[380px]:rounded-[20px]

                sm:rounded-[22px]

                md:rounded-[24px]

                xl:rounded-[28px]

                lg:hover:-translate-y-1
                lg:hover:border-[#C4E3EF]
                lg:hover:shadow-[0_22px_55px_rgba(16,45,95,0.09)]
              "
            >
              {/* =================================================
                  CARD LAYOUT

                  Mobile       = vertical
                  640px+       = image + content
                  1024px+      = 2 cards, compact image
                  1280px+      = larger image
              ================================================== */}

              <div
                className="
                  grid grid-cols-1

                  sm:grid-cols-[190px_minmax(0,1fr)]

                  md:grid-cols-[220px_minmax(0,1fr)]

                  lg:grid-cols-[190px_minmax(0,1fr)]

                  xl:grid-cols-[220px_minmax(0,1fr)]

                  2xl:grid-cols-[240px_minmax(0,1fr)]
                "
              >
                {/* =============================================
                    DOCTOR IMAGE
                ============================================== */}

                <div
                  className="
                    relative
                    overflow-hidden
                    bg-[#EAF4F8]

                    h-[245px]

                    min-[360px]:h-[270px]

                    min-[430px]:h-[310px]

                    sm:h-auto
                    sm:min-h-[300px]

                    md:min-h-[320px]

                    lg:min-h-[310px]

                    xl:min-h-[325px]

                    2xl:min-h-[340px]
                  "
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    className="
                      h-full w-full
                      object-cover
                      object-top

                      transition-transform
                      duration-700

                      lg:group-hover:scale-[1.035]
                    "
                  />

                  {/* IMAGE GRADIENT */}

                  <div
                    className="
                      pointer-events-none
                      absolute inset-0

                      bg-gradient-to-t
                      from-[#071B3A]/35
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* DOCTOR NUMBER */}

                  <span
                    className="
                      absolute

                      left-3 top-3

                      rounded-full

                      border
                      border-white/25

                      bg-white/15

                      px-2.5 py-1

                      text-[8px]
                      font-bold
                      tracking-[1.3px]
                      text-white

                      backdrop-blur-md

                      min-[360px]:left-4
                      min-[360px]:top-4
                      min-[360px]:px-3
                      min-[360px]:py-1.5
                      min-[360px]:text-[9px]
                      min-[360px]:tracking-[1.5px]
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* =============================================
                    DOCTOR INFORMATION
                ============================================== */}

                <div
                  className="
                    relative
                    flex min-w-0
                    flex-col justify-center

                    p-4

                    min-[360px]:p-5

                    sm:p-5

                    md:p-6

                    lg:p-5

                    xl:p-6

                    2xl:p-7
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      mb-3

                      flex h-9 w-9
                      items-center justify-center

                      rounded-[10px]

                      bg-[#EAF7FC]
                      text-[#2E91C8]

                      transition-all
                      duration-300

                      min-[360px]:h-10
                      min-[360px]:w-10

                      sm:mb-4
                      sm:h-11
                      sm:w-11
                      sm:rounded-xl

                      xl:mb-5

                      lg:group-hover:bg-[#102D5F]
                      lg:group-hover:text-white
                    "
                  >
                    <Stethoscope
                      className="
                        h-[17px] w-[17px]

                        min-[360px]:h-[18px]
                        min-[360px]:w-[18px]

                        sm:h-5 sm:w-5
                      "
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* NAME */}

                  <h3
                    className="
                      m-0

                      text-[18px]
                      font-bold
                      leading-[1.25]
                      tracking-[-0.3px]
                      text-[#102D5F]

                      min-[360px]:text-[19px]

                      sm:text-[18px]

                      md:text-[20px]

                      lg:text-[18px]

                      xl:text-[21px]

                      2xl:text-[23px]
                    "
                  >
                    {doctor.name}
                  </h3>

                  {/* QUALIFICATION */}

                  <p
                    className="
                      m-0 mt-1.5

                      text-[11px]
                      font-semibold
                      leading-[1.5]
                      text-[#2E91C8]

                      min-[360px]:text-[12px]

                      sm:mt-2

                      xl:text-[13px]
                    "
                  >
                    {doctor.qualification}
                  </p>

                  {/* SPECIALITY */}

                  <p
                    className="
                      m-0 mt-1

                      text-[10px]
                      font-medium
                      leading-[1.5]
                      text-[#718291]

                      min-[360px]:text-[11px]

                      xl:text-[12px]
                    "
                  >
                    {doctor.speciality}
                  </p>

                  {/* DIVIDER */}

                  <div
                    className="
                      my-3
                      h-px w-full
                      bg-[#E0EBF0]

                      sm:my-4
                    "
                  />

                  {/* PROFILE */}

                  <p
                    className="
                      m-0

                      text-[13px]
                      leading-[1.7]
                      text-[#687A89]

                      min-[360px]:text-[12px]

                      sm:text-[15px]

                      
                    "
                  >
                    {doctor.profile}
                  </p>

                  {/* ===========================================
                      CONSULTATION
                  ============================================ */}

                  <Link
                    to="/contact"
                    className="
                      group/btn

                      mt-4

                      inline-flex
                      w-fit
                      items-center

                      gap-2

                      text-[13px]
                      sm:text-[15px]
                      font-bold
                      text-[#102D5F]

                      transition-colors
                      duration-300

                      min-[360px]:text-[12px]

                      sm:mt-5
                      sm:gap-2.5

                      hover:text-[#2E91C8]
                    "
                  >
                    <span
                      className="
                        flex h-8 w-8
                        shrink-0
                        items-center justify-center

                        rounded-full

                        bg-[#102D5F]
                        text-white

                        transition-all
                        duration-300

                        sm:h-9 sm:w-9

                        group-hover/btn:bg-[#2E91C8]
                      "
                    >
                      <CalendarDays
                        className="
                          h-[13px] w-[13px]
                          sm:h-[15px] sm:w-[15px]
                        "
                      />
                    </span>

                    <span className="whitespace-nowrap">
                      Book Consultation
                    </span>

                    <ArrowRight
                      className="
                        h-[13px] w-[13px]
                        shrink-0

                        transition-transform
                        duration-300

                        group-hover/btn:translate-x-1

                        sm:h-[14px]
                        sm:w-[14px]
                      "
                    />
                  </Link>
                </div>
              </div>

              {/* =================================================
                  BOTTOM ACCENT
              ================================================== */}

              <span
                className="
                  absolute
                  bottom-0 right-0

                  h-[3px]
                  w-[40px]

                  bg-[#2E91C8]/60

                  transition-all
                  duration-500

                  lg:w-0
                  lg:group-hover:w-full
                "
              />
            </article>
          ))}
        </div>

        {/* ===================================================
            MOBILE / TABLET VIEW ALL
        ==================================================== */}

        <div
          className="
            mt-6 flex
            justify-center

            sm:mt-7

            lg:hidden
          "
        >
          <Link
            to="/doctors"
            className="
              group

              inline-flex
              min-h-[44px]
              w-full
              items-center
              justify-center

              gap-2.5

              rounded-full

              border
              border-[#DCEAF0]

              bg-[#F8FCFD]

              px-5

              text-[11px]
              font-semibold
              text-[#102D5F]

              transition-all
              duration-300

              active:scale-[0.98]

              min-[400px]:w-auto
              min-[400px]:px-6

              sm:min-h-[46px]
              sm:text-[12px]

              hover:border-[#B9DFED]
              hover:text-[#2E91C8]
            "
          >
            View All Doctors

            <ArrowRight
              className="
                h-[14px] w-[14px]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsPreview;
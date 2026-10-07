import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FlaskConical,
  HeartPulse,
  ScanLine,
  Stethoscope,
} from "lucide-react";

const diagnostics = [
  {
    number: "01",
    title: "Pathology Laboratory",
    subtitle: "Essential Diagnostic Testing",
    description:
      "Diagnostic testing to support clinical evaluation, diagnosis and treatment planning.",
    icon: FlaskConical,
    tag: "Laboratory Support",
  },
  {
    number: "02",
    title: "Digital X-Ray",
    subtitle: "Digital Imaging Support",
    description:
      "Digital X-ray facility for diagnostic imaging and evaluation as advised by the treating doctor.",
    icon: ScanLine,
    tag: "Imaging Support",
  },
  {
    number: "03",
    title: "ECG Facility",
    subtitle: "Cardiac Assessment Support",
    description:
      "ECG testing for recording the electrical activity of the heart as part of appropriate clinical assessment.",
    icon: HeartPulse,
    tag: "Cardiac Support",
  },
];

const DiagnosticServices = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#F7FBFD]
        py-12
        sm:py-14
        md:py-16
        lg:py-[72px]
        xl:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[80px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#DDF3FB]/70
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          bottom-[-100px]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#E4F6FC]
          blur-[130px]
        "
      />

      {/* Decorative Pattern */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[60px]
          hidden
          h-[150px]
          w-[150px]
          opacity-[0.08]

          [background-image:radial-gradient(#2E91C8_1.5px,transparent_1.5px)]
          [background-size:14px_14px]

          lg:block
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-[1380px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mb-9
            grid
            grid-cols-1
            gap-5

            md:mb-11
            md:grid-cols-[1fr_0.9fr]
            md:items-end
            md:gap-12

            lg:mb-14
          "
        >
          {/* Left */}

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E6F6FC]
                  text-[#2E91C8]
                "
              >
                <Stethoscope
                  className="h-[17px] w-[17px]"
                  strokeWidth={1.8}
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[1.8px]
                  text-[#2E91C8]
                  sm:text-[12px]
                "
              >
                Diagnostic Support
              </span>

              <span
                className="
                  hidden
                  h-[2px]
                  w-10
                  rounded-full
                  bg-[#2E91C8]
                  sm:block
                "
              />
            </div>

            <h2
              className="
                m-0
                max-w-[700px]

                text-[30px]
                font-bold
                leading-[1.1]
                tracking-[-0.9px]
                text-[#102D5F]

                min-[360px]:text-[32px]
                sm:text-[38px]
                md:text-[42px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Diagnostics That Support{" "}
              <span className="text-[#2E91C8]">
                Better Clinical Decisions
              </span>
            </h2>
          </div>

          {/* Right */}

          <p
            className="
              m-0
              max-w-[590px]

              text-[14px]
              leading-[1.75]
              text-[#637987]

              sm:text-[15px]
              md:text-[16px]
            "
          >
            Timely diagnostic support plays an important role in clinical
            evaluation. Vighnaharta Hospital provides essential diagnostic
            facilities to support doctors in assessing patient conditions
            and planning appropriate treatment.
          </p>
        </div>

        {/* ===================================================
            DIAGNOSTIC PANELS
        ==================================================== */}

        <div
          className="
            overflow-hidden
            rounded-[22px]
            border
            border-[#DCEAF0]
            bg-white
            shadow-[0_18px_55px_rgba(16,45,95,0.07)]

            sm:rounded-[26px]
            lg:rounded-[30px]
          "
        >
          {diagnostics.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`
                  group
                  relative
                  overflow-hidden

                  grid
                  grid-cols-1

                  gap-5

                  px-5
                  py-6

                  transition-all
                  duration-500

                  sm:px-6
                  sm:py-7

                  md:grid-cols-[90px_minmax(0,0.85fr)_minmax(0,1fr)_60px]
                  md:items-center
                  md:gap-6

                  lg:grid-cols-[110px_minmax(0,0.8fr)_minmax(0,1fr)_70px]
                  lg:px-8
                  lg:py-8

                  xl:px-10

                  lg:hover:bg-[#F8FCFE]

                  ${
                    index !== diagnostics.length - 1
                      ? "border-b border-[#DFEBF0]"
                      : ""
                  }
                `}
              >
                {/* =========================================
                    NUMBER + ICON
                ========================================== */}

                <div
                  className="
                    flex
                    items-center
                    gap-3

                    md:flex-col
                    md:items-start
                    md:gap-3
                  "
                >
                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[1.5px]
                      text-[#9EB0BA]

                      md:text-[12px]
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-[15px]

                      bg-[#E9F7FC]

                      text-[#2E91C8]

                      transition-all
                      duration-300

                      sm:h-[56px]
                      sm:w-[56px]

                      lg:h-[60px]
                      lg:w-[60px]

                      group-hover:bg-[#2E91C8]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      className="
                        h-[22px]
                        w-[22px]

                        lg:h-[25px]
                        lg:w-[25px]
                      "
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                {/* =========================================
                    TITLE
                ========================================== */}

                <div>
                  <span
                    className="
                      inline-flex
                      rounded-full

                      border
                      border-[#D9ECF3]

                      bg-[#F2FAFD]

                      px-3
                      py-1

                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[1px]
                      text-[#2E91C8]

                      sm:text-[10px]
                    "
                  >
                    {item.tag}
                  </span>

                  <h3
                    className="
                      m-0
                      mt-2.5

                      text-[21px]
                      font-bold
                      leading-[1.2]
                      tracking-[-0.4px]
                      text-[#102D5F]

                      sm:text-[23px]
                      lg:text-[25px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      m-0
                      mt-1.5

                      text-[12px]
                      font-semibold
                      leading-[1.5]
                      text-[#2E91C8]

                      sm:text-[13px]
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>

                {/* =========================================
                    DESCRIPTION
                ========================================== */}

                <div
                  className="
                    border-t
                    border-[#E5EEF2]
                    pt-4

                    md:border-l
                    md:border-t-0
                    md:pl-6
                    md:pt-0

                    lg:pl-8
                  "
                >
                  <p
                    className="
                      m-0
                      max-w-[520px]

                      text-[13px]
                      leading-[1.75]
                      text-[#667B89]

                      sm:text-[14px]
                      lg:text-[15px]
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* =========================================
                    DECORATIVE ARROW
                ========================================== */}

                <div
                  className="
                    hidden
                    justify-end

                    md:flex
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#DCEAF0]

                      bg-white

                      text-[#2E91C8]

                      transition-all
                      duration-300

                      group-hover:border-[#2E91C8]
                      group-hover:bg-[#2E91C8]
                      group-hover:text-white
                    "
                  >
                    <ArrowRight
                      className="
                        h-[18px]
                        w-[18px]

                        transition-transform
                        duration-300

                        group-hover:translate-x-[2px]
                      "
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                {/* Hover Accent */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[3px]
                    w-0

                    bg-gradient-to-r
                    from-[#102D5F]
                    via-[#2E91C8]
                    to-[#69CBF2]

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <div
          className="
            mt-7

            flex
            flex-col
            items-center
            justify-between

            gap-4

            rounded-[18px]

            bg-[#102D5F]

            px-5
            py-5

            shadow-[0_14px_40px_rgba(16,45,95,0.14)]

            sm:mt-8
            sm:flex-row
            sm:px-6

            lg:mt-10
            lg:px-8
            lg:py-6
          "
        >
          <div className="text-center sm:text-left">
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[1.4px]
                text-[#69CBF2]

                sm:text-[11px]
              "
            >
              Diagnostic Assistance
            </span>

            <p
              className="
                m-0
                mt-1

                text-[13px]
                leading-[1.55]
                text-white/65

                sm:text-[14px]
              "
            >
              Contact the hospital for information about available diagnostic
              support.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              group

              inline-flex
              min-h-[48px]
              w-full
              items-center
              justify-center
              gap-2.5

              rounded-full

              bg-[#2E91C8]

              px-6
              py-2.5

              text-[12px]
              font-bold
              text-white

              transition-all
              duration-300

              sm:w-auto
              sm:min-h-[50px]
              sm:text-[13px]

              lg:hover:-translate-y-0.5
              lg:hover:bg-[#55B8E9]
            "
          >
            Contact Hospital

            <ArrowRight
              className="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticServices;
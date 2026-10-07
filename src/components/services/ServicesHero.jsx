import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  HeartPulse,
  Microscope,
  Phone,
  Siren,
  Stethoscope,
  Syringe,
} from "lucide-react";

const trustItems = [
  {
    title: "Specialist Care",
    icon: Stethoscope,
  },
  {
    title: "Diagnostics",
    icon: Microscope,
  },
  {
    title: "Surgical Care",
    icon: Syringe,
  },
  {
    title: "Emergency Support",
    icon: Siren,
  },
];

const ServicesHero = () => {
  return (
    <section
      className="
        relative isolate
        w-full
        overflow-hidden
        bg-[#061B35]
      "
    >
      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div
        className="
          relative

          min-h-[620px]

          min-[360px]:min-h-[640px]
          sm:min-h-[680px]
          md:min-h-[700px]

          lg:min-h-[590px]
          xl:min-h-[620px]
          2xl:min-h-[650px]
        "
      >
        {/* ===================================================
            RIGHT IMAGE
        ==================================================== */}

        <div
          className="
            absolute

            bottom-0
            right-0
            top-[315px]

            w-full

            sm:top-[330px]

            md:top-[335px]

            lg:bottom-0
            lg:left-[53%]
            lg:top-0
            lg:w-[47%]

            xl:left-[52%]
            xl:w-[48%]
          "
        >
          <img
            src="/serviceshero.png"
            alt="Medical services at Vighnaharta Hospital"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Mobile image overlay */}

          <div
            className="
              absolute inset-0

              bg-gradient-to-b
              from-[#061B35]
              via-[#061B35]/25
              to-[#061B35]/30

              lg:hidden
            "
          />

          {/* Desktop image treatment */}

          <div
            className="
              absolute inset-0

              hidden

              bg-gradient-to-r
              from-[#061B35]/65
              via-[#061B35]/10
              to-transparent

              lg:block
            "
          />

          <div
            className="
              absolute inset-0

              bg-[#0B3157]/10
              mix-blend-multiply
            "
          />
        </div>

        {/* ===================================================
            DIAGONAL SPLIT - DESKTOP
        ==================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            bottom-0
            left-[48%]
            top-0

            z-[2]

            hidden
            w-[150px]

            -skew-x-[22deg]

            bg-gradient-to-r
            from-[#061B35]
            via-[#0A3760]/90
            to-[#1E6590]/20

            lg:block

            xl:left-[47%]
            xl:w-[180px]
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            bottom-0
            left-[54%]
            top-0

            z-[3]

            hidden
            w-[22px]

            -skew-x-[22deg]

            bg-[#2E91C8]/20

            lg:block
          "
        />

        {/* ===================================================
            NAVY BACKGROUND
        ==================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-y-0
            left-0

            z-[1]

            w-full

            bg-gradient-to-br
            from-[#04162C]
            via-[#06213F]
            to-[#07335A]

            lg:w-[58%]
          "
        />

        {/* Glow */}

        <div
          className="
            pointer-events-none

            absolute
            -left-[120px]
            top-[40px]

            z-[2]

            h-[350px]
            w-[350px]

            rounded-full

            bg-[#2E91C8]/10

            blur-[100px]

            lg:h-[500px]
            lg:w-[500px]
          "
        />

        {/* Medical Cross */}

        <div
          className="
            pointer-events-none

            absolute
            left-[43%]
            top-[55px]

            z-[3]

            hidden

            text-[150px]
            font-black
            leading-none
            text-white/[0.025]

            lg:block
          "
        >
          +
        </div>

        {/* dots */}

        <div
          className="
            pointer-events-none

            absolute
            left-[43%]
            top-[210px]

            z-[3]

            hidden
            h-[85px]
            w-[130px]

            opacity-[0.12]

            [background-image:radial-gradient(#55B8E9_1.5px,transparent_1.5px)]
            [background-size:13px_13px]

            lg:block
          "
        />

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <div
          className="
            relative
            z-10

            mx-auto
            w-full
            max-w-[1380px]

            px-3
            pt-10

            min-[360px]:px-4
            min-[360px]:pt-11

            sm:px-6
            sm:pt-12

            md:pt-14

            lg:px-8
            lg:pt-[75px]

            xl:pt-[82px]
          "
        >
          <div
            className="
              services-hero-content

              max-w-[700px]

              lg:w-[53%]
              lg:max-w-[700px]

              xl:w-[54%]
            "
          >
            {/* ===============================================
                LABEL
            ================================================ */}

            <div
              className="
                mb-3

                flex
                items-center
                gap-2.5

                sm:mb-4
              "
            >
              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center

                  rounded-full

                  bg-[#2E91C8]/15

                  text-[#55C9F5]

                  sm:h-8
                  sm:w-8
                "
              >
                <HeartPulse
                  className="
                    h-3.5
                    w-3.5

                    sm:h-4
                    sm:w-4
                  "
                  strokeWidth={1.8}
                />
              </div>

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[1.8px]
                  text-[#55C9F5]

                  min-[360px]:text-[9px]

                  sm:text-[10px]
                  sm:tracking-[2.2px]

                  lg:text-[11px]
                "
              >
                Our Medical Services
              </span>

              <span
                className="
                  h-px
                  w-8

                  bg-[#55C9F5]

                  sm:w-12
                "
              />
            </div>

            {/* ===============================================
                HEADING
            ================================================ */}

            <h1
              className="
                m-0

                max-w-[700px]

                text-[clamp(31px,9vw,41px)]
                font-bold
                leading-[1.05]
                tracking-[-1.2px]
                text-white

                sm:text-[46px]
                sm:tracking-[-1.5px]

                md:text-[50px]

                lg:text-[48px]

                xl:text-[55px]

                2xl:text-[60px]
              "
            >
              Comprehensive{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#3ABAF0]
                  to-[#6DD5F7]

                  bg-clip-text
                  text-transparent
                "
              >
                Healthcare Services
              </span>{" "}
              Under One Roof
            </h1>

            {/* ===============================================
                DESCRIPTION
            ================================================ */}

            <p
              className="
                m-0
                mt-4

                max-w-[660px]

                text-[11px]
                leading-[1.75]
                text-white/65

                min-[360px]:text-[12px]

                sm:mt-5
                sm:text-[13px]

                md:text-[14px]

                lg:max-w-[620px]
                lg:text-[13px]

                xl:text-[14px]
                xl:leading-[1.8]
              "
            >
              From specialist consultations and diagnostic support to
              surgical care and 24×7 emergency services, Vighnaharta
              Hospital brings essential healthcare services together at
              one location in Alephata.
            </p>

            {/* ===============================================
                BUTTONS
            ================================================ */}

            <div
              className="
                mt-5

                flex
                flex-col

                gap-2.5

                min-[430px]:flex-row

                sm:mt-6
                sm:gap-3

                lg:mt-7
              "
            >
              {/* Appointment */}

              <Link
                to="/contact"
                className="
                  group

                  inline-flex
                  min-h-[46px]
                  w-full

                  items-center
                  justify-center

                  gap-2.5

                  rounded-[12px]

                  bg-gradient-to-r
                  from-[#43C6F4]
                  to-[#35B7E9]

                  px-4
                  py-2.5

                  text-[10.5px]
                  font-bold
                  text-[#06213F]

                  shadow-[0_10px_30px_rgba(46,145,200,0.25)]

                  transition-all
                  duration-300

                  min-[430px]:w-auto

                  sm:min-h-[50px]
                  sm:px-5
                  sm:text-[12px]

                  lg:min-h-[52px]
                  lg:px-6
                  lg:hover:-translate-y-0.5
                  lg:hover:shadow-[0_15px_35px_rgba(46,145,200,0.32)]

                  xl:px-7
                  xl:text-[13px]
                "
              >
                <CalendarDays
                  className="h-4 w-4"
                  strokeWidth={2}
                />

                Book an Appointment

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

              {/* Emergency */}

              <a
                href="tel:+919766999474"
                className="
                  group

                  inline-flex
                  min-h-[46px]
                  w-full

                  items-center
                  justify-center

                  gap-2.5

                  rounded-[12px]

                  border
                  border-[#EF5350]/30

                  bg-[#E83C3C]

                  px-4
                  py-2.5

                  text-[10.5px]
                  font-bold
                  text-white

                  shadow-[0_10px_28px_rgba(220,38,38,0.18)]

                  transition-all
                  duration-300

                  min-[430px]:w-auto

                  sm:min-h-[50px]
                  sm:px-5
                  sm:text-[12px]

                  lg:min-h-[52px]
                  lg:px-6
                  lg:hover:-translate-y-0.5
                  lg:hover:bg-[#D92F2F]

                  xl:px-7
                  xl:text-[13px]
                "
              >
                <Phone
                  className="
                    h-4
                    w-4
                  "
                  strokeWidth={2.2}
                />

                24×7 Emergency – Call Now
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================
            IMAGE TEXT - DESKTOP ONLY
        ==================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            bottom-[160px]
            right-[7%]

            z-[5]

            hidden

            lg:block

            xl:right-[9%]
          "
        >
          <div
            className="
              border-l-2
              border-[#55C9F5]

              pl-4

              text-white
            "
          >
            <span
              className="
                block

                text-[10px]
                font-bold
                uppercase
                tracking-[2px]
                text-[#6DD5F7]
              "
            >
              Vighnaharta Hospital
            </span>

            <p
              className="
                m-0
                mt-1

                text-[19px]
                font-semibold
                leading-[1.25]

                xl:text-[21px]
              "
            >
              Your Health.
              <br />
              Our Priority.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          TRUST STRIP
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto
          -mt-[94px]

          w-[calc(100%-24px)]
          max-w-[1380px]

          min-[360px]:w-[calc(100%-32px)]

          sm:-mt-[100px]
          sm:w-[calc(100%-48px)]

          lg:-mt-[112px]
          lg:w-[calc(100%-64px)]
        "
      >
        <div
          className="
            grid
            grid-cols-2

            overflow-hidden

            rounded-[18px]

            border
            border-[#55B8E9]/20

            bg-[#0B3157]/90

            shadow-[0_18px_55px_rgba(0,0,0,0.20)]

            backdrop-blur-xl

            lg:grid-cols-4
            lg:rounded-[24px]
          "
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  group
                  relative

                  flex
                  min-h-[82px]
                  items-center

                  gap-2.5

                  px-3
                  py-3

                  min-[360px]:px-4

                  sm:min-h-[90px]
                  sm:gap-3

                  lg:min-h-[105px]
                  lg:justify-center
                  lg:gap-4
                  lg:px-5

                  ${
                    index % 2 === 0
                      ? "border-r border-white/[0.08] lg:border-r"
                      : "lg:border-r lg:border-white/[0.08]"
                  }

                  ${
                    index < 2
                      ? "border-b border-white/[0.08] lg:border-b-0"
                      : ""
                  }

                  ${
                    index === trustItems.length - 1
                      ? "lg:border-r-0"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#55B8E9]/15

                    bg-[#2E91C8]/15

                    text-[#55C9F5]

                    shadow-[inset_0_0_20px_rgba(85,184,233,0.08)]

                    transition-all
                    duration-300

                    min-[360px]:h-10
                    min-[360px]:w-10

                    sm:h-11
                    sm:w-11

                    lg:h-12
                    lg:w-12

                    lg:group-hover:bg-[#2E91C8]
                    lg:group-hover:text-white
                  "
                >
                  <Icon
                    className="
                      h-4
                      w-4

                      sm:h-[18px]
                      sm:w-[18px]

                      lg:h-5
                      lg:w-5
                    "
                    strokeWidth={1.7}
                  />
                </div>

                <span
                  className="
                    text-[9px]
                    font-semibold
                    leading-[1.3]
                    text-white/90

                    min-[360px]:text-[10px]

                    sm:text-[11px]

                    lg:text-[12px]

                    xl:text-[13px]
                  "
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Space after overlapping trust strip */}

      <div
        className="
          h-5
          sm:h-6
          lg:h-7
        "
      />

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes servicesHeroReveal {
          from {
            opacity: 0;
            transform: translate3d(-22px, 18px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .services-hero-content {
          animation:
            servicesHeroReveal
            0.85s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @media (prefers-reduced-motion: reduce) {
          .services-hero-content {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesHero;
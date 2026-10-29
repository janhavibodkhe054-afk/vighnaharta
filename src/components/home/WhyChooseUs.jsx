import React from "react";
import { version } from "react-dom";
import {
  Clock3,
  Stethoscope,
  Users,
  Building2,
  HeartHandshake,
  HeartPulse,
  BedDouble,
  MapPin,
  ShieldCheck,
  Check,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: HeartPulse,
    title: "First Cardiac Rehabilitation Centre in Junnar Taluka",
    description:
      "Proud to be the first cardiac rehabilitation centre in Junnar Taluka, bringing dedicated heart recovery and rehabilitation care closer to the community.",
  },
  {
    number: "02",
    icon: BedDouble,
    title: "Comfort That Feels Like a Second Home",
    description:
      "A welcoming hospital ambience, thoughtfully designed patient rooms and essential in-room facilities create a comfortable, homely environment during recovery.",
  },
  {
    number: "03",
    icon: Clock3,
    title: "24×7 Medical Support",
    description:
      "Emergency healthcare services available round the clock.",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Multispeciality Care",
    description:
      "Multiple medical specialties and treatments available at one location.",
  },
  {
    number: "05",
    icon: Users,
    title: "Experienced Medical Team",
    description:
      "Patient care guided by qualified doctors and healthcare professionals.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Modern Medical Infrastructure",
    description:
      "Essential diagnostic, surgical and critical-care facilities.",
  },
  {
    number: "07",
    icon: HeartHandshake,
    title: "Patient-Centric Approach",
    description:
      "Every patient receives attentive and respectful care based on their clinical needs.",
  },
  {
    number: "08",
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Strategically located at Alephata for patients from Junnar and surrounding regions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white

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
          pointer-events-none
          absolute
          -left-[120px]
          top-[80px]

          h-[250px]
          w-[250px]

          rounded-full
          bg-[#EAF7FC]/70
          blur-[45px]

          sm:-left-[150px]
          sm:h-[320px]
          sm:w-[320px]

          lg:-left-[200px]
          lg:top-[100px]
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[50px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[120px]
          -right-[120px]

          h-[260px]
          w-[260px]

          rounded-full
          bg-[#F0F9FD]
          blur-[40px]

          sm:h-[320px]
          sm:w-[320px]

          lg:-right-[180px]
          lg:bottom-[-100px]
          lg:h-[400px]
          lg:w-[400px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1380px]

          px-3
          min-[360px]:px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid

            gap-9

            sm:gap-11
            md:gap-12

            lg:grid-cols-[0.82fr_1.18fr]
            lg:items-start
            lg:gap-10

            xl:grid-cols-[0.85fr_1.15fr]
            xl:gap-14

            2xl:gap-20
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              min-w-0

              lg:sticky
              lg:top-[110px]

              xl:top-[125px]
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
                sm:gap-3
              "
            >
              <span
                className="
                  h-[2px]
                  w-6
                  shrink-0
                  rounded-full
                  bg-[#2E91C8]

                  min-[380px]:w-7

                  sm:w-9
                "
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
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
                Why Choose Us
              </span>
            </div>

            {/* ===============================================
                HEADING
            ================================================ */}

            <h2
              className="
                m-0
                max-w-[560px]

                text-[clamp(27px,8vw,34px)]
                font-bold
                leading-[1.15]
                tracking-[-0.8px]
                text-[#102D5F]

                sm:text-[36px]
                sm:tracking-[-1px]

                md:text-[39px]

                lg:text-[38px]

                xl:text-[43px]

                2xl:text-[46px]
              "
            >
              Why Patients Choose

              <span
                className="
                  mt-1
                  block
                  text-[#2E91C8]
                "
              >
                Vighnaharta Hospital
              </span>
            </h2>

            {/* ===============================================
                SMALL ACCENT
            ================================================ */}

            <div
              className="
                mt-4
                flex
                items-center
                gap-1.5

                sm:mt-5
              "
            >
              

              
            </div>

            {/* ===============================================
                IMAGE AREA
            ================================================ */}

            <div
              className="
                relative

                mt-6
                w-full
                max-w-[530px]

                sm:mt-7

                md:mt-8

                lg:mt-7

                xl:mt-9
              "
            >
              {/* IMAGE */}

              <div
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[18px]

                  bg-[#EEF6F9]

                  shadow-[0_15px_40px_rgba(16,45,95,0.09)]

                  min-[380px]:rounded-[20px]

                  sm:rounded-[24px]
                  sm:shadow-[0_20px_50px_rgba(16,45,95,0.10)]

                  xl:rounded-[28px]
                "
              >
                <img
                  src="/g3.jpg"
                  alt="Vighnaharta Hospital patient care"
                  loading="lazy"
                  className="
                    h-[250px]
                    w-full
                    object-cover
                    object-center

                    transition-transform
                    duration-700

                    min-[360px]:h-[280px]

                    min-[430px]:h-[320px]

                    sm:h-[360px]

                    md:h-[390px]

                    lg:h-[350px]

                    xl:h-[400px]

                    2xl:h-[420px]

                    lg:group-hover:scale-[1.025]
                  "
                />

                {/* IMAGE GRADIENT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#071B3A]/65
                    via-[#071B3A]/5
                    to-transparent
                  "
                />

                {/* =============================================
                    IMAGE BOTTOM CONTENT
                ============================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0

                    p-4

                    min-[380px]:p-5

                    sm:p-6

                    lg:p-5

                    xl:p-6
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2.5

                      sm:gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center

                        rounded-[10px]

                        bg-white/15
                        text-white

                        backdrop-blur-md

                        min-[360px]:h-10
                        min-[360px]:w-10

                        sm:h-11
                        sm:w-11
                        sm:rounded-xl
                      "
                    >
                      <ShieldCheck
                        className="
                          h-[18px]
                          w-[18px]

                          sm:h-[21px]
                          sm:w-[21px]
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          m-0

                          text-[11px]
                          font-semibold
                          leading-tight
                          text-white

                          min-[360px]:text-[12px]

                          sm:text-[14px]
                        "
                      >
                        Care You Can Rely On
                      </p>

                      <p
                        className="
                          m-0
                          mt-1

                          text-[8px]
                          leading-tight
                          text-white/65

                          min-[360px]:text-[9px]

                          sm:text-[11px]
                        "
                      >
                        Multispeciality Healthcare • Alephata
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =============================================
                  BLUE BACK SHAPE
              ============================================== */}

              <div
                className="
                  pointer-events-none
                  absolute

                  -bottom-3
                  -right-2
                  -z-10

                  h-[70%]
                  w-[72%]

                  rounded-[20px]
                  bg-[#E2F4FB]

                  min-[380px]:-right-3

                  sm:-bottom-4
                  sm:-right-4
                  sm:rounded-[24px]

                  xl:-bottom-5
                  xl:-right-5
                  xl:rounded-[28px]
                "
              />

              {/* =============================================
                  FLOATING CHECK
              ============================================== */}

              <div
                className="
                  absolute

                  -right-1
                  -top-3

                  flex
                  h-[44px]
                  w-[44px]
                  items-center
                  justify-center

                  rounded-[13px]

                  border-[4px]
                  border-white

                  bg-[#2E91C8]
                  text-white

                  shadow-[0_10px_25px_rgba(46,145,200,0.23)]

                  min-[360px]:h-[48px]
                  min-[360px]:w-[48px]

                  sm:-right-2
                  sm:-top-4
                  sm:h-[56px]
                  sm:w-[56px]
                  sm:rounded-2xl
                  sm:border-[5px]

                  lg:-right-3

                  xl:h-[64px]
                  xl:w-[64px]
                "
              >
                <Check
                  className="
                    h-[19px]
                    w-[19px]

                    min-[360px]:h-[21px]
                    min-[360px]:w-[21px]

                    sm:h-[25px]
                    sm:w-[25px]

                    xl:h-[27px]
                    xl:w-[27px]
                  "
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div
            className="
              min-w-0
              overflow-hidden

              rounded-[18px]

              border
              border-[#E1EDF2]

              bg-[#FBFDFE]

              shadow-[0_8px_30px_rgba(16,45,95,0.025)]

              min-[380px]:rounded-[20px]

              sm:rounded-[24px]

              xl:rounded-[28px]
            "
          >
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`
                    group
                    relative

                    flex
                    items-start

                    gap-3

                    px-4
                    py-4

                    transition-all
                    duration-300

                    min-[360px]:gap-3.5
                    min-[360px]:px-5

                    sm:gap-4
                    sm:px-6
                    sm:py-5

                    md:gap-5
                    md:px-7

                    lg:gap-4
                    lg:px-5
                    lg:py-5

                    xl:gap-5
                    xl:px-7
                    xl:py-6

                    2xl:px-8

                    lg:hover:bg-white

                    ${
                      index !== reasons.length - 1
                        ? "border-b border-[#E5EEF2]"
                        : ""
                    }
                  `}
                >
                  {/* =========================================
                      LEFT ACTIVE LINE
                  ========================================== */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0

                      w-[3px]

                      origin-center
                      scale-y-0

                      rounded-r-full
                      bg-[#2E91C8]

                      transition-transform
                      duration-300

                      lg:group-hover:scale-y-100
                    "
                  />

                  {/* =========================================
                      NUMBER - DESKTOP/TABLET
                  ========================================== */}

                  <div
                    className="
                      hidden
                      w-[30px]
                      shrink-0
                      pt-1.5

                      sm:block

                      md:w-[36px]

                      xl:w-[40px]
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-bold
                        tracking-[1px]
                        text-[#AAB8C4]

                        transition-colors
                        duration-300

                        md:text-[10px]

                        xl:text-[11px]

                        group-hover:text-[#2E91C8]
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* =========================================
                      ICON
                  ========================================== */}

                  <div
                    className="
                      flex
                      h-[42px]
                      w-[42px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-[12px]

                      bg-[#EAF7FC]
                      text-[#2E91C8]

                      transition-all
                      duration-500

                      min-[360px]:h-[46px]
                      min-[360px]:w-[46px]
                      min-[360px]:rounded-[13px]

                      sm:h-[50px]
                      sm:w-[50px]
                      sm:rounded-[14px]

                      md:h-[54px]
                      md:w-[54px]
                      md:rounded-2xl

                      xl:h-[58px]
                      xl:w-[58px]

                      lg:group-hover:-translate-y-0.5
                      lg:group-hover:bg-[#102D5F]
                      lg:group-hover:text-white
                      lg:group-hover:shadow-[0_10px_25px_rgba(16,45,95,0.15)]
                    "
                  >
                    <Icon
                      className="
                        h-[19px]
                        w-[19px]

                        min-[360px]:h-[20px]
                        min-[360px]:w-[20px]

                        sm:h-[22px]
                        sm:w-[22px]

                        xl:h-[24px]
                        xl:w-[24px]
                      "
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* =========================================
                      CONTENT
                  ========================================== */}

                  <div className="min-w-0 flex-1">
                    {/* Mobile Number */}

                    <span
                      className="
                        mb-1
                        block

                        text-[8px]
                        font-bold
                        tracking-[1px]
                        text-[#AAB8C4]

                        sm:hidden
                      "
                    >
                      {item.number}
                    </span>

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-2

                        sm:gap-3
                      "
                    >
                      <h3
                        className="
                          m-0

                          text-[13px]
                          font-bold
                          leading-[1.35]
                          text-[#102D5F]

                          transition-colors
                          duration-300

                          min-[360px]:text-[14px]

                          sm:text-[15px]

                          md:text-[16px]

                          xl:text-[17px]

                          lg:group-hover:text-[#2E91C8]
                        "
                      >
                        {item.title}
                      </h3>

                      {/* Small Tick */}

                      <div
                        className="
                          hidden
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          border
                          border-[#DDECF3]

                          text-[#2E91C8]

                          transition-all
                          duration-300

                          sm:flex

                          md:h-7
                          md:w-7

                          lg:group-hover:border-[#2E91C8]
                          lg:group-hover:bg-[#2E91C8]
                          lg:group-hover:text-white
                        "
                      >
                        <Check
                          className="
                            h-[10px]
                            w-[10px]

                            md:h-3
                            md:w-3
                          "
                          strokeWidth={3}
                        />
                      </div>
                    </div>

                    <p
                      className="
                        m-0
                        mt-1.5

                        max-w-[600px]

                        text-[13px]
                        leading-[1.65]
                        text-[#68798B]

                        min-[360px]:text-[11px]

                        sm:mt-2
                        sm:text-[15px]
                        sm:leading-[1.7]

                        
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
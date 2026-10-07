import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Bone,
  Activity,
  HeartPulse,
  Stethoscope,
  Cross,
  Droplets,
  UserRound,
  Venus,
  Plus,
  Sparkles,
} from "lucide-react";

const treatments = [
  {
    title: "Fracture Treatment",
    icon: Bone,
    position:
      "lg:left-[1%] lg:top-[8%] xl:left-[4%] xl:top-[9%]",
  },
  {
    title: "Knee Ligament Surgery",
    icon: Activity,
    position:
      "lg:left-[-1%] lg:top-[42%] xl:left-[0%]",
  },
  {
    title: "Spine Trauma Care",
    icon: HeartPulse,
    position:
      "lg:left-[3%] lg:bottom-[7%] xl:left-[7%] xl:bottom-[8%]",
  },
  {
    title: "Hernia Surgery",
    icon: Stethoscope,
    position:
      "lg:left-[24%] lg:bottom-[-1%] xl:left-[29%]",
  },
  {
    title: "Appendix Surgery",
    icon: Cross,
    position:
      "lg:right-[24%] lg:bottom-[-1%] xl:right-[29%]",
  },
  {
    title: "Kidney Stone Treatment",
    icon: Droplets,
    position:
      "lg:right-[3%] lg:bottom-[7%] xl:right-[7%] xl:bottom-[8%]",
  },
  {
    title: "Prostate Treatment",
    icon: UserRound,
    position:
      "lg:right-[-1%] lg:top-[42%] xl:right-[0%]",
  },
  {
    title: "Gynecological Procedures",
    icon: Venus,
    position:
      "lg:right-[1%] lg:top-[8%] xl:right-[4%] xl:top-[9%]",
  },
];

const TreatmentsSection = () => {
  return (
    <section
      className="
        relative overflow-hidden bg-[#F9FCFE]

        py-10
        sm:py-12
        md:py-14
        lg:py-16
        xl:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute left-1/2 top-[55%]
          -translate-x-1/2 -translate-y-1/2

          h-[320px] w-[320px]
          rounded-full
          bg-[#EAF7FC]/70
          blur-[80px]

          sm:h-[450px] sm:w-[450px]

          lg:h-[560px] lg:w-[560px]
          lg:blur-[100px]

          xl:h-[620px] xl:w-[620px]
          xl:blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none absolute

          -left-[100px] top-10
          h-[220px] w-[220px]

          rounded-full
          bg-[#E5F6FC]/70
          blur-[60px]

          lg:-left-32
          lg:h-[280px] lg:w-[280px]
          lg:blur-[70px]
        "
      />

      <div
        className="
          pointer-events-none absolute

          -right-[110px] bottom-0
          h-[220px] w-[220px]

          rounded-full
          bg-[#EAF5FA]
          blur-[65px]

          lg:-right-32
          lg:h-[300px] lg:w-[300px]
          lg:blur-[80px]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative mx-auto w-full max-w-[1380px]

          px-3
          min-[360px]:px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-[780px] text-center">
          <div
            className="
              mb-2.5 flex
              items-center justify-center
              gap-2

              sm:mb-3 sm:gap-3
            "
          >
            <span
              className="
                h-px w-5 bg-[#82CDE9]
                sm:w-7
              "
            />

            <span
              className="
                text-[8px] font-bold uppercase
                tracking-[1.5px] text-[#2E91C8]

                min-[360px]:text-[9px]
                min-[360px]:tracking-[1.8px]

                sm:text-[10px]
                sm:tracking-[2.1px]

                lg:text-[11px]
                lg:tracking-[2.3px]
              "
            >
              Treatments & Procedures
            </span>

            <span
              className="
                h-px w-5 bg-[#82CDE9]
                sm:w-7
              "
            />
          </div>

          <h2
            className="
              m-0

              text-[clamp(27px,8vw,34px)]
              font-bold
              leading-[1.15]
              tracking-[-0.8px]
              text-[#102D5F]

              sm:text-[36px]

              md:text-[40px]

              lg:text-[42px]

              xl:text-[44px]
            "
          >
            Specialized Care for{" "}

            <span className="text-[#2E91C8]">
              Better Recovery
            </span>
          </h2>
        </div>

        {/* ===================================================
            DESKTOP ORBIT
            1024px+
        ==================================================== */}

        <div
          className="
            relative mx-auto

            mt-4 hidden
            max-w-[1200px]

            lg:block
            lg:h-[500px]

            xl:mt-5
            xl:h-[530px]
          "
        >
          {/* =================================================
              OUTER SOFT HALO
          ================================================== */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-1/2

              h-[390px] w-[390px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full
              bg-[#DDF2FA]/35

              xl:h-[450px]
              xl:w-[450px]
            "
          />

          {/* =================================================
              OUTER ORBIT
          ================================================== */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-1/2

              h-[370px] w-[370px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full
              border
              border-[#B8DFEE]

              xl:h-[420px]
              xl:w-[420px]
            "
          />

          {/* DASHED ORBIT */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-1/2

              h-[338px] w-[338px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full
              border border-dashed
              border-[#2E91C8]/35

              xl:h-[386px]
              xl:w-[386px]
            "
          />

          {/* MIDDLE GLASS RING */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-1/2

              h-[286px] w-[286px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full
              border border-white

              bg-white/25

              shadow-[0_0_50px_rgba(46,145,200,0.06)]

              xl:h-[320px]
              xl:w-[320px]
            "
          />

          {/* INNER RING */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-1/2

              h-[242px] w-[242px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full
              border border-[#DCEEF5]

              xl:h-[270px]
              xl:w-[270px]
            "
          />

          {/* =================================================
              ORBIT NODES
          ================================================== */}

          {/* TOP */}

          <div
            className="
              absolute left-1/2
              top-[11%] z-10
              -translate-x-1/2

              xl:top-[9.5%]
            "
          >
            <div
              className="
                relative flex
                h-[18px] w-[18px]
                items-center justify-center

                rounded-full bg-white

                shadow-[0_3px_12px_rgba(16,45,95,0.12)]

                xl:h-5 xl:w-5
              "
            >
              <span
                className="
                  h-2 w-2
                  rounded-full
                  bg-[#2E91C8]
                "
              />

              <span
                className="
                  absolute
                  h-full w-full

                  animate-ping
                  rounded-full
                  bg-[#55B8E9]/20
                "
              />
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              absolute
              right-[31.5%] top-1/2 z-10
              -translate-y-1/2
            "
          >
            <div
              className="
                flex h-4 w-4
                items-center justify-center
                rounded-full bg-white
                shadow-md
              "
            >
              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-[#55B8E9]
                "
              />
            </div>
          </div>

          {/* BOTTOM */}

          <div
            className="
              absolute
              bottom-[11%] left-1/2 z-10
              -translate-x-1/2

              xl:bottom-[9.5%]
            "
          >
            <div
              className="
                flex h-[18px] w-[18px]
                items-center justify-center

                rounded-full bg-white
                shadow-md

                xl:h-5 xl:w-5
              "
            >
              <span
                className="
                  h-2 w-2
                  rounded-full
                  bg-[#102D5F]
                "
              />
            </div>
          </div>

          {/* LEFT */}

          <div
            className="
              absolute
              left-[31.5%] top-1/2 z-10
              -translate-y-1/2
            "
          >
            <div
              className="
                flex h-4 w-4
                items-center justify-center
                rounded-full bg-white
                shadow-md
              "
            >
              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-[#55B8E9]
                "
              />
            </div>
          </div>

          {/* =================================================
              SMALL PLUS SYMBOLS
          ================================================== */}

          <span
            className="
              absolute left-[37%] top-[19%]
              text-[#2E91C8]/25
            "
          >
            <Plus size={15} />
          </span>

          <span
            className="
              absolute right-[37%] top-[19%]
              text-[#2E91C8]/25
            "
          >
            <Plus size={11} />
          </span>

          <span
            className="
              absolute bottom-[20%] right-[37%]
              text-[#2E91C8]/20
            "
          >
            <Plus size={14} />
          </span>

          {/* =================================================
              CENTER CORE
          ================================================== */}

          <div
            className="
              absolute left-1/2 top-1/2 z-20

              flex
              h-[195px] w-[195px]

              -translate-x-1/2
              -translate-y-1/2

              items-center justify-center

              rounded-full
              bg-white
              p-[6px]

              shadow-[0_22px_60px_rgba(16,45,95,0.15)]

              xl:h-[225px]
              xl:w-[225px]
              xl:p-[7px]
              xl:shadow-[0_25px_70px_rgba(16,45,95,0.16)]
            "
          >
            <div
              className="
                pointer-events-none
                absolute inset-0
                rounded-full
                border border-[#C7E6F2]
              "
            />

            {/* DARK CORE */}

            <div
              className="
                relative flex
                h-full w-full
                items-center justify-center
                overflow-hidden

                rounded-full

                bg-gradient-to-br
                from-[#102D5F]
                via-[#0D3566]
                to-[#176A9A]

                text-center
              "
            >
              {/* GLOW */}

              <div
                className="
                  absolute
                  -right-14 -top-14

                  h-[140px] w-[140px]

                  rounded-full
                  bg-[#69D0F5]/20
                  blur-[35px]

                  xl:h-[150px]
                  xl:w-[150px]
                "
              />

              <div
                className="
                  absolute
                  -bottom-14 -left-14

                  h-[130px] w-[130px]

                  rounded-full
                  bg-[#2E91C8]/25
                  blur-[35px]

                  xl:h-[140px]
                  xl:w-[140px]
                "
              />

              {/* DOT PATTERN */}

              <div
                className="
                  pointer-events-none
                  absolute inset-0

                  opacity-[0.05]

                  [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
                  [background-size:13px_13px]
                "
              />

              {/* CORE CONTENT */}

              <div
                className="
                  relative z-10
                  px-4

                  xl:px-5
                "
              >
                <div
                  className="
                    mx-auto mb-3

                    flex
                    h-[42px] w-[42px]
                    items-center justify-center

                    rounded-full

                    border border-white/15
                    bg-white/10

                    text-[#79D4F6]

                    backdrop-blur-md

                    xl:mb-4
                    xl:h-[50px]
                    xl:w-[50px]
                  "
                >
                  <Sparkles
                    className="
                      h-[17px] w-[17px]
                      xl:h-5 xl:w-5
                    "
                    strokeWidth={1.7}
                  />
                </div>

                <span
                  className="
                    block

                    text-[7px]
                    font-bold uppercase
                    tracking-[1.7px]
                    text-[#7BD4F5]

                    xl:text-[8px]
                    xl:tracking-[2.1px]
                  "
                >
                  Vighnaharta Hospital
                </span>

                <h3
                  className="
                    mt-1.5

                    text-[18px]
                    font-bold
                    leading-[1.2]
                    tracking-[-0.3px]
                    text-white

                    xl:mt-2
                    xl:text-[21px]
                  "
                >
                  Treatments

                  <span
                    className="
                      block
                      font-medium
                      text-[#77D1F3]
                    "
                  >
                    & Procedures
                  </span>
                </h3>

                <div
                  className="
                    mx-auto mt-3
                    flex justify-center
                    gap-1

                    xl:mt-4
                  "
                >
                  <span
                    className="
                      h-[3px] w-5
                      rounded-full
                      bg-[#55B8E9]

                      xl:w-6
                    "
                  />

                  <span
                    className="
                      h-[3px] w-2
                      rounded-full
                      bg-white/30
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              TREATMENTS AROUND ORBIT
          ================================================== */}

          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  absolute
                  ${item.position}
                  z-30
                  group
                `}
              >
                <div
                  className="
                    flex items-center
                    gap-2.5

                    xl:gap-3
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      relative

                      flex
                      h-[46px] w-[46px]
                      shrink-0
                      items-center justify-center

                      rounded-full

                      border border-[#D4E9F1]
                      bg-white
                      text-[#2E91C8]

                      shadow-[0_8px_22px_rgba(16,45,95,0.08)]

                      transition-all
                      duration-300

                      xl:h-[52px]
                      xl:w-[52px]

                      hover:-translate-y-1
                      hover:border-[#2E91C8]
                      hover:bg-[#102D5F]
                      hover:text-white
                      hover:shadow-[0_12px_28px_rgba(16,45,95,0.16)]
                    "
                  >
                    <Icon
                      className="
                        h-[18px] w-[18px]
                        xl:h-5 xl:w-5
                      "
                      strokeWidth={1.7}
                    />

                    <span
                      className="
                        absolute
                        -right-0.5 top-1

                        h-2 w-2

                        rounded-full

                        border-2 border-white
                        bg-[#55B8E9]
                      "
                    />
                  </div>

                  {/* TEXT */}

                  <div>
                    <span
                      className="
                        mb-0.5 block

                        text-[7px]
                        font-bold
                        tracking-[1.4px]
                        text-[#A2B0BA]

                        xl:mb-1
                        xl:text-[8px]
                        xl:tracking-[1.7px]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="
                        m-0
                        max-w-[145px]

                        text-[13px]
                        sm:text-[15px]
                        font-bold
                        leading-[1.3]
                        text-[#102D5F]

                        transition-colors
                        duration-300

                        group-hover:text-[#2E91C8]

                        
                      "
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================================================
            MOBILE / TABLET
            Below 1024px
        ==================================================== */}

        <div
          className="
            relative

            mt-7

            sm:mt-8

            lg:hidden
          "
        >
          {/* =================================================
              RESPONSIVE CENTER CIRCLE
          ================================================== */}

          <div
            className="
              relative
              mb-7

              flex justify-center

              sm:mb-8
            "
          >
            {/* OUTER HALO */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2 top-1/2

                h-[160px] w-[160px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                border
                border-[#D4EAF3]

                min-[360px]:h-[175px]
                min-[360px]:w-[175px]

                sm:h-[190px]
                sm:w-[190px]
              "
            />

            {/* DASHED RING */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2 top-1/2

                h-[146px] w-[146px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                border border-dashed
                border-[#2E91C8]/30

                min-[360px]:h-[160px]
                min-[360px]:w-[160px]

                sm:h-[174px]
                sm:w-[174px]
              "
            />

            {/* TOP NODE */}

            <span
              className="
                absolute
                left-1/2 top-[-8px]

                z-20

                flex h-4 w-4
                -translate-x-1/2
                items-center justify-center

                rounded-full
                bg-white

                shadow-[0_3px_10px_rgba(16,45,95,0.12)]
              "
            >
              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-[#2E91C8]
                "
              />
            </span>

            {/* CENTER */}

            <div
              className="
                relative z-10

                flex
                h-[125px] w-[125px]
                items-center justify-center

                rounded-full

                border-[5px] border-white

                bg-gradient-to-br
                from-[#102D5F]
                via-[#0D3D70]
                to-[#176A9A]

                text-center

                shadow-[0_15px_40px_rgba(16,45,95,0.17)]

                min-[360px]:h-[135px]
                min-[360px]:w-[135px]

                sm:h-[145px]
                sm:w-[145px]
                sm:border-[6px]
              "
            >
              <div>
                <Plus
                  className="
                    mx-auto mb-1.5

                    h-[17px] w-[17px]

                    text-[#74D1F4]

                    min-[360px]:h-[19px]
                    min-[360px]:w-[19px]

                    sm:mb-2
                  "
                />

                <span
                  className="
                    block

                    text-[11px]
                    font-bold
                    leading-[1.2]
                    text-white

                    min-[360px]:text-[12px]

                    sm:text-[13px]
                  "
                >
                  Treatments

                  <span
                    className="
                      block
                      font-medium
                      text-[#74D1F4]
                    "
                  >
                    & Procedures
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE TREATMENTS
          ================================================== */}

          <div
            className="
              grid grid-cols-1
              gap-2.5

              min-[430px]:grid-cols-2

              sm:gap-3

              md:grid-cols-2
              md:gap-4
            "
          >
            {treatments.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group

                    relative
                    flex
                    min-w-0
                    items-center

                    gap-3

                    overflow-hidden

                    rounded-[14px]

                    border
                    border-[#E1EDF2]

                    bg-white/80

                    px-3
                    py-3

                    shadow-[0_5px_18px_rgba(16,45,95,0.035)]

                    backdrop-blur-sm

                    transition-all
                    duration-300

                    min-[360px]:px-3.5

                    sm:min-h-[72px]
                    sm:rounded-[16px]
                    sm:px-4

                    md:min-h-[76px]
                  "
                >
                  {/* NUMBER */}

                  <span
                    className="
                      absolute
                      right-3 top-2

                      text-[8px]
                      font-bold
                      tracking-[1.2px]
                      text-[#A2B0BA]/70
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[38px] w-[38px]
                      shrink-0
                      items-center justify-center

                      rounded-full

                      bg-[#EAF7FC]
                      text-[#2E91C8]

                      min-[360px]:h-[40px]
                      min-[360px]:w-[40px]

                      sm:h-[44px]
                      sm:w-[44px]
                    "
                  >
                    <Icon
                      className="
                        h-[16px] w-[16px]

                        min-[360px]:h-[17px]
                        min-[360px]:w-[17px]

                        sm:h-[18px]
                        sm:w-[18px]
                      "
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      m-0
                      min-w-0
                      pr-4

                      text-[13px]
                      font-bold
                      leading-[1.3]
                      text-[#102D5F]

                      min-[360px]:text-[12px]

                      sm:text-[15px]

                      
                    "
                  >
                    {item.title}
                  </h3>

                  {/* ACCENT */}

                  <span
                    className="
                      absolute
                      bottom-0 left-0

                      h-[2px] w-[28px]

                      rounded-r-full
                      bg-[#2E91C8]/50
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            CTA
        ==================================================== */}

        <div
          className="
            mt-7
            flex justify-center

            sm:mt-8

            lg:mt-4

            xl:mt-5
          "
        >
          
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
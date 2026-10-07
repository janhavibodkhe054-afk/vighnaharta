import React from "react";
import {
  Activity,
  Ambulance,
  ArrowRight,
  HeartPulse,
  Phone,
  Siren,
} from "lucide-react";

const emergencyServices = [
  {
    number: "01",
    title: "24×7 Emergency Care",
    description: "Prompt medical evaluation and emergency support.",
    icon: Siren,
  },
  {
    number: "02",
    title: "ICU Facility",
    description:
      "Critical-care infrastructure for patients requiring continuous monitoring and intensive medical management.",
    icon: Activity,
  },
  {
    number: "03",
    title: "24×7 Ambulance",
    description: "Emergency patient transportation support.",
    icon: Ambulance,
  },
];

const EmergencyServices = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-[220px] top-[80px] h-[480px] w-[480px] rounded-full bg-[#E9F7FC] blur-[120px]" />

      <div className="pointer-events-none absolute -right-[180px] bottom-[-160px] h-[480px] w-[480px] rounded-full bg-[#EEF9FD] blur-[130px]" />

      <div className="pointer-events-none absolute right-[4%] top-[50px] hidden h-[130px] w-[130px] opacity-[0.07] [background-image:radial-gradient(#2E91C8_1.5px,transparent_1.5px)] [background-size:14px_14px] lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Label */}
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F6FC] text-[#2E91C8]">
              <Siren className="h-[17px] w-[17px]" strokeWidth={1.8} />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#2E91C8] sm:text-[12px]">
              24×7 Emergency Support
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#2E91C8]" />
          </div>

          {/* Heading + Description */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-12">
            <h2
              className="
                m-0
                text-[30px]
                font-bold
                leading-[1.08]
                tracking-[-1px]
                text-[#102D5F]

                min-[360px]:text-[32px]
                sm:text-[38px]
                md:text-[42px]

                lg:whitespace-nowrap
                lg:text-[44px]

                xl:text-[48px]
                2xl:text-[50px]
              "
            >
              Medical Emergency?{" "}
              <span className="text-[#2E91C8]">We’re Here 24×7.</span>
            </h2>

            <p className="m-0 max-w-[510px] text-[13px] leading-[1.75] text-[#637987] sm:text-[14px] lg:ml-auto lg:text-[15px]">
              When every minute matters, timely medical attention can make a
              difference. Vighnaharta Hospital provides round-the-clock
              emergency support with essential medical infrastructure for
              prompt patient assessment and care.
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:gap-8">
          {/* ===================================================
              LEFT IMAGE
          ==================================================== */}

          <div
            className="
              group
              relative
              min-h-[310px]
              overflow-hidden
              rounded-[22px]

              min-[430px]:min-h-[360px]
              sm:min-h-[410px]
              md:min-h-[450px]

              lg:min-h-[560px]
              lg:rounded-[28px]
            "
          >
            <img
              src="/emergency.png"
              alt="24x7 Emergency Care at Vighnaharta Hospital"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 lg:group-hover:scale-[1.03]"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/85 via-[#071B3A]/10 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/15 to-transparent" />

            {/* Available Badge */}
            <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/95 px-3.5 py-2 shadow-[0_8px_25px_rgba(16,45,95,0.12)] backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2E91C8] opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2E91C8]" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#102D5F] sm:text-[11px]">
                  Emergency Support Available
                </span>
              </div>
            </div>

            {/* 24×7 Floating Box */}
            <div
              className="
                absolute
                right-4
                top-4

                flex
                h-[72px]
                w-[72px]
                flex-col
                items-center
                justify-center

                rounded-[18px]

                bg-[#2E91C8]

                text-white

                shadow-[0_14px_35px_rgba(46,145,200,0.30)]

                sm:right-5
                sm:top-5
                sm:h-[82px]
                sm:w-[82px]
              "
            >
              <span className="text-[22px] font-extrabold leading-none sm:text-[25px]">
                24×7
              </span>

              <span className="mt-1 text-[8px] font-bold uppercase tracking-[1px] text-white/80">
                Support
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-[13px] border border-white/20 bg-white/10 text-white backdrop-blur-md">
                <HeartPulse
                  className="h-[20px] w-[20px]"
                  strokeWidth={1.8}
                />
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#8EDFFC] sm:text-[10px]">
                Emergency Medical Care
              </span>

              <h3 className="m-0 mt-1.5 max-w-[450px] text-[21px] font-bold leading-[1.25] text-white sm:text-[24px] lg:text-[27px]">
                Prompt support when timely medical attention matters.
              </h3>
            </div>
          </div>

          {/* ===================================================
              RIGHT SIDE
          ==================================================== */}

          <div className="flex flex-col gap-3">
            {emergencyServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="
                    group
                    relative
                    flex
                    flex-1
                    overflow-hidden

                    rounded-[18px]

                    border
                    border-[#DCEAF0]

                    bg-[#F8FCFE]

                    p-4

                    transition-all
                    duration-300

                    sm:rounded-[20px]
                    sm:p-5

                    lg:p-6

                    hover:border-[#B9DFED]
                    hover:bg-[#F2FAFD]
                    hover:shadow-[0_15px_40px_rgba(16,45,95,0.07)]
                  "
                >
                  {/* Number */}
                  <span className="pointer-events-none absolute -right-1 -top-3 text-[72px] font-black leading-none tracking-[-4px] text-[#102D5F]/[0.035] sm:text-[84px]">
                    {service.number}
                  </span>

                  <div className="relative z-10 flex w-full items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-[54px]
                        w-[54px]
                        shrink-0
                        items-center
                        justify-center

                        rounded-[16px]

                        border
                        border-[#D6EAF2]

                        bg-white

                        text-[#2E91C8]

                        shadow-[0_7px_20px_rgba(16,45,95,0.06)]

                        transition-all
                        duration-300

                        sm:h-[60px]
                        sm:w-[60px]

                        group-hover:border-[#2E91C8]
                        group-hover:bg-[#2E91C8]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]"
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="text-[9px] font-bold tracking-[1.3px] text-[#2E91C8] sm:text-[10px]">
                          {service.number}
                        </span>

                        <span className="h-px w-6 bg-[#C4E3EE]" />
                      </div>

                      <h3 className="m-0 text-[19px] font-bold leading-[1.25] tracking-[-0.25px] text-[#102D5F] sm:text-[21px] lg:text-[22px]">
                        {service.title}
                      </h3>

                      <p className="m-0 mt-2 max-w-[560px] text-[12px] leading-[1.7] text-[#687D89] sm:text-[13px] lg:text-[14px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Desktop Arrow */}
                    <span
                      className="
                        hidden
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#DCEAF0]

                        bg-white

                        text-[#2E91C8]

                        transition-all
                        duration-300

                        sm:flex

                        group-hover:border-[#2E91C8]
                        group-hover:bg-[#2E91C8]
                        group-hover:text-white
                      "
                    >
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[2px]"
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>

                  {/* bottom hover line */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#102D5F] via-[#2E91C8] to-[#69CBF2] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}

            {/* =================================================
                EMERGENCY CALL BOX
            ================================================== */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[18px]

                bg-[#102D5F]

                px-4
                py-4

                sm:rounded-[20px]
                sm:px-5
                sm:py-5

                lg:px-6
              "
            >
              {/* Decoration */}
              <div className="pointer-events-none absolute -right-12 -top-16 h-[180px] w-[180px] rounded-full bg-[#2E91C8]/20 blur-[35px]" />

              <div
                className="
                  relative
                  z-10

                  flex
                  flex-col
                  gap-4

                  min-[480px]:flex-row
                  min-[480px]:items-center
                  min-[480px]:justify-between
                "
              >
                {/* Number */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2E91C8] text-white shadow-[0_8px_25px_rgba(46,145,200,0.25)]">
                    <Phone
                      className="h-[19px] w-[19px]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-[1.4px] text-[#8EDFFC] sm:text-[10px]">
                      24×7 Emergency Helpline
                    </span>

                    <a
                      href="tel:+919766999474"
                      className="mt-0.5 block text-[20px] font-bold tracking-[-0.3px] text-white sm:text-[22px]"
                    >
                      +91 9766999474
                    </a>
                  </div>
                </div>

                {/* Button */}
                <a
                  href="tel:+919766999474"
                  className="
                    group/call

                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center
                    gap-2.5

                    rounded-full

                    bg-white

                    px-5
                    py-2.5

                    text-[12px]
                    font-bold
                    text-[#102D5F]

                    transition-all
                    duration-300

                    sm:text-[13px]

                    hover:bg-[#E9F7FC]
                    hover:text-[#2E91C8]
                  "
                >
                  Call Emergency

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover/call:translate-x-1"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}

        <div
          className="
            mt-5
            grid
            grid-cols-1
            overflow-hidden

            rounded-[18px]

            border
            border-[#DDEBF1]

            bg-white

            shadow-[0_10px_30px_rgba(16,45,95,0.04)]

            min-[430px]:grid-cols-3

            sm:mt-6
          "
        >
          <BottomItem
            icon={Siren}
            label="Emergency Care"
            value="24×7 Support"
          />

          <BottomItem
            icon={Activity}
            label="Critical Care"
            value="ICU Facility"
          />

          <BottomItem
            icon={Ambulance}
            label="Patient Transport"
            value="24×7 Ambulance"
            last
          />
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   BOTTOM ITEM
========================================================= */

const BottomItem = ({ icon: Icon, label, value, last }) => {
  return (
    <div
      className={`
        flex
        items-center
        gap-3
        px-4
        py-4
        sm:px-5
        lg:px-6

        ${
          !last
            ? `
              border-b border-[#DDEBF1]
              min-[430px]:border-b-0
              min-[430px]:border-r
            `
            : ""
        }
      `}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#E8F6FC] text-[#2E91C8]">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
      </div>

      <div>
        <span className="block text-[9px] font-semibold uppercase tracking-[1px] text-[#879AA5] sm:text-[10px]">
          {label}
        </span>

        <span className="mt-0.5 block text-[13px] font-bold text-[#102D5F] sm:text-[14px]">
          {value}
        </span>
      </div>
    </div>
  );
};

export default EmergencyServices;
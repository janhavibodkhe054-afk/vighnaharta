import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Clock3,
  Stethoscope,
  Activity,
  MapPin,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/1200x/0c/68/17/0c68171948b54cdc564834e31d632ca5.jpg",
    eyebrow: "Welcome to Vighnaharta Hospital",
    title: "Advanced Healthcare.",
    highlight: "Compassionate Care.",
    description:
      "Comprehensive multispeciality healthcare with experienced doctors, modern facilities and patient-focused medical care in Alephata.",
    primaryText: "Book Appointment",
    primaryLink: "/contact",
    type: "appointment",
  },
  {
    id: 2,
    image: "/hero2.png",
    eyebrow: "24×7 Emergency & Critical Care",
    title: "Every Second Matters.",
    highlight: "We’re Here 24×7.",
    description:
      "Timely emergency support, critical care facilities and a dedicated medical team ready when you need care the most.",
    primaryText: "Call Emergency",
    primaryLink: "tel:+919766999474",
    type: "call",
  },
  {
    id: 3,
    image: "/hero3.png",
    eyebrow: "Orthopedics • Trauma • Spine Care",
    title: "Specialized Care for",
    highlight: "Better Mobility.",
    description:
      "Focused orthopedic, fracture, trauma and spine care supported by appropriate diagnostics and surgical facilities.",
    primaryText: "Explore Facilities",
    primaryLink: "/facilities",
    type: "link",
  },
  {
    id: 4,
    image: "/hero4.png",
    eyebrow: "Multispeciality Medical Care",
    title: "Expertise You Can Trust.",
    highlight: "Care You Can Feel.",
    description:
      "Multiple medical specialities under one roof with a commitment to responsible, respectful and patient-centred healthcare.",
    primaryText: "Meet Our Doctors",
    primaryLink: "/doctor",
    type: "link",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [paused, nextSlide]);

  const renderPrimaryButton = (slide) => {
    const classes = `
      group
      inline-flex
      min-h-[44px]
      w-full
      items-center
      justify-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-[#2E91C8]
      to-[#55B8E9]
      px-5
      text-[12px]
      font-semibold
      text-white
      shadow-[0_10px_30px_rgba(46,145,200,0.28)]
      transition-all
      duration-300

      active:scale-[0.98]

      min-[380px]:min-h-[46px]
      min-[380px]:text-[13px]

      sm:w-auto
      sm:min-h-[50px]
      sm:px-6

      lg:min-h-[52px]
      lg:px-7
      lg:text-[14px]

      xl:min-h-[54px]
      xl:px-8

      lg:hover:-translate-y-[2px]
      lg:hover:shadow-[0_15px_35px_rgba(46,145,200,0.38)]
    `;

    const content = (
      <>
        {slide.type === "call" && (
          <Phone className="h-4 w-4 shrink-0" />
        )}

        <span>{slide.primaryText}</span>

        {slide.type !== "call" && (
          <ArrowRight
            className="
              h-4
              w-4
              shrink-0
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        )}
      </>
    );

    if (slide.type === "call") {
      return (
        <a href={slide.primaryLink} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <Link to={slide.primaryLink} className={classes}>
        {content}
      </Link>
    );
  };

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#071B3A]
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <div
        className="
          relative
          h-[clamp(560px,88svh,620px)]
          min-h-[560px]
          w-full

          sm:h-[clamp(600px,82svh,660px)]
          sm:min-h-[600px]

          md:h-[clamp(620px,78svh,680px)]
          md:min-h-[620px]

          lg:h-[clamp(640px,76svh,700px)]
          lg:min-h-[640px]

          xl:h-[clamp(660px,75svh,720px)]

          2xl:h-[clamp(680px,72svh,750px)]
        "
      >
        {slides.map((slide, index) => {
          const active = currentSlide === index;

          return (
            <div
              key={slide.id}
              aria-hidden={!active}
              className={`
                absolute
                inset-0
                transition-opacity
                duration-[1000ms]
                ease-in-out

                ${
                  active
                    ? "visible z-[1] opacity-100"
                    : "invisible z-0 opacity-0"
                }
              `}
            >
              {/* =============================================
                  BACKGROUND IMAGE
              ============================================== */}

              <img
                src={slide.image}
                alt=""
                loading={index === 0 ? "eager" : "lazy"}
                className={`
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover

                  object-[62%_center]

                  min-[480px]:object-[60%_center]

                  sm:object-[58%_center]

                  md:object-[55%_center]

                  lg:object-center

                  transition-transform
                  duration-[7000ms]
                  ease-out

                  ${active ? "scale-[1.04]" : "scale-100"}
                `}
              />

              {/* =============================================
                  OVERLAYS
              ============================================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[#06172F]/40
                  sm:bg-[#06172F]/32
                  lg:bg-[#06172F]/20
                "
              />

              {/* Main readability gradient */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r
                  from-[#06172F]/95
                  via-[#06172F]/78
                  to-[#06172F]/30

                  sm:from-[#06172F]/90
                  sm:via-[#06172F]/68
                  sm:to-[#06172F]/20

                  md:from-[#06172F]/86
                  md:via-[#06172F]/58
                  md:to-transparent

                  lg:from-[#06172F]/80
                  lg:via-[#06172F]/48
                  lg:to-transparent

                  xl:from-[#06172F]/75
                  xl:via-[#06172F]/42
                "
              />

              {/* Mobile vertical readability */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#06172F]/70
                  via-transparent
                  to-[#06172F]/10

                  md:from-[#06172F]/45
                  lg:from-[#06172F]/30
                "
              />

              {/* Premium glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-[150px]
                  top-[15%]

                  h-[300px]
                  w-[300px]
                  rounded-full

                  bg-[#2E91C8]/10
                  blur-[70px]

                  sm:h-[380px]
                  sm:w-[380px]

                  lg:h-[480px]
                  lg:w-[480px]
                  lg:blur-[100px]
                "
              />

              {/* =============================================
                  CONTENT
              ============================================== */}

              <div
                className="
                  relative
                  z-10
                  mx-auto
                  flex
                  h-full
                  w-full
                  max-w-[1380px]
                  items-center

                  px-4
                  pb-[96px]
                  pt-5

                  min-[380px]:px-5

                  sm:px-6
                  sm:pb-[105px]

                  md:px-8
                  md:pb-[110px]

                  lg:px-[88px]
                  lg:pb-[112px]

                  xl:px-[100px]

                  2xl:px-8
                "
              >
                <div
                  className="
                    w-full
                    max-w-[590px]

                    sm:max-w-[650px]

                    md:max-w-[690px]

                    lg:max-w-[720px]

                    xl:max-w-[780px]
                  "
                >
                  {/* =========================================
                      EYEBROW
                  ========================================== */}

                  <div
                    className={`
                      mb-3
                      flex
                      max-w-full
                      items-center
                      gap-2.5

                      transition-all
                      delay-100
                      duration-700

                      sm:mb-4
                      sm:gap-3

                      lg:mb-5

                      ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }
                    `}
                  >
                    <span
                      className="
                        h-[2px]
                        w-5
                        shrink-0
                        rounded-full
                        bg-[#55B8E9]

                        min-[380px]:w-6
                        sm:w-8
                        lg:w-10
                      "
                    />

                    <span
                      className="
                        min-w-0
                        text-[8px]
                        font-semibold
                        uppercase
                        leading-[1.5]
                        tracking-[1.1px]
                        text-[#8ED7F5]

                        min-[360px]:text-[9px]
                        min-[380px]:tracking-[1.4px]

                        sm:text-[10px]
                        sm:tracking-[2px]

                        lg:text-[11px]
                        lg:tracking-[2.4px]
                      "
                    >
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* =========================================
                      HEADING
                  ========================================== */}

                  <h1
                    className={`
                      m-0
                      max-w-[780px]

                      text-[clamp(30px,9.5vw,38px)]
                      font-bold
                      leading-[1.08]
                      tracking-[-1px]
                      text-white

                      transition-all
                      delay-200
                      duration-700

                      sm:text-[46px]
                      sm:leading-[1.07]
                      sm:tracking-[-1.6px]

                      md:text-[50px]

                      lg:text-[54px]
                      lg:tracking-[-2px]

                      xl:text-[58px]

                      2xl:text-[60px]

                      ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }
                    `}
                  >
                    <span className="block">
                      {slide.title}
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        bg-gradient-to-r
                        from-[#67C8F1]
                        to-[#B7EAFF]
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* =========================================
                      DESCRIPTION
                  ========================================== */}

                  <p
                    className={`
                      mt-4
                      max-w-[560px]

                      text-[12px]
                      font-normal
                      leading-[1.7]
                      text-white/75

                      transition-all
                      delay-300
                      duration-700

                      min-[380px]:text-[13px]

                      sm:mt-5
                      sm:max-w-[600px]
                      sm:text-[14px]
                      sm:leading-[1.8]

                      md:text-[15px]

                      lg:mt-6
                      lg:max-w-[650px]
                      lg:text-[16px]

                      ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }
                    `}
                  >
                    {slide.description}
                  </p>

                  {/* =========================================
                      BUTTONS
                  ========================================== */}

                  <div
                    className={`
                      mt-5
                      flex
                      w-full
                      max-w-[430px]
                      flex-col
                      gap-2.5

                      transition-all
                      delay-[400ms]
                      duration-700

                      min-[380px]:mt-6

                      sm:mt-7
                      sm:max-w-none
                      sm:flex-row
                      sm:items-center
                      sm:gap-3

                      lg:mt-8

                      ${
                        active
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }
                    `}
                  >
                    {renderPrimaryButton(slide)}

                    <a
                      href="tel:+919766999474"
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
                        border-white/25
                        bg-white/[0.08]

                        px-5

                        text-[12px]
                        font-semibold
                        text-white

                        backdrop-blur-md

                        transition-all
                        duration-300

                        active:scale-[0.98]

                        min-[380px]:min-h-[46px]
                        min-[380px]:text-[13px]

                        sm:w-auto
                        sm:min-h-[50px]
                        sm:px-6

                        lg:min-h-[52px]
                        lg:px-7
                        lg:text-[14px]

                        xl:min-h-[54px]

                        lg:hover:border-white/50
                        lg:hover:bg-white
                        lg:hover:text-[#102D5F]
                      "
                    >
                      <Phone className="h-4 w-4 shrink-0" />

                      <span>+91 9766999474</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* =====================================================
            DESKTOP NAVIGATION ARROWS
        ====================================================== */}

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-5
            top-1/2
            z-20

            hidden
            h-[44px]
            w-[44px]
            -translate-y-1/2
            items-center
            justify-center

            rounded-full
            border
            border-white/15
            bg-[#071B3A]/25
            text-white
            backdrop-blur-md

            transition-all
            duration-300

            hover:border-white/40
            hover:bg-white
            hover:text-[#102D5F]

            lg:flex

            xl:left-7
            xl:h-[48px]
            xl:w-[48px]

            2xl:left-8
          "
        >
          <ChevronLeft size={21} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-5
            top-1/2
            z-20

            hidden
            h-[44px]
            w-[44px]
            -translate-y-1/2
            items-center
            justify-center

            rounded-full
            border
            border-white/15
            bg-[#071B3A]/25
            text-white
            backdrop-blur-md

            transition-all
            duration-300

            hover:border-white/40
            hover:bg-white
            hover:text-[#102D5F]

            lg:flex

            xl:right-7
            xl:h-[48px]
            xl:w-[48px]

            2xl:right-8
          "
        >
          <ChevronRight size={21} />
        </button>

        {/* =====================================================
            SLIDER INDICATORS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-[73px]
            left-1/2
            z-30

            flex
            -translate-x-1/2
            items-center
            gap-1.5

            sm:bottom-[82px]
            sm:gap-2

            md:bottom-[88px]

            lg:bottom-[93px]
            lg:left-auto
            lg:right-[88px]
            lg:translate-x-0

            xl:right-[100px]

            2xl:right-[max(32px,calc((100vw-1380px)/2+32px))]
          "
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-[4px]
                rounded-full
                transition-all
                duration-500

                ${
                  currentSlide === index
                    ? "w-7 bg-[#55B8E9] sm:w-9"
                    : "w-3 bg-white/35 hover:bg-white/60 sm:w-4"
                }
              `}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM INFO BAR
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            z-20
            w-full

            border-t
            border-white/10
            bg-[#071B3A]/80
            backdrop-blur-xl

            sm:bg-[#071B3A]/72
            lg:bg-[#071B3A]/65
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1380px]
              grid-cols-2
              divide-x
              divide-white/10

              px-1

              min-[380px]:px-3

              sm:px-6

              md:grid-cols-4

              lg:px-8
            "
          >
            <BottomItem
              icon={Clock3}
              title="24×7"
              text="Emergency Care"
            />

            <BottomItem
              icon={Stethoscope}
              title="Multispeciality"
              text="Medical Care"
            />

            <BottomItem
              icon={Activity}
              title="Advanced"
              text="Medical Facilities"
              hideMobile
            />

            <BottomItem
              icon={MapPin}
              title="Alephata"
              text="Junnar, Pune"
              hideMobile
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   BOTTOM ITEM
========================================================= */

const BottomItem = ({
  icon: Icon,
  title,
  text,
  hideMobile = false,
}) => {
  return (
    <div
      className={`
        min-w-0
        items-center

        gap-1.5
        px-2
        py-2.5

        min-[360px]:gap-2
        min-[360px]:px-3

        sm:gap-3
        sm:px-4
        sm:py-4

        md:px-3

        lg:px-5
        lg:py-5

        xl:px-6

        ${hideMobile ? "hidden md:flex" : "flex"}
      `}
    >
      {/* ICON */}
      <div
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center

          rounded-lg
          bg-[#55B8E9]/10
          text-[#6CC9F0]

          min-[360px]:h-8
          min-[360px]:w-8

          sm:h-9
          sm:w-9
          sm:rounded-xl

          lg:h-10
          lg:w-10
        "
      >
        <Icon
          className="
            h-[13px]
            w-[13px]

            min-[360px]:h-[14px]
            min-[360px]:w-[14px]

            sm:h-4
            sm:w-4

            lg:h-[17px]
            lg:w-[17px]
          "
        />
      </div>

      {/* TEXT */}
      <div className="min-w-0">
        <p
          className="
            m-0
            truncate

            text-[9px]
            font-semibold
            leading-tight
            text-white

            min-[360px]:text-[10px]

            sm:text-[11px]

            lg:text-[12px]
          "
        >
          {title}
        </p>

        <p
          className="
            m-0
            mt-[2px]
            truncate

            text-[7px]
            leading-tight
            text-white/50

            min-[360px]:text-[8px]

            sm:text-[9px]

            lg:text-[10px]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
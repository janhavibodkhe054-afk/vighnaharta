import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  Image,
  Sparkles,
  X,
} from "lucide-react";

/* =========================================================
   GALLERY DATA
========================================================= */

const gallery = [
  {
    id: 1,
    title: "Reception",
    category: "Welcome Area",
    image: "/images/gallery/reception.jpg",
    side: "left",
    width: "lg:w-[78%]",
    offset: "",
  },
  {
    id: 2,
    title: "ICU",
    category: "Critical Care",
    image: "/images/gallery/icu.jpg",
    side: "right",
    width: "lg:w-[68%]",
    offset: "lg:ml-auto",
  },
  {
    id: 3,
    title: "Operation Theatre",
    category: "Surgical Care",
    image: "/images/gallery/operation-theatre.jpg",
    side: "left",
    width: "lg:w-[66%]",
    offset: "lg:ml-[10%]",
  },
  {
    id: 4,
    title: "Patient Care Area",
    category: "Patient Care",
    image: "/images/gallery/patient-rooms.jpg",
    side: "right",
    width: "lg:w-[78%]",
    offset: "lg:ml-auto",
  },
  {
    id: 5,
    title: "Diagnostic Area",
    category: "Diagnostics",
    image: "/images/gallery/diagnostic-area.jpg",
    side: "left",
    width: "lg:w-[72%]",
    offset: "",
  },
  {
    id: 6,
    title: "Pharmacy",
    category: "Patient Support",
    image: "/images/gallery/pharmacy.jpg",
    side: "right",
    width: "lg:w-[64%]",
    offset: "lg:ml-auto lg:mr-[9%]",
  },
  {
    id: 7,
    title: "Ambulance",
    category: "Emergency Support",
    image: "/images/gallery/ambulance.jpg",
    side: "left",
    width: "lg:w-[65%]",
    offset: "lg:ml-[8%]",
  },
  {
    id: 8,
    title: "Hospital Exterior",
    category: "Vighnaharta Hospital",
    image: "/images/gallery/exterior.jpg",
    side: "right",
    width: "lg:w-[80%]",
    offset: "lg:ml-auto",
  },
];

/* =========================================================
   GALLERY SECTION
========================================================= */

const GallerySection = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();
  }, []);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  /* =======================================================
     KEYBOARD NAVIGATION
  ======================================================= */

  useEffect(() => {
    const handleKey = (event) => {
      if (!selected) return;

      if (event.key === "Escape") {
        setSelected(null);
      }

      if (event.key === "ArrowLeft") {
        const currentIndex = gallery.findIndex(
          (item) => item.id === selected.id
        );

        setSelected(
          gallery[
            currentIndex <= 0
              ? gallery.length - 1
              : currentIndex - 1
          ]
        );
      }

      if (event.key === "ArrowRight") {
        const currentIndex = gallery.findIndex(
          (item) => item.id === selected.id
        );

        setSelected(
          gallery[
            currentIndex >= gallery.length - 1
              ? 0
              : currentIndex + 1
          ]
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  const currentIndex = selected
    ? gallery.findIndex((item) => item.id === selected.id)
    : -1;

  const previous = () => {
    setSelected(
      gallery[
        currentIndex <= 0
          ? gallery.length - 1
          : currentIndex - 1
      ]
    );
  };

  const next = () => {
    setSelected(
      gallery[
        currentIndex >= gallery.length - 1
          ? 0
          : currentIndex + 1
      ]
    );
  };

  return (
    <>
      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}

      <section
        id="hospital-gallery"
        className="relative isolate overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
      >
        {/* ===================================================
            BACKGROUND
        ==================================================== */}

        <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F7FBFD_42%,#ffffff_100%)]" />

        <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025] [background-image:radial-gradient(#102D5F_1px,transparent_1px)] [background-size:27px_27px]" />

        <div className="gallery-blob-one pointer-events-none absolute -left-[220px] top-[15%] -z-10 h-[480px] w-[480px] rounded-full bg-[#DFF4FB] blur-[125px]" />

        <div className="gallery-blob-two pointer-events-none absolute -right-[220px] top-[58%] -z-10 h-[500px] w-[500px] rounded-full bg-[#E4F5FB] blur-[130px]" />

        {/* DARK DECORATIVE STRIPS */}

        <div className="pointer-events-none absolute left-0 top-[34%] -z-10 hidden h-[430px] w-[110px] rounded-r-[70px] bg-[#071B3A] opacity-[0.035] lg:block" />

        <div className="pointer-events-none absolute right-0 top-[67%] -z-10 hidden h-[390px] w-[90px] rounded-l-[60px] bg-[#102D5F] opacity-[0.035] lg:block" />

        <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="mx-auto max-w-[780px] text-center"
            data-aos="fade-up"
          >
            <div className="mb-3 flex items-center justify-center gap-2.5">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2E91C8]" />

              <span className="gallery-header-icon relative flex h-9 w-9 items-center justify-center rounded-full border border-[#D9EBF2] bg-white text-[#2E91C8] shadow-[0_7px_20px_rgba(16,45,95,0.06)]">
                <Camera
                  className="h-4 w-4"
                  strokeWidth={1.7}
                />

                <span className="gallery-header-ring absolute inset-[-1px] rounded-full border border-[#2E91C8]/20" />
              </span>

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px] sm:tracking-[2px]">
                Explore Our Spaces
              </span>

              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2E91C8]" />
            </div>

            <h2 className="m-0 text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
              A Visual Walk Through{" "}

              <span className="relative inline-block text-[#2E91C8]">
                Our Hospital

                <span className="gallery-heading-line absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#2E91C8] via-[#69CBF2] to-transparent" />
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[600px] text-[13px] leading-[1.7] text-[#718391] sm:text-[15px]">
              Explore the spaces and facilities that support patient care at
              Vighnaharta Hospital.
            </p>
          </div>

          {/* =================================================
              DESKTOP JOURNEY
          ================================================== */}

          <div className="relative mt-10 hidden lg:block xl:mt-12">
            {/* CENTER LINE */}

            <div className="absolute bottom-[100px] left-1/2 top-[40px] w-px -translate-x-1/2 overflow-hidden bg-gradient-to-b from-transparent via-[#CBE5EF] to-transparent">
              <span className="gallery-flow absolute left-[-1px] top-0 h-[150px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />

              <span className="gallery-flow-two absolute left-[-1px] top-0 h-[80px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#69CBF2] to-transparent" />
            </div>

            <div className="space-y-[-10px]">
              {gallery.map((item, index) => {
                const left = item.side === "left";

                return (
                  <div
                    key={item.id}
                    className="relative grid min-h-[360px] grid-cols-2 items-center xl:min-h-[380px]"
                  >
                    {/* CENTER NODE */}

                    <div
                      className="gallery-node absolute left-1/2 top-1/2 z-30 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-white bg-[#102D5F] shadow-[0_10px_30px_rgba(16,45,95,0.14)]"
                      data-aos="zoom-in"
                      data-aos-delay="180"
                    >
                      <span className="relative z-10 text-[13px] font-bold leading-none text-white sm:text-[15px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="gallery-node-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/25" />

                      <span className="gallery-node-dot absolute -right-[3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#69CBF2]" />
                    </div>

                    {/* LEFT */}

                    <div className="relative pr-[70px]">
                      {left && (
                        <GalleryPhoto
                          item={item}
                          index={index}
                          onClick={() => setSelected(item)}
                        />
                      )}

                      {!left && (
                        <StoryLabel
                          item={item}
                          index={index}
                          align="right"
                        />
                      )}
                    </div>

                    {/* RIGHT */}

                    <div className="relative pl-[70px]">
                      {!left && (
                        <GalleryPhoto
                          item={item}
                          index={index}
                          onClick={() => setSelected(item)}
                        />
                      )}

                      {left && (
                        <StoryLabel
                          item={item}
                          index={index}
                          align="left"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              MOBILE + TABLET
          ================================================== */}

          <div className="relative mt-8 lg:hidden">
            {/* VERTICAL LINE */}

            <div className="absolute bottom-[40px] left-[20px] top-[20px] w-px overflow-hidden bg-[#D7E9F0] min-[360px]:left-[22px] sm:left-[25px]">
              <span className="gallery-mobile-flow absolute left-[-1px] top-0 h-[100px] w-[3px] bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />
            </div>

            <div className="space-y-5 sm:space-y-6">
              {gallery.map((item, index) => (
                <div
                  key={item.id}
                  className="relative pl-[52px] min-[360px]:pl-[58px] sm:pl-[66px]"
                  data-aos={
                    index % 2 === 0
                      ? "fade-up-right"
                      : "fade-up-left"
                  }
                  data-aos-delay={(index % 3) * 70}
                >
                  {/* MOBILE NODE */}

                  <div className="absolute left-0 top-[22px] z-20 flex h-[41px] w-[41px] items-center justify-center rounded-full border-[5px] border-white bg-[#102D5F] shadow-[0_7px_22px_rgba(16,45,95,0.13)] min-[360px]:h-[45px] min-[360px]:w-[45px] sm:h-[51px] sm:w-[51px]">
                    <span className="relative z-10 text-[13px] font-bold leading-none text-white sm:text-[15px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="gallery-node-ring absolute inset-[-4px] rounded-full border border-[#2E91C8]/20" />
                  </div>

                  {/* MOBILE PHOTO */}

                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    className="gallery-mobile-card group relative block w-full overflow-hidden rounded-[18px] bg-[#E5EFF3] text-left shadow-[0_12px_35px_rgba(16,45,95,0.07)] sm:rounded-[22px]"
                  >
                    <div
                      className={`relative overflow-hidden ${
                        index % 3 === 0
                          ? "aspect-[16/10]"
                          : index % 3 === 1
                          ? "aspect-[4/3]"
                          : "aspect-[16/11]"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} - Vighnaharta Hospital`}
                        loading="lazy"
                        className="block h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/85 via-[#06182F]/10 to-transparent" />

                      {/* LIGHT SWEEP */}

                      <div className="mobile-shine pointer-events-none absolute inset-y-[-30%] -left-[70%] w-[28%] rotate-[15deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                      {/* FRAME INDEX */}

                      <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-[#06182F]/30 px-2.5 py-1 text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-white/70 backdrop-blur-md sm:text-[15px]">
                        Frame {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* EXPAND */}

                      <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                        <Expand
                          className="h-4 w-4"
                          strokeWidth={1.7}
                        />
                      </div>

                      {/* CONTENT */}

                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <div className="mb-1.5 h-[2px] w-6 rounded-full bg-[#69CBF2] transition-all duration-500 group-hover:w-12" />

                        <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.2px] text-[#69CBF2] sm:text-[15px]">
                          {item.category}
                        </span>

                        <h3 className="m-0 mt-1 text-[13px] font-bold leading-[1.5] text-white sm:text-[15px]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              END JOURNEY
          ================================================== */}

          <div
            className="mt-9 flex flex-col items-center text-center sm:mt-11 lg:mt-3"
            data-aos="zoom-in"
          >
            <div className="gallery-end relative flex h-12 w-12 items-center justify-center rounded-full border border-[#D8EAF1] bg-white text-[#2E91C8] shadow-[0_10px_30px_rgba(16,45,95,0.07)]">
              <Sparkles
                className="h-5 w-5"
                strokeWidth={1.6}
              />

              <span className="gallery-end-ring absolute inset-[-1px] rounded-full border border-[#2E91C8]/20" />

              <span className="gallery-end-ring gallery-end-ring-two absolute inset-[-1px] rounded-full border border-[#69CBF2]/15" />
            </div>

            <span className="mt-3 text-[13px] font-bold uppercase leading-[1.7] tracking-[1.4px] text-[#8A9BA6] sm:text-[15px]">
              Vighnaharta Hospital • Alephata
            </span>
          </div>
        </div>

        {/* ===================================================
            MAIN CSS
        ==================================================== */}

        <style>{`
          .gallery-blob-one {
            animation:
              galleryBlobOne
              10s
              ease-in-out
              infinite
              alternate;
          }

          .gallery-blob-two {
            animation:
              galleryBlobTwo
              12s
              ease-in-out
              infinite
              alternate;
          }

          @keyframes galleryBlobOne {
            to {
              transform:
                translate3d(60px, 30px, 0)
                scale(1.08);
            }
          }

          @keyframes galleryBlobTwo {
            to {
              transform:
                translate3d(-50px, -35px, 0)
                scale(1.1);
            }
          }

          /* HEADER */

          .gallery-header-icon {
            animation:
              headerIconFloat
              3.5s
              ease-in-out
              infinite;
          }

          .gallery-header-ring {
            animation:
              headerRing
              2.5s
              ease-out
              infinite;
          }

          .gallery-heading-line {
            width: 0;

            animation:
              headingLine
              1.2s
              0.5s
              cubic-bezier(.22, 1, .36, 1)
              forwards;
          }

          @keyframes headerIconFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-4px);
            }
          }

          @keyframes headerRing {
            0% {
              transform: scale(.8);
              opacity: .7;
            }

            100% {
              transform: scale(1.6);
              opacity: 0;
            }
          }

          @keyframes headingLine {
            to {
              width: 100%;
            }
          }

          /* CUSTOM PHOTO AOS */

          [data-aos="gallery-left"] {
            opacity: 0;
            transform:
              translate3d(-70px, 35px, 0)
              rotate(-2deg)
              scale(.94);

            transition-property:
              transform,
              opacity;
          }

          [data-aos="gallery-left"].aos-animate {
            opacity: 1;

            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);
          }

          [data-aos="gallery-right"] {
            opacity: 0;

            transform:
              translate3d(70px, 35px, 0)
              rotate(2deg)
              scale(.94);

            transition-property:
              transform,
              opacity;
          }

          [data-aos="gallery-right"].aos-animate {
            opacity: 1;

            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);
          }

          /* PHOTO CURTAIN */

          .gallery-reveal .gallery-curtain {
            transform: translateX(0);
          }

          .gallery-reveal.aos-animate .gallery-curtain {
            animation:
              galleryCurtain
              1.05s
              .2s
              cubic-bezier(.77, 0, .18, 1)
              forwards;
          }

          .gallery-reveal .gallery-curtain-light {
            transform: translateX(0);
          }

          .gallery-reveal.aos-animate .gallery-curtain-light {
            animation:
              galleryCurtainLight
              1.05s
              .2s
              cubic-bezier(.77, 0, .18, 1)
              forwards;
          }

          @keyframes galleryCurtain {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(105%);
            }
          }

          @keyframes galleryCurtainLight {
            from {
              left: 0;
            }

            to {
              left: 105%;
            }
          }

          /* IMAGE REVEAL */

          .photo-image {
            transform: scale(1.14);

            transition:
              transform
              1s
              cubic-bezier(.22, 1, .36, 1);
          }

          .gallery-reveal.aos-animate .photo-image {
            animation:
              imageReveal
              1.5s
              .2s
              cubic-bezier(.22, 1, .36, 1)
              forwards;
          }

          @keyframes imageReveal {
            from {
              transform: scale(1.14);
            }

            to {
              transform: scale(1);
            }
          }

          .story-photo:hover .photo-image {
            transform: scale(1.07);
          }

          /* PHOTO FLOAT */

          .story-photo.aos-animate {
            animation:
              photoFloat
              7s
              1.6s
              ease-in-out
              infinite;
          }

          @keyframes photoFloat {
            0%,
            100% {
              translate: 0 0;
            }

            50% {
              translate: 0 -5px;
            }
          }

          /* PHOTO LIGHT SWEEP */

          .photo-shine {
            transition:
              left
              .9s
              cubic-bezier(.22, 1, .36, 1);
          }

          .story-photo:hover .photo-shine {
            left: 140%;
          }

          /* PHOTO SCANNER */

          .story-photo:hover .photo-scanner {
            opacity: .8;

            animation:
              photoScanner
              1.7s
              linear
              infinite;
          }

          @keyframes photoScanner {
            0% {
              top: 5%;
            }

            100% {
              top: 95%;
            }
          }

          /* CAMERA FOCUS */

          .focus-corner {
            opacity: .65;

            transition:
              transform .45s cubic-bezier(.22, 1, .36, 1),
              opacity .3s ease;
          }

          .story-photo:hover .focus-corner {
            opacity: 1;
          }

          .story-photo:hover .focus-tl {
            transform: translate(-5px, -5px);
          }

          .story-photo:hover .focus-tr {
            transform: translate(5px, -5px);
          }

          .story-photo:hover .focus-bl {
            transform: translate(-5px, 5px);
          }

          .story-photo:hover .focus-br {
            transform: translate(5px, 5px);
          }

          /* CENTER FLOW */

          .gallery-flow {
            animation:
              galleryFlow
              4.2s
              linear
              infinite;
          }

          .gallery-flow-two {
            animation:
              galleryFlow
              4.2s
              2.1s
              linear
              infinite;
          }

          @keyframes galleryFlow {
            0% {
              top: -8%;
              opacity: 0;
            }

            12% {
              opacity: 1;
            }

            85% {
              opacity: 1;
            }

            100% {
              top: 100%;
              opacity: 0;
            }
          }

          /* CENTER NODE */

          .gallery-node.aos-animate {
            animation:
              nodeEntrance
              .7s
              cubic-bezier(.34, 1.56, .64, 1);
          }

          .gallery-node-ring {
            animation:
              galleryNodeRing
              2.6s
              ease-out
              infinite;
          }

          .gallery-node-dot {
            animation:
              nodeDot
              1.8s
              ease-in-out
              infinite;
          }

          @keyframes nodeEntrance {
            0% {
              opacity: 0;

              transform:
                translate(-50%, -50%)
                scale(.4);
            }

            70% {
              transform:
                translate(-50%, -50%)
                scale(1.13);
            }

            100% {
              opacity: 1;

              transform:
                translate(-50%, -50%)
                scale(1);
            }
          }

          @keyframes galleryNodeRing {
            0% {
              transform: scale(.8);
              opacity: .65;
            }

            100% {
              transform: scale(1.65);
              opacity: 0;
            }
          }

          @keyframes nodeDot {
            0%,
            100% {
              box-shadow:
                0 0 0 0
                rgba(105, 203, 242, .25);
            }

            50% {
              box-shadow:
                0 0 0 7px
                rgba(105, 203, 242, 0);
            }
          }

          /* STORY LABEL AOS */

          [data-aos="gallery-label-left"] {
            opacity: 0;
            transform: translateX(-35px);

            transition-property:
              transform,
              opacity;
          }

          [data-aos="gallery-label-left"].aos-animate {
            opacity: 1;
            transform: translateX(0);
          }

          [data-aos="gallery-label-right"] {
            opacity: 0;
            transform: translateX(35px);

            transition-property:
              transform,
              opacity;
          }

          [data-aos="gallery-label-right"].aos-animate {
            opacity: 1;
            transform: translateX(0);
          }

          /* LABEL DETAILS */

          .story-line {
            width: 0 !important;

            transition:
              width
              .8s
              .35s
              cubic-bezier(.22, 1, .36, 1);
          }

          .story-label.aos-animate .story-line {
            width: 36px !important;
          }

          .story-category {
            transition:
              letter-spacing .35s ease,
              color .35s ease;
          }

          .story-label:hover .story-category {
            letter-spacing: 1.7px;
            color: #2E91C8;
          }

          .story-title {
            transition:
              transform .35s ease,
              color .35s ease;
          }

          .story-label:hover .story-title {
            transform: translateX(4px);
            color: #2E91C8;
          }

          .story-image-icon {
            transition:
              transform
              .5s
              cubic-bezier(.34, 1.56, .64, 1);
          }

          .story-label:hover .story-image-icon {
            transform:
              rotate(-12deg)
              scale(1.25);
          }

          /* EXPAND BUTTON */

          .expand-button {
            transition:
              transform .4s cubic-bezier(.34, 1.56, .64, 1),
              opacity .3s ease,
              background-color .3s ease;
          }

          .story-photo:hover .expand-button {
            transform:
              scale(1)
              rotate(7deg);
          }

          /* VIEW TEXT */

          .view-text {
            transform: translateY(7px);
            opacity: .72;

            transition:
              all
              .4s
              ease;
          }

          .story-photo:hover .view-text {
            transform: translateY(0);
            opacity: 1;
            letter-spacing: 2px;
          }

          /* MOBILE */

          .gallery-mobile-flow {
            animation:
              galleryMobileFlow
              3.5s
              linear
              infinite;
          }

          .gallery-mobile-card {
            transition:
              transform .45s cubic-bezier(.22, 1, .36, 1),
              box-shadow .45s ease;
          }

          .gallery-mobile-card:hover {
            transform: translateY(-3px);

            box-shadow:
              0 18px 45px
              rgba(16, 45, 95, .11);
          }

          .gallery-mobile-card:hover .mobile-shine {
            left: 140%;
          }

          .mobile-shine {
            transition:
              left
              .9s
              cubic-bezier(.22, 1, .36, 1);
          }

          @keyframes galleryMobileFlow {
            0% {
              top: -10%;
              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            85% {
              opacity: 1;
            }

            100% {
              top: 100%;
              opacity: 0;
            }
          }

          /* END JOURNEY */

          .gallery-end {
            animation:
              galleryEnd
              3.5s
              ease-in-out
              infinite;
          }

          .gallery-end-ring {
            animation:
              galleryEndRing
              2.5s
              ease-out
              infinite;
          }

          .gallery-end-ring-two {
            animation-delay: 1.2s;
          }

          @keyframes galleryEnd {
            0%,
            100% {
              transform:
                translateY(0)
                rotate(0deg);
            }

            50% {
              transform:
                translateY(-5px)
                rotate(8deg);
            }
          }

          @keyframes galleryEndRing {
            0% {
              transform: scale(.8);
              opacity: .7;
            }

            100% {
              transform: scale(1.7);
              opacity: 0;
            }
          }

          @media (max-width: 767px) {
            .gallery-blob-one,
            .gallery-blob-two {
              animation: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery-blob-one,
            .gallery-blob-two,
            .gallery-header-icon,
            .gallery-header-ring,
            .gallery-heading-line,
            .gallery-flow,
            .gallery-flow-two,
            .gallery-mobile-flow,
            .gallery-node,
            .gallery-node-ring,
            .gallery-node-dot,
            .gallery-end,
            .gallery-end-ring,
            .story-photo,
            .photo-image,
            .gallery-curtain,
            .gallery-curtain-light,
            .photo-scanner {
              animation: none !important;
            }

            .gallery-heading-line {
              width: 100%;
            }

            .gallery-curtain,
            .gallery-curtain-light {
              display: none;
            }

            .photo-image {
              transform: none !important;
            }
          }
        `}</style>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {selected && (
        <div
          className="lightbox-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-[#031023]/95 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setSelected(null)}
        >
          {/* CLOSE */}

          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white/20 sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <X className="h-5 w-5" />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            className="lightbox-arrow absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#2E91C8] sm:left-5 sm:h-12 sm:w-12 lg:left-7"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* NEXT */}

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="lightbox-arrow absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#2E91C8] sm:right-5 sm:h-12 sm:w-12 lg:right-7"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* IMAGE */}

          <div
            className="lightbox-enter relative max-h-[90vh] max-w-[1150px] overflow-hidden rounded-[18px] bg-[#071B3A] shadow-[0_30px_100px_rgba(0,0,0,.45)] sm:rounded-[25px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="lightbox-image block max-h-[82vh] w-auto max-w-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#06182F]/95 via-[#06182F]/60 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7">
              <div className="mb-2 h-[2px] w-8 rounded-full bg-[#69CBF2]" />

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-[#69CBF2] sm:text-[15px]">
                {selected.category}
              </span>

              <div className="mt-1 flex items-end justify-between gap-4">
                <h3 className="m-0 text-[13px] font-bold leading-[1.5] text-white sm:text-[15px]">
                  {selected.title}
                </h3>

                <span className="shrink-0 text-[13px] font-bold leading-[1.7] tracking-[1px] text-white/40 sm:text-[15px]">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(gallery.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              LIGHTBOX CSS
          ================================================== */}

          <style>{`
            .lightbox-overlay {
              animation:
                lightboxOverlay
                .3s
                ease
                forwards;
            }

            .lightbox-enter {
              animation:
                lightboxEnter
                .5s
                cubic-bezier(.22, 1, .36, 1);
            }

            .lightbox-image {
              animation:
                lightboxImage
                .8s
                cubic-bezier(.22, 1, .36, 1);
            }

            .lightbox-arrow:hover {
              transform:
                translateY(-50%)
                scale(1.08);
            }

            @keyframes lightboxOverlay {
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            }

            @keyframes lightboxEnter {
              from {
                opacity: 0;

                transform:
                  scale(.9)
                  translateY(25px);
              }

              to {
                opacity: 1;

                transform:
                  scale(1)
                  translateY(0);
              }
            }

            @keyframes lightboxImage {
              from {
                transform: scale(1.08);
              }

              to {
                transform: scale(1);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .lightbox-overlay,
              .lightbox-enter,
              .lightbox-image {
                animation: none !important;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

/* =========================================================
   DESKTOP GALLERY PHOTO
========================================================= */

const GalleryPhoto = ({
  item,
  index,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`story-photo gallery-reveal group relative block overflow-hidden rounded-[26px] bg-[#E6EFF3] text-left shadow-[0_20px_55px_rgba(16,45,95,0.09)] ${item.width} ${item.offset}`}
    data-aos={
      item.side === "left"
        ? "gallery-left"
        : "gallery-right"
    }
    data-aos-delay={(index % 3) * 90}
  >
    {/* NAVY CURTAIN */}

    <span className="gallery-curtain pointer-events-none absolute inset-0 z-30 bg-[#102D5F]" />

    {/* CURTAIN EDGE */}

    <span className="gallery-curtain-light pointer-events-none absolute inset-y-0 left-0 z-40 w-[5px] bg-[#69CBF2] shadow-[0_0_20px_rgba(105,203,242,.5)]" />

    <div
      className={`relative overflow-hidden ${
        index % 3 === 0
          ? "aspect-[16/10]"
          : index % 3 === 1
          ? "aspect-[4/3]"
          : "aspect-[16/11]"
      }`}
    >
      {/* IMAGE */}

      <img
        src={item.image}
        alt={`${item.title} - Vighnaharta Hospital`}
        loading="lazy"
        className="photo-image block h-full w-full object-cover"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/68 via-[#06182F]/5 to-transparent" />

      {/* LIGHT SWEEP */}

      <div className="photo-shine pointer-events-none absolute inset-y-[-30%] -left-[60%] w-[25%] rotate-[15deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* SCANNER */}

      <span className="photo-scanner pointer-events-none absolute left-[8%] right-[8%] top-[5%] z-10 h-px bg-gradient-to-r from-transparent via-[#69CBF2] to-transparent opacity-0 shadow-[0_0_12px_rgba(105,203,242,.8)]" />

      {/* CAMERA FOCUS */}

      <span className="focus-corner focus-tl absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-white/60" />

      <span className="focus-corner focus-tr absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-white/60" />

      <span className="focus-corner focus-bl absolute bottom-4 left-4 h-7 w-7 border-b-2 border-l-2 border-white/60" />

      <span className="focus-corner focus-br absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-white/60" />

      {/* NUMBER */}

      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#06182F]/25 px-2.5 py-1 text-[13px] font-bold leading-[1.7] tracking-[1px] text-white/70 backdrop-blur-md sm:text-[15px]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* EXPAND */}

      <div className="expand-button absolute right-4 top-4 flex h-10 w-10 scale-75 items-center justify-center rounded-full border border-white/15 bg-[#06182F]/25 text-white opacity-0 backdrop-blur-md group-hover:opacity-100">
        <Expand
          className="h-4 w-4"
          strokeWidth={1.6}
        />
      </div>

      {/* VIEW */}

      <span className="view-text absolute bottom-4 left-4 text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-white sm:text-[15px]">
        View Image
      </span>
    </div>
  </button>
);

/* =========================================================
   DESKTOP STORY LABEL
========================================================= */

const StoryLabel = ({
  item,
  index,
  align,
}) => (
  <div
    className={`story-label max-w-[330px] ${
      align === "right"
        ? "ml-auto text-right"
        : "mr-auto text-left"
    }`}
    data-aos={
      align === "right"
        ? "gallery-label-left"
        : "gallery-label-right"
    }
    data-aos-delay="180"
  >
    <div
      className={`mb-3 flex items-center gap-3 ${
        align === "right"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      {align === "left" && (
        <span className="story-line h-[2px] rounded-full bg-[#2E91C8]" />
      )}

      <span className="frame-number text-[13px] font-bold uppercase leading-[1.7] tracking-[1.4px] text-[#2E91C8] sm:text-[15px]">
        Frame {String(index + 1).padStart(2, "0")}
      </span>

      {align === "right" && (
        <span className="story-line h-[2px] rounded-full bg-[#2E91C8]" />
      )}
    </div>

    <span className="story-category inline-block text-[13px] font-semibold uppercase leading-[1.7] tracking-[1.2px] text-[#96A6B0] sm:text-[15px]">
      {item.category}
    </span>

    <h3 className="story-title m-0 mt-2 text-[24px] font-bold leading-[1.15] tracking-[-0.5px] text-[#102D5F] xl:text-[28px]">
      {item.title}
    </h3>

    <div
      className={`story-gallery-label mt-4 flex items-center gap-2 text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#7D909C] sm:text-[15px] ${
        align === "right"
          ? "justify-end"
          : ""
      }`}
    >
      <Image
        className="story-image-icon h-4 w-4 shrink-0 text-[#2E91C8]"
        strokeWidth={1.7}
      />

      Hospital Gallery
    </div>
  </div>
);

export default GallerySection;
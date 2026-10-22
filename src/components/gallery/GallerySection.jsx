import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ==========================================
   GALLERY IMAGES - g1.jpg TO g40.jpg
========================================== */

const galleryImages = Array.from(
  { length: 40 },
  (_, index) => `/g${index + 1}.jpg`
);

/* ==========================================
   GALLERY COMPONENT
========================================== */

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [failedImages, setFailedImages] = useState([]);

  /* ==========================================
     AOS INITIALIZATION
  ========================================== */

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
    });

    AOS.refresh();
  }, []);

  /* ==========================================
     FILTER FAILED IMAGES
  ========================================== */

  const visibleImages = galleryImages.filter(
    (src) => !failedImages.includes(src)
  );

  const handleImageError = useCallback((src) => {
    setFailedImages((previous) =>
      previous.includes(src) ? previous : [...previous, src]
    );
  }, []);

  /* ==========================================
     LIGHTBOX NAVIGATION
  ========================================== */

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || visibleImages.length === 0) {
        return null;
      }

      return (current + 1) % visibleImages.length;
    });
  }, [visibleImages.length]);

  const previousImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || visibleImages.length === 0) {
        return null;
      }

      return (
        (current - 1 + visibleImages.length) %
        visibleImages.length
      );
    });
  }, [visibleImages.length]);

  /* ==========================================
     KEYBOARD CONTROLS + SCROLL LOCK
  ========================================== */

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedIndex,
    closeLightbox,
    nextImage,
    previousImage,
  ]);

  /* ==========================================
     HANDLE IMAGE REMOVAL
  ========================================== */

  useEffect(() => {
    if (
      selectedIndex !== null &&
      selectedIndex >= visibleImages.length
    ) {
      setSelectedIndex(
        visibleImages.length > 0
          ? visibleImages.length - 1
          : null
      );
    }
  }, [selectedIndex, visibleImages.length]);

  /* ==========================================
     COMPONENT UI
  ========================================== */

  return (
    <>
      <section
        id="hospital-gallery"
        className="relative overflow-hidden bg-[#F8FBFE] py-10 sm:py-14 lg:py-16"
      >
        {/* BACKGROUND DECORATION */}

        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#DFF4FB]/60 blur-[100px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E4F0FB]/60 blur-[100px]" />

        <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

          {/* PHOTO GRID */}

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">

            {visibleImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open hospital gallery image ${index + 1}`}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 50}
                className="
                  group
                  relative
                  block
                  w-full
                  overflow-hidden
                  rounded-[14px]
                  bg-[#E6EFF3]
                  shadow-[0_8px_25px_rgba(16,45,95,0.07)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(16,45,95,0.15)]
                  sm:rounded-[18px]
                  lg:rounded-[20px]
                "
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">

                  <img
                    src={src}
                    alt={`Vighnaharta Hospital Gallery ${index + 1}`}
                    loading="lazy"
                    onError={() => handleImageError(src)}
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.08]
                    "
                  />

                  {/* SUBTLE HOVER EFFECT */}

                  <div className="pointer-events-none absolute inset-0 bg-[#102D5F]/0 transition-colors duration-500 group-hover:bg-[#102D5F]/10" />

                </div>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* ======================================
          FULLSCREEN LIGHTBOX
      ====================================== */}

      {selectedIndex !== null &&
        visibleImages[selectedIndex] && (
          <div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-[#031023]/95
              p-3
              backdrop-blur-md
              sm:p-6
            "
            role="dialog"
            aria-modal="true"
            aria-label="Hospital gallery photo viewer"
            onClick={closeLightbox}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close photo"
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                transition-all
                duration-300
                hover:bg-white/25
                sm:right-6
                sm:top-6
              "
            >
              <X size={23} />
            </button>

            {/* PREVIOUS BUTTON */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous photo"
              className="
                absolute
                left-2
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/15
                text-white
                transition-colors
                duration-300
                hover:bg-[#2E91C8]
                sm:left-6
                sm:h-12
                sm:w-12
              "
            >
              <ChevronLeft size={26} />
            </button>

            {/* MAIN IMAGE */}

            <div
              className="
                flex
                max-h-[88vh]
                max-w-[1150px]
                items-center
                justify-center
                px-10
                sm:px-14
              "
              onClick={(event) => event.stopPropagation()}
            >
              <img
                key={visibleImages[selectedIndex]}
                src={visibleImages[selectedIndex]}
                alt="Vighnaharta Hospital"
                onError={() =>
                  handleImageError(visibleImages[selectedIndex])
                }
                className="
                  block
                  max-h-[85vh]
                  max-w-full
                  rounded-[12px]
                  object-contain
                  shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                  sm:rounded-[18px]
                "
              />
            </div>

            {/* NEXT BUTTON */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next photo"
              className="
                absolute
                right-2
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/15
                text-white
                transition-colors
                duration-300
                hover:bg-[#2E91C8]
                sm:right-6
                sm:h-12
                sm:w-12
              "
            >
              <ChevronRight size={26} />
            </button>

          </div>
        )}
    </>
  );
};

export default GallerySection;
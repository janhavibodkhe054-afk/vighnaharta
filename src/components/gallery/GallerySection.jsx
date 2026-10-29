import React, {
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [failedImages, setFailedImages] = useState([]);

  /* ==========================================
     FILTER FAILED IMAGES
  ========================================== */

  const visibleImages = galleryImages.filter(
    (src) => !failedImages.includes(src)
  );

  const handleImageError = useCallback((src) => {
    setFailedImages((previous) =>
      previous.includes(src)
        ? previous
        : [...previous, src]
    );
  }, []);

  /* ==========================================
     LIGHTBOX CONTROLS
  ========================================== */

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage((current) => {
      if (current === null || visibleImages.length === 0) {
        return null;
      }

      const currentIndex = visibleImages.indexOf(current);

      return visibleImages[
        (currentIndex + 1) % visibleImages.length
      ];
    });
  }, [visibleImages]);

  const previousImage = useCallback(() => {
    setSelectedImage((current) => {
      if (current === null || visibleImages.length === 0) {
        return null;
      }

      const currentIndex = visibleImages.indexOf(current);

      return visibleImages[
        (currentIndex - 1 + visibleImages.length) %
          visibleImages.length
      ];
    });
  }, [visibleImages]);

  /* ==========================================
     KEYBOARD CONTROLS + SCROLL LOCK
  ========================================== */

  useEffect(() => {
    if (selectedImage === null) return;

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
    selectedImage,
    closeLightbox,
    nextImage,
    previousImage,
  ]);

  /* ==========================================
     HANDLE FAILED IMAGE
  ========================================== */

  useEffect(() => {
    if (
      selectedImage !== null &&
      !visibleImages.includes(selectedImage)
    ) {
      setSelectedImage(null);
    }
  }, [selectedImage, visibleImages]);

  /* ==========================================
     MAIN UI
  ========================================== */

  return (
    <>
      {/* ======================================
          GALLERY SECTION
      ====================================== */}

      <section
        id="hospital-gallery"
        className="relative overflow-hidden bg-[#F8FBFE] py-10 sm:py-14 lg:py-16"
      >
        {/* BACKGROUND DECORATION */}

        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#DFF4FB]/60 blur-[100px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E4F0FB]/60 blur-[100px]" />

        {/* MAIN CONTAINER */}

        <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

          {/* ==================================
              PHOTO GRID
          ================================== */}

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">

            {visibleImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                aria-label={`Open hospital gallery image ${index + 1}`}
                className="
                  group
                  relative
                  block
                  w-full
                  overflow-hidden
                  rounded-[14px]
                  border
                  border-[#E5EDF4]
                  bg-[#E6EFF3]
                  p-0
                  text-left
                  shadow-[0_8px_25px_rgba(16,45,95,0.07)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_18px_40px_rgba(16,45,95,0.15)]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#2E91C8]
                  sm:rounded-[18px]
                  lg:rounded-[20px]
                "
              >
                {/* IMAGE WRAPPER */}

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E6EFF3]">

                  {/* ORIGINAL IMAGE */}

                  <img
                    src={src}
                    alt={`Vighnaharta Hospital Gallery ${index + 1}`}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    onError={() => handleImageError(src)}
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                    style={{
                      imageRendering: "auto",
                      filter: "none",
                      transform: "none",
                    }}
                  />

                  {/* SUBTLE HOVER OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#102D5F]/0
                      transition-colors
                      duration-300
                      group-hover:bg-[#102D5F]/5
                    "
                  />

                </div>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* ======================================
          FULLSCREEN LIGHTBOX
      ====================================== */}

      {selectedImage !== null && (
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

          {/* ==================================
              CLOSE BUTTON
          ================================== */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
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

          {/* ==================================
              PREVIOUS BUTTON
          ================================== */}

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
              border
              border-white/15
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

          {/* ==================================
              FULLSCREEN IMAGE
          ================================== */}

          <div
            className="
              flex
              max-h-[88vh]
              w-full
              max-w-[1150px]
              items-center
              justify-center
              px-10
              sm:px-14
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={selectedImage}
              src={selectedImage}
              alt="Vighnaharta Hospital Gallery"
              decoding="async"
              className="
                block
                h-auto
                w-auto
                max-h-[85vh]
                max-w-full
                rounded-[12px]
                object-contain
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                sm:rounded-[18px]
              "
              style={{
                imageRendering: "auto",
                filter: "none",
                transform: "none",
              }}
              onError={() => handleImageError(selectedImage)}
            />
          </div>

          {/* ==================================
              NEXT BUTTON
          ================================== */}

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
              border
              border-white/15
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
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, Camera, Cross, HeartPulse } from "lucide-react";

const gallery = [
  { title: "Reception", image: "/images/gallery/reception.jpg", className: "col-span-2 row-span-2 min-h-[270px] sm:min-h-[330px] lg:min-h-[430px]" },
  { title: "ICU", image: "/images/gallery/icu.jpg", className: "col-span-1 row-span-1 min-h-[180px] sm:min-h-[220px] lg:min-h-[205px]" },
  { title: "Operation Theatre", image: "/images/gallery/operation-theatre.jpg", className: "col-span-1 row-span-1 min-h-[180px] sm:min-h-[220px] lg:min-h-[205px]" },
  { title: "Patient Rooms", image: "/images/gallery/patient-rooms.jpg", className: "col-span-1 row-span-1 min-h-[180px] sm:min-h-[220px] lg:min-h-[230px]" },
  { title: "Diagnostic Area", image: "/images/gallery/diagnostic-area.jpg", className: "col-span-1 row-span-1 min-h-[180px] sm:min-h-[220px] lg:min-h-[230px]" },
  { title: "Pharmacy", image: "/images/gallery/pharmacy.jpg", className: "col-span-1 row-span-1 min-h-[180px] sm:min-h-[220px] lg:min-h-[230px]" },
  { title: "Ambulance", image: "/images/gallery/ambulance.jpg", className: "col-span-1 row-span-1 min-h-[180px] sm:min-h-[220px] lg:min-h-[230px]" },
  { title: "Exterior", image: "/images/gallery/exterior.jpg", className: "col-span-2 min-h-[230px] sm:min-h-[280px] lg:col-span-2 lg:min-h-[300px]" },
];

const HospitalGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 90 });
    AOS.refresh();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">

      {/* BACKGROUND */}
      <div className="gallery-blob-one pointer-events-none absolute -left-[150px] top-[20%] h-[320px] w-[320px] rounded-full bg-[#EAF7FC] blur-[90px] lg:h-[450px] lg:w-[450px] lg:blur-[120px]" />
      <div className="gallery-blob-two pointer-events-none absolute -right-[180px] bottom-[5%] h-[350px] w-[350px] rounded-full bg-[#EDF8FC] blur-[100px] lg:h-[480px] lg:w-[480px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#2E91C8_1px,transparent_1px)] [background-size:25px_25px]" />

      <Cross className="gallery-cross pointer-events-none absolute right-[7%] top-[10%] hidden h-9 w-9 text-[#2E91C8]/10 lg:block" strokeWidth={1.2} />
      <Cross className="gallery-cross-two pointer-events-none absolute bottom-[12%] left-[6%] hidden h-6 w-6 text-[#2E91C8]/10 lg:block" strokeWidth={1.2} />

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-7 flex flex-col sm:mb-9 md:mb-10 lg:mb-11 lg:flex-row lg:items-end lg:justify-between lg:gap-10 xl:mb-12">

          <div className="max-w-[720px]" data-aos="fade-right">
            <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
              <span className="gallery-label-line h-[2px] w-7 rounded-full bg-[#2E91C8] sm:w-9" />
              <span className="text-[8px] font-bold uppercase tracking-[1.5px] text-[#2E91C8] min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[2px] lg:text-[11px]">Hospital Gallery</span>
            </div>

            <h2 className="m-0 max-w-[680px] text-[clamp(27px,8vw,34px)] font-bold leading-[1.13] tracking-[-0.8px] text-[#102D5F] sm:text-[36px] md:text-[39px] lg:text-[42px] xl:text-[46px]">
              A Closer Look at <span className="text-[#2E91C8]">Vighnaharta Hospital</span>
            </h2>
          </div>

          <div className="mt-4 max-w-[390px] lg:mt-0 lg:text-right" data-aos="fade-left" data-aos-delay="120">
            <p className="m-0 text-[11px] leading-[1.7] text-[#718291] min-[360px]:text-[12px] sm:text-[13px] xl:text-[14px]">
              Explore our hospital spaces, medical facilities and patient care environment.
            </p>

            <div className="mt-3 hidden items-center justify-end gap-2 lg:flex">
              <Camera className="camera-icon h-4 w-4 text-[#2E91C8]" strokeWidth={1.7} />
              <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#9AABB6]">Inside Our Hospital</span>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-2 gap-2 min-[360px]:gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {gallery.map((item, index) => <GalleryItem key={item.title} item={item} index={index} />)}
        </div>

        {/* BOTTOM */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8" data-aos="zoom-in" data-aos-delay="200">
          <span className="gallery-bottom-line-left h-px w-10 bg-gradient-to-r from-transparent to-[#C6E3ED] sm:w-16" />

          <div className="gallery-heart relative flex h-8 w-8 items-center justify-center rounded-full border border-[#D9EAF1] bg-[#F4FAFD] text-[#2E91C8] sm:h-9 sm:w-9">
            <HeartPulse className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.7} />
            <span className="gallery-heart-ring absolute inset-[-1px] rounded-full border border-[#2E91C8]/25" />
          </div>

          <span className="gallery-bottom-line-right h-px w-10 bg-gradient-to-l from-transparent to-[#C6E3ED] sm:w-16" />
        </div>
      </div>

      <style>{`
        .gallery-blob-one{animation:galleryBlobOne 9s ease-in-out infinite alternate}
        .gallery-blob-two{animation:galleryBlobTwo 11s ease-in-out infinite alternate}
        .gallery-cross{animation:galleryCross 6s ease-in-out infinite}
        .gallery-cross-two{animation:galleryCross 7s 1.5s ease-in-out infinite}
        .camera-icon{animation:cameraFloat 2.8s ease-in-out infinite}
        .gallery-label-line{transform-origin:left;animation:labelPulse 3s ease-in-out infinite}
        .gallery-heart{animation:galleryHeart 2.8s ease-in-out infinite}
        .gallery-heart-ring{animation:galleryHeartRing 2.4s ease-out infinite}
        .gallery-bottom-line-left,.gallery-bottom-line-right{animation:bottomLine 3s ease-in-out infinite}

        .gallery-card .gallery-curtain{transform:translateX(0)}
        .gallery-card.aos-animate .gallery-curtain{transform:translateX(105%)}
        .gallery-card .gallery-image{transform:scale(1.12)}
        .gallery-card.aos-animate .gallery-image{transform:scale(1)}
        .gallery-card .gallery-number{opacity:0;transform:scale(.7) rotate(-15deg)}
        .gallery-card.aos-animate .gallery-number{opacity:1;transform:scale(1) rotate(0)}
        .gallery-card .gallery-title{opacity:0;transform:translateY(18px)}
        .gallery-card.aos-animate .gallery-title{opacity:1;transform:translateY(0)}
        .gallery-card .gallery-accent{width:0}
        .gallery-card.aos-animate .gallery-accent{width:24px}
        .gallery-card:hover .gallery-shine{left:140%}
        .gallery-card:hover .gallery-image{transform:scale(1.07)}
        .gallery-card:hover .gallery-accent{width:42px}

        @keyframes galleryBlobOne{to{transform:translate3d(55px,30px,0) scale(1.08)}}
        @keyframes galleryBlobTwo{to{transform:translate3d(-45px,-35px,0) scale(1.1)}}
        @keyframes galleryCross{0%,100%{transform:translateY(0) rotate(0);opacity:.5}50%{transform:translateY(-14px) rotate(90deg);opacity:1}}
        @keyframes cameraFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes labelPulse{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.65)}}
        @keyframes galleryHeart{0%,100%{transform:scale(1)}45%{transform:scale(1)}52%{transform:scale(1.12)}60%{transform:scale(1)}67%{transform:scale(1.06)}}
        @keyframes galleryHeartRing{0%{transform:scale(.8);opacity:.7}100%{transform:scale(1.65);opacity:0}}
        @keyframes bottomLine{0%,100%{opacity:.5}50%{opacity:1}}

        @media(max-width:767px){
          .gallery-blob-one,.gallery-blob-two{animation:none}
        }

        @media(prefers-reduced-motion:reduce){
          .gallery-blob-one,.gallery-blob-two,.gallery-cross,.gallery-cross-two,.camera-icon,.gallery-label-line,.gallery-heart,.gallery-heart-ring,.gallery-bottom-line-left,.gallery-bottom-line-right{animation:none!important}
          .gallery-card .gallery-curtain{display:none}
          .gallery-card .gallery-image,.gallery-card .gallery-number,.gallery-card .gallery-title{opacity:1!important;transform:none!important}
          .gallery-card .gallery-accent{width:24px!important}
        }
      `}</style>
    </section>
  );
};

const GalleryItem = ({ item, index }) => {
  const animation = index % 4 === 0 ? "fade-up" : index % 4 === 1 ? "fade-right" : index % 4 === 2 ? "zoom-in" : "fade-left";

  return (
    <div className={`gallery-card group relative overflow-hidden rounded-[14px] bg-[#E9F2F6] shadow-[0_10px_30px_rgba(16,45,95,0.06)] min-[360px]:rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] xl:rounded-[22px] ${item.className}`} data-aos={animation} data-aos-delay={index * 75} data-aos-duration="850">

      {/* IMAGE */}
      <img src={item.image} alt={`${item.title} - Vighnaharta Hospital`} loading="lazy" className="gallery-image absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]" />

      {/* UNIQUE CURTAIN REVEAL */}
      <div className="gallery-curtain pointer-events-none absolute inset-0 z-30 bg-gradient-to-br from-[#102D5F] via-[#176A98] to-[#69CBF2] transition-transform duration-[1100ms] ease-[cubic-bezier(.76,0,.24,1)]" />

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182F]/85 via-[#06182F]/10 to-transparent transition-all duration-500 lg:group-hover:from-[#06182F]/90 lg:group-hover:via-[#06182F]/20" />
      <div className="pointer-events-none absolute inset-0 bg-[#2E91C8]/0 transition-colors duration-500 lg:group-hover:bg-[#2E91C8]/[0.07]" />

      {/* MOVING SHINE */}
      <div className="gallery-shine pointer-events-none absolute inset-y-[-30%] -left-[55%] z-10 w-[24%] rotate-[14deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-[left] duration-[900ms] ease-out" />

      {/* NUMBER */}
      <div className="gallery-number absolute left-2.5 top-2.5 z-20 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/15 bg-[#071B3A]/35 px-2 text-[8px] font-bold text-white/75 backdrop-blur-md transition-all delay-300 duration-700 min-[360px]:left-3 min-[360px]:top-3 sm:h-8 sm:min-w-8 sm:text-[9px]">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* ARROW */}
      <div className="absolute right-3 top-3 z-20 hidden h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 lg:flex lg:group-hover:translate-y-0 lg:group-hover:rotate-45 lg:group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
      </div>

      {/* TITLE */}
      <div className="gallery-title absolute bottom-0 left-0 right-0 z-20 p-3 transition-all delay-[450ms] duration-700 min-[360px]:p-3.5 sm:p-4 lg:p-5">

        <div className="gallery-accent mb-1.5 h-[2px] rounded-full bg-[#69CBF2] transition-all duration-700" />

        <h3 className="m-0 text-[12px] font-bold leading-[1.3] text-white min-[360px]:text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px]">
          {item.title}
        </h3>

        <span className="mt-1 hidden text-[8px] font-semibold uppercase tracking-[1.2px] text-white/50 sm:block lg:text-[9px]">
          Vighnaharta Hospital
        </span>
      </div>
    </div>
  );
};

export default HospitalGallery;
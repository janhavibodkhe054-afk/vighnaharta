import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Phone, ShieldPlus, Activity, Cross } from "lucide-react";

const OrthopedicsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <section className="ortho-hero relative overflow-hidden bg-[#F7FBFD]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="ortho-blob absolute -left-[100px] top-[10%] h-[300px] w-[300px] rounded-full bg-[#55B8E9]/10 blur-[80px] sm:h-[420px] sm:w-[420px]" />
        <div className="ortho-blob-two absolute -right-[120px] bottom-[-100px] h-[320px] w-[320px] rounded-full bg-[#2E91C8]/10 blur-[90px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#102D5F 1px, transparent 1px), linear-gradient(90deg, #102D5F 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

        <Cross className="ortho-cross absolute left-[6%] top-[18%] hidden text-[#2E91C8]/20 lg:block" size={25} strokeWidth={1.5} />
        <Cross className="ortho-cross-two absolute bottom-[14%] right-[4%] hidden text-[#2E91C8]/20 lg:block" size={20} strokeWidth={1.5} />
      </div>

      <div className="relative mx-auto grid min-h-[520px] max-w-[1380px] items-center gap-9 px-4 py-12 sm:min-h-[570px] sm:px-6 sm:py-14 md:grid-cols-[1.02fr_.98fr] md:gap-10 md:py-16 lg:min-h-[620px] lg:gap-14 lg:px-8 lg:py-18 xl:gap-20">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10 order-2 md:order-1">
          <div data-aos="fade-up" className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4F5FC] text-[#2E91C8]">
              <Activity size={17} strokeWidth={1.8} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              Orthopedics & Trauma Care
            </span>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80" className="max-w-[720px] text-[32px] font-bold leading-[1.12] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
            Care for Bone, Joint &{" "}
            <span className="relative inline-block text-[#2E91C8]">
              Injury-Related
              <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-[#2E91C8] to-[#69CBF2] ortho-heading-line" />
            </span>{" "}
            Conditions
          </h1>

          <p data-aos="fade-up" data-aos-delay="150" className="mt-5 max-w-[650px] text-[16px] leading-[1.8] text-[#5F6F82] sm:text-[17px] lg:mt-6 lg:text-[18px]">
            Evaluation and treatment for bone, joint and musculoskeletal conditions, including injuries and orthopedic trauma.
          </p>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="220" className="mt-7 flex flex-col gap-3 min-[430px]:flex-row sm:mt-8">

            <Link to="/contact" className="group flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#102D5F] px-6 text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(16,45,95,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[14px]">
              Book Consultation
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a href="tel:+919766999474" className="group flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-[#D6E8F1] bg-white px-6 text-[13px] font-semibold text-[#102D5F] shadow-[0_8px_25px_rgba(16,45,95,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E91C8] hover:text-[#2E91C8] sm:text-[14px]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8]">
                <Phone size={13} strokeWidth={2} />
              </span>
              Emergency Assistance
            </a>
          </div>

          {/* MINI TRUST LINE */}
          <div data-aos="fade-up" data-aos-delay="290" className="mt-7 flex items-center gap-3 border-t border-[#102D5F]/[0.08] pt-5 sm:mt-9 sm:max-w-[560px]">
            <ShieldPlus size={18} strokeWidth={1.7} className="shrink-0 text-[#2E91C8]" />

            <p className="text-[12px] font-medium leading-[1.6] text-[#64748B] sm:text-[13px]">
              Specialist orthopedic evaluation with hospital-based emergency and diagnostic support.
            </p>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div data-aos="fade-left" data-aos-delay="120" className="relative order-1 mx-auto w-full max-w-[620px] md:order-2">

          {/* BACK SHAPE */}
          <div className="absolute -right-3 top-5 h-[92%] w-[92%] rounded-[28px] bg-[#DFF3FB] sm:-right-5 sm:top-7 lg:-right-7" />

          {/* DOTS */}
          <div className="absolute -left-5 bottom-12 hidden grid-cols-4 gap-2 lg:grid">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-[4px] w-[4px] rounded-full bg-[#2E91C8]/30" />
            ))}
          </div>

          {/* IMAGE */}
          <div className="ortho-image group relative h-[300px] overflow-hidden rounded-[22px] border-[5px] border-white bg-[#EAF7FC] shadow-[0_25px_60px_rgba(16,45,95,0.15)] min-[430px]:h-[340px] sm:h-[390px] md:h-[430px] lg:h-[490px] xl:h-[520px]">

            <img
              src="/orthopedic.png"
              alt="Orthopedics and Trauma Care at Vighnaharta Hospital"
              className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />

            {/* IMAGE GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/45 via-transparent to-transparent" />

            {/* SCANNER */}
            <span className="ortho-scanner pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#69CBF2]/80 to-transparent" />

            {/* CORNERS */}
            <span className="absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-white/70" />
            <span className="absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-white/70" />
            <span className="absolute bottom-4 left-4 h-7 w-7 border-b-2 border-l-2 border-white/70" />
            <span className="absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-white/70" />

            {/* IMAGE LABEL */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-[14px] border border-white/20 bg-[#071B3A]/75 px-4 py-3 text-white backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-auto sm:min-w-[260px]">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#55B8E9]">
                <Activity size={17} strokeWidth={2} />
                <span className="ortho-ping absolute inset-0 rounded-full border border-[#69CBF2]" />
              </span>

              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[1.5px] text-[#8DDAF7]">
                  Department
                </span>

                <span className="mt-[2px] block text-[13px] font-semibold sm:text-[14px]">
                  Orthopedics & Trauma Care
                </span>
              </div>
            </div>
          </div>

          {/* FLOATING BADGE */}
          <div className="ortho-float absolute -bottom-4 right-2 hidden items-center gap-2 rounded-full border border-[#D9EBF3] bg-white px-4 py-2.5 shadow-[0_12px_30px_rgba(16,45,95,0.12)] sm:flex lg:-right-4">
            <span className="h-2 w-2 rounded-full bg-[#2E91C8]" />
            <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#102D5F]">
              Bone • Joint • Injury
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orthoScanner {
          0% { top: 4%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 96%; opacity: 0; }
        }

        @keyframes orthoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes orthoPulse {
          0% { transform: scale(1); opacity: .65; }
          100% { transform: scale(1.55); opacity: 0; }
        }

        @keyframes orthoBlob {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(20px,-15px,0); }
        }

        @keyframes orthoBlobTwo {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(-20px,15px,0); }
        }

        @keyframes orthoCross {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(90deg); }
        }

        @keyframes headingLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .ortho-scanner {
          animation: orthoScanner 5s ease-in-out infinite;
        }

        .ortho-float {
          animation: orthoFloat 4s ease-in-out infinite;
        }

        .ortho-ping {
          animation: orthoPulse 2s ease-out infinite;
        }

        .ortho-blob {
          animation: orthoBlob 9s ease-in-out infinite;
        }

        .ortho-blob-two {
          animation: orthoBlobTwo 11s ease-in-out infinite;
        }

        .ortho-cross {
          animation: orthoCross 8s ease-in-out infinite;
        }

        .ortho-cross-two {
          animation: orthoCross 10s ease-in-out infinite reverse;
        }

        .ortho-heading-line {
          animation: headingLine 1.1s .5s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .ortho-scanner,
          .ortho-float,
          .ortho-ping,
          .ortho-blob,
          .ortho-blob-two,
          .ortho-cross,
          .ortho-cross-two,
          .ortho-heading-line {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OrthopedicsHero;
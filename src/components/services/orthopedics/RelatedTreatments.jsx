import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, Check, ScanLine, CalendarDays, Phone, Bone, Activity } from "lucide-react";

const treatments = [
  {
    no: "01",
    label: "Bone Injury Care",
    title: "Fracture Treatment",
    subtitle: "Care for Bone Injuries & Fractures",
    description: "Fracture treatment begins with appropriate medical evaluation of the bone injury. The treatment approach is determined according to the type and nature of the fracture and the patient’s clinical requirements.",
    points: [
      "Clinical evaluation of the injury",
      "Fracture assessment",
      "Appropriate treatment planning",
      "Follow-up care as advised",
    ],
    supportTitle: "Diagnostic Support",
    support: "Digital X-Ray support is available within the hospital for applicable imaging requirements when advised by the treating doctor.",
    image: "/fracture-treatment.png",
    route: "/services/treatments/fracture-treatment",
    icon: Bone,
    reverse: false,
  },
  {
    no: "02",
    label: "Knee & Ligament Care",
    title: "Knee Ligament Treatment",
    subtitle: "Evaluation & Care for Knee Ligament Injuries",
    description: "Knee ligament injuries may require specialist orthopedic evaluation to understand the nature of the injury and determine an appropriate treatment approach based on the patient’s condition.",
    points: [
      "Orthopedic consultation",
      "Knee injury evaluation",
      "Ligament injury assessment",
      "Appropriate treatment planning",
      "Follow-up care as advised",
    ],
    supportTitle: null,
    support: null,
    image: "/knee-ligament.png",
    route: "/services/treatments/knee-ligament-treatment",
    icon: Activity,
    reverse: true,
  },
];

const RelatedTreatments = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#071B3A] py-14 sm:py-16 lg:py-20">

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[180px] top-[5%] h-[430px] w-[430px] rounded-full bg-[#2E91C8]/10 blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[8%] h-[480px] w-[480px] rounded-full bg-[#55B8E9]/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#2E91C8]/[0.06] to-transparent blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mx-auto max-w-[800px] text-center">

          <div data-aos="fade-up" className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#55B8E9]/60" />

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#69CBF2] sm:text-[12px]">
              Related Treatments
            </span>

            <span className="h-px w-7 bg-[#55B8E9]/60" />
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="text-[32px] font-bold leading-[1.13] tracking-[-1px] text-white sm:text-[38px] md:text-[42px] lg:text-[46px]"
          >
            Treatment Options for{" "}
            <span className="text-[#69CBF2]">
              Orthopedic Injuries
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="130"
            className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[1.8] text-[#B8C9D9] sm:text-[17px] lg:text-[18px]"
          >
            Based on clinical evaluation, appropriate treatment may be advised
            for bone, joint and ligament-related injuries.
          </p>
        </div>

        {/* =====================================================
            TREATMENTS
        ===================================================== */}
        <div className="mt-12 space-y-16 sm:mt-14 sm:space-y-20 lg:mt-16 lg:space-y-24">

          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;

            return (
              <article
                key={treatment.title}
                className="relative grid items-center gap-8 md:grid-cols-2 lg:gap-14 xl:gap-20"
              >

                {/* ==========================================
                    IMAGE
                ========================================== */}
                <div
                  data-aos={treatment.reverse ? "fade-right" : "fade-left"}
                  data-aos-delay="70"
                  className={`relative ${
                    treatment.reverse ? "md:order-1" : "md:order-2"
                  }`}
                >

                  {/* LARGE DECORATIVE NUMBER */}
                  <span
                    className={`pointer-events-none absolute -top-12 z-0 hidden text-[120px] font-black leading-none text-white/[0.025] lg:block ${
                      treatment.reverse ? "-left-5" : "-right-2"
                    }`}
                  >
                    {treatment.no}
                  </span>

                  {/* BACK FRAME */}
                  <div
                    className={`absolute top-6 h-[92%] w-[92%] rounded-[28px] border border-white/[0.06] bg-[#0C2850] ${
                      treatment.reverse ? "-left-4" : "-right-4"
                    }`}
                  />

                  {/* IMAGE */}
                  <div className="group relative z-10 h-[290px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0C2850] shadow-[0_25px_65px_rgba(0,0,0,0.28)] min-[430px]:h-[340px] sm:h-[390px] md:h-[430px] lg:h-[475px]">

                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/80 via-[#06182F]/5 to-transparent" />

                    {/* SCAN LINE */}
                    <span className="treatment-scan pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#69CBF2]/90 to-transparent shadow-[0_0_12px_rgba(105,203,242,.7)]" />

                    {/* IMAGE CORNERS */}
                    <span className="absolute left-4 top-4 h-7 w-7 border-l border-t border-white/40" />
                    <span className="absolute right-4 top-4 h-7 w-7 border-r border-t border-white/40" />
                    <span className="absolute bottom-4 left-4 h-7 w-7 border-b border-l border-white/40" />
                    <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-white/40" />

                    {/* NUMBER */}
                    <div className="absolute left-4 top-4 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/20 bg-[#06182F]/75 text-[13px] font-bold tracking-[1px] text-white backdrop-blur-md sm:left-5 sm:top-5">
                      {treatment.no}
                    </div>

                    {/* IMAGE LABEL */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">

                      <div className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-white text-[#2E91C8] shadow-[0_8px_25px_rgba(0,0,0,.15)]">
                        <Icon size={20} strokeWidth={1.8} />
                        <span className="treatment-icon-pulse absolute inset-[-4px] rounded-full border border-white/40" />
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[1.5px] text-[#8DDAF7]">
                          Orthopedic Treatment
                        </span>

                        <span className="mt-[2px] block text-[14px] font-semibold text-white sm:text-[15px]">
                          {treatment.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* DOT PATTERN */}
                  <div
                    className={`absolute -bottom-5 z-0 hidden grid-cols-5 gap-2 lg:grid ${
                      treatment.reverse ? "-right-5" : "-left-5"
                    }`}
                  >
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-[4px] w-[4px] rounded-full bg-[#69CBF2]/25"
                      />
                    ))}
                  </div>
                </div>

                {/* ==========================================
                    CONTENT
                ========================================== */}
                <div
                  data-aos={treatment.reverse ? "fade-left" : "fade-right"}
                  data-aos-delay="120"
                  className={`relative ${
                    treatment.reverse ? "md:order-2" : "md:order-1"
                  }`}
                >

                  {/* TOP LABEL */}
                  <div className="flex items-center gap-3">

                    <span className="flex h-[39px] w-[39px] items-center justify-center rounded-full border border-[#55B8E9]/20 bg-[#55B8E9]/10 text-[11px] font-bold text-[#69CBF2]">
                      {treatment.no}
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-[1.6px] text-[#69CBF2] sm:text-[11px]">
                      {treatment.label}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-[27px] font-bold leading-[1.18] tracking-[-0.6px] text-white sm:text-[31px] lg:text-[35px]">
                    {treatment.title}
                  </h3>

                  <p className="mt-2 text-[14px] font-semibold text-[#69CBF2] sm:text-[15px]">
                    {treatment.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-[15px] leading-[1.8] text-[#B8C9D9] sm:text-[16px] lg:text-[17px]">
                    {treatment.description}
                  </p>

                  {/* POINTS */}
                  <div className="mt-6 grid gap-x-5 gap-y-3 min-[430px]:grid-cols-2">

                    {treatment.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-[2px] flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full bg-[#55B8E9]/15 text-[#69CBF2]">
                          <Check size={12} strokeWidth={2.5} />
                        </span>

                        <span className="text-[13px] font-medium leading-[1.6] text-[#D5E1EA] sm:text-[14px]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* DIAGNOSTIC SUPPORT */}
                  {treatment.support && (
                    <div className="mt-6 flex gap-3 rounded-[16px] border border-white/[0.09] bg-white/[0.045] p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#55B8E9]/25 hover:bg-white/[0.06] sm:p-5">

                      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] border border-[#55B8E9]/10 bg-[#55B8E9]/10 text-[#69CBF2]">
                        <ScanLine size={19} strokeWidth={1.8} />
                      </div>

                      <div>
                        <span className="block text-[12px] font-bold text-white sm:text-[13px]">
                          {treatment.supportTitle}
                        </span>

                        <p className="mt-1 text-[13px] leading-[1.65] text-[#AFC2D2] sm:text-[14px]">
                          {treatment.support}
                        </p>
                      </div>
                    </div>
                  )}

                  
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            CLINICAL NOTE
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-16 max-w-[900px] border-y border-white/10 py-6 text-center sm:mt-20 sm:py-7 lg:mt-24"
        >
          <div className="mx-auto mb-3 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#55B8E9]/15 bg-[#55B8E9]/10 text-[#69CBF2]">
            <Activity size={17} strokeWidth={1.8} />
          </div>

          <h4 className="text-[14px] font-bold text-white sm:text-[15px]">
            Treatment is planned according to individual clinical requirements.
          </h4>

          <p className="mx-auto mt-2 max-w-[700px] text-[13px] leading-[1.7] text-[#9FB3C5] sm:text-[14px]">
            The appropriate treatment approach is determined after evaluation
            by the treating doctor.
          </p>
        </div>

        
        
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`
        @keyframes treatmentScan {
          0% {
            top: 4%;
            opacity: 0;
          }

          15% {
            opacity: .9;
          }

          85% {
            opacity: .9;
          }

          100% {
            top: 96%;
            opacity: 0;
          }
        }

        @keyframes treatmentIconPulse {
          0% {
            transform: scale(1);
            opacity: .6;
          }

          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        .treatment-scan {
          animation: treatmentScan 5.5s ease-in-out infinite;
        }

        .treatment-icon-pulse {
          animation: treatmentIconPulse 2.3s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .treatment-scan,
          .treatment-icon-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RelatedTreatments;
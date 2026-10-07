import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bone, Activity, Stethoscope, Droplets, Venus, ArrowRight, Plus, Filter } from "lucide-react";

const categories = ["All", "Orthopedic", "Spine", "Surgical", "Urology", "Women's Health"];

const treatments = [
  {
    no: "01",
    title: "Fracture Treatment",
    category: "Orthopedic",
    label: "Bone Injury Care",
    description: "Evaluation and appropriate treatment planning for bone injuries and fractures based on the type and nature of the injury.",
    meta: "Evaluation • Fracture Assessment • Treatment Planning",
    icon: Bone,
    path: "/services/treatments/fracture-treatment",
  },
  {
    no: "02",
    title: "Knee Ligament Treatment",
    category: "Orthopedic",
    label: "Knee & Ligament Care",
    description: "Orthopedic evaluation and appropriate treatment planning for knee ligament injuries based on the patient’s clinical condition.",
    meta: "Consultation • Injury Assessment • Follow-up",
    icon: Activity,
    path: "/services/treatments/knee-ligament-treatment",
  },
  {
    no: "03",
    title: "Spine Trauma Care",
    category: "Spine",
    label: "Spine Injury Care",
    description: "Assessment and treatment support for trauma-related spine injuries and conditions based on individual clinical requirements.",
    meta: "Assessment • Specialist Care • Treatment Support",
    icon: Activity,
    path: "/services/treatments/spine-trauma-care",
  },
  {
    no: "04",
    title: "Hernia Surgery",
    category: "Surgical",
    label: "Surgical Care",
    description: "Surgical evaluation and treatment for patients diagnosed with hernia where surgery is clinically indicated.",
    meta: "Evaluation • Surgical Consultation • Care",
    icon: Stethoscope,
    path: "/services/treatments/hernia-surgery",
  },
  {
    no: "05",
    title: "Appendix Surgery",
    category: "Surgical",
    label: "Surgical Care",
    description: "Evaluation and surgical care for appendix-related conditions where appropriate based on clinical assessment.",
    meta: "Evaluation • Treatment Planning • Surgical Care",
    icon: Plus,
    path: "/services/treatments/appendix-surgery",
  },
  {
    no: "06",
    title: "Kidney Stone Treatment",
    category: "Urology",
    label: "Kidney Care",
    description: "Evaluation and treatment for kidney stone-related symptoms and conditions according to individual medical requirements.",
    meta: "Evaluation • Treatment Support • Follow-up",
    icon: Droplets,
    path: "/services/treatments/kidney-stone-treatment",
  },
  {
    no: "07",
    title: "Prostate Treatment",
    category: "Urology",
    label: "Prostate Care",
    description: "Evaluation and appropriate treatment support for prostate-related conditions based on individual clinical requirements.",
    meta: "Consultation • Evaluation • Treatment Planning",
    icon: Stethoscope,
    path: "/services/treatments/prostate-treatment",
  },
  {
    no: "08",
    title: "Gynecological Procedures",
    category: "Women's Health",
    label: "Women's Health Care",
    description: "Appropriate gynecological evaluation and procedures based on the patient’s individual medical requirements.",
    meta: "Evaluation • Clinical Guidance • Appropriate Care",
    icon: Venus,
    path: "/services/treatments/gynecological-procedures",
  },
];

const TreatmentNavigator = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 45,
    });

    AOS.refresh();
  }, []);

  const filteredTreatments = useMemo(() => {
    if (activeCategory === "All") return treatments;
    return treatments.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-11 sm:py-12 md:py-14 lg:py-16">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[160px] h-[380px] w-[380px] rounded-full bg-[#E5F5FA] blur-[110px]" />
        <div className="absolute -right-[180px] bottom-[80px] h-[400px] w-[400px] rounded-full bg-[#EAF7FC] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "radial-gradient(#2E91C8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION 2 — NAVIGATOR HEADER
        ===================================================== */}
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div className="max-w-[750px]">
            <div data-aos="fade-right" className="mb-3 flex items-center gap-3">
              <span className="tn-label-line h-[2px] w-8 origin-left rounded-full bg-[#2E91C8]" />

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
                Treatment Navigator
              </span>
            </div>

            <h2 data-aos="fade-up" data-aos-delay="60" className="text-[30px] font-bold leading-[1.12] tracking-[-.8px] text-[#102D5F] sm:text-[36px] md:text-[40px] lg:text-[43px]">
              Find the Right{" "}
              <span className="relative inline-block text-[#2E91C8]">
                Treatment Information
                <svg viewBox="0 0 300 8" preserveAspectRatio="none" className="absolute -bottom-[6px] left-0 h-[6px] w-full">
                  <path className="tn-title-line" d="M2 5 C75 1 205 8 298 3" fill="none" stroke="#72D3EF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p data-aos="fade-up" data-aos-delay="120" className="mt-5 max-w-[700px] text-[15px] leading-[1.8] text-[#64748B] sm:text-[16px] lg:text-[17px]">
              Explore treatment and procedure information by medical category. Appropriate care is determined after clinical evaluation according to individual medical requirements.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="130" className="hidden items-center gap-3 rounded-full border border-[#DCEAF0] bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(16,45,95,.05)] lg:flex">
            <Filter size={14} className="text-[#2E91C8]" />
            <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#64748B]">
              Browse by Category
            </span>
          </div>
        </div>

        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}
        <div data-aos="fade-up" data-aos-delay="170" className="mt-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center gap-2 rounded-[18px] border border-[#DCEAF0] bg-white p-2 shadow-[0_10px_30px_rgba(16,45,95,.05)] sm:inline-flex">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative overflow-hidden rounded-[12px] px-4 py-2.5 text-[12px] font-bold transition-all duration-300 sm:px-5 sm:text-[13px] ${
                    active
                      ? "bg-[#102D5F] text-white shadow-[0_8px_20px_rgba(16,45,95,.16)]"
                      : "text-[#627487] hover:bg-[#EDF8FC] hover:text-[#2E91C8]"
                  }`}
                >
                  {active && <span className="tn-active-glow absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />}

                  <span className="relative">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SECTION 3 — ALL TREATMENTS
        ===================================================== */}
        <div className="mt-10">
          {/* DIRECTORY TOP */}
          <div data-aos="fade-up" className="mb-5 flex items-end justify-between gap-5 border-b border-[#DCE9EF] pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[1.6px] text-[#2E91C8]">
                {activeCategory === "All" ? "Complete Directory" : activeCategory}
              </span>

              <h3 className="mt-1 text-[22px] font-bold tracking-[-.4px] text-[#102D5F] sm:text-[25px]">
                {activeCategory === "All" ? "All Treatments" : `${activeCategory} Treatments`}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-[30px] min-w-[30px] items-center justify-center rounded-full bg-[#EAF7FC] px-2 text-[11px] font-bold text-[#2E91C8]">
                {String(filteredTreatments.length).padStart(2, "0")}
              </span>

              <span className="hidden text-[10px] font-bold uppercase tracking-[1px] text-[#91A0AD] sm:block">
                Treatments
              </span>
            </div>
          </div>

          {/* =====================================================
              TREATMENT DIRECTORY
          ===================================================== */}
          <div key={activeCategory} className="tn-results grid gap-x-8 lg:grid-cols-2">
            {filteredTreatments.map((item, index) => (
              <TreatmentRow key={item.no} item={item} index={index} />
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredTreatments.length === 0 && (
            <div className="py-14 text-center">
              <p className="text-[15px] text-[#64748B]">
                No treatments available in this category.
              </p>
            </div>
          )}
        </div>

        {/* =====================================================
            BOTTOM MEDICAL NOTE
        ===================================================== */}
        <div data-aos="fade-up" className="mt-8 overflow-hidden rounded-[18px] bg-[#102D5F]">
          <div className="grid items-center gap-5 px-5 py-5 sm:px-6 md:grid-cols-[1fr_auto] lg:px-7">
            <div className="flex items-start gap-3">
              <div className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[#7EDCF7]">
                <Stethoscope size={17} strokeWidth={1.7} />
              </div>

              <div>
                <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#79DDF7]">
                  Treatment Planning
                </span>

                <p className="mt-1 max-w-[760px] text-[12px] leading-[1.7] text-white/70 sm:text-[13px]">
                  Treatment and procedure requirements vary for every patient. The appropriate treatment approach is determined after evaluation by the treating doctor.
                </p>
              </div>
            </div>

            <Link to="/contact" className="group inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full bg-white px-5 text-[12px] font-bold text-[#102D5F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E9F8FC] sm:text-[13px]">
              Book Consultation
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tnLabel {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes tnTitle {
          0% { stroke-dasharray: 350; stroke-dashoffset: 350; }
          100% { stroke-dasharray: 350; stroke-dashoffset: 0; }
        }

        @keyframes tnResults {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes tnGlow {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes tnIconRing {
          0% {
            transform: scale(.8);
            opacity: .5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes tnArrowPulse {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }

        .aos-animate .tn-label-line {
          animation: tnLabel .7s ease-out both;
        }

        .aos-animate .tn-title-line {
          animation: tnTitle 1.1s ease-out .2s both;
        }

        .tn-results {
          animation: tnResults .45s ease-out both;
        }

        .tn-active-glow {
          animation: tnGlow 2.8s ease-in-out infinite;
        }

        .tn-icon-ring {
          animation: tnIconRing 2.3s ease-out infinite;
        }

        .tn-treatment-row:hover .tn-row-arrow {
          animation: tnArrowPulse .8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .tn-label-line,
          .tn-title-line,
          .tn-results,
          .tn-active-glow,
          .tn-icon-ring,
          .tn-row-arrow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

const TreatmentRow = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 60}
      className="tn-treatment-row group relative border-b border-[#DCE9EF] py-5 sm:py-6"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-3 sm:gap-4">
        {/* NUMBER + ICON */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-black tracking-[1px] text-[#9BB0BE]">
            {item.no}
          </span>

          <div className="relative flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white sm:h-[47px] sm:w-[47px]">
            <Icon size={17} strokeWidth={1.7} />

            <span className="tn-icon-ring absolute inset-[-5px] rounded-full border border-[#2E91C8]/15" />
          </div>
        </div>

        {/* INFORMATION */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#EDF8FC] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[1px] text-[#2E91C8]">
              {item.category}
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[.8px] text-[#98A7B3]">
              {item.label}
            </span>
          </div>

          <h4 className="mt-2 text-[17px] font-bold leading-[1.35] text-[#102D5F] transition-colors duration-300 group-hover:text-[#2E91C8] sm:text-[19px]">
            {item.title}
          </h4>

          <p className="mt-2 max-w-[520px] text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
            {item.description}
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-[5px] w-[5px] rounded-full bg-[#69CBF2]" />

            <span className="text-[9px] font-bold uppercase tracking-[.8px] text-[#8A9BA8] sm:text-[10px]">
              {item.meta}
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={item.path}
          aria-label={`View ${item.title}`}
          className="mt-1 flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-full border border-[#D6E7EE] bg-white text-[#102D5F] transition-all duration-300 group-hover:border-[#102D5F] group-hover:bg-[#102D5F] group-hover:text-white sm:h-[42px] sm:w-[42px]"
        >
          <ArrowRight size={15} className="tn-row-arrow" />
        </Link>
      </div>

      {/* HOVER LINE */}
      <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-gradient-to-r from-[#2E91C8] via-[#69CBF2] to-transparent transition-all duration-500 group-hover:w-full" />
    </article>
  );
};

export default TreatmentNavigator;
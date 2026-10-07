import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bone, Activity, Move, ShieldPlus, Stethoscope } from "lucide-react";

const careAreas = [
  { no: "01", title: "Fractures", subtitle: "Bone Injury Care", icon: Bone, pos: "leftTop" },
  { no: "02", title: "Joint Injuries", subtitle: "Joint-Related Care", icon: Move, pos: "rightTop" },
  { no: "03", title: "Ligament Injuries", subtitle: "Ligament Injury Care", icon: Activity, pos: "leftBottom" },
  { no: "04", title: "Orthopedic Trauma", subtitle: "Trauma-Related Orthopedic Care", icon: ShieldPlus, pos: "rightBottom" },
  { no: "05", title: "Orthopedic Surgery", subtitle: "Surgical Orthopedic Care", icon: Stethoscope, pos: "bottom" },
];

const OrthopedicKeyAreas = () => {
  useEffect(() => {
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FCFE] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[5%] h-[420px] w-[420px] rounded-full bg-[#55B8E9]/10 blur-[100px]" />
        <div className="absolute bottom-[-180px] right-[-150px] h-[440px] w-[440px] rounded-full bg-[#2E91C8]/[0.08] blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(#102D5F 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-[780px] text-center">
          <div data-aos="fade-up" className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#2E91C8]" />
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">Key Areas of Care</span>
            <span className="h-px w-7 bg-[#2E91C8]" />
          </div>

          <h2 data-aos="fade-up" data-aos-delay="70" className="text-[32px] font-bold leading-[1.13] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
            Orthopedic Care Focused on
            <span className="block text-[#2E91C8]">Movement & Recovery</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="130" className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]">
            Evaluation and appropriate treatment across key areas of bone, joint, ligament and trauma-related orthopedic care.
          </p>
        </div>

        {/* =========================================================
            DESKTOP ORTHOPEDIC BODY MAP
        ========================================================= */}
        <div className="relative mx-auto mt-12 hidden h-[650px] max-w-[1100px] md:block lg:mt-14">

          {/* LARGE CENTER MEDICAL FIELD */}
          <div data-aos="zoom-in" className="absolute left-1/2 top-[20px] h-[530px] w-[300px] -translate-x-1/2">
            <div className="absolute inset-0 rounded-[50%] border border-[#2E91C8]/10" />
            <div className="absolute inset-[22px] rounded-[50%] border border-dashed border-[#2E91C8]/15 ortho-ring" />
            <div className="absolute inset-[48px] rounded-[50%] bg-gradient-to-b from-[#E9F7FC] via-white to-[#EAF7FC] shadow-[0_30px_80px_rgba(16,45,95,0.08)]" />
          </div>

          {/* BODY SILHOUETTE */}
          <div data-aos="fade-up" data-aos-delay="120" className="absolute left-1/2 top-[58px] z-10 h-[445px] w-[180px] -translate-x-1/2">

            {/* HEAD */}
            <div className="absolute left-1/2 top-0 h-[54px] w-[48px] -translate-x-1/2 rounded-[50%] border-[2px] border-[#8ACCEB] bg-white shadow-[0_5px_15px_rgba(46,145,200,.08)]" />

            {/* NECK */}
            <div className="absolute left-1/2 top-[52px] h-[26px] w-[20px] -translate-x-1/2 border-x-2 border-[#8ACCEB]" />

            {/* SHOULDERS */}
            <div className="absolute left-1/2 top-[74px] h-[55px] w-[125px] -translate-x-1/2 rounded-t-[55px] border-x-2 border-t-2 border-[#8ACCEB]" />

            {/* SPINE */}
            <div className="absolute left-1/2 top-[77px] h-[190px] w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#8ACCEB] via-[#2E91C8] to-[#8ACCEB]">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className="absolute left-1/2 h-[6px] w-[8px] -translate-x-1/2 rounded-full border border-[#2E91C8] bg-white" style={{ top: `${i * 18}px` }} />
              ))}
            </div>

            {/* LEFT ARM */}
            <div className="absolute left-[11px] top-[101px] h-[155px] w-[2px] origin-top rotate-[8deg] bg-[#8ACCEB]" />

            {/* RIGHT ARM */}
            <div className="absolute right-[11px] top-[101px] h-[155px] w-[2px] origin-top -rotate-[8deg] bg-[#8ACCEB]" />

            {/* HIP */}
            <div className="absolute left-1/2 top-[255px] h-[44px] w-[72px] -translate-x-1/2 rounded-[50%] border-2 border-[#8ACCEB]" />

            {/* LEFT LEG */}
            <div className="absolute left-[64px] top-[292px] h-[145px] w-[2px] rotate-[3deg] bg-[#8ACCEB]" />

            {/* RIGHT LEG */}
            <div className="absolute right-[64px] top-[292px] h-[145px] w-[2px] -rotate-[3deg] bg-[#8ACCEB]" />

            {/* JOINTS */}
            <JointPoint className="left-[25px] top-[98px]" />
            <JointPoint className="right-[25px] top-[98px]" />
            <JointPoint className="left-[5px] top-[192px]" />
            <JointPoint className="right-[5px] top-[192px]" />
            <JointPoint className="left-[54px] top-[348px]" />
            <JointPoint className="right-[54px] top-[348px]" />

            {/* CENTER BODY LABEL */}
            <div className="absolute left-1/2 top-[155px] z-20 -translate-x-1/2 rounded-full border border-[#D5EBF4] bg-white px-3 py-1.5 shadow-[0_7px_20px_rgba(16,45,95,.08)]">
              <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[1.3px] text-[#2E91C8]">Orthopedic Care</span>
            </div>
          </div>

          {/* LEFT TOP */}
          <CarePoint area={careAreas[0]} className="left-[2%] top-[70px]" direction="left" delay={100} />
          <Connector className="left-[31%] top-[142px] w-[145px]" />

          {/* RIGHT TOP */}
          <CarePoint area={careAreas[1]} className="right-[2%] top-[115px]" direction="right" delay={170} />
          <Connector className="right-[31%] top-[185px] w-[145px]" reverse />

          {/* LEFT BOTTOM */}
          <CarePoint area={careAreas[2]} className="left-[1%] top-[325px]" direction="left" delay={240} />
          <Connector className="left-[31%] top-[395px] w-[145px]" />

          {/* RIGHT BOTTOM */}
          <CarePoint area={careAreas[3]} className="right-[1%] top-[360px]" direction="right" delay={310} />
          <Connector className="right-[31%] top-[430px] w-[145px]" reverse />

          {/* SURGERY BOTTOM */}
          <div data-aos="fade-up" data-aos-delay="380" className="absolute bottom-[5px] left-1/2 z-20 -translate-x-1/2">
            <div className="group flex min-w-[300px] items-center gap-4 rounded-full border border-[#D9EBF3] bg-white p-2.5 pr-6 shadow-[0_15px_40px_rgba(16,45,95,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E91C8]/50 hover:shadow-[0_20px_45px_rgba(16,45,95,.14)]">
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#102D5F] text-white transition-all duration-300 group-hover:bg-[#2E91C8]">
                <Stethoscope size={21} strokeWidth={1.7} />
              </span>

              <div>
                <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">05</span>
                <h3 className="text-[16px] font-bold text-[#102D5F]">Orthopedic Surgery</h3>
                <p className="mt-[2px] text-[13px] text-[#64748B]">Surgical Orthopedic Care</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[74px] left-1/2 h-[54px] w-px -translate-x-1/2 bg-gradient-to-b from-[#2E91C8] to-[#CBE6F1]" />
        </div>

        {/* =========================================================
            MOBILE / TABLET
        ========================================================= */}
        <div className="relative mt-10 md:hidden">
          {/* BODY PATH */}
          <div className="absolute bottom-[30px] left-[25px] top-[28px] w-px bg-[#CDE6F1]">
            <span className="ortho-flow absolute left-[-1px] top-0 h-[70px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />
          </div>

          <div className="space-y-3">
            {careAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div key={area.title} data-aos="fade-up" data-aos-delay={index * 60} className="group relative flex items-center gap-4 py-2">
                  <div className="relative z-10 flex h-[51px] w-[51px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#F8FCFE] bg-[#102D5F] text-white shadow-[0_8px_22px_rgba(16,45,95,.13)] transition-all duration-300 group-hover:bg-[#2E91C8]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1 border-b border-[#DFECF2] py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">{area.no}</span>
                      <span className="h-px w-5 bg-[#B9DCEB]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[1px] text-[#94A3B8]">{area.subtitle}</span>
                    </div>

                    <h3 className="mt-1.5 text-[15px] font-bold text-[#102D5F] sm:text-[16px]">{area.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER LINE */}
        <div data-aos="fade-up" className="mx-auto mt-9 flex max-w-[700px] items-center gap-4 md:mt-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#BFDDEA]" />
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2E91C8] opacity-30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2E91C8]" />
            </span>
            <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[1.5px] text-[#94A3B8] sm:text-[11px]">Orthopedic Care Areas</span>
          </div>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#BFDDEA]" />
        </div>
      </div>

      <style>{`
        @keyframes orthoRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes jointPulse {
          0% { transform: scale(1); opacity: .55; }
          100% { transform: scale(2.1); opacity: 0; }
        }

        @keyframes connectorFlow {
          0% { transform: translateX(-25px); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(90px); opacity: 0; }
        }

        @keyframes mobileFlow {
          0% { transform: translateY(-70px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(330px); opacity: 0; }
        }

        .ortho-ring {
          animation: orthoRing 28s linear infinite;
        }

        .joint-pulse {
          animation: jointPulse 2.2s ease-out infinite;
        }

        .connector-light {
          animation: connectorFlow 3s ease-in-out infinite;
        }

        .ortho-flow {
          animation: mobileFlow 4s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ortho-ring,
          .joint-pulse,
          .connector-light,
          .ortho-flow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ================= CARE POINT ================= */

const CarePoint = ({ area, className, direction, delay }) => {
  const Icon = area.icon;

  return (
    <div data-aos={direction === "left" ? "fade-right" : "fade-left"} data-aos-delay={delay} className={`absolute z-20 w-[275px] ${className}`}>
      <div className={`group flex items-center gap-4 ${direction === "left" ? "justify-end text-right" : "text-left"}`}>
        {direction === "right" && (
          <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px] border border-[#D7EBF4] bg-white text-[#2E91C8] shadow-[0_10px_30px_rgba(16,45,95,.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#2E91C8] group-hover:bg-[#102D5F] group-hover:text-white">
            <Icon size={23} strokeWidth={1.7} />
          </span>
        )}

        <div>
          <div className={`mb-1 flex items-center gap-2 ${direction === "left" ? "justify-end" : ""}`}>
            <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">{area.no}</span>
            <span className="h-px w-5 bg-[#B8DBEA]" />
          </div>

          <h3 className="text-[16px] font-bold text-[#102D5F] lg:text-[17px]">{area.title}</h3>
          <p className="mt-1 text-[14px] leading-[1.6] text-[#64748B]">{area.subtitle}</p>
        </div>

        {direction === "left" && (
          <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px] border border-[#D7EBF4] bg-white text-[#2E91C8] shadow-[0_10px_30px_rgba(16,45,95,.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#2E91C8] group-hover:bg-[#102D5F] group-hover:text-white">
            <Icon size={23} strokeWidth={1.7} />
          </span>
        )}
      </div>
    </div>
  );
};

/* ================= CONNECTOR ================= */

const Connector = ({ className, reverse = false }) => (
  <div className={`absolute z-[5] h-[45px] ${className}`}>
    <svg viewBox="0 0 150 45" className={`h-full w-full overflow-visible ${reverse ? "-scale-x-100" : ""}`}>
      <path d="M0 7 C55 7 70 38 150 38" fill="none" stroke="#C4E1ED" strokeWidth="1.5" strokeDasharray="4 5" />
      <circle cx="150" cy="38" r="4" fill="#2E91C8" />
    </svg>

    <span className="connector-light absolute left-[35%] top-[29px] h-[5px] w-[5px] rounded-full bg-[#55B8E9] shadow-[0_0_10px_#55B8E9]" />
  </div>
);

/* ================= JOINT POINT ================= */

const JointPoint = ({ className }) => (
  <span className={`absolute z-20 flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#2E91C8] ${className}`}>
    <span className="joint-pulse absolute inset-[-3px] rounded-full border border-[#2E91C8]" />
    <span className="h-[4px] w-[4px] rounded-full bg-white" />
  </span>
);

export default OrthopedicKeyAreas;
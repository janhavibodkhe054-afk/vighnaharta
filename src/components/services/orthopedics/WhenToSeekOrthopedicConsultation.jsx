import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Bone,
  Activity,
  Move,
  ShieldPlus,
  CircleAlert,
  ArrowRight,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

const signs = [
  {
    no: "01",
    title: "Bone or Joint Injury",
    icon: Bone,
  },
  {
    no: "02",
    title: "Persistent Joint Discomfort",
    icon: Activity,
  },
  {
    no: "03",
    title: "Difficulty With Movement After an Injury",
    icon: Move,
  },
  {
    no: "04",
    title: "Suspected Fracture",
    icon: CircleAlert,
  },
  {
    no: "05",
    title: "Trauma-Related Orthopedic Concern",
    icon: ShieldPlus,
  },
];

const WhenToSeekOrthopedicConsultation = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] py-14 sm:py-16 lg:py-20">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[10%] h-[430px] w-[430px] rounded-full bg-[#55B8E9]/10 blur-[110px]" />

        <div className="absolute -right-[180px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#2E91C8]/[0.07] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#102D5F 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[800px] text-center">

          <div
            data-aos="fade-up"
            className="mb-4 inline-flex items-center gap-3"
          >
            <span className="h-px w-7 bg-[#2E91C8]" />

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[12px]">
              When to Seek Care
            </span>

            <span className="h-px w-7 bg-[#2E91C8]" />
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="70"
            className="text-[32px] font-bold leading-[1.13] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]"
          >
            When to Seek{" "}
            <span className="text-[#2E91C8]">
              Orthopedic Consultation
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="130"
            className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[1.8] text-[#64748B] sm:text-[17px] lg:text-[18px]"
          >
            Consider seeking orthopedic consultation when an injury or
            musculoskeletal concern affects movement or requires appropriate
            medical evaluation.
          </p>
        </div>

        {/* =====================================================
            DESKTOP CONSULTATION PATH
        ===================================================== */}
        <div className="relative mx-auto mt-12 hidden max-w-[1120px] md:block lg:mt-14">

          {/* MAIN PATH */}
          <div className="absolute left-[8%] right-[8%] top-[51px] h-px bg-gradient-to-r from-transparent via-[#B8DDEB] to-transparent" />

          {/* MOVING SIGNAL */}
          <div className="consult-signal absolute left-[8%] top-[49px] z-10 h-[5px] w-[70px] rounded-full bg-gradient-to-r from-transparent via-[#2E91C8] to-transparent shadow-[0_0_14px_rgba(46,145,200,.4)]" />

          <div className="relative grid grid-cols-5 gap-3 lg:gap-5">
            {signs.map((sign, index) => {
              const Icon = sign.icon;

              return (
                <div
                  key={sign.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="group relative text-center"
                >

                  {/* NODE */}
                  <div className="relative mx-auto flex h-[102px] w-[102px] items-center justify-center">

                    <span className="absolute inset-[8px] rounded-full border border-[#CDE6F0] transition-all duration-500 group-hover:scale-110 group-hover:border-[#2E91C8]/40" />

                    <span className="absolute inset-[17px] rounded-full bg-white shadow-[0_10px_35px_rgba(16,45,95,.10)] transition-all duration-300 group-hover:bg-[#102D5F]" />

                    <Icon
                      size={25}
                      strokeWidth={1.65}
                      className="relative z-10 text-[#2E91C8] transition-colors duration-300 group-hover:text-white"
                    />

                    {/* PULSE */}
                    <span className="consult-node-pulse absolute inset-[5px] rounded-full border border-[#2E91C8]/20" />

                    {/* PATH DOT */}
                    <span className="absolute -bottom-[3px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full border-2 border-[#F7FBFD] bg-[#2E91C8]" />
                  </div>

                  {/* NUMBER */}
                  <span className="mt-4 inline-block text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">
                    {sign.no}
                  </span>

                  {/* TITLE */}
                  <h3 className="mx-auto mt-2 max-w-[180px] text-[14px] font-bold leading-[1.55] text-[#102D5F] lg:text-[16px]">
                    {sign.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}
        <div className="relative mt-10 md:hidden">

          {/* VERTICAL PATH */}
          <div className="absolute bottom-[28px] left-[27px] top-[28px] w-px bg-[#C9E3EE]">

            <span className="consult-mobile-signal absolute left-[-1px] top-0 h-[65px] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#2E91C8] to-transparent" />

          </div>

          <div className="space-y-2">

            {signs.map((sign, index) => {
              const Icon = sign.icon;

              return (
                <div
                  key={sign.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="group relative flex items-center gap-4 py-2"
                >

                  {/* ICON */}
                  <div className="relative z-10 flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#F7FBFD] bg-white text-[#2E91C8] shadow-[0_7px_22px_rgba(16,45,95,.10)] transition-all duration-300 group-hover:bg-[#102D5F] group-hover:text-white">

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1 border-b border-[#DCEBF2] py-4">

                    <span className="text-[10px] font-bold tracking-[1.5px] text-[#2E91C8]">
                      {sign.no}
                    </span>

                    <h3 className="mt-1 text-[14px] font-bold leading-[1.55] text-[#102D5F] sm:text-[15px]">
                      {sign.title}
                    </h3>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CONSULTATION MESSAGE
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="mx-auto mt-12 max-w-[900px] overflow-hidden rounded-[22px] border border-[#D9EBF3] bg-white shadow-[0_15px_45px_rgba(16,45,95,.06)]"
        >

          <div className="grid sm:grid-cols-[auto_1fr_auto] sm:items-center">

            {/* ICON */}
            <div className="flex items-center justify-center bg-[#EAF7FC] px-5 py-5 sm:h-full sm:px-6">

              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#102D5F] text-white">

                <Stethoscope
                  size={21}
                  strokeWidth={1.7}
                />

              </div>

            </div>

            {/* TEXT */}
            <div className="px-5 py-5 text-center sm:px-6 sm:text-left">

              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#2E91C8] sm:text-[11px]">
                Medical Evaluation
              </span>

              <h3 className="mt-1.5 text-[16px] font-bold text-[#102D5F] sm:text-[17px]">
                Appropriate evaluation can help guide the next step in care.
              </h3>

              <p className="mt-1.5 text-[13px] leading-[1.7] text-[#64748B] sm:text-[14px]">
                The treating doctor can advise the appropriate care based on
                individual clinical requirements.
              </p>

            </div>

            {/* CTA */}
            <div className="px-5 pb-5 sm:px-6 sm:pb-0">

              <Link
                to="/contact"
                className="group flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#102D5F] px-5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E91C8] sm:text-[14px]"
              >
                <CalendarDays
                  size={15}
                  strokeWidth={1.9}
                />

                Book Consultation

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p
          data-aos="fade-up"
          className="mx-auto mt-5 max-w-[760px] text-center text-[12px] leading-[1.7] text-[#8494A6] sm:text-[13px]"
        >
          Consultation and treatment recommendations depend on individual
          clinical evaluation and medical requirements.
        </p>

      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}
      <style>{`

        @keyframes consultSignal {
          0% {
            left: 8%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            left: 86%;
            opacity: 0;
          }
        }

        @keyframes consultNodePulse {
          0% {
            transform: scale(.9);
            opacity: .45;
          }

          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        @keyframes consultMobileSignal {
          0% {
            transform: translateY(-60px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            transform: translateY(320px);
            opacity: 0;
          }
        }

        .consult-signal {
          animation: consultSignal 5.5s ease-in-out infinite;
        }

        .consult-node-pulse {
          animation: consultNodePulse 2.4s ease-out infinite;
        }

        .consult-mobile-signal {
          animation: consultMobileSignal 4.5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .consult-signal,
          .consult-node-pulse,
          .consult-mobile-signal {
            animation: none !important;
          }
        }

      `}</style>
    </section>
  );
};

export default WhenToSeekOrthopedicConsultation;
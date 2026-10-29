import React from "react";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  HeartPulse,
  ShieldCheck,
  CalendarCheck,
  MessageCircle,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

const AnorectalCTA = () => {
  const whatsappNumber = "917757004175";

  const whatsappMessage =
    "Hello Vighnaharta Hospital, I would like to book a consultation for Anorectal Surgeries.";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="anorectal-consultation"
      className="anorectal-cta relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* LIGHT SQUARE BACKGROUND */}

      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, #EAF2F8 1px, transparent 1px),
            linear-gradient(to bottom, #EAF2F8 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* BACKGROUND GLOWS */}

      <div className="anorectal-cta-glow pointer-events-none absolute -left-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#E2F4FC] blur-[110px]" />

      <div className="anorectal-cta-glow-two pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#EAF7FD] blur-[110px]" />

      {/* FLOATING DECORATIONS */}

      <Plus
        size={34}
        strokeWidth={1.3}
        className="anorectal-cta-float pointer-events-none absolute left-[5%] top-[20%] text-[#2E91C8]/15"
      />

      <Plus
        size={26}
        strokeWidth={1.3}
        className="anorectal-cta-float-two pointer-events-none absolute bottom-[15%] right-[7%] text-[#2E91C8]/15"
      />

      {/* MAIN CONTAINER */}

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

          {/* LEFT CONTENT */}

          <div className="max-w-[650px]">

            {/* EYEBROW */}

            <div className="mb-5 flex items-center gap-3">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D5EAF5] bg-[#EAF7FD] text-[#2E91C8]">
                <HeartPulse size={20} strokeWidth={1.8} />
              </span>

              <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[13px]">
                YOUR HEALTH MATTERS
              </span>

              <span className="h-px w-10 bg-[#2E91C8]/30" />

            </div>

            {/* HEADING */}

            <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-1px] text-[#102D5F] sm:text-[40px] lg:text-[48px]">
              Don't Ignore Persistent
              <span className="mt-1 block text-[#2E91C8]">
                Pain, Bleeding or Discomfort
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[600px] text-[15px] leading-[1.9] text-[#64748B] sm:text-[16px]">
              Persistent pain, rectal bleeding or discomfort during bowel
              movements should not be ignored. Timely medical consultation
              can help identify the condition and guide appropriate care.
            </p>

            {/* SUPPORT MESSAGE */}

            <div className="mt-7 flex items-start gap-3 rounded-[16px] border border-[#DDECF5] bg-[#F4FAFE] p-4 sm:p-5">

              <ShieldCheck
                size={23}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-[#2E91C8]"
              />

              <p className="text-[14px] font-medium leading-[1.8] text-[#294766]">
                Consult Vighnaharta Hospital for clinical evaluation
                and individualized treatment guidance.
              </p>

            </div>

            {/* CTA BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#2E91C8] px-7 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(46,145,200,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#102D5F]"
              >
                <MessageCircle size={18} />

                Book an Appointment

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="tel:+917757004175"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#D5E7F1] bg-white px-6 text-[14px] font-semibold text-[#102D5F] transition-all duration-300 hover:border-[#2E91C8] hover:bg-[#F3FAFE]"
              >
                <Phone size={17} className="text-[#2E91C8]" />
                Call Hospital
              </a>

            </div>

          </div>

          {/* RIGHT CONTACT PANEL */}

          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">

            {/* DECORATIVE SQUARES */}

            <div className="anorectal-cta-square-one pointer-events-none absolute -right-5 -top-5 h-36 w-36 rounded-[26px] bg-[#E2F3FC] sm:-right-8 sm:-top-8" />

            <div className="anorectal-cta-square-two pointer-events-none absolute -bottom-6 -left-5 h-40 w-40 rounded-[28px] bg-[#DDF1FA] sm:-bottom-8 sm:-left-8" />

            {/* MAIN CONTACT CARD */}

            <div className="relative overflow-hidden rounded-[28px] border border-[#DCECF5] bg-white p-6 shadow-[0_25px_70px_rgba(16,45,95,0.10)] sm:p-9">

              {/* TOP DECORATIVE LINE */}

              <div className="absolute left-0 top-0 h-[5px] w-full bg-gradient-to-r from-[#102D5F] via-[#2E91C8] to-[#55B8E9]" />

              {/* CARD HEADER */}

              <div className="mb-8 flex items-center justify-between">

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#2E91C8]">
                    CONTACT INFORMATION
                  </span>

                  <h3 className="mt-2 text-[25px] font-bold text-[#102D5F] sm:text-[29px]">
                    Visit or Contact Us
                  </h3>
                </div>

                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[18px] bg-[#EAF7FD] text-[#2E91C8]">
                  <CalendarCheck size={27} strokeWidth={1.7} />
                </div>

              </div>

              {/* LOCATION */}

              <div className="group flex items-start gap-4 rounded-[18px] border border-[#E7F0F6] bg-[#F8FCFF] p-5 transition-all duration-300 hover:border-[#B8DFF2] hover:bg-[#F0F9FE]">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-white text-[#2E91C8] shadow-sm">
                  <MapPin size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[1px] text-[#64748B]">
                    Hospital Location
                  </p>

                  <p className="mt-2 text-[16px] font-bold leading-[1.7] text-[#102D5F]">
                    Alephata, Taluka Junnar,
                    <span className="block">
                      Pune, Maharashtra
                    </span>
                  </p>
                </div>

              </div>

              {/* CONTACT NUMBER */}

              <div className="group mt-4 flex items-start gap-4 rounded-[18px] border border-[#E7F0F6] bg-[#F8FCFF] p-5 transition-all duration-300 hover:border-[#B8DFF2] hover:bg-[#F0F9FE]">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-white text-[#2E91C8] shadow-sm">
                  <Phone size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[1px] text-[#64748B]">
                    Contact Number
                  </p>

                  <a
                    href="tel:+917757004175"
                    className="mt-2 inline-block text-[20px] font-bold text-[#102D5F] transition-colors hover:text-[#2E91C8] sm:text-[23px]"
                  >
                    +91 7757004175
                  </a>
                </div>

              </div>

              {/* CARD FOOTER */}

              <div className="mt-7 flex items-center gap-3 border-t border-[#E7F0F6] pt-6">

                <span className="anorectal-cta-pulse flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF7FD] text-[#2E91C8]">
                  <HeartPulse size={20} />
                </span>

                <p className="text-[13px] font-medium leading-[1.7] text-[#64748B]">
                  Vighnaharta Hospital
                  <span className="block font-semibold text-[#102D5F]">
                    Multispeciality Healthcare
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CSS ANIMATIONS */}

      <style>{`

        @keyframes anorectalCTAGlow {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(90px, 45px);
          }
        }

        .anorectal-cta-glow {
          animation: anorectalCTAGlow 15s ease-in-out infinite;
        }

        .anorectal-cta-glow-two {
          animation: anorectalCTAGlow 18s ease-in-out infinite reverse;
        }

        @keyframes anorectalCTAFloating {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        .anorectal-cta-float {
          animation: anorectalCTAFloating 7s ease-in-out infinite;
        }

        .anorectal-cta-float-two {
          animation: anorectalCTAFloating 9s ease-in-out infinite reverse;
        }

        @keyframes anorectalCTASquare {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(7deg);
          }
        }

        .anorectal-cta-square-one {
          animation: anorectalCTASquare 8s ease-in-out infinite;
        }

        .anorectal-cta-square-two {
          animation: anorectalCTASquare 10s ease-in-out infinite reverse;
        }

        @keyframes anorectalCTAPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(46, 145, 200, 0.15);
          }

          50% {
            box-shadow: 0 0 0 12px rgba(46, 145, 200, 0);
          }
        }

        .anorectal-cta-pulse {
          animation: anorectalCTAPulse 3.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .anorectal-cta *,
          .anorectal-cta *::before,
          .anorectal-cta *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }

      `}</style>
    </section>
  );
};

export default AnorectalCTA;
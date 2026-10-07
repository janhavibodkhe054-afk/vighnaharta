import React, { useState } from "react";

import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

const departments = [
  "Orthopedics & Trauma",
  "Spine Care",
  "General & Advanced Surgery",
  "General Medicine",
  "Urology",
  "Gynecology & Women's Health",
];

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    department: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this with your backend / API later.
    console.log("Appointment Request:", formData);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#F7FBFD] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-[160px] top-[12%] h-[320px] w-[320px] rounded-full bg-[#DFF3FB]/70 blur-[90px] lg:h-[470px] lg:w-[470px] lg:blur-[120px]" />

      <div className="pointer-events-none absolute -right-[180px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-[#E7F6FB] blur-[100px] lg:h-[500px] lg:w-[500px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#102D5F_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================== */}

          <div className="contact-left">
            {/* SECTION LABEL */}

            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-[2px] w-7 rounded-full bg-[#2E91C8] sm:w-9" />

              <span className="text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px] sm:tracking-[2px]">
                Get In Touch
              </span>
            </div>

            {/* HEADING */}

            <h2 className="m-0 max-w-[560px] text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[43px] xl:text-[46px]">
              Contact{" "}
              <span className="text-[#2E91C8]">
                Vighnaharta Hospital
              </span>
            </h2>

            <p className="m-0 mt-3 max-w-[520px] text-[13px] leading-[1.7] text-[#6B7D8C] sm:mt-4 sm:text-[15px]">
              Reach us for appointments, hospital information or medical
              assistance. Our hospital is available 24 hours, Monday to Sunday.
            </p>

            {/* =================================================
                CONTACT LIST
            ================================================== */}

            <div className="mt-6 overflow-hidden rounded-[18px] border border-[#DCEAF0] bg-white shadow-[0_14px_40px_rgba(16,45,95,0.055)] sm:mt-7 sm:rounded-[22px] lg:mt-8">
              <ContactRow
                icon={MapPin}
                label="Hospital Address"
              >
                <p>
                  Near Balaji Petrol Pump, Nagar Kalyan Road, Alephata,
                  Taluka Junnar, Pune – 412411, Maharashtra
                </p>
              </ContactRow>

              <ContactRow
                icon={Phone}
                label="Phone"
              >
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918042756213"
                    className="w-fit transition-colors duration-300 hover:text-[#2E91C8]"
                  >
                    +91 8042756213
                  </a>

                  <a
                    href="tel:+919766999474"
                    className="w-fit transition-colors duration-300 hover:text-[#2E91C8]"
                  >
                    +91 9766999474
                  </a>
                </div>
              </ContactRow>

              <ContactRow
                icon={Mail}
                label="Email"
              >
                <a
                  href="mailto:dr.nagesh111@gmail.com"
                  className="break-all transition-colors duration-300 hover:text-[#2E91C8]"
                >
                  dr.nagesh111@gmail.com
                </a>
              </ContactRow>

              <ContactRow
                icon={Clock3}
                label="Hospital Hours"
                last
              >
                <div>
                  <span className="font-bold text-[#102D5F]">
                    24 Hours
                  </span>

                  <span className="mx-1.5 text-[#B1BEC7]">
                    |
                  </span>

                  <span>Monday–Sunday</span>
                </div>
              </ContactRow>
            </div>

            {/* =================================================
                EMERGENCY BLOCK
            ================================================== */}

            <div className="emergency-card relative mt-4 overflow-hidden rounded-[18px] bg-[#102D5F] p-4 shadow-[0_16px_40px_rgba(16,45,95,0.16)] min-[360px]:p-5 sm:mt-5 sm:rounded-[22px] sm:p-6">
              <div className="pointer-events-none absolute -right-[60px] -top-[70px] h-[170px] w-[170px] rounded-full bg-[#55B8E9]/20 blur-[40px]" />

              <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:15px_15px]" />

              <div className="relative z-10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/10 bg-white/10 text-[#79D5F6] sm:h-11 sm:w-11">
                  <AlertTriangle
                    className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                    strokeWidth={1.8}
                  />
                </div>

                <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#70D1F4] sm:text-[15px]">
                  Medical Emergency?
                </span>

                <h3 className="m-0 mt-1 text-[20px] font-bold leading-[1.3] text-white sm:text-[23px]">
                  Please don't wait for an appointment request.
                </h3>

                <p className="m-0 mt-2 max-w-[430px] text-[13px] leading-[1.7] text-white/60 sm:text-[15px]">
                  For emergency cases, call the hospital directly instead of
                  using the appointment form.
                </p>

                <a
                  href="tel:+919766999474"
                  className="group mt-4 inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-[#102D5F] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 min-[400px]:w-auto sm:min-h-[48px] sm:px-6 sm:text-[15px] lg:hover:-translate-y-0.5 lg:hover:bg-[#EAF7FC]"
                >
                  <Phone
                    className="h-4 w-4 text-[#2E91C8]"
                    strokeWidth={1.8}
                  />

                  Call +91 9766999474

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — APPOINTMENT FORM
          ================================================== */}

          <div className="contact-form-reveal relative overflow-hidden rounded-[20px] border border-[#DCEBF1] bg-white shadow-[0_24px_65px_rgba(16,45,95,0.09)] sm:rounded-[24px] lg:rounded-[26px] xl:rounded-[28px]">
            {/* TOP ACCENT */}

            <div className="absolute left-0 right-0 top-0 h-[4px] bg-gradient-to-r from-[#102D5F] via-[#2E91C8] to-[#69CBF2]" />

            {/* GLOW */}

            <div className="pointer-events-none absolute -right-[80px] -top-[90px] h-[220px] w-[220px] rounded-full bg-[#DFF4FC] blur-[55px]" />

            <div className="relative z-10 p-4 min-[360px]:p-5 sm:p-6 md:p-7 lg:p-7 xl:p-8">
              {/* =================================================
                  FORM HEADER
              ================================================== */}

              <div className="mb-5 flex items-start gap-3 sm:mb-6 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#EAF7FC] text-[#2E91C8] sm:h-12 sm:w-12 sm:rounded-[14px]">
                  <CalendarDays
                    className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.3px] text-[#2E91C8] sm:text-[15px]">
                    Appointment Request
                  </span>

                  <h3 className="m-0 mt-1 text-[22px] font-bold leading-[1.25] tracking-[-0.4px] text-[#102D5F] sm:text-[26px] xl:text-[28px]">
                    Request an Appointment
                  </h3>

                  <p className="m-0 mt-1 text-[13px] leading-[1.7] text-[#7A8B98] sm:text-[15px]">
                    Fill in your details and submit your appointment request.
                  </p>
                </div>
              </div>

              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4"
              >
                {/* PATIENT NAME */}

                <FormField
                  label="Patient Name"
                  icon={UserRound}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter patient name"
                    required
                    className={inputClasses}
                  />
                </FormField>

                {/* MOBILE */}

                <FormField
                  label="Mobile Number"
                  icon={Phone}
                >
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                    className={inputClasses}
                  />
                </FormField>

                {/* DEPARTMENT */}

                <FormField
                  label="Select Department"
                  icon={Stethoscope}
                >
                  <div className="relative">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} appearance-none pr-10`}
                    >
                      <option value="">
                        Choose department
                      </option>

                      {departments.map((department) => (
                        <option
                          key={department}
                          value={department}
                        >
                          {department}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8193A1]"
                      strokeWidth={1.7}
                    />
                  </div>
                </FormField>

                {/* DATE */}

                <FormField
                  label="Preferred Date"
                  icon={CalendarDays}
                >
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </FormField>

                {/* MESSAGE */}

                <div className="sm:col-span-2">
                  <FormField
                    label="Message / Concern"
                    icon={MessageSquareText}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly tell us how we can help..."
                      rows={4}
                      className={`${inputClasses} min-h-[105px] resize-none py-3 sm:min-h-[115px]`}
                    />
                  </FormField>
                </div>

                {/* =================================================
                    PRIVACY NOTE
                ================================================== */}

                <div className="flex items-start gap-2.5 rounded-[13px] border border-[#DDECF2] bg-[#F7FBFD] px-3.5 py-3 sm:col-span-2 sm:rounded-[15px] sm:px-4">
                  <ShieldCheck
                    className="mt-[2px] h-4 w-4 shrink-0 text-[#2E91C8]"
                    strokeWidth={1.7}
                  />

                  <p className="m-0 text-[13px] leading-[1.7] text-[#718391] sm:text-[15px]">
                    By submitting this form, you agree to share the information
                    entered above with Vighnaharta Hospital for the purpose of
                    responding to your appointment request.
                  </p>
                </div>

                {/* =================================================
                    SUBMIT
                ================================================== */}

                <div className="pt-0.5 sm:col-span-2">
                  <button
                    type="submit"
                    className="group flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-[#102D5F] px-5 py-3 text-[13px] font-bold text-white shadow-[0_10px_28px_rgba(16,45,95,0.18)] transition-all duration-300 sm:min-h-[52px] sm:text-[15px] lg:hover:-translate-y-0.5 lg:hover:bg-[#2E91C8] lg:hover:shadow-[0_14px_32px_rgba(46,145,200,0.22)]"
                  >
                    Request Appointment

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.8}
                    />
                  </button>
                </div>
              </form>

              {/* =================================================
                  EMERGENCY FORM WARNING
              ================================================== */}

              <div className="mt-4 flex items-start gap-2.5 border-t border-[#E4EEF2] pt-4">
                <AlertTriangle
                  className="mt-[2px] h-4 w-4 shrink-0 text-[#C87926]"
                  strokeWidth={1.8}
                />

                <p className="m-0 text-[13px] leading-[1.7] text-[#7A8791] sm:text-[15px]">
                  <strong className="font-bold text-[#102D5F]">
                    For emergencies:
                  </strong>{" "}
                  Do not use this form. Please call{" "}
                  <a
                    href="tel:+919766999474"
                    className="font-bold text-[#2E91C8] transition-colors hover:text-[#102D5F]"
                  >
                    +91 9766999474
                  </a>{" "}
                  directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes contactLeftReveal {
          from {
            opacity: 0;
            transform: translate3d(-20px, 20px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes contactFormReveal {
          from {
            opacity: 0;
            transform: translate3d(20px, 24px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes emergencyGlow {
          0%,
          100% {
            box-shadow: 0 16px 40px rgba(16, 45, 95, 0.16);
          }

          50% {
            box-shadow: 0 18px 48px rgba(46, 145, 200, 0.20);
          }
        }

        .contact-left {
          animation:
            contactLeftReveal
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .contact-form-reveal {
          animation:
            contactFormReveal
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.1s
            both;
        }

        .emergency-card {
          animation:
            emergencyGlow
            4s
            ease-in-out
            infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-left,
          .contact-form-reveal,
          .emergency-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* =========================================================
   CONTACT ROW
========================================================= */

const ContactRow = ({
  icon: Icon,
  label,
  children,
  last = false,
}) => {
  return (
    <div
      className={`group flex items-start gap-3 px-4 py-4 transition-colors duration-300 min-[360px]:gap-3.5 min-[360px]:px-5 sm:gap-4 sm:px-6 sm:py-5 lg:hover:bg-[#F8FCFE] ${
        !last ? "border-b border-[#E7EFF3]" : ""
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#EAF7FC] text-[#2E91C8] transition-all duration-300 sm:h-11 sm:w-11 lg:group-hover:bg-[#102D5F] lg:group-hover:text-white">
        <Icon
          className="h-[18px] w-[18px] sm:h-[19px] sm:w-[19px]"
          strokeWidth={1.7}
        />
      </div>

      <div className="min-w-0">
        <span className="mb-1 block text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#91A2AE] sm:text-[15px]">
          {label}
        </span>

        <div className="text-[13px] font-medium leading-[1.7] text-[#52697A] sm:text-[15px] [&_p]:m-0">
          {children}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   FORM FIELD
========================================================= */

const FormField = ({
  label,
  icon: Icon,
  children,
}) => {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 flex items-center gap-1.5 text-[13px] font-bold leading-[1.7] text-[#102D5F] sm:mb-2 sm:text-[15px]">
        <Icon
          className="h-4 w-4 shrink-0 text-[#2E91C8]"
          strokeWidth={1.8}
        />

        {label}
      </span>

      {children}
    </label>
  );
};

/* =========================================================
   INPUT STYLES
========================================================= */

const inputClasses = `
  w-full
  min-h-[46px]

  rounded-[12px]

  border
  border-[#D9E7ED]

  bg-[#FBFDFE]

  px-3.5

  text-[13px]
  font-medium
  leading-[1.7]
  text-[#102D5F]

  outline-none

  transition-all
  duration-300

  placeholder:text-[#A1AFB8]
  placeholder:font-normal

  focus:border-[#2E91C8]
  focus:bg-white
  focus:ring-[3px]
  focus:ring-[#2E91C8]/10

  sm:min-h-[50px]
  sm:rounded-[14px]
  sm:px-4
  sm:text-[15px]
`;

export default ContactDetails;
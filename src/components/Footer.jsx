import React from "react";
import { NavLink } from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  HeartPulse,
  ChevronRight,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  /* =========================================================
     QUICK LINKS
  ========================================================= */

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Doctor Details", path: "/doctor" },
    { name: "Services", path: "/services" },
    { name: "Hospital Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      name: "Orthopedics & Trauma",
      path: "/services/orthopedics-trauma",
    },
    {
      name: "Spine Care",
      path: "/services/spine-care",
    },
    {
      name: "General Medicine",
      path: "/services/general-medicine",
    },
    {
      name: "General & Advanced Surgery",
      path: "/services/general-surgery",
    },
    {
      name: "Urology",
      path: "/services/urology",
    },
    {
      name: "Gynecology & Women's Health",
      path: "/services/gynecology",
    },
    {
      name: "EECP Treatment",
      path: "/services/eecp-treatment",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071B3A] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -right-[120px] -top-[100px] h-[240px] w-[240px] rounded-full bg-[#2E91C8]/10 sm:-right-[150px] sm:h-[300px] sm:w-[300px] lg:-right-24 lg:-top-24 lg:h-[320px] lg:w-[320px]" />

      <div className="pointer-events-none absolute -bottom-[130px] -left-[100px] h-[260px] w-[260px] rounded-full bg-[#55B8E9]/5 sm:h-[320px] sm:w-[320px] lg:-bottom-40 lg:-left-32 lg:h-[380px] lg:w-[380px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:22px_22px] lg:[background-size:24px_24px]" />

      {/* =====================================================
          TOP CTA
      ====================================================== */}

      <div className="relative z-10">
        <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
          <div className="relative -mb-[52px] overflow-hidden rounded-[18px] bg-gradient-to-r from-[#238BC4] to-[#55B8E9] px-4 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] min-[360px]:px-5 min-[360px]:py-6 sm:-mb-[60px] sm:rounded-[22px] sm:px-6 sm:py-7 md:px-7 lg:-mb-[66px] lg:rounded-[24px] lg:px-8 xl:-mb-[70px] xl:px-10 xl:py-8">
            {/* DECORATION */}

            <div className="pointer-events-none absolute -right-[65px] -top-[80px] h-[180px] w-[180px] rounded-full border-[28px] border-white/10 sm:h-[210px] sm:w-[210px] sm:border-[32px] lg:h-[230px] lg:w-[230px] lg:border-[35px]" />

            <div className="pointer-events-none absolute -bottom-[90px] right-[5%] h-[150px] w-[150px] rounded-full bg-white/5 sm:right-[15%] lg:-bottom-24 lg:right-[20%] lg:h-[180px] lg:w-[180px]" />

            <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              {/* CTA LEFT */}

              <div className="flex min-w-0 items-start gap-3 min-[360px]:gap-4 sm:items-center">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[13px] bg-white/15 backdrop-blur-sm min-[360px]:h-[48px] min-[360px]:w-[48px] sm:h-[54px] sm:w-[54px] sm:rounded-2xl xl:h-[60px] xl:w-[60px]">
                  <HeartPulse
                    className="h-[21px] w-[21px] min-[360px]:h-[23px] min-[360px]:w-[23px] sm:h-[26px] sm:w-[26px] xl:h-7 xl:w-7"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[13px] font-semibold uppercase leading-[1.7] tracking-[1.4px] text-white/75 sm:text-[15px] sm:tracking-[1.7px]">
                    We're Here For You
                  </p>

                  <h2 className="m-0 max-w-[650px] text-[20px] font-bold leading-[1.3] text-white min-[360px]:text-[21px] sm:text-[23px] md:text-[24px] xl:text-[28px]">
                    Need Medical Assistance or Specialist Consultation?
                  </h2>
                </div>
              </div>

              {/* CTA BUTTONS */}

              <div className="flex w-full shrink-0 flex-col gap-2.5 min-[430px]:flex-row lg:w-auto lg:gap-3">
                <a
                  href="tel:+919766999474"
                  className="group flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 text-[13px] font-semibold text-white backdrop-blur-sm transition-all duration-300 sm:min-h-[48px] sm:px-5 sm:text-[15px] lg:flex-none lg:min-h-[50px] lg:hover:bg-white lg:hover:text-[#102D5F]"
                >
                  <Phone className="h-4 w-4" />
                  Emergency Call
                </a>

                <NavLink
                  to="/contact"
                  className="group flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 text-[13px] font-semibold text-[#102D5F] shadow-lg transition-all duration-300 sm:min-h-[48px] sm:px-5 sm:text-[15px] lg:flex-none lg:min-h-[50px] lg:px-6 lg:hover:-translate-y-[2px] lg:hover:shadow-xl"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative z-[2] pt-[92px] min-[360px]:pt-[100px] sm:pt-[110px] lg:pt-[118px] xl:pt-[125px]">
        <div className="mx-auto w-full max-w-[1380px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
          {/* =================================================
              FOOTER COLUMNS
          ================================================== */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 pb-9 min-[430px]:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:pb-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 lg:pb-12 xl:grid-cols-[1.4fr_0.8fr_1.1fr_1.25fr] xl:gap-8 xl:pb-14 2xl:pb-16">
            {/* =================================================
                COLUMN 1 — HOSPITAL
            ================================================== */}

            <div className="min-w-0 min-[430px]:col-span-2 lg:col-span-1 lg:pr-3 xl:pr-6">
              {/* LOGO */}

              <NavLink
                to="/"
                aria-label="Vighnaharta Hospital Home"
                className="group inline-flex max-w-full items-center gap-2.5 min-[360px]:gap-3"
              >
                <img
                  src="/logo.jpg"
                  alt="Vighnaharta Hospital Logo"
                  className="block h-[48px] w-[48px] shrink-0 rounded-full bg-white object-contain transition-transform duration-300 min-[360px]:h-[52px] min-[360px]:w-[52px] sm:h-[58px] sm:w-[58px] xl:h-[64px] xl:w-[64px] lg:group-hover:scale-[1.04]"
                />

                <div className="flex min-w-0 flex-col">
                  <span className="whitespace-nowrap text-[17px] font-bold leading-[1.15] tracking-[-0.3px] text-white sm:text-[19px] xl:text-[21px]">
                    Vighnaharta Hospital
                  </span>

                  <span className="mt-1 text-[13px] font-semibold uppercase leading-[1.7] tracking-[1.2px] text-[#75C6EB] sm:mt-1.5 sm:text-[15px] sm:tracking-[1.5px]">
                    Multispeciality Hospital
                  </span>
                </div>
              </NavLink>

              {/* DESCRIPTION */}

              <p className="mt-4 max-w-[420px] text-[13px] font-normal leading-[1.7] text-[#AAB9CF] sm:mt-5 sm:text-[15px] xl:mt-6 xl:max-w-[390px]">
                Committed to providing compassionate, reliable and advanced
                multispeciality healthcare to patients and families in Alephata,
                Junnar and surrounding areas.
              </p>

              {/* SOCIAL MEDIA */}

              <div className="mt-4 flex items-center gap-2 sm:mt-5 sm:gap-2.5 xl:mt-6">
                <SocialIcon
                  href="https://www.facebook.com/people/Vighnaharta-Hospital/100068361038270/"
                  label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<FaFacebookF size={13} />}
                />

                <SocialIcon
                  href="https://www.instagram.com/_vighnaharta_hospital_/"
                  label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<FaInstagram size={14} />}
                />

                
              </div>
            </div>

            {/* =================================================
                QUICK LINKS
            ================================================== */}

            <div className="min-w-0">
              <FooterHeading>Quick Links</FooterHeading>

              <div className="mt-4 flex flex-col gap-[10px] sm:mt-5 sm:gap-3 xl:mt-6 xl:gap-[14px]">
                {quickLinks.map((link) => (
                  <FooterLink key={link.name} to={link.path}>
                    {link.name}
                  </FooterLink>
                ))}
              </div>
            </div>

            {/* =================================================
                OUR SPECIALITIES — INDIVIDUAL SERVICE PAGES
            ================================================== */}

            <div className="min-w-0">
              <FooterHeading>Services</FooterHeading>

              <div className="mt-4 flex flex-col gap-[10px] sm:mt-5 sm:gap-3 xl:mt-6 xl:gap-[14px]">
                {services.map((item) => (
                  <FooterLink key={item.name} to={item.path}>
                    {item.name}
                  </FooterLink>
                ))}
              </div>
            </div>

            {/* =================================================
                CONTACT
            ================================================== */}

            <div className="min-w-0 min-[430px]:col-span-2 lg:col-span-1">
              <FooterHeading>Contact Us</FooterHeading>

              <div className="mt-4 flex flex-col gap-4 sm:mt-5 xl:mt-6 xl:gap-5">
                {/* ADDRESS */}

                <ContactItem icon={<MapPin size={16} />} label="Our Location">
                  <p className="m-0 max-w-[380px] text-[13px] leading-[1.7] text-[#B5C2D4] sm:text-[15px]">
                    Near Balaji Petrol Pump, Nagar Kalyan Road, Alephata, Tal.
                    Junnar, Pune – 412411
                  </p>
                </ContactItem>

                {/* PHONE */}

                <ContactItem icon={<Phone size={16} />} label="Call Us">
                  <a
                    href="tel:+919766999474"
                    className="block text-[13px] font-medium leading-[1.7] text-[#B5C2D4] transition-colors duration-300 hover:text-[#55B8E9] sm:text-[15px]"
                  >
                    +91 9766999474
                  </a>

                  <a
                    href="tel:+918042756213"
                    className="mt-1 block text-[13px] font-medium leading-[1.7] text-[#B5C2D4] transition-colors duration-300 hover:text-[#55B8E9] sm:text-[15px]"
                  >
                    +91 8042756213
                  </a>
                </ContactItem>

                {/* EMAIL */}

                <ContactItem icon={<Mail size={16} />} label="Email Us">
                  <a
                    href="mailto:dr.nagesh111@gmail.com"
                    className="block max-w-full break-all text-[13px] font-medium leading-[1.7] text-[#B5C2D4] transition-colors duration-300 hover:text-[#55B8E9] sm:text-[15px]"
                  >
                    dr.nagesh111@gmail.com
                  </a>
                </ContactItem>
              </div>
            </div>
          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div className="h-px w-full bg-white/[0.08]" />

          {/* =================================================
              BOTTOM FOOTER
          ================================================== */}

          <div className="flex flex-col items-center justify-between gap-3 py-5 text-center md:flex-row md:gap-5 md:py-6 md:text-left">
            {/* COPYRIGHT */}

            <p className="m-0 text-[13px] leading-[1.7] text-[#7186A2] sm:text-[15px]">
              © {currentYear} Vighnaharta Hospital, Alephata. All Rights
              Reserved.
            </p>

            {/* DESIGNED & DEVELOPED BY */}

            <p className="m-0 text-[13px] leading-[1.7] text-[#7186A2] sm:text-[15px]">
              Designed & Developed By{" "}
              <a
                href="https://www.hashgridtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HashGrid Technologies Pvt. Ltd."
                className="font-semibold text-[#55B8E9] transition-colors duration-300 hover:text-white"
              >
                HashGrid Technologies Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =========================================================
   FOOTER HEADING
========================================================= */

const FooterHeading = ({ children }) => {
  return (
    <div>
      <h3 className="m-0 text-[13px] font-semibold leading-[1.7] text-white sm:text-[15px]">
        {children}
      </h3>

      <div className="mt-2.5 flex items-center gap-1 sm:mt-3">
        <span className="h-[2px] w-6 rounded-full bg-[#55B8E9] sm:w-7" />

        <span className="h-[2px] w-2 rounded-full bg-[#55B8E9]/40" />
      </div>
    </div>
  );
};

/* =========================================================
   FOOTER LINK
========================================================= */

const FooterLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="group flex w-fit max-w-full items-start gap-1.5 text-[13px] font-medium leading-[1.7] text-[#AAB9CF] transition-all duration-300 sm:gap-2 sm:text-[15px] lg:hover:translate-x-1 lg:hover:text-white"
    >
      <ChevronRight className="mt-[4px] h-[13px] w-[13px] shrink-0 text-[#3FA9DC] transition-transform duration-300 group-hover:translate-x-0.5 sm:mt-[5px]" />

      <span>{children}</span>
    </NavLink>
  );
};

/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({ icon, label, children }) => {
  return (
    <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2E91C8]/10 text-[#55B8E9]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="mb-1 text-[13px] font-semibold uppercase leading-[1.7] tracking-[0.8px] text-[#7086A4] sm:text-[15px] sm:tracking-[1px]">
          {label}
        </p>

        {children}
      </div>
    </div>
  );
};

/* =========================================================
   SOCIAL ICON
========================================================= */

const SocialIcon = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#B9C6D8] transition-all duration-300 sm:h-[38px] sm:w-[38px] lg:hover:-translate-y-1 lg:hover:border-[#2E91C8] lg:hover:bg-[#2E91C8] lg:hover:text-white"
    >
      {icon}
    </a>
  );
};

export default Footer;

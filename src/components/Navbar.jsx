import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

/* =========================================================
   NAVIGATION DATA
========================================================= */

const mainLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // { name: "Doctor Details", path: "/doctor" },
];

const afterServiceLinks = [
  { name: "Hospital Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

/* =========================================================
   SERVICES — NEW SERVICES FIRST
========================================================= */

const serviceLinks = [
  // NEW SERVICES

  {
    name: "Cardiac Diagnostic Services",
    path: "/services/cardiac-diagnostic-services",
  },
  {
    name: "Oncology Treatment",
    path: "/services/oncology-treatment",
  },
  {
    name: "Preventive Cardiology",
    path: "/services/preventive-cardiology",
  },
  {
    name: "Emergency Cardiac Services",
    path: "/services/emergency-cardiac-services",
  },
  {
    name: "Neurospine Care",
    path: "/services/neurospine-care",
  },
  {
    name: "Dermatology Services",
    path: "/services/dermatology-services",
  },

  // NEWLY ADDED
  {
    name: "Anorectal Surgeries",
    path: "/services/anorectal-surgeries",
  },

  // EXISTING SERVICES

  {
    name: "Orthopedics & Trauma Care",
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
const extraServiceLinks = [
  {
    name: "Treatments & Procedures",
    path: "/services/treatments",
  },
];

/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = "917757004175";

const WHATSAPP_MESSAGE =
  "Hello Vighnaharta Hospital, I would like to book an appointment.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();
  const servicesRef = useRef(null);

  const servicesActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");

  /* CLOSE MENUS ON ROUTE CHANGE */

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  /* MOBILE BODY LOCK */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* OUTSIDE CLICK */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-white font-sans">

        {/* =====================================================
            TOP BAR
        ====================================================== */}

        <div className="hidden bg-[#102D5F] text-white md:block">
          <div className="mx-auto flex min-h-[42px] max-w-[1380px] items-center justify-between px-6 lg:px-8">

            <div className="flex items-center gap-5 lg:gap-8">

              <a
                href="tel:+917757004175"
                className="group flex items-center gap-2 text-[13px] font-medium leading-[1.7] transition sm:text-[15px]"
              >
                <Phone
                  size={14}
                  strokeWidth={2.2}
                  className="shrink-0 text-[#55B8E9]"
                />

                <span>
                  <span className="hidden lg:inline">
                    24×7 Emergency:{" "}
                  </span>

                  <span className="transition-colors duration-300 group-hover:text-[#55B8E9]">
                    +91 7757004175
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-2 text-[13px] font-medium leading-[1.7] sm:text-[15px]">
                <MapPin
                  size={15}
                  strokeWidth={2.2}
                  className="shrink-0 text-[#55B8E9]"
                />

                <span>Alephata, Junnar, Pune</span>
              </div>

            </div>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/people/Vighnaharta-Hospital/100068361038270/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#55B8E9]"
              >
                <FaFacebookF size={12} />
              </a>

              <a
                href="https://www.instagram.com/_vighnaharta_hospital_/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#55B8E9]"
              >
                <FaInstagram size={13} />
              </a>

            
            </div>

          </div>
        </div>

        {/* =====================================================
            MAIN NAVBAR
        ====================================================== */}

        <nav className="border-b border-slate-100 bg-white shadow-[0_6px_25px_rgba(15,45,95,0.06)]">
          <div className="mx-auto flex h-[68px] max-w-[1380px] items-center justify-between px-3 min-[360px]:px-4 sm:h-[76px] sm:px-6 lg:h-[86px] lg:px-8 xl:h-[90px]">

            {/* LOGO */}

            <NavLink
              to="/"
              aria-label="Vighnaharta Hospital Home"
              className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
            >
              <img
                src="/logo.jpg"
                alt="Vighnaharta Hospital Logo"
                className="h-[44px] w-[44px] shrink-0 rounded-full object-contain transition-transform duration-300 group-hover:scale-[1.03] min-[360px]:h-[46px] min-[360px]:w-[46px] sm:h-[54px] sm:w-[54px] lg:h-[62px] lg:w-[62px]"
              />

              <div className="flex min-w-0 flex-col">
                <span className="whitespace-nowrap text-[14px] font-bold leading-[1.1] tracking-[-0.3px] text-[#102D5F] min-[360px]:text-[15px] sm:text-[18px] lg:text-[20px]">
                  Vighnaharta Hospital
                </span>

                <span className="mt-1 hidden whitespace-nowrap text-[13px] font-semibold uppercase leading-[1.7] tracking-[1px] text-[#2E91C8] sm:block sm:text-[15px]">
                  Multispeciality Hospital
                </span>
              </div>
            </NavLink>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <div className="hidden items-center xl:flex">
              <div className="flex items-center gap-[21px] 2xl:gap-[27px]">

                {mainLinks.map((item) => (
                  <DesktopLink
                    key={item.name}
                    item={item}
                  />
                ))}

                {/* =============================================
                    SERVICES DROPDOWN
                ============================================== */}

                <div
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex h-[90px] items-center">

                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen((prev) => !prev)
                      }
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`group relative flex h-full items-center gap-1.5 text-[13px] font-semibold leading-[1.7] transition-colors duration-300 sm:text-[15px] ${
                        servicesActive || servicesOpen
                          ? "text-[#2E91C8]"
                          : "text-[#1D2939] hover:text-[#2E91C8]"
                      }`}
                    >
                      Services

                      <ChevronDown
                        size={14}
                        strokeWidth={2}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />

                      <span
                        className={`absolute bottom-[20px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#2E91C8] transition-all duration-300 ${
                          servicesActive || servicesOpen
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </button>

                  </div>

                  {/* DROPDOWN PANEL */}

                  <div
                    className={`absolute left-1/2 top-[calc(100%-7px)] w-[390px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-[16px] border border-slate-100 bg-white shadow-[0_18px_50px_rgba(15,45,95,0.13)]">

                      {/* HEADER */}

                      <div className="border-b border-slate-100 px-5 py-3.5">
                        <span className="block text-[13px] font-bold uppercase leading-[1.7] tracking-[1.5px] text-[#2E91C8] sm:text-[15px]">
                          Medical Services
                        </span>

                        <span className="mt-0.5 block text-[13px] font-bold leading-[1.7] text-[#102D5F] sm:text-[15px]">
                          Our Departments
                        </span>
                      </div>

                      {/* ALL SERVICES — SCROLLABLE */}

                      <div className="max-h-[min(58vh,490px)] overflow-y-auto overscroll-contain py-1.5 [scrollbar-color:#B9DDEA_#F8FCFE] [scrollbar-width:thin]">

                        {serviceLinks.map((service) => (
                          <NavLink
                            key={service.name}
                            to={service.path}
                            className={({ isActive }) =>
                              `group relative flex min-h-[42px] items-center justify-between px-5 py-2 text-[13px] font-semibold leading-[1.7] transition-all duration-200 sm:text-[15px] ${
                                isActive
                                  ? "bg-[#F1F9FD] text-[#2E91C8]"
                                  : "text-[#334155] hover:bg-[#F7FBFD] hover:text-[#2E91C8]"
                              }`
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <div className="flex min-w-0 items-center gap-3">

                                  <span
                                    className={`h-[5px] w-[5px] shrink-0 rounded-full transition-colors duration-200 ${
                                      isActive
                                        ? "bg-[#2E91C8]"
                                        : "bg-slate-300 group-hover:bg-[#2E91C8]"
                                    }`}
                                  />

                                  <span>{service.name}</span>
                                </div>

                                <ArrowRight
                                  size={13}
                                  strokeWidth={2}
                                  className="ml-3 shrink-0 text-[#2E91C8] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                                />

                                {isActive && (
                                  <span className="absolute bottom-0 left-0 top-0 w-[3px] rounded-r-full bg-[#2E91C8]" />
                                )}
                              </>
                            )}
                          </NavLink>
                        ))}

                      </div>

                      {/* TREATMENTS */}

                      <div className="border-t border-slate-100 py-1.5">
                        {extraServiceLinks.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                              `group relative flex min-h-[42px] items-center justify-between px-5 text-[13px] font-semibold leading-[1.7] transition-all duration-200 sm:text-[15px] ${
                                isActive
                                  ? "bg-[#F1F9FD] text-[#2E91C8]"
                                  : "text-[#334155] hover:bg-[#F7FBFD] hover:text-[#2E91C8]"
                              }`
                            }
                          >
                            <span>{item.name}</span>

                            <ArrowRight
                              size={13}
                              strokeWidth={2}
                              className="shrink-0 text-[#2E91C8] transition-transform duration-200 group-hover:translate-x-1"
                            />
                          </NavLink>
                        ))}
                      </div>

                      {/* VIEW ALL */}

                      <div className="border-t border-slate-100 bg-[#F8FCFE] p-2.5">
                        <NavLink
                          to="/services"
                          className="group flex min-h-[40px] w-full items-center justify-between rounded-[10px] px-3 text-[13px] font-bold leading-[1.7] text-[#102D5F] transition-all duration-200 hover:bg-white hover:text-[#2E91C8] sm:text-[15px]"
                        >
                          <span>View All Services</span>

                          <ArrowRight
                            size={14}
                            strokeWidth={2}
                            className="text-[#2E91C8] transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </NavLink>
                      </div>

                    </div>
                  </div>
                </div>

                {/* AFTER SERVICES */}

                {afterServiceLinks.map((item) => (
                  <DesktopLink
                    key={item.name}
                    item={item}
                  />
                ))}

              </div>

              {/* DIVIDER */}

              <div className="mx-4 h-7 w-px bg-slate-200 2xl:mx-5" />

              {/* CALL */}

              <a
                href="tel:+917757004175"
                aria-label="Call Vighnaharta Hospital"
                title="24x7 Emergency Call"
                className="mr-3 flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#102D5F] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#102D5F] hover:bg-[#102D5F] hover:text-white"
              >
                <Phone size={17} strokeWidth={2} />
              </a>

              {/* WHATSAPP APPOINTMENT */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book Appointment on WhatsApp"
                className="group flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2E91C8] to-[#55B8E9] px-5 text-[13px] font-semibold leading-[1.7] text-white shadow-[0_8px_20px_rgba(46,145,200,0.23)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(46,145,200,0.32)] sm:text-[15px]"
              >
                Book Appointment

                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

            {/* =================================================
                MOBILE / TABLET CONTROLS
            ================================================== */}

            <div className="flex shrink-0 items-center gap-2 xl:hidden">

              <a
                href="tel:+917757004175"
                aria-label="Emergency Call"
                className="hidden h-[42px] w-[42px] items-center justify-center rounded-full bg-[#EEF8FD] text-[#2E91C8] transition-all duration-300 hover:bg-[#102D5F] hover:text-white sm:flex"
              >
                <Phone size={17} strokeWidth={2} />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={
                  mobileOpen
                    ? "Close Navigation"
                    : "Open Navigation"
                }
                aria-expanded={mobileOpen}
                className="flex h-[43px] w-[43px] items-center justify-center rounded-[11px] border border-slate-200 bg-white text-[#102D5F] transition-all duration-300 hover:border-[#2E91C8] hover:text-[#2E91C8] sm:h-[44px] sm:w-[44px]"
              >
                {mobileOpen ? (
                  <X size={22} strokeWidth={2} />
                ) : (
                  <Menu size={23} strokeWidth={2} />
                )}
              </button>

            </div>

          </div>
        </nav>

        {/* =====================================================
            MOBILE / TABLET MENU
        ====================================================== */}

        <div
          className={`absolute left-0 top-full z-[101] w-full border-t border-slate-100 bg-white shadow-[0_20px_40px_rgba(15,45,95,0.12)] transition-all duration-300 xl:hidden ${
            mobileOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }`}
        >
          <div className="mx-auto max-h-[calc(100vh-68px)] max-w-[1380px] overflow-y-auto overscroll-contain px-3 py-3 min-[360px]:px-4 sm:max-h-[calc(100vh-118px)] sm:px-6 sm:py-4">

            <div className="flex flex-col">

              {/* MAIN LINKS */}

              {mainLinks.map((item) => (
                <MobileLink
                  key={item.name}
                  item={item}
                />
              ))}

              {/* =============================================
                  MOBILE SERVICES
              ============================================== */}

              <div className="border-b border-slate-100">

                <div
                  className={`relative flex min-h-[48px] items-center rounded-lg transition-all duration-300 ${
                    servicesActive ? "bg-[#F1F9FD]" : ""
                  }`}
                >
                  {servicesActive && (
                    <span className="absolute left-0 h-5 w-[3px] rounded-full bg-[#2E91C8]" />
                  )}

                  <NavLink
                    to="/services"
                    className={`flex min-h-[48px] flex-1 items-center px-4 text-[13px] font-semibold leading-[1.7] sm:text-[15px] ${
                      servicesActive
                        ? "text-[#2E91C8]"
                        : "text-[#1D2939]"
                    }`}
                  >
                    Services
                  </NavLink>

                  <button
                    type="button"
                    onClick={() =>
                      setMobileServicesOpen((prev) => !prev)
                    }
                    aria-label="Toggle Services Menu"
                    aria-expanded={mobileServicesOpen}
                    className="mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#102D5F] transition-colors duration-200 hover:bg-white hover:text-[#2E91C8]"
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                </div>

                {/* SERVICES ACCORDION */}

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    mobileServicesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="mb-3 ml-3 border-l border-[#DCECF4] pl-2 min-[360px]:ml-4 min-[360px]:pl-3">

                      <div className="pb-1 pt-2">
                        <span className="px-3 text-[13px] font-bold uppercase leading-[1.7] tracking-[1px] text-[#94A3B8] sm:text-[15px]">
                          Departments
                        </span>
                      </div>

                      {/* ALL 13 SERVICES */}

                      {serviceLinks.map((service) => (
                        <NavLink
                          key={service.name}
                          to={service.path}
                          className={({ isActive }) =>
                            `relative flex min-h-[43px] items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-semibold leading-[1.7] transition-all duration-200 sm:text-[15px] ${
                              isActive
                                ? "bg-[#EAF7FC] text-[#2E91C8]"
                                : "text-[#475569] hover:bg-[#F7FBFD] hover:text-[#2E91C8]"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className={`h-[5px] w-[5px] shrink-0 rounded-full ${
                                  isActive
                                    ? "bg-[#2E91C8]"
                                    : "bg-slate-300"
                                }`}
                              />

                              <span>{service.name}</span>
                            </>
                          )}
                        </NavLink>
                      ))}

                      {/* TREATMENTS */}

                      <div className="my-2 h-px bg-slate-100" />

                      {extraServiceLinks.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className={({ isActive }) =>
                            `flex min-h-[43px] items-center justify-between rounded-lg px-3 text-[13px] font-semibold leading-[1.7] transition-all duration-200 sm:text-[15px] ${
                              isActive
                                ? "bg-[#EAF7FC] text-[#2E91C8]"
                                : "text-[#475569] hover:bg-[#F7FBFD] hover:text-[#2E91C8]"
                            }`
                          }
                        >
                          <span>{item.name}</span>

                          <ArrowRight size={13} strokeWidth={2} />
                        </NavLink>
                      ))}

                      {/* VIEW ALL */}

                      <NavLink
                        to="/services"
                        className="mt-2 flex min-h-[42px] items-center justify-between rounded-lg bg-[#F1F9FD] px-3 text-[13px] font-bold leading-[1.7] text-[#102D5F] transition-colors hover:text-[#2E91C8] sm:text-[15px]"
                      >
                        <span>View All Services</span>

                        <ArrowRight size={13} strokeWidth={2} />
                      </NavLink>

                    </div>
                  </div>
                </div>

              </div>

              {/* AFTER SERVICES */}

              {afterServiceLinks.map((item) => (
                <MobileLink
                  key={item.name}
                  item={item}
                />
              ))}

            </div>

            {/* =================================================
                EMERGENCY
            ================================================== */}

            <div className="mt-4 rounded-[16px] border border-[#E7F1F7] bg-[#F5F9FC] p-3.5">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#102D5F] text-white">
                  <Phone size={16} strokeWidth={2} />
                </div>

                <div>
                  <p className="m-0 text-[13px] font-medium leading-[1.7] text-slate-500 sm:text-[15px]">
                    24×7 Emergency
                  </p>

                  <a
                    href="tel:+917757004175"
                    className="mt-[2px] block text-[13px] font-bold leading-[1.7] text-[#102D5F] sm:text-[15px]"
                  >
                    +91 7757004175
                  </a>
                </div>

              </div>
            </div>

            {/* MOBILE WHATSAPP APPOINTMENT */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Appointment on WhatsApp"
              onClick={() => setMobileOpen(false)}
              className="group mt-3 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2E91C8] to-[#55B8E9] px-5 text-[13px] font-semibold leading-[1.7] text-white shadow-[0_8px_20px_rgba(46,145,200,0.20)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(46,145,200,0.28)] active:scale-[0.98] sm:text-[15px]"
            >
              Book Appointment

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* LOCATION */}

            <div className="mt-3 flex items-center justify-center gap-2 pb-1 text-[13px] leading-[1.7] text-slate-500 sm:text-[15px]">
              <MapPin
                size={13}
                className="shrink-0 text-[#2E91C8]"
              />

              <span>Alephata, Junnar, Pune</span>
            </div>

          </div>
        </div>

      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close Navigation"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-[90] bg-[#102D5F]/20 backdrop-blur-[2px] xl:hidden"
        />
      )}
    </>
  );
};

/* =========================================================
   DESKTOP LINK
========================================================= */

const DesktopLink = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `group relative flex h-[90px] items-center text-[13px] font-semibold leading-[1.7] transition-colors duration-300 sm:text-[15px] ${
          isActive
            ? "text-[#2E91C8]"
            : "text-[#1D2939] hover:text-[#2E91C8]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {item.name}

          <span
            className={`absolute bottom-[20px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#2E91C8] transition-all duration-300 ${
              isActive
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          />
        </>
      )}
    </NavLink>
  );
};

/* =========================================================
   MOBILE LINK
========================================================= */

const MobileLink = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `relative flex min-h-[48px] items-center rounded-lg px-4 text-[13px] font-semibold leading-[1.7] transition-all duration-300 sm:text-[15px] ${
          isActive
            ? "bg-[#F1F9FD] text-[#2E91C8]"
            : "text-[#1D2939] hover:bg-slate-50 hover:text-[#2E91C8]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute left-0 h-5 w-[3px] rounded-full bg-[#2E91C8]" />
          )}

          {item.name}
        </>
      )}
    </NavLink>
  );
};

export default Navbar;
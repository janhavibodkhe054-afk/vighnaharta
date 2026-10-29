
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ArrowLeft,
  Bone,
  Brain,
  Check,
  HeartPulse,
  Stethoscope,
  Syringe,
  Venus,
  Ribbon,
  ScanFace,
  Scissors,
  Ambulance,
  ShieldCheck,
  ScanHeart,
  Pause,
  Play,
} from "lucide-react";

/* =========================================================
   EXACT 14 SERVICES + ROUTES
========================================================= */

const departments = [
  {
    number: "01",
    title: "Cardiac Diagnostic Services",
    subtitle: "Heart Health Assessment",
    description:
      "Cardiac diagnostic evaluation to help assess heart health and guide appropriate medical care.",
    icon: ScanHeart,
    image: "/cardiac1.png",
    path: "/services/cardiac-diagnostic-services",
    areas: [
      "Cardiac Evaluation",
      "Heart Health Assessment",
      "Diagnostic Consultation",
      "Clinical Guidance",
    ],
  },
  {
    number: "02",
    title: "Oncology Treatment",
    subtitle: "Cancer Care & Guidance",
    description:
      "Clinical consultation and appropriate treatment guidance for cancer-related conditions.",
    icon: Ribbon,
    image: "/oncology1.png",
    path: "/services/oncology-treatment",
    areas: [
      "Oncology Consultation",
      "Clinical Assessment",
      "Treatment Planning",
      "Follow-Up Care",
    ],
  },
  {
    number: "03",
    title: "Preventive Cardiology",
    subtitle: "Heart Disease Prevention",
    description:
      "Heart health evaluation and preventive guidance focused on identifying and managing cardiovascular risk factors.",
    icon: ShieldCheck,
    image: "/heart1.webp",
    path: "/services/preventive-cardiology",
    areas: [
      "Risk Assessment",
      "Heart Health Screening",
      "Lifestyle Guidance",
      "Preventive Consultation",
    ],
  },
  {
    number: "04",
    title: "Emergency Cardiac Services",
    subtitle: "Urgent Heart Care",
    description:
      "Timely clinical assessment and appropriate medical support for urgent cardiac concerns.",
    icon: Ambulance,
    image: "/attack.png",
    path: "/services/emergency-cardiac-services",
    areas: [
      "Urgent Cardiac Assessment",
      "Emergency Evaluation",
      "Cardiac Monitoring",
      "Medical Support",
    ],
  },
  {
    number: "05",
    title: "Neurospine Care",
    subtitle: "Brain, Nerve & Spine Care",
    description:
      "Specialist evaluation and appropriate treatment guidance for neurological and spine-related conditions.",
    icon: Brain,
    image: "/neuro1.png",
    path: "/services/neurospine-care",
    areas: [
      "Spine Evaluation",
      "Nerve-Related Concerns",
      "Neurological Assessment",
      "Treatment Guidance",
    ],
  },
  {
    number: "06",
    title: "Dermatology Services",
    subtitle: "Skin, Hair & Nail Care",
    description:
      "Evaluation and treatment guidance for skin, hair and nail-related health concerns.",
    icon: ScanFace,
    image: "/dermatology.png",
    path: "/services/dermatology-services",
    areas: [
      "Skin Conditions",
      "Acne & Rashes",
      "Hair Concerns",
      "Skin Infections",
    ],
  },
  {
    number: "07",
    title: "Anorectal Surgeries",
    subtitle: "Piles, Fissure & Fistula Care",
    description:
      "Evaluation and appropriate treatment planning for piles, fissures, fistulas and other anorectal conditions.",
    icon: Scissors,
    image: "/Anorectal-hero.jpg",
    path: "/services/anorectal-surgeries",
    areas: [
      "Piles",
      "Anal Fissure",
      "Anal Fistula",
      "Perianal Abscess",
    ],
  },
  {
    number: "08",
    title: "Orthopedics & Trauma Care",
    subtitle: "Bone, Joint & Injury Care",
    description:
      "Evaluation and treatment for bone, joint and musculoskeletal conditions, including injuries and orthopedic trauma.",
    icon: Bone,
    image: "/orthopedics.png",
    path: "/services/orthopedics-trauma",
    areas: [
      "Fractures",
      "Joint Injuries",
      "Ligament Injuries",
      "Orthopedic Trauma",
      "Orthopedic Surgery",
    ],
  },
  {
    number: "09",
    title: "Spine Care",
    subtitle: "Spine, Back & Neck Care",
    description:
      "Medical evaluation and treatment support for spine injuries and other back or neck-related conditions.",
    icon: Activity,
    image: "/spinecare.png",
    path: "/services/spine-care",
    areas: [
      "Spine Injuries",
      "Trauma-Related Conditions",
      "Back & Neck Evaluation",
      "Surgical Consultation",
    ],
  },
  {
    number: "10",
    title: "General Medicine",
    subtitle: "Acute & Chronic Medical Care",
    description:
      "Evaluation and management of common medical conditions and ongoing health concerns.",
    icon: Stethoscope,
    image: "/general.png",
    path: "/services/general-medicine",
    areas: [
      "Diabetes Management",
      "Hypertension Management",
      "Fever & Infections",
      "Acute Medical Illnesses",
      "Chronic Medical Conditions",
    ],
  },
  {
    number: "11",
    title: "General & Advanced Surgery",
    subtitle: "Surgical Consultation & Care",
    description:
      "Evaluation and surgical care for conditions requiring appropriate operative management.",
    icon: Syringe,
    image: "/surgery.png",
    path: "/services/general-surgery",
    areas: [
      "Hernia",
      "Appendix-Related Care",
      "Minor Surgical Procedures",
      "Major Surgical Procedures",
    ],
  },
  {
    number: "12",
    title: "Urology",
    subtitle: "Urinary & Urological Care",
    description:
      "Evaluation and treatment support for kidney, urinary and prostate-related conditions.",
    icon: HeartPulse,
    image: "/urology.png",
    path: "/services/urology",
    areas: [
      "Kidney Stones",
      "Urinary Problems",
      "Prostate-Related Conditions",
      "Urological Evaluation",
    ],
  },
  {
    number: "13",
    title: "Gynecology & Women's Health",
    subtitle: "Dedicated Women's Healthcare",
    description:
      "Medical consultation and appropriate care for women's health needs at different stages of life.",
    icon: Venus,
    image: "/womenhealth.png",
    path: "/services/gynecology",
    areas: [],
  },
  {
    number: "14",
    title: "EECP Treatment",
    subtitle: "Non-Invasive Cardiac Support",
    description:
      "Non-invasive treatment support designed to help improve blood flow as part of appropriate cardiac care.",
    icon: HeartPulse,
    image: "/eecp.png",
    path: "/services/eecp-treatment",
    areas: [
      "Non-Invasive Treatment",
      "Cardiac Care Support",
      "Blood Flow Support",
      "Clinical Evaluation",
    ],
  },
];

/* =========================================================
   INFINITE SLIDER
========================================================= */

const DepartmentsSection = () => {
  const sliderRef = useRef(null);
  const positionRef = useRef(0);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({
    x: 0,
    position: 0,
    moved: false,
  });

  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = departments.length;

  // Duplicate once for a seamless infinite loop.
  const sliderDepartments = [...departments, ...departments];

  const getHalfWidth = () => {
    const slider = sliderRef.current;
    if (!slider) return 0;

    return slider.scrollWidth / 2;
  };

  const getStep = () => {
    const slider = sliderRef.current;
    if (!slider) return 400;

    const card = slider.querySelector("[data-department-card]");
    if (!card) return 400;

    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap) || 0;

    return card.getBoundingClientRect().width + gap;
  };

  const normalizePosition = (position) => {
    const halfWidth = getHalfWidth();

    if (!halfWidth) return 0;

    return ((position % halfWidth) + halfWidth) % halfWidth;
  };

  const updateSlider = (position) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const normalized = normalizePosition(position);
    positionRef.current = normalized;

    slider.style.transform = `translate3d(${-normalized}px, 0, 0)`;

    const step = getStep();
    const index = Math.floor((normalized + 1) / step) % total;

    setActiveIndex((previous) =>
      previous === index ? previous : index
    );
  };

  /* CONTINUOUS MOVEMENT */

  useEffect(() => {
    const speed = 35; // pixels per second

    const animate = (timestamp) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = Math.min(
        timestamp - lastTimeRef.current,
        50
      );

      lastTimeRef.current = timestamp;

      if (
        !isPausedRef.current &&
        !isDraggingRef.current
      ) {
        updateSlider(
          positionRef.current + (speed * delta) / 1000
        );
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reducedMotion) {
      frameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  /* PAUSE / RESUME */

  const pauseSlider = () => {
    isPausedRef.current = true;
  };

  const resumeSlider = () => {
    if (!isPaused) {
      isPausedRef.current = false;
    }
  };

  const togglePause = () => {
    const next = !isPaused;
    setIsPaused(next);
    isPausedRef.current = next;
  };

  /* MANUAL PREVIOUS / NEXT */

  const slideNext = () => {
    updateSlider(positionRef.current + getStep());
  };

  const slidePrev = () => {
    updateSlider(positionRef.current - getStep());
  };

  /* MOUSE DRAG */

  const handlePointerDown = (event) => {
    if (event.pointerType !== "mouse") return;
    if (event.button !== 0) return;

    // Do not interfere with card links.
    if (event.target.closest("a, button")) return;

    isDraggingRef.current = true;
    pauseSlider();

    dragStartRef.current = {
      x: event.clientX,
      position: positionRef.current,
      moved: false,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDraggingRef.current) return;

    const distance = event.clientX - dragStartRef.current.x;

    if (Math.abs(distance) > 4) {
      dragStartRef.current.moved = true;
    }

    updateSlider(
      dragStartRef.current.position - distance
    );
  };

  const handlePointerUp = (event) => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    resumeSlider();
  };

  return (
    <section
      id="medical-departments"
      className="relative overflow-hidden bg-[#F6FBFD] py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-[180px] top-[120px] h-[450px] w-[450px] rounded-full bg-[#DDF3FB]/70 blur-[120px]" />

      <div className="pointer-events-none absolute -right-[200px] bottom-[50px] h-[480px] w-[480px] rounded-full bg-[#E5F5FA] blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#2E91C8 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* HEADER */}

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-[850px] text-center">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#2E91C8]" />

            <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#2E91C8] sm:text-[15px]">
              Medical Departments
            </span>

            <span className="h-[2px] w-9 bg-[#2E91C8]" />
          </div>

          <h2 className="text-[32px] font-bold leading-[1.14] tracking-[-1px] text-[#102D5F] sm:text-[38px] md:text-[42px] lg:text-[46px]">
            Specialized Care Across{" "}
            <span className="text-[#2E91C8]">
              Multiple Departments
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[13px] leading-[1.8] text-[#647887] sm:text-[15px]">
            Explore our medical departments and find appropriate
            consultation, diagnosis and treatment guidance for your
            healthcare needs.
          </p>
        </div>

        {/* SLIDER CONTROLS */}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">

          <div className="flex items-center gap-3">
            <span className="text-[13px] font-semibold text-[#647887]">
              Explore Our Departments
            </span>

            <span className="rounded-full bg-[#E5F4FB] px-3 py-1 text-[12px] font-bold text-[#2E91C8]">
              14 Specialities
            </span>
          </div>

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={togglePause}
              aria-label={
                isPaused ? "Resume slider" : "Pause slider"
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5E5EE] bg-white text-[#102D5F] transition-colors hover:border-[#2E91C8]"
            >
              {isPaused ? <Play size={17} /> : <Pause size={17} />}
            </button>

            <button
              type="button"
              onClick={slidePrev}
              aria-label="Previous department"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5E5EE] bg-white text-[#102D5F] transition-colors hover:bg-[#2E91C8] hover:text-white"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={slideNext}
              aria-label="Next department"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#102D5F] text-white transition-colors hover:bg-[#2E91C8]"
            >
              <ArrowRight size={19} />
            </button>

          </div>
        </div>
      </div>

      {/* CONTINUOUS SLIDER */}

      <div
        className="relative z-10 mt-7 w-full"
        onMouseEnter={pauseSlider}
        onMouseLeave={resumeSlider}
      >
        {/* EDGE FADES */}

        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-6 bg-gradient-to-r from-[#F6FBFD] to-transparent sm:w-14 lg:w-[90px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-6 bg-gradient-to-l from-[#F6FBFD] to-transparent sm:w-14 lg:w-[90px]" />

        {/* SLIDER VIEWPORT */}

        <div
          className="overflow-hidden py-4"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div
            ref={sliderRef}
            className="flex w-max cursor-grab items-stretch gap-4 select-none active:cursor-grabbing sm:gap-5 lg:gap-6"
          >
            {sliderDepartments.map((department, index) => (
              <DepartmentCard
                key={`${department.number}-${index}`}
                department={department}
                duplicate={index >= total}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PROGRESS */}

      <div className="relative z-10 mx-auto mt-5 flex items-center justify-center gap-4">

        <span className="text-[13px] font-bold tabular-nums text-[#102D5F]">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>

        <div className="h-[4px] w-[180px] overflow-hidden rounded-full bg-[#D9EAF3] sm:w-[240px]">
          <div
            className="h-full rounded-full bg-[#2E91C8] transition-[width] duration-300"
            style={{
              width: `${((activeIndex + 1) / total) * 100}%`,
            }}
          />
        </div>

        <span className="text-[13px] font-semibold text-[#8195A4]">
          14
        </span>
      </div>

      {/* BOTTOM CTA */}

      <div className="relative z-10 mx-auto mt-10 max-w-[1380px] px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-4 rounded-[20px] border border-[#D7E9F0] bg-white px-5 py-5 shadow-[0_10px_35px_rgba(16,45,95,0.05)] sm:flex-row sm:px-8 lg:py-6">

          <div className="text-center sm:text-left">

            <span className="block text-[13px] font-bold uppercase tracking-[1.3px] text-[#2E91C8] sm:text-[15px]">
              Need Specialist Care?
            </span>

            <p className="mt-1 text-[13px] leading-[1.7] text-[#687D8B] sm:text-[15px]">
              Book a consultation with the appropriate department.
            </p>

          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-[#2E91C8] px-6 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#102D5F] sm:w-auto sm:text-[15px]"
          >
            Book Specialist Consultation

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   DEPARTMENT CARD
========================================================= */

const DepartmentCard = ({ department, duplicate = false }) => {
  const Icon = department.icon;

  return (
    <article
      data-department-card
      aria-hidden={duplicate ? "true" : undefined}
      className="group flex h-auto w-[292px] shrink-0 flex-col overflow-hidden rounded-[22px] border border-[#DCE9EF] bg-white shadow-[0_12px_40px_rgba(16,45,95,0.06)] transition-[border-color,box-shadow] duration-500 hover:border-[#BBDCE9] hover:shadow-[0_25px_65px_rgba(16,45,95,0.13)] min-[360px]:w-[310px] sm:w-[340px] md:w-[360px] lg:w-[390px] xl:w-[410px] sm:rounded-[24px]"
    >
      {/* IMAGE */}

      <div className="relative h-[205px] shrink-0 overflow-hidden bg-[#E7F3F8] sm:h-[220px] md:h-[230px] lg:h-[235px] xl:h-[245px]">

        <img
          src={department.image}
          alt={department.title}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/75 via-[#061B35]/10 to-transparent" />

        <span className="absolute bottom-4 left-5 text-[42px] font-bold leading-none tracking-[-2px] text-white sm:text-[46px]">
          {department.number}
        </span>

        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/50 bg-white/95 text-[#2E91C8] shadow-lg transition-all duration-300 group-hover:bg-[#2E91C8] group-hover:text-white sm:h-[52px] sm:w-[52px]">
          <Icon size={23} strokeWidth={1.7} />
        </div>

        <div className="absolute bottom-4 left-[82px] right-4 sm:left-[90px]">
          <span className="text-[13px] font-semibold uppercase leading-[1.7] tracking-[1px] text-[#BCEBFC] sm:text-[15px]">
            {department.subtitle}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div className="flex min-h-[410px] flex-1 flex-col p-5 sm:min-h-[425px] sm:p-6 lg:min-h-[435px] xl:p-7">

        <h3 className="text-[20px] font-bold leading-[1.25] text-[#102D5F] sm:text-[22px] lg:text-[23px]">
          {department.title}
        </h3>

        <div className="mt-3 h-[3px] w-10 rounded-full bg-[#2E91C8] transition-all duration-500 group-hover:w-16" />

        <p className="mt-3.5 text-[13px] leading-[1.7] text-[#687D8B] sm:text-[15px]">
          {department.description}
        </p>

        {/* KEY AREAS */}

        <div className="mt-5">

          <span className="mb-3 block text-[13px] font-bold uppercase tracking-[1.4px] text-[#97A8B2] sm:text-[15px]">
            {department.areas.length ? "Key Areas" : "Department Care"}
          </span>

          {department.areas.length ? (
            <div className="grid grid-cols-1 gap-2.5 min-[430px]:grid-cols-2">

              {department.areas.map((area) => (
                <div key={area} className="flex items-start gap-2">

                  <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E9F7FC] text-[#2E91C8]">
                    <Check size={12} strokeWidth={2.4} />
                  </span>

                  <span className="text-[13px] font-medium leading-[1.5] text-[#536B79] sm:text-[15px]">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-[#F4FAFD] px-3.5 py-3 text-[13px] leading-[1.7] text-[#687D8B]">
              Dedicated consultation and appropriate care for women's health needs.
            </p>
          )}
        </div>

        <div className="flex-1" />

        {/* LINK */}

        <div className="mt-6 border-t border-[#E5EEF2] pt-5">

          <Link
            to={department.path}
            tabIndex={duplicate ? -1 : undefined}
            className="group/btn flex min-h-[48px] w-full items-center justify-between rounded-[13px] bg-[#102D5F] px-4 py-2.5 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-[#2E91C8] sm:min-h-[50px] sm:px-5 sm:text-[15px]"
          >
            <span>View Department</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-[#2E91C8]">
              <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DepartmentsSection;

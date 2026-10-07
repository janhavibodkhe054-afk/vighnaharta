import React from "react";

const ContactMap = () => {
  const mapQuery = encodeURIComponent(
    "Vighnaharta Hospital Alephata Maharashtra"
  );

  return (
    <section className="m-0 w-full p-0">
      <div
        className="
          relative
          w-full
          overflow-hidden

          h-[320px]
          min-[360px]:h-[350px]
          min-[430px]:h-[380px]

          sm:h-[420px]
          md:h-[450px]
          lg:h-[480px]
          xl:h-[500px]
          2xl:h-[520px]
        "
      >
        <iframe
          title="Vighnaharta Hospital Location"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="
            absolute
            inset-0
            block
            h-full
            w-full
            border-0
          "
        />
      </div>
    </section>
  );
};

export default ContactMap;
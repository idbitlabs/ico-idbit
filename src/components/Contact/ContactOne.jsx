import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";

const ContactOne = () => {
  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>
         support@idbit.org <br /> support@idbit.org
        </>
      ),
    },
    {
      icon: "fa-phone",
      content: (
        <>
         +23 0123 4567
          <br /> +23 0123 4567
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
         22 International Division Via G.B. Pirelli
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Contact</span>
              <h2 className="title">
                <span>Contact</span> IDT Crypto
              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {info_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <ContactOneInfoItem item={x} />
              </div>
            ))}
          </div>
        </div>

        {/* section form */}
        <ContactOneForm />
      </div>
    </section>
  );
};

export default ContactOne;

import React from "react";
import Scroll from "../Scroll";
import ContactItems from "./ContactItems";
import Email from "./Email";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <h1 className="title">Contact Me</h1>
        <div className="contact__content">
          <ContactItems />
          <Email />
        </div>
      </div>
      <div className="home scroll">
        <Scroll value="#home" />
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import Scroll from "../Scroll";
import ContactItems from "./ContactItems";
import Form from "./Form";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <h1 className="contact title">Contact Me</h1>
        <div className="contact__content">
          <ContactItems />
          <Form />
        </div>
      </div>
      <div className="contact scroll">
        <Scroll value="#home" />
      </div>
    </section>
  );
};

export default Contact;

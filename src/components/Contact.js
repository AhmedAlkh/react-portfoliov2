import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j0zu2kk",
        "template_3o7wveb",
        form.current,
        "CaIauTER79fcejYCF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          // This will clear the form after successful submit
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact me</h1>
      <div className="contact-container">
        <div className="contact-statement">
          <p>
            Thank you for taking the time to view my portfolio, please contact
            me for any questions or inquiries.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="contact-btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

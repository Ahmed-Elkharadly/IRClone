import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { t } from "i18next";
import Swal from "sweetalert2";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // Service Id
        "service_u5uogi4",
        // Template Id
        "template_g53he3a",
        form.current,
        //  Publick Key
        "IdzD6GPptyHbPiCJo"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message sent successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      );
  };

  return (
    <form className="container" ref={form} onSubmit={sendEmail}>
      <h2>{t("Contact Us")}</h2>
      <div className="d-flex justify-content-between align-items-center w-100">
        <input
          className="form-control  m-3"
          type="text"
          placeholder={t("Name")}
          name="user_name"
          required
        />
        <div class="input-group m-3 ">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder={t("Email")}
            aria-label="Email"
            aria-describedby="basic-addon1"
            name="user_email"
            required
          />
        </div>
      </div>
      <div className="d-flex">
        <textarea
          required
          placeholder={t("Leave your message here")}
          className="form-control m-3"
          name="message"
        />
      </div>
      <input className="btn btn-primary m-3" type="submit" value="Send" />
    </form>
  );
};

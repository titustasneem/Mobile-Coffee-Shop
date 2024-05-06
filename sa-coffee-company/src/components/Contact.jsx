import React from "react";
import img1 from "../assets/images/mobileVan.webp";
const Contact = () => {
  return (
    <div className="aka">
      <section className="contact" id="contact Section">
        <h1 className="heading">Contact us</h1>
        <div className="row">
          <div className="content">
            <h3 className="title">Contact Us for Memorable Events:</h3>
            <p>
              Make your event memorable with SA Coffee Company. Whether it's
              festivals, product launches, school events, conferences, or
              weddings, our team is here to provide premium coffee and
              exceptional service to elevate your experience.
            </p>
          </div>
          <div className="image">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

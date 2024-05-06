import React from "react";
import img1 from "../assets/images/mobileVan.webp";
const Landlord = () => {
  return (
    <div className="aka">
      <section className="landlord" id="Landlord Section">
        <h1 className="heading">Landlords</h1>
        <div className="row">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <p>
              "Elevate your property's appeal and tenant satisfaction with our
              artisanal coffee and deli solution – where every cup and bite
              brings a taste of luxury and convenience to your staff and
              clients."
            </p>
            <p>Lets discuss the options</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landlord;

import React from "react";
import { useState } from "react";
import homeImage from "../assets/images/home-img-primary.jpg";
import homeImage2 from "../assets/images/SACoffeeCompanyShop.jpeg";
import homeImage3 from "../assets/images/Coffee.png";
import homeImage4 from "../assets/images/SACoffeePoured.png";

import homeImageSecondary from "../assets/images/home-img-secondary.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Home = () => {
  const backgroundImg = [
    { id: 0, value: homeImage },
    { value: homeImage2 },
    { value: homeImage3 },
    { value: homeImage4 },
  ];
  const imgs = [
    { id: 0, value: homeImageSecondary },
    { id: 1, value: homeImageSecondary },
    { id: 2, value: homeImageSecondary },
    { id: 3, value: homeImageSecondary },
  ];

  const [sliderData, setSliderData] = useState(backgroundImg[0]);
  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <div className="aka">
      <section className="home" id="Home">
        <div className="row">
          <div className="content">
            <h3>SA COFFEE COMPANY</h3>
          </div>
          <div className="ImageSlider">
            <div className="image">
              <Slide>
                {backgroundImg.map((obj) => (
                  <img src={obj.value} alt="" className="main-home-image" />
                ))}
              </Slide>
            </div>
          </div>
        </div>

        <div className="image-slider">
          {imgs.map((data, i) => (
            <img
              alt=""
              // className={i % 2 === 1 && "transparentCoffee"}
              key={data.id}
              src={data.value}
              // onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

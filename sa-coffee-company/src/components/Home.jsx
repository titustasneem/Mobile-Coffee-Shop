import React from "react";
import { useState } from "react";
import homeImage from "../assets/images/home-img-primary.jpg";
import homeImageSecondary from "../assets/images/home-img-secondary.png";

const Home = () => {
  const backgroundImg = [{ id: 0, value: homeImage }];
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
          <div className="image">
            <img src={sliderData.value} alt="" className="main-home-image" />
          </div>
        </div>

        <div className="image-slider">
          {imgs.map((data, i) => (
            <img
              key={data.id}
              src={data.value}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

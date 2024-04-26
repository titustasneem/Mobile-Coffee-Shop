import React from "react";
import { useState } from "react";
import homeImage from "../assets/images/home-img-primary.jpg";
import homeImageSecondary from "../assets/images/home-img-secondary.png";

// import image3 from "../assets/images/coffee-beans.png"
// import image4 from "../assets/images/coffee-beans.png"

const Home = () => {
  const backgroundImg = [{ id: 0, value: homeImage }];
  const imgs = [
    { id: 0, value: homeImageSecondary },
    { id: 1, value: homeImageSecondary },
    { id: 2, value: homeImageSecondary },
    { id: 3, value: homeImageSecondary },
  ];
  // const backgroundImg =[
  //     {id:0, value:"https://media.istockphoto.com/id/1066261750/vector/two-coffee-cups-drawing.webp?b=1&s=612x612&w=0&k=20&c=MHDPq1ubMp8C7Iri9-F4mFTJ83hH62VrQmnhhWetfWY="}
  // ]
  // const imgs=[
  //     {id:0,value:"https://cdn-icons-png.freepik.com/512/2148/2148022.png"},
  //     {id:1,value:"https://cdn-icons-png.freepik.com/512/2148/2148022.png"},
  //     {id:2,value:"https://cdn-icons-png.freepik.com/512/2148/2148022.png"},
  //     {id:3,value:"https://cdn-icons-png.freepik.com/512/2148/2148022.png"}
  // ];

  const [sliderData, setSliderData] = useState(backgroundImg[0]);
  const handleClick = (index) => {
    // console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <div className="aka">
      <section className="home" id="Home">
        <div className="row">
          <div className="content">
            <h3>WILL PUT TEXT HERE</h3>
            {/* <a href="" className="btn">
              {" "}
              Our Story
            </a> */}
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

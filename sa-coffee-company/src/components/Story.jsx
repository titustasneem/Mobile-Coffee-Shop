import React from "react";
import { useState } from "react";
import storyText from "./storyText.js";

const Story = () => {
  const [data, setData] = useState(storyText);

  return (
    <div className="aka">
      <section className="story" id="Story">
        <h1 className="heading">Our Story</h1>

        <div className="box-container">
          {data.map((value) => {
            const { id, story, images } = value;

            return (
              <>
                <a href="#" className="box" key={id}>
                  <img style={{ borderRadius: "40%" }} src={images} alt="" />
                  <div className="content">
                    <p>{story} </p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Story;

import React from 'react'

const About = () => {
  return (
    <div className='aka' >
        <section className="about" id="about">
            <h1 className="heading">about us</h1>
            <div className="row">
                <div className="image">
                    <img src={"../assets/images/home-img-secondary.png"} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Why Choose Us </h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id perferendis dolores, atque tenetur laboriosam error!</p>
                  <a href="#" className='btn' >Read more</a>
                  <div className="icons-container">
                    <div className="icons">
                      <img src={"../assets/images/home-img-secondary.png"} alt="" />
                      <h3>Reason 3</h3>
                    </div>
                    <div className="icons">
                      <img src={"../assets/images/home-img-secondary.png"} alt="" />
                      <h3>Reason 2</h3>
                    </div>
                    <div className="icons">
                      <img src={"../assets/images/home-img-secondary.png"} alt="" />
                      <h3>Reason 1</h3>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
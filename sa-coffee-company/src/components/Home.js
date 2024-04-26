import React from 'react'
import { useState } from 'react'; 

const Home = () => {
    const backgroundImg =[
        {id:0, value:"../assets/images/home-img-primary.jpg"}
    ]
    const imgs=[
        {id:0,value:"../assets/images/home-img-secondary.png"},
        {id:1,value:"../assets/images/home-img-secondary.png"},
        {id:2,value:"../assets/images/home-img-secondary.png"},
        {id:3,value:"../assets/images/home-img-secondary.png"}
    ];
    const [sliderData,setSliderData] = useState(backgroundImg[0])
    const handleClick=(index)=>{
        // console.log(index);
        const slider=imgs[index];
        setSliderData(slider);
    }

  return (
    <div className='aka'>
        <section className='home' id='home'>
            <div className="row">
                <div className="content">
                    <h3>WILL PUT TEXT HERE</h3>
                    <a href="#" className='btn'> Our Story</a>
                </div>
                <div className="image">
                    <img src={sliderData.value} alt="" className='main-home-image' />
                </div>
            </div>

            <div className="image-slider">
                {
                    imgs.map((data,i)=>
                    <img key={data.id} src={data.value} onClick={()=>handleClick(i)} /> )
                }
            </div>

        </section>
    </div>
  )
}

export default Home
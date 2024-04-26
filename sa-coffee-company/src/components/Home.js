import React from 'react'
import { useState } from 'react';

const Home = () => {
    const backgroundImg =[
        {id:0, value:"https://media.istockphoto.com/id/1066261750/vector/two-coffee-cups-drawing.jpg?s=612x612&w=0&k=20&c=rHat_PUTvVExUwQ0BLs4JxpTNlQlD0_8CyQp_L09MBY="}
    ]
    const imgs=[
        {id:0,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyzdzw58h-sp_sd4qa9RkLxNm1BMMOmEaFuurYi7CG7OGeJkL_G39cPZ037dRa5gDxRs&usqp=CAU"},
        {id:1,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyzdzw58h-sp_sd4qa9RkLxNm1BMMOmEaFuurYi7CG7OGeJkL_G39cPZ037dRa5gDxRs&usqp=CAU"},
        {id:2,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyzdzw58h-sp_sd4qa9RkLxNm1BMMOmEaFuurYi7CG7OGeJkL_G39cPZ037dRa5gDxRs&usqp=CAU"},
        {id:3,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyzdzw58h-sp_sd4qa9RkLxNm1BMMOmEaFuurYi7CG7OGeJkL_G39cPZ037dRa5gDxRs&usqp=CAU"}
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
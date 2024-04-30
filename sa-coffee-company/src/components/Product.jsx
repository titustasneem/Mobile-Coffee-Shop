import React from 'react'
import { useState } from 'react'
import products from './products';

const Products = () => {
  const [data, setData] = useState(products);

  return (
    <div className='aka' >
        <section className="product" id="product">
            <h1 className="heading">our products <span>popular products</span></h1>

            <div className="box-container">


            {data.map((value) =>{
                const {id, titles, descs, prices, images} = value;

                return (
                  <>
                    <a href="#" className='box' key={id}>
                      <img src={images} alt="" />
                      <div className="content">
                        <h3>{titles} </h3>
                        <p>{descs} </p>
                        <span>${prices} </span>
                      </div>
                    </a>
                  </>
                )
            })}
            </div>
        </section>
    </div>
  )
}

export default Products
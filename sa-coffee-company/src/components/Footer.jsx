import React from 'react'
import { FaRegCopyright   } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='aka'>
        <section className="footer">
            <div className="box-container">

                <div className="box">
                    <h3>Connect with us</h3>
                    <p>Follow us on social media to stay up-to-date with the latest news, promotions, and coffee tips from SA Coffee Company.</p>
                    <a href="#"><BsEnvelopeFill className='lod'/>coffee20@gmail.com </a>
                    <a href="#"><AiFillFacebook className='lod'/>facebook </a>
                    <a href="#"><FaInstagramSquare className='lod'/>instagram </a>
                </div>

                  
            </div>
            <div className="credit"><FaRegCopyright  className='lod'/>Copyright All rights reserved</div>
        </section>
    </div>
  )
}

export default Footer
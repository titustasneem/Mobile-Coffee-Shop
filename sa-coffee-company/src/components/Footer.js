import React from 'react'
import { FaArrowRight, FaRegCopyright   } from 'react-icons/fa';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';

import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare} from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='aka'>
        <section className="footer">
            <div className="box-container">

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#"><FaArrowRight  className='lod'/>home </a>
                    <a href="#"><FaArrowRight  className='lod'/>Our Story </a>
                    <a href="#"><FaArrowRight className='lod'/>Booking </a>
                    <a href="#"><FaArrowRight className='lod'/>Contact </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"><BsFillTelephoneOutboundFill className='lod'/>+8801715241690 </a>
                    <a href="#"><BsFillTelephoneOutboundFill className='lod'/>+8801950657600 </a>
                    <a href="#"><BsEnvelopeFill className='lod'/>coffee20@gmail.com </a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
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
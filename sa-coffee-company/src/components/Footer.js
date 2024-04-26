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
                    <h3>contact info</h3>
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
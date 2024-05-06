import React from 'react'

const Book = () => {
  return (
    <div className='aka'>
        <section className='book' id='Booking Section'>
            <h1 className='heading'>Book an event</h1>
            <form action="">
              <input type="text" placeholder='Your name' id="sameLine"  className='box' />
              <input type="text" placeholder='Your surname name' id="sameLine" className='box' />
              <input type="email" placeholder='Your email' className='box' />
              <input type="datetime-local" placeholder='Date of your event (Start)' id="sameLine" className='box' />
              <input type="datetime-local" placeholder='Date of your event (End)' id="sameLine" className='box' />
              <input type="text" placeholder='Physical address of event' className='box' />
              <input type="text" placeholder='Address Line 2' className='box' />
              <input type="text" placeholder='City'id="sameLine" className='box' />
              <input type="text" placeholder='State/Province/Region' id="sameLine" className='box' />
              <input type="number" placeholder='Street code' id="sameLine" className='box' />
              <input type="number" placeholder='Location Pin' id="sameLine" className='box' />
              <input type="number" placeholder='Number of people' id="sameLine" className='box' />
              <input type="number" placeholder='Your contact number' id="sameLine" className='box' />

            
              <textarea placeholder='your message' name='' className='box' cols="30" rows="10" ></textarea>
              <input type="submit" value="send message" className='btn' />
            </form>
        </section>
    </div>
  )
}

export default Book
import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <form >
        <h2>Contact Form</h2>
        <div className='input-box'>
          <label >Full Name</label>
          <input type="text" className='field' placeholder='Enter You Name'  required/>
        </div>

        <div className='input-box'>
          <label >Email Address</label>
          <input type="text" className='field' placeholder='Enter Your Email'  required/>
        </div>

        <div className='input-box'>
          <label >Your Message</label>
          <textarea name="" id="" className='field mess' placeholder='Enter Your Message'></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  )
}

export default Contact

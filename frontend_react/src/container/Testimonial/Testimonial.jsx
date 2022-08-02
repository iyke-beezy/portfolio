import React from 'react'
import {AppWrap, MotionWrap } from './../../wrapper'
import './Testimonial.scss'

const Testimonial = () => {
  return (
    <div>Testimonial</div>
  )
}

export default AppWrap(MotionWrap(Testimonial, "app__testimonials"), "testimonials", "app__primarybg");
import React from 'react'
import aboutPAge from './About.module.css'
export default function About() {
  return (
  <section className={`${aboutPAge.aboutback}`}>
<div className={` ${aboutPAge.aboutText} container text-center `}>
        <h2 className={` ${aboutPAge.homeH2} `}>About The Party</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <div className='btn-bar '>
      <a className= {`${aboutPAge.linksss}`}  href="#">Explore More</a>
      </div>
      </div>
  </section>
  )
}

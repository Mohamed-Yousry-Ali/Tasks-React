import React from 'react'
import hstyle from './Home.module.css'
import firstimage from '../../images/download1.png'
export default function Home() {
  return (
   <>
  <div className={`${hstyle.homes}`}>
    <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
        <img className={`${hstyle.homeI}`}src={firstimage} alt="" />
      </div>
      <div className='col-md-6'>
      <h2 className={`${hstyle.homeD}`}>31th octobar 2018</h2>
      <h5 className={`${hstyle.homeB}`}>Halloween Party</h5>
      <p className={`${hstyle.homeP} text-center`}>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</p>
      <div className='btn-bar '>
      <a className= {`${hstyle.linksss}`}  href="#">Explore More</a>
      </div>
      </div>
    </div>
    </div>
  </div>
   </>
  )
}

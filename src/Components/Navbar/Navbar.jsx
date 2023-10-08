import React from 'react'
import { Link } from 'react-router-dom'
import brand from '../../images/download15.png'
import navstyle from './Navbar.module.css'
export default function Navbar() {
  return (
    <>
<nav className= {`${navstyle.navs} navbar navbar-expand-lg `}>
  <div className="container">

    <Link className='navbar-brand' to={''}>
        <img src={brand} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className= {`${navstyle.linksss}  active`}  to={''}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`${navstyle.linksss} `} to={'about'}>About Party</Link>
        </li>
        <li className="nav-item">
          <Link className={`${navstyle.linksss}`} to={'artist'}>Artist</Link>
        </li>
        <li className="nav-item">
          <Link className={`${navstyle.linksss}`} to={'gallery'}>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className={`${navstyle.linksss}`} to={'testimonials'}>Testimonial</Link>
        </li>
        <li className="nav-item">
          <Link className={`${navstyle.linksss}`} to={'contact'}>Contact</Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>


    </>
  )
}

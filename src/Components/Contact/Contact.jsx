import React from 'react'
import styles from './Contact.module.css'
import firstimage from '../../images/download8.png'
export default function Contact() {
  return (
    <section className={`${styles.aboutback}`}>
      <div className={`container text-center `}>
        <h2 className={`${styles.heading}`}>Signup For Newsletter</h2>

<form action="#">
        <input type="email" className={`${styles.contactsss}`} name="email" defaultValue="Your E-mail Address Here" />
        <span className="input-group-btn">
          <a href="#" className={`${styles.buto} btn-default`} data-toggle="modal" data-target="#exampleModal5">Subscribe</a>
        </span>
        </form>
  <h6 className={`${styles.upd}`}>Get Update</h6>
  <ul>
    <li className={`${styles.liii}`}><a  href="#" className={`${styles.aaaa}`}><i class="fa fa-facebook"></i></a></li>
    <li className={`${styles.liii}`}><a href="#" className={`${styles.aaaa}`}><i class="fa fa-twitter"></i></a></li>
    <li className={`${styles.liii}`}><a href="#" className={`${styles.aaaa}`}><i class="fa fa-pinterest"></i></a></li>
    <li className={`${styles.liii}`}><a href="#" className={`${styles.aaaa}`}><i class="fa fa-behance"></i></a></li>
    <li className={`${styles.liii}`}><a href="#" className={`${styles.aaaa}`}><i class="fa fa-linkedin"></i></a></li>
  </ul>
      </div>

    
      
     
    </section>
  )
}

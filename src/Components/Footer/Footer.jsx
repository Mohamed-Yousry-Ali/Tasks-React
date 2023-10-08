import React from 'react'
import footstyle from './Footer.module.css'
export default function Footer() {
  return (
    <>
      <footer className={`${footstyle.foot} text-white text-center fixed-bottom `}>
        <h2 className={`${footstyle.words}`}>Copyright © 2023. All rights reserved by Mohamed Yousry</h2>
      </footer>
    </>
  )
}

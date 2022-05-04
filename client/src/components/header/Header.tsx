import React from 'react'
import CTA from './CTA'
import "./header.css"
import HeaderSocial from "./HeaderSocial"
import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill} from "react-icons/bs"

const Header = () => {
  return (
    <header>
      <header className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Seokhun Yoon</h1>
        <h5 className="text-light">Blockchain Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src="https://user-images.githubusercontent.com/33863016/166649518-e4d93907-9f34-42b0-9710-8fbc284bffc3.jpg" alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          <BsFillArrowDownCircleFill/>
        </a>
      </header>
    </header>
  )
}

export default Header
import React from 'react'
import "./services.css"
import Frontend from "./Frontend"
import Backend from "./Backend"
import Blockchain from "./Blockchain"

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <Frontend />
        <Backend />
        <Blockchain />
      </div>
    </section>
  )
}

export default Services
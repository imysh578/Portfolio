import React from 'react'
import { SiCheckmarx } from 'react-icons/si'
import "./experience.css"
import Skill from "./Skill"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <Skill title="HTML" description='Intermediate' />
            <Skill title="CSS" description='Intermediate' />
            <Skill title="JavaScript" description='Intermediate' />
            <Skill title="React" description='Intermediate' />
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Skill title="MySQL" description='Intermediate' />
            <Skill title="MongoDB" description='Basic' />
            <Skill title="NodeJS" description='Intermediate' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
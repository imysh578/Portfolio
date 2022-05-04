import React from 'react'
import "./about.css"
import { FaAward } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src="https://user-images.githubusercontent.com/33863016/166649518-e4d93907-9f34-42b0-9710-8fbc284bffc3.jpg" alt="" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<IoMdSchool className="about__icon"/>
							<h5>Education</h5>
							<small>Yonsei Univ.</small><br/>
							<small>Feb 2010 ~ Feb 2019</small>
						</article>

						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Career</h5>
							<small>Philips Korea</small><br/>
							<small>Apr 2019 ~ Jun 2021</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Academy</h5>
							<small>Blockchain Programming Fullstack Course</small><br/>
							<small>Aug 2021 ~ May 2022</small>
						</article>
					</div>

					<p>
						This is the place to introduce myself. This is the place to
						introduce myself. This is the place to introduce myself.This is the
						place to introduce myself.This is the place to introduce myself.
					</p>
          
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
				</div>
			</div>
		</section>
	);
}

export default About
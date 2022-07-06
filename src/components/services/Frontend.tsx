import React from 'react'
import { BiCheck } from 'react-icons/bi'

const Frontend = () => {
  return (
		<article className="service">
			<div className="service__head">
				<h3>Frontend</h3>
			</div>

			<ul className="service__list">
				<li>
					<BiCheck className="service__list-icon" />
          <p>Something I've done</p>
				</li>
				<li>
					<BiCheck className="service__list-icon" />
          <p>Something I've done</p>
				</li>
				<li>
					<BiCheck className="service__list-icon" />
          <p>Something I've done</p>
				</li>
				<li>
					<BiCheck className="service__list-icon" />
          <p>Something I've done</p>
				</li>
				<li>
					<BiCheck className="service__list-icon" />
          <p>Something I've done</p>
				</li>
				<li>
					<BiCheck className="service__list-icon" />
          <p>Something I've done</p>
				</li>
			</ul>
		</article>
	);
}

export default Frontend
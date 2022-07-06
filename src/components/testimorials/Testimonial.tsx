import React from 'react'
import { dataType } from './data';
import AVTR1 from "/images/avatar1.jpg"

interface propsType {
  data: dataType
}

const Testimonial = ({data}: propsType) => {
  return (
		<article className="testimonial">
			<div className="client__avatar">
				<img src={AVTR1} alt="" />
			</div>
      <h5 className='client__name'>{data.client}</h5>
      <small className="client__review">
        {data.review}
      </small>
		</article>
	);
}

export default Testimonial
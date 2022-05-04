import React from 'react'
import { dataType } from './data';


interface propsType {
  data: dataType
}

const Card = ({data}: propsType) => {
  return (
		<article className="gallery">
			<div className="client__avatar">
				<img src={""} alt="" />
			</div>
      <h5 className='client__name'>{data.title}</h5>
      <small className="client__review">
        {data.description}
      </small>
		</article>
	);
}

export default Card
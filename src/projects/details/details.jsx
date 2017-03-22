import React from 'react';
import './details.scss';
const Details = ({ title, intro, close, technology, images, theme }) => {
	return (
		<div className={`details ${theme}`}>
			<button onClick={close}>close</button>
			<div className="intro">{intro}</div>
			<p>Technologies Used: {technology}</p>
			<div className="screenshot-wrapper">
				{images && images.map((image, idx) => {
					return <div className="screenshot" key={idx}>
						<img role="presentation" src={image.link}/>
						<label>{image.caption}</label>
					</div>
				})}
			</div>
			<button className="close2" onClick={close}>close</button>
		</div>
	);
}

export default Details;
import React from 'react';
import './tiles.scss';
const Tiles = ({ id, title, logoImgLink, selected, shouldHide, onClick }) => {
	return (
		<div id={id} className={`tiles ${selected ? 'selected' : ''} ${shouldHide ? 'hidden' : ''}`
			} onClick={onClick}>
			<img role="presentation" src={logoImgLink} />
			<label>{title}</label>
		</div>
	);
}

export default Tiles;
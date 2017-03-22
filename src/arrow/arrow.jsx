import React from 'react';
import './arrow.scss';
const Arrow = () => {
	function scrollTo() {
		let scrolled = 0;
		let id = setInterval(() => {
			window.scrollBy(0, 10);
			scrolled += 10;
			if (scrolled > 200) {
				clearInterval(id);
			}
		}, 10);
	}
    return (
        <div className="arrow-wrapper" onClick={scrollTo}>
            <p>Scroll down for more</p>
            <i className="down-arrow"/>
        </div>
    );
}
export default Arrow;

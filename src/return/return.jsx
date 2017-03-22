import React from 'react';
import './return.scss';
const Return = () => {
	function scrollBack() {
		let id = setInterval(() => {
			window.scrollBy(0, -50);
			if (window.scrollY  < 10) {
				clearInterval(id);
			}
		}, 5);
	}
    return (
        <div className="return-wrapper" onClick={scrollBack}>
            <i className="down-arrow"/>
            <p>Return to top</p>
        </div>
    );
}
export default Return;

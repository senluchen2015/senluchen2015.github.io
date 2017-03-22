import React from 'react';
import events from './events.js';
import TimeLineEvent from './timeline-event/timeline-event.jsx'
import './timeline.scss';

class TimeLine extends React.Component {
    componentDidMount() {
        const timeLineEventsEl = document.querySelectorAll('.timeline-event');
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        function addInView() {
            timeLineEventsEl.forEach((el, idx) => {
                if (isElementInViewport(el)) {
                    el.classList.add('visible');
                    if (idx === timeLineEventsEl.length - 1) {
                        document.getElementById("page-2-left").classList.add('half-width');
                        // setTimeout(() => {
                            document.getElementById("page-2-right").classList.add('visible');
                        // }, 1000)
                    }
                }
            })
        }
        window.addEventListener("scroll", addInView);
    }
    render() {
        return (
            <div className="timeline">
                <ul className="">
                    {events && events.map((e, idx) => {
                        return <TimeLineEvent
                            key={idx}
                            imgLink={e.imgLink}
                            date={e.date}
                            text={e.text}
                        />
                    })}
                    <li className="timeline-event"></li>
                </ul>
            </div>
        );
    }
}

export default TimeLine;


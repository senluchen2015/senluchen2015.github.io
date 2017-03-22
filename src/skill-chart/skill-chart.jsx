import React from 'react';
import './skill-chart.scss';
class SkillChart extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div id="skill-chart">
                <p className="row row1 tab-1"><span className="color1">let</span> <span className="color2">skills</span> = {'{'}</p>
                <p className="row row2 tab-2"><span className="color3">frontend:</span>{' {'}</p>
                <p className="row row3 tab-3"><span className="color3">everyday:</span><span className="color4"> 'Javascript (ES6)',</span></p>
                <p className="row row4 tab-3"><span className="color3">essential:</span><span className="color4"> ['HTML', 'CSS/SCSS'],</span></p>
                <p className="row row5 tab-3"><span className="color3">current_framework:</span><span className="color4"> 'React/Redux',</span></p>
                <p className="row row6 tab-3"><span className="color3">framework_used:</span><span className="color4"> ['Backbone', 'AngularJS'],</span></p>
                <p className="row row7 tab-3"><span className="color3">favorite_open_source:</span><span className="color4"> 'D3.js',</span></p>
                <p className="row row8 tab-3"><span className="color3">fun_web_api:</span><span className="color4"> ['WebRTC', 'MediaRecorder'],</span></p>
                <p className="row row9 tab-2">},</p>
                <p className="row row10 tab-2"><span className="color3">others:</span>{' {'}</p>
                <p className="row row11 tab-3"><span className="color3">mobile:</span><span className="color4"> ['Swift', 'Objective C'],</span></p>
                <p className="row row12 tab-3"><span className="color3">server:</span><span className="color4"> ['Node.js', 'Rails'],</span></p>
                <p className="row row13 tab-3"><span className="color3">ai_stat_data:</span><span className="color4"> ['Python', 'SQL'],</span></p>
                <p className="row row14 tab-3"><span className="color3">system:</span><span className="color4"> ['C', 'C++', 'Linux'],</span></p>
                <p className="row row15 tab-2">},</p>
                <p className="row row16 tab-1">};<span className="blinker">|</span></p>
            </div>
        );
    }
}

export default SkillChart;
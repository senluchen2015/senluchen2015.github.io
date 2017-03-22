import React, { Component } from 'react';
import './app.scss';
import Bio from './bio/bio.jsx';
import Contact from './contact/contact.jsx';
import Arrow from './arrow/arrow.jsx';
import TimeLine from './timeline/timeline.jsx';
import SkillChart from './skill-chart/skill-chart.jsx';
import Projects from './projects/projects.jsx';
import Return from './return/return';

class App extends Component {
    render() {
        return (
            <div className="main">
                <div className="page page1">
                    <div className="overlay"></div>
                    <Bio />
                    <Contact />
                    <Arrow />
                </div>
                <div className="page page2">
                    <div id="page-2-left">
                        <TimeLine />
                    </div>
                    <div id="page-2-right">
                        <SkillChart />
                    </div>
                </div>
                <div className="page page3">
                    <Projects />
                    <Return />
                    <p className="email">senlutomchen (at) gmail.com</p>
                </div>
            </div>
        );
    }
}

export default App;

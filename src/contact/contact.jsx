import React from 'react';
import './contact.scss';
import resume from 'static/img/resumeIcon.png';
import linkedin from 'static/img/linkedinIcon.png';
import github from 'static/img/githubIcon.png';

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <a target="_blank" href="http://www.senlutomchen.com/resume.pdf"><img className="links" src={resume} role="presentation"></img></a>
            <a target="_blank" href="https://www.linkedin.com/in/senluchen"><img className="links" src={linkedin} role="presentation"></img></a>
            <a target="_blank" href="https://github.com/senluchen2015"><img className="links" src={github} role="presentation"></img></a>
        </div>
    );
};

export default Contact;

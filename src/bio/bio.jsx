import React from 'react';
import './bio.scss';
const Bio = () => {
    return (
        <div className="bio-wrapper">
            <h1>Sen Lu Tom Chen</h1>
            <p>
                I am a front-end engineer at <a href="http://www.forio.com" target="_blank">Forio</a> in San Francisco, where I build web based simulations.
            </p>
            <p className="forio-links">
                A sample of my professional work:
                <li><a href="http://forio.com/products/role-playing-simulation/" target="_blank">Role-Playing Simulation</a></li>
                <li><a href="http://forio.com/work/hbp-tip-of-the-iceberg/" target="_blank">Harvard - Tip of the Iceberg</a></li>
                <li><a href="http://forio.com/work/wharton-alternate-reality-teaching-looking-glass/" target="_blank">Wharton - Looking Glass</a></li>
                <li><a href="http://forio.com/work/big-picture-partners-value-proposition-simulation/" target="_blank">Value Proposition Simulation</a></li>
            </p>
        </div>
    );
}

export default Bio;

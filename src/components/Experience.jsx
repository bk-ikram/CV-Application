import '../styles/sections.css';

import { useState }  from 'react'
export default function Experience(){

    return (
        <>
        <h1>Experience</h1>
        <h2>Highlight your work experience and achievements.</h2>
        <div className="formSection">
            <span className="input">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" />
            </span>
            <span className="input">
                <label htmlFor="position">Position Title</label>
                <input type="text" id="position"/>
            </span>
        </div>
        <div className="formSection">
            <span className="input">
                <label htmlFor="location">Location</label>
                <input type="text" id="location"/>
            </span>
            <span className="input">
                <label htmlFor="date">Date</label>
                <input type="text" id="date"/>
            </span>
        </div>
        <div className="formSection">
            <span className="input">
                <label htmlFor="description">Description</label>
                <textarea id="description"/>
            </span>
        </div>
        </>
    )
}
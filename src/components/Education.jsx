import '../styles/sections.css';
import EntryNavigation from './EntryNavigation.jsx'
import { useState } from 'react';

function handleSectionMgmt(){
    alert('this should delete');
}

export default function Education() {
    const [entryIndex, setEntryIndex] = useState(0);
    const [currentEntry, setCurrentEntry] = useState({})
    return (
        <>
            <h1>Education</h1>
            <h2>Demonstrate your qualifications, skills, and readiness for the job.
                List information in the most recent first!</h2>
            <div className="formSection">
                <span className="input">
                    <label htmlFor="school">School name</label>
                    <input type="text" id="school" />
                </span>
                <span className="input">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="Location"/>
                </span>
                <span className="input">
                    <label htmlFor="date">Date</label>
                    <input type="text" id="date"/>
                </span>
            </div>
            <div className="formSection textarea-section">
                <span className="input">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" />
                </span>
            </div>
            <EntryNavigation handleSectionMgmt/>
        </>
    )
}
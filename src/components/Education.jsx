import '../styles/sections.css';
import EntryNavigation from './EntryNavigation.jsx'
import { useState } from 'react';

export default function Education({dataObj, setDataObj, handleInputChange, makeEntryMgmt}) {
    console.log("render");
    const [entryIndex, setEntryIndex] = useState(0);

    console.log(`current index is ${entryIndex}`);
    //i is declared for brevity.
    const i = entryIndex;
    //Get number of items in dataObj;
    const numEntries = dataObj.length;

    function handleLocalChange(e){
        const field = e.target.id;
        const value = e.target.value;
        handleInputChange(i,field,value);
    }

    return (
        <>
            <h1>Education</h1>
            <h2>Demonstrate your qualifications, skills, and readiness for the job.
                List information in the most recent first!</h2>
            <div className="formSection">
                <span className="input">
                    <label htmlFor="school">School name</label>
                    <input type="text" id="school" onChange={handleLocalChange} value={(dataObj[i]).school || ''}/>
                </span>
                <span className="input">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" onChange={handleLocalChange} value={(dataObj[i]).location || ''}/>
                </span>
                <span className="input">
                    <label htmlFor="date">Date</label>
                    <input type="text" id="date" onChange={handleLocalChange} value={(dataObj[i]).date || ''}/>
                </span>
            </div>
            <div className="formSection textarea-section">
                <span className="input">
                    <label htmlFor="description">Description</label>
                    <textarea id="description"  onChange={handleLocalChange} value={(dataObj[i]).description || ''}/>
                </span>
            </div>
            <EntryNavigation 
                numEntries = {numEntries}
                currentIndex = {entryIndex}
                setEntryIndex = {setEntryIndex}
                handleEntryMgmt = {makeEntryMgmt(setDataObj)}
            />

        </>
    )
}
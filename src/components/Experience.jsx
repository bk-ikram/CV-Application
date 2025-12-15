import '../styles/sections.css';
import EntryNavigation from './EntryNavigation.jsx'
import { useState }  from 'react'
export default function Experience({dataObj, setDataObj, handleInputChange, makeEntryMgmt}){
    const [entryIndex, setEntryIndex] = useState(0);
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
        <h1>Experience</h1>
        <h2>Highlight your work experience and achievements.</h2>
        <div className="formSection">
            <span className="input">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" onChange={handleLocalChange} value={(dataObj[i]).company || ''}/>
            </span>
            <span className="input">
                <label htmlFor="position">Position Title</label>
                <input type="text" id="position"onChange={handleLocalChange} value={(dataObj[i]).position || ''}/>
            </span>
        </div>
        <div className="formSection">
            <span className="input">
                <label htmlFor="location">Location</label>
                <input type="text" id="location"onChange={handleLocalChange} value={(dataObj[i]).location || ''}/>
            </span>
            <span className="input">
                <label htmlFor="date">Date</label>
                <input type="text" id="date"onChange={handleLocalChange} value={(dataObj[i]).date || ''}/>
            </span>
        </div>
        <div className="formSection textarea-section">
            <span className="input">
                <label htmlFor="description">Description</label>
                <textarea id="description"onChange={handleLocalChange} value={(dataObj[i]).description || ''}/>
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
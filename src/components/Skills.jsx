import { useState }  from 'react';
import '../styles/sections.css';
import {TrashIcon} from './Icons.jsx';

    function SkillEntry({obj,handleDelete, handleInputChange}){
        const {skill,tools,uid} = obj;

        function handleLocalChange(e){
        const field = e.target.name;
        const value = e.target.value;
        const formDiv = e.target.closest("div.formSection");
        const index = formDiv.getAttribute("id");
        handleInputChange(index,field,value);
    }

        
        return(
            <div className="formSection skills" id={uid}>
                <span className="input skill">
                    <label htmlFor={"skill-" + uid}>Skill</label>
                    <input type="text" id={"skill-" + uid} name="skill" value = {skill || ''} onChange={handleLocalChange}/>
                </span>
                <span className="input tools">
                    <label htmlFor={"tools-" + uid}>Tools</label>
                    <input type="text" id={"tools-" + uid} name="tools" value = {tools || ''} onChange={handleLocalChange}/>
                </span>
                <button className="delete entry-mgmt" onClick={handleDelete}>
                    <span>
                        <TrashIcon/>
                    </span>
                </button>
            </div>
        )
    }

export default function Skills({dataObj, setDataObj, handleInputChange, entryMgmt}){
    const numEntries = dataObj.length;
    function handleAdd(e){
        entryMgmt.add({uid: crypto.randomUUID()});
    }

    function handleDelete(e){
        const formDiv = e.target.closest("div.formSection");
        const uid = formDiv.getAttribute("id");
        entryMgmt.uidDelete(uid);
    }

    return (
        <>
        <h1>Skills</h1>
        <h2>List your technical skills and tools you are familiar with.</h2>
        {
        dataObj.map((ele) => <SkillEntry 
                                key = {ele.uid} 
                                obj = {ele} 
                                handleDelete ={handleDelete}
                                handleInputChange = {handleInputChange}/> )
        }
        <button className="add" onClick={handleAdd}>Add</button>
        </>
    )
}


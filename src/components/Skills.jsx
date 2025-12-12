import { useState }  from 'react';
import '../styles/sections.css';
import {TrashIcon} from './Icons.jsx';

//const [SkillList, setSkillList] = useState([]);

function SkillEntry(){
    const uid = crypto.randomUUID();
    return(
        <div className="formSection skills" id={uid}>
            <span className="input skill">
                <label htmlFor={"skill-" + uid}>Skill</label>
                <input type="text" id={"skill-" + uid}/>
            </span>
            <span className="input tools">
                <label htmlFor={"tools-" + uid}>Tools</label>
                <input type="text" id={"tools-" + uid}/>
            </span>
            <button className="delete entry-mgmt">
                <span>
                    <TrashIcon/>
                </span>
            </button>
        </div>
    )
}
export default function Skills({skillDetails,numSkills}){
    return (
        <>
        <h1>Skills</h1>
        <h2>List your technical skills and tools you are familiar with.</h2>
        <SkillEntry/> 
        <button className="add">Add</button>
        </>
    )
}


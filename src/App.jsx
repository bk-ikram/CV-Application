import { useState }  from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo.jsx'
import Preview from './components/Preview.jsx'
import {RightChevron,LeftChevron} from './components/Icons.jsx'



function App() {
  // The shoe preview state has a value of true when the CV preview is shown, and false when not
  const [showPreview, setShowPreview] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({fullname: undefined
                                                    ,address: undefined
                                                    ,city: undefined
                                                    ,zipCode: undefined
                                                    ,email: undefined
                                                    ,phone: undefined
                                                    ,githubURL: undefined
                                                  });
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <>
      <div id="content">
        <div id="main-panel">
          <header>
            <div class='logo'>
              CV Generator
            </div>
            <nav>
              
            </nav>
            <button class='toggle-preview'>
              {showPreview ?
              <RightChevron/>:
              <LeftChevron/>} 
              {showPreview ?
              " Hide" :
              " Show"} 
              Preview
            </button>
          </header>
          my main panel
        </div>
        {showPreview && <Preview/>}

      </div>
    
{/*       <header>
        <h1>CV Builder</h1>
        <button onClick={()=>setEditMode(!editMode)}>
          {editMode ? "Generate" : "Edit"}
        </button>
      </header>
      
      {editMode ?
      <Form/> :
      <CV/> } */}
      
    </>
  )
}

export default App

import { useState }  from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo.jsx'
import Preview from './components/Preview.jsx'
import {RightChevronIcon,LeftChevronIcon,PersonIcon,EducationIcon,SkillsIcon,ExperienceIcon} from './components/Icons.jsx'



function App() {
  const SECTIONS = [
    {index: 0, title: "Personal Info", component: "", icon: <PersonIcon/>},
    {index: 1 ,title: "Personal Info", component: "", icon: <EducationIcon/>},
    {index: 2 ,title: "Personal Info", component: "", icon: <SkillsIcon/>},
    {index: 3 ,title: "Personal Info", component: "", icon: <ExperienceIcon/>}
  ]
  // The shoe preview state has a value of true when the CV preview is shown, and false when not
  const [showPreview, setShowPreview] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
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

  function togglePreview () {
    setShowPreview(!showPreview);
    document.querySelector("#content").classList.toggle("two-columns");
  }

  return (
    <>
      <div id="content">
        <div id="main-panel">
          <header>
            <div className='logo'>
              CV Generator
            </div>
            <nav>
              <ul>
                {SECTIONS.map((section) => {
                  return (<li key={section.index}>
                            <button section-index={section.index}>{section.icon}</button>
                          </li>)
                })}
                
              </ul>
            </nav>
            <button className='toggle-preview' onClick= {togglePreview}>
              {showPreview ?
              <RightChevronIcon/>:
              <LeftChevronIcon/>} 
              {showPreview ?
              " Hide" :
              " Show"} 
              Preview
            </button>
          </header>
          my main panel
          <div className="section">
            <div className="section-navigation">
                {sectionIndex > 0 && 
                  <button className="section-back"><RightChevronIcon color="black"/></button>}
                {sectionIndex < SECTIONS.length &&
                  <button className="section-next"><LeftChevronIcon/></button>}
            </div>
            <div className="section-content">

            </div>
          </div>
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

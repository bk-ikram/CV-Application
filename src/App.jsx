import { useState } from 'react'
import './styles/App.css'
import PersonalInfo from './components/PersonalInfo.jsx'
import Education from './components/Education.jsx'
import Preview from './components/Preview.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import { RightChevronIcon, LeftChevronIcon, PersonIcon, EducationIcon, SkillsIcon, ExperienceIcon } from './components/Icons.jsx'



function App() {

  // The shoe preview state has a value of true when the CV preview is shown, and false when not
  const [showPreview, setShowPreview] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([{}]);
  const [skills, setSkills] = useState([{}]);
  const [experience, setExperience] = useState([{}]);

    //This function is used inside sections to handle changing input.
    function makeObjHandler(dataObj,setDataObj){
      return function(field,value){
        const updated ={...dataObj,[field] : value};
        setDataObj(updated);
        console.log(dataObj);
      }
    }

    //This function is used inside sections to handle changing input.
    function makeArrayHandler(dataObj,setDataObj){
      return function(index,field,value){
        const updated={...(dataObj[index])};
        updated[index] = {...updated,[field] : value}
        setDataObj(updated);
        console.log(dataObj);
      }
    }

  const SECTIONS = [
    { index: 0, title: "Personal Info", component: <PersonalInfo dataObj={personalInfo} setDataObj={setPersonalInfo} handleInputChange ={makeObjHandler(personalInfo, setPersonalInfo)}/>, icon: <PersonIcon /> },
    { index: 1, title: "Education", component: <Education  dataObj={education} setDataObj={setEducation} handleInputChange ={makeArrayHandler(education, setEducation)} />, icon: <EducationIcon /> },
    { index: 2, title: "Skills", component: <Skills />, icon: <SkillsIcon /> },
    { index: 3, title: "Work Experience", component: <Experience />, icon: <ExperienceIcon /> }
  ]

  function togglePreview() {
    setShowPreview(!showPreview);
    document.querySelector("#content").classList.toggle("two-columns");
  }

  function handleNavClick(e) {
    const target = e.target.closest("button");
    if (!target)
      return;
    const newIndex = target.getAttribute("sectionindexvalue")
    setSectionIndex(parseInt(newIndex));
  }

  function handleSectionNavigation(e) {
    if (e.currentTarget.classList.contains("section-next"))
      setSectionIndex(sectionIndex + 1);

    if (e.currentTarget.classList.contains("section-back"))
      setSectionIndex(sectionIndex - 1);
  }

  function handleSectionMgmt(action) {
    if (action === 'back')
      setSectionIndex(sectionIndex + 1);

    if (e.currentTarget.classList.contains("section-back"))
      setSectionIndex(sectionIndex - 1);
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
              <ul onClick={handleNavClick}>
                {SECTIONS.map((section) => {
                  return (<li key={section.index} className={sectionIndex === section.index
                    ? "nav-section-selected"
                    : ""
                  }>
                    <button sectionindexvalue={section.index}>
                      {section.icon}
                    </button>
                  </li>)
                })}

              </ul>
            </nav>
            <button className='toggle-preview' onClick={togglePreview}>
              {showPreview ?
                <RightChevronIcon /> :
                <LeftChevronIcon />}
              {showPreview ?
                " Hide" :
                " Show"}
              Preview
            </button>
          </header>
          <div className="section">
            <div className="section-navigation">
              {sectionIndex > 0 &&
                <button className="section-back" onClick={handleSectionNavigation}>
                  <LeftChevronIcon color="black" />
                </button>}
              {sectionIndex < (SECTIONS.length - 1) &&
                <button className="section-next" onClick={handleSectionNavigation}>
                  <RightChevronIcon />
                </button>}
            </div>
            <div className="section-content">
              {SECTIONS.find((ele) => ele.index === sectionIndex).component}
            </div>
          </div>
        </div>
        {showPreview && <Preview />}

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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/EntryForm.jsx'
import CV from './components/GeneratedCV.jsx'

function App() {
  // The edit mode state has a value of true when user is modifying data, and false when not
  const [editMode, setEditMode] = useState(true);

  return (
    <>
      <header>
        <h1>CV Builder</h1>
        <button onClick={()=>setEditMode(!editMode)}>
          {editMode ? "Generate" : "Edit"}
        </button>
      </header>
      
      {editMode ?
      <Form/> :
      <CV/> }
    </>
  )
}

export default App

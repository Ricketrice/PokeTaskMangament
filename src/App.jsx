import { useState } from "react";
import NewProject from "./assets/components/NewProject";
import Sidebar from "./assets/components/Sidebar";
import NoProject from "./assets/NoProject";
import SelectedProject from "./assets/components/SelectedProject";

function App() {
  const [formData, setFormData] = useState({
    selectedProperties: undefined,
    project:[],
    tasks: []
  });

  function handleAddTask(text) {
    setFormData(prevForm => {
      const taskID = Math.random()
      const newTask = {
        text: text,
        projectID: prevForm.selectedProperties,
        id: taskID 
      }

      return {
        ...prevForm, 
        tasks:  [newTask,...prevForm.tasks]
      }
    })

  }

  function handleDeleteTask(id) {
    setFormData(prevForm => {
      return {
        ...prevForm,
        tasks: prevForm.tasks.filter((task) => task.id !== id)
      };
    })
  }

  

  function handleSelectProject(id) {
        setFormData(prevForm => {
      return {
        ...prevForm,
        selectedProperties:id
      };
    })
  }

  function handleDelete() {
        setFormData(prevForm => {
      return {
        ...prevForm,
        selectedProperties:null,
        project: prevForm.project.filter((pro) => {
          pro.id !== prevForm.selectedProperties
        })
      };
    })
  }
  function handleStart() {
    setFormData(prevForm => {
      return {
        ...prevForm,
        selectedProperties:null
      };
    })
  }
  function addProject(projectData) {
    setFormData(prevForm => {
      const newProject = {
        ...projectData, id:Math.random()
      }
      return {
        ...prevForm, 
        project: [...prevForm.project, newProject],
        selectedProperties:undefined
      }
    })
  }

  function onCancel() {
        setFormData(prevForm => {
      return {
        ...prevForm,
        selectedProperties:undefined
      };
    })
  }

  console.log(formData);
  const selectedProject = formData.project.find(project => project.id === formData.selectedProperties)
  let content = <SelectedProject tasks={formData.tasks} project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>
  if (formData.selectedProperties === null) {
    content = <NewProject onAdd={addProject} onCancel={onCancel}/>
  } else if (formData.selectedProperties === undefined) {
    content = <NoProject onStartProject={handleStart} />
  } 
  
  return (
    <main className="h-screen flex">
      <Sidebar 
      selectedID = {formData.selectedProperties }
      onStartProject={handleStart} addedProject = {formData.project} onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;

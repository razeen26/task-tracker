// rafc

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(function () {
    async function getTasks() {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, []);

  // Fetch Tasks Data
  async function fetchTasks() {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    console.log(data);
    return data;

  }

  // Fetch Task Data
  async function fetchTask(id) {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data);
    return data;

  }

  // Add Task
  async function addTask(task) {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
    // console.log(task);
    // const id = Math.floor(Math.random()*10000)+1
    // const newTask = { id, ...task}
    // setTasks([...tasks,newTask])
  }


  // Delete Task
  async function deleteTask(id) {
    // console.log("Deleted",id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
    setTasks(tasks.filter(function (task) {
      return task.id !== id
    }))
  }

  // Toggle Reminder
  async function toggleReminder(id) {
    // console.log("Toggle Reminder",id);
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map(function (task) {
      return task.id === id ? { ...task, reminder: data.reminder } : task;
    }))
  }

  return (
    <Router>
      <div className="container">
        <Header onAddToggleA={function () {
          setShowAddTask(!showAddTask);
          return
        }} showAddA={showAddTask} />
        <Routes>
          <Route path="/" element={
            <>
              {showAddTask && <AddTask onAddA={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDeleteA={deleteTask} onToggleA={toggleReminder} /> : "No Tasks To Show"}

            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

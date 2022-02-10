import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([{
    id:4,
    text:"JJJ",
    date:"12-04-4567",
    reminder:false
  }])

  const addTask =(task) =>{

    const id = Math.random()*1000+1
    // const newTask = {id: id,text : task.text,date : task.date,reminder : task.reminder}
    const newTask = {...task}
    setTasks([...tasks,newTask])
    console.log(newTask)
  }
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder}: task))
  }
  return (
    <div id = 'container'>
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {!showAddTask && (tasks.length>0? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>) : ('No tasks'))}
      {showAddTask && <AddTask onAdd = {addTask}/>}
      
    </div>
  );
}

export default App;

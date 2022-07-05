import Header from "./components/Header"
import Tasks from "./components/Tasks"
import {useState , useEffect} from 'react'
import Addtask from "./components/Addtask"
import Footer from "./components/Footer"
import About from "./components/About"
import { Link, Outlet } from "react-router-dom"
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "./lib/init-firebase"

function App() {

  // const location = useLocation()  // import method uselocation from react-router-dom
  // {location.pathname === '/' && ('WHAT TO DO')}

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() =>{
    getTasks()
  }, [tasks])



  //Fetch Task in firebase
  function getTasks(){
    const taskCollectionRef = collection(db, 'tasks')
    getDocs(taskCollectionRef).then(response => {
     const interview = response.docs.map((doc) => ({
       data: doc.data(),
       id: doc.id,
     }))
     setTasks(interview)
    }).catch(error => console.log(error.message))
  }

  // useEffect(() => {
  //   const getData = async () => {
  //     const taskFromServer = await fetchTasks()
  //     setTasks(taskFromServer)
  //   }

  //   getData()
  // }, [])

//   //Fetch Tasks
//   const fetchTasks = async () => {
//       const res = await fetch('http://localhost:5000/tasks')
//       const data = await res.json()
//       console.log(data)

//       return data
//     }

// // Fetch a single task
// const fetchTask = async (id) => {
//       const res = await fetch(`http://localhost:5000/tasks/${id}`)
//       const data = await res.json()

//       return data
//     }


    //Add Task
    // const addTask = async (task) =>{
    //   const res = await fetch('http://localhost:5000/tasks', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(task),
    //   })

    //   const data = await res.json()

    //   setTasks([...tasks, data])
    // }

    //Delete task in firebase
    const deleteTask = (id) => {
      const docRef = doc(db, 'tasks', id)
      deleteDoc(docRef).then(() => {alert('Interview Deleted')}).catch((error) => {console.log(error.message)})
    }

    // // Delete Task
    // const deleteTask = async (id) => {
    //   await fetch(`http://localhost:5000/tasks/${id}`,{
    //     method: 'DELETE'
    //   })

    //   setTasks(tasks.filter((task) => task.id !== id))
    // }

    const toggleReminder = () => {
  
    }


    // // Toggle Reminder
    // const toggleReminder = async (id) => {
    //   const taskToToggle = await fetchTask(id)
    //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(updTask)
    //   })
      
    //   const data = await res.json()
    //   setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task ))
    // }

    return ( 
 
        <div className = "container" >
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/ >
        {showAddTask && <Addtask  onAdd=''/>}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  />) : ('No Job interview done')}
        <Link to='/about'>{About}</Link>
        <Footer />
        <Outlet />
        </div>
   
    )
}

export default App
import { useState, useEffect } from "react";
import AddTask from "./components/addtask";
import Header from "./components/header";
import Tasks from "./components/tasks";

function App() {
  const appName = `Task Tracker`;
  const appDescription = `A funny React App in the stack!`;
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) =>
          task.id === id
            ? { ...task, reminder: !task.reminder }
            : task
      )
    );
  }

  return (
    <div className="container">
      <h1>React {appName}</h1>
      <small> {appDescription} </small>
      <Header onAdd={() => { setShowAddTask(!showAddTask) }} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No Task to show!'}
    </div>
  );
}

export default App;

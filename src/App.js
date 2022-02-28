import { useState } from "react";
import AddTask from "./components/addtask";
import Header from "./components/header";
import Tasks from "./components/tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task number 1.',
      day: 'Monday at 8:00AM',
      reminder: true
    },
    {
      id: 2,
      text: 'Task number 2.',
      day: 'Monday at 9:00AM',
      reminder: true
    },
    {
      id: 3,
      text: 'Task number 3.',
      day: 'Monday at 10:00AM',
      reminder: true
    }
  ])
  const appName = `Task Tracker`;
  const appDescription = `A funny React App in the stack!`;

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
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

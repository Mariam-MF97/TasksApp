import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study OOP",
      day: "Mar 3th at 6:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Study React.js",
      day: "Mar 5th at 3:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Study Angular",
      day: "Mar 10th at 8:00am",
      reminder: true,
    },
  ]);
  //Add a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //reminder
  const setReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const handleAdd = () => {
    setShowAdd(!showAdd);
  };
  return (
    <div className="container">
      <Header onAdd={handleAdd} showAddTask={showAdd}/>
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onRemind={setReminder} />
      ) : (
        "there is no task yet."
      )}
    </div>
  );
}

export default App;

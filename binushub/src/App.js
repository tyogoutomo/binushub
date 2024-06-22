import { useState } from 'react';
// import Message from './Message';
// import Alert from './components/Alert';
import Button from './components/Button';
// import { Card, TaskList } from "./components/Card";
// import ListGroup from "./components/ListGroup";
import React from 'react';
import TaskCard from './components/Card';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'First Task', description: 'Lorem ipsum dolor sit amet. Quo ducimus voluptatem id molestias deleniti et minus asperiores eum eveniet accusantium et eius atque et quae fuga qui alias sapiente. Sed sint quia aut molestias magnam rem vero repudiandae et voluptas corporis qui illum sunt et excepturi eveniet', dueDate: '2024-06-30', completed: false, tag: "important"},
    { id: 2, title: 'Second Task', description: 'diandae maxime qui laborum quia. Vel temporibus laboriosam aut dolore dolore est quibusdam molestiae vel Quis porro est provident voluptatem aut enim ducimus. Qui voluptatem quia.', dueDate: '2024-07-05', completed: false, tag: "important"},
  ]);

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const onUnComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: false };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Important Task</h1>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onComplete={completeTask} onUnComplete={onUnComplete}/>
      ))}
    </div>
  );
};

export default App;

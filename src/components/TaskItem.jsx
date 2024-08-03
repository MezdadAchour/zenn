import React from 'react';
import '../styles.css';

const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <h3 onClick={() => toggleComplete(task.id)}>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => setTaskToEdit(task)}>Modifier</button>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
};

export default TaskItem;

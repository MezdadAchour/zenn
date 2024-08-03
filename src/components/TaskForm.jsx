import React, { useState, useEffect } from 'react';
import '../styles.css';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      const task = {
        id: taskToEdit ? taskToEdit.id : Date.now(),
        name,
        description,
        completed: taskToEdit ? taskToEdit.completed : false,
      };
      if (taskToEdit) {
        editTask(task);
      } else {
        addTask(task);
      }
      setName('');
      setDescription('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">
        {taskToEdit ? 'Modifier la tâche' : 'Ajouter la tâche'}
      </button>
    </form>
  );
};

export default TaskForm;

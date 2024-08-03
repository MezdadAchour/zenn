import React from 'react';
import TaskItem from './TaskItem';
import '../styles.css';

const TaskList = ({ tasks, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;

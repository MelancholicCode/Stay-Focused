import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import TasksForm from '../TasksForm/TasksForm';
import TasksList from '../TasksList/TasksList';

const TasksContent = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Какое-то дело',
      isDone: false,
      isFavorite: false
    },
    {
      id: 2,
      text: 'Еще одно дело',
      isDone: false,
      isFavorite: false
    },
    {
      id: 3,
      text: 'И еще одно дело',
      isDone: false,
      isFavorite: false
    }
  ]);
  const [isFormActive, setFormActive] = useState(false);

  const addTask = (text) => {
    setTasks(prev => [...prev, {
      id: new Date(),
      text
    }])
  }

  const onDoneTask = (id) => {
    setTasks(prev => {
      const res = prev.map(task => {
        if (task.id === id) {
          task.isDone = !task.isDone;
          return task;
        }
        return task;
      })
      return res;
    });
  }

  const editTask = (text, id) => {
    setTasks(prev => {
      return prev.map(task => {
        if (task.id === id) {
          task.text = text;
          return task;
        }
        return task;
      })
    })
  }

  return (
    <div className="tasks">
      <Modal
        isActive={isFormActive}>
        <TasksForm
          addTask={addTask}
          setFormActive={setFormActive}/>
      </Modal>
      <div
        onClick={() => setFormActive(true)}
        className="tasks__create-btn">Создать занятие</div>
      <TasksList
        tasks={tasks}
        onDoneTask={onDoneTask}
        editTask={editTask}/>
    </div>
  );
};

export default TasksContent;
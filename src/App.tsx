import { useState } from "react";
import styles from "./App.module.css";
import { ITask } from "./interfaces/Task";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Modal from "./components/Modal/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (!display) {
      modal!.classList.add("hide");
      return;
    }
    modal!.classList.remove("hide");
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    hideOrShowModal(false);
  };

  return (
    <>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div id="task-form">
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div id="task-list">
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEditTask={editTask}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

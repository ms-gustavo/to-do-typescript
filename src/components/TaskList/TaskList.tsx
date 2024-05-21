import React from "react";
import styles from "./TaskList.module.css";
import { ITask } from "../../interfaces/Task";

type Props = {
  taskList: ITask[];
};

function TaskList({ taskList }: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
}

export default TaskList;

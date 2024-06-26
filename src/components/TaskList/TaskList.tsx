import styles from "./TaskList.module.css";
import { ITask } from "../../interfaces/Task";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEditTask(task: ITask): void;
};

function TaskList({ taskList, handleDelete, handleEditTask }: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div id="task-list-item" className={styles.task} key={task.id}>
            <div id="task-list-item-details" className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div id="task-list-item-actions" className={styles.actions}>
              <i
                className="bi bi-pencil"
                onClick={() => {
                  handleEditTask(task);
                }}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDelete(task.id);
                }}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
}

export default TaskList;

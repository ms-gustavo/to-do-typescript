import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

function Modal({ children }: Props) {
  const closeModal = (): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div id="edit-modal" className={styles.modal}>
        <h2>Editar Tarefa</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;

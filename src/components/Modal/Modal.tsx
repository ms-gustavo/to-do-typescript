import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

function Modal({ children }: Props) {
  return (
    <div id="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;

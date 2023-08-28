import styles from './modal.module.css'
export const Modal = ({ toggleModal, children }) => {
  return (
    <div className={styles.container}>
      {children}
      <button onClick={toggleModal}>Close</button>
    </div>
  );
};

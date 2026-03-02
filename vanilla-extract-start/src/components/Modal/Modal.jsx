import { Button } from '../Button';
import * as styles from './Modal.css';

export default function Modal({ children, title, onClose }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    if (!onClose) return;
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={handleClick}
      >
        <h2 className={styles.modalTitle} id="modal-title">
          {title}
        </h2>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalActions}>
          <Button variant="ghost" onClick={handleClose}>
            닫기
          </Button>
        </div>
      </section>
    </div>
  );
}

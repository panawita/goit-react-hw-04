import Modal from 'react-modal';

Modal.setAppElement('#root');

import styles from './ImageModal.module.css';

const ImageModal = ({ modalIsOpen, closeModal, src, alt, user }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={closeModal} className={styles.modalBtn}>
        x
      </button>
      <div>
        <img className={styles.modalImage} src={src} alt={alt} />
        <p className={styles.modalText}>{alt}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;

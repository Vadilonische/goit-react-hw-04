import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onCloseModal, imgUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <button onClick={onCloseModal}>Close</button>
      <img src={imgUrl} alt="Large view" />
    </Modal>
  );
}

import "./Modal.css";

const Modal = ({ children, isOpen, setModalClose }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={setModalClose}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={setModalClose}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;

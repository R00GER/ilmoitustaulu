import PropTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

export const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const openModal = (component) => {
    setShowModal(true);
    setModalContent(component);
  };

  const closeModal = () => setShowModal(false);

  const memoizedValue = useMemo(() => ({
    closeModal,
    openModal,
    showModal,
    modalContent,
  }));

  return (
    <ModalContext.Provider value={memoizedValue}>
      {children}
    </ModalContext.Provider>
  );
}

ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContextProvider;

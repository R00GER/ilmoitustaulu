import { Box, Modal } from '@mui/material';
import { useContext } from 'react';
import { ModalContext } from './ModalContextProvider';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100vw',
  bgcolor: 'background.paper',
  border: '2px solid #3e4154',
  borderRadius: '6px',
  boxShadow: 24,
  p: 4,
  padding: '0px',
};

function ModalComponent() {
  const { showModal, modalContent, closeModal } = useContext(ModalContext);

  return (
    <Modal open={showModal} onClose={closeModal}>
      <Box sx={style}>{modalContent}</Box>
    </Modal>
  );
}

export default ModalComponent;

import {
  Button,
  Header,
  Modal,
  ModalActions,
  ModalContent,
} from "semantic-ui-react";

const ModalEdit = ({ isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen}>
      <Header>Edit Entry</Header>
      <ModalContent>Something here</ModalContent>
      <ModalActions>
        <Button onClick={() => setIsOpen(false)}>close</Button>
      </ModalActions>
    </Modal>
  );
};

export default ModalEdit;

import {
  Button,
  Header,
  Modal,
  ModalActions,
  ModalContent,
} from "semantic-ui-react";
import EntryForm from "./EntryForm.component";

const ModalEdit = ({
  isOpen,
  setIsOpen,
  value,
  description,
  isExpense,
  setIsExpense,
  setDescription,
  setValue,
}) => {
  return (
    <Modal open={isOpen}>
      <Header>Edit Entry</Header>
      <ModalContent>
        <EntryForm
          isExpense={isExpense}
          description={description}
          value={value}
          setIsExpense={setIsExpense}
          setDescription={setDescription}
          setValue={setValue}
      
        />
      </ModalContent>
      <ModalActions>
        <Button onClick={() => setIsOpen(false)}>close</Button>
      </ModalActions>
    </Modal>
  );
};

export default ModalEdit;

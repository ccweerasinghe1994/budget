import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

const ButtonSaveOrCancel = ({
  addEntry,
  value,
  description,
  clearForm,
  isExpense,
}) => {
  const entryData = {
    value,
    description,
    isExpense,
  };
  function onClick() {
    addEntry(entryData);
    clearForm();
  }
  return (
    <ButtonGroup style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <ButtonOr />
      <Button onClick={onClick} primary>
        Ok
      </Button>
    </ButtonGroup>
  );
};

export default ButtonSaveOrCancel;

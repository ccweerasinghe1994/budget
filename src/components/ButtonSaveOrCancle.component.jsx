import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

const ButtonSaveOrCancle = ({
  addEntry,
  value,
  description,
  clearForm,
  isExpence,
}) => {
  const entryData = {
    value,
    description,
    isExpence,
  };
  function onClick() {
    addEntry(entryData);
    clearForm();
  }
  return (
    <ButtonGroup style={{ marginTop: 20 }}>
      <Button>Cancle</Button>
      <ButtonOr />
      <Button onClick={onClick} primary>
        Ok
      </Button>
    </ButtonGroup>
  );
};

export default ButtonSaveOrCancle;

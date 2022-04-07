import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel.component";
import EntryForm from "./EntryForm.component";

const NewEntryForm = ({
  addEntry,
  value,
  description,
  setDescription,
  isExpense,
  setIsExpense,
  setValue,
}) => {

  function clearForm() {
    setDescription("");
    setValue("");
    setIsExpense(false);
  }
  return (
    <Form unstackable>
      <EntryForm
        value={value}
        description={description}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

      <ButtonSaveOrCancel
        clearForm={clearForm}
        value={value}
        isExpense={isExpense}
        description={description}
        addEntry={addEntry}
      />
    </Form>
  );
};

export default NewEntryForm;

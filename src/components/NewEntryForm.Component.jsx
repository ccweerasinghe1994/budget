import { useState } from "react";
import {
  Checkbox,
  Form,
  FormGroup,
  FormInput,
  Segment,
} from "semantic-ui-react";
import ButtonSaveOrCancle from "./ButtonSaveOrCancle.component";

const NewEntryForm = ({ addEntry }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpence, setIsExpense] = useState(false);
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      setDescription(value);
    } else if (name === "value") {
      setValue(value);
    }
  };
  function clearForm() {
    setDescription("");
    setValue("");
  }
  return (
    <Form unstackable>
      <FormGroup>
        <FormInput
          onChange={onChange}
          name="description"
          value={description}
          placeholder="new Shiny thing"
          icon={"tags"}
          width={12}
          label="Description"
        />
        <FormInput
          onChange={onChange}
          name="value"
          value={value}
          width={4}
          placeholder="100.00"
          icon={"dollar"}
          label="Value"
          iconPosition="left"
        />
      </FormGroup>
      <Segment compact>
        <Checkbox
          toggle
          label="Is a expence"
          checked={isExpence}
          onChange={() => setIsExpense((isExpence) => !isExpence)}
        />
      </Segment>
      <ButtonSaveOrCancle
        clearForm={clearForm}
        value={value}
        isExpence={isExpence}
        description={description}
        addEntry={addEntry}
      />
    </Form>
  );
};

export default NewEntryForm;

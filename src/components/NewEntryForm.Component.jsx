import { Form, FormGroup, FormInput } from "semantic-ui-react";
import ButtonSaveOrCancle from "./ButtonSaveOrCancle.component";

const NewEntryForm = () => (
  <Form unstackable>
    <FormGroup>
      <FormInput
        placeholder="new Shiny thing"
        icon={"tags"}
        width={12}
        label="Description"
      />
      <FormInput
        width={4}
        placeholder="100.00"
        icon={"dollar"}
        label="Value"
        iconPosition="left"
      />
    </FormGroup>
    <ButtonSaveOrCancle />
  </Form>
);

export default NewEntryForm;

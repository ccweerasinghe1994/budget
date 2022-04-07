import { Checkbox, FormGroup, FormInput, Segment } from "semantic-ui-react";

const EntryForm = ({
  description,
  value,
  isExpense,
  setIsExpense,
  setDescription,
  setValue,
}) => {
  return (
    <>
      <FormGroup>
        <FormInput
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          value={description}
          placeholder="new Shiny thing"
          icon={"tags"}
          width={12}
          label="Description"
        />
        <FormInput
          onChange={(e) => setValue(e.target.value)}
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
          label="Is a expense"
          checked={isExpense}
          onChange={() => setIsExpense((isExpense) => !isExpense)}
        />
      </Segment>
    </>
  );
};

export default EntryForm;

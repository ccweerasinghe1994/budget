import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine.component";

const EntryLines = ({ entries, deleteEntry, addEntry }) => {
  return (
    <Container>
      {entries.map((props) => (
        <EntryLine
          deleteEntry={deleteEntry}
          key={props.id}
          {...props}
        />
      ))}
    </Container>
  );
};

export default EntryLines;

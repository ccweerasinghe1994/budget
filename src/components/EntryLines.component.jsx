import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine.component";

const EntryLines = ({ entries, deleteEntry, editEntry }) => {
  return (
    <Container>
      {entries.map((props) => (
        <EntryLine
          editEntry={editEntry}
          deleteEntry={deleteEntry}
          key={props.id}
          {...props}
        />
      ))}
    </Container>
  );
};

export default EntryLines;

import { useState } from "react";
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Segment,
} from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

const EntryLine = ({
  isExpence = false,
  description,
  value,
  deleteEntry,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Segment color={isExpence ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              {description}
            </GridColumn>
            <GridColumn width={3}>{value}</GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" onClick={() => setIsOpen(true)} />
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <ModalEdit setIsOpen={setIsOpen} isOpen={isOpen} />
    </Container>
  );
};

export default EntryLine;

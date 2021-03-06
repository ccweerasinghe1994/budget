import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Segment,
} from "semantic-ui-react";

const EntryLine = ({
  isExpense = false,
  description,
  value,
  deleteEntry,
  id,
  editEntry,
}) => {
  return (
    <Container>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              {description}
            </GridColumn>
            <GridColumn width={3}>{value}</GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" onClick={() => editEntry(id)} />
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
    </Container>
  );
};

export default EntryLine;

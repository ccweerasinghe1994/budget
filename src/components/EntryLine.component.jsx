import { Grid, GridColumn, GridRow, Icon, Segment } from "semantic-ui-react";

const EntryLine = ({ isExpence = false, description, value }) => (
  <Segment color={isExpence ? "red" : "green"}>
    <Grid columns={3} textAlign="right">
      <GridRow>
        <GridColumn width={10} textAlign="left">
          {description}
        </GridColumn>
        <GridColumn width={3}>{value}</GridColumn>
        <GridColumn width={3}>
          <Icon name="edit" />
          <Icon name="trash" />
        </GridColumn>
      </GridRow>
    </Grid>
  </Segment>
);

export default EntryLine;

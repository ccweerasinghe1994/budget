import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance.component";

const DisplayBalances = () => (
  <Segment textAlign="center">
    <Grid columns={2} divided>
      <GridRow>
        <GridColumn>
          <DisplayBalance title={"Income"} color="green" value={"1,212"} />
        </GridColumn>
        <GridColumn>
          <DisplayBalance title={"expences"} value="3,332" color="red" />
        </GridColumn>
      </GridRow>
    </Grid>
  </Segment>
);
export default DisplayBalances;

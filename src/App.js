import {
  Button,
  ButtonGroup,
  ButtonOr,
  Container,
  Form,
  FormGroup,
  FormInput,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Segment,
  Statistic,
  StatisticLabel,
  StatisticValue,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic>
        <StatisticLabel>Your Balance</StatisticLabel>
        <StatisticValue>2,500</StatisticValue>
        <Segment textAlign="center">
          <Grid columns={2} divided>
            <GridRow>
              <GridColumn>
                <Statistic size="tiny" color="green">
                  <StatisticLabel style={{ textAlign: "left" }}>
                    Income:
                  </StatisticLabel>
                  <StatisticValue>1,500</StatisticValue>
                </Statistic>
              </GridColumn>
              <GridColumn>
                <Statistic size="tiny" color="red">
                  <StatisticLabel style={{ textAlign: "left" }}>
                    Expenses:
                  </StatisticLabel>
                  <StatisticValue>1,500</StatisticValue>
                </Statistic>
              </GridColumn>
            </GridRow>
          </Grid>
        </Segment>
      </Statistic>
      <Header as={"h3"}>History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              something
            </GridColumn>
            <GridColumn width={3}>10,200</GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              something
            </GridColumn>
            <GridColumn width={3}>10,200</GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              something
            </GridColumn>
            <GridColumn width={3}>10,200</GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Header as={"h3"}>Add new transactions</Header>
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
        <ButtonGroup style={{ marginTop: 20 }}>
          <Button>Cancle</Button>
          <ButtonOr />
          <Button primary>Ok</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;

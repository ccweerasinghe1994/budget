import { Container, Header, Statistic, StatisticLabel, StatisticValue } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic>
        <StatisticLabel>Your Balance</StatisticLabel>
        <StatisticValue>2,500</StatisticValue>
      </Statistic>
    </Container>
  );
}

export default App;

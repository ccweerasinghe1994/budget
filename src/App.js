import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance.component";
import DisplayBalances from "./components/DisplayBalances.component";
import EntryLine from "./components/EntryLine.component";
import MainHeader from "./components/mainHeader.component";
import NewEntryForm from "./components/NewEntryForm.Component";

function App() {
  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance title={"Your Balance"} value="23,231" size="small" />
      <DisplayBalances />

      <MainHeader type={"h3"} title="History" />
      <MainHeader type={"h3"} title="Add new transactions" />
      <EntryLine value={"12,222"} description={"new laptop"} isExpence={true} />
      <EntryLine value={"12,222"} description={"new laptop"} isExpence={true} />
      <EntryLine value={"12,222"} description={"new laptop"} />
      <EntryLine value={"12,222"} description={"new laptop"} />
      <EntryLine value={"12,222"} description={"new laptop"} />
      <NewEntryForm />
    </Container>
  );
}

export default App;

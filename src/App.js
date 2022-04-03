import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance.component";
import DisplayBalances from "./components/DisplayBalances.component";
import EntryLines from "./components/EntryLines.component";
import MainHeader from "./components/mainHeader.component";
import NewEntryForm from "./components/NewEntryForm.Component";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const deleteEntry = (id) => {
    const filteredEntries = entries.filter((entry) => entry.id !== id);
    setEntries(filteredEntries);
  };

  const addEntry = (entry) => {
    const newEntry = {
      id: entries.length + 1,
      ...entry,
    };
    setEntries([...entries, newEntry]);
  };
  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance title={"Your Balance"} value="23,231" size="small" />
      <DisplayBalances />

      <MainHeader type={"h3"} title="History" />
      <MainHeader type={"h3"} title="Add new transactions" />
      <EntryLines deleteEntry={deleteEntry} entries={entries} />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: "work income",
    value: "140,000",
    isExpence: false,
  },
  {
    id: 2,
    description: "salary",
    value: "140,000",
    isExpence: false,
  },
  {
    id: 3,
    description: "rent",
    value: "140,000",
    isExpence: true,
  },
  {
    id: 4,
    description: "food",
    value: "140,000",
    isExpence: true,
  },
  {
    id: 5,
    description: "car",
    value: "140,000",
    isExpence: true,
  },
  {
    id: 6,
    description: "phone",
    value: "140,000",
    isExpence: true,
  },
];

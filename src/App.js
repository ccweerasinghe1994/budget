import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance.component";
import DisplayBalances from "./components/DisplayBalances.component";
import EntryLines from "./components/EntryLines.component";
import MainHeader from "./components/mainHeader.component";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm.Component";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const editEntry = (id) => {
    if (id) {
      const entry = entries.find((entry) => entry.id === id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };
  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance title={"Your Balance"} value="23,231" size="small" />
      <DisplayBalances />
      <MainHeader type={"h3"} title="History" />
      <EntryLines
        editEntry={editEntry}
        deleteEntry={deleteEntry}
        entries={entries}
      />
      <MainHeader type={"h3"} title="Add new transactions" />
      <NewEntryForm
        value={value}
        description={description}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        addEntry={addEntry}
        setDescription={setDescription}
        setValue={setValue}
      />
      <ModalEdit
        value={value}
        description={description}
        isExpense={isExpense}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: "work income",
    value: "140,000",
    isExpense: false,
  },
  {
    id: 2,
    description: "salary",
    value: "140,000",
    isExpense: false,
  },
  {
    id: 3,
    description: "rent",
    value: "140,000",
    isExpense: true,
  },
  {
    id: 4,
    description: "food",
    value: "140,000",
    isExpense: true,
  },
  {
    id: 5,
    description: "car",
    value: "140,000",
    isExpense: true,
  },
  {
    id: 6,
    description: "phone",
    value: "140,000",
    isExpense: true,
  },
];

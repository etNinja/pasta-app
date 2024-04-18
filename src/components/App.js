import { useState } from "react";
import { PastasList } from "./PastasList";
import { PastasInfo } from "./PastasInfo";

export const initialRecipes = [
  {
    name: "Карбонара",
    souce: "Сливки",
    pasta: "Спагетти",
    filling: "Ветчина",
    id: 119943,
  },
  {
    name: "Классическая",
    souce: "Томатный",
    pasta: "Спагетти",
    filling: "Фарш",
    id: 323821,
  },
];
export default function App() {
  const [pastas, setPastas] = useState(initialRecipes);
  const [selectedPasta, setSelectedPasta] = useState(null);
  const [showAddPasta, setShowAddPasta] = useState(false);

  function handleAddPasta(pasta) {
    console.log(pastas);
    setPastas((pastas) => [...pastas, pasta]);
  }

  function handleShowAddPasta(show) {
    setShowAddPasta((show) => !show);
  }

  function handleSelection(pasta) {
    pasta.id === selectedPasta?.id
      ? setSelectedPasta("")
      : setSelectedPasta(pasta);
  }

  return (
    <div className="app">
      <PastasList pastas={pastas} onSelect={handleSelection} />
      {selectedPasta && <PastasInfo selectedPasta={selectedPasta} />}
      <div className="add-new-pasta">
        <Button onClick={handleShowAddPasta}>
          {showAddPasta ? "Close" : "Add new pasta"}
        </Button>
        {showAddPasta && (
          <FormAddPasta
            show={showAddPasta}
            onAddPasta={handleAddPasta}
            onClick={handleShowAddPasta}
          />
        )}
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddPasta({ onAddPasta }) {
  const [name, setName] = useState("");
  const [souce, setSouce] = useState("");
  const [pasta, setPasta] = useState("");
  const [filling, setFilling] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // if (!name || !souce || !filling || !pasta) return;
    const id = crypto.randomUUID();
    const newPasta = {
      name,
      id,
      pasta,
      souce,
      filling,
    };
    onAddPasta(newPasta);
    setName("");
    setSouce("");
    setPasta("");
    setFilling("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name of Pasta: </label>
      <input
        type="text"
        placeholder="Name of pasta"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Souce: </label>
      <input
        type="text"
        placeholder="Sauce"
        value={souce}
        onChange={(e) => setSouce(e.target.value)}
      />
      <label>Type of pasta: </label>
      <input
        type="text"
        placeholder="Type of pasta"
        value={pasta}
        onChange={(e) => setPasta(e.target.value)}
      />
      <label>ingredients: </label>
      <input
        type="text"
        placeholder="Other ingredients"
        value={filling}
        onChange={(e) => setFilling(e.target.value)}
      />

      <Button>Добавить пасту</Button>
    </form>
  );
}

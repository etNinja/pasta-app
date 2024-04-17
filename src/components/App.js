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

  function handleSelection(pasta) {
    pasta.id === selectedPasta?.id
      ? setSelectedPasta("")
      : setSelectedPasta(pasta);
  }
  return (
    <>
      <div className="app">
        <PastasList onSelect={handleSelection} />
        {selectedPasta && <PastasInfo selectedPasta={selectedPasta} />}
        <Button />
      </div>
    </>
  );
}
function Button() {
  return (
    <>
      <button className="button">Добавить новую пасту</button>
    </>
  );
}

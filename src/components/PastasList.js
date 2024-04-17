import { Ingredients } from "./Ingredients";
import { initialRecipes } from "./App";

export function PastasList({ onSelect }) {
  return (
    <ul className="pastas-list">
      {initialRecipes.map((pasta) => (
        <Ingredients pasta={pasta} onSelect={onSelect} />
      ))}
    </ul>
  );
}

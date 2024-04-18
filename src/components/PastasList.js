import { Ingredients } from "./Ingredients";

export function PastasList({ onSelect, pastas }) {
  return (
    <ul className="pastas-list">
      {pastas.map((pasta) => (
        <Ingredients pasta={pasta} onSelect={onSelect} />
      ))}
    </ul>
  );
}

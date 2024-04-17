export function Ingredients({ pasta, onSelect }) {
  return (
    <li>
      <h3 onClick={() => onSelect(pasta)}>{pasta.name}</h3>
    </li>
  );
}

export function PastasInfo({ selectedPasta }) {
  // const isSelected
  return (
    <div className="pastas-info">
      {/* {pastas} */}
      <h2>Паста {selectedPasta.name}</h2>
      <p>Для приготовления вам нужно:</p>
      <ul>
        <li>Filling: {selectedPasta.filling}</li>
        <li>Pasta: {selectedPasta.pasta}</li>
        <li>Souce: {selectedPasta.souce}</li>
      </ul>
    </div>
  );
}

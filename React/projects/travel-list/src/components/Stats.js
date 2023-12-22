import "../index.css";
export default function Stats({ list }) {
  if (!list.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const numItems = list.length;
  const numPacked = list.filter((item) => item.packed).length;
  const packedPct = Math.round(numPacked / (numItems * 0.01));
  return (
    <footer className="stats">
      <em>
        {packedPct === 100
          ? "You got everything! Ready to go ✈️"
          : `🧳 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${packedPct}%)`}
      </em>
    </footer>
  );
}

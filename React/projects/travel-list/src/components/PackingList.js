import { useState } from "react";
import "../index.css";
import Item from "./Item";

export default function PackingList({
  list,
  onDeleteItem,
  onTogglePacked,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;
  if (sortBy === "input") sortedList = list;
  if (sortBy === "description")
    sortedList = list
      .slice()
      .sort((a, b) => (a.description < b.description ? -1 : 1));
  if (sortBy === "packed")
    sortedList = list.slice().sort((a, b) => (a.packed < b.packed ? -1 : 1));
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div>
        <select
          className="actions"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

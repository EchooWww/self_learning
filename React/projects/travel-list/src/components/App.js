import "../index.css";
import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App() {
  const [list, setList] = useState([]);

  const handleAddItem = (item) => {
    setList((list) => [...list, item]);
  };

  const handleDeleteItem = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
  };

  const handleTogglePacked = (id) => {
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    confirmed && setList([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        list={list}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        onClearList={handleClearList}
      />
      <Stats list={list} />
    </div>
  );
}

import React from "react";
import Header from '../components/Header';
import SearchItem from '../components/SearchItem';
import AddItem from '../components/AddItem';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { useState } from 'react';

const Homepage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Ramen",
    },
    {
      id: 2,
      checked: false,
      item: "Sushi",
    },
    {
      id: 3,
      checked: false,
      item: "Samosa",
    },
    {
      id: 4,
      checked: true,
      item: "malpuva",
    },
  ]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery list" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length ? items.length : "0"} />
    </div>
  );
};

export default Homepage;
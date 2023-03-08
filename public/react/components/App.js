import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { Detail } from "./Detail";
import { Form } from "./Form";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState();
  const [form, setForm] = useState();

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function deleteItem(itemId) {
    console.log("Deleting item with ID:", itemId);
    try {
      await fetch(`${apiURL}/items/${itemId}`, { method: "DELETE" });
      setItems(items.filter((item) => item.id !== itemId));
      setDetail(undefined);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <>
        <h1>Items Store</h1>
        <button onClick={() => setForm(true)}>Add an Item</button>
        {form && <Form items={form} setForm={setForm} />}
        {!detail ? (
          <>
            <ItemsList items={items} setDetail={setDetail} />
          </>
        ) : (
          <Detail item={detail} setDetail={setDetail} deleteItem={deleteItem} />
        )}
      </>
    </main>
  );
};

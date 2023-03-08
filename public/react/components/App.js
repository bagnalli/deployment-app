import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { Detail } from "./Detail";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState();

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
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
        {!detail ? (
          <ItemsList items={items} setDetail={setDetail} />
        ) : (
          <Detail item={detail} setDetail={setDetail} />
        )}
      </>
    </main>
  );
};

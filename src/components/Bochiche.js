import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "../data/data.js";
const allCategories = ["todos", ...new Set(items.map((item) => item.category))];

const Bochiche = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "todos") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>bienvenido al bochiche</h1>
          <h2>nuestro menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
          setCategories={setCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Bochiche;

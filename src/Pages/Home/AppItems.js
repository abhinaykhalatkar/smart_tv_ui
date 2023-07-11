import React from "react";
import "./AppItems.scss";
import { motion } from "framer-motion";

const AppItems = ({ items, highlightedIndex }) => {
  return (
 <div
    className="app-items"
  >
    {items.itemsImage.map((item, index) => (
      <motion.div
        key={index}
        className={`item ${index === highlightedIndex ? "highlighted" : ""}`}

      >
        <img src={`/shows/${item}`} alt={item} />
      </motion.div>
    ))}
  </div>
  );
};

export default AppItems;
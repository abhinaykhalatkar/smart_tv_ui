import React, { useRef, useEffect } from "react";
import "./AppItems.scss";

const AppItems = ({ items, highlightedIndex, currentIndex }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const item = container.children[highlightedIndex];
    if (item) {
      const itemOffsetLeft = item.offsetLeft;
      const containerScrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const itemWidth = item.offsetWidth;
      const scrollOffset = itemOffsetLeft - containerScrollLeft;
      const scrollThreshold = containerWidth / 2 - itemWidth / 2;
      if (scrollOffset < scrollThreshold) {
        container.scrollTo({
          left: itemOffsetLeft - scrollThreshold,
          behavior: "smooth",
        });
      } else if (scrollOffset > scrollThreshold) {
        container.scrollTo({
          left: itemOffsetLeft - containerWidth + itemWidth + scrollThreshold,
          behavior: "smooth",
        });
      }
    }
  }, [highlightedIndex]);

  return (
    <div
      className={`app-items scrolling-wrapper ${currentIndex === highlightedIndex ? "highlighted" : ""}`}
      ref={containerRef}
    >
      {items.itemsImage.map((item, index) => (
        <div
          key={`${items.id}${items.itemsImage[index]}`}
          className="item"
        >
          <img src={`/shows/${item}`} alt={item} />
        </div>
      ))}
    </div>
  );
};

export default AppItems;
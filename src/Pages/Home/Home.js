import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.scss";
import AppIcon from "./AppIcon";
import AppItems from "./AppItems";
let runCount=1;
const Home = ({ tvApps }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(
    Math.floor(tvApps.length / 2)
  );
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isAnimating) {
        if (event.key === "ArrowUp") {
          handleArrowUp();
        } else if (event.key === "ArrowDown") {
          handleArrowDown();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [highlightedIndex]);

  const handleClick = (index) => {
    setHighlightedIndex(index);
  };

  const handleArrowUp = () => {
    const newIndex = (highlightedIndex - 1 + tvApps.length) % tvApps.length;
    setHighlightedIndex(newIndex);
  };

  const handleArrowDown = () => {
    const newIndex = (highlightedIndex + 1) % tvApps.length;
    setHighlightedIndex(newIndex);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };
  return (
    <div className="home-page">
      <AnimatePresence >
 
        <motion.div
          className="side-bar"
          initial={{ x: -200 ,zIndex:1,}}
          animate={{ x: 10 ,zIndex:1,}}
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 100,
            ease: [0, 0.71, 0.2, 1],
            duration: 0.2,
          }}
        >
          {tvApps.map((app, index) => (
            <AppIcon
              key={`${app.id}apps`}
              app={app}
              onClick={() => handleClick(index)}
              isSelected={index === highlightedIndex}
            />
          ))}
        </motion.div>
        </AnimatePresence>
        <AnimatePresence>
        
        <motion.div
          className="center-row"
          initial={{ x: 40, opacity: 1 }}
          animate={{ x: 100, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 100,
            ease: [0, 0.71, 0.2, 1],
            duration: 0.2,
          }}
        >
            {tvApps.map((app, index) => (
          
            <AppItems
              key={`${app.id}itemRow`}
                items={app}
                highlightedIndex={highlightedIndex}
                currentIndex={index}
              />

              
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;

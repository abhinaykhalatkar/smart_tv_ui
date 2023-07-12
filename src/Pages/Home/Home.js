import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.scss";
import AppIcon from "./AppIcon";
import AppItems from "./AppItems";
import MobileView from "./MobileHome";

const Home = ({ tvApps }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(
    Math.floor(tvApps.length / 2)
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 480); 
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
  return (
   isMobile?<MobileView apps={tvApps}/>:<div className="home-page">
   <AnimatePresence >

     <motion.div
       className="side-bar"
       initial={{ x: -350 }}
       animate={{ x: 10 }}
       transition={{
         type: "spring",
         damping: 7,
         stiffness: 100,
         ease: [0, 1, 0.5, 1],
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
       initial={{ x: "100%", opacity: 0 }}
       animate={{ x: "26%", opacity: 1 }}
       transition={{
         type: "spring",
         damping: 7,
         stiffness: 100,
         ease: [0, 1, 0.5, 1],
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

import React from "react";
import "./MobileHome.scss";
import MobileSlider from "../../Units/MobileSlider";
import NavBar from "../../Units/NavBar/Navbar";
import AppIcon from "./AppIcon";
import { GrFormNext } from "react-icons/gr";

const MobileView = ({ apps }) => {
  return (
    <div className="p-mobile-home">
      <NavBar />
      <MobileSlider />
      <div className="apps-module">
        <div className="title">
          <p>Your Apps </p>
          <GrFormNext />
        </div>

        <div className="apps-icons">
          {apps.map((app) => (
            <AppIcon key={`${app.id}apps`} app={app} />
          ))}
        </div>
      </div>
      <div className="fshow">
        <div className="title">
          <p>Top picks for you </p>
        </div>
        <div className="apps-icons">
          {apps[0].itemsImage.map((app,index) => (
            <div
            key={`${index}${app[index]}`}
            className="item"
          >
            <img src={`/shows/${app}`} alt={app} />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileView;

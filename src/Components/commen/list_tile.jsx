import React from "react";
import "../../Css/commen/list_tile.css"; // Import CSS file for styling

const ListTile = ({ icon, title, subtitle, time }) => {
  return (
    <div className="list-tile-container">
      <div className="list-tile-icon">{icon}</div>
      <div className="list-tile-content">
        <div className="list-tile-title">{title}</div>
        <div className="list-tile-subtitle">{subtitle}</div>
        <div className="list-tile-time">{time}</div>
      </div>
    </div>
  );
};

export default ListTile;

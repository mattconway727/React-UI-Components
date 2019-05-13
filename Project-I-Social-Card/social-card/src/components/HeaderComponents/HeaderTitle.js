import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-content">
      <div className="header-title">
        <h2>Lambda School</h2>
        <p>@lambdaschool</p>
        <p>•</p>
        <p>26 jan</p>
      </div>
      <HeaderContent />
    </div>
  );
};
export default HeaderTitle;

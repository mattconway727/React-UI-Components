import React from "react";
import HeaderContent from "./HeaderContent";
import "./Header.css";
// import moment from "moment";
// const time = moment();

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School
        <span className="time-stamp">Jan 26</span>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;

// {time.format("MMM Do ")}

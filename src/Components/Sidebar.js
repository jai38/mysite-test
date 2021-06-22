import React from "react";
import WidgetsOutlinedIcon from "@material-ui/icons/WidgetsOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SecurityIcon from "@material-ui/icons/Security";
export const Sidebar = ({ activeSidebar, changeSidebar }) => {
  let activeStyle = {
    cursor: "pointer",
    color: "#683cb8",
    backgroundColor: "#e1d8f1",
    borderLeft: "5px solid #7045bb",
  };
  let inActiveStyle = {
    cursor: "pointer",
    color: "#7c7b7d",
  };

  return (
    <>
      <div style={{ backgroundColor: "#fcfbff", width: "20%", height: "90vh" }}>
        <div
          className="d-flex mx-2 py-2"
          onClick={() => changeSidebar("Projects")}
          style={activeSidebar == "Projects" ? activeStyle : inActiveStyle}
        >
          <div className="mx-2">
            <WidgetsOutlinedIcon />
          </div>
          <div className="mx-2">Projects</div>
        </div>
        <div
          className="d-flex mx-2 py-2"
          onClick={() => changeSidebar("Profile")}
          style={activeSidebar == "Profile" ? activeStyle : inActiveStyle}
        >
          <div className="mx-2">
            <LocalMallOutlinedIcon />
          </div>
          <div className="mx-2">Oraganisation Profile</div>
        </div>
        <div
          className="d-flex mx-2 py-2"
          onClick={() => changeSidebar("Access")}
          style={activeSidebar == "Access" ? activeStyle : inActiveStyle}
        >
          <div className="mx-2">
            <SecurityIcon />
          </div>
          <div className="mx-2">Access Control</div>
        </div>
      </div>
    </>
  );
};

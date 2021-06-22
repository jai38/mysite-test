import React from "react";
import RssFeedOutlinedIcon from "@material-ui/icons/RssFeedOutlined";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import SyncOutlinedIcon from "@material-ui/icons/SyncOutlined";
export const BodyHeader = ({ activeBody, changeBody }) => {
  let activeStyle = {
    cursor: "pointer",
    color: "#683cb8",
    borderBottom: "5px solid #7045bb",
    borderRadius: "3px",
  };
  let inActiveStyle = {
    cursor: "pointer",
    color: "#7c7b7d",
  };
  return (
    <>
      <div
        className="d-flex justify-content-between w-100 my-4 "
        style={{ borderBottom: "1px solid #cccbcd", height: "35px" }}
      >
        <div className="d-flex">
          <div
            className="d-flex mx-2"
            style={activeBody == "Permissions" ? activeStyle : inActiveStyle}
            onClick={() => changeBody("Permissions")}
          >
            <div>
              <RssFeedOutlinedIcon />
            </div>
            <div className="mx-1">Permissions</div>
          </div>
          <div
            style={{ height: "25px", borderLeft: "2px solid #cccbcd" }}
          ></div>
          <div
            className="d-flex mx-2"
            style={activeBody == "Approval" ? activeStyle : inActiveStyle}
            onClick={() => changeBody("Approval")}
          >
            <div>
              <ViewModuleOutlinedIcon />
            </div>
            <div className="mx-1">Approval Matrix</div>
          </div>
        </div>
        <div className="d-flex align-items-center" style={{marginRight: '4%'}}>
          <div className="mx-2" style={{ color: "#7c7b7d" }}>
            <SyncOutlinedIcon />
          </div>
          <div style={{ fontSize: "80%",}}>Last Synced 15 mins ago</div>
        </div>
      </div>
    </>
  );
};

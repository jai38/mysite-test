import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
export const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div
          className="d-flex justify-content-around"
          style={{ width: "10%", marginRight: "3%" }}
        >
          <div
            style={{
              height: "25px",
              width: "25px",
              backgroundColor: "#c5cee0",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></div>
          <div>Jai</div>
          <div>
            <NotificationsNoneIcon
              style={{ color: "grey", fontSize: "170%" }}
            />
          </div>
          <div>
            <HelpOutlineIcon style={{ color: "grey", fontSize: "170%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { Table } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "./../styles/permissionsScreen.css";

export const PermissionsScreen = ({ changeScreen }) => {
  return (
    <>
      <div className=" mx-5" style={{ width: "90%" }}>
        <div className="d-flex align-items-center my-4">
          <div
            className="d-flex btn align-items-center"
            style={{
              backgroundColor: "#683cb8",
              color: "white",
              padding: "0.3% 4% 0.3% 2%",
            }}
          >
            <div>
              <AddIcon />
            </div>
            <div className="mx-2">Add Role</div>
          </div>
          <div className="mx-4">
            <EditOutlinedIcon style={{ color: "#7c7b7d", fontSize: "160%" }} />
          </div>
          <div>
            <DeleteOutlineOutlinedIcon
              style={{ color: "#7c7b7d", fontSize: "200%" }}
            />
          </div>
        </div>
        <Table responsive className="permissionsTable">
          <thead
            style={{
              backgroundColor: "#f2f2f2",
            }}
          >
            <td style={{ width: "5%" }}></td>
            <td style={{ width: "22%" }}>Department/Role Name</td>
            <td style={{ width: "25%", textAlign: "center" }}>Access Level</td>
            <td style={{ textAlign: "center" }}>No of Members</td>
            <td>Last Updated</td>
            <td></td>
          </thead>
          <tbody>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                changeScreen("Management Team");
              }}
            >
              <td>
                <label class="container">
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>Management Team</td>
              <td style={{ textAlign: "center" }}>
                <button
                  style={{
                    color: "#4fbd7e",
                    border: "1px solid #4fbd7e",
                    borderRadius: "30px",
                    backgroundColor: "#bfe7d0",
                    padding: "0% 15%",
                  }}
                >
                  All Access
                </button>
              </td>
              <td style={{ textAlign: "center" }}>4</td>
              <td>1 min ago</td>
              <td>
                <VisibilityOutlinedIcon
                  style={{ color: "#7c7b7d", fontSize: "160%" }}
                />
              </td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                changeScreen("Management Team");
              }}
            >
              <td>
                <label class="container">
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>Procurement Team</td>
              <td style={{ textAlign: "center" }}>
                <button
                  style={{
                    color: "#ff115d",
                    border: "1px solid #ff115d",
                    borderRadius: "30px",
                    backgroundColor: "#ffb5b5",
                    padding: "0% 7%",
                  }}
                >
                  Restricted Access
                </button>
              </td>
              <td style={{ textAlign: "center" }}>8</td>
              <td>1 min ago</td>
              <td>
                <VisibilityOutlinedIcon
                  style={{ color: "#7c7b7d", fontSize: "160%" }}
                />
              </td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                changeScreen("Project Team");
              }}
            >
              <td>
                <label class="container">
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>Project Team</td>
              <td style={{ textAlign: "center" }}>
                <button
                  style={{
                    color: "#ff115d",
                    border: "1px solid #ff115d",
                    borderRadius: "30px",
                    backgroundColor: "#ffb5b5",
                    padding: "0% 7%",
                  }}
                >
                  Restricted Access
                </button>
              </td>
              <td style={{ textAlign: "center" }}>16</td>
              <td>1 min ago</td>
              <td>
                <VisibilityOutlinedIcon
                  style={{ color: "#7c7b7d", fontSize: "160%" }}
                />
              </td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                changeScreen("IT Team");
              }}
            >
              <td>
                <label class="container">
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>IT Team</td>
              <td style={{ textAlign: "center" }}>
                <button
                  style={{
                    color: "#ff115d",
                    border: "1px solid #ff115d",
                    borderRadius: "30px",
                    backgroundColor: "#ffb5b5",
                    padding: "0% 7%",
                  }}
                >
                  Restricted Access
                </button>
              </td>
              <td style={{ textAlign: "center" }}>4</td>
              <td>1 min ago</td>
              <td>
                <VisibilityOutlinedIcon
                  style={{ color: "#7c7b7d", fontSize: "160%" }}
                />
              </td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                changeScreen("Super Admin");
              }}
            >
              <td></td>
              <td>Super Admin</td>
              <td style={{ textAlign: "center" }}>
                <button
                  style={{
                    color: "#4fbd7e",
                    border: "1px solid #4fbd7e",
                    borderRadius: "30px",
                    backgroundColor: "#bfe7d0",
                    padding: "0% 15%",
                  }}
                >
                  All Access
                </button>
              </td>
              <td style={{ textAlign: "center" }}>1</td>
              <td>1 min ago</td>
              <td>
                <VisibilityOutlinedIcon
                  style={{ color: "#7c7b7d", fontSize: "160%" }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import "./../styles/teamScreen.css";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, access, summary, lastUpdated) {
  return {
    name,
    access,
    summary,
    lastUpdated,
  };
}
const getSummary = (summary) => {
  let summaryString = "";
  if (summary.length == 0) {
    return "-";
  }
  summary.forEach((item) => {
    summaryString += item + " | ";
  });
  return summaryString.substring(0, summaryString.length - 3);
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  let allAccessStyle = {
    color: "#4fbd7e",
    border: "1px solid #4fbd7e",
    borderRadius: "30px",
    backgroundColor: "#bfe7d0",
    padding: "0% 19%",
  };
  let restricteAccessStyle = {
    color: "#ff115d",
    border: "1px solid #ff115d",
    borderRadius: "30px",
    backgroundColor: "#ffb5b5",
    padding: "0% 7%",
  };
  let noAccessStyle = {
    color: "#d1d1d1",
    border: "1px solid #d1d1d1",
    borderRadius: "30px",
    backgroundColor: "#f4f4f4",
    padding: "0% 19%",
  };
  let btnStyle = {};
  if (row.access == "All Access") {
    btnStyle = allAccessStyle;
  } else if (row.access == "Restricted Access") {
    btnStyle = restricteAccessStyle;
  } else {
    btnStyle = noAccessStyle;
  }
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell style={{ width: "4%" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">
          <button style={btnStyle}>{row.access}</button>
        </TableCell>
        <TableCell align="center">{getSummary(row.summary)}</TableCell>
        <TableCell align="center">{row.lastUpdated}</TableCell>
        <TableCell align="center">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </TableCell>
      </TableRow>
      {/* {open && ( */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                gutterBottom
                component="div"
                className="mx-5"
                style={{ fontSize: "90%" }}
              >
                All aspects in the {row.name} module
              </Typography>
              <div
                className="d-flex"
                style={{ marginTop: "2%", marginLeft: "10%" }}
              >
                <div>
                  <div>Access Control</div>
                  <div className="d-flex align-items-center my-4">
                    <div>
                      <label class="access-container">
                        <input type="radio" name="radio" />
                        <span class="access-checkmark"></span>
                      </label>
                    </div>
                    <div>
                      <div>All Access</div>
                      <div style={{ color: "#acabad" }}>
                        Can access all items
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center my-4">
                    <div>
                      <label class="access-container">
                        <input type="radio" name="radio" />
                        <span class="access-checkmark"></span>
                      </label>
                    </div>
                    <div>
                      <div>Restricted Access</div>
                      <div style={{ color: "#acabad" }}>
                        Can access only assigned or created items
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mx-5"
                  style={{ borderLeft: "1px solid #acabad" }}
                ></div>
                <div>
                  <div>Permissions</div>
                  <div className="d-flex align-items-center my-3">
                    <label class="permissions-access">
                      <div style={{ fontSize: "70%" }}>
                        View items in access
                      </div>
                      <input type="checkbox" />
                      <span class="permissions-checkmark"></span>
                    </label>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <label class="permissions-access">
                      <div style={{ fontSize: "70%" }}>
                        Edit items in access
                      </div>
                      <input type="checkbox" />
                      <span class="permissions-checkmark"></span>
                    </label>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <label class="permissions-access">
                      <div style={{ fontSize: "70%" }}>
                        Create items in access
                      </div>
                      <input type="checkbox" />
                      <span class="permissions-checkmark"></span>
                    </label>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <label class="permissions-access">
                      <div style={{ fontSize: "70%" }}>
                        Delete items in access
                      </div>
                      <input type="checkbox" />
                      <span class="permissions-checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      {/* )} */}
    </React.Fragment>
  );
}
const rows = [
  createData(
    "Budget",
    "All Access",
    ["View", "Create", "Edit", "Delete"],
    "1 min ago"
  ),
  createData("Bidding", "No Access", [], "1 min ago"),
  createData(
    "Vendor Portal",
    "Restricted Access",
    ["View", "Create"],
    "1 min ago"
  ),
  createData(
    "Purchase Order/Work Order",
    "Restricted Access",
    ["View", "Create"],
    "1 min ago"
  ),
  createData(
    "Organisational Profile",
    "All Access",
    ["View", "Create", "Edit", "Delete"],
    "1 min ago"
  ),
  createData("Permissions & Access Control", "No Access", [], "1 min ago"),
];

export function TeamScreen({ screen, activeAccess, changeAccess, goBack }) {
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
      <div>
        <div className="d-flex my-4 mx-4 align-items-center">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              goBack();
            }}
          >
            <ArrowBackIcon style={{ color: "#7c7b7d" }} />
          </div>
          <div className="mx-4" style={{ color: "#683cb8" }}>
            <b>{screen}</b>
          </div>
          <div>
            <EditOutlinedIcon style={{ color: "#7c7b7d" }} />
          </div>
        </div>
        <div
          className="d-flex flex-column"
          style={{ marginLeft: "10%", width: "85%" }}
        >
          {/* <div
            className="d-flex my-4"
            style={{ borderBottom: "2px solid #7c7b7d" }}
          >
            <div>Access Control</div>
            <div className="mx-3" style={{ borderLeft: "2px solid" }}></div>
            <div>Assigned Memebers</div>
          </div> */}
          <div
            className="d-flex my-4"
            style={{ borderBottom: "1px solid #cccbcd", height: "40px" }}
          >
            <div
              className="d-flex mx-2"
              style={activeAccess == "Control" ? activeStyle : inActiveStyle}
              onClick={() => changeAccess("Control")}
            >
              <div>{/* <RssFeedOutlinedIcon /> */}</div>
              <div className="mx-2">Access Control</div>
            </div>
            <div
              className="mx-2"
              style={{ height: "25px", borderLeft: "2px solid #cccbcd" }}
            ></div>
            <div
              className="d-flex mx-2"
              style={activeAccess == "Members" ? activeStyle : inActiveStyle}
              onClick={() => changeAccess("Members")}
            >
              <div className="mx-2">Assigned Members</div>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table" className="team-screen-table">
              <TableHead style={{ backgroundColor: "#f2f2f2" }}>
                <TableRow>
                  <TableCell />
                  <TableCell>Department/Role Name</TableCell>
                  <TableCell align="center">Access Level</TableCell>
                  <TableCell align="center">Summary</TableCell>
                  <TableCell align="center">Last Updated</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

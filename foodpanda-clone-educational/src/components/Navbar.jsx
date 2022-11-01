import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

const area = [
  {
    strArea: "American",
  },
  {
    strArea: "British",
  },
  {
    strArea: "Canadian",
  },
  {
    strArea: "Chinese",
  },
  {
    strArea: "Croatian",
  },
  {
    strArea: "Dutch",
  },
  {
    strArea: "Egyptian",
  },
  {
    strArea: "French",
  },
  {
    strArea: "Greek",
  },
  {
    strArea: "Indian",
  },
  {
    strArea: "Irish",
  },
  {
    strArea: "Italian",
  },
  {
    strArea: "Jamaican",
  },
  {
    strArea: "Japanese",
  },
  {
    strArea: "Kenyan",
  },
  {
    strArea: "Malaysian",
  },
  {
    strArea: "Mexican",
  },
  {
    strArea: "Moroccan",
  },
  {
    strArea: "Polish",
  },
  {
    strArea: "Portuguese",
  },
  {
    strArea: "Russian",
  },
  {
    strArea: "Spanish",
  },
  {
    strArea: "Thai",
  },
  {
    strArea: "Tunisian",
  },
  {
    strArea: "Turkish",
  },
  {
    strArea: "Unknown",
  },
  {
    strArea: "Vietnamese",
  },
];

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "white",
        width: "100%",
        padding: "8px 0px",
        height: "66px",
        position: "fixed",
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        color: "#D70F64",
        fontFamily: `"museo-sans", sans-serif`,
        fontSize: "16px",
        fontWeight: "lighter",
        boxShadow: "0 2px 16px 0 rgb(0 0 0 / 8%)",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <img
            className="logoimg"
            src="https://www.foodpanda.com/wp-content/uploads/2019/12/food-panda-logo-vector.png"
            alt="FoodPanda"
          />
        </div>

        <div className="side_nav">
          <div style={{ width: "89px" }}>
            <Link
              style={{
                color: "#D70F64",
                fontWeight: "lighter",
                textDecoration: "none",
              }}
            >
              ABOUT
            </Link>
          </div>
          <div style={{ width: "105px" }}>
            <Link style={{ color: "#D70F64" }}>CAREERS</Link>
          </div>
          <div style={{ width: "81px" }}>
            <Link style={{ color: "#D70F64" }}>PRESS</Link>
          </div>
          <div style={{ width: "99px" }}>
            <button
              className="btn_order"
              style={{
                fontWeight: "lighter",
                color: "#D70F64",
                border: "none",
                background: "#fff",
              }}
              onClick={() => {
                show ? setShow(false) : setShow(true);
              }}
            >
              ORDER▼
            </button>
            {show ? (
              <div
                style={{
                  display: "block",
                  position: "absolute",
                  zIndex: "10",
                  marginTop: "100px",
                  marginRight: "60px",
                }}
              >
                <ul
                  style={{
                    listStyleType: "none",
                    backgroundColor: "#fff",
                    width: "160px",
                    height: "654px",
                    textAlign: "left",
                    fontWeight: "lighter",
                    boxShadow: "0 2px 16px 0 rgb(0 0 0 / 8%)",
                  }}
                >
                  {area.map((el) => {
                    return (
                      <li
                        className="li"
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <Link style={{ color: "#D70F64" }}>{el.strArea}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div style={{ display: "none" }}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

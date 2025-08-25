import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav
      style={{
        width: "100%",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          color: "white",
        }}
      >

        <div style={{ fontSize: "28px", fontWeight: "bold", cursor: "pointer" }}>
            <Link
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ffdd59")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >RealEstate</Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "18px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/listing"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ffdd59")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Listing
          </Link>

          <Link
            to="/searching"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ffdd59")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Searching
          </Link>

          <Link
            to="/saved"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ffdd59")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Saved
          </Link>
            <Link
            to="/contactform"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ffdd59")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            ContactUs
          </Link>

          <button
            onClick={handleLogout}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ff4757",
              border: "none",
              borderRadius: "6px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e84118")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4757")}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

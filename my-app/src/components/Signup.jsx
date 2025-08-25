import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setLocalError("Please fill all fields");
      return;
    }

    const result = await dispatch(signupUser({ email, password }));

    if (signupUser.fulfilled.match(result)) {
      
      navigate("/login");
    } else {
      setLocalError(result.payload || "User already exists");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #36d1dc, #5b86e5)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px 40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333", fontSize: "24px" }}>
          Signup for RealEstate
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 15px",
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 15px",
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              border: "none",
              borderRadius: "8px",
              background: loading ? "#999" : "#5b86e5",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>

        {(localError || error) && (
          <p style={{ marginTop: "10px", fontSize: "14px", color: "red" }}>
            {localError || error}
          </p>
        )}

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#333" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#5b86e5", fontWeight: "600" }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Saved = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedProperties")) || [];
    setSaved(data);
  }, []);

  const removeProperty = (id) => {
    const updated = saved.filter((p) => p.id !== id);
    setSaved(updated);
    localStorage.setItem("savedProperties", JSON.stringify(updated));
  };

  if (saved.length === 0) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          ❌ No saved properties.
        </p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div
        className="saved-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {saved.map((property) => (
          <div
            key={property.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Link
              to={`/property/${property.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {property.media?.images?.[0]?.url && (
                <img
                  src={property.media.images[0].url}
                  alt={property.media.images[0].alt || property.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <h3>{property.title}</h3>
              <p>
                <strong>Price:</strong> {property.currency}
                {property.price?.toLocaleString() ?? "-"}
              </p>
              <p>
                <strong>Status:</strong> {property.status ?? "-"}
              </p>
              <p>
                <strong>Address:</strong> {property.address ?? "-"}
              </p>
            </Link>

            <button
              onClick={() => removeProperty(property.id)}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#ff4757",
                color: "white",
                cursor: "pointer",
              }}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Saved;

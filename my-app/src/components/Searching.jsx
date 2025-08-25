import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../features/listing/listingSlice";
import Navbar from "./Navbar";

const Searching = () => {
  const dispatch = useDispatch();
  const { items: properties, loading, error } = useSelector(
    (state) => state.listing
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);


  const saveProperty = (property) => {
    const existing = JSON.parse(localStorage.getItem("savedProperties")) || [];
    if (!existing.some((p) => p.id === property.id)) {
      const updated = [...existing, property];
      localStorage.setItem("savedProperties", JSON.stringify(updated));
      alert("✅ Property saved!");
    } else {
      alert("⭐ Already saved!");
    }
  };


  const filtered = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      
      <div style={{ padding: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="🔍 Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

    
      <div style={{ width: "100%", height: "400px", marginBottom: "20px" }}>
        <iframe
          title="Property Map"
          src="https://www.openstreetmap.org/export/embed.html"
          width="100%"
          height="100%"
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        ></iframe>
      </div>

      
      <div
        className="property-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {filtered.length === 0 && !loading ? (
          <p>No properties found.</p>
        ) : (
          filtered.map((property) => (
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
              <p>
                {property.bedrooms ?? "-"} Beds • {property.bathrooms ?? "-"} Baths
              </p>

              <button
                onClick={() => saveProperty(property)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#2ed573",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                ⭐ Save
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Searching;

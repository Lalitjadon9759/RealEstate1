import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function PropertyDetails() {
  const { id } = useParams();
  const property = useSelector((state) =>
    state.listing.items.find((p) => p.id === id)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ name: "", email: "", message: "" });
  };

  if (!property) {
    return (
      <div style={{ padding: "20px" }}>
        <Navbar />
        <h2>Property not found</h2>
        <Link to="/">Back to Listings</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <Link to="/" style={{ display: "inline-block", marginBottom: "15px" }}>
        ⬅ Back to Listings
      </Link>

      <h2>{property.title}</h2>
      <p>
        <strong>Price:</strong> {property.currency}
        {property.price?.toLocaleString()}
      </p>
      <p>
        <strong>Status:</strong> {property.status}
      </p>
      <p>
        <strong>Address:</strong> {property.address}
      </p>
      <p>
        {property.bedrooms} Beds • {property.bathrooms} Baths • {property.areaSqft} sqft
      </p>

      
      
      <div style={{ display: "flex", gap: "10px", overflowX: "auto", margin: "20px 0" }}>
        {property.media?.images?.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={img.alt}
            style={{ width: "300px", height: "200px", objectFit: "cover", borderRadius: "8px" }}
          />
        ))}
      </div>

      
      <p style={{ margin: "20px 0" }}>{property.description}</p>

      
      <h3>Amenities</h3>
      <ul>
        {property.amenities?.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>

    
      {property.media?.videos?.[0] && (
        <div style={{ margin: "20px 0" }}>
          <h3>Video Tour</h3>
          <iframe
            width="560"
            height="315"
            src={property.media.videos[0].url.replace("watch?v=", "embed/")}
            title="Property Video Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          background: "#f9f9f9",
          maxWidth: "500px",
        }}
      >
        <h3>Contact Owner</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px", alignItems:"center" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            ></textarea>
          </div>
          <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default PropertyDetails;

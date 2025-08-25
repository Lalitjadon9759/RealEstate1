import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const { user } = useSelector((state) => state.auth);
  const navigate=useNavigate();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f6fa" }}>
      
      <Navbar />

<section
  style={{
    height: "60vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "20px",
  }}
>
  <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
    Welcome  🏡
  </h1>
  <p style={{ fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.6" }}>
    Discover your dream home, explore listings, and connect with trusted agents
    — all in one place.
  </p>
  <button
    style={{
      marginTop: "20px",
      padding: "12px 25px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#ff4757",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#e84118")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4757")}
    onClick={() => navigate("/listing")}
  >
      Explore Listings 🔍
  </button>
</section>

<section
  style={{
    padding: "60px 20px",
    backgroundColor: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "2.5rem",
        marginBottom: "20px",
        color: "#2f3542",
      }}
    >
      Featured Properties 🏠
    </h2>
    <p
      style={{
        fontSize: "1.1rem",
        marginBottom: "40px",
        color: "#57606f",
      }}
    >
      Explore our handpicked selection of premium properties tailored just for
      you.
    </p>

  
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
      }}
    >
      
      <div
        style={{
          backgroundColor: "#f5f6fa",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
          alt="Luxury Villa"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "20px", textAlign: "left" }}>
          <h3 style={{ marginBottom: "10px", color: "#2f3542" }}>
            Luxury Villa
          </h3>
          <p style={{ marginBottom: "10px", color: "#57606f" }}>
            📍 Los Angeles, California
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#ff4757" }}>
            $1,250,000
          </p>
        </div>
      </div>

      
      <div
        style={{
          backgroundColor: "#f5f6fa",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80"
          alt="Modern Apartment"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "20px", textAlign: "left" }}>
          <h3 style={{ marginBottom: "10px", color: "#2f3542" }}>
            Modern Apartment
          </h3>
          <p style={{ marginBottom: "10px", color: "#57606f" }}>
            📍 New York, USA
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#ff4757" }}>
            $850,000
          </p>
        </div>
      </div>

      
      <div
        style={{
          backgroundColor: "#f5f6fa",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Family House"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "20px", textAlign: "left" }}>
          <h3 style={{ marginBottom: "10px", color: "#2f3542" }}>
            Family House
          </h3>
          <p style={{ marginBottom: "10px", color: "#57606f" }}>
            📍 Austin, Texas
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#ff4757" }}>
            $600,000
          </p>
        </div>
      </div>

    
    
      <div
        style={{
          backgroundColor: "#f5f6fa",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
          alt="Penthouse Suite"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "20px", textAlign: "left" }}>
          <h3 style={{ marginBottom: "10px", color: "#2f3542" }}>
            Penthouse Suite
          </h3>
          <p style={{ marginBottom: "10px", color: "#57606f" }}>
            📍 Chicago, Illinois
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#ff4757" }}>
            $1,500,000
          </p>
        </div>
      </div>


      <div
        style={{
          backgroundColor: "#f5f6fa",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
          alt="Country Cottage"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "20px", textAlign: "left" }}>
          <h3 style={{ marginBottom: "10px", color: "#2f3542" }}>
            Country Cottage
          </h3>
          <p style={{ marginBottom: "10px", color: "#57606f" }}>
            📍 Nashville, Tennessee
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#ff4757" }}>
            $450,000
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      <footer
        style={{
          backgroundColor: "#2f3542",
          color: "white",
          padding: "50px 20px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
    
          <div>
            <h3 style={{ marginBottom: "15px" }}>About Us</h3>
            <p style={{ lineHeight: "1.6", color: "#dcdde1" }}>
              We are dedicated to providing a seamless platform for exploring
              opportunities, connecting with a vibrant community, and achieving
              success together.
            </p>
          </div>

          
          <div>
            <h3 style={{ marginBottom: "15px" }}>Explore More</h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><Link to="/listing" style={{ color: "#ffdd59", textDecoration: "none" }}>Listings</Link></li>
              <li><Link to="/searching" style={{ color: "#ffdd59", textDecoration: "none" }}>Searching</Link></li>
              <li><Link to="/buying" style={{ color: "#ffdd59", textDecoration: "none" }}>Buying</Link></li>
              <li><Link to="/saved" style={{ color: "#ffdd59", textDecoration: "none" }}>Saved Items</Link></li>
            </ul>
          </div>

        
          <div>
            <h3 style={{ marginBottom: "15px" }}>Contact Info</h3>
            <p>Email: lalitkrthakur2001@gmail.com</p>
            <p>Phone: +91 9759430760</p>
            <p>Location: New Delhi, India</p>
           
          </div>

      
          <div>
            <h3 style={{ marginBottom: "15px" }}>for fill the details click on contact us  </h3>
          <button
          style={{color:"white", backgroundColor:"red"}}
            onClick={() => navigate("/contactform")}
          >contact us</button>
          </div>
        </div>

      
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "15px",
            fontSize: "14px",
            color: "#dcdde1",
          }}
        >
          <p>&copy; {new Date().getFullYear()} My Platform. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;

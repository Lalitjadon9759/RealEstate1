import React from "react";
import Navbar from "./Navbar";

export default function ContactForm() {
  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "60px 20px",
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            padding: "40px",
            maxWidth: "600px",
            width: "100%",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#2f3542",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Get in Touch ✉️
          </h2>

          <form
            action="mailto:lalitkrthakur2001@gmail.com"
            method="POST"
            encType="text/plain"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: "14px 18px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "16px",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #2575fc")}
              onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: "14px 18px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "16px",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #2575fc")}
              onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              style={{
                padding: "14px 18px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "16px",
                outline: "none",
                resize: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #2575fc")}
              onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
            />
            <button
              type="submit"
              style={{
                padding: "14px",
                background: "linear-gradient(135deg, #2575fc, #6a11cb)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
              onMouseOver={(e) =>
                (e.target.style.background =
                  "linear-gradient(135deg, #6a11cb, #2575fc)")
              }
              onMouseOut={(e) =>
                (e.target.style.background =
                  "linear-gradient(135deg, #2575fc, #6a11cb)")
              }
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

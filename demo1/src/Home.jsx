import { useState, useEffect } from "react";

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
  
  ];

  const [index, setIndex] = useState(0);


  const sliderStyle = {
    width: "100%",
    height: "420px",
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "38px",
    fontWeight: "bold"
  };

  const section = { padding:"60px 20px", textAlign:"center" };

  const cards = {
    display:"flex",
    flexWrap:"wrap",
    gap:"20px",
    justifyContent:"center",
    marginTop:"30px"
  };

  const card = {
    width:"260px",
    padding:"20px",
    borderRadius:"10px",
    background:"#f1f5f9"
  };

  return (
    <div>
      <div style={sliderStyle}>Welcome to ABC Academy</div>

      <div style={{...section, background:"#ffffff"}}>
        <h2>Why Choose Our Institute?</h2>
        <div style={cards}>
          <div style={card}>
            <h3>Experienced Faculty</h3>
            <p>Learn from highly qualified teachers.</p>
          </div>
          <div style={card}>
            <h3>Modern Classrooms</h3>
            <p>Smart classrooms with digital learning.</p>
          </div>
          <div style={card}>
            <h3>Practical Training</h3>
            <p>Hands-on learning with real projects.</p>
          </div>
        </div>
      </div>

      <div style={{...section, background:"#e2e8f0"}}>
        <h2>Admissions Open 2026</h2>
        <p>Join our institute and build a bright future.</p>
        <button style={{
          marginTop:"20px",
          padding:"12px 25px",
          background:"#2563eb",
          border:"none",
          color:"white",
          borderRadius:"6px",
          cursor:"pointer"
        }}>
          Get Admission
        </button>
      </div>
    </div>
  );
}

export default Home;
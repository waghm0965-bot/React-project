function About(){
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
    borderRadius:"10px",
    overflow:"hidden",
    background:"#ffffff",
    boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
  };

  const img = { width:"100%", height:"200px", objectFit:"cover" };

  return(
    <div>
      <div style={{padding:"40px"}}>
        <h1 style={{textAlign:"center"}}>About ABC Academy</h1>
        <p style={{maxWidth:"800px",margin:"20px auto",lineHeight:"1.7"}}>
          ABC Academy is a leading educational institute dedicated to
          academic excellence and student success.
        </p>
      </div>

      <div style={{...section, background:"#f1f5f9"}}>
        <h2>Our Mission</h2>
        <p>To provide quality education and shape future leaders.</p>
      </div>

      <div style={{...section, background:"#ffffff"}}>
        <h2>Meet Our Expert Faculty</h2>
        <div style={cards}>
          <div style={card}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" style={img}/>
            <div style={{padding:"15px"}}>
              <h3>Dr. Amit Sharma</h3>
              <p>Science Professor</p>
            </div>
          </div>
          <div style={card}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" style={img}/>
            <div style={{padding:"15px"}}>
              <h3>Prof. Neha Kulkarni</h3>
              <p>Mathematics Expert</p>
            </div>
          </div>
          <div style={card}>
            <img src="https://randomuser.me/api/portraits/men/75.jpg" style={img}/>
            <div style={{padding:"15px"}}>
              <h3>Mr. Raj Patil</h3>
              <p>Computer Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
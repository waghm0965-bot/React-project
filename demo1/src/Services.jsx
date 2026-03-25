function Services(){
  const cardStyle = {
    background:"#f8fafc",
    padding:"20px",
    borderRadius:"10px",
    width:"240px",
    textAlign:"center"
  };

  const container = {
    display:"flex",
    flexWrap:"wrap",
    gap:"20px",
    justifyContent:"center",
    marginTop:"30px"
  };

  return(
    <div style={{padding:"40px"}}>
      <h1 style={{textAlign:"center"}}>Our Courses</h1>

      <div style={container}>
        <div style={cardStyle}><h3>Computer Science</h3><p>Programming & IT Skills</p></div>
        <div style={cardStyle}><h3>Science</h3><p>Physics, Chemistry, Biology</p></div>
        <div style={cardStyle}><h3>Commerce</h3><p>Accounts, Economics, Business</p></div>
        <div style={cardStyle}><h3>Arts</h3><p>Humanities & Social Studies</p></div>
        <div style={cardStyle}><h3>Entrance Exam Prep</h3><p>MHT-CET, JEE, NEET</p></div>
      </div>
    </div>
  );
}

export default Services;
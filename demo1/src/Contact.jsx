function Contact(){
  return(
    <div style={{padding:"40px",textAlign:"center"}}>
      <h1>Contact Us</h1>

      

      <div style={{marginTop:"20px"}}>
        <input placeholder="Your Name" style={inputStyle} />
        <br/>
        <input placeholder="Your Email" style={inputStyle} />
        <br/>
        <textarea placeholder="Your Message" style={{...inputStyle,height:"100px"}}/>
        <br/>
        <button style={btnStyle}>Send Message</button>
      </div>

      <div style={{marginTop:"40px"}}>
        <h3>Our Office</h3>
        <p>Pune, Maharashtra, India</p>
        <p>Email: Waghm0@</p>
        <p>Phone: 91xxxxxxx</p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding:"10px",
  margin:"10px",
  width:"260px"
};

const btnStyle = {
  padding:"10px 20px",
  background:"#111",
  color:"white",
  border:"none",
  marginTop:"10px"
};

export default Contact;
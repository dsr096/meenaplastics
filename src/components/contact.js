import React from 'react'
import {Link} from "react-router-dom";
import "./contact.css";

function contact() {
  return (
    <div>
      <div className="backimg3">
    <nav className="navbar">
        <p className="meena">Meena Plastics</p>
        <ul className="ul1">
          <Link to="/home"><li className="list1">Home</li></Link>
           <Link to="/about"><li className="list1">About</li></Link>
          <Link to="/product"><li className="list1">Products</li></Link>
            <Link to="/contact"><li className="list1">Contact</li></Link>
        </ul>
    </nav>
    <p className="chead"><b>Contact Us</b></p>
    </div>

    <div className="cdiv12">
    <div className="cdiv1">
        <p className="chead1"><b>Contact Us!<br/><span className="cspan1"><b>Get In Touch! _____</b></span></b></p><br/>
        <input type="text" placeholder=' Name' className="inputs"></input><br/>
        <input type="email" placeholder=' Email' className="inputs"></input><br/>
        <input type="url" placeholder=' Website' className="inputs"></input><br/>
        <input type="text" placeholder=' Message' className="inputsbig"></input><br/>
        <button className="csubmit"><b>Submit</b></button>
    </div>

    <div className="cdiv2">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.7462916663976!2d73.18699507383846!3d22.249702944730306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc42c4284fc63%3A0xce07c1e62e46682d!2sMeena%20Plastics!5e0!3m2!1sen!2sin!4v1734770442222!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    </div>

    <div className="cdiv3">
        <div className="cbox1"><img src="https://static.vecteezy.com/system/resources/previews/000/564/437/original/email-symbol-icon-vector.jpg" className="cimage" alt="hi"></img><br/><p className="timgc"><b>EMAIL:</b></p><p className="gclass">Meenaplastics882@gmail.com<br/>Yashkukreja1309@gmail.com</p></div>
        <div className="cbox2"><img src="https://tse2.mm.bing.net/th?id=OIP.f_x5vzGQ6kS3mw8jOVglaQHaHa&pid=Api&P=0&h=180" className="cimage" alt="hi"></img><br/><p className="timgc"><b>PHONE:</b></p><p className="gclass">+91 94083 42280</p></div>
        <div className="cbox3"><img src="https://tse4.mm.bing.net/th?id=OIP.Vrl2GNJuXMaZh3RYlMwuqQHaHY&pid=Api&P=0&h=180" className="cimage" alt="hi"></img><br/><p className="timgc"><b>ADDRESS:</b></p><p className="gclass">Meena plastics, 882/5 Makarpura GIDC<br/>Industrial estate, Vadodara-390010</p></div>
    </div>

    <footer className="footer">
  <div className="footerdiv">
  <div className="Logo">
     <p className="fl1"><b>Logo<br/>____</b></p>
     <p className="para4">We are Meena Plastics, a business with ISO<br/>
     9001/2015 certification. We are well-known and<br/>
     reputable for providing the highest quality carry<br/>
     bags, roll garbage bags, bio-hazardous bags, and<br/>
     other products.</p>
     <img src="https://tse3.mm.bing.net/th?id=OIP.TwESrblIhpd2D8XG5VDz5QHaHa&pid=Api&P=0&h=180" alt="hi" className="hw"></img>
        <img src="https://tse1.mm.bing.net/th?id=OIP.tkezL3Y1TkpZM3IxjGfpkwHaHa&pid=Api&P=0&h=180" alt="hi" className="hw"></img>
        <img src="https://tse2.mm.bing.net/th?id=OIP.xd3sxnfRDdSuGpIWv3Xf9wHaHZ&pid=Api&P=0&h=180" alt="hi" className="hw"></img>
        <img src="https://img.freepik.com/premium-vector/square-youtube-logo-isolated-white-background_469489-911.jpg?w=2000" alt="hi" className="hw"></img>
  </div>

  <div className="quicklinks">
       <p className="fl1"><b>Quick Links<br/>_____</b></p>
       <Link to="/home"> <p className="para4">Home</p></Link>
      <Link to="/about"><p className="para4">About</p></Link>
       <Link to="/product"><p className="para4">Product</p></Link>
       <Link to="/contact"><p className="para4">Contact</p></Link>
  </div>

  <div className="contact">
   <p className="fl1"><b>Contact<br/>_____</b></p>
   <p className="para4">Address: Meena plastics<br/>882/5 Makarpura GIDC Industrial estate<br/>Vadodara-390010<br/><br/>Phone: +91 94083 42280<br/><br/>
   Email: meenaplastics882@gmail.com<br/>
yashkukreja1309@gmail.com
</p>
  </div>
  </div>
  <div className="footerbar">
    <p className="ftext">Copyright ©2024 Meena Plastics. All Rights Reserved.</p>
    <p className="by">Site Developed by<span className="spanc"> Mamo Tachnolabs LLP</span></p>
  </div>
</footer>
    </div>
  )
}

export default contact

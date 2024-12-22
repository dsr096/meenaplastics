import React from 'react'
import {Link} from "react-router-dom";
import "./about.css";
function about() {
  return (
    <div>
     <div className="backimg">
    <nav className="navbar">
        <p className="meena">Meena Plastics</p>
        <ul className="ul1">
            <Link to="/home"><li className="list1">Home</li></Link>
           <Link to="/about"><li className="list1">About</li></Link>
           <a href="/product"><li className="list1">Products</li></a>
            <a href="/contact"><li className="list1">Contact</li></a>
        </ul>
    </nav>
    <p className="aboutus"><b>About Us</b></p>
    </div>

   <div className="div12">
   <div className="div1">
       <p className="who"><b>WHO WE ARE</b><br/><span className="span1"><b>_______</b></span></p>
       <p className="para1">We are Meena Plastics, a business with ISO<br/>
       9001/2015 certification. We are well-known<br/>
       and reputable for providing the highest<br/>
       quality carry bags, roll garbage bags, bio-<br/>
       hazardous bags, and other products. Our<br/>
       ability to consistently outperform the<br/>
       competition in satisfying customer needs in a<br/>
       way that benefits both parties has earned us<br/>
       respect and trust in this business. We<br/>
       introduce ourselves with great pride because<br/>
       we demonstrate that customers make the<br/>
       best choices if they believe us. From<br/>
       Vadodara, we satisfy the needs of our<br/>
       customers and consistently fulfill our delivery<br/>
       commitments.</p>
    </div>

    <div className="div2">
        <img src="https://meenaplastics.com/wp-content/uploads/2023/05/Set-with-different-trash-bags-full-of-garbage-on-white-background_-Banner-design.jpg" alt="hi" className="img1"></img>
    </div>
   </div>

<div className="div34">
<div className="div3">
 <img src="https://meenaplastics.com/wp-content/uploads/2023/03/13-scaled-1024x1160.jpg" alt="hi" className="img2"></img>
</div>
   <div className="div4">
      <p className="our"><b>OUR MISSION</b><br/><span className="span2"><b>_____</b></span></p>
      <p className="para2">Our wide selection of high-quality goods has<br/>helped us build a sizable clientele. We are
      <br/>renowned in the business for providing top-notch<br/>products at competitive prices.</p>

              <p className="para2"><span className="span3">{'\u2713'}</span> Reasonable and Affordable Rates</p>
              <p className="para2"><span  className="span3">{'\u2713'}</span> Prompt Order Delivery</p>
              <p className="para2"><span  className="span3">{'\u2713'}</span> Client Satisfaction</p>
              <p className="para2"><span  className="span3">{'\u2713'}</span> Ethical Business</p>
              <p className="para2"><span  className="span3">{'\u2713'}</span> Versatile Payment Methods</p>
              <p className="para2"><span  className="span3">{'\u2713'}</span> Enormous Distribution Network</p>
              <p className="para2"><span  className="span3">{'\u2713'}</span> Follows a Customized Approach</p>
   </div>
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
    <p className="by">Site Developed by<span className="span0"> Mamo Tachnolabs LLP</span></p>
  </div>
</footer>

    </div>
  )
}

export default about

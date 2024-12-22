import React from 'react'
import {Link} from "react-router-dom";
import "./product.css";
function product() {
  return (
    <div>
       <div className="backimg2">
    <nav className="navbar">
        <p className="meena">Meena Plastics</p>
        <ul className="ul1">
          <Link to="/home"><li className="list1">Home</li></Link>
           <Link to="/about"><li className="list1">About</li></Link>
          <Link to="/product"><li className="list1">Products</li></Link>
             <Link to="/contact"><li className="list1">Contact</li></Link>
        </ul>
    </nav>
    <p className="headp"><b>Products</b></p>
    </div>

    <div className="pflex12">
    <div className="pflex1">
        <div classname="pimg1div">
            <img src="https://meenaplastics.com/wp-content/uploads/2023/03/Untitled-design-12-1024x768.png" alt="hi" className="pimg1"></img>
        </div>
        <div className="pimg2div">
               <img src="https://meenaplastics.com/wp-content/uploads/2023/05/AdobeStock_502413354_Preview-300x300.jpeg" alt="hi" className="pimg2"></img>
               <img src="https://meenaplastics.com/wp-content/uploads/2023/03/4-300x300.png" alt="hi" className="pimg2"></img>
               <img src="https://meenaplastics.com/wp-content/uploads/2023/05/7853f688-38ed-4718-a4c9-22a1f90b0208-300x300.jpg" alt="hi" className="pimg2"></img>
        </div>
    </div>

    <div className="pflex2">
     <p className="garbage"><b>GARBAGE BAG<br/> DISPOSABLE<br/><span className="pspan1"><b>_____</b></span></b></p>
     <p className="parahead1"><b>Product Specifications:</b></p>
     <p className="ppara1">Available in all microns and material<br/><br/>Pack Size: Box pkg & Piece pkg<br/><br/>Minimum Order: 50 kg<br/><br/><span className="pspan2"><b>______</b></span></p>

     <p className="parahead2"><b>Product Description:</b></p>
     <p className="ppara2">Superior quality Garbage Bag with high<br/>strength, durability & smooth finish.<br/><br/>
     Widely use for kitchen dry waste and wet<br/>waste.<br/><br/>Eco-friendly and tear-resistant.<br/><br/>Bag Dimensions/Size: As per need.</p>
    <Link to="/about"><button className="contactnow"><b>Contact Now</b></button></Link>
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

export default product

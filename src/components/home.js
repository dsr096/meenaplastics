import React from 'react';
import {Link} from "react-router-dom";

import './home.css'

function Home() {
    
  return (
   <div>
    <div className="backimg1">
    <nav className="navbar">
        <p className="meena">Meena Plastics</p>
        <ul className="ul1">
          <Link to="/home"><li className="list1">Home</li></Link>
           <Link to="/about"><li className="list1">About</li></Link>
           <Link to="/product"><li className="list1">Products</li></Link>
             <Link to="/contact"><li className="list1">Contact</li></Link>
        </ul>
    </nav>
    <div className="info1">
        <p className="headtag"><b>THE BEST<br/>PLASTIC<br/>PRODUCTS<br/>IN<span className="spanworld"> WORLD</span></b></p>
        
       <Link to="/about"><button className="b1">Read More</button><br/><br/></Link>
       <div className="imgs">
       <img src="https://tse3.mm.bing.net/th?id=OIP.TwESrblIhpd2D8XG5VDz5QHaHa&pid=Api&P=0&h=180" alt="hi" className="hw"></img>
        <img src="https://tse1.mm.bing.net/th?id=OIP.tkezL3Y1TkpZM3IxjGfpkwHaHa&pid=Api&P=0&h=180" alt="hi" className="hw"></img>
        <img src="https://tse2.mm.bing.net/th?id=OIP.xd3sxnfRDdSuGpIWv3Xf9wHaHZ&pid=Api&P=0&h=180" alt="hi" className="hw"></img>
        <img src="https://img.freepik.com/premium-vector/square-youtube-logo-isolated-white-background_469489-911.jpg?w=2000" alt="hi" className="hw"></img>
       </div>
    </div>
    </div>
   <div className="div12">
   <div className="div1">
        <p className="head1"><b>About US</b></p>
        <p className="head2"><b>DISCOVER OUR STORY______</b></p>
        <p className="para2">
        We are Meena Plastics, an ISO 9001/2015-certified company.<br/>
        Renowned and trusted, we specialize in delivering premium<br/>
        -quality carry bags, garbage roll bags, biohazard bags,and<br/>
        and other related products. Our consistent ability to exceed<br/>
        customer expectations and provide mutually beneficial<br/>
        solutions has earned us a strong reputation and trust<br/>
        in the industry. We proudly present ourselves, proving that<br/>
        customers make the right decisions when they place their<br/>
        confidence in us. Operating from Vadodara, we diligently meet<br/>
        our customers' demands and ensure timely delivery without fail.
        </p>
        <Link to="/about"><button className="b1">Read More</button><br/><br/></Link>
   </div>
  
  <div className="container">
       <img src="https://meenaplastics.com/wp-content/uploads/elementor/thumbs/Untitled-design-11-q2v1qvn07crh7el0q61km90kro4lhfyi2qtsc9pgzo.png" alt="hi" className="image1"></img>
       <img src="https://meenaplastics.com/wp-content/uploads/elementor/thumbs/Plasticplace-32-Gallon-Totera%C2%AE-Compatible-Trash-Bags-50-Bags-On-Rolls-q5tg6nbjp2vhaizju7h33oh7g8b2jt05a74sd188tc.jpg" alt="hi" className="image2"></img>
  </div>
   </div>
    
    <div className="services">
       <p className="serviceshead"><b>SERVICES AND SOLUTIONS WE OFFER</b></p>
       <div className="flex1">
       <div className="box"><img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-factory-industrial-logo-design-template-vector-png-image_3555607.jpg" alt="hi" className="logos"></img><br/><br/><b>Industrial</b></div>
       <div className="box"><img  src="https://tse2.mm.bing.net/th?id=OIP.rPThGjjEPEk5HvCSfhCxDQHaHa&pid=Api&P=0&h=180"  alt="hi"className="logos"></img><br/><br/><b>Hotel</b></div>
       <div className="box"><img src="https://static.vecteezy.com/system/resources/previews/013/187/643/original/creative-human-medical-healthcare-logo-design-illustration-icon-concept-vector.jpg"          alt="hi"   className="logos"></img><br/><br/><b>Helthcare</b></div>
       <div className="box"><img src="https://tse2.mm.bing.net/th?id=OIP.mqutjr8TKhOZr2kPstlJQQHaHY&pid=Api&P=0&h=180"      alt="hi"    className="logos"></img><br/><br/><b>Retail</b></div>
       <div className="box"><img   src="https://tse3.mm.bing.net/th?id=OIP.09FQmvMPHWJeZ1vI9vYRGwHaHa&pid=Api&P=0&h=180"        alt="hi" className="logos"></img><br/><br/><b>Agriculture</b></div>
       <div className="box"><img  src="https://img.freepik.com/premium-vector/restaurant-food-design-logo-spoon-plate-logo_1088810-714.jpg"           alt="hi"className="logos"></img><br/><br/><b>Food</b></div>
       </div>
    </div>

    <div className="div34">
    <div className="divbest">
          <p className="best"><b>BEST PLASTIC<br/>SUBSTITUTE</b></p>
          <p className="para3">Compostable products serve as the ideal<br/>
          substitute for plastics because they are<br/>
          environmentally, economically, and naturally<br/>
          sustainable.They offer financial advantages<br/>
          to society, contribute to combating climate<br/>
          change, and are beneficial for both<br/>
          terrestrial and aquatic wildlife.</p>
    </div>

   <div className="div4">      
   <div className="flex2">
         <div className="f1"><img    src="https://tse3.mm.bing.net/th?id=OIP.usQJnhM-1Qy6IuTpsc4beAHaHa&pid=Api&P=0&h=180"          alt="hi" className="logo1"></img>  Non Toxic</div>
         <div className="f1"><img  src="https://cdn-icons-png.flaticon.com/512/25/25147.png" alt="hi" className="logo1"></img>  100% Natural</div>
    </div>
    <div className="flex3">
         <div className="f1"><img    src="https://tse3.mm.bing.net/th?id=OIP.6SfZ0VbhgKVUpM9BztVGCgHaHN&pid=Api&P=0&h=180"          alt="hi" className="logo1"></img>  Recyclable</div>
         <div className="f1"><img  src="https://cdn-icons-png.flaticon.com/512/25/25150.png" alt="hi" className="logo1"></img>  Bio Based</div>
    </div>
   </div>
    </div>

<div><img src="https://meenaplastics.com/wp-content/plugins/elementor/assets/images/placeholder.png" alt="hi"></img></div>
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
    <p className="by">Site Developed by<span className="spanhome"> Mamo Tachnolabs LLP</span></p>
  </div>
</footer>
   </div>
    


    
  )
}

export default Home;

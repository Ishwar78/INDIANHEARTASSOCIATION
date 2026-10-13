import { Link } from "react-router-dom";
import {
  FiArrowRight, FiCheckCircle, FiClock, FiMonitor, FiAward, FiUsers,
  FiBookOpen, FiShield, FiHeart, FiFileText, FiChevronDown, FiStar,
  FiShoppingCart, FiPlay, FiGlobe, FiMessageCircle
} from "react-icons/fi";
import "./CourseDetail.css";

const related = [
  ["Basic Life Support (BLS)","/images/course-2.png","₹3,500","22% OFF"],
  ["First Responder Training","/images/course-3.png","₹3,000","25% OFF"],
  ["Community First Aid Program","/images/course-4.png","₹1,500","25% OFF"],
  ["Online First Aid Certification","/images/course-1.png","₹1,200","33% OFF"]
];

export default function CourseDetail(){
  return <main className="course-page">
    <section className="course-hero">
      <div><div className="breadcrumbs"><Link to="/">Home</Link><span>›</span><Link to="/#courses">Courses</Link><span>›</span><b>2-Day CPR & First Aid Training</b></div>
      <h1>2-Day CPR & First Aid Training</h1><p>Learn life-saving skills from certified experts and be prepared to respond in real emergencies.</p></div>
      <div className="hero-benefits"><Benefit Icon={FiAward} t="Certified Training"/><Benefit Icon={FiHeart} t="Hands-on Practice"/><Benefit Icon={FiShield} t="Recognized Certificate"/></div>
    </section>

    <section className="course-main">
      <div className="media-column">
        <div className="course-main-image"><img src="/images/hero.png" alt="CPR and First Aid Training"/><button><FiPlay/><span>Watch Preview</span></button></div>
        <div className="thumbs">{["/images/course-1.png","/images/course-2.png","/images/course-3.png","/images/course-4.png"].map((x,i)=><img src={x} alt="" key={x}/>)}</div>
      </div>
      <div className="course-info">
        <div className="rating-line"><span className="popular">Most Popular</span><span className="stars">★★★★★</span><b>4.8</b><small>(1,250+ Reviews)</small></div>
        <h2>2-Day CPR & First Aid Training</h2>
        <h3>Get trained, get certified and be ready to save lives.</h3>
        <p>This comprehensive training program covers CPR, first aid and emergency response skills. Designed for students, professionals, communities and organizations.</p>
        <div className="info-grid">
          <Info Icon={FiClock} t="Duration" v="2 Days (16 Hours)"/>
          <Info Icon={FiMonitor} t="Mode" v="Offline / Online"/>
          <Info Icon={FiAward} t="Certificate" v="Yes (Valid Nationwide)"/>
          <Info Icon={FiShield} t="Level" v="Beginner to Advanced"/>
          <Info Icon={FiGlobe} t="Language" v="Hindi & English"/>
          <Info Icon={FiHeart} t="Hands-on Practice" v="Included"/>
        </div>
      </div>
      <aside className="buy-card">
        <div className="price-row"><strong>₹2,500</strong><del>₹3,500</del><span>29% OFF</span></div>
        <button className="buy-now">Buy Now <FiArrowRight/></button>
        <button className="cart-btn"><FiShoppingCart/> Add to Cart</button>
        <ul>{["Get Certified","Hands-on Practical Training","Study Material Included","Lifetime Access to Resources","Doubt Support","Valid Across India"].map(x=><li key={x}><FiCheckCircle/>{x}</li>)}</ul>
      </aside>
    </section>

    <nav className="course-tabs">
      {["Overview","Course Curriculum","What You Will Learn","Certification","Eligibility","Reviews","FAQ"].map((x,i)=><a className={i===0?"active":""} href={`#${x.toLowerCase().replaceAll(" ","-")}`} key={x}>{x}</a>)}
    </nav>

    <section className="course-content">
      <div className="content-main">
        <section id="overview"><Title kicker="START YOUR LIFE-SAVING JOURNEY" title="Course Overview"/>
          <p className="lead">The 2-Day CPR & First Aid Training by Indian Heart Association is a practical, hands-on program designed to equip individuals with essential life-saving skills. This course helps you learn how to respond effectively to cardiac arrest, choking, injuries and other medical emergencies.</p>
          <div className="feature-grid">{[[FiUsers,"Learn from Experts","Certified Trainers"],[FiHeart,"Practical Sessions","Real-life Scenarios"],[FiAward,"Industry Recognized","Certification"],[FiShield,"Suitable for Everyone","Students, Professionals, NGOs, Corporates"]].map(([Icon,t,d])=><div className="feature" key={t}><Icon/><b>{t}</b><span>{d}</span></div>)}</div>
        </section>

        <section id="what-you-will-learn" className="learn-section"><Title kicker="PRACTICAL SKILLS YOU TAKE HOME" title="What You Will Learn"/>
          <div className="learn-grid"><ul>{["Understand the basics of first aid and emergency response","Performing high-quality CPR (Cardiopulmonary Resuscitation)","Using an Automated External Defibrillator (AED)","Managing choking, bleeding, fractures and burns","Responding to cardiac arrest and other medical emergencies","Building confidence to act in real-life situations"].map(x=><li key={x}><FiCheckCircle/>{x}</li>)}</ul><div className="certificate-preview"><div className="certificate-logo">IHA</div><b>INDIAN HEART ASSOCIATION</b><strong>Certificate of Completion</strong><span>This is to certify that</span><em>Your Name</em><small>2-Day CPR & First Aid Training Program</small><div className="seal">✓</div></div></div>
        </section>

        <section id="course-curriculum"><Title kicker="WHAT'S INSIDE THE PROGRAM" title="Course Curriculum"/>
          <div className="curriculum">{["Emergency Response Fundamentals","CPR & Adult Cardiac Arrest","AED Awareness & Safe Use","First Aid for Injuries","Choking, Bleeding & Burns","Practical Assessment & Certification"].map((x,i)=><details key={x} open={i===0}><summary><span><b>{String(i+1).padStart(2,"0")}</b>{x}</span><FiChevronDown/></summary><p>Instructor-led learning, demonstrations and guided hands-on practice to build confidence in a real emergency.</p></details>)}</div>
        </section>
      </div>
      <aside className="enroll-side">
        <div className="side-box"><h3>Who Should Enroll?</h3>{["Students & Young Professionals","Teachers & School Staff","Corporate Employees","Community Volunteers","Healthcare Support Staff","Anyone who wants to save lives"].map(x=><div key={x}><FiCheckCircle/>{x}</div>)}</div>
        <div className="life-box"><FiHeart/><b>Be a First Responder<br/>Because Every Second Counts.</b><FiArrowRight/></div>
        <div className="help-box"><FiMessageCircle/><div><b>Need help choosing?</b><small>Talk to our training team.</small></div><a href="tel:18002022459">Call Now</a></div>
      </aside>
    </section>

    <section className="related-section"><div className="related-head"><Title kicker="KEEP LEARNING" title="Related Courses"/><Link to="/#courses">View All Courses <FiArrowRight/></Link></div><div className="related-grid">{related.map(([t,img,p,off])=><article key={t}><img src={img} alt={t}/><div className="related-body"><h3>{t}</h3><div><strong>{p}</strong><del>₹4,500</del><span>{off}</span></div><small><FiStar/> 4.8 &nbsp; (980)</small><Link to="/course/2-day-cpr-first-aid">View Details <FiArrowRight/></Link></div></article>)}</div></section>
    <Footer/>
  </main>
}
function Benefit({Icon,t}){return <div><Icon/><span>{t}</span></div>}
function Info({Icon,t,v}){return <div><Icon/><span><small>{t}</small><b>{v}</b></span></div>}
function Title({kicker,title}){return <div className="content-title"><small>{kicker}</small><h2>{title}</h2></div>}
function Footer(){return <footer className="course-footer"><div className="course-footer-inner"><div><img src="/images/logo.png" alt="IHA"/><p>Empowering individuals and communities with CPR, first aid and emergency response training for a healthier, safer India.</p></div><div><h4>Quick Links</h4><a href="/">Home</a><a href="#">About Us</a><a href="/#courses">Courses</a><a href="#">Skill Centers</a><a href="#">Volunteers</a></div><div><h4>Our Programs</h4><a href="#">CPR & First Aid</a><a href="#">Basic Life Support (BLS)</a><a href="#">First Responder Training</a><a href="#">Community Programs</a><a href="#">Bike Ambulance</a></div><div><h4>Support</h4><a href="#">Verify Certificate</a><a href="#">Downloads</a><a href="#">Resources</a><a href="#">Donation</a><a href="#">FAQs</a></div><div><h4>Contact Us</h4><p>Indian Heart Association<br/>New Delhi, India</p><p>Toll Free (24/7): 18002022459</p><p>info@heartindianassociation.com</p></div></div><div className="course-footer-bottom">© 2024 Indian Heart Association. All Rights Reserved.<span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions &nbsp; | &nbsp; Refund Policy</span></div></footer>}

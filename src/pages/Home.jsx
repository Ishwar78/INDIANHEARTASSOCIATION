import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiHeart,
  FiMapPin,
  FiActivity,
  FiClock,
  FiAward,
  FiShield,
  FiUsers,
  FiFileText,
  FiBookOpen,
  FiTruck,
  FiPlay,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiChevronRight,
  FiChevronLeft,
  FiSend,
  FiMail,
  FiPhone,
  FiPhoneCall,
  FiStar,
  FiShoppingBag,
  FiCheck,
  FiAlertCircle,
  FiExternalLink,
  FiDownload,
  FiGlobe,
  FiZap
} from "react-icons/fi";
import "./Home.css";

// ================= DATA =================

const heroSlides = [
  {
    badge: "One Village – One Trained First Responder",
    title: "National Bike Ambulance & Emergency Response",
    subtitle: "Rapid 24/7 life-saving motorcycle units delivering golden-hour trauma care and emergency resuscitation across India.",
    primaryCta: { text: "Become a Training Partner", href: "#contact" },
    secondaryCta: { text: "Explore Courses", href: "#courses" },
    image: "/images/bike_ambulance_hero.jpg",
    stats: "450+ Active Bike Response Units"
  },
  {
    badge: "Government-Aligned Certification",
    title: "2-Day Certified First Aid & CPR Training",
    subtitle: "Hands-on BLS, choking relief, bleeding control and AED practical simulation on adult, child and infant mannequins.",
    primaryCta: { text: "View 2-Day Program", href: "/course/2-day-cpr-first-aid", isRoute: true },
    secondaryCta: { text: "Find a Skill Centre", href: "#portals" },
    image: "/images/cpr_training.jpg",
    stats: "12,500+ Certified Responders"
  },
  {
    badge: "Rural Lifeline Mission",
    title: "Village First Responder Network",
    subtitle: "Empanelled community responders delivering immediate first aid in rural PHCs, anganwadis, and gram panchayats.",
    primaryCta: { text: "Our Rural Mission", href: "#pillars" },
    secondaryCta: { text: "Join as Volunteer", href: "#contact" },
    image: "/images/community_responder.jpg",
    stats: "3,850+ Villages Covered"
  },
  {
    badge: "Highway Trauma Initiative",
    title: "Golden-Hour Trauma Care on Highways",
    subtitle: "Pre-hospital CPR, severe bleeding control, tourniquet application, and seamless 108/112 ambulance handover.",
    primaryCta: { text: "View Interventions", href: "#what-we-do" },
    secondaryCta: { text: "Trauma Supplies", href: "#products" },
    image: "/images/highway_trauma_care.jpg",
    stats: "< 8 Mins Average Dispatch"
  },
  {
    badge: "Youth & School Safety",
    title: "CPR Training in Schools Across India",
    subtitle: "Hands-on student simulation workshops equipping schools, colleges, and educators with life-saving confidence.",
    primaryCta: { text: "School Coordinator", href: "/course/2-day-cpr-first-aid", isRoute: true },
    secondaryCta: { text: "Partner With Us", href: "#contact" },
    image: "/images/school_cpr_training.jpg",
    stats: "500+ Campus Workshops"
  }
];

const marqueeAlerts = [
  { text: "National First Responder Drive: One Village - One Trained First Responder Expanded Across 28 States", isTag: "National Drive" },
  { text: "Official Notification: National Emergency Care Accreditation Standards & Guidelines (2026-27)", isTag: "Notification" },
  { text: "Hands-on 2-Day CPR & Defibrillator (AED) Practical Simulation Batch Registration Open", isTag: "New Batch" },
  { text: "WHO Global Emergency and Trauma Care Initiative Collaboration Updates", isTag: "Global Care" },
  { text: "24x7 National Emergency Support Helpline: Call Toll-Free 1800-202-2459", isTag: "24/7 Helpline" }
];

const impactStats = [
  { icon: FiUsers, value: "12,500+", label: "Certified Responders", note: "Across 28 States" },
  { icon: FiMapPin, value: "3,850+", label: "Villages Covered", note: "Rural & Tribal Panchayats" },
  { icon: FiTruck, value: "450+", label: "Bike Units", note: "Rapid 2-Wheeler Fleet" },
  { icon: FiHeart, value: "2,00,000+", label: "Lives Impacted", note: "Golden-Hour Interventions" },
  { icon: FiAward, value: "120+", label: "Skill Centres", note: "Accredited Training Academies" },
  { icon: FiActivity, value: "25+", label: "Hospital Partners", note: "Premier Medical Networks" }
];

const corePortals = [
  {
    title: "Enroll as First Responder",
    desc: "Register for the National Bike Ambulance & First Aid network. Complete 2-day certified training and receive deployment empanelment.",
    badge: "Active",
    type: "Public Access",
    link: "/course/2-day-cpr-first-aid",
    isRoute: true,
    icon: FiActivity,
    color: "red"
  },
  {
    title: "Verify Certificate",
    desc: "Instant online verification of issued First Responder, CPR, BLS, and Emergency Response certification cards and registration numbers.",
    badge: "Active",
    type: "Public Registry",
    link: "#verify",
    icon: FiAward,
    color: "blue"
  },
  {
    title: "Corporate & CSR Sponsorship",
    desc: "Sponsor a Village, Block, or District Bike First Response Unit and conduct certified workplace emergency training for staff.",
    badge: "Active",
    type: "Corporate CSR",
    link: "#contact",
    icon: FiHeart,
    color: "amber"
  },
  {
    title: "Locate or Open a Skill Centre",
    desc: "Find authorized First Aid training centres across India or apply to establish an accredited emergency training academy.",
    badge: "Empanelment",
    type: "Academy Hub",
    link: "#contact",
    icon: FiMapPin,
    color: "purple"
  },
  {
    title: "2-Day Training Programs",
    desc: "Explore certified modules in adult/pediatric CPR, automated external defibrillator (AED) operation, choking relief, and wound care.",
    badge: "Certification",
    type: "Hands-on Practical",
    link: "/course/2-day-cpr-first-aid",
    isRoute: true,
    icon: FiBookOpen,
    color: "emerald"
  },
  {
    title: "Certified First Aid & Gear Store",
    desc: "Equip your vehicle, home, or workplace with certified trauma kits, CPR pocket masks, and official IHA training manuals.",
    badge: "100% Certified",
    type: "Medical Supplies",
    link: "#products",
    icon: FiShoppingBag,
    color: "rose"
  }
];

const coursesData = [
  {
    id: "school-emergency",
    title: "School Emergency Coordinator",
    code: "IHA-074",
    category: "Education",
    price: "₹1,999",
    mrp: "₹4,000",
    discount: "50% OFF",
    duration: "2 Days",
    mode: "Online / Offline",
    image: "/images/course_school_emergency.webp",
    desc: "Hands-on demonstration and emergency coordination drills. Comprehensive campus safety, evacuation protocols, and pediatric trauma response.",
    tags: ["Campus Protocol", "CPR & AED", "Evacuation Drills"],
    featured: true
  },
  {
    id: "first-aid-assessor",
    title: "First Aid Skills Assessor",
    code: "IHA-FASA-563",
    category: "Trainer",
    price: "₹4,000",
    mrp: "₹8,000",
    discount: "50% OFF",
    duration: "16 Days",
    mode: "Online / Offline",
    image: "/images/course_first_aid_assessor.webp",
    desc: "Master level training to evaluate, assess and certify CPR/First Aid learners with clinical precision and government SOP standards.",
    tags: ["Trainer Certification", "Standard SOP", "Practical Evaluation"]
  },
  {
    id: "block-first-responder",
    title: "Block First Responder Programmer",
    code: "IHA-BFRP-435",
    category: "Community",
    price: "₹2,000",
    mrp: "₹3,000",
    discount: "33% OFF",
    duration: "16 Days",
    mode: "Online / Offline",
    image: "/images/course_block_programmer.webp",
    desc: "Designed for block-level coordinators managing grassroots emergency networks, casualty triage, and swift local dispatch.",
    tags: ["Block Leadership", "Triage Dispatch", "Community Mobilization"]
  },
  {
    id: "cfr-advanced",
    title: "Community First Responder – Advanced",
    code: "IHA-CFRA-890",
    category: "Responder",
    price: "₹2,000",
    mrp: "₹4,000",
    discount: "50% OFF",
    duration: "16 Days",
    mode: "Online / Offline",
    image: "/images/course_cfr_advanced.webp",
    desc: "Advanced trauma resuscitation, severe arterial bleeding stoppage, spine immobilization, and bike ambulance handover techniques.",
    tags: ["Trauma Resuscitation", "Bike Ambulance Ops", "Defibrillator Expert"],
    featured: true
  },
  {
    id: "cfr-basic",
    title: "Community First Responder – Basic",
    code: "IHA-CFRB-886",
    category: "Responder",
    price: "₹1,000",
    mrp: "₹2,000",
    discount: "50% OFF",
    duration: "1 Day",
    mode: "Online / Offline",
    image: "/images/course_cfr_basic.webp",
    desc: "Core emergency foundation: adult CPR compressions, recovery positioning, airway maintenance, and basic wound dressing.",
    tags: ["Single-Day Intensive", "Core Life Support", "Basic Dressing"]
  },
  {
    id: "community-volunteers",
    title: "First Aid for Community Volunteers",
    code: "IHA-FACV-306",
    category: "Community",
    price: "₹1,000",
    mrp: "₹2,000",
    discount: "50% OFF",
    duration: "8 Days",
    mode: "Online / Offline",
    image: "/images/course_community_volunteers.webp",
    desc: "Empowering NGO volunteers, social workers, and local youth with life-saving skills for floods, heat waves, and rural accidents.",
    tags: ["Disaster Response", "NGO & Youth", "Field Practice"]
  }
];

const interventions = [
  {
    id: "01",
    title: "Recognize Emergencies",
    desc: "Spot early warning signs of cardiac arrest, stroke, severe shock, and respiratory distress for instant pre-hospital action.",
    icon: FiActivity,
    tag: "Assessment"
  },
  {
    id: "02",
    title: "Scene Safety & Triage",
    desc: "Assess environmental hazards, protect self and bystanders, and triage casualties calmly before ambulance arrival.",
    icon: FiShield,
    tag: "Hazard Control"
  },
  {
    id: "03",
    title: "Perform Certified CPR",
    desc: "High-quality chest compressions and rescue breaths for adults, children, and infants following updated resuscitation protocols.",
    icon: FiHeart,
    tag: "Life Support"
  },
  {
    id: "04",
    title: "Choking Relief & Airway",
    desc: "Execute Heimlich maneuvers, back blows, and abdominal thrusts to clear obstructed airways and restore vital airflow.",
    icon: FiZap,
    tag: "Airway Clearance"
  },
  {
    id: "05",
    title: "Bleeding & Trauma Care",
    desc: "Apply sterile pressure dressings, haemostatic pads, and tourniquets to avert fatal hemorrhagic shock in accidents.",
    icon: FiAlertCircle,
    tag: "Hemorrhage Stop"
  },
  {
    id: "06",
    title: "Burns & Splinting",
    desc: "Cool thermal and chemical burns safely, and immobilize fractured limbs using splints, slings, and triangular bandages.",
    icon: FiAward,
    tag: "Fracture Support"
  },
  {
    id: "07",
    title: "Recovery Position",
    desc: "Safely place breathing unconscious casualties into the stable lateral recovery position and monitor vital signs continuously.",
    icon: FiClock,
    tag: "Vitals Monitoring"
  },
  {
    id: "08",
    title: "AED & EMS Dispatch",
    desc: "Proficiency with automated defibrillators (AED), oxygen cylinders, and seamless 108/112 ambulance handover coordination.",
    icon: FiTruck,
    tag: "Hospital Handover"
  }
];

const products = [
  {
    title: "All Purpose First Aid Kit Large",
    code: "IHA-FAK-1001 (SJF V1)",
    price: "₹2,499",
    mrp: "₹4,200",
    rating: 4.8,
    reviews: 142,
    badge: "Best Seller",
    image: "/images/product_first_aid_kit_large.webp",
    desc: "Versatile 83-component medical kit in durable vinyl casing. Tailored for homes, corporate offices, institutions, and passenger vehicles.",
    specs: "83 Essential Medical Components"
  },
  {
    title: "Medical First Responder Kit (MFR) Large",
    code: "IHA-05",
    price: "₹3,000",
    mrp: "₹5,000",
    rating: 4.9,
    reviews: 89,
    badge: "Field Trauma Grade",
    image: "/images/product_mfr_large.webp",
    desc: "Heavy-duty first responder bag loaded with tourniquets, burn dressings, thermal blankets, splints, and CPR resuscitation barriers.",
    specs: "30+ Advanced Trauma & Rescue Supplies"
  },
  {
    title: "Training First Aid Kit",
    code: "IHA-04",
    price: "₹999",
    mrp: "₹1,999",
    rating: 4.9,
    reviews: 215,
    badge: "Student Essential",
    image: "/images/product_training_kit.webp",
    desc: "Complete simulation pack designed for hands-on classroom practicals, student batch exercises, and CPR practice workshops.",
    specs: "Simulated Dressings & Practical Gear"
  }
];

const certificationJourney = [
  {
    step: "01",
    title: "Enrolment",
    desc: "Register online or at an accredited skill centre. Select your program and receive your official study modules.",
    highlight: "Digital Registration"
  },
  {
    step: "02",
    title: "Hands-on Training",
    desc: "Undergo practical drills on feedback mannequins, AED simulators, wound dressings, and emergency triage scenarios.",
    highlight: "Certified Doctors & Instructors"
  },
  {
    step: "03",
    title: "Practical Assessment",
    desc: "Pass objective skill evaluations and timing tests adhering strictly to national emergency accreditation criteria.",
    highlight: "SOP-Grade Skill Validation"
  },
  {
    step: "04",
    title: "Official Certificate",
    desc: "Receive government-aligned digital QR-coded credentials and physical first responder empanelment ID card.",
    highlight: "Verifiable Nationwide"
  },
  {
    step: "05",
    title: "Field Deployment",
    desc: "Join the 'One Village – One First Responder' network or corporate response unit to save lives during real golden hours.",
    highlight: "Active Life-Saver Force"
  }
];

const keyPillars = [
  {
    icon: FiHeart,
    title: "Save Lives",
    desc: "Immediate CPR, basic life support (BLS), and rapid pre-hospital emergency care during critical golden hours."
  },
  {
    icon: FiBookOpen,
    title: "Train People",
    desc: "2-Day certified training for students, corporate personnel, school educators, and passionate community volunteers."
  },
  {
    icon: FiTruck,
    title: "Serve Community",
    desc: "Dedicated 24/7 Bike Ambulance units operating at Village, Gram Panchayat, and Block levels across India."
  },
  {
    icon: FiActivity,
    title: "Build Nation",
    desc: "Creating a pan-India emergency-ready first responder healthcare infrastructure to support national health goals."
  }
];

const testimonials = [
  {
    type: "video",
    title: "How 2-Day CPR Training Changed My Life",
    duration: "1:45 min",
    name: "Vikas Bishnoi",
    role: "Bike Ambulance Volunteer",
    location: "Fatehabad, Haryana",
    badge: "Emergency Response & First Responder",
    quote: "Being the first to reach an accident scene on a bike and keeping the victim alive until the ambulance arrived gave me the truest purpose of life."
  },
  {
    type: "video",
    title: "Immediate Action in Golden Hour Accidents",
    duration: "2:10 min",
    name: "Kavita Verma",
    role: "ASHA Healthcare Worker",
    location: "Rewari, Haryana",
    badge: "Rural Emergency Care Badge",
    quote: "The hands-on CPR mannequin feedback and bleeding control techniques trained us to handle rural emergencies without panic."
  },
  {
    type: "video",
    title: "Saving Lives Before Ambulance Handover",
    duration: "1:30 min",
    name: "Deepak Yadav",
    role: "Highway First Responder",
    location: "Jaipur, Rajasthan",
    badge: "Road Trauma & Bleeding Control",
    quote: "When a highway collision happens, minutes decide survival. The pressure tourniquet protocol taught by IHA saved multiple arterial bleeds."
  },
  {
    type: "review",
    title: "2-Day Certified CPR & First Aid",
    name: "Rajesh Kumar",
    role: "First Responder Trainee",
    location: "Hisar, Haryana",
    badge: "Certified First Responder • Official Passout",
    rating: 5,
    quote: "Outstanding hands-on training! The CPR mannequin feedback system and trauma wound management drills gave me complete confidence to act as the first responder in our village."
  },
  {
    type: "review",
    title: "Basic Life Support (BLS) & AED",
    name: "Priya Sharma",
    role: "Staff Nurse",
    location: "New Delhi",
    badge: "Certified First Responder • Official Passout",
    rating: 5,
    quote: "The BLS resuscitation practicals were rigorous and well-structured. We learned defibrillator operation, high-quality chest compressions, and emergency bag-valve ventilation."
  },
  {
    type: "review",
    title: "Workplace & Industrial Safety",
    name: "Amit Patel",
    role: "Corporate Safety Officer",
    location: "Gurugram, Haryana",
    badge: "Certified First Responder • Official Passout",
    rating: 5,
    quote: "Our factory emergency response team completed the industrial trauma first aid program. Excellent evaluation standards and verifiable certificate cards issued on the spot."
  },
  {
    type: "review",
    title: "Pediatric CPR & Choking Relief",
    name: "Sneha Reddy",
    role: "School Educator",
    location: "Bengaluru, Karnataka",
    badge: "Certified First Responder • Official Passout",
    rating: 5,
    quote: "Every teacher should undergo this training. The Heimlich airway clearing practicals on pediatric mannequins were invaluable for saving young lives during choking emergencies."
  }
];

const notices = [
  {
    date: "7 October 2026",
    tag: "Accreditation",
    title: "Strengthening First Aid and Emergency Preparedness: Why Basic Response Skills Matter",
    desc: "First aid knowledge and emergency preparedness can help individuals respond quickly and safely during accidents, injuries, and sudden medical emergencies while professional medical assistance is being arranged.",
    link: "#"
  },
  {
    date: "29 September 2026",
    tag: "Deployment",
    title: "Indian Heart Association Launches Nationwide Rural First Responder Program",
    desc: "A new landmark initiative expanding emergency CPR and trauma assistance across rural community clusters, equipping 10,000+ gram panchayats with trained responders.",
    link: "#"
  },
  {
    date: "15 September 2026",
    tag: "Standards",
    title: "Official Notification: National Emergency Care Accreditation Standards & Guidelines",
    desc: "Detailed SOP document covering mannequin specifications, AED trainer criteria, minimum pass benchmarks, and QR verification protocols.",
    link: "#"
  }
];

const partnersList = [
  { name: "AIIMS", file: "aiims.png" },
  { name: "Apollo Hospitals", file: "apollo.png" },
  { name: "Fortis Healthcare", file: "fortis.png" },
  { name: "Max Healthcare", file: "max.svg" },
  { name: "Medanta The Medicity", file: "medanta.png" },
  { name: "Narayana Health", file: "narayana.svg" },
  { name: "Manipal Hospitals", file: "manipal.webp" },
  { name: "Columbia Asia", file: "columbia.png" },
  { name: "Artemis Hospitals", file: "artemis.svg" },
  { name: "Tata Memorial", file: "tata-memorial.svg" },
  { name: "Aster DM Healthcare", file: "aster.svg" },
  { name: "CARE Hospitals", file: "care.svg" },
  { name: "Sir Ganga Ram Hospital", file: "gangaram.svg" },
  { name: "BLK Super Speciality", file: "blk.svg" }
];

const faqsData = [
  {
    q: "What is the One Village – One Trained First Responder Programme?",
    a: "The One Village – One Trained First Responder Programme is a national mission initiated by the Indian Heart Association to ensure that every rural and peri-urban community in India has at least one certified, equipped individual ready to respond to cardiac arrests, road traumas, and medical crises during the golden hour before formal emergency ambulance transport arrives."
  },
  {
    q: "What is the eligibility criteria to enroll as a First Responder?",
    a: "Any citizen aged 18 years or above with basic literacy and physical fitness can enroll. The program welcomes community youth, teachers, ASHA workers, drivers, corporate staff, and civil defense volunteers. No prior medical qualification is mandatory; comprehensive practical training is provided from scratch."
  },
  {
    q: "What is the complete Fee Structure for First Responder training?",
    a: "Training fee structures vary by program level: Community First Responder Basic is ₹1,000 (standard fee ₹2,000 with 50% subsidy). Comprehensive 2-Day Practical CPR & AED certifications are ₹1,999 to ₹2,500. Special fee waivers and corporate CSR-sponsored seats are available for verified rural volunteers and emergency personnel."
  },
  {
    q: "What is covered in the 2-Day Practical First Aid & CPR Training?",
    a: "The syllabus covers hands-on adult, child, and infant CPR with chest compression depth feedback; Automated External Defibrillator (AED) usage; Heimlich maneuver for choking relief; severe trauma hemorrhage control with tourniquets and pressure bandages; burn management; fracture splinting; recovery positioning; and 108/112 ambulance handover coordination."
  },
  {
    q: "How can I verify a Certificate issued by Indian Heart Association?",
    a: "All certificates issued by the Indian Heart Association come with a tamper-proof QR code and a unique Certificate ID / Roll Number. You can verify validity instantly through our online Certificate Verification Portal by entering the candidate's registration code or Aadhaar number, or by scanning the QR code directly."
  },
  {
    q: "How are Bike Ambulances deployed and dispatched in emergencies?",
    a: "IHA Bike Ambulances are specially modified two-wheelers fitted with oxygen cylinders, portable AED defibrillators, trauma first-aid bags, and GPS tracking. Stationed at strategic rural junctions, toll plazas, and dense urban clusters, they can navigate narrow lanes and heavy traffic in less than 8-10 minutes to deliver immediate life-saving stabilization."
  },
  {
    q: "Is my donation eligible for 80G Tax Exemption under the Income Tax Act?",
    a: "Yes. Donations made to the Indian Heart Association are eligible for 50% deduction under Section 80G of the Income Tax Act, 1961. An official 80G receipt containing the trust registration number, PAN, and certificate details is issued automatically to your email."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const [feedbackTab, setFeedbackTab] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto slide hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const filteredCourses =
    activeCategory === "All"
      ? coursesData
      : coursesData.filter((c) => c.category === activeCategory);

  const filteredTestimonials =
    feedbackTab === "all"
      ? testimonials
      : feedbackTab === "videos"
      ? testimonials.filter((t) => t.type === "video")
      : testimonials.filter((t) => t.type === "review");

  return (
    <main className="premium-home">

      {/* ================= 1. RUNNING EMERGENCY MARQUEE ================= */}
      <section className="emergency-marquee-wrap" aria-label="Latest Announcements">
        <div className="marquee-badge">
          <span className="live-pulse"></span>
          <span>LIVE UPDATES</span>
        </div>
        <div className="marquee-track">
          <div className="marquee-content">
            {marqueeAlerts.concat(marqueeAlerts).map((item, idx) => (
              <span className="marquee-item" key={idx}>
                <span className="item-tag">{item.isTag}</span>
                <span className="item-text">{item.text}</span>
                <span className="item-sep">✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-emergency-pill">
          <FiPhoneCall className="pill-icon" />
          <span>24/7 Helpline: <strong>1800-202-2459</strong></span>
        </div>
      </section>


      {/* ================= 2. HERO SLIDER SECTION ================= */}
      <section className="premium-hero">
        <div className="hero-slider-stage">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.title}
              className={`hero-slide ${idx === currentSlide ? "active" : ""}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-bg"
                loading={idx === 0 ? "eager" : "lazy"}
              />
              <div className="hero-slide-overlay"></div>

              <div className="hero-slide-content container-custom">
                <div className="hero-text-block">
                  <div className="hero-eyebrow-pill">
                    <span className="pulse-dot"></span>
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="hero-headline">{slide.title}</h1>
                  <p className="hero-subtext">{slide.subtitle}</p>

                  <div className="hero-cta-group">
                    {slide.primaryCta.isRoute ? (
                      <Link to={slide.primaryCta.href} className="btn-crimson">
                        <span>{slide.primaryCta.text}</span>
                        <FiArrowRight />
                      </Link>
                    ) : (
                      <a href={slide.primaryCta.href} className="btn-crimson">
                        <span>{slide.primaryCta.text}</span>
                        <FiArrowRight />
                      </a>
                    )}

                    <a href={slide.secondaryCta.href} className="btn-glass">
                      <span>{slide.secondaryCta.text}</span>
                      <FiArrowUpRight />
                    </a>
                  </div>

                  <div className="hero-trust-badges">
                    <span className="trust-item">
                      <FiCheckCircle className="text-emerald" /> 100% Certified Curriculum
                    </span>
                    <span className="trust-item">
                      <FiShield className="text-amber" /> DPIIT & MSME Recognized
                    </span>
                    <span className="trust-item">
                      <FiAward className="text-rose" /> Verifiable Certificate Cards
                    </span>
                  </div>
                </div>

                {/* Floating Floating Stat Box */}
                <div className="hero-floating-stat">
                  <div className="stat-glow-box">
                    <div className="stat-icon-circle">
                      <FiTruck />
                    </div>
                    <div>
                      <span className="stat-label">National Operations</span>
                      <strong className="stat-number">{slide.stats}</strong>
                    </div>
                  </div>
                  <div className="stat-quick-call">
                    <FiPhoneCall className="animate-bounce" />
                    <div>
                      <small>Emergency Ambulance Assist</small>
                      <b>Toll Free: 18002022459</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Slider Controls */}
        <div className="hero-controls container-custom">
          <div className="hero-dots">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="dot-progress"></span>
              </button>
            ))}
          </div>

          <div className="hero-arrows">
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? heroSlides.length - 1 : prev - 1
                )
              }
              aria-label="Previous Slide"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
              }
              aria-label="Next Slide"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>


      {/* ================= 3. IMPACT NUMBERS BAR ================= */}
      <section className="impact-counter-section">
        <div className="container-custom">
          <div className="impact-grid">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div className="impact-card" key={idx}>
                  <div className="impact-icon-wrap">
                    <Icon />
                  </div>
                  <div className="impact-content">
                    <h3 className="impact-value">{stat.value}</h3>
                    <p className="impact-label">{stat.label}</p>
                    <small className="impact-sub">{stat.note}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================= 4. CORE PORTALS & CITIZEN SERVICES ================= */}
      <section className="section-wrap bg-light" id="portals">
        <div className="container-custom">
          <div className="section-head-center">
            <span className="sub-badge">INSTITUTIONAL ACCESS</span>
            <h2>Core Portals & Emergency Services</h2>
            <p>
              Direct citizen gateways, official certificate verification, first responder registries, and CSR empanelment.
            </p>
          </div>

          <div className="portals-grid">
            {corePortals.map((portal, idx) => {
              const Icon = portal.icon;
              return (
                <div className={`portal-box color-${portal.color}`} key={idx}>
                  <div className="portal-top">
                    <span className="portal-icon">
                      <Icon />
                    </span>
                    <span className="portal-badge">{portal.badge}</span>
                  </div>

                  <h3 className="portal-title">{portal.title}</h3>
                  <p className="portal-desc">{portal.desc}</p>

                  <div className="portal-action-row">
                    <span className="portal-type">{portal.type}</span>
                    {portal.isRoute ? (
                      <Link to={portal.link} className="portal-link">
                        <span>Access Portal</span>
                        <FiArrowRight />
                      </Link>
                    ) : (
                      <a href={portal.link} className="portal-link">
                        <span>Access Portal</span>
                        <FiArrowRight />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================= 5. CLINICAL EMERGENCY & CPR COURSES ================= */}
      <section className="section-wrap" id="courses">
        <div className="container-custom">
          <div className="section-head-split">
            <div>
              <span className="sub-badge">TRAIN • CERTIFY • SAVE LIVES</span>
              <h2>Clinical Emergency & CPR Training Programs</h2>
              <p>
                Nationwide certified courses aligned with international resuscitation standards and government guidelines.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="course-tabs-filter">
              {["All", "Education", "Trainer", "Community", "Responder"].map(
                (cat) => (
                  <button
                    key={cat}
                    className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <article className="course-card-pro" key={course.id}>
                <div className="card-media">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/images/course-1.png";
                    }}
                  />
                  <span className="card-badge-discount">{course.discount}</span>
                  <span className="card-badge-mode">{course.mode}</span>
                </div>

                <div className="card-body">
                  <div className="card-meta-line">
                    <span className="card-code">{course.code}</span>
                    <span className="card-duration">
                      <FiClock /> {course.duration}
                    </span>
                  </div>

                  <h3 className="card-title">{course.title}</h3>
                  <p className="card-desc">{course.desc}</p>

                  <div className="card-tags">
                    {course.tags.map((t) => (
                      <span key={t} className="card-tag">
                        <FiCheckCircle className="tag-check" /> {t}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer-pro">
                    <div className="price-block">
                      <span className="price-current">{course.price}</span>
                      <del className="price-mrp">{course.mrp}</del>
                    </div>

                    <div className="cta-block">
                      <Link
                        to="/course/2-day-cpr-first-aid"
                        className="btn-details"
                      >
                        Details <FiArrowRight />
                      </Link>
                      <Link
                        to="/course/2-day-cpr-first-aid"
                        className="btn-enrol"
                      >
                        Enrol Now
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="courses-bottom-cta">
            <div className="bottom-cta-banner">
              <div>
                <h4>Want to arrange a Group Workshop for your School or Office?</h4>
                <p>We provide on-site certified CPR simulators, mannequins, and doctors.</p>
              </div>
              <a href="#contact" className="btn-crimson">
                Request On-Site Training <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 6. WHAT WE DO (8 LIFE-SAVING INTERVENTIONS) ================= */}
      <section className="section-wrap bg-dark text-white" id="what-we-do">
        <div className="container-custom">
          <div className="section-head-center light-text">
            <span className="sub-badge-gold">CORE CAPABILITIES</span>
            <h2>What We Do — Essential Life-Saving Interventions</h2>
            <p>
              Equipping citizens with 8 fundamental pre-hospital emergency capabilities to combat the golden hour.
            </p>
          </div>

          <div className="interventions-grid">
            {interventions.map((item) => {
              const Icon = item.icon;
              return (
                <div className="intervention-card" key={item.id}>
                  <div className="intervention-header">
                    <span className="step-num">{item.id}</span>
                    <span className="intervention-tag">{item.tag}</span>
                  </div>

                  <div className="intervention-icon">
                    <Icon />
                  </div>

                  <h3 className="intervention-title">{item.title}</h3>
                  <p className="intervention-desc">{item.desc}</p>

                  <div className="intervention-link">
                    <Link to="/course/2-day-cpr-first-aid">
                      <span>Certified Module</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="interventions-spotlight">
            <div className="spotlight-content">
              <span className="spotlight-tag">BIKE AMBULANCE RAPID FORCE</span>
              <h3>Delivering Critical Life Support When Every Second Counts</h3>
              <p>
                From sudden highway trauma to rural heart attacks, the Indian Heart Association deployed motorcycle first-responders bridge the vital gap until ICU ambulances arrive.
              </p>
              <div className="spotlight-features">
                <span><FiCheck /> Equipped with AED & Oxygen</span>
                <span><FiCheck /> Golden-Hour Stabilization</span>
                <span><FiCheck /> 24x7 Dispatch Assistance</span>
              </div>
            </div>
            <div className="spotlight-img">
              <img
                src="/images/bike_ambulance_fleet.jpg"
                alt="Bike Ambulance Fleet"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "/images/bike_ambulance_hero.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ================= 7. CERTIFIED MEDICAL GEAR & PRODUCTS ================= */}
      <section className="section-wrap bg-light" id="products">
        <div className="container-custom">
          <div className="section-head-split">
            <div>
              <span className="sub-badge">100% CERTIFIED SUPPLIES</span>
              <h2>Certified First Aid & Medical Products</h2>
              <p>
                Hospital-grade first aid kits, emergency trauma bags, and CPR simulation equipment.
              </p>
            </div>
            <a href="#contact" className="btn-outline-dark">
              View Catalog <FiArrowRight />
            </a>
          </div>

          <div className="products-grid">
            {products.map((prod, idx) => (
              <div className="product-card-pro" key={idx}>
                <div className="prod-img-wrap">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/images/course-1.png";
                    }}
                  />
                  <span className="prod-badge">{prod.badge}</span>
                </div>

                <div className="prod-body">
                  <div className="prod-meta">
                    <span className="prod-code">{prod.code}</span>
                    <span className="prod-rating">
                      <FiStar className="star-icon" /> {prod.rating} ({prod.reviews})
                    </span>
                  </div>

                  <h3 className="prod-title">{prod.title}</h3>
                  <p className="prod-desc">{prod.desc}</p>
                  <div className="prod-specs">
                    <FiCheckCircle className="spec-check" /> {prod.specs}
                  </div>

                  <div className="prod-footer">
                    <div className="prod-price">
                      <strong>{prod.price}</strong>
                      <del>{prod.mrp}</del>
                    </div>

                    <a href="#contact" className="btn-buy-prod">
                      <FiShoppingBag /> Order Kit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= 8. 5-STEP JOURNEY TO CERTIFICATION ================= */}
      <section className="section-wrap journey-section-pro">
        <div className="container-custom">
          <div className="section-head-center">
            <span className="sub-badge">STRUCTURED ROADMAP</span>
            <h2>Your Journey to Official Certification</h2>
            <p>
              A straightforward 5-step pathway aligned with national emergency healthcare standards.
            </p>
          </div>

          <div className="journey-timeline">
            {certificationJourney.map((item, idx) => (
              <div className="journey-card-pro" key={idx}>
                <div className="step-badge-wrap">
                  <span className="step-circle">{item.step}</span>
                  {idx < certificationJourney.length - 1 && (
                    <span className="step-connector"></span>
                  )}
                </div>

                <div className="journey-card-body">
                  <span className="journey-step-tag">Step {item.step}</span>
                  <h3 className="journey-step-title">{item.title}</h3>
                  <p className="journey-step-desc">{item.desc}</p>
                  <small className="journey-highlight">
                    <FiCheck /> {item.highlight}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= 9. KEY PILLARS ================= */}
      <section className="section-wrap bg-gradient-brand text-white" id="pillars">
        <div className="container-custom">
          <div className="pillars-layout-pro">
            <div className="pillars-left">
              <span className="sub-badge-gold">FOUNDATIONAL VALUES</span>
              <h2>Key Pillars of Indian Heart Association</h2>
              <p>
                Building an emergency-ready India through certified First Aid, CPR, and responder networks.
              </p>

              <div className="pillars-cards-list">
                {keyPillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div className="pillar-row-card" key={idx}>
                      <div className="pillar-icon-box">
                        <Icon />
                      </div>
                      <div>
                        <h4>{p.title}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pillars-right-callout">
              <div className="callout-glass-card">
                <div className="callout-header">
                  <span className="callout-tag">NATIONAL MISSION</span>
                  <h3>One Village – One Trained First Responder</h3>
                </div>
                <p>
                  Join India’s largest civilian life-saving movement. By becoming a certified First Responder, you safeguard your family, your community, and our nation during critical golden hours.
                </p>

                <ul className="callout-bullets">
                  <li><FiCheck /> Verifiable National Empanelment ID</li>
                  <li><FiCheck /> Practical Mannequin & AED Simulation</li>
                  <li><FiCheck /> Emergency Dispatch Coordination Network</li>
                </ul>

                <div className="callout-action">
                  <Link to="/course/2-day-cpr-first-aid" className="btn-crimson">
                    <span>Enroll as First Responder</span>
                    <FiArrowRight />
                  </Link>
                  <a href="#contact" className="btn-glass">
                    <span>Sponsor a Village</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 10. STUDENT FEEDBACK & VIDEO STORIES ================= */}
      <section className="section-wrap bg-light" id="feedback">
        <div className="container-custom">
          <div className="section-head-split">
            <div>
              <span className="sub-badge">VERIFIED PASS-OUTS</span>
              <h2>What Our Students & Responders Say</h2>
              <p>
                Hear directly from certified first responders, healthcare workers, teachers, and corporate trainees.
              </p>
            </div>

            <div className="feedback-filter-tabs">
              <button
                className={`tab-btn ${feedbackTab === "all" ? "active" : ""}`}
                onClick={() => setFeedbackTab("all")}
              >
                All Feedback
              </button>
              <button
                className={`tab-btn ${feedbackTab === "videos" ? "active" : ""}`}
                onClick={() => setFeedbackTab("videos")}
              >
                Video Stories
              </button>
              <button
                className={`tab-btn ${feedbackTab === "reviews" ? "active" : ""}`}
                onClick={() => setFeedbackTab("reviews")}
              >
                Verified Reviews
              </button>
            </div>
          </div>

          <div className="feedback-masonry">
            {filteredTestimonials.map((item, idx) => (
              <div
                className={`feedback-card-pro ${item.type === "video" ? "card-video" : "card-quote"}`}
                key={idx}
              >
                <div className="feedback-card-top">
                  <span className="feedback-badge">{item.badge}</span>
                  {item.type === "video" ? (
                    <span className="video-duration">
                      <FiPlay className="play-mini" /> {item.duration}
                    </span>
                  ) : (
                    <div className="review-stars">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="star-filled" />
                      ))}
                    </div>
                  )}
                </div>

                <h4 className="feedback-title">{item.title}</h4>
                <p className="feedback-quote">“{item.quote}”</p>

                <div className="feedback-author">
                  <div className="author-avatar">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <small>
                      {item.role} • {item.location}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= 11. PREMIER HOSPITAL NETWORKS (MARQUEE) ================= */}
      <section className="partners-section-pro">
        <div className="container-custom">
          <div className="section-head-center">
            <span className="sub-badge">HEALTHCARE NETWORK</span>
            <h2>Associated Hospital Networks & Accreditations</h2>
            <p>
              Life support protocols and first-responder handovers recognized by India’s premier hospital chains.
            </p>
          </div>

          <div className="partners-marquee-wrap">
            <div className="partners-track">
              {partnersList.concat(partnersList).map((p, idx) => (
                <div className="partner-logo-box" key={idx} title={p.name}>
                  <img
                    src={`/images/partners/${p.file}`}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= 12. LATEST EMERGENCY INITIATIVES & NOTICES ================= */}
      <section className="section-wrap" id="notices">
        <div className="container-custom">
          <div className="section-head-split">
            <div>
              <span className="sub-badge">OFFICIAL UPDATES</span>
              <h2>Latest Emergency Initiatives & Notices</h2>
              <p>
                Training schedules, nationwide responder deployments, and accreditation guidelines.
              </p>
            </div>
            <a href="#contact" className="btn-outline-dark">
              View All Notices <FiArrowRight />
            </a>
          </div>

          <div className="notices-grid">
            {notices.map((n, idx) => (
              <article className="notice-card-pro" key={idx}>
                <div className="notice-meta">
                  <span className="notice-tag">{n.tag}</span>
                  <span className="notice-date">
                    <FiClock /> {n.date}
                  </span>
                </div>

                <h3 className="notice-title">{n.title}</h3>
                <p className="notice-desc">{n.desc}</p>

                <div className="notice-footer">
                  <a href={n.link} className="notice-read-more">
                    <span>Read Full Notification</span>
                    <FiArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ================= 13. FREQUENTLY ASKED QUESTIONS (FAQ) ================= */}
      <section className="section-wrap bg-light" id="faqs">
        <div className="container-custom">
          <div className="section-head-center">
            <span className="sub-badge">HAVE QUESTIONS?</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Authoritative answers on training modules, fee structures, verification, and bike ambulance operations.
            </p>
          </div>

          <div className="faq-accordion-wrap">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  className={`faq-item-pro ${isOpen ? "open" : ""}`}
                  key={idx}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="q-number">Q{idx + 1}.</span>
                    <span className="q-text">{faq.q}</span>
                    <span className="q-icon">
                      {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================= 14. EMERGENCY INQUIRY & CONTACT FORM ================= */}
      <section className="section-wrap" id="contact">
        <div className="container-custom">
          <div className="contact-card-wrapper">
            <div className="contact-info-col">
              <span className="sub-badge-gold">24/7 HELPDESK</span>
              <h2>Have Questions? Connect With Our Medical Team</h2>
              <p>
                Whether you wish to sponsor a rural bike unit, arrange a corporate workshop, or verify credentials, our team is at your service.
              </p>

              <div className="contact-details-list">
                <div className="contact-item">
                  <div className="contact-icon-circle">
                    <FiPhoneCall />
                  </div>
                  <div>
                    <small>National Toll-Free Helpline (24/7)</small>
                    <strong>1800-202-2459</strong>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-circle">
                    <FiActivity />
                  </div>
                  <div>
                    <small>WhatsApp Emergency Desk</small>
                    <strong>+91 87080 93422</strong>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-circle">
                    <FiMail />
                  </div>
                  <div>
                    <small>Official Support Email</small>
                    <strong>info@indianheartassociation.com</strong>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-circle">
                    <FiMapPin />
                  </div>
                  <div>
                    <small>Registered Headquarters</small>
                    <strong>50-51, 2nd Floor, Regal Building, Connaught Place, New Delhi - 110001</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="form-inner-box">
                <h3>Submit an Inquiry</h3>
                <p>We typically respond within 15 minutes during operational hours.</p>

                {formSubmitted ? (
                  <div className="form-success-banner">
                    <FiCheckCircle className="success-icon" />
                    <h4>Thank You! Your inquiry has been received.</h4>
                    <p>Our training coordinator will call you at your provided number shortly.</p>
                    <button
                      className="btn-crimson"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="pro-inquiry-form"
                  >
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Rajesh Sharma"
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label>Inquiry Category *</label>
                        <select defaultValue="cpr-training">
                          <option value="cpr-training">2-Day CPR / First Aid Training</option>
                          <option value="first-responder">Join as First Responder</option>
                          <option value="corporate-csr">Corporate CSR / Village Sponsorship</option>
                          <option value="skill-centre">Open an Accredited Skill Centre</option>
                          <option value="certificate">Certificate Verification Query</option>
                          <option value="products">First Aid Kits & Bulk Supplies</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Message / Specific Requirements</label>
                      <textarea
                        rows="3"
                        placeholder="Tell us about your location, number of participants, or requirement..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-crimson w-full">
                      <span>Submit Inquiry</span>
                      <FiSend />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 15. OFFICIAL REGISTRATIONS & COMPLIANCE BAR ================= */}
      <section className="compliance-section-pro">
        <div className="container-custom">
          <div className="compliance-content">
            <div className="compliance-header">
              <FiShield className="shield-icon" />
              <span>OFFICIAL REGISTRATIONS & STATUTORY COMPLIANCE</span>
            </div>

            <div className="compliance-badges-grid">
              <div className="comp-item">
                <small>CIN REGISTRATION</small>
                <strong>U86909DC2026NPL474342</strong>
              </div>
              <div className="comp-item">
                <small>DPIIT RECOGNIZED</small>
                <strong>DIPP279329</strong>
              </div>
              <div className="comp-item">
                <small>MSME UDYAM</small>
                <strong>UDYAM-DL-01-0084633</strong>
              </div>
              <div className="comp-item">
                <small>NGO DARPAN</small>
                <strong>DL/2026/1188161</strong>
              </div>
              <div className="comp-item">
                <small>PAN / TAN / LEI</small>
                <strong>PAN: AAJCI0886J · TAN: DELI21232B</strong>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 16. PREMIUM FOOTER ================= */}
      <footer className="footer-pro">
        <div className="container-custom">
          <div className="footer-top-grid">
            <div className="footer-col brand-col">
              <div className="footer-brand-header">
                <img
                  src="/logo.png"
                  alt="Indian Heart Association"
                  className="footer-logo"
                  onError={(e) => {
                    e.target.src = "/images/logo.png";
                  }}
                />
                <div>
                  <h3 className="footer-brand-title">INDIAN HEART ASSOCIATION</h3>
                  <p className="footer-brand-tag">Caring Hearts • Healthy Nation</p>
                </div>
              </div>
              <p className="footer-mission-text">
                Dedicated to building an emergency-ready India through certified CPR and First Aid training, the 24/7 Bike Ambulance force, and the "One Village – One Trained First Responder" national mission.
              </p>
              <div className="footer-social-links">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="YouTube">YT</a>
                <a href="#" aria-label="LinkedIn">IN</a>
                <a href="#" aria-label="Twitter">X</a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-head">Emergency Programs</h4>
              <ul className="footer-links">
                <li><Link to="/course/2-day-cpr-first-aid">2-Day CPR & First Aid</Link></li>
                <li><Link to="/course/2-day-cpr-first-aid">Basic Life Support (BLS)</Link></li>
                <li><Link to="/course/2-day-cpr-first-aid">School Emergency Coordinator</Link></li>
                <li><Link to="/course/2-day-cpr-first-aid">First Aid Skills Assessor</Link></li>
                <li><Link to="/course/2-day-cpr-first-aid">Block First Responder</Link></li>
                <li><a href="#what-we-do">Bike Ambulance Units</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-head">Portals & Services</h4>
              <ul className="footer-links">
                <li><a href="#portals">Verify Certificate</a></li>
                <li><Link to="/course/2-day-cpr-first-aid">Enroll First Responder</Link></li>
                <li><a href="#contact">Locate Skill Centre</a></li>
                <li><a href="#products">Certified First Aid Kits</a></li>
                <li><a href="#contact">Corporate & CSR Sponsorship</a></li>
                <li><a href="#contact">Donation (80G Tax Benefit)</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-head">Emergency Headquarters</h4>
              <div className="footer-contact-info">
                <p>
                  <FiMapPin className="text-red" />
                  <span>50-51, 2nd Floor, Regal Building, Connaught Place, New Delhi - 110001</span>
                </p>
                <p>
                  <FiPhoneCall className="text-red" />
                  <span>Toll Free (24/7): 18002022459</span>
                </p>
                <p>
                  <FiPhone className="text-red" />
                  <span>WhatsApp Desk: +91 87080 93422</span>
                </p>
                <p>
                  <FiMail className="text-red" />
                  <span>info@indianheartassociation.com</span>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom-pro">
            <div className="footer-bottom-left">
              © {new Date().getFullYear()} Indian Heart Association. All Rights Reserved.
              <span>Life Saving is Our Mission • One Village – One Trained First Responder</span>
            </div>
            <div className="footer-bottom-right">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms & Conditions</a>
              <span>•</span>
              <a href="#">Refund Policy</a>
              <span>•</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

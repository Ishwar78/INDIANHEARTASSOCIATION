import React from "react";
import {
  FiArrowRight,
  FiHeart,
  FiUsers,
  FiMapPin,
  FiTruck,
  FiClock,
  FiTarget,
  FiShield,
  FiAward,
  FiCheckCircle,
  FiActivity,
  FiBookOpen,
  FiUserCheck,
  FiBriefcase,
  FiZap,
  FiGlobe,
  FiStar,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import "./About.css";

const stats = [
  {
    icon: FiUsers,
    number: "12,500+",
    label: "Certified Responders",
  },
  {
    icon: FiMapPin,
    number: "3,850+",
    label: "Villages Covered",
  },
  {
    icon: FiTruck,
    number: "450+",
    label: "Bike Response Units",
  },
  {
    icon: FiHeart,
    number: "9,800+",
    label: "Emergencies Handled",
  },
  {
    icon: FiClock,
    number: "24/7",
    label: "Toll-Free 18002022459",
  },
];

const principles = [
  {
    icon: FiClock,
    title: "Every Second Counts",
    text: "Immediate pre-hospital CPR and bleeding control during the critical golden hour.",
  },
  {
    icon: FiShield,
    title: "Statutory Compliance",
    text: "Strict adherence to national healthcare guidelines and transparent non-profit governance.",
  },
  {
    icon: FiUsers,
    title: "Community First",
    text: "Empowering local youth and village volunteers to protect their own communities.",
  },
  {
    icon: FiGlobe,
    title: "Universal Inclusivity",
    text: "Equal life-saving readiness accessible across all genders, regions, and socio-economic backgrounds.",
  },
  {
    icon: FiAward,
    title: "Verified Excellence",
    text: "Rigorous theory and practical mannequin assessments before certificate empanelment.",
  },
];

const programs = [
  {
    image: "/images/course-1.png",
    icon: FiHeart,
    title: "CPR & Basic Life Support (BLS)",
    text: "Comprehensive hands-on training on adult, child, and infant mannequins with automated external defibrillator (AED) operation.",
  },
  {
    image: "/images/course-3.png",
    icon: FiActivity,
    title: "Road Accident & Trauma Response",
    text: "Spine immobilization, severe wound packing, pressure dressings, fracture splints, and safe vehicular extrication.",
  },
  {
    image: "/images/course-2.png",
    icon: FiShield,
    title: "Choking & Airway Management",
    text: "Mastering the Heimlich maneuver, back blows, chest thrusts, and stable recovery position for unconscious casualties.",
  },
  {
    image: "/images/hero.png",
    icon: FiTruck,
    title: "Bike Ambulance Operational Readiness",
    text: "Specialized field training for designated motorcycle first response riders with emergency backpacks and trauma kits.",
  },
  {
    image: "/images/course-4.png",
    icon: FiBriefcase,
    title: "Workplace & Industrial First Aid",
    text: "Customized occupational health, chemical burn management, electric shock protocols, and evacuation drill leadership.",
  },
  {
    image: "/images/course-2.png",
    icon: FiUsers,
    title: "School & Youth Life-Saving Skills",
    text: "Imparting vital safety training and basic first-aid awareness to students, teachers, and campus emergency squads.",
  },
];

const milestones = [
  {
    number: "01",
    title: "Foundation",
    heading: "Inception of Indian Heart Association",
    text: "Formed with the noble mission to tackle sudden cardiac arrest, cardiovascular crises, and lack of basic life support skills in rural and semi-urban India.",
  },
  {
    number: "02",
    title: "Collaboration",
    heading: "First Responder Tie-Up",
    text: "Structured a standardized 2-Day First Aid & CPR training curriculum certified for field responders, students, and corporate emergency response teams.",
  },
  {
    number: "03",
    title: "Deployment",
    heading: "One Village – One First Responder Network",
    text: "Expanded community outreach to bridge golden hour delays by training grassroots youth and deploying rapid-response Bike Ambulance units.",
  },
  {
    number: "04",
    title: "National Accreditation",
    heading: "Statutory & Government Compliance",
    text: "Registered with MCA, NITI Aayog NGO Darpan, DPIIT, MSME, and Trademark Registry.",
  },
  {
    number: "05",
    title: "2026 Vision",
    heading: "Pan-India Emergency Healthcare Grid",
    text: "Empanelling over 50,000+ certified First Responders across 28 states with active QR-verified certification cards and rapid dispatch helplines.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="about-section-heading">
      <span className="about-eyebrow">
        {eyebrow}
        <i></i>
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function StatCard({ icon: Icon, number, label }) {
  return (
    <div className="about-stat-card">
      <div className="about-stat-icon">
        <Icon />
      </div>

      <div>
        <strong>{number}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
     

      <main className="about-page">

        {/* =====================================================
            ABOUT HERO
        ====================================================== */}
        <section className="about-hero">

          <img
            src="/images/bike-ambulance-hero.jpg"
            alt="Indian Heart Association Bike Ambulance First Responder"
            className="about-hero-image"
          />

          <div className="about-hero-overlay"></div>

          <div className="about-hero-content">

            <div className="about-breadcrumb">
              <span>Home</span>
              <b>›</b>
              <strong>About Us</strong>
            </div>

            <span className="hero-small-text">
              CARING HEARTS • HEALTHY NATION
            </span>

            <h1>
              About <span>Us</span>
            </h1>

            <p>
              Empowering individuals and communities with life-saving
              skills for a safer, healthier India.
            </p>

          </div>

        </section>


        {/* =====================================================
            WHO WE ARE
        ====================================================== */}
        <section className="about-container who-we-are">

          <div className="who-content">

            <SectionHeading
              eyebrow="WHO WE ARE"
              title={
                <>
                  Indian Heart <span>Association</span>
                </>
              }
            />

            <h3 className="who-tagline">
              Caring Hearts • Healthy Nation
            </h3>

            <p>
              The <strong>Indian Heart Association</strong> is a premier
              registered non-profit healthcare initiative operating across
              India with a national mandate to curb preventable deaths caused
              by cardiac arrest, road accidents, and delayed medical assistance.
            </p>

            <p>
              Under the <strong>Indian Heart Association First Responder
              Programme</strong> and our flagship{" "}
              <em>“One Village – One Trained First Responder”</em> initiative,
              we train and empanel rural and urban youth as certified First
              Responders.
            </p>

            <p>
              Equipped with standardized{" "}
              <strong>2-Day CPR & First Aid training</strong> and rapid
              Bike Ambulance units, our volunteers bridge the crucial
              golden-hour gap before hospital admission.
            </p>

            <div className="compliance-box">

              <FiShield />

              <p>
                We operate with full legal compliance, holding Corporate
                Identity Number (
                <strong>CIN: U86909DC2026NPL474342</strong>
                ), DPIIT recognition (
                <strong>DIPP279329</strong>
                ), NITI Aayog NGO Darpan registration (
                <strong>DL/2026/1188161</strong>
                ), and registered trademarks.
              </p>

            </div>

            <a
              href="#first-responder"
              className="about-primary-btn"
            >
              Join as a First Responder
              <FiArrowRight />
            </a>

          </div>


          <div className="who-visual">

            <div className="who-image-card">

              <img
                src="/images/hero.png"
                alt="Indian Heart Association First Responder CPR Training"
              />

              <div className="trained-badge">
                <FiUsers />

                <div>
                  <strong>12,500+</strong>
                  <span>Trained Responders</span>
                </div>
              </div>

            </div>

            <div className="mini-stats">

              {stats.map((item) => (
                <StatCard
                  key={item.label}
                  icon={item.icon}
                  number={item.number}
                  label={item.label}
                />
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            VISION / MISSION
        ====================================================== */}
        <section className="about-container vision-mission">

          <div className="vision-card">

            <div className="vision-icon">
              <FiTarget />
            </div>

            <div>

              <span className="card-label">
                OUR VISION
              </span>

              <h2>
                “A nation where no life is lost due to lack of immediate
                first aid, CPR, or delay in pre-hospital emergency medical
                response.”
              </h2>

              <p>
                We envision an India where every village, workplace, school,
                and neighborhood has at least one certified first responder
                equipped with the knowledge, confidence, and tools to act
                decisively during cardiac and trauma emergencies.
              </p>

            </div>

          </div>


          <div className="mission-card">

            <div className="mission-icon">
              <FiActivity />
            </div>

            <div>

              <span className="card-label">
                OUR MISSION
              </span>

              <ul>

                <li>
                  <FiCheckCircle />
                  <span>
                    Train and certify 100,000+ community First Responders
                    across rural and urban India.
                  </span>
                </li>

                <li>
                  <FiCheckCircle />
                  <span>
                    Deploy rapid Bike Ambulance Units at block and district
                    levels to ensure sub-10 minute golden hour intervention.
                  </span>
                </li>

                <li>
                  <FiCheckCircle />
                  <span>
                    Standardize CPR and basic life support education in
                    schools, universities, and corporate workplaces.
                  </span>
                </li>

                <li>
                  <FiCheckCircle />
                  <span>
                    Deliver transparent, QR-verified certification cards and
                    continuous skill refreshers.
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </section>


        {/* =====================================================
            GUIDING PRINCIPLES
        ====================================================== */}
        <section className="principles-section">

          <div className="about-container">

            <SectionHeading
              eyebrow="OUR GUIDING PRINCIPLES"
              title="The Values Behind Every Response"
              description="The foundational ethics that guide our emergency responders, instructors, and medical advisory council."
            />

            <div className="principles-grid">

              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="principle-card"
                    key={item.title}
                  >

                    <div className="principle-icon">
                      <Icon />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            TRAINING PROGRAMS
        ====================================================== */}
        <section className="about-container programs-section">

          <SectionHeading
            eyebrow="CERTIFIED TRAINING PROGRAMS & MODULES"
            title="Practical Skills That Save Lives"
            description="Standardized practical courses delivered by certified instructors and medical specialists."
          />

          <div className="program-grid">

            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  className="program-card"
                  key={program.title}
                >

                  <div className="program-image">

                    <img
                      src={program.image}
                      alt={program.title}
                    />

                    <div className="program-icon">
                      <Icon />
                    </div>

                  </div>

                  <div className="program-content">

                    <h3>{program.title}</h3>

                    <p>{program.text}</p>

                    <a href="#courses">
                      Explore Module
                      <FiArrowRight />
                    </a>

                  </div>

                </article>
              );
            })}

          </div>

        </section>


        {/* =====================================================
            IMPACT STRIP
        ====================================================== */}
        <section className="impact-highlight">

          <div className="about-container impact-highlight-inner">

            <div>
              <span>OUR NATIONAL IMPACT</span>

              <h2>
                Building an <strong>Emergency-Ready India</strong>
              </h2>

              <p>
                From local communities to national response networks,
                Indian Heart Association is creating a stronger chain of
                survival across India.
              </p>
            </div>

            <div className="impact-numbers">

              <div>
                <strong>12,500+</strong>
                <span>Responders</span>
              </div>

              <div>
                <strong>3,850+</strong>
                <span>Villages</span>
              </div>

              <div>
                <strong>450+</strong>
                <span>Bike Units</span>
              </div>

              <div>
                <strong>9,800+</strong>
                <span>Emergencies</span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MILESTONES
        ====================================================== */}
        <section className="about-container milestones-section">

          <SectionHeading
            eyebrow="MILESTONES & ORGANIZATIONAL JOURNEY"
            title="Our Journey So Far"
            description="Key developments in building a pan-India emergency first responder healthcare network."
          />

          <div className="timeline">

            {milestones.map((item, index) => (

              <article
                className={`timeline-item ${
                  index % 2 === 0 ? "timeline-red" : "timeline-blue"
                }`}
                key={item.number}
              >

                <div className="timeline-number">
                  {item.number}
                </div>

                <span className="timeline-category">
                  {item.title}
                </span>

                <h3>{item.heading}</h3>

                <p>{item.text}</p>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section
          className="about-final-cta"
          id="first-responder"
        >

          <div className="cta-overlay"></div>

          <div className="about-container cta-content">

            <div className="cta-person">

              <div className="cta-person-circle">
                <FiUsers />
              </div>

            </div>

            <div className="cta-text">

              <span>
                BE A PART OF THE CHANGE
              </span>

              <h2>
                Together for a Safer,
                <strong> Healthier India.</strong>
              </h2>

              <p>
                Become a trained first responder and help someone during
                the most critical minutes of their life.
              </p>

              <a href="/volunteer">
                Join as a First Responder
                <FiArrowRight />
              </a>

            </div>

            <div className="cta-right">

              <FiActivity />

              <strong>
                TRAIN
                <br />
                RESPOND
                <br />
                SAVE LIVES
              </strong>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}
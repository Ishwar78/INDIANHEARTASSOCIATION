import React from "react";
import {
  FiSearch,
  FiChevronDown,
  FiCheck,
  FiClock,
  FiMonitor,
  FiShield,
  FiStar,
  FiArrowRight,
  FiHeart,
  FiUsers,
  FiMapPin,
  FiTruck,
  FiActivity,
  FiBookOpen,
  FiAward,
  FiPlay,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
  FiUserCheck,
  FiBriefcase,
  FiGlobe,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import "./Course.css";

const categories = [
  "All Courses",
  "CPR & First Aid",
  "Life Support",
  "Trauma Response",
  "Workplace Training",
  "School Programs",
  "Bike Ambulance",
  "Awareness Programs",
];

const courses = [
  {
    id: "2-day-cpr-first-aid",
    title: "2-Day CPR & First Aid Training",
    image: "/images/course-1.png",
    price: "₹2,500",
    oldPrice: "₹3,500",
    discount: "29% OFF",
    rating: "4.8",
    reviews: "1,250",
    duration: "2 Days",
    mode: "Offline / Online",
    description:
      "Learn essential life-saving skills with certified trainers and get recognized certification.",
    popular: true,
  },
  {
    id: "basic-life-support",
    title: "Basic Life Support (BLS)",
    image: "/images/course-2.png",
    price: "₹3,500",
    oldPrice: "₹4,500",
    discount: "22% OFF",
    rating: "4.7",
    reviews: "980",
    duration: "2 Days",
    mode: "Offline",
    description:
      "For healthcare providers and professionals requiring advanced emergency response skills.",
  },
  {
    id: "first-responder",
    title: "First Responder Training",
    image: "/images/course-3.png",
    price: "₹3,000",
    oldPrice: "₹4,000",
    discount: "25% OFF",
    rating: "4.7",
    reviews: "850",
    duration: "2 Days",
    mode: "Offline",
    description:
      "Practical training for real emergencies, trauma response and rapid community support.",
  },
  {
    id: "community-first-aid",
    title: "Community First Aid Program",
    image: "/images/course-4.png",
    price: "₹1,500",
    oldPrice: "₹2,000",
    discount: "25% OFF",
    rating: "4.8",
    reviews: "620",
    duration: "1 Day",
    mode: "Offline",
    description:
      "Group training and awareness programs for communities, schools and NGOs.",
  },
  {
    id: "online-first-aid",
    title: "Online First Aid Certification",
    image: "/images/course-2.png",
    price: "₹1,200",
    oldPrice: "₹1,800",
    discount: "33% OFF",
    rating: "4.5",
    reviews: "540",
    duration: "Self-Paced",
    mode: "Online",
    description:
      "Learn first aid at your own pace with expert guidance and digital resources.",
  },
  {
    id: "workplace-first-aid",
    title: "Workplace First Aid Training",
    image: "/images/course-3.png",
    price: "₹4,000",
    oldPrice: "₹5,500",
    discount: "27% OFF",
    rating: "4.6",
    reviews: "420",
    duration: "2 Days",
    mode: "Offline",
    description:
      "Customized workplace safety training for employees and industrial environments.",
  },
  {
    id: "road-accident-trauma",
    title: "Road Accident & Trauma Response",
    image: "/images/course-1.png",
    price: "₹3,800",
    oldPrice: "₹5,000",
    discount: "24% OFF",
    rating: "4.6",
    reviews: "380",
    duration: "2 Days",
    mode: "Offline",
    description:
      "Advanced trauma and emergency handling skills for accident situations.",
  },
  {
    id: "choking-airway",
    title: "Choking & Airway Management",
    image: "/images/course-4.png",
    price: "₹2,800",
    oldPrice: "₹4,000",
    discount: "30% OFF",
    rating: "4.5",
    reviews: "320",
    duration: "1 Day",
    mode: "Offline",
    description:
      "Learn airway management, recovery position and choking response techniques.",
  },
  {
    id: "school-youth",
    title: "School & Youth Life-Saving Skills",
    image: "/images/course-2.png",
    price: "₹1,800",
    oldPrice: "₹2,500",
    discount: "28% OFF",
    rating: "4.5",
    reviews: "290",
    duration: "1 Day",
    mode: "Offline",
    description:
      "Age-appropriate modules that teach essential safety and first-aid awareness.",
  },
];

const benefits = [
  {
    icon: FiUserCheck,
    title: "Expert Instructors",
    text: "Certified trainers and medical professionals",
  },
  {
    icon: FiHeart,
    title: "Hands-on Training",
    text: "Real practical scenarios and demonstrations",
  },
  {
    icon: FiAward,
    title: "Recognized Certification",
    text: "Certification after successful assessment",
  },
  {
    icon: FiActivity,
    title: "Real-life Scenarios",
    text: "Training designed around actual emergencies",
  },
  {
    icon: FiUsers,
    title: "Suitable for Everyone",
    text: "Students, professionals, schools and NGOs",
  },
];

const reviews = [
  {
    name: "Priya Sharma",
    role: "Certified Responder, Delhi",
    image: "/images/review-1.png",
    text:
      "The training was excellent and very practical. I now feel confident to help in an emergency.",
  },
  {
    name: "Rahul Verma",
    role: "Corporate Employee, Gurgaon",
    image: "/images/review-2.png",
    text:
      "Well-organized, knowledgeable trainers and great hands-on experience. Highly recommended.",
  },
  {
    name: "Anjali Mehta",
    role: "Student, Jaipur",
    image: "/images/review-3.png",
    text:
      "I learned so much in just 2 days. The certification process was smooth and practical.",
  },
];

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="course-stat">
      <div className="course-stat-icon">
        <Icon />
      </div>

      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function FilterGroup({ title, options }) {
  return (
    <div className="filter-group">
      <div className="filter-title">
        <span>{title}</span>
        <FiChevronDown />
      </div>

      <div className="filter-options">
        {options.map((option, index) => (
          <label key={option}>
            <input
              type="checkbox"
              defaultChecked={index === 0}
            />

            <span className="fake-check">
              <FiCheck />
            </span>

            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <article className="course-card">

      <div className="course-card-image">

        <img
          src={course.image}
          alt={course.title}
        />

        <div className="course-card-icon">
          <FiHeart />
        </div>

        {course.popular && (
          <span className="popular-badge">
            MOST POPULAR
          </span>
        )}

      </div>

      <div className="course-card-body">

        <h3>{course.title}</h3>

        <div className="course-rating">
          <FiStar />
          <strong>{course.rating}</strong>
          <span>({course.reviews})</span>
        </div>

        <p>{course.description}</p>

        <div className="course-card-features">
          <span>
            <FiClock />
            {course.duration}
          </span>

          <span>
            <FiMonitor />
            {course.mode}
          </span>
        </div>

        <div className="course-price-row">

          <div>
            <strong>{course.price}</strong>
            <del>{course.oldPrice}</del>
          </div>

          <span>{course.discount}</span>

        </div>

        <div className="course-card-actions">

          <a
            href={`/course/${course.id}`}
            className="course-details-btn"
          >
            View Details
            <FiArrowRight />
          </a>

        </div>

      </div>

    </article>
  );
}

export default function Course() {
  return (
    <>
      

      <main className="course-page">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="courses-hero">

          <div className="courses-hero-bg">
            <img
              src="/images/hero.png"
              alt="Indian Heart Association Training"
            />
          </div>

          <div className="courses-hero-overlay"></div>

          <div className="courses-hero-container">

            <div className="courses-hero-content">

              <div className="courses-breadcrumb">
                Home
                <span>›</span>
                Courses
              </div>

              <span className="hero-red-label">
                CERTIFIED TRAINING PROGRAMS
              </span>

              <h1>
                Gain <span>Life-Saving</span>
                <br />
                Skills from Experts
              </h1>

              <p>
                Hands-on training, real-life scenarios and internationally
                recognized certification to make a difference in your community.
              </p>

              <div className="hero-mini-points">

                <div>
                  <FiActivity />
                  <span>Practical<br />Training</span>
                </div>

                <div>
                  <FiUsers />
                  <span>Certified<br />Instructors</span>
                </div>

                <div>
                  <FiAward />
                  <span>Recognized<br />Certification</span>
                </div>

                <div>
                  <FiHeart />
                  <span>For<br />Everyone</span>
                </div>

              </div>

            </div>


            <div className="hero-course-card">

              <div className="hero-heart">
                <FiHeart />
              </div>

              <h3>
                Every Skill
                <br />
                Saves a Life
              </h3>

              <p>
                Be ready. Be a
                <br />
                First Responder.
              </p>

              <a href="#course-list">
                Explore Courses
                <FiArrowRight />
              </a>

            </div>

            <button className="hero-play">
              <FiPlay />
            </button>

          </div>

        </section>


        {/* ==================================================
            STATS
        ================================================== */}

        <section className="course-stats-wrapper">

          <div className="course-container course-stats">

            <Stat
              icon={FiUsers}
              value="12,500+"
              label="Trained Responders"
            />

            <Stat
              icon={FiMapPin}
              value="3,850+"
              label="Villages Covered"
            />

            <Stat
              icon={FiTruck}
              value="450+"
              label="Bike Response Units"
            />

            <Stat
              icon={FiShield}
              value="9,800+"
              label="Emergencies Handled"
            />

            <Stat
              icon={FiActivity}
              value="24/7"
              label="Toll Free Support"
            />

          </div>

        </section>


        {/* ==================================================
            COURSE DISCOVERY HEADER
        ================================================== */}

        <section
          className="course-container course-discovery"
          id="course-list"
        >

          <div className="course-heading-row">

            <div>

              <span className="course-small-label">
                DISCOVER
                <i></i>
              </span>

              <h2>
                Our Training Programs
              </h2>

              <p>
                Choose from our certified courses designed for individuals,
                professionals, students and organizations.
              </p>

            </div>

            <div className="course-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search courses..."
              />

              <button>
                <FiSearch />
              </button>

            </div>

          </div>


          {/* CATEGORY PILLS */}

          <div className="course-category-list">

            {categories.map((category, index) => (

              <button
                className={
                  index === 0
                    ? "active"
                    : ""
                }
                key={category}
              >

                {category}

              </button>

            ))}

          </div>

        </section>


        {/* ==================================================
            MAIN COURSE AREA
        ================================================== */}

        <section className="course-container course-main-area">

          {/* FILTER */}

          <aside className="course-filter">

            <div className="filter-heading">
              Filter Courses
            </div>

            <FilterGroup
              title="Category"
              options={[
                "All Courses",
                "CPR & First Aid",
                "Life Support",
                "Trauma Response",
                "Workplace Training",
                "School Programs",
                "Bike Ambulance",
                "Awareness Programs",
              ]}
            />

            <FilterGroup
              title="Mode"
              options={[
                "All",
                "Online",
                "Offline (Classroom)",
                "Hybrid",
              ]}
            />

            <FilterGroup
              title="Duration"
              options={[
                "All",
                "1 Day",
                "2 Days",
                "3–5 Days",
                "More than 5 Days",
              ]}
            />

            <div className="filter-group">

              <div className="filter-title">
                <span>Price Range</span>
                <FiChevronDown />
              </div>

              <div className="price-range-label">
                ₹0 - ₹10,000
              </div>

              <input
                className="range-input"
                type="range"
                min="0"
                max="10000"
                defaultValue="6500"
              />

              <button className="apply-filter">
                Apply Filter
              </button>

            </div>

          </aside>


          {/* COURSE CONTENT */}

          <div className="course-results">

            {/* FEATURED */}

            <div className="featured-course">

              <div className="featured-image">

                <img
                  src="/images/course-1.png"
                  alt="2-Day CPR & First Aid Training"
                />

                <span>
                  MOST POPULAR
                </span>

                <button className="featured-play">
                  <FiPlay />
                </button>

                <div className="featured-thumbs">
                  <img src="/images/course-1.png" alt="" />
                  <img src="/images/course-2.png" alt="" />
                  <img src="/images/course-3.png" alt="" />
                  <button>
                    <FiChevronRight />
                  </button>
                </div>

              </div>


              <div className="featured-content">

                <div className="featured-top">
                  <span>Featured Course</span>

                  <select defaultValue="popular">
                    <option value="popular">
                      Sort by: Most Popular
                    </option>
                    <option value="price">
                      Sort by: Price
                    </option>
                  </select>
                </div>

                <h2>
                  2-Day CPR & First Aid Training
                </h2>

                <div className="featured-rating">
                  <FiStar />
                  <strong>4.8</strong>
                  <span>(1,250 Reviews)</span>
                </div>

                <p>
                  Learn essential life-saving skills with certified trainers
                  and get recognized certification.
                </p>

                <div className="featured-info">

                  <div>
                    <FiClock />
                    <span>
                      <small>Duration</small>
                      2 Days
                    </span>
                  </div>

                  <div>
                    <FiMonitor />
                    <span>
                      <small>Mode</small>
                      Offline / Online
                    </span>
                  </div>

                  <div>
                    <FiShield />
                    <span>
                      <small>Certificate</small>
                      Valid Nationwide
                    </span>
                  </div>

                </div>

                <div className="featured-bottom">

                  <div className="featured-price">
                    <strong>₹2,500</strong>
                    <del>₹3,500</del>
                    <span>29% OFF</span>
                  </div>

                  <div className="featured-buttons">

                    <a href="/course/2-day-cpr-first-aid">
                      View Details
                      <FiArrowRight />
                    </a>

                    <button>
                      <FiShoppingCart />
                      Add to Cart
                    </button>

                  </div>

                </div>

              </div>

            </div>


            {/* ALL COURSES */}

            <div className="all-course-heading">

              <h3>
                All Courses <span>(8)</span>
              </h3>

              <select defaultValue="popular">
                <option value="popular">
                  Sort by: Most Popular
                </option>
                <option value="price-low">
                  Price: Low to High
                </option>
                <option value="price-high">
                  Price: High to Low
                </option>
              </select>

            </div>


            <div className="course-grid">

              {courses.slice(1).map((course) => (
                <CourseCard
                  course={course}
                  key={course.id}
                />
              ))}

            </div>

          </div>

        </section>


        {/* ==================================================
            WHO CAN ENROLL + WHY CHOOSE
        ================================================== */}

        <section className="enroll-benefits">

          <div className="course-container enroll-grid">

            <div className="enroll-panel">

              <div className="enroll-content">

                <span>WHO CAN ENROLL?</span>

                <h2>
                  Training for
                  <br />
                  Everyone
                </h2>

                <ul>

                  <li>
                    <FiCheck />
                    Students & Young Professionals
                  </li>

                  <li>
                    <FiCheck />
                    Teachers & School Staff
                  </li>

                  <li>
                    <FiCheck />
                    Corporate Employees
                  </li>

                  <li>
                    <FiCheck />
                    Community Volunteers
                  </li>

                  <li>
                    <FiCheck />
                    Healthcare Support Staff
                  </li>

                  <li>
                    <FiCheck />
                    Anyone who wants to save lives
                  </li>

                </ul>

              </div>

              <div className="enroll-person">

                <div className="person-circle">
                  <FiUserCheck />
                </div>

              </div>

            </div>


            <div className="benefits-panel">

              <span>WHY CHOOSE</span>

              <h2>
                Indian Heart
                <br />
                <strong>Association?</strong>
              </h2>

              <div className="benefits-list">

                {benefits.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      className="benefit-item"
                      key={item.title}
                    >

                      <div className="benefit-icon">
                        <Icon />
                      </div>

                      <strong>{item.title}</strong>

                      <small>{item.text}</small>

                    </div>
                  );

                })}

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            INDIA IMPACT
        ================================================== */}

        <section className="india-impact">

          <div className="course-container india-impact-inner">

            <div className="india-impact-text">

              <span>
                OUR TRAINING IMPACT
              </span>

              <h2>
                Across <strong>India</strong>
              </h2>

              <p>
                Building a stronger, safer and healthier India through
                community first responders.
              </p>

              <a href="#courses">
                Join Our Mission
                <FiArrowRight />
              </a>

            </div>


            <div className="india-map">

              <div className="map-placeholder">
                <FiGlobe />
                <span>28 States</span>
              </div>

            </div>


            <div className="impact-stat-grid">

              <Stat
                icon={FiUsers}
                value="12,500+"
                label="Certified Responders"
              />

              <Stat
                icon={FiMapPin}
                value="3,850+"
                label="Villages Covered"
              />

              <Stat
                icon={FiTruck}
                value="450+"
                label="Bike Response Units"
              />

              <Stat
                icon={FiHeart}
                value="9,800+"
                label="Emergencies Handled"
              />

            </div>

          </div>

        </section>


        {/* ==================================================
            REVIEWS
        ================================================== */}

        <section className="reviews-section">

          <div className="course-container">

            <div className="reviews-heading">

              <div>

                <span>REAL PEOPLE. REAL STORIES.</span>

                <h2>
                  Student Reviews
                </h2>

                <p>
                  Hear from people who learned skills that can save lives.
                </p>

              </div>

              <button>
                View All Reviews
                <FiArrowRight />
              </button>

            </div>


            <div className="reviews-grid">

              {reviews.map((review) => (

                <article
                  className="review-card"
                  key={review.name}
                >

                  <div className="quote-mark">
                    “
                  </div>

                  <p>
                    {review.text}
                  </p>

                  <div className="review-user">

                    <div className="review-avatar">

                      <img
                        src={review.image}
                        alt={review.name}
                      />

                    </div>

                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>

                      <div className="review-stars">
                        ★★★★★
                      </div>
                    </div>

                  </div>

                </article>

              ))}

            </div>


            <div className="review-dots">
              <span className="active"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </section>


        {/* ==================================================
            CTA
        ================================================== */}

        <section className="course-final-cta">

          <div className="course-final-image">
            <img
              src="/images/hero.png"
              alt="First Responders"
            />
          </div>

          <div className="course-final-content">

            <span>
              BE A FIRST RESPONDER
            </span>

            <h2>
              Because Every Second Counts.
            </h2>

            <div className="cta-points">

              <span>
                <FiCheck />
                Get Trained
              </span>

              <span>
                <FiCheck />
                Save Lives
              </span>

              <span>
                <FiCheck />
                Build a Safer India
              </span>

            </div>

            <a href="/volunteer">
              Join Now
              <FiArrowRight />
            </a>

          </div>

          <div className="cta-heartbeat">
            <FiActivity />
            <FiHeart />
          </div>

        </section>

      </main>
    </>
  );
}
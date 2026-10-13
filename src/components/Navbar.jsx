
import { Link, NavLink } from "react-router-dom";
import {
  FiPhoneCall,
  FiHeart,
  FiDownload,
  FiBriefcase,
  FiChevronDown,
  FiShoppingCart,
  FiUser,
  FiGlobe,
  FiBookOpen,
  FiMessageCircle,
} from "react-icons/fi";

import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about", dropdown: true },
  { label: "Courses", to: "/courses" },
  { label: "Corporate", to: "/corporate" },
  { label: "Skill Centers", to: "/skill-centers", dropdown: true },
  { label: "Volunteers", to: "/volunteers" },
  { label: "Career", to: "/career" },
  { label: "Product", to: "/product" },
  { label: "Bike Ambulance", to: "/bike-ambulance" },
  { label: "Resources", to: "/resources", dropdown: true },
  { label: "Verify Certificate", to: "/verify-certificate" },
  { label: "Donation", to: "/donation" },
  { label: "Contact Us", to: "/contact" },
];

const partnerLogos = [
  {
    src: "/Gov_Logo.png",
    alt: "WHO",
    className: "who-logo",
  },
  {
    src: "/skill_india.png",
    alt: "Skill India",
    className: "skill-india-logo",
  },
  {
    src: "/start-up-india.png",
    alt: "Startup India",
    className: "startup-india-logo",
  },
  {
    src: "/g20.png",
    alt: "G20",
    className: "g20-logo",
  },
  {
    src: "/msme.png",
    alt: "MSME",
    className: "msme-logo",
  },
  {
    src: "/swatch-bharat.png",
    alt: "Swachh Bharat",
    className: "bharat-logo",
  },
];

function HeaderActions() {
  return (
    <div className="nav-actions">
      <Link
        className="circle-action"
        to="/wishlist"
        aria-label="Wishlist"
        title="Wishlist"
      >
        <FiHeart />
      </Link>

      <Link
        className="circle-action"
        to="/cart"
        aria-label="Shopping Cart"
        title="Shopping Cart"
      >
        <FiShoppingCart />
      </Link>

      <Link className="login-btn" to="/login">
        <FiUser />
        <span>Login</span>
      </Link>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="site-header">
      {/* TOP UTILITY BAR */}
      <div className="top-strip">
        <div className="top-left">
          <Link to="/verify-certificate" className="utility-link">
            <FiHeart />
            <span>Verify Certificate</span>
          </Link>

          <Link to="/career" className="utility-link">
            <FiBriefcase />
            <span>Jobs</span>
          </Link>

          <Link to="/volunteers" className="utility-link">
            <FiHeart />
            <span>Become a Volunteer</span>
          </Link>

          <Link to="/downloads" className="utility-link">
            <FiDownload />
            <span>Downloads</span>
          </Link>

          <Link to="/corporate" className="utility-link">
            <FiGlobe />
            <span>Corporate CSR</span>
          </Link>
        </div>

        <div className="top-right">
          <a className="hotline" href="tel:18002022459">
            <FiPhoneCall />
            <span>Toll Free (24/7) - 18002022459</span>
          </a>

          <a
            className="top-btn whatsapp-btn"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
          >
            <FiMessageCircle />
            <span>WhatsApp Helpline</span>
          </a>

          <Link className="top-btn dark" to="/courses">
            <FiBookOpen />
            <span>Courses</span>
          </Link>

          <Link className="top-btn red desktop-responder" to="/volunteers">
            Join First Responder
          </Link>

          <Link className="top-btn mobile-verify" to="/verify-certificate">
            Verify Certificate
          </Link>

          <button
            className="lang-btn"
            type="button"
            aria-label="Language"
          >
            <FiGlobe />
          </button>
        </div>
      </div>

      {/* BRAND AND PARTNER LOGOS */}
      <div className="brand-row">
        {/* PARTNER LOGOS */}
        <div
          className="partner-strip"
          aria-label="Partner organisations"
        >
          {partnerLogos.map((partner) => (
            <span
              className={`partner-logo ${partner.className}`}
              key={partner.alt}
            >
              <img src={partner.src} alt={partner.alt} />
            </span>
          ))}
        </div>

        {/* MAIN ORGANISATION BRAND */}
        <Link
          to="/"
          className="brand"
          aria-label="Indian Heart Association home"
        >
          <img
            className="main-logo"
            src="/logo.png"
            alt="Indian Heart Association logo"
          />

          <div className="brand-copy">
            <strong>INDIAN HEART ASSOCIATION</strong>
            <small>CARING HEARTS • HEALTHY NATION</small>
          </div>
        </Link>

        {/* ANIMATED FLAG - DESKTOP ONLY */}
        <div className="brand-center">
          <img
            className="india-flag-gif"
            src="/images/flag.gif"
            alt="Animated Indian national flag"
          />
        </div>

        {/* MOBILE WISHLIST, CART AND LOGIN */}
        <div className="mobile-actions">
          <HeaderActions />
        </div>
      </div>

      {/* DESKTOP NAVIGATION - UNCHANGED */}
      <nav className="main-nav">
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${
                  isActive && item.label === "Home" ? "active" : ""
                }`
              }
            >
              <span>{item.label}</span>

              {item.dropdown && (
                <FiChevronDown className="nav-chevron" />
              )}
            </NavLink>
          ))}
        </div>

        <div className="desktop-actions">
          <HeaderActions />
        </div>
      </nav>
    </header>
  );
}

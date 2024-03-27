import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className={styles.header}>
      <nav className={styles.primaryMenu}>
        <div className={styles.navContainer}>
          <Link to="hero" className={styles.navTitle}>
            <span className={styles.navImageSpan}>
              <img
                className={styles.navImage}
                src="https://picsum.photos/200/300"
                alt=""
              />
            </span>
            <h1 className={styles.headerText}>Reward Joseph</h1>
          </Link>
          <span className={styles.headerTextMobile}>
            <Link
              to="hero"
              smooth={true}
              duration={1}
              className={styles.navLinkMobile}
            >
              Reward Joseph
            </Link>
          </span>
          <div className={styles.hamburger} onClick={toggleMobileMenu}>
            <FaBars />
          </div>
          <div
            className={`${styles.navLinks} ${
              isMobileMenuOpen ? styles.showMobileMenu : ""
            }`}
          >
            <Link
              to="about"
              smooth={true}
              duration={1}
              className={styles.navLink}
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={1}
              className={styles.navLink}
            >
              Services
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={1}
              className={styles.navLink}
            >
              Portfolio
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={1}
              className={styles.navLink}
            >
              Resume
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={1}
              className={styles.navLink}
            >
              Contact
            </Link>
          </div>
          <div className={styles.socialButtons}>
            <NavLink
              to="https://www.linkedin.com/in/rewardraj"
              target="_blank"
              className={styles.socialButton}
            >
              <FaLinkedin className={styles.iconBtn} />
            </NavLink>

            <NavLink
              to="https://github.com/rewardraj"
              target="_blank"
              className={styles.socialButton}
            >
              <FaGithub className={styles.iconBtn} />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

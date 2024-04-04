import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import { useSection } from "../../hooks/useSection";
import { Section } from "../utils/sections";
import heroImg from "../../assets/1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = Object.values(Section);
  const currentSection = useSection(sectionIds);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className={styles.header}>
      <nav className={styles.primaryMenu}>
        <div className={styles.navContainer}>
          <Link
            to="Hero"
            className={styles.navTitle}
            activeClass={styles.selected}
          >
            <span className={styles.navImageSpan}>
              <img
                className={styles.navImage}
                src={heroImg}
                alt="Rewards hero image"
              />
            </span>
            <h1 className={styles.headerText}>Reward Codes</h1>
          </Link>
          <span className={styles.headerTextMobile}>
            <Link
              to="Hero"
              spy={true}
              smooth={true}
              duration={1}
              className={styles.navLinkMobile}
            >
              Reward Codes
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
            {sectionIds.map((sectionId) => (
              <Link
                key={sectionId}
                to={sectionId}
                smooth={true}
                duration={1}
                selected={currentSection === sectionId}
                activeClass={styles.selected}
                className={`${styles.navLink} ${
                  currentSection === sectionId ? styles.selected : ""
                }`}
              >
                {sectionId}
              </Link>
            ))}
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

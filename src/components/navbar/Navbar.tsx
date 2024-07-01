import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useSection } from "../../hooks/useSection";
import { Section } from "../utils/sections";
import heroImg from "../../assets/1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = Object.values(Section);
  const currentSection = useSection(sectionIds);
  const ref = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick, true);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, true);
    };
  }, [isMobileMenuOpen]);

  return (
    <header id="header" className={styles.header}>
      <nav className={styles.primaryMenu} ref={ref}>
        <section className={styles.navContainer}>
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
              to="#Hero"
              spy={true}
              smooth={true}
              duration={1}
              className={styles.navLinkMobile}
              aria-label="Navigate to Hero section"
            >
              Reward Codes
            </Link>
          </span>
          <button
            type="button"
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            <FaBars />
          </button>
          <section
            className={`${styles.navLinks} ${
              isMobileMenuOpen ? styles.showMobileMenu : ""
            }`}
            role="menu"
          >
            {sectionIds.map((sectionId) => (
              <Link
                key={sectionId}
                to={sectionId}
                role="menuitem"
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
          </section>
          <section className={styles.socialButtons}>
            <NavLink
              to="https://www.linkedin.com/in/rewardraj"
              target="_blank"
              className={styles.socialButton}
              aria-label="Link to LinkedIn Profile"
              rel="me"
            >
              <FaLinkedin className={styles.iconBtn} />
            </NavLink>

            <NavLink
              to="https://github.com/rewardraj"
              target="_blank"
              className={styles.socialButton}
              rel="me"
              aria-label="Link to GitHub Project"
            >
              <FaGithub className={styles.iconBtn} />
            </NavLink>
          </section>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;

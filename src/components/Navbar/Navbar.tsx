/* eslint-disable jsx-a11y/anchor-is-valid */
import { CSSProperties, useContext, useState } from "react";
import { Link } from "react-router-dom";
import inactiveNavStyles from "./Unactivated.module.css";
import activeNavStyles from "./Activated.module.css";
import "./Navbar.css";
import Section from "./Section";
import { DataContext } from "../../misc/DataContext";
import { ContentSections } from "../../types";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarStyles = navbarOpen ? openStyles() : closedStyles();
  const expandStyles = navbarOpen ? expandDivStyles() : {};
  const data = useContext(DataContext) as ContentSections;

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const styles = navbarOpen ? activeNavStyles : inactiveNavStyles;

  return (
    <div id={styles.container} style={navbarStyles}>
      <nav className="navbar navbar-expand-lg position-relative d-flex justify-content-center align-items-center">
        <a href="https://amador.pleasantonusd.net/">
          <img className="amador-logo" src="/logo.png" alt="Logo" />
        </a>
        <Link className={`${styles.brand} navbar-brand`} to="/home">
          Donversity
        </Link>

        <nav className="ml-auto">
          <input
            type="checkbox"
            className={styles.menyAvPaa}
            id="menyAvPaa"
            checked={navbarOpen}
            onChange={toggleNavbar}
          ></input>
          <label id="burger" htmlFor="menyAvPaa" className={styles.burger}>
            <div></div>
            <div></div>
            <div></div>
          </label>
        </nav>
      </nav>

      <div id={styles.expand} style={expandStyles}>
        <div id={styles.topRow}>
          <Link to="/home" onClick={toggleNavbar}>
            Home
          </Link>
          <Link to="/about" onClick={toggleNavbar}>
            About
          </Link>
          <Link to="/club-fair" onClick={toggleNavbar}>
            Club Fair
          </Link>
          <Link to="https://google.com" onClick={toggleNavbar}>
            Art Gallery
          </Link>
        </div>

        <div id={styles.dayContent} className="container">
          <div className={`${styles.row} row justify-content-center`}>
            <Section
              sectionName="Monday"
              sectionContent={data.monday.sections}
              onClick={toggleNavbar}
            ></Section>
            <Section
              sectionName="Tuesday"
              sectionContent={data.tuesday.sections}
              onClick={toggleNavbar}
            ></Section>
            <Section
              sectionName="Wednesday"
              sectionContent={data.wednesday.sections}
              onClick={toggleNavbar}
            ></Section>
          </div>
          <div className={`${styles.row} row justify-content-center`}>
            <Section
              sectionName="Thursday"
              sectionContent={data.thursday.sections}
              onClick={toggleNavbar}
            ></Section>
            <Section
              sectionName="Friday"
              sectionContent={data.friday.sections}
              onClick={toggleNavbar}
            ></Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function openStyles(): CSSProperties {
  return {
    backgroundColor: "var(--navbar-background-color)",
    color: "white",
    height: "100vh",
    width: "100vw",
    transition: "background 0.4s",
    overflowY: "scroll",
    paddingBottom: "20px",
    position: "fixed",
    zIndex: 3,
    top: "0",
  };
}

function closedStyles(): CSSProperties {
  return {
    backgroundColor: "whitesmoke",
    height: "auto",
    position: "fixed",
    zIndex: 3,
    top: "0",
    width: "100vw",
    opacity: 0.8,
  };
}

function expandDivStyles() {
  return {
    display: "inline-block",
    width: "100vw",
    opacity: "1",
  };
}

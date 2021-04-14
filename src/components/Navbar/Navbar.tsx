/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import inactiveNavStyles from "./Unactivated.module.css";
import activeNavStyles from "./Activated.module.css";
import Section from "./Section";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarStyles = navbarOpen ? openStyles() : closedStyles();
  const expandStyles = navbarOpen ? expandDivStyles() : {};

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }

  const styles = navbarOpen ? activeNavStyles : inactiveNavStyles;

  return (
    <div id={styles.container} style={navbarStyles}>

      <nav className="navbar navbar-expand-lg">
        <a className={`${styles.brand} navbar-brand`} href="#">Donversity</a>

        <nav className="ml-auto">
          <input type="checkbox" className={styles.menyAvPaa} id="menyAvPaa"></input>
          <label id="burger" htmlFor="menyAvPaa" className={styles.burger} onClick={toggleNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </label>
        </nav>
      </nav>

      <div id={styles.expand} style={expandStyles}>
        <div id={styles.topRow}>
          <a href="https://google.com">Home</a>
          <a href="https://google.com">About</a>
          <a href="https://google.com">Club Fair</a>
          <a href="https://google.com">Art Gallery</a>
        </div>


        <div id={styles.dayContent} className="container">
          <div className={`${styles.row} row justify-content-center`}>
            <Section sectionName="Monday"></Section>
            <Section sectionName="Tuesday"></Section>
            <Section sectionName="Wednesday"></Section>
          </div>
          <div className={`${styles.row} row justify-content-center`}>
            <Section sectionName="Thursday"></Section>
            <Section sectionName="Friday"></Section>
          </div>
        </div>

      </div>

    </div>
  );
}

function openStyles() {
  return {
    backgroundColor: "var(--navbar-background-color)",
    color: "white",
    height: "100vh",
    width: "100vw",
    transition: "background 0.4s",
    overflowY: "scroll",
    paddingBottom: "20px"

  }
}

function closedStyles() {
  return {
    backgroundColor: "transparent",
    height: "auto"
  }
}

function expandDivStyles() {
  return {
    display: "inline-block",
    width: "100vw",
    opacity: "1",
  }
}
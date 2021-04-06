/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import styles from "./Navbar.module.css";
import "./animations.css";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarStyles = navbarOpen ? openStyles() : closedStyles();
  const expandStyles = navbarOpen ? expandDivStyles() : {};

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }

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


        <div id={styles.dayContent}>
          <div className={styles.day}>
            <h2>Monday</h2>
            <a href="https://google.com">Cooking with Butterfield!</a>
            <a href="https://google.com">Latina club celebration</a>
            <a href="https://google.com">A note from Green Team (world day 2020)</a>
          </div>
          <div className={styles.day}>
            <h2>Tuesday</h2>
          </div>
          <div className={styles.day}>
            <h2>Wednesday</h2>
          </div>
          <div className={styles.day}>
            <h2>Thursday</h2>
          </div>
          <div className={styles.day}>
            <h2>Friday</h2>
          </div>
        </div>

      </div>

    </div>
  );
}

function openStyles() {
  return {
    backgroundColor: "grey",
    color: "white",
    height: "100vh",
    width: "100vw",
    transition: "background 0.4s"
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
    animation: "appear 0.6s"
  }
}
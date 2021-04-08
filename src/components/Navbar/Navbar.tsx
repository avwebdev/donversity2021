/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import styles from "./Navbar.module.css";
import "./animations.css";

export default function Navbar() {
  const [boxOpen, setBoxOpen] = useState(false);
  const [boxOpen2, setBoxOpen2] = useState(false);
  const [boxOpen3, setBoxOpen3] = useState(false);
  const [boxOpen4, setBoxOpen4] = useState(false);
  const [boxOpen5, setBoxOpen5] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [imageOpen2, setImageOpen2] = useState(false);
  const [imageOpen3, setImageOpen3] = useState(false);
  const [imageOpen4, setImageOpen4] = useState(false);
  const [imageOpen5, setImageOpen5] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarStyles = navbarOpen ? openStyles() : closedStyles();
  const expandStyles = navbarOpen ? expandDivStyles() : {};
  const xStyles = boxOpen ? openBox() : closedBox();
  const xStyles2 = boxOpen2 ? openBox2() : closedBox2();
  const xStyles3 = boxOpen3 ? openBox3() : closedBox3();
  const xStyles4 = boxOpen4 ? openBox4() : closedBox4();
  const xStyles5 = boxOpen5 ? openBox5() : closedBox5();
  const imgStyles = imageOpen ? changeImg() : normalImg();
  const imgStyles2 = imageOpen2 ? changeImg2() : normalImg2();
  const imgStyles3 = imageOpen3 ? changeImg3() : normalImg3();
  const imgStyles4 = imageOpen4 ? changeImg4() : normalImg4();
  const imgStyles5 = imageOpen5 ? changeImg5() : normalImg5();

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }

  const toggleX = () => {
    setBoxOpen(!boxOpen);
    setImageOpen(!imageOpen);
  }

  const toggleX2 = () => {
    setBoxOpen2(!boxOpen2);
    setImageOpen2(!imageOpen2);
  }
  
  const toggleX3 = () => {
    setBoxOpen3(!boxOpen3);
    setImageOpen3(!imageOpen3);
  }

  const toggleX4 = () => {
    setBoxOpen4(!boxOpen4);
    setImageOpen4(!imageOpen4);
  }

  const toggleX5 = () => {
    setBoxOpen5(!boxOpen5);
    setImageOpen5(!imageOpen5);
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
          <img className="dot" src = "https://static.thenounproject.com/png/1616496-200.png" alt = "dot"/>
          <a href="https://google.com">About</a>
          <img className="dot" src = "https://static.thenounproject.com/png/1616496-200.png" alt = "dot"/>
          <a href="https://google.com">Club Fair</a>
          <img className="dot" src = "https://static.thenounproject.com/png/1616496-200.png" alt = "dot"/>
          <a href="https://google.com">Art Gallery</a>
        </div>


        <div id={styles.dayContent}>
          <div className={styles.day}>
            <h2>Monday
               <img className={styles.img} src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" style = {imgStyles} alt = "hi" onClick={toggleX}/> 
            </h2>
            <div className={styles.daybaby} style={xStyles}>
            <div> <a href="https://google.com">Cooking with Butterfield!</a></div>
            <div><a href="https://google.com">Latina club celebration</a></div>
            <div><a href="https://google.com">A note from Green Team (world day 2020)</a></div>
           </div>
          </div>
          <div className={styles.day}>
            <h2>Tuesday
            <img className={styles.img} src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" style = {imgStyles2} alt = "hi" onClick={toggleX2}/>
            </h2>
            <div className={styles.daybaby} style={xStyles2}>
            <a href="https://google.com">Cooking with Butterfield!</a>
            <a href="https://google.com">Latina club celebration</a>
            <a href="https://google.com">A note from Green Team (world day 2020)</a>
          </div>
          </div>
          <div className={styles.day}>
            <h2>Wednesday
            <img className={styles.img} src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" style = {imgStyles3} alt = "hi" onClick={toggleX3}/>
            </h2>
            <div className={styles.daybaby} style={xStyles3}>
            <a href="https://google.com">Cooking with Butterfield!</a>
            <a href="https://google.com">Latina club celebration</a>
            <a href="https://google.com">A note from Green Team (world day 2020)</a>
          </div>
          </div>
          <div className={styles.day}>
            <h2>Thursday
            <img className={styles.img} src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" style = {imgStyles4} alt = "hi" onClick={toggleX4}/>
            </h2>
            <div className={styles.daybaby} style={xStyles4}>
            <a href="https://google.com">Cooking with Butterfield!</a>
            <a href="https://google.com">Latina club celebration</a>
            <a href="https://google.com">A note from Green Team (world day 2020)</a>
          </div>
          </div>
          <div className={styles.day}>
            <h2>Friday
            <img className={styles.img} src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" style = {imgStyles5} alt = "hi" onClick={toggleX5}/>
            </h2>
            <div className={styles.daybaby} style={xStyles5}>
            <a href="https://google.com">Cooking with Butterfield!</a>
            <a href="https://google.com">Latina club celebration</a>
            <a href="https://google.com">A note from Green Team (world day 2020)</a>
          </div>
          </div>
        </div>

      </div>

    </div>
  );
}

function openBox() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "block"
    }
  }
}


function closedBox() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "none"
    }
  }
}

function openBox2() {;
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "block"
    }
  }
}


function closedBox2() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "none"
    }
  }
}

function openBox3() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "block"
    }
  }
}


function closedBox3() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "none"
    }
  }
}


function openBox4() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "block"
    }
  }
}


function closedBox4() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "none"
    }
  }
}

function openBox5() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "block"
    }
  }
}


function closedBox5() {
  var width = window.innerWidth;
  if(width<1000){
    return {
      display: "none"
    }
  }
}

function changeImg(){
  return{
    content: 'url("https://cdn.iconscout.com/icon/free/png-256/minus-146-475070.png")'
  }
}

function normalImg(){
  return{
    content: 'url("https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png")'
  }
}

function changeImg2(){
  return{
    content: 'url("https://cdn.iconscout.com/icon/free/png-256/minus-146-475070.png")'
  }
}

function normalImg2(){
  return{
    content: 'url("https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png")'
  }
}

function changeImg3(){
  return{
    content: 'url("https://cdn.iconscout.com/icon/free/png-256/minus-146-475070.png")'
  }
}

function normalImg3(){
  return{
    content: 'url("https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png")'
  }
}

function changeImg4(){
  return{
    content: 'url("https://cdn.iconscout.com/icon/free/png-256/minus-146-475070.png")'
  }
}

function normalImg4(){
  return{
    content: 'url("https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png")'
  }
}

function changeImg5(){
  return{
    content: 'url("https://cdn.iconscout.com/icon/free/png-256/minus-146-475070.png")'
  }
}

function normalImg5(){
  return{
    content: 'url("https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png")'
  }
}

function openStyles() {
  return {
    backgroundColor: "white",
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
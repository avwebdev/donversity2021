/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Event from "./Event";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (
        <Fragment>
            <Navbar></Navbar>
            <div id={styles.container}>
                <div id={styles.dayBanner}>
                    <h3>Monday</h3>
                    <h2>Better Together through Art & Music</h2>
                </div>
                <h3>
                    Today's Highlights
                    <FontAwesomeIcon icon={["fas", "star"]} style={starStyle}></FontAwesomeIcon>
                </h3>

                <div id={styles.highlights}>
                    <Event highlight={true} ></Event>
                    <Event highlight={true} ></Event>
                </div>

                <h3>
                    <div className="btn-group">
                        <button type="button" className="btn dropdown-toggle btn-lg" data-bs-toggle="dropdown" aria-expanded="false" id={styles.sectionChooser}>
                            Today's Events
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Monday</a></li>
                            <li><a className="dropdown-item" href="#">Tuesday</a></li>
                            <li><a className="dropdown-item" href="#">Wednesday</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">Highlights</a></li>
                        </ul>
                    </div>
                </h3>

                <div id={styles.events}>
                    <Event></Event>
                    <Event></Event>
                    <Event></Event>
                    <Event></Event>
                </div>
            </div>
        </Fragment>
    )
}

const starStyle = {
    color: "gold",
    marginLeft: "10px"
}
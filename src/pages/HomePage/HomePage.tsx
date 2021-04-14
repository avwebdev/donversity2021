/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Highlight from "./Highlight";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (
        <Fragment>
            <Navbar></Navbar>
            <div id={styles.container}>
                <h3>
                    Today's Highlights
                    <FontAwesomeIcon icon={["fas", "star"]} style={starStyle}></FontAwesomeIcon>
                </h3>

                <div id={styles.highlights}>
                    <Highlight></Highlight>
                    <Highlight></Highlight>
                </div>

                <h3>
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                </h3>
            </div>
        </Fragment>
    )
}

const starStyle = {
    color: "gold",
    marginLeft: "10px"
}
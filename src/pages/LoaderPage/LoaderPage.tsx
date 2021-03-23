import { Fragment, useState } from "react";
import "./LoaderPage.scss";
import styles from "./LoaderPage.module.css";

export default function LoaderPage() {

    const [pyroActivated, setPyroActivated] = useState(false);
    let pyro: JSX.Element =
        <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
        </div>;

    if (!pyroActivated) {
        setTimeout(() => {
            setPyroActivated(true)
        }, 500);
        pyro = <div className="pyro"></div>
    }

    return (
        <Fragment>
            <i className="mdi mdi-loading mdi-spin" id={styles.spinner}></i>
            <div>
                {pyro}
            </div>
            <div id={styles.container}>
                <div>
                    <h1>Donversity</h1>
                    <h2>
                        <span id={styles.schoolName}>AVHS</span>
                        <span id={styles.year}>2021</span>
                    </h2>
                </div>
            </div>
            <div id={styles.loadingMessage}>
                Did you know: Amador Valley has 15 bathrooms?
                
            </div>
        </Fragment>
    );
}
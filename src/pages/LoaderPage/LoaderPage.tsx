import { Fragment, useState } from "react";
import "./LoaderPage.scss";
import styles from "./LoaderPage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faCircleNotch, faCog, faSpinner } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon icon={faCircleNotch} id={styles.spinner} spin></FontAwesomeIcon>
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
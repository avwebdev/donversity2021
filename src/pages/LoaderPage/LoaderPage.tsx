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
        }, 2000);
        pyro = <div className="pyro"></div>
    }

    return (
        <Fragment>
            <div>
                {pyro}
            </div>
            <div id={styles.container}>
                Welcome to donversity 2021!
            </div>
        </Fragment>
    );
}
import { Fragment, useState } from "react";
import "./LoaderPage.scss";
import styles from "./LoaderPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export function LoaderPage({ fadingOut }: any) {
  const [pyroActivated, setPyroActivated] = useState(false);
  let pyro: JSX.Element = (
    <div className="pyro">
      <div className="before"></div>
      <div className="after"></div>
    </div>
  );

  if (!pyroActivated) {
    setTimeout(() => {
      setPyroActivated(true);
    }, 500);
    pyro = <div className="pyro"></div>;
  }

  return (
    <Fragment>
      <FontAwesomeIcon
        icon={faCircleNotch}
        id={styles.spinner}
        spin
      ></FontAwesomeIcon>
      <div>{pyro}</div>
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

export function Overlay({ fadingOut, waitTime, fadeTime }: any) {
  const [waitingDone, setWaitingDone] = useState(false);
  if (fadingOut === true) {
    if (!waitingDone) {
      setTimeout(() => {
        setWaitingDone(true);
      }, waitTime);
    } else {
      const style = {
        opacity: "1",
        transition: `opacity ${fadeTime / 1000}s`,
      };
      return <div id={styles.overlay} style={style}></div>;
    }
  }
  return <div id={styles.overlay}></div>;
}

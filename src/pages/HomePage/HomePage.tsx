/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext } from "react";
import Event from "./Event";
import styles from "./HomePage.module.css";
import { DataContext } from "../../misc/DataContext";
import { ContentPage, ContentSection, ContentSections } from "../../types";

export default function HomePage() {
  const data = useContext(DataContext) as ContentSections;
  const today = new Date();
  let currentSection: ContentSection;

  if (today.getFullYear() === 2021 && today.getMonth() === 3) {
    switch (today.getDate()) {
      case 19:
        currentSection = data.monday;
        break;

      case 20:
        currentSection = data.tuesday;
        break;

      case 21:
        currentSection = data.wednesday;
        break;

      case 22:
        currentSection = data.thursday;
        break;

      case 23:
        currentSection = data.friday;
        break;

      default:
        currentSection = data.monday;
    }
  } else currentSection = data.monday;

  let highlights: ContentPage[] = [];
  const otherSections = [...currentSection.sections];
  for (let i = 0; i < otherSections.length; i++) {
    const page = otherSections[i];
    if (page.highlight === true) {
      highlights = highlights.concat(otherSections.splice(i, 1));
      i--;
    }
  }

  const highlightElements = highlights.map((highlight) => (
    <Event highlight={true} page={highlight} key={highlight.link}></Event>
  ));

  const otherElements = otherSections.map((page) => (
    <Event highlight={false} page={page} key={page.link}></Event>
  ));

  return (
    <Fragment>
      <div id={styles.container}>
        <div id={styles.dayBanner}>
          <h3>{currentSection.dayName}</h3>
          <h2>{currentSection.motto}</h2>
        </div>
        <h3>
          Today's Highlights
          <FontAwesomeIcon
            icon={["fas", "star"]}
            style={starStyle}
          ></FontAwesomeIcon>
        </h3>

        <div id={styles.highlights}>{highlightElements}</div>

        <h3>
          More Events
          <FontAwesomeIcon
            icon={["fas", "list-ul"]}
            style={bulletsIconStyle}
          ></FontAwesomeIcon>
        </h3>

        <div id={styles.events}>{otherElements}</div>
      </div>
    </Fragment>
  );
}

const starStyle = {
  color: "gold",
  marginLeft: "10px",
};

const bulletsIconStyle = {
  color: "purple",
  marginLeft: "10px",
};

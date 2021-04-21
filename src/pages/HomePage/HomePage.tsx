/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext, useState } from "react";
import Event from "./Event";
import styles from "./HomePage.module.css";
import { DataContext } from "../../misc/DataContext";
import { currentDay, currentDayIndex, days } from "../../misc/DayInfo";
import { ContentPage, ContentSection, ContentSections } from "../../types";
import { analytics } from "../../Store";
import { getMediaPrefix } from "../../utils/funcs";
import { Helmet } from "react-helmet";

export default function HomePage() {
  analytics?.logEvent("page_view", {
    page_title: "Home",
    page_location: "/",
  });

  const data = useContext(DataContext) as ContentSections;
  const [allEventsExpanded, setExpanded] = useState(false);

  const currentDaySections = data[currentDay] as ContentSection;
  const toggleSetExpanded = () => {
    setExpanded(!allEventsExpanded);
  };

  let highlights: ContentPage[] = [];
  const otherSections = [...currentDaySections.sections];
  for (let i = 0; i < otherSections.length; i++) {
    const page = otherSections[i];
    if (page.highlight === true) {
      highlights = highlights.concat(otherSections.splice(i, 1));
      i--;
    }
  }

  const highlightElements = highlights.map((highlight) => (
    <Event
      day={currentDay}
      highlight={true}
      page={highlight}
      key={highlight.link}
    ></Event>
  ));

  let otherElements: JSX.Element[] = [];

  if (otherSections.length > 0) {
    otherElements.push(<h5>From Today</h5>);

    otherElements = otherElements.concat(
      otherSections.map((page) => (
        <Event
          day={currentDay}
          highlight={false}
          page={page}
          key={page.link}
        ></Event>
      ))
    );
  }

  let unexpandedEventsGenerated = false;

  for (let i = currentDayIndex - 1; i >= 0; i--) {
    const dayData = data[days[i]] as ContentSection;
    if (dayData.sections.length > 0) {
      otherElements.push(<h5>From {dayData.dayName}</h5>);

      otherElements = otherElements.concat(
        dayData.sections.map((page) => (
          <Event
            day={days[i]}
            highlight={false}
            page={page}
            key={page.link}
          ></Event>
        ))
      );

      unexpandedEventsGenerated = true;
      if (!allEventsExpanded) break;
    }
  }

  if (allEventsExpanded || !unexpandedEventsGenerated) {
    for (let i = currentDayIndex + 1; i < days.length; i++) {
      const dayData = data[days[i]] as ContentSection;
      if (dayData.sections.length > 0) {
        otherElements.push(<h5>From {dayData.dayName} (Coming Soon!)</h5>);

        otherElements = otherElements.concat(
          dayData.sections.map((page) => (
            <Event
              day={days[i]}
              highlight={false}
              page={page}
              key={page.link}
            ></Event>
          ))
        );

        unexpandedEventsGenerated = true;
        if (!allEventsExpanded) break;
      }
    }
  }

  return (
    <Fragment>
      <Helmet>
        <title>Donversity 2021</title>
      </Helmet>
      <div id={styles.container}>
        <div
          id={styles.dayBanner}
          style={{
            backgroundImage: `url("${getMediaPrefix(currentDay + ".jpeg")}")`,
          }}
        >
          <h3>{data[currentDay].dayName}</h3>
          <h2>{data[currentDay].motto}</h2>
        </div>
        <h3>
          Today's Highlights
          <FontAwesomeIcon
            icon={["fas", "star"]}
            style={starStyle}
          ></FontAwesomeIcon>
        </h3>

        <div id={styles.highlights}>{highlightElements}</div>

        <h3 id={styles.moreEvents}>
          More Events
          <FontAwesomeIcon
            icon={["fas", "list-ul"]}
            style={bulletsIconStyle}
          ></FontAwesomeIcon>
        </h3>

        <div id={styles.events}>{otherElements}</div>

        <button
          id={styles.expandEvents}
          type="button"
          className="btn"
          onClick={toggleSetExpanded}
        >
          See {allEventsExpanded ? "less" : "all"} events
        </button>
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

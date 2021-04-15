/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext, useState } from "react";
import Event from "./Event";
import styles from "./HomePage.module.css";
import { DataContext } from "../../misc/DataContext";
import { ContentPage, ContentSection, ContentSections } from "../../types";

export default function HomePage() {
    const data = useContext(DataContext) as ContentSections;
    const [allEventsExpanded, setExpanded] = useState(false);
    const today = new Date();
    let currentDay: ContentSection;
    let currentDayIndex: number;

    const toggleSetExpanded = () => {
        setExpanded(!allEventsExpanded);
    }

    const dayOrder = [data.monday, data.tuesday, data.wednesday, data.thursday, data.friday];

    if (today.getFullYear() === 2021 && today.getMonth() === 3) {
        switch (today.getDate()) {
            case 19:
                currentDay = data.monday;
                currentDayIndex = 0;
                break;

            case 20:
                currentDay = data.tuesday;
                currentDayIndex = 1;
                break;

            case 21:
                currentDay = data.wednesday;
                currentDayIndex = 2;
                break;

            case 22:
                currentDay = data.thursday;
                currentDayIndex = 3;
                break;

            case 23:
                currentDay = data.friday;
                currentDayIndex = 4;
                break;

            default:
                currentDay = data.monday;
                currentDayIndex = 0;
        }
    } else {
        currentDay = data.monday;
        currentDayIndex = 0;
    }

    let highlights: ContentPage[] = [];
    const otherSections = [...currentDay.sections];
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

    let otherElements : JSX.Element[] = [];

    if (otherSections.length > 0) {
        otherElements.push(
            <h5>From {currentDay.dayName}</h5>
        );

        otherElements = otherElements.concat(otherSections.map((page) => (
            <Event highlight={false} page={page} key={page.link}></Event>
        )));
    }

    let unexpandedEventsGenerated = false;

    for (let i = currentDayIndex-1; i >= 0; i--) {
        if (dayOrder[i].sections.length>0) {
            otherElements.push(
                <h5>From {dayOrder[i].dayName}</h5>
            );
    
            otherElements = otherElements.concat(dayOrder[i].sections.map((page) => (
                <Event highlight={false} page={page} key={page.link}></Event>
            )));

            unexpandedEventsGenerated = true;
            if (!allEventsExpanded) break;
        }
    }


    if (allEventsExpanded || !unexpandedEventsGenerated) {
        for (let i = currentDayIndex+1; i < dayOrder.length; i++) {
            if (dayOrder[i].sections.length>0) {
                otherElements.push(
                    <h5>From {dayOrder[i].dayName} (Coming Soon!)</h5>
                );
        
                otherElements = otherElements.concat(dayOrder[i].sections.map((page) => (
                    <Event highlight={false} page={page} key={page.link}></Event>
                )));

                unexpandedEventsGenerated = true;
                if (!allEventsExpanded) break; 
            }
        }
    }

    return (
        <Fragment>
            <div id={styles.container}>
                <div id={styles.dayBanner}>
                    <h3>{currentDay.dayName}</h3>
                    <h2>{currentDay.motto}</h2>
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

                <button id={styles.expandEvents} type="button" className="btn btn-info" onClick={toggleSetExpanded}>See {allEventsExpanded ? "less" : "all"} events</button>
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

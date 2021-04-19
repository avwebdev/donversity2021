import { Fragment, useContext } from "react";
import { Redirect, useLocation, Link } from "react-router-dom";
import { DataContext } from "../../misc/DataContext";
import { isFuture } from "../../misc/DayContext";
import { ContentPage, ContentSection, ContentSections } from "../../types";
import RenderView from "./RenderView";
import styles from "./ViewPage.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function ViewPage() {
  const data = useContext(DataContext) as ContentSections;;
  const pathname = useLocation().pathname;

  const {currentPage, day} = getCurrentPage(pathname, data);

  if (!currentPage) {
    return <Redirect to="/"></Redirect>;
  }

  const future = isFuture(day as string);
  const formattedDay = day?.substring(0, 1).toUpperCase() as string + day?.substring(1) as string;

  const viewArr = RenderView(currentPage?.content);

  return (
    <Fragment>
      <div id={styles.container}>
        <h3>{currentPage.title}</h3>
        <h5>{currentPage.description}</h5>
        <h6>{currentPage.author ? `By ${currentPage.author}` : ""}</h6>
        {!future ? viewArr : <p id={styles.comingSoon}>
          This activity will be available on {formattedDay}. See you then!
          <FontAwesomeIcon icon={["fas", "calendar"]} style={calendarStyles}></FontAwesomeIcon>
        </p>}


        <h4 id={styles.toHome}>
          <Link to="/home">
            Back to home page.
          </Link>
        </h4>
      </div>
    </Fragment>
  );
}

function getCurrentPage(pathname: string, sections: ContentSections) {
  let currentPage: ContentPage | undefined = undefined;
  let currentDay: string | undefined = undefined;
  for (const key of Object.keys(sections)) {
    let section = sections[key];
    if (section.sections) {
      section = section as ContentSection;
      for (const page of section.sections) {
        if (page.link === pathname) {
          currentPage = page;
          currentDay = key;
          break;
        }
      }
    }
  }

  return {currentPage, day: currentDay};
}

const calendarStyles = {
  marginLeft: "10px",
  color: "purple"
}

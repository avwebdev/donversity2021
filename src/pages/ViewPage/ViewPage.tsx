import { Fragment, useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { DataContext } from "../../misc/DataContext";
import { ContentPage, ContentSection } from "../../types";
import RenderView from "./RenderView";
import styles from "./ViewPage.module.css";

export default function ViewPage() {
  const data = useContext(DataContext);
  const pathname = useLocation().pathname;

  const sections = Object.values(data) as ContentSection[];
  const currentPage = getCurrentPage(pathname, sections);

  if (!currentPage) {
    return <Redirect to="/"></Redirect>;
  }

  const viewArr = RenderView(currentPage?.content);

  return (
    <Fragment>
      <div id={styles.container}>
        <h3>{currentPage.title}</h3>
        <h5>{currentPage.description}</h5>
        <h6>{currentPage.author ? `By ${currentPage.author}` : ""}</h6>
        {viewArr}
      </div>
    </Fragment>
  );
}

function getCurrentPage(pathname: string, sections: ContentSection[]) {
  let currentPage: ContentPage | undefined = undefined;
  for (const section of sections) {
    if (section) {
      for (const page of section.sections) {
        if (page.link === pathname) {
          currentPage = page;
          break;
        }
      }
    }
  }

  return currentPage;
}

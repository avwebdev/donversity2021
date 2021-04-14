import { Fragment, useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { DataContext } from "../../misc/DataContext";
import { ContentPage } from "../../types";
import Navbar from "./../../components/Navbar/Navbar";
import RenderView from "./RenderView";
import styles from "./ViewPage.module.css";

export default function ViewPage() {
  const data = useContext(DataContext);
  const pathname = useLocation().pathname;

  const sections = Object.values(data) as ContentPage[][];
  const currentPage = getCurrentPage(pathname, sections);

  if (!currentPage) {
    return <Redirect to="/"></Redirect>;
  }

  const viewArr = RenderView(currentPage?.content);
  console.log(viewArr);

  return (
    <Fragment>
      <Navbar></Navbar>
      <div id={styles.container}>
        <h3>{currentPage.title}</h3>
        <h5>{currentPage.description}</h5>
        <h6>{currentPage.author ? `By ${currentPage.author}` : ""}</h6>
        {viewArr}
      </div>
    </Fragment>
  );
}

function getCurrentPage(pathname: string, sections: ContentPage[][]) {
  let currentPage: ContentPage | undefined = undefined;
  for (const section of sections) {
    if (section) {
      for (const page of section) {
        if (page.link === pathname) {
          currentPage = page;
          break;
        }
      }
    }
  }

  return currentPage;
}

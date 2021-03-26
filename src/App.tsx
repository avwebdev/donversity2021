import { Switch, Route } from "react-router";
import ViewPage from "./pages/ViewPage/ViewPage";
import { LoaderPage, Overlay } from "./pages/LoaderPage/LoaderPage";
import About from "./pages/AboutPage/AboutPage";
import VideoView from "./components/VideoView/VideoView";
import MarkdownView from "./components/MarkdownView/MarkdownView";
import { Fragment, useState } from "react";
import { load } from "js-yaml";

function App() {
  const [waitTime, fadeTime] = [3000, 500];
  const [data, setData] = useState({});
  const [fadingOut, setFadingOut] = useState(false);

  if (Object.keys(data).length === 0) {
    fetch("/content.yaml")
      .then((data) => data.text())
      .then((data) => load(data))
      .then((data) => {
        setFadingOut(true);
        setTimeout(() => {
          setData(data as object);
        }, waitTime + fadeTime);
      });

    return (
      <Fragment>
        <LoaderPage></LoaderPage>
        <Overlay
          fadingOut={fadingOut}
          waitTime={waitTime}
          fadeTime={fadeTime}
        ></Overlay>
      </Fragment>
    );
  }

  return (
    <Switch>
      <Route path="/home">
        <button type="button" className="btn btn-secondary">
          Home Page
        </button>
      </Route>
      <Route path="/view/:view">
        <ViewPage></ViewPage>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/load">
        <LoaderPage></LoaderPage>
      </Route>
      <Route path="/video-view">
        <VideoView
          description="This video showcases Mr. Butterfield in all his glory."
          youtubeUrl="https://www.youtube.com/embed/a5P62hp3znU"
        ></VideoView>
      </Route>
      <Route path="/md-view">
        <MarkdownView file="sample" />
      </Route>
    </Switch>
  );
}

export default App;

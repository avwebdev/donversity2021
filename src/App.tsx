import React from "react";
import { Switch, Route } from "react-router";
import ViewPage from "./pages/ViewPage/ViewPage";
import { LoaderPage, Overlay } from "./pages/LoaderPage/LoaderPage";
import About from "./pages/AboutPage/AboutPage";
import { Fragment, useState } from "react";
import { load } from "js-yaml";
import { DataContext } from "./misc/DataContext";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ClubsPage from "./pages/ClubsPage/ClubsPage";
import ClubPage from "./pages/ClubPage/ClubPage";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";

library.add(fas);

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
        <Helmet>
          <title>Donversity 2021</title>
        </Helmet>
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
    <DataContext.Provider value={data}>
      <Navbar />
      <Switch>
        <Route path="/view/:view">
          <ViewPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/club-fair/:club">
          <ClubPage />
        </Route>
        <Route path="/club-fair">
          <ClubsPage />
        </Route>
        <Route path="/load">
          <LoaderPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </DataContext.Provider>
  );
}

export default App;

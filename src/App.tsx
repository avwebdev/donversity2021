import { Switch, Route } from 'react-router';
import ViewPage from "./pages/ViewPage/ViewPage";
import LoadPage from "./pages/LoaderPage/LoaderPage";
import About from "./pages/AboutPage/AboutPage";
import VideoView from "./components/VideoView/VideoView";
import LinksView from "./components/LinksView/LinksView";
// import logo from './logo.svg';

function App() {
  return (
    <Switch>
      <Route path="/home">
        <button type="button" className="btn btn-secondary">Home Page</button>
      </Route>
      <Route path="/view/:view">
        <ViewPage></ViewPage>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/load">
        <LoadPage></LoadPage>
      </Route>
      <Route path="/video-view">
        <VideoView  description="This video showcases Mr. Butterfield in all his glory." author ="Keerthi Kalyaan" youtubeUrl="https://www.youtube.com/embed/a5P62hp3znU"></VideoView>
      </Route>
      <Route path="/link-view">
        <LinksView  description="This video showcases Mr. Butterfield in all his glory." hook ="Keerthi Kalyaan" youtubeUrl="https://www.youtube.com/embed/a5P62hp3znU"></LinksView>
      </Route>
    </Switch>
  );
}

export default App;

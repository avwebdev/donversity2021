import { Switch, Route } from 'react-router';
import ViewPage from "./pages/ViewPage/ViewPage";
import logo from './logo.svg';

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
        About Page
      </Route>
    </Switch>
  );
}

export default App;

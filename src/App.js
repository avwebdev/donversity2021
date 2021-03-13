import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/homepage';

function App() {
  return (
    <Switch>
      <Route path="/">
        <HomePage></HomePage>
      </Route>
      <Route path="/about">
        About Page
      </Route>
    </Switch>
  );
}

export default App;

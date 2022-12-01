import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Items from './pages/Items';
import Item from './components/Item';
import NavbarHeader from './components/NavbarHeader';
import LandingPage from './pages/LandingPage';
import About from './pages/About';

function App() {

  return (
    <div>
      <NavbarHeader />
      <Switch>
        <Route exact path='/'>
          <Redirect to={'/welcome'} />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route exact path='/items'>
          <Items />
        </Route>
        <Route path='/items/:id'>
          <Item />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path="/*">
          <div>Error Page Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

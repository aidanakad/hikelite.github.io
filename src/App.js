import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import ForTourist from './Components/ForTourist'
import AboutUs from './Components/AboutUs'
import GuideInfo from './Components/ForTourist/GuideInfo'
import NotFound from './Components/Navigation/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter basename={window.location.pathname||''}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/guides" component={ForTourist} exact/>
          <Route path="/guides/:id" component={GuideInfo} exact/>
          <Route path="/about-us" component={AboutUs} exact/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

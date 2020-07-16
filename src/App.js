import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import ForTourist from './Components/ForTourist'
import AboutUs from './Components/AboutUs'
import NotFound from './Components/Navigation/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/guides/:id" component={ForTourist} exact/>
          <Route path="/about-us" component={AboutUs} exact/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

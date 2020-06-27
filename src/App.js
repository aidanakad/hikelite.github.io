import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import Login from './Components/Authorisation/Login'
import Signin from './Components/Authorisation/Signin'
import ForTourist from './Components/ForTourist'
import ForGuide from './Components/ForGuide'
import AboutUs from './Components/AboutUs'
import NotFound from './Components/Navigation/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signin" component={Signin} exact/>
          <Route path="/for-tourist" component={ForTourist} exact/>
          <Route path="/for-guide" component={ForGuide} exact/>
          <Route path="/about-us" component={AboutUs} exact/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

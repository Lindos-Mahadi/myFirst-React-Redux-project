import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';


const App = () =>{
  return(
    <React.Fragment>
      <HomeContainer />
    </React.Fragment>
  );
};

export default App;
import React, { Component } from 'react';
import Links from './Components/links';
import {NavLink} from 'react-router-dom';
import AppNavbar from './Components/appnavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import AddNewStudent from './Components/add-student';
import StudentsList from './Components/studentslist';

class App extends Component {
 
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        <AppNavbar/> 
        <AddNewStudent/>
        <Links/> 
            

      </div>
    </Provider>
    );
  }
}

export default App;

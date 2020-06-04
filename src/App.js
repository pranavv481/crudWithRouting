import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/core/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import Users from './components/user/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={Users} />
          <Route component={NotFound} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Import Local Dependencies
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Read from './components/read';
import Create from './components/create';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      // Allow Local Routing
      <Router>
        <div className="App">
          {/* Create Nav Bar */}
          <Navbar bg="primary" variant="dark">
            <Nav className="me-auto">
              {/* Create Links on the Navigation Bar to Components */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Navbar>
          {/* Switch Statement for Navigation */}
          <Switch>
            {/* Route to Footer Component */}
            <Route path="/footer">
              <Header />
            </Route>
            {/* Route to Header Component */}
            <Route path="/header">
              <Footer />
            </Route>
            {/* Route to Create Component */}
            <Route path="/create">
              <Create />
            </Route>
            {/* Route to Read Component */}
            <Route path="/read">
              <Read />
            </Route>
            {/* Route to Content Component */}
            <Route path="/">
              <Content />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

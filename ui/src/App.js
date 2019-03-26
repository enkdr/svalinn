// OLD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Routes from './Routes';
import Login from './containers/Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: true
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    });
  }

  render() {
    let landing;
    if (this.state.visibility) {
      landing = <h1>S V A L I N N</h1>;
    } else {
      landing = <Login />;
    }

    return (
      <div className='App'>
        <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
          <Link to='/' className='my-0 mr-md-auto font-weight-normal'>
            SVALINN
          </Link>
          <nav className='my-2 my-md-0 mr-md-3'>
            <Link className='p-2 text-dark' to='/home'>
              Home
            </Link>
            <a className='p-2 text-dark' href='#'>
              Enterprise
            </a>
            <a className='p-2 text-dark' href='#'>
              Support
            </a>
            <a className='p-2 text-dark' href='#'>
              Pricing
            </a>
          </nav>
          <Link to='/login'>Login</Link>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;

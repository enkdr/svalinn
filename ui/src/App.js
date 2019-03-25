import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import Login from './components/Login';

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
      <div className='app'>
        <small
          className='app-login-link font-weight-light'
          onClick={this.toggleVisibility}
        >
          Login
        </small>
        <header className='app-header'>{landing}</header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import "./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props);

    //connect the state to our two fields in the form by setting this.state.email and
    //this.state.password as the value in our input fields.
    //This means that when the state changes,
    //React will re-render these components with the updated value.
    this.state = {
      email: '',
      password: ''
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  //to have access to the this keyword inside handleChange we store the
  //reference to an anonymous function like so: handleChange = (event) => { }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className='Login container'>
        <form className='form-inline' onSubmit={this.handleSubmit}>
          <label className='sr-only' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='form-control mb-2 mr-sm-2'
            value={this.state.email}
            onChange={this.handleChange}
            autoFocus
          />
          <label className='sr-only' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='form-control mb-2 mr-sm-2'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            type='submit'
            className='btn btn-outline-primary mb-2'
            onClick={this.submitForm}
            disabled={!this.validateForm()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

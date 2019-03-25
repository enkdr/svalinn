import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      email: '',
      password: ''
    };

    this.state = this.initialState;
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form className='form-inline'>
          <label className='sr-only' htmlFor='email'>
            Email
          </label>
          <input
            type='text'
            className='form-control mb-2 mr-sm-2'
            id='email'
            placeholder='Email'
          />
          <label className='sr-only' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            className='form-control mb-2 mr-sm-2'
            id='password'
            placeholder='Password'
          />

          <button
            type='submit'
            className='btn btn-outline-primary mb-2'
            onClick={this.submitForm}
          >
            Submit
          </button>
        </form>
      </div>
      /* 
      <div>
        <form>
          <div className='form-row'>
            <div className='col-5'>
              <input
                type='email'
                className='form-control'
                id='email'
                value={email}
                placeholder='Email'
              />
            </div>
            <div className='col-5'>
              <input
                type='password'
                className='form-control'
                id='password'
                value={password}
                placeholder='Password'
              />
            </div>
            <div className='col-2 mb-2'>
              <input
                type='button'
                className='btn btn-outline-primary'
                value='Submit'
                onClick={this.submitForm}
              />
            </div>
          </div>
        </form>
      </div> */
    );
  }
}

export default LoginForm;

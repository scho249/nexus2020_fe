import React from 'react';

import './LoginForm.css';

export class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      name: event.target.name
    });
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className="LoginForm">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="LoginForm__field">
            <label className="LoginForm__label" htmlFor="email">Email Address</label>
            <input type="email" id="email" className="LoginForm__input" placehoder="Enter your email"
              name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="LoginForm__field">
            <label className="LoginForm__label" htmlFor="password">Password</label>
            <input type="password" id="password" className="LoginForm__input" placehoder="Enter your password"
              name="pasword" value={this.state.password} onChange={this.handleChange} />
          </div>
        </form>
      </div>
    );
  }

}

export default LoginForm;

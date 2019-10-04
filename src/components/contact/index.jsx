import React, { Component } from 'react';
import {
  ValidationForm,
  TextInput,
  TextInputGroup,
} from 'react-bootstrap4-form-validation';

import classNames from 'classnames/bind';
import css from './styles.css';

const cssBind = classNames.bind(css);

const bannerButton = cssBind({
  button: true,
  next: true,
  scrollly: true,
});

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      immediate: true,
      setFocusOnError: true,
      clearInputOnReset: false,
    };
  }

  handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
  };

  handleErrorSubmit = (e, formData, errorInputs) => {
    console.log(e, formData, inputs);
  };

  resetForm = () => {
    const formRef = this.formRef.current;
    formRef.resetValidationState(this.state.clearInputOnReset);
  };

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const jsonBody = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };
    console.log(jsonBody);
    fetch('http://127.0.0.1:8000/contacts', {
      method: 'POST',
      body: JSON.stringify(jsonBody),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }); /* .then(function(response){
          switch(response.status) {
              case 500:
                  alert('500');
                  break;
              case 400:
                  alert('400');
                  break;
              case 201:
                  alert('201');
                  break;
              default:
                  break;
          }
      }).catch(err => {

      });
      console.log(JSON.stringify(jsonBody)); */
  }

  render() {
    return (
      <div>
        <div className="container">
          <form>
            <div className="form-group">
              <ValidationForm
                onSubmit={this.handleSubmit}
                onErrorSubmit={this.handleErrorSubmit}
                ref={this.formRef}
                immediate={this.state.immediate}
                setFocusOnError={this.state.setFocusOnError}
                defaultErrorMessage={{ required: 'Please enter something.' }}
              >
                <div className="form-group">
                  <label htmlFor="fullName">Name</label>
                  <TextInputGroup
                    name="fullName"
                    id="fullName"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <TextInputGroup
                    name="email"
                    id="email"
                    type="email"
                    placeholder="E-Mail"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    successMessage="Looks good!"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullName">Subject</label>
                  <TextInputGroup
                    name="subject"
                    id="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    value={this.state.subject}
                    onChange={e => this.setState({ subject: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullName">Message</label>
                  <TextInput
                    multiline required
                    name="message"
                    id="message"
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className={bannerButton}
                  onClick={e => this.handleFormSubmit(e)}
                >
                  Submit
                </button>
                <button>Submit</button>
                <button
                  type="button"
                  onClick={() => this.resetForm()}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className={bannerButton}
                  onClick={e => this.handleFormSubmit(e)}
                >
                  Submit
                </button>
              </ValidationForm>
              <input
                type="email"
                ref="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Subject</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Subject"
                value={this.state.subject}
                onChange={e => this.setState({ subject: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                type="text"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              />
            </div>
            <a
              type="submit"
              href="#one"
              className={bannerButton}
              onClick={e => this.handleFormSubmit(e)}
            >
              Submit
            </a>
          </form>
        </div>
      </div>
    );
  }
}

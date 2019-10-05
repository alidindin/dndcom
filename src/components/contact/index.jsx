import React, { Component } from 'react';
import {
  ValidationForm,
  TextInput,
  TextInputGroup,
} from 'react-bootstrap4-form-validation';

import classNames from 'classnames/bind';

import css from './styles.css';
import custom from './custom.css';

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
      emailSent: false,
    };
  }

  handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
    fetch('http://127.0.0.1:8000/contacts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      emailSent: true,
    });
    setTimeout(() => {
      this.setState({
        emailSent: false,
      });
    }, 3000);
    this.resetForm();
  };

  handleErrorSubmit = (e, formData, errorInputs) => {
    console.log(e, formData, inputs);
  };

  resetForm = () => {
    const formRef = this.formRef.current;
    formRef.resetValidationState(this.state.clearInputOnReset);
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="alert alert-success" role="alert" style={{ display: this.state.emailSent ? 'block' : 'none' }}>
            Your message has been successfully sent and forwarded to me.
          </div>
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
                <label htmlFor="name">Name</label>
                <TextInputGroup
                  name="name"
                  id="name"
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
                  successMessage="Looks good!"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
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
                  multiline
                  required
                  name="message"
                  id="message"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                  rows="5"
                />
              </div>
              <div className={custom.marginTop}>
                <button type="button" className={custom.marginRight} onClick={() => this.resetForm()}>
                  Reset
                </button>
                <button type="submit" className={bannerButton}>
                  Submit
                </button>
              </div>
            </ValidationForm>
          </div>
        </div>
      </div>
    );
  }
}

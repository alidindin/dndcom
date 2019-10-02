import React, { Component } from 'react';
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

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

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
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="email"
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

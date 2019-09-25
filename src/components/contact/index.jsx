import React from 'react';
import classNames from 'classnames/bind';
import css from './styles.css';

const cssBind = classNames.bind(css);

const bannerButton = cssBind({
  button: true,
  next: true,
  scrollly: true,
});

const Contact = () => {
  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Subject</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              type="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            />
          </div>
          <a type="submit" href="#one" className={bannerButton}>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;

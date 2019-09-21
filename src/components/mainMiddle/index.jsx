import React from 'react';

import classNames from 'classnames/bind';

import main from './main.css';

const mainBind = classNames.bind(main);

const MainMiddle = () => {
  const box = mainBind({
    container: true,
    alt: true,
    box: true,
  });

  const featureLeft = mainBind({
    feature: true,
    left: true,
  });

  const featureRight = mainBind({
    feature: true,
    right: true,
  });

  const header = mainBind({
    major: true,
    container: true,
    medium: true,
  });

  return (
    <div>
      <header className={header}>
        <h2>
          We conduct experiments that
          <br />
          may or may not seriously
          <br />
          break the universe
        </h2>
      </header>
      <div className={box}>
        <section className={featureLeft}>
          <a href="#" className="image icon solid fa-signal">
            <img src="images/pic01.jpg" alt="" />
          </a>
          <div className={main.content}>
            <h3>The First Thing</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
        <section className={featureRight}>
          <a href="#" className="image icon solid fa-code">
            <img src="images/pic02.jpg" alt="" />
          </a>
          <div className={main.content}>
            <h3>The Second Thing</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
        <section className={featureLeft}>
          <a href="#" className="image icon solid fa-mobile-alt">
            <img src="images/pic03.jpg" alt="" />
          </a>
          <div className={main.content}>
            <h3>The Third Thing</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainMiddle;

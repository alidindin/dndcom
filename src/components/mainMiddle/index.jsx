import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import main from './main.css';
import Pic1 from './images/pic01.jpg';

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

  const Image1 = mainBind({
    image: true,
    icon: true,
    solid: true,
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
          <a href="#" className={Image1}>
            <FontAwesomeIcon icon="code" size="lg" />
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
          <a href="#" className={Image1}>
            <FontAwesomeIcon icon="pencil-ruler" />
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
          <a href="#" className={Image1}>
            <FontAwesomeIcon icon="pencil-ruler" />
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

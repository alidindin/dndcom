import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './banner.scss';
import css from './styles.css';
import main from './main.css';

const cx = classNames.bind(main);
const cxx = classNames.bind(styles);

const Banner = () => {
  const banner = cxx({
    banner: true,
    major: true,
  });

  const wrapper = cxx({
    wrapper: true,
    inner: true,
  });

  const bannerButton = cxx({
    button: true,
    next: true,
    scrollly: true,
  });

  const box = cx({
    container: true,
    alt: true,
    box: true,
  });

  const featureLeft = cx({
    feature: true,
    left: true,
  });

  const featureRight = cx({
    feature: true,
    right: true,
  });

  const image = cx({
    image: true,
  });

  const content = cx({
    feature: true,
    featureContent: true,
  });

  const header = cx({
    major: true,
    container: true,
    medium: true,
  });

  return (
    <div>
      <section id={main.banner} className={main.major}>
        <div className={main.inner}>
          <header className={main.major}>
            <h1>Hi, im Ali. I create digital experiences!</h1>
          </header>
          <div className={main.content}>
            <p>Ich Studiere Interaktives Medien Design am Mediencampus Dieburg / h_da Darmstadt.<br/>
            </p>
            <ul className={main.actions}>
              <li><a href="#one" className={bannerButton}>Los geht's!</a></li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.hero}>
        <div className={styles.diagonalHeroBg}>
          <div className={styles.stars}>
            <div className={styles.small}></div>
            <div className={styles.medium}></div>
            <div className={styles.big}></div>
          </div>
        </div>
      </div>
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

export default Banner;

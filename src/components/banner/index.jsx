import React from 'react';

import classNames from 'classnames/bind';

import styles from './banner.scss';
import css from './styles.css';

const cssBind = classNames.bind(css);

const Banner = () => {
  const bannerButton = cssBind({
    button: true,
    next: true,
    scrollly: true,
  });
  return (
    <div>
      <div className={styles.hero}>
        <div className="container">
        <section id={css.banner} className={css.major}>
          <div className={css.inner}>
            <header className={css.major}>
              <h1>Hi, im Ali. I create digital experiences!</h1>
            </header>
            <div className={css.content}>
              <p>
                Ich Studiere Interaktives Medien Design am Mediencampus Dieburg / h_da Darmstadt.
                <br />
              </p>
              <ul className={css.actions}>
                <li>
                  <a href="#one" className={bannerButton}>Los geht's!</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        </div>
        <div className={styles.diagonalHeroBg}>
          <div className={styles.stars}>
            <div className={styles.small}></div>
            <div className={styles.medium}></div>
            <div className={styles.big}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

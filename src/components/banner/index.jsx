import React from 'react';
import styles from './banner.scss';

import styles2 from './main.css';

import classNames from "classnames/bind";
let cx = classNames.bind(styles2);

const Banner = () => {

  let banner = cx({
    banner: true,
    major: true
  });

  let wrapper = cx({
    wrapper: true,
    inner: true
  });



  return (
    <div>
      <div className={styles.hero}>
        <div className={banner}>
          <div className={wrapper}>
            <header className={styles2.major}>
              <h1>Hi, im Ali. I create digital experiences!</h1>
            </header>
            <div className={styles2.content}>
              <p>
                Ich Studiere Interaktives Medien Design am Mediencampus Dieburg
                / h_da Darmstadt.
                <br />
              </p>
                  <a href="#one" className={styles2.button + ' ' + styles2.next}>Los gehts!</a>
            </div>
          </div>
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

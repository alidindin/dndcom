import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './banner.scss';
import styles2 from './main.css';

const cx = classNames.bind(styles2);

const Banner = () => {
  const banner = cx({
    banner: true,
    major: true,
  });

  const wrapper = cx({
    wrapper: true,
    inner: true,
  });

  const box = cx({
    containerBanner: true,
    box: true,
  });

  const featureLeft = cx({
    feature: true,
    featureLeft: true,
  });

  const image = cx({
    image: true,
  });

  const content = cx({
    feature: true,
    featureContent: true,
  });

  return (
    <div>
      <div className={styles.hero}>
        <div className={banner}>
          <div className={wrapper}>
            <header className={styles2.major}>
              <h1>Hi, im Ali. I create digital experiences!</h1>
            </header>
            <div className={content}>
              <p>
                Ich Studiere Interaktives Medien Design am Mediencampus Dieburg
                / h_da Darmstadt.
                <br />
              </p>
              <a href="#one" className={styles2.button + ' ' + styles2.next}>
                <Link to="/portfolio/">Portfolio</Link>
              </a>
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

      <div className={box}>
        <section className={featureLeft}>
          <a href="#" className={image}>
            <img src="images/pic01.jpg" alt="" />
          </a>
          <div className={styles2.content}>
            <h3>The First Thing</h3>
            <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat
              mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;

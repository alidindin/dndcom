import React from 'react';
import styles from '../../sass/main.scss';
import banner from './banner.scss';
import Footer from '../footer/index';

const Portfolio = () => {
  return (
    <div id="main">
      <div className={banner.hero}>
        <section id="one" className={styles.tiles}>
          <article>
            <header className={styles.major}>
              <h3>
                <a href="assets/views/malie.html" className={styles.link}>
                  Malie
                </a>
              </h3>
              <p>Ambience intelligence</p>
            </header>
            <div className={banner.stars}>
              <div className={banner.small}></div>
              <div className={banner.medium}></div>
              <div className={banner.big}></div>
            </div>
          </article>
          <article>
            <header className={styles.major}>
              <h3>
                <a href="assets/views/theexplorer.html" className={styles.link}>
                  The Explorer / Goci
                </a>
              </h3>
              <p>Virtual reality / Mixed reality</p>
            </header>
            <div className={banner.stars}>
              <div className={banner.small}></div>
              <div className={banner.medium}></div>
              <div className={banner.big}></div>
            </div>
          </article>
          <article>
            <header className={styles.major}>
              <h3>
                <a href="assets/views/toolstream.html" className={styles.link}>
                  Tool Stream
                </a>
              </h3>
              <p>Internet of things</p>
            </header>
            <div className={banner.stars}>
              <div className={banner.small}></div>
              <div className={banner.medium}></div>
              <div className={banner.big}></div>
            </div>
          </article>
          <article>
            <header className={styles.major}>
              <h3>
                <a href="assets/views/joni.html" className={styles.link}>
                  Joni
                </a>
              </h3>
              <p>Website</p>
            </header>
            <div className={banner.stars}>
              <div className={banner.small}></div>
              <div className={banner.medium}></div>
              <div className={banner.big}></div>
            </div>
          </article>
          <article>
            <header className={styles.major}>
              <h3>
                <a href="assets/views/ribbonstrat.html" className={styles.link}>
                  RibbonStrat
                </a>
              </h3>
              <p>Physical Interaction</p>
            </header>
            <div className={banner.stars}>
              <div className={banner.small}></div>
              <div className={banner.medium}></div>
              <div className={banner.big}></div>
            </div>
          </article>
          <article>
            <header className={styles.major}>
              <h3>
                <a
                  href="assets/views/installation.html"
                  className={styles.link}>
                  The Growing
                </a>
              </h3>
              <p>interaktive Installation </p>
            </header>
            <div className={banner.stars}>
              <div className={banner.small}></div>
              <div className={banner.medium}></div>
              <div className={banner.big}></div>
            </div>
          </article>
        </section>
        <section id="two">
          <div className={styles.inner}>
            <header className={styles.major}>
              <h2>Wer ist dieser Ali ?</h2>
            </header>
            <p></p>
            <ul className={styles.actions}>
              <li>
                <a
                  href="assets/views/about.html"
                  className={styles.button + ' ' + styles.next}
                >
                  Erfahre mehr...
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

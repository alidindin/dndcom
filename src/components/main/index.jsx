import React from 'react';
import styles from '../../sass/main.scss';
import custom from './custom.css';

import Banner from '../banner';
import Navbar from '../navbar';

const Index = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <div id="main">
        <section id="one" className={styles.tiles}>
          <article>
            <span className={styles.image}></span>
            <header className={styles.major}>
              <h3>
                <a href="assets/views/malie.html" className={styles.link}>
                  Malie
                </a>
              </h3>
              <p>Ambience intelligence</p>
            </header>
          </article>
          <article>
            <span className={styles.image}></span>
            <header className={styles.major}>
              <h3>
                <a href="assets/views/theexplorer.html" className={styles.link}>
                  The Explorer / Goci
                </a>
              </h3>
              <p>Virtual reality / Mixed reality</p>
            </header>
          </article>
          <article>
            <span className={styles.image}></span>
            <header className={styles.major}>
              <h3>
                <a href="assets/views/toolstream.html" className={styles.link}>
                  Tool Stream
                </a>
              </h3>
              <p>Internet of things</p>
            </header>
          </article>
          <article>
            <span className={styles.image}></span>
            <header className="major">
              <h3>
                <a href="assets/views/joni.html" className={styles.link}>
                  Joni
                </a>
              </h3>
              <p>Website</p>
            </header>
          </article>
          <article>
            <span className={styles.image}></span>
            <header className="major">
              <h3>
                <a href="assets/views/ribbonstrat.html" className={styles.link}>
                  RibbonStrat
                </a>
              </h3>
              <p>Physical Interaction</p>
            </header>
          </article>
          <article>
            <span className={styles.image}></span>
            <header className={styles.major}>
              <h3>
                <a
                  href="assets/views/installation.html"
                  className={styles.link}
                >
                  The Growing
                </a>
              </h3>
              <p>interaktive Installation </p>
            </header>
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
    </div>
  );
};

export default Index;

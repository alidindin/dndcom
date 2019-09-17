import React, { Component } from 'react';
import styles from '../../sass/main.scss';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <header id="header" className={styles.alt}>
            <a href="index.html" className={styles.logo}>
              <strong>Ali Din Din</strong>
            </a>
            <nav>
              <a href="#menu">Menu</a>
            </nav>
          </header>

          <nav id="menu">
            <ul className={styles.links}>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="assets/views/malie.html">Malie</a>
              </li>
              <li>
                <a href="assets/views/theexplorer.html">The Explorer</a>
              </li>
              <li>
                <a href="assets/views/toolstream.html">Tool Stream</a>
              </li>
              <li>
                <a href="assets/views/joni.html">Joni</a>
              </li>
              <li>
                <a href="assets/views/ribbonstrat.html">RibbonStrat</a>
              </li>
              <li>
                <a href="assets/views/installation.html">
                  Interactive Installation
                </a>
              </li>
            </ul>
            <ul className={styles.actions}>
              <li>
                <a href="assets/views/about.html" className={styles.button}>
                  Wer ist Ali ?
                </a>
              </li>
            </ul>
          </nav>
          <section id="banner" className={styles.major}>
            <div className={styles.inner}>
              <header className={styles.major}>
                <h1>Hi, im Ali. I create digital experiences!</h1>
              </header>
              <div className={styles.content}>
                <p>
                  Ich Studiere Interaktives Medien Design am Mediencampus
                  Dieburg / h_da Darmstadt.
                  <br />
                </p>
                <ul className={styles.actions}>
                  <li>
                    <a
                      href="#one"
                      className={styles.button + ' ' + styles.next}
                    >
                      Los geht's!
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Nav;

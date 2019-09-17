import React from 'react';
import styles from './banner.scss';
import styles2 from '../../sass/main.scss';

const Banner = () => {
  return (
    <div>
      <div className={styles.hero}>
        <section id="banner" className={styles2.major}>
          <div className={styles2.inner}>
            <header className={styles.major}>
              <h1>Hi, im Ali. I create digital experiences!</h1>
            </header>
            <div className={styles2.content}>
              <p>
                Ich Studiere Interaktives Medien Design am Mediencampus Dieburg
                / h_da Darmstadt.
                <br />
              </p>
              <ul className={styles.actions}>
                <li>
                  <a
                    href="#one"
                    className={styles2.button + ' ' + styles2.next}
                  >
                    {' '}
                    Los gehts!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
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

import React from 'react';
import styles from '../../sass/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.inner}>
        <ul className={styles.icons}>
          <li>
            <a
              href="https://www.linkedin.com/in/alidindin/"
              className="icon alt fa-linkedin"
            >
              <span className={styles.label}>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/alidnd34/"
              className="icon alt fa-instagram"
            >
              <span className={styles.label}>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/alidnd"
              className="icon alt fa-soundcloud"
            >
              <span className={styles.label}>Soundcloud</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:alidindin@icloud.com"
              className="icon alt fa-envelope"
            >
              <span className={styles.label}>Mail</span>
            </a>
          </li>
        </ul>
        <ul className={styles.copyright}>
          <li>&copy; 2020</li>
          <li>
            <a href="https://alidnd.com">alidnd.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(
  () => (
    <footer className={styles.footer}>
      <div className={styles.title}>Business Card Maker</div>
      <div className={styles.right}>copyrightⓒ 2021 All rights reserved by lemonGinger</div>
    </footer>
  )
);

export default Footer;

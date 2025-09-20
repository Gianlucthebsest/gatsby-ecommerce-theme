import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <img
        src="/company-logo.png"
        alt="Company Logo"
        width={127}
        height={24}
        className={styles.logo}
      />
    </div>
  );
};

export default Brand;

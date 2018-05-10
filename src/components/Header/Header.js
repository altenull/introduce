// @flow
import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>
        <span>H</span>
        <span>e</span>
        <span>o</span>
        <span>n</span>
      </div>
      <div className={cx('title', 'bottom')}>
        <span>Y</span>
        <span>o</span>
        <span>u</span>
        <span>n</span>
        <span>g</span>
      </div>
      <div className={cx('introduction-container')}>
        <div className={cx('about-text')}>
          ABOUT
        </div>
        <div className={cx('introduction')}>
          <p>
            I'm working on <strong>Front-end</strong> side (16th April).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
import React from 'react';
import styles from './Spacer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Spacer = () => {
  return (
    <div className={cx('spacer')}>
    </div>
  );
}

export default Spacer;
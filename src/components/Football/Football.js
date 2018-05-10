import React from 'react';
import styles from './Football.scss';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const cx = classNames.bind(styles);

const StudentItem = ({imgURL}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('info-container')}>
        <div className={cx('info')}>
          <ScrollAnimation
            duration={.8}
            animateIn='fadeInUp'
            animateOnce={true}
          >
            <span className={cx('english-name')}>englishname</span>
          </ScrollAnimation>
          <ScrollAnimation
            duration={.8}
            animateIn='slideInUp'
            animateOnce={true}
          >
            <span className={cx('period')}>period</span>
          </ScrollAnimation>
        </div>
        <img src={imgURL} alt="haha" />
      </div>
    </div>
  );
}

export default StudentItem;
import React from 'react';
import styles from './Magnet.scss';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const cx = classNames.bind(styles);

const Magnet = () => {
  const mainImg = require('images/magnet01.jpeg');

  return (
    <div className={cx('wrapper')}>
      <div className={cx('info-container-reverse')}>
        <ScrollAnimation
          duration={1.2}
          animateIn='rubberBand'
          animateOnce={true}
        >
          <img src={mainImg} alt="magnet" onClick={() => window.open(mainImg)}/>
        </ScrollAnimation>
        <div className={cx('info-reverse')}>
          <ScrollAnimation
            duration={1}
            animateIn='fadeInUp'
            animateOnce={true}
          >
            <span className={cx('english-name-reverse')}>Collect Magnet</span>
          </ScrollAnimation>
          <ScrollAnimation
            duration={1}
            animateIn='slideInUp'
            animateOnce={true}
          >
            <span className={cx('korean-name-reverse')}>자석 모으기</span>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Magnet;

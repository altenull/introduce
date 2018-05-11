import React from 'react';
import styles from './Football.scss';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const cx = classNames.bind(styles);

class Football extends React.Component {
  state = {
    index: 0
  };

  imageList = [
    require('images/barca02.jpeg'),
    require('images/dortmund01.jpeg'),
    require('images/chealsea02.jpeg'),
    require('images/muchen01.jpeg'),
    require('images/osna01.jpeg'),
    require('images/barca03.jpeg'),
    require('images/chealsea03.jpeg'),
    require('images/dortmund02.jpeg'),
    require('images/paris01.jpeg')
  ];

  handleTimer = () => {
    this.setState({
      index: (this.state.index + 1) % 9
    });
  };

  componentDidMount() {
    const { handleTimer } = this;

    setInterval(() => {
      handleTimer();
    }, 3000);
  }

  render() {
    const { index } = this.state;
    const { imageList } = this;
    const mainImg = imageList[index];

    return (
      <React.Fragment>
        <div className={cx('wrapper')}>
          <div className={cx('info-container')}>
            <div className={cx('info')}>
              <ScrollAnimation
                duration={1}
                animateIn='fadeInUp'
                animateOnce={true}
              >
                <span className={cx('english-name')}>Football</span>
              </ScrollAnimation>
              <ScrollAnimation
                duration={1}
                animateIn='slideInUp'
                animateOnce={true}
              >
                <span className={cx('korean-name')}>축구</span>
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              duration={1.2}
              animateIn='tada'
              animateOnce={true}
            >
              <img src={mainImg} alt="main-image"/>
            </ScrollAnimation>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Football;
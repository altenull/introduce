import React, { type Node } from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/Header';
import Football from 'components/Football';

const cx = classNames.bind(styles);

const PageTemplate = () => {
  return (
    <div className={cx('page')}>
      <div className={cx('background-text-top')}>HEONYOUNG</div>
      <div className={cx('background-text-bottom')}>헌영</div>
      <div className={cx('template')}>
        <Header />
        <Football />
        <main>
          ㅎㅎㅎ
          <br />
          ㅎㅎㅎ
          <br />
          ㅎㅎㅎ
          <br />ㅎㅎㅎ
          <br />ㅎㅎㅎ
          <br />
          ㅎㅎㅎ
          <br />
          ㅎㅎㅎ
          <br />
          ㅎㅎㅎ
          <br />ㅎㅎㅎ
          <br />
          ㅎㅎㅎ
          <br />




        </main>
      </div>
    </div>
  );
}

export default PageTemplate;
import React, { useEffect } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { Button } from 'antd-mobile';
import styles from './index.less';

function HomePage(props) {
  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'home/getListHttp',
      payload: {},
    });
  });
  const { data = [] } = props;

  const dataNode = data.map(item => {
    const { id, punchline, setup } = item;
    return (
      <div key={id}>
        {id}~{punchline}-{setup}
      </div>
    );
  });

  const path = num => {
    // console.log(num);
    let { location: { pathname } = {} } = history;
    // console.log(pathname);
    // window.location.href = window.location.href + 'login';
    history.push('/login');
  };

  return (
    <div className={styles.lifeContainer}>
      这是life <div>{dataNode}</div>
      <Button
        type="primary"
        onClick={() => {
          path('2');
        }}
      >
        primary
      </Button>
      <div className={styles.h1}>啊哈还大的发的SAD SD gsdfgd 鬼地方个</div>
      <div className={styles.h2}>啊哈还大的发的SAD SD gsdfgd 鬼地方个</div>
      <div className={styles.h3}>啊哈还大的发的SAD SD gsdfgd 鬼地方个</div>
      <div className={styles.h4}>啊哈还大的发的SAD SD gsdfgd 鬼地方个</div>
    </div>
  );
}

const mapStateToProps = ({ life = {} }) => {
  //   console.log(home.data);
  return {
    data: life.data,
  };
};

export default connect(mapStateToProps)(HomePage);

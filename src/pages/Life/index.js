import React, { useEffect } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { Button } from 'antd-mobile';

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
    console.log(num);
    history.push('/login');
  };

  return (
    <div className="home-page">
      这是life <div>{dataNode}</div>
      <Button
        type="primary"
        onClick={() => {
          path('2');
        }}
      >
        primary
      </Button>
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

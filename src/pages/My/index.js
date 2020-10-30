import React, { useEffect } from 'react';
import { connect } from 'dva';

function HomePage(props) {
  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'my/getListHttp',
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

  return (
    <div className="home-page">
      这是my <div>{dataNode}</div>
    </div>
  );
}

const mapStateToProps = ({ my = {} }) => {
  //   console.log(home.data);
  return {
    data: my.data,
  };
};

export default connect(mapStateToProps)(HomePage);

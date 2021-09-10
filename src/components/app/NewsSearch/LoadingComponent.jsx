import React, { Component } from 'react';

export default class LoadingComponent extends Component {
  render() {
    return (
      <div style={{
        'width': '100vw',
        'height': '100vh',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
      }}>
        <h1>Loading...</h1>
        <img
          // eslint-disable-next-line max-len
          src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner"
          style={{ height: '200px', width: '200px' }}
        />
      </div>
    );
  }
}

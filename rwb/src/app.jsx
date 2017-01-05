import styles from './index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Using React, Webpack and Babel!</h1>
        <p>This React application works including <span className={styles.redBg}>module</span> local styles using variable interpolaation.</p>
        <p>Enjoy and stay cool. Works on live reload to!</p>
      </div>
    )
  }
}

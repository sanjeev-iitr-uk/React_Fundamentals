import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>Hello World Hii</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
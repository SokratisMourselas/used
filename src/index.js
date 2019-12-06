import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
import HomePage from './Components/HomePage/HomePage';

class Game extends React.Component {

  render() {
    return (
      <div>
        <NavigationMenu/>
        <HomePage/>
        </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

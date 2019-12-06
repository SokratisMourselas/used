import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
import HomePage from './Components/HomePage/HomePage';
import Card from './Components/Card/Card';

class Game extends React.Component {

  render() {
    return (
      <div>
        <NavigationMenu/>
        <HomePage/>
        <div style = {{marginLeft: "2em"}}>
          <Card/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

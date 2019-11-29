import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu'

class Game extends React.Component {

  render() {
    return (
      <div>
        <NavigationMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

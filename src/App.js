import React, { Component } from 'react';
import Timer from './Timer/components/Timer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero is-fullheight">
            <div className="hero-head">
                <div className="container">
                    <div className="tabs is-centered">
                        <ul>
                            <li><a>This is always at the top</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero-body">
                <Timer />
            </div>
            <div className="hero-foot">
                <div className="container">
                    <div className="tabs is-centered">
                        <ul>
                            <li><a>And this at the bottom</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

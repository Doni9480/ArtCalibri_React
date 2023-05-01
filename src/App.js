import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AppRouter/>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

  render()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import WalletCard from './componets/wallet/WalletCard';
import Set from './componets/set/Set';
import Calc from './componets/calc/Calc ';

class App extends Component{
  

  render() {

    return (
      <div className="App">
        
        <div className="App-header">
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>CALCULATOR</h1>
          </div>
          <WalletCard/>
        </div>
        
        <br/><br/><br/>

        <Set/>
        <br/><br/><br/>

        <Calc/>

      </div>
    );
  }
}

export default App;

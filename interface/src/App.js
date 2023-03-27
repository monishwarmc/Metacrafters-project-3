import React, { Component, useState } from 'react';
import './App.css';
import {ethers} from 'ethers';
import logo from './logo.png';

class App extends Component {
  

  render() {

    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);

    const accountChangedHandler = (newAccount) => {
      setDefaultAccount(newAccount);
      updateEthers();
    }

    const connectWalletHandler = () => {
      if (window.ethereum && window.ethereum.isMetaMask) {

        window.ethereum.request({ method: 'eth_requestAccounts'})
        .then(result => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
        })
        .catch(error => {
          setErrorMessage(error.message);
        
        });

      } else {
        console.log('Need to install MetaMask');
        setErrorMessage('Please install MetaMask browser extension to interact');
      }
    }

    
    const chainChangedHandler = () => {
      // reload the page to avoid any errors with chain change mid use of application
      window.location.reload();
    }

    return (
      <div className="App">
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CALCULATOR</h1>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className='user'>
          <br/>
          <button onClick={connectWalletHandler}>{connButtonText}</button>
          <br/>
          <p>{errorMessage}</p>
          <br/>
          <h2>{defaultAccount}</h2>
          <button>Account Balance</button> 
          <h3>Balance in the Bank:</h3>
          <h2>USER</h2>
          <br/>
        </div>
        <br/><br/><br/>

        <div className='set'>
          <br/>
          <form>
            <h2>SET VALUES</h2>
            <label>
              a:
              <input type={Number} name="a" required/>
            </label>
            <label>
              b:
              <input type={Number} name="b" required/>
            </label>
            <label>
              c:
              <input type={Number} name="c" required/>
            </label>
            <label>
              d:
              <input type={Number} name="d" required/>
            </label>
            <br/><br/>
            <button type='submit' id='set'>set</button>
          </form>
          <br/>
        </div>
        <br/><br/><br/>

        <div className='math add'>
        <br/>
          <h2>ADDITION VALUE</h2>
          <button>add</button>
          <br/>
        <br/>
        </div>
        <br/><br/><br/>

        <div className='math sub'>
        <br/>
          <h2>SUBTRACTION VALUE</h2>
          <button>subtract</button>
          <br/>
        <br/>
        </div>
        <br/><br/><br/>

        <div className='math mul'>
        <br/>
          <h2>MULTIPLICATION VALUE</h2>
          <button>multiple</button>
          <br/>
        <br/>
        </div>
        <br/><br/><br/>
      </div>
    );
  }
}

export default App;

import React, { useState } from 'react';
import { ethers } from 'ethers';
import './set.css';
import calculator from '../../../../smartContract/build/contracts/calculator.json';

const Set = () => {
  const contractAddress = "0x28f5534a4A09428e30082DB31212CA94677bfDD5";
  const ABI = calculator.abi;
  const [a, setA] = useState('a');
  const [b, setB] = useState('b');
  const [c, setC] = useState('c');
  const [d, setD] = useState('d');

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const Contract = new ethers.Contract(contractAddress, ABI, signer);

  const setV = async (e) => {
    e.preventDefault();
    setA(e.target.A.value);
    setB(e.target.B.value);
    setC(e.target.C.value);
    setD(e.target.D.value);
    await Contract.set(a, b, c, d);
  };

  const reset = async (e) => {
    setA('a');
    setB('b');
    setC('c');
    setD('d');
  }

  return (
    <div className='set'>
      <br />
      <form onSubmit={setV}>
        <h2>SET VALUES</h2>
        <label>
          a:
          <input type='number' id='A' value={a} onChange={(e) => setA(e.target.value)} required />
          <p>{a}</p>
        </label>
        <label>
          b:
          <input type='number' id='B' value={b} onChange={(e) => setB(e.target.value)} required />
          <p>{b}</p>
        </label>
        <label>
          c:
          <input type='number' id='C' value={c} onChange={(e) => setC(e.target.value)} required />
          <p>{c}</p>
        </label>
        <label>
          d:
          <input type='number' id='D' value={d} onChange={(e) => setD(e.target.value)} required />
          <p>{d}</p>
        </label>
        <br /><br />
        <button type='submit' id='set'>SET</button>
        <button type='reset' id='reset' onClick={reset}>RESET</button>
      </form>
      <br />
    </div>
  );
};

export default Set;

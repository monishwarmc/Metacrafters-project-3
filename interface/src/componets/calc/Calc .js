import React, {useState} from 'react';
import './calc.css';
import { ethers } from 'ethers';
import calculator from '../../../../smartContract/build/contracts/calculator.json';

const Calc = () => {

    const [add, setAdd] = useState('add value');
    const [sub, setSub] = useState('subtraction value');
    const [mul, setMul] = useState('multiplication value');

    const contractAddress = "0x28f5534a4A09428e30082DB31212CA94677bfDD5";
    const ABI = calculator.abi;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(contractAddress, ABI, signer);

    const addition = async () => {
        let val = (await Contract.add()).toNumber();
        setAdd(val);
    }

    const subtraction = async () => {
        let val = (await Contract.sub()).toNumber();
        setSub(val);
    }

    const multiplication = async () => {
        let val = (await Contract.mul()).toNumber();
        setMul(val);
    }

    return(
        <div className='math'>
            <div className='add'>
                <br/>
                <h2>{add}</h2>
                <button type="button" onClick={addition}>add</button>
                <br/>
                <br/>
            </div>

            <div className='sub'>
                <br/>
                <h2>{sub}</h2>
                <button type="button" onClick={subtraction}>subtract</button>
                <br/>
                <br/>
            </div>

            <div className='mul'>
                <br/>
                <h2>{mul}</h2>
                <button type="button" onClick={multiplication}>multiple</button>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default Calc;

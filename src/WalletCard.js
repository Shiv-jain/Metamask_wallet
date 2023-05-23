import React , {useState} from 'react';
// import {ethers} from 'ethers';
import './WalletCard.css';


const WalletCard = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if(window.ethereum && window.ethereum.isMetaMask){
            console.log('Metamask Here!');

            window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
        }
    }

    return (
        <div className='walletcard'>
            <h2>{"Connet MetaMask"}</h2><br></br>
            <button onClick={connectWalletHandler}>{connButtonText}</button><br></br>
            {errorMessage}
        </div>
    );

}

export default WalletCard;
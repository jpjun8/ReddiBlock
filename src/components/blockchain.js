import React from 'react';
import CryptoBlock from './cryptoBlock';

export default class CryptoBlockChain extends React.Component {
    constructor(props) {
        super(props);

        this.blockchain = [this.startGenesisBlock()];
    }

    startGenesisBlock() {
        return new CryptoBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
    }

    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }

    onClick() {
        let smashingCoin = new CryptoBlockChain();
        smashingCoin.addNewBlock(new CryptoBlock(1, "01/06/2020", {sender: "Iris Ljesnjanin", recipient: "Cosima Mielke", quantity: 50}));
        smashingCoin.addNewBlock(new CryptoBlock(2, "01/07/2020", {sender: "Vitaly Friedman", recipient: "Ricardo Gimenes", quantity: 100}));
        console.log(JSON.stringify(smashingCoin, null, 4));
    }

    render() {
        
        return(
            <div>
                <h1>CryptoBlockchain Testing</h1>
                <button type="button" onClick={this.onClick}>Test</button>
            </div>
        );
    }
}
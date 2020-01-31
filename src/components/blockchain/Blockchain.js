import React from 'react';
import './Blockchain.css';
import BlockchainImg from "../../assets/blockchain-img.png";

export default class Blockchain extends React.Component {
    render() {
        return (
            <div className="blockchain-root">
                <img alt="Back" onClick={this.props.history.goBack} src={BlockchainImg}/>
            </div>
        );
    }
}
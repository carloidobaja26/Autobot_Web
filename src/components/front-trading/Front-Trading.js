import { useEffect, useState } from "react";
import './Front-Trading.css';
function sayHello(name) {
    var Web3 = require('web3');
    var web3 = new Web3('wss://mainnet.infura.io/ws/v3/a333e6b6c43d4bc6be6fc1d221764394');
    var subscription = web3.eth.subscribe('pendingTransactions', function(error, result){
        console.log(result)
        if (error)
            console.log('error: ',error);
        
    })
    .on("data", function(transactionHash){
        web3.eth.getTransaction(transactionHash)
        .then(function (transaction) {
           console.log(transaction)
            setTimeout(() => {
                subscription.unsubscribe(function(error, success){if (success)console.log("success")
        })
    }, 15000)
        });
    });
    console.log(subscription);
    // setTimeout(subscription.unsubscribe(function(error, success){
    //     if(success)
    //         console.log('Successfully unsubscribed!');
    // }), 5000)
    // subscription = web3.eth.subscribe('pendingTransactions', function (error, result) {})
    // .on("data", function (transactionHash) {
    //     web3.eth.getTransaction(transactionHash)
    //     .then(function (transaction) {
    //         createNode(transaction.from, transaction.to);
    //     });
    // })
}

const FrontTrading = () => {
    return (

        <div>
            <p>Hello World</p>
            <button onClick={() => sayHello('James')}>Greet</button>
        </div>
    );
}

export default FrontTrading;
'use client'
import React, { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';

function Home() {
    const [coins, setCoins] = useState([]);
    
    const fetchCoins = async () => {
        const res = await fetch('https://api.coinlore.net/api/tickers/')
        const data = await res.json()
        const firstTwentyCoins = data.data.slice(0, 20)
        setCoins(firstTwentyCoins)
    }

    useEffect(() => {
        fetchCoins()
    }, [])

    return (
        <div className='home'>
            <h1>Top 20 Cryptos</h1>
            <div className='coins-container'>
                {coins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin}/>
                ))}
            </div>
        </div>
    )
}

export default Home

'use client'
import React, { useState, useEffect } from 'react';

function CoinDetail({params}) {
    const [coin, setCoin] = useState(null);
    console.log(params)

    const fetchCoin = async () => {
        const res = await fetch(`https://api.coinlore.net/api/ticker/?id=${params.coinId}`)
        const data = await res.json()
        setCoin(data[0])
    }

    useEffect(() => {
        fetchCoin()
    }, [params.coinId])

    if(!coin){
        return (
            <p className='loading-para'>Loading........</p>
        )
    }

    return (
        <div className='coin-detail'>
            <div className='name-symbol'>
                <h1 className='name'>{coin.name}</h1>
                <h2 className='symbol'>({coin.symbol})</h2>
            </div>
            <div className='market-description'>
                <p className='coin-rank'>Rank: {coin.rank}</p>
                <p className='coin-price'>Price: ${coin.price_usd}</p>
                <p className='coin-market-cap'>Market Cap: ${coin.market_cap_usd}</p>
                <p className='coin-total-supply'>Total Supply: {coin.tsupply}</p>
                <p className='coin-max-supply'>Max Supply: {coin.msupply || 'N/A'}</p>
            </div>
        </div>
    )
}

export default CoinDetail

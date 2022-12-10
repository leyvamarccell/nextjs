import React from 'react'
import Button from './button'
import Coin from './coin'

export default function Container() {
  return (
    <>
    <div className=' h-auto bg-white shadow-2xl rounded-md mt-5  lg:mx-24 xl:mx-72 2xl:mx-96'>
    <div className='grid grid-cols-2 justify-items-center md:grid-cols-3'>
    
    <Coin image='https://www.svgrepo.com/show/428654/bitcoin-btc-cryptocurrency-2.svg' text='BTC' label='Bitcoin'/>
    
       
    <Coin image='https://www.svgrepo.com/show/428658/ethereum-crypto-cryptocurrency-2.svg' text='ETH' label='Ether'/>
    
        
    <Coin image='https://www.svgrepo.com/show/428653/tether-crypto-cryptocurrency-2.svg' text='USDT' label='USDT'/>
    
        
    <Coin image='https://www.svgrepo.com/show/428648/tron-crypto-cryptocurrency.svg' text='TRX' label='Tron'/>
    
        
    <Coin image='https://www.svgrepo.com/show/428651/litecoin-ltc-cryptocurrency.svg' text='LTC' label='Litecoin'/>
    
        
    <Coin image='https://www.svgrepo.com/show/428649/usdc-usd-coin.svg' text='USDC' label='USDC'/>
    
        
    <Coin image='https://www.svgrepo.com/show/428647/ripple-xrp-cryptocurrency-3.svg' text='XRP' label='XRP'/>
    
        
    <Coin image='https://www.svgrepo.com/show/428660/dash-cryptocurrency-coin.svg' text='DASH' label='DASH'/>
    
    <Coin image='https://www.svgrepo.com/show/428661/monero-crypto-cryptocurrency-coins.svg' text='MON' label='Monero'/>
    
</div>
<div className='flex flex-col items-center mx-8 md:mx-20'>
    <Button/>
</div>
    </div>


    </>
  
     
  )
}

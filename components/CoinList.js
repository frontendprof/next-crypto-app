import Coin from "./Coin"

export default function CoinList({filteredCoins}){
    return(
        <>
            {filteredCoins.map(c=>(
                <Coin key={c.id} name={c.name} id={c.id} price={c.current_price}
                    symbol={c.symbol} marketcap={c.market_cap} volume={c.total_volume}
                    image={c.image} priceChange={c.price_change_percentage_24h}
                />
            )
            )}
        </>
    )
}
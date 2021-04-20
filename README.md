## next-crypto-app

- npx create-next-app ./
- [coingecko crypto api](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false)

### Initial setup

1. Cleanup
2. Wiring up to github account

### Components

1. SearchBar component
2. Coin component
3. CoinList component
4. Layout component

### SearchBar component

1. Creating layout with input element
2. Applying style with module.css file

### Coin component

1. Rendering all passed props
2. Applying style with module.css file

### CoinList component

1. Iterating through fetched api request props and passing its values as props to Coin component

### Layout component

1. Placing logo
2. Attaching routing on click of logo
3. Implementing style via global module css file

### pages/coin

1. Configuring /coin/[id] route for each coin click

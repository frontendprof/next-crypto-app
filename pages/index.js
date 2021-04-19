import Head from 'next/head'
import SearchBar from '../components/SearchBar';
import Coin from '../components/Coin';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type="text" placeholder="Search"/>
      <Coin />
      
    </div>
  )
}

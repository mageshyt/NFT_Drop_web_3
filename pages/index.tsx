import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../components/Home/HomePage'
const Home: NextPage = () => {
  return (
    <div className="h-screen w-full bg-gray-900">
      <Head>
        <title> NFT DROP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomePage />
      </div>
    </div>
  )
}

export default Home

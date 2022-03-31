import React from 'react'
import Header from '../../components/Top session/Header'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
function NftDropPage() {
  const address = useAddress()
  const appStatus = !!address
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left side */}
      <div className="  bg-gradient-to-br from-cyan-700 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-300 to-purple-500 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72 "
              src="https://links.papareact.com/8sg"
              alt="NFT image"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">SPACE ARTON Apes</h1>
            <span className="text-xl text-gray-300">
              A collection of space Atron apes. who live & work in space.
            </span>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-1 flex-col bg-gray-900 p-12 lg:col-span-6">
        {/* Header */}
        <div>
          <Header appStatus={appStatus} />
        </div>
        <hr className="my-4 border" />
        {/* User Status */}
        {appStatus ? (
          <span className="select-none text-center text-xl font-bold text-green-500">
            You're logged in with wallet {address?.slice(0, 4)}...
            {address?.slice(37)}{' '}
          </span>
        ) : (
          ''
        )}
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0 ">
          <img
            className="w-80 object-cover pb-10 lg:h-40 "
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold text-white lg:text-5xl lg:font-extrabold">
            The Space Arton Coding Club | NFT DROP
          </h1>
          <p className="pt-2 text-xl text-green-500">13/30 NFT's Claimed</p>
        </div>
        {/* Mint-button */}
        <button className="h mt-10 h-16 w-full rounded-full bg-blue-400 text-center font-bold text-white">
          Mint NFT (0.001 ETH)
        </button>
      </div>
    </div>
  )
}

export default NftDropPage

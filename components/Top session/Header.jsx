import { useMetamask } from '@thirdweb-dev/react'
import Link from 'next/link'
import React from 'react'
import ModalBox from '../Auth Modal/ModalBox'
const style = {
  heading: 'cursor-pointer w-52 text-white text-xl font-medium sm:w-80',
  btn: 'lg:px-5 px-4 py-2 rounded-full bg-sky-400 text-sm text-white lg:py-3',
  wrapper: 'flex items-center justify-between',
}
const Header = ({ appStatus }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const connectWithMetamask = useMetamask()
  return (
    <div className={style.wrapper}>
      <div>
        <h1 className={style.heading}>
          The {''}
          <span className=" font-extrabold  underline decoration-purple-500">
            Space Arton
          </span>{' '}
          NFT Market Place
        </h1>
      </div>
      {/* btn */}
      <div>
        <button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className={style.btn}
        >
          {appStatus ? 'Disconnect' : 'Connect'}
        </button>
        <ModalBox ModalOpen={isOpen} />
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import Banner from './Banner'
const style = {
  heading: 'cursor-pointer  text-white  font-medium text-4xl',
  wrapper: 'flex items-center justify-center  flex-col p-10',
}
const HomePage = () => {
  return (
    <div className={style.wrapper}>
      {/* title */}
      <div className="w-full p-10">
        <h1 className={style.heading}>
          The {''}
          <span className=" font-extrabold  underline decoration-pink-500">
            Space Arton{' '}
          </span>
          NFT Market Place
        </h1>
      </div>
      {/* Banner */}
      <div>
        <Banner />
      </div>
    </div>
  )
}

export default HomePage

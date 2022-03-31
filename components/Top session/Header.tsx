import React from 'react'
const style = {
  heading: 'cursor-pointer w-52 text-xl font-extralight sm:w-80',
  btn: 'lg:px-5 px-4 py-2 rounded-full bg-sky-400 text-sm text-white lg:py-3',
  wrapper: 'flex items-center justify-between',
}
const Header = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <h1 className={style.heading}>
          The {''}
          <span className=" font-extrabold underline decoration-purple-500">
            Space Arton
          </span>{' '}
          NFT Market Place
        </h1>
      </div>
      {/* btn */}
      <div>
        <button className={style.btn}>Sign in</button>
      </div>
    </div>
  )
}

export default Header

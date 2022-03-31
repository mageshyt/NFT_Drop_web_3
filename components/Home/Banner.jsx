import { useRouter } from 'next/router'
import React from 'react'
const style = {}
const Banner = () => {
  const router = useRouter()
  return (
    <div className="h-[500px] w-[900px] bg-white">
      <img
        className="cursor-pointer"
        onClick={() => {
          router.push('nft/magesh')
        }}
        src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
        alt=""
      />
    </div>
  )
}

export default Banner

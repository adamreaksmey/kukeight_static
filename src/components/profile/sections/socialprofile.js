import React from 'react'
import Image from 'next/image'
import Unknown from "@/public/photos/creators/unknown.jpeg";

const SocialProfile = () => {
  return (
    <>
        <div className='d-flex p-4 rounded mb-1 logo-img' style={{ background: "#6A9C89" }}>
            <Image src={Unknown.src} width={50} height={50} className='' alt={""} />
        </div>
    </>
  )
}

export default SocialProfile

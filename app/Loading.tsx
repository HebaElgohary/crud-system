'use client'

import dynamic from 'next/dynamic'

const Lottie = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
)

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie
        autoplay
        loop
        src="/lottie/Loading.json"
        style={{ height: '300px', width: '300px' }}
      />

    </div>
  )
}
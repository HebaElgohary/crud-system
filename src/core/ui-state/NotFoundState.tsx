'use client'
import Button from '@/src/components/atoms/Button'
import Title from '@/src/components/atoms/Title'
import dynamic from 'next/dynamic'

const Lottie = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
)
export default function NotFoundState() {
  return (
 <div className="flex flex-col items-center justify-center h-screen">
      <Lottie
        autoplay
        loop
        src="/lottie/notFound.json"
        style={{ height: '300px', width: '300px' }}
      />
      <Title  >404 Not Found</Title>
      <Button className="btn btn-primary" variant="danger" size="sm" onClick={() => window.location.reload()}>Reload</Button>
    </div>  )
}

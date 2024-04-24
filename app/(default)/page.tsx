export const metadata = {
  title: 'Campus Navigator',
  description: 'Campus Navigator',
}

import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}

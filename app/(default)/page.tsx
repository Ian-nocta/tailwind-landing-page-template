export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'


export default function Home() {
  return (
    <>
      <Hero />
      <Newsletter />
      <Features /> 
    </>
  )
}

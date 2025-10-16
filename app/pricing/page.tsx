import Stats from '@/components/about/Stats'
import ExperienceBoost from '@/components/home/ExperienceBoost'
import Pricing from '@/components/home/Pricing'
import Testimonials from '@/components/home/Testimonials'
import Price from '@/components/pricing/Price'
import React from 'react'

const page = () => {
  return (
    <>
        <Price/>
        <Pricing/>
        <Stats/>
        <Testimonials/>
        <ExperienceBoost/>
    </>
  )
}

export default page
import AmazingFeatures from '@/components/home/AmazingFeatures'
import ExperienceBoost from '@/components/home/ExperienceBoost'
import Faq from '@/components/home/Faq'
import HowItWorks from '@/components/home/HowItWorks'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Services from '@/components/services/Services'
import React from 'react'

const page = () => {
  return (
    <>
        <Services/>
        <AmazingFeatures/>
        <HowItWorks/>
        <WhyChooseUs/>
        <Faq/>
        <ExperienceBoost/>
    </>
  )
}

export default page
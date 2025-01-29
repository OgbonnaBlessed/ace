import IntroSection from '@/components/IntroSection'
import React from 'react'
import { ProjectIntro } from '@/components/ProjectsIntro'
import { Footer } from '@/components/Footer'

const Home = () => {
  return (
    <div className=''>
      <IntroSection 
        topText="Building scalable" 
        bottomText="software solutions"
      />
      <ProjectIntro />
      <Footer />
    </div>
  )
}

export default Home
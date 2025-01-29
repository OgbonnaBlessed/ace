import IntroSection from '@/components/IntroSection'
import React from 'react'
import { ProjectIntro } from '@/components/ProjectsIntro'

const Home = () => {
  return (
    <div className=''>
      <IntroSection 
        topText="Building scalable" 
        bottomText="software solutions"
      />
      <ProjectIntro />
    </div>
  )
}

export default Home
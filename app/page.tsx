import React from 'react'
import Banner from './components/layout/Banner'
import { metadata } from './layout'

const Home = () => {
  return (
    <>
     
      <section>
        <h1>{String(metadata.description)}</h1>
        <Banner />
      </section>
     
    </>
  )
}

export default Home
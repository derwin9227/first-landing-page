import React from 'react'
import { codingWeb } from '../../img'

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__text'>
        <h1>Ing. Derwin Hernandez</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa facilis, aliquid nemo tempore architecto nostrum reprehenderit odit qui quis corporis consectetur nisi dolorum iure mollitia dolor, illum, unde a.</p>
      </div>
      <div className='home__img'>
        <img className='home__img-item' src={codingWeb} alt="coding-web" />
      </div>
    </section>
  )
}

export default Home
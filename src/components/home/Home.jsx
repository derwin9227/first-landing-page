import React from 'react'
import { codingWeb } from '../../img'

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__text'>
        <div className='home__text-items'>  
          <h1>
            Derwin Hernandez<br/>
          </h1>
          <span>Front End Developer</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa facilis, aliquid nemo tempore architecto nostrum reprehenderit odit qui quis corporis consectetur nisi dolorum iure mollitia dolor, illum, unde a.</p>
      </div>
      <div className='home__img'>
        <img className='home__img-item' src={codingWeb} alt="coding-web" />
      </div>
    </section>
  )
}

export default Home
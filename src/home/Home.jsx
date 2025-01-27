import React from 'react'
import "./home.css";
import HeaderSocials from './HeaderSocials';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {

  return (
    <>
      <section className='home container' id='home'>
        <div className="intro">
          <img src={"#"} alt="" className='home__img h-5 w-5' />
          <h1 className='home__name'>Parthik Diyora</h1>
          <span className='home__education'><h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
            I'm {' '}
            <span style={{ color: 'hsl(353, 100%, 65%)', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['FullStack Developer', ' DevOps Engineer ']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}

              />
            </span>
          </h1> </span>

          <HeaderSocials />


          <a href="#contact" className='btn'>
            Hire Me
          </a>
          <Scrolldown />
        </div>
        <Shapes />
      </section>
    </>
  )
}

export default Home
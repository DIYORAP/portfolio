import React from 'react'
import "./home.css";
import HeaderSocials from './HeaderSocials';
import Scrolldown from './Scrolldown';
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {

  return (
    <>
      <section className='home container' id='home'>
        <div className="intro" style={{ textAlign: 'center' }}>
          <img
            src="/public/IMG 35678.jpg"
            alt="Yash Thummar"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              marginBottom: '20px',
              objectFit: 'cover',
            }}
          />
          <h1 className='home__name'>Yash Thummar</h1>
          <span className='home__education'><h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
            I'm {' '}
            <span style={{ color: 'hsl(353, 100%, 65%)', fontWeight: 'bold' }}>
              <Typewriter
                words={['Chemical Student']}
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

      </section>
    </>
  )
}

export default Home
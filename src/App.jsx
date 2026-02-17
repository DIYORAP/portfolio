import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from './sidebar/sidebar'
import Home from "./home/Home"
import About from "./about/About"
import Connect from './contact/Contact'


function App() {
  return (
    <>
      <Helmet>
        <title>Yash</title>
        <meta name="description" content="I am a MERN stack developer dedicated to creating impactful web applications. Explore my portfolio and projects." />
        <meta name="keywords" content="Arihant, web development, MERN stack, portfolio, projects, React, Node.js, MongoDB, Express" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yash Thummer",
              "url": "https://",
              "sameAs": [
                "",
                "",
                 ""
              ],
              "jobTitle": "",
              "description": "Yash Thummer is a Chemical Student dedicated to creating impactful web applications. Explore my portfolio and projects."
            }
          `}
        </script>
      </Helmet>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Connect />

      </main>
    </>
  )
}

export default App

import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from './sidebar/sidebar'
import Home from "./home/Home"
function App() {
  return (
    <>
      <Helmet>
        <title>Parthik Web Development Portfolio</title>
        <meta name="description" content="I am a MERN stack developer dedicated to creating impactful web applications. Explore my portfolio and projects." />
        <meta name="keywords" content="Arihant, web development, MERN stack, portfolio, projects, React, Node.js, MongoDB, Express" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arihant Jain",
              "url": "https://",
              "sameAs": [
                "",
                "",
                 ""
              ],
              "jobTitle": "Fullstack Developer",
              "description": "Parthik is a MERN stack developer dedicated to creating impactful web applications. Explore my portfolio and projects."
            }
          `}
        </script>
      </Helmet>
      <Sidebar />
      <main className='main'>
        <Home />
      </main>
    </>
  )
}

export default App

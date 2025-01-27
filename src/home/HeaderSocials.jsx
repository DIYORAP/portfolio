import React from 'react'
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <>
      <div className="home__socials">
        <a href="/" className="home__social-link" target='_blank'>
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="/" className="home__social-link" target='_blank'>
          <SiLeetcode />
        </a>
        <a href="/" className="home__social-link" target='_blank'>
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="/" className="home__social-link" target='_blank'>
          <SiCodeforces />
        </a>
      </div>

    </>
  )
}

export default HeaderSocials
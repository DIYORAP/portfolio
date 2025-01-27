import React from 'react'
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <>
      <div className="home__socials">
        <a href="https://linkedin.com/in/parthikdiyora10" className="home__social-link" target='_blank'>
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://leetcode.com/u/parthik1000/" className="home__social-link" target='_blank'>
          <SiLeetcode />
        </a>
        <a href="https://github.com/DIYORAP" className="home__social-link" target='_blank'>
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://codeforces.com/profile/parthik_1000" className="home__social-link" target='_blank'>
          <SiCodeforces />
        </a>
      </div>

    </>
  )
}

export default HeaderSocials
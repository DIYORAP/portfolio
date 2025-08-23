import React from 'react'
import { FaMailBulk } from 'react-icons/fa';
import { SiCodeforces, SiMailboxdotorg, SiMailchimp } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <>
      <div className="home__socials">
        <a href="https://linkedin.com/in/yash-thummar-932170257" className="home__social-link" target='_blank'>
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:thummaryash414@gmail.com" className="home__social-link" target='_blank'>
          <FaMailBulk />
        </a>
      </div>

    </>
  )
}

export default HeaderSocials
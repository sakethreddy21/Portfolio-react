import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/k-saketh-reddy-b7b64922a/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.https://github.com/sakethreddy21" target='_blank'><FaGithub/></a>
      <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
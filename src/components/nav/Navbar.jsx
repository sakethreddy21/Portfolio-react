import React from 'react'
import {useState} from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'

import {BiMessageSquareDetail} from 'react-icons/bi'

const Navbar = () => {
  const [status, setStatus]=useState('#home')

  
  return (
    <nav>
      <a href='#home' onClick={()=>setStatus('#home')} className={status==='#home'?'active':""}><AiOutlineHome/></a>
      <a href='#about'  onClick={()=>setStatus('#about')} className={status==='#about'?'active':""}><AiOutlineUser/></a>
      <a href='#experience'  onClick={()=>setStatus('#experience')} className={status==='#experience'?'active':""}><BiBook/></a>
     
      <a href='#contact'  onClick={()=>setStatus('#contact')} className={status==='#contact'?'active':""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar
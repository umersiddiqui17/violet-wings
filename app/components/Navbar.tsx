"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



import {AiOutlineShoppingCart}  from 'react-icons/ai'
import { useShoppingCart } from 'use-shopping-cart'


const Navbar = () => {
  const {handleCartClick} = useShoppingCart()
  return (
    <header className="shadow-xl">
    <div className=" flex flex-col md:flex-row justify-centre items-center md:justify-start">
      <div className="logo mx-4">
        <Link href={"/"}>
          <Image src="/elite 3.png" alt="" width={80} height={20} />
        </Link>
      </div>
      <div className='md:mr-6 '>
        <span className=' font-cursive  text-2xl text-primary '>Violet</span> <span className=' bg-slate-500 text-transparent bg-clip-text text-xl '>Wings</span>
      </div>
      <div className="nav">
        <ul className="flex space-x-8 text-sm text-bold md:text-md">
          <Link href={"/Dress"}>
            <li className=' hover:text-primary'>Dress</li>
          </Link>
          <Link href={"/Maxi"}>
            <li className=' hover:text-primary'>Maxi</li>
          </Link>
          <Link href={"/Leggings"}>
            <li className=' hover:text-primary'>Leggings</li>
          </Link>
          <Link href={"/Frocks"}>
            <li className=' hover:text-primary'>Frocks</li>
          </Link>
        </ul>
       <div className=' text-2xl cart mx-4 top-8 text-violet-600 absolute right-0 cursor-pointer hover:text-violet-500'>
        <button onClick={()=>handleCartClick()}>
        
        <AiOutlineShoppingCart/>
        
        </button>
       </div>
     
      </div>
      </div>
    </header>
  )
}

export default Navbar
//import { Component } from 'react';
import React from 'react';
import { tw } from "twind";
import Link from 'next/link';

import { motion } from 'framer-motion';

export default function Navigator() {

  const btn = tw`px-2 py-2 text-gray-400 font-medium hover:text-white  transition duration-300 `;


  return (
 <>
 
 
 <div className={tw`bg-black w-full  text-center w-full p-8`}> 

 <motion.a initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
      <div className={tw` text-white p-4  font-bold text-2xl `}> Instructional XR Dev </div>
</motion.a>
</div>
      <div className={tw`z-10 sticky top-0  pt-1 w-full bg-black text-center ` }>
       
        <ul  className={tw` bg-opacity-95 grid grid-cols-3  `}>
          <li className={tw`   `}>
          <Link href="/">
            <button
              className={btn}>
              
             <div  className={tw``}>Home</div> 
              
            </button>
            </Link>
          </li>
          
          <li className={tw` `}>
              <Link href="/projects">
              <button
              className={btn}>
              
             <div  className={tw``}>Portfolio</div> 
              
            </button>
            </Link>
          </li>

          {/* <li className={tw`  `}>
            <Link href="/sample">
              <button
              className={btn}>
              
             <div  className={tw``}>Sample</div> 
              
            </button>
            </Link>
          </li> */}
          

          <li className={tw``}>
            <Link href="/about">
              <button
              className={btn}>
              
             <div  className={tw``}>About</div> 
              
            </button>
            </Link>
          </li>
          </ul>
        
       
      </div>
      </>
  
  
     
  );
}
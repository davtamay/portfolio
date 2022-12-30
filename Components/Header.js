import { tw, setup } from "twind";


import { motion } from 'framer-motion';

import Image from 'react'

export default function Header(props) {

  // const headerImage = useRef(null);
  //  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <>
<div className={tw`w-full text-3xl `}>
    <div className={tw`  justify-center  bg-black   relative pt-5  `}>

   
        <img className={tw` h-44 object-cover w-full   transition opacity-100 `} src={props.headerImage}  ></img>


        {props.titleSubtitle}

      </div>
 </div>

    

    </>
  );
}

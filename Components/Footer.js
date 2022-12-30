import Link from "next/link";
import {tw} from "twind";


export default function Footer(){


    return(


        <>
        <div className={tw`w-full bg-black text-center pt-1`}>
        
        <a className={tw`text-white  `}> Website Created by David Tamayo using Next.js, Three.js and Node.js</a>


        <a className={tw`text-white `}> Connect with me:</a>
        
        
     
        </div>
<div className={tw`w-full  bg-black  flex flex-row items-center justify-center pt-5 cursor-pointer gap-5 pb-5 `}>
       <a href="https://www.linkedin.com/in/davtamay/"> <img className={tw`  object-cover  w-10 `} src="social/linkedin.png"  ></img></a>
       <a href="https://github.com/davtamay/"> <img className={tw`  object-cover  w-10 `} src="social/github.png"  ></img></a>
        </div>
        
        
        </>
    );
}
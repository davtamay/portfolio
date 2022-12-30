import { tw, setup } from "twind";
import React from "react";


export default function SectionGroup(props){

    return (
        <>  
        <div className={tw` bg-black h-auto `}>
          
        <div className={tw`  `}>
            <div className={tw` flex-row   sm:flex sm:col-[2]  sm:gap-0  `}>
              
              
              <div className={tw`w-full font-bold text-white   `}>
               
               <div  className={tw`rounded-t-md translate-x-20 translate-y-10  bg-red-500 text-center w-20  `}>
                <a className={tw``}>Projects</a>
               </div>
             
              
              <div className={tw`pl-20 pr-20 pt-20 leading-7`}>
              <a >As a generalist software developer delving into applied psychology and curriculum and instruction fields, I have developed more than 10 extended reality experiences that try to serve learning goals for different target populations.</a>
              </div>


              <div  className={tw`   pt-10 pb-10  text-red-500 text-underline   text-center   `}>
                <div className={tw``}>Check Out The Projects</div>
               </div>
             


              </div>

              



              <div className={tw` flex content-center max-w-full border-red-500 border   `}>
             
                <img alt="Section image" className={tw` `} src="image-brainconnections_4_orig.png"></img> 
              </div>
              
           </div>

        



          
          </div>
        </div>
        


       
    
        </>
      );


}

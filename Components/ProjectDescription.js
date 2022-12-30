import { tw, apply } from 'twind'
import { React } from 'react'


export default function ProjectDesctiption(props) {

    return (
        <>
        <div className={tw` `}>
            <div className={tw`bg-black text-center  pb-5`}>
                <div className={tw` text-underline text-white  font-bold text-2xl divide-opacity-95`}> Project Context </div>
    
            </div>

            <div className={tw`  bg-black text-center  `}>
                <div className={tw`w-8/12 translate-x-1/4 border-2 border bg-gray-500 pt-5 pb-5 px-10 whitespace-pre-line`}>
                    <div  className={tw` text-white  text-2xl `}> {props.projectDiscription} </div>
                </div>  
            </div>
            </div>
        </>

    )

}


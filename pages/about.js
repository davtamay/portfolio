import ThreeApp from "../threejs/ThreeApp";
import { useThree } from "../hooks/useThree";

import Header from "../Components/Header.js";
import Navigator from "../Components/Navigator.js";
import SectionGroup from "../Components/SectionGroup.js";
import Footer from "../Components/Footer.js";

import React from "react";

import { tw, apply } from "twind";

export default function About() {
  const headerImage = "girlEye.jpg"
  const titleSubtitle =



    (<span className={tw` bg-clip-text text-transparent bg-gradient-to-r from-pink-500 absolute w-full text-center top-16  font-bold  whitespace-pre-wrap`}>
      About and Work Request

      {/* <pre> About and Work Request </pre> */}

    </span>)

  let formsuccessIndicator = `placeholder-gray-500 pr-5 pl-5 bg-green-500 invisible `;
  const [submited, setSubmited] = React.useState(formsuccessIndicator);
  //The argument for useThree is your threejs main class
  // const canvas = useThree(ThreeApp);''

  return (
    <>
      <Navigator />
      <Header headerImage={headerImage} titleSubtitle={titleSubtitle} />


      <div className={tw`bg-black flex justify-center items-center `}>
        <div className={tw` `}>
          <div className={tw`  text-white rounded-t-md  translate-y-10  bg-red-500 text-center w-20  `}>
            <a className={tw``}>About</a>
          </div>
        </div>
      </div>

      <div className={tw` pb-16 bg-black text-center  `}>
        <div className={tw` shadow-inner shadow-2xl  rounded-2xl w-8/12 translate-x-1/4 translate-y-16  border-2 border bg-gray-500 pt-5 pb-5 px-5`}>
          <a className={tw` text-white  text-xl font-medium `}> The extent of my work goes beyond what cant be displayeed due to NDAs. No work is too big.</a>
        </div>
      </div>



      <form className={tw` bg-black`} >
        <div className={tw`flex justify-center pb-5 font-bold pt-10 bg-black text-white  `}>
          <a className={tw` placeholder-gray-500 pr-5  `}>Contact</a>
        </div>

        <div className={tw`flex justify-center pb-1 pt-10 bg-black text-white  `}>

          <a className={tw`font-bold placeholder-gray-500 pr-5  `}>First Name</a>
          <input className={tw` text-black `} type="text"></input>
          <a className={tw` font-bold placeholder-gray-500 pr-5 pl-5  `}>Last Name</a>
          <input className={tw` text-black `} type="text"></input>

        </div>
      
        <div className={tw`flex justify-center pb-10 pt-10 bg-black text-white  `}>

          <a className={tw`font-bold placeholder-gray-500 pr-5  `}>Email:</a>
          <input className={tw` text-black `} type="email"></input>
          <a className={tw` font-bold placeholder-gray-500 pr-5 pl-5  `}>Number:</a>
          <input className={tw` text-black `} type="tel"></input>

        </div>

        <div className={tw` justify-center flex pb-4 text-white`} >
          <a className={tw`font-bold pr-5  `}>Description of Assistance:</a>
        </div>

        <div className={tw` justify-center flex pb-10 text-white`} >

          <textarea rows={4} cols={40} className={tw` text-black   `} ></textarea>
        </div>

        <div className={tw` justify-center flex  `} >
          <button className={tw`w-1/5  bg-blue-50 hover:bg-gray-500 hover:border-white border-2`} onClick={(e) => {

            formsuccessIndicator = `placeholder-gray-500 pr-5 pl-5 bg-green-500 `;
            e.preventDefault();

            setSubmited(formsuccessIndicator)

          }}>Submit</button>
        </div>

        <a className={tw` bg-blue-50 ${formsuccessIndicator}  `}>Submited</a>

      </form>

      <Footer></Footer>
    </>
  );
}

import ThreeApp from "../threejs/ThreeApp";
// import ThreeApp2 from "../threejs/main.js";
import { useThree } from "../hooks/useThree";

import Header from "../Components/Header.js";
import Navigator from "../Components/Navigator.js";
import SectionGroup from "../Components/SectionGroup.js";
import Footer from "../Components/Footer.js";


import { tw } from "twind";

export default function Home() {
   const headerImage = "girlEye.jpg"
   const titleSubtitle = 
   (<span className={tw ` bg-clip-text text-transparent bg-gradient-to-r from-pink-500 absolute  left-4 top-8  font-bold  whitespace-pre-wrap`}>
    Developing innovative education for the 21st century

   {/* <pre> Developing innovative education </pre>
   <pre> for the 21st century </pre> */}

 </span>)
  

  //The argument for useThree is your threejs main class
  const canvas = useThree(ThreeApp);
  //  const canvas2 = useThree(ThreeApp2);

  return (
    <>
      <Navigator  />

      <Header headerImage={headerImage} titleSubtitle= {titleSubtitle}/>
      <SectionGroup/>
   

      <div ref={canvas} style={{ height: "100vh" }} />
      {/* <div ref={canvas2} style={{ height: "100vh" }} /> */}
      {/* <div ref={ThreeApp2} style={{ height: "100vh" }} /> */}

      <div className={tw `h-screen xl:w-1/2`} id="canvasContainer">

       </div>


{/* 

      <div id="popUpEl" className={tw `bg-black bg-opacity-75 fixed px-4 py-2 rounded-lg`}>
      <h2 className={tw `text-white text-xs`}>
        <span id="populationEl"></span>
        <span>Population</span>
      </h2>
      <p id="populationValueEl" className={tw `text-white font-bold text-lg`}>300mil</p>
    </div>




    <div className={tw `xl:flex h-screen bg-black`}>
      <div className={tw `xl:w-1/2 flex flex-col justify-center px-8 pt-16 xl:pt-0`}>
        <div className={tw `mx-auto`}>
          <h1 className={tw `text-white text-4xl mb-8 font-exo leading-none`}>
            CHALLENGING THE STANDARD OF SPACE EXPLORATION
          </h1>
          <p className={tw `text-gray-400 mb-8 `}>
            Millions of developers and companies build, ship, and maintain their
            software on GitHub—the largest and most advanced development
            platform in the world.
          </p>


          <div>
            <a
              href=""
              className={tw `text-white bg-green-600 inline-block px-8 py-4 rounded-full `}
              >Learn More</a
            >
          </div>
        </div>
      </div>
      <div className={tw `h-screen xl:w-1/2`} id="canvasContainer">
       
      </div>
      </div>

     




 */}


      <Footer></Footer>
    </>
  );
}

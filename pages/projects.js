
import Navigator from "../Components/Navigator.js";
import Header from "../Components/Header.js";
import HorizontalScroll from "../Components/HorizontalScroll.jsx";
import { tw } from "twind";
import Footer from "../Components/Footer.js";

import Link from "react"

export default function Home() {

  const headerImage = "chessboard.jpeg"

  const titleSubtitle = 
  (<span className={tw ` bg-clip-text text-transparent bg-gradient-to-r from-pink-500 absolute w-full text-center top-16 font-bold  whitespace-pre-wrap`}>
  Portfolio Showcase
  {/* <pre> Portfolio Showcase </pre> */}

 </span>)


  const projectNames = ["Eggcellent", "KOMODO", "Komodo x IMPRESS", "Komodo X Hydroponics Classroom", "Train Operator", "Joviality",
  "Destination Intervention", "Healing The Wound", "TiltBrush Visualizer", "Jim's Dilemma", "EUSTRESS ADVENTURE", "Chicago Safe Initiative"];

  const projectImages = new Map();
  projectImages.set(0,["projects/HL2_eggcellent_walkthrough.gif"] )
  projectImages.set(1,["projects/KomodogameWalkthrough.gif"] )
  projectImages.set(2,["projects/KomodoImpressgameWalkthrough.gif"] )
  projectImages.set(3,["projects/komodo_hydroponic_gameWalkthrough.gif"] )
  projectImages.set(4,["projects/TrainConductorgameWalkthrough.gif"] )
  projectImages.set(5,[] )
  projectImages.set(6,["projects/DecisionIntervention_gameWalkthrough.gif"] )
  projectImages.set(7,[ "projects/HealingTheWoundgameWalkthrough.gif"] )
  projectImages.set(8,["projects/tiltbrushVisualizergameWalkthrough.gif"] )
  projectImages.set(9,["projects/Jims_DilemaGameWalkthrough.gif"] )
  projectImages.set(10,["projects/EustressAdventuregameWalkthrough1.gif", "projects/EustressAdventuregameWalkthrough2.gif", "projects/EustressAdventuregameWalkthrough3.gif"] )
  projectImages.set(11,["projects/AHSafeInitiativegameWalkthrough.gif"] )
  projectImages.set(12,[] )

  
  const projectIcons = [
    "" ,
   "projects/Icons/komodo-logo-wordmark-rusa-award.063a1e2b.jpg" ,
   "" , 
   "" , 
   "" , 
   "" , 
   "", 
   "" , 
   "" ,
   "",
   "projects/Icons/image-eustressadventurelogo_orig.png"
  ]






  
  // ["projects/HL2_eggcellent_walkthrough.gif", "KOMODO", "Komodo x IMPRESS", "Komodo X Hydroponics Classroom", "Train Operator", "Joviality",
  // "Destination Intervention", "projects/HealingTheWoundgameWalkthrough.gif", "TiltBrush Visualizer", "projects/Jims_DilemaGameWalkthrough.gif", "EUSTRESS ADVENTURE", "Chicago Safe Initiative"];
  //The argument for useThree is your threejs main class
  
  const projectGitHubUrls= ["https://github.com/davtamay/Eggcellent", "https://github.com/davtamay/komodo-unity", "https://github.com/davtamay/impress", "https://github.com/davtamay/VirtualHydroponicClassroom", "https://github.com/davtamay/TrainOperator","",
  
  "https://github.com/davtamay/DecisionIntervention", "https://github.com/davtamay/TheCellDivisionStory", "https://github.com/davtamay/TiltBrushVisualizer" , "https://github.com/davtamay/Jim-s-Dilemma" , "https://github.com/davtamay/eustressAdventure" ];

  const projectDiscription= [(
  
  <>
  <div  className={tw` whitespace-pre-wrap pb-5 text-2xl`} >
    An App designed to provide a perspective of how augmented spaces can serve learning basic practical skills.
  </div>

  <hr></hr>
 
  <ul className={tw`list-outside list-disc text-xl text-left pl-5 space-y-2 pt-5`}> 
    <li>
    Goal:  Egg cooking simulation app made for the Hololens2 using OpenXR plugin.
    </li>
    <li>
    Platform: ​HoloLens 2

    </li>
  </ul>
  
  </>),

(
  
  <>
  <div  className={tw` whitespace-pre-wrap pb-5 text-2xl`} >
    A sandbox of XR features to provide instructors and researchers the chance to study and fascilitate immersive educational content.
  </div>

  <hr></hr>
 
  <ul className={tw`list-outside list-disc text-xl text-left pl-5 space-y-2 pt-5`}> 
    <li>
    Goal:  Creating an open source web XR foundation baseline that includes network setup, asset imports, and full customization potential for instructors and researchers. 
    <button>Learn More.</button>
    </li>
    <li>
    Platform: ​WebXR
    </li>
    <li>

    Working state:  Project has served to provide a space for instructors in Material Science and Fascion Design classrooms. Read my research on this.  research in curriculum and Instruction 
    {/* https://www.researchgate.net/publication/355165017_Using_web-based_authoring_tools_to_overcome_the_third_barrier_to_classroom_technological_integration_design_thinking */}
   
    </li>
  </ul>
  
  </>)


  
  ];

  
  
  return (
    <>
      <Navigator />
      <Header headerImage={headerImage} titleSubtitle={titleSubtitle}/>
      <HorizontalScroll projectNames = {projectNames} projectImages = {projectImages } projectIcons = {projectIcons} projectGitHubUrls = {projectGitHubUrls } projectDiscription = {projectDiscription }/>
      

      <Footer></Footer>
  
    </>
  );
}
// export async function getServerSideProps() {



// }


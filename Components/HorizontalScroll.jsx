import React,{useEffect} from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from '../Components/Arrow.js'
import { tw, apply } from "twind";

import ProjectDesctiption from './ProjectDescription.js';

//var selectedIndex = 0;

export default function HorizontalScroll(props) {

  const getItems = () =>
    props.projectNames
      .map((names) => ({ id: `${names}` }));


  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    // setSelected([]) = 0;
    // console.log(selected);
  // selectedIndex = 0;
  });


  // const [position, setPosition] = React.useState(0);




  const imagesToDisplayStyle = apply``;


  const isItemSelected = (id) => selected.find((el, index) => {

    if (el === id) {



      setSelectedIndex(props.projectNames.indexOf(el));
      // selectedIndex = props.projectNames.indexOf(el);
      selected.shift()







      if (props.projectImages.get(selectedIndex).length === 3) {
        imagesToDisplayStyle = apply`md:w-1/2 md:justify-center `
        // picturesInProject = 3
      }
      else if (props.projectImages.get(selectedIndex).length === 2) {
        imagesToDisplayStyle = apply`md:w-1/2 md:justify-center items-center `
        // picturesInProject = 2
      }
      else if (props.projectImages.get(selectedIndex).length === 1) {
        imagesToDisplayStyle = apply`md:w-full md:justify-center `
        // picturesInProject = 1
      }
      else if (props.projectImages.get(selectedIndex).length === 0) {
        imagesToDisplayStyle = apply`md:w-full md:justify-center hidden`
        // picturesInProject = 0
      }


      return true;
    } else return false


  }
  );

  const handleClick =
    (id) =>
      ({ getItemById, scrollToItem }) => {


        const itemSelected = isItemSelected(id);


        // selectedIndex = id

        setSelected((currentSelected) =>
          itemSelected
            ? currentSelected.filter((el) => el !== id)
            : currentSelected.concat(id)
        );
      };


  return (
    <>
      <div className={tw`py-3 bg-black `}>
        <ScrollMenu className={tw` `} LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {items.map(({ id }, index) => (
              // <>

            <Card

              itemId={id} // NOTE: itemId is required for track items
              title={id}
              key={id}
              onClick={handleClick(id)}
              selected={isItemSelected(id)}
              iconImage = {props.projectIcons[index]}
            />
            // </>
          ))}
        </ScrollMenu>


      </div>




      <div className={tw`bg-black text-center pt-4  pb-8`}>
        <a href={props.projectGitHubUrls[selectedIndex]} className={tw` text-white  font-bold text-2xl `}> {props.projectNames[selectedIndex]} </a>
      </div>


      <div className={tw`items-center flex flex-col  md:flex-row md:flex-wrap  justify-center  bg-black  border-2 border-red-500   `}>
        <div className={tw` ${imagesToDisplayStyle}`}>
          <img className={tw`md:max-h-96 object-contain md:w-full   `} src={props.projectImages.get(selectedIndex)[0]}></img>
        </div>
        <div className={tw` ${imagesToDisplayStyle}`}>
          <img className={tw`md:max-h-96 object-contain md:w-full  `} src={props.projectImages.get(selectedIndex)[1]}></img>
        </div>
        <div className={tw` ${imagesToDisplayStyle}`}>
          <img className={tw`md:max-h-96  object-contain `} src={props.projectImages.get(selectedIndex)[2]}></img>
        </div>
      </div>





      <ProjectDesctiption projectDiscription={props.projectDiscription[selectedIndex]}></ProjectDesctiption>







    </>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =

    React.useContext(VisibilityContext);
  //hack to prevent left or right buttons from showing 0 index again
  // selectedIndex = 2;

  return (
    <>
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </Arrow>
    </>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  // selectedIndex = 2;

  return (
    <>
      {<Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </Arrow>}
    </>
  );
}

function Card({ onClick, selected, title, itemId, iconImage }) {
  const visibility = React.useContext(VisibilityContext);

  return (


    <div className={tw`focus:bg-gray-700 group bg-gray-500 rounded-2xl border-2 border-black hover:bg-white cursor-pointer `}
      onClick={() => onClick(visibility)}

      tabIndex={0}
    >
      <div className={tw`w-36 text-center `} >
        <div className={tw` font-bold  group-focus:text-white `}>{title}</div>









      </div>
      <img className={tw` h-20 w-full object-center object-contain`}
        src={iconImage}
      />

    </div>
  );
}


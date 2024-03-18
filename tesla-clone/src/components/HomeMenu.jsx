import { BsQuestionCircle, BsGlobe,  BsPersonCircle } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import React, { createContext, useContext, useState } from "react";
import Styled from 'styled-components';
import tw from  'twin.macro';
import VehicleSubmenu from './VehicleSubmenu.jsx';
import EnergySubmenu from './EnergySubmenu.jsx';
import ChargingSubmenu from './ChargingSubmenu.jsx';
import DiscoverSubmenu from './DiscoverSubmenu.jsx';
import ShopSubmenu from "./ShopSubmenu.jsx";
import { MenuContext } from "./HomeSections.jsx";

export const Context = createContext();

function HomeMenu() {

  const color = useContext(MenuContext);
  //Mobile menu view
  const [smallView, setSmallView] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(false);

  const mobileView = (event)=>{
    if(event.target.textContent=="Menu"){
      setSmallView(true);
     event.target.textContent = "X";
    }else if(event.target.textContent=="X"){
      setSmallView(false);
      event.target.textContent = "Menu";
      }
  }

  //lsubM =  large screen submenu
  const [lsubM, setLsubM] = useState("");
  const showSubmenu=(e)=>{
      const getTarget = e.target.textContent.trim();
      switch(getTarget){
        case "Vehicles": setLsubM("Vehicles"); break;
        case "Energy": setLsubM("Energy"); break;
        case "Charging": setLsubM("Charging"); break;
        case "Discover": setLsubM("Discover"); break;
        case "Shop": setLsubM("Shop"); break;
        default: setLsubM("");
      }
  }
    
const menuTags = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];
const menuItems = menuTags.map((items, index) => <MenuList key={index}>
                                                    <MenuWrapper onClick={showSubmenu}> {items} </MenuWrapper>
                                                    <SubmenuArrow onClick={()=> setMobileSubmenu(true)}> 
                                                      {mobileSubmenu===true? <MdKeyboardArrowRight />  : 
                                                      < MdKeyboardArrowDown onClick={()=> setMobileSubmenu(false)}/> }
                                                    </SubmenuArrow>
                                                  </MenuList> );

  return (
    <>
      <Container>
        <LogoWrapper $textCol={lsubM} $menuCol={color}>
          <LogoImg  src="./images/logo.svg" alt="tesla_logo"/>
        </LogoWrapper>

        <MenuContainer $mobileView={smallView} $textCol={lsubM} $menuCol={color}>
          {menuItems}
        </MenuContainer>

        <IconMenuwrapper $textCol={lsubM} $menuCol={color}>
          <IconMenuList> <BsQuestionCircle /> </IconMenuList>
          <IconMenuList> <BsGlobe /> </IconMenuList>
          <IconMenuList> <BsPersonCircle /> </IconMenuList>
        </IconMenuwrapper>
        <MobileMenu onClick={mobileView}>Menu</MobileMenu>
      </Container>
      <Context.Provider value={[lsubM, setLsubM]}>
          <VehicleSubmenu />
          <EnergySubmenu />
          <ChargingSubmenu />
          <DiscoverSubmenu />
          <ShopSubmenu />
      </Context.Provider>
    </>
  )
}


const Container = Styled.section`${tw`flex justify-between items-center w-screen fixed top-0 left-0 pr-10 pl-10 mt-5 mb-5 z-30
md:pr-5 md:pl-5 md:z-20`}`;

const LogoWrapper = Styled.div`${tw`cursor-pointer`} 
${props => props.$textCol !== "" && tw`invert-0`}
${props => props.$menuCol == true && tw`invert`}`;

const LogoImg = Styled.img`${tw`md:w-[80%]`}`;

const MenuContainer = Styled.nav`${tw`md:absolute top-0 left-0 md:h-screen md:w-screen md:flex md:flex-row md:justify-center md:pt-20 `}
${props => props.$mobileView == true? tw`md:block` : tw`md:hidden`}
${props => props.$textCol !== "" && tw`text-black`}
${props => props.$menuCol == true && tw`text-white`}`;

const MenuList = Styled.div`${tw`inline md:block md:m-3 md:w-full md:flex md:justify-between hover:bg-trans-white backdrop-blur-2xl`}`;

const MenuWrapper=Styled.div`${tw`inline mr-3 ml-3 cursor-pointer p-2 pt-1 pb-1 rounded-lg`}`

const IconMenuwrapper = Styled.div`${tw`flex md:hidden`} 
${props => props.$textCol !== "" && tw`text-black`}
${props => props.$menuCol == true && tw`text-white`}`;

const IconMenuList = Styled.div`${tw`mr-2 ml-2 cursor-pointer`}`

const MobileMenu = Styled.div`${tw`p-2 pt-1 pb-1 bg-trans-white backdrop-blur-2xl rounded-lg hidden md:block text-center`}`;

const SubmenuArrow = Styled.div`${tw`hidden md:block md:m-3 md:mr-4`}`;

export default HomeMenu
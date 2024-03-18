import Styled from  'styled-components';
import { Shop } from './data/ProductsData.jsx';
import tw from 'twin.macro';
import { useContext} from 'react';
import {Context} from "./HomeMenu.jsx";

function ShopSubmenu() {

    const [lsubM, setLsubM] = useContext(Context)

    const leftItems = Shop.map(item =>{return(
                                            <LeftMenuList key={item.id}>
                                                <CarImage src={ item.image } alt='car'/>
                                                <VehicleInfo>{item.title}</VehicleInfo>
                                            </LeftMenuList>
                                        )});

  return (
    <Container $status={lsubM}>
        <Wrapper onMouseLeave={()=>{setLsubM("")}}>

            <LeftMenuWrapper>{leftItems}</LeftMenuWrapper>

        </Wrapper>
    </Container>
  )
}

const Container = Styled.section`${tw`absolute top-0 left-0 w-screen h-screen z-10 bg-trans-white backdrop-blur-xl`}
${props => props.$status === "Shop"? tw`block` : tw`hidden`}`;
const Wrapper = Styled.div`${tw`bg-white flex justify-center items-center pt-32 pr-48 pl-48 pb-16 `}`;
const LeftMenuWrapper = Styled.div`${tw`flex justify-start items-center flex-wrap`}`;
const LeftMenuList = Styled.div`${tw`text-center mr-4 ml-4 mb-6 `}`;
const RightMenuWrapper = Styled.div`${tw`border-l-2 flex flex-col w-[25%] pl-4`}`;
const RightMenuList = Styled.p`${tw`font-semibold text-sm p-0 m-1 w-fit cursor-pointer`}`;
const CarImage = Styled.img`${tw`w-40 cursor-pointer`}`;
const VehicleInfo = Styled.h1`${tw`font-semibold`}`;
const LinkWrapper = Styled.div``;
const Link = Styled.p`${tw`inline text-xs text-slate-500 mr-3 border-b border-slate-500 cursor-pointer`}`;


export default ShopSubmenu
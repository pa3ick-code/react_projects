import { Cars } from './data/ProductsData';
import {Fade, Slide} from 'react-awesome-reveal';
import Styled from 'styled-components';
import tw from 'twin.macro';
import HomeMenu from './HomeMenu.jsx';
import Footer from './Footer.jsx';
import { createContext, useState } from 'react';

export const MenuContext = createContext();

function HomeSections() {

    const regex = new RegExp(/(.mp4)/gi);
    const menuRegex =new RegExp(/(Model Y|Experience Tesla|Solar Panel)/gi);
    const [menuCol, setMenuCol] = useState(false);

    function handleMenuCol(e){
        if(menuRegex.test(e.currentTarget.textContent)){
            setMenuCol(true);
        }else{
            setMenuCol(false);
        }
    }

    const items = Cars.map(item =>{
        return (
            <Container key={item.id} $bg={regex} $img={item.bgSrc}> 
                <VideoBg muted loop autoPlay>
                    <source src={regex.test(item.bgSrc)? `./images/${item.bgSrc}` : ''} type="video/mp4"/>
                </VideoBg>
                <Wrapper>
                    <Slide direction='up'>
                        <DetailWrapper $textCol={item.textColor}>
                            <Model>{item.title}</Model>
                            <Cost>{item.cost}</Cost>
                            <ModelDesc>{item.description}</ModelDesc>
                            <CostDetail>{item.costDetail}</CostDetail>
                        </DetailWrapper>
                    </Slide>
                    <Slide direction='up'>
                    {
                        item.btn == "SD" && <GroupBtn>
                                                <Btn>Shop Available</Btn>
                                                <Btn $black>Demo Drive</Btn>
                                            </GroupBtn>
                    }           
                    {
                        item.btn == "CD" && <GroupBtn>
                                                <Btn>Custom Order</Btn>
                                                <Btn $black>Demo Drive</Btn>
                                            </GroupBtn>
                    }
                    {
                        item.btn == "OL" && <GroupBtn>
                                                <Btn>Order Now</Btn>
                                                <Btn $black>Learn More</Btn>
                                            </GroupBtn>
                    }
                    {
                        item.btn == "D" && <GroupBtn>
                                                <Btn $border>Demo Drive</Btn>
                                            </GroupBtn>
                    }
                    {
                        item.btn == "S" && <GroupBtn>
                                                <Btn >Shop Now</Btn>
                                            </GroupBtn>
                    }
                    </Slide>
                </Wrapper>
                <Fade delay={200}>  
                    <InfoWrapper $textCol={item.textColor}>
                        <Info>{item.info}</Info>
                        {
                            item.btn == "S" && <Footer />
                        }
                    </InfoWrapper>
                </Fade>
            </Container>
        )
    });
  return (
    <SnapContainer>
      <MenuContext.Provider value={menuCol}>
        <HomeMenu />
      </MenuContext.Provider>
      <div onMouseOverCapture={handleMenuCol}> {items} </div>
    </SnapContainer>
  )
}

const SnapContainer = Styled.section`${tw`w-screen h-screen snap-y snap-mandatory overflow-x-hidden tracking-wider`}`
const Container = Styled.div`${tw`w-screen h-screen p-1 bg-cover bg-no-repeat snap-center `}
${props => !props.$bg.test(props.$img) && `background-image: url("./images/${props.$img}")`}`;

const Wrapper = Styled.div`${tw`flex flex-col justify-between items-center w-full h-5/6 mt-16`}`;

const VideoBg = Styled.video`${tw`absolute left-0 top-0 w-full h-full object-cover object-center z-[-1]`}`;

const DetailWrapper = Styled.div`${props=>props.$textCol === "White"? tw`text-white` : tw`text-black`}`;

const Model = Styled.h1`${tw`font-semibold text-4xl text-center`}`;

const Cost = Styled.p`${tw`text-center font-medium text-xl `}`;

const CostDetail = Styled.p`${tw`text-xs font-light text-center`}`;

const ModelDesc = Styled.p`${tw`text-center text-lg`}`;

const GroupBtn = Styled.div`${tw`flex `}`;

const Btn = Styled.div`${tw`w-64 text-center bg-white m-4 h-10 flex items-center justify-center rounded opacity-95 backdrop-blur-xl cursor-pointer`}
${props => props.$black && tw`bg-zinc-800 text-white`};
${props => props.$border && tw`border-2 bg-transparent border-white text-white`}`;

const InfoWrapper = Styled.div`${props=>props.$textCol === "White"? tw`text-white` : tw`text-black`}`;

const Info = Styled.p`${tw`text-center text-xs font-light tracking-normal`}`;

export default HomeSections
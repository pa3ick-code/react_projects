import Styled from  'styled-components';
import tw from 'twin.macro';
import { useContext} from 'react';
import {Context} from "./HomeMenu.jsx";

function DiscoverSubmenu() {

    const [lsubM, setLsubM] = useContext(Context);

  return (
    <Container $status={lsubM}>
        <Wrapper onMouseLeave={()=>{setLsubM("")}}>

            <MenuWrapper>
                <Title>Resouces</Title>
                <MenuList>Demo Drive</MenuList>
                <MenuList>Insurance</MenuList>
                <MenuList>Video Guides</MenuList>
                <MenuList>Customer Stories</MenuList>
                <MenuList>Events</MenuList>
            </MenuWrapper>

            <MenuWrapper>
                <Title>Location Services</Title>
                <MenuList>Find Us</MenuList>
                <MenuList>Trip Planner</MenuList>
                <MenuList>Find a Collision Center</MenuList>
                <MenuList>Find a Certified Installer</MenuList>
            </MenuWrapper>

            <MenuWrapper>
                <Title>Company</Title>
                <MenuList>About</MenuList>
                <MenuList>Careers</MenuList>
                <MenuList>Investor Relations</MenuList>
            </MenuWrapper>

        </Wrapper>
    </Container>
  )
}

const Container = Styled.section`${tw`absolute top-0 left-0 w-screen h-screen z-10 bg-trans-white backdrop-blur-xl`}
${props => props.$status === "Discover"? tw`block` : tw`hidden`}`;
const Wrapper = Styled.div`${tw`bg-white flex justify-center items-start pt-20 pr-48 pl-48 pb-16 `}`;
const MenuWrapper = Styled.div`${tw`m-12`}`;
const MenuList = Styled.h1`${tw`font-semibold text-sm mb-2 cursor-pointer`}`;
const Title = Styled.p`${tw`text-sm font-light mb-6 text-zinc-500`}`;


export default DiscoverSubmenu
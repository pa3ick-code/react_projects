import Styled from "styled-components";
import tw from 'twin.macro';

function Footer() {
    const d = new Date().getFullYear();
  return (
    <div>
        <Container>
            <MenuList>Tesla &copy; {d} </MenuList>
            <MenuList>Privacy & Legal</MenuList>
            <MenuList>Vehicle Recalls</MenuList>
            <MenuList>Contact</MenuList>
            <MenuList>News</MenuList>
             <MenuList>Get Updates</MenuList>
              <MenuList>Locations</MenuList>
        </Container>
    </div>
  )
}

const Container =Styled.div`${tw`flex flex-wrap justify-center`}`
const MenuList = Styled.p`${tw`m-5 text-center text-xs font-light text-gray-100 cursor-pointer`}`

export default Footer
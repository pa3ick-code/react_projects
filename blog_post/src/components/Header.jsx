import styled from 'styled-components'
import tw from  'twin.macro'
import { TbCircleArrowRightFilled } from "react-icons/tb"
import { RiSearchFill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <MainWrap>
            <Link to="/">
                <LogoWrap>G<TbCircleArrowRightFilled/> TECH</LogoWrap>
            </Link>

            <MenuWrap>
                <Link to="/"><p>Blog</p></Link>
                <a href="https://github.com/pa3ck/">Source Code</a>
                <a href="https://patrickfidel.com">Contact Developer</a>
            </MenuWrap>

            <IconWrap>
                <RiSearchFill />
                <BsBellFill />
                <LoginWrap>
                    <AvatarCont>
                        <AvatarImg src='https://source.unsplash.com/a-person-holding-a-laptop-7mBictB_urk'/>
                    </AvatarCont>
                    Login
                </LoginWrap>
            </IconWrap>
        </MainWrap>
    </>
  )
}

const MainWrap = styled.section`
    ${tw`flex justify-between items-center mt-5 h-fit `}
`
const LogoWrap = styled.div`
    ${tw`font-black text-2xl flex items-center flex-nowrap md:justify-between md:text-lg`}
`
const MenuWrap = styled.div`
    & *{ ${tw`inline mr-5 ml-5 font-light cursor-pointer md:text-sm md:mr-1 md:ml-1`} }
`
const IconWrap = styled.div`
    ${tw`flex items-center md:hidden`}
    & * { ${tw`mr-3`} }
`
const LoginWrap = styled.div`
    ${tw`bg-zinc-300  pr-4 pl-4 rounded-md w-28 flex items-center text-sm font-light text-zinc-700`}
    & * { ${tw`inline`} }
`
const AvatarCont = styled.div`
    ${tw`mt-1 mb-1  w-7 h-7 rounded-full`}
`
const AvatarImg = styled.img`
    ${tw`object-cover object-center w-7 h-7 rounded-full`}
`

export default Header
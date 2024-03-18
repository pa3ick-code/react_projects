import { IoIosArrowRoundForward } from "react-icons/io";
import { GiSupersonicArrow } from "react-icons/gi";
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import tw from "twin.macro";

export const MainWrap = styled.section`
    ${tw`mt-20 `}
`
export const TitleWrap = styled.div`
    ${tw`flex justify-between items-center`}
`
export const Title = styled.h1`
    ${tw`font-black text-5xl md:text-3xl`}
`
export const AppPost = styled(Link)`
    ${tw`bg-zinc-200 rounded-3xl p-3 pr-5 pl-5 cursor-pointer md:pr-3 md:pl-3 md:p-3`}
`
export const AddPostIcon = styled(GiSupersonicArrow)`
    ${tw`inline ml-4 md:ml-2`}
`
export const BlogWrap = styled.div`
    ${tw`mt-10 grid grid-cols-3 grid-flow-dense gap-4 md:grid-cols-1 xl:grid-cols-2`}
`
export const BlogPost = styled.div`
    ${tw`relative overflow-hidden cursor-pointer rounded-xl`}
    &:hover > img { ${tw`grayscale relative z-[-1]`} }
`
export const ContentWrap = styled.div`
${tw` w-full p-5 pr-4 pl-4 text-white text-center xl:pr-2 xl:pl-2`}
& > h1 { ${tw`font-bold text-2xl mb-4 xl:text-xl`} }
& > p { ${tw` text-base mb-4 xl:text-sm`} }
`;
export const ImageWrap = styled.div`
    ${tw`h-80 overflow-hidden`}
`
export const FeaturedImage = styled.img`
    ${tw`w-full h-full inline-block object-cover transition-all duration-200`}
`
export const ReadMore = styled.p`
    ${tw`bg-green-600 p-2 pr-4 pl-4 w-1/2 m-auto rounded-lg text-center xl:pr-2 xl:pl-2`}
`
export const ReadArrow = styled(IoIosArrowRoundForward)`${tw`inline`}
`
export const FadeText = styled(Fade)`
    ${tw`absolute z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-10/12 backdrop-blur-sm p-2 pr-3 pl-3 md:pr-3`}
`
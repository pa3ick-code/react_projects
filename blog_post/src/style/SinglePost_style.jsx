import styled from "styled-components";
import tw from "twin.macro";


export const Wrapper = styled.div`${tw`w-10/12 m-auto`}`

export const PostTitle = styled.h1`${tw`font-bold text-4xl w-9/12 mb-3 mt-10 capitalize`}`

export const PostImgWrap = styled.div`${tw`w-full h-[20%] mt-20 overflow-hidden`}`;

export const FeaturedImage = styled.img`${tw`w-full h-96 object-cover object-center `}`;

export const PostDetailWrap = styled.div`${tw``}`;

export const PostDetail = styled.div`${tw`flex justify-start items-center text-neutral-500 mt-3 mb-10`}
& div { ${tw`flex items-center mr-10 cursor-pointer`} }
& div:hover { ${tw`text-green-500`} }
& div > p { ${tw`italic text-sm ml-2 font-light`} }
`;
export const ContentWrap =styled.div`${tw`flex items-start justify-between h-auto mb-10 md:flex-wrap`}`

export const PostContent = styled.div`${tw`text-lg mr-20 text-slate-700`}`;

export const ContentImage = styled.img`${tw`w-80 h-96 object-cover object-center`}`

export const HomeBtn = styled.button`${tw`bg-green-600 p-2 pr-4 pl-4 rounded-lg text-center text-white flex items-center m-auto mb-20`}
& span { ${tw`mr-3`} }
`;

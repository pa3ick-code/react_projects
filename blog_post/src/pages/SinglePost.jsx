import Header from "../components/Header.jsx";
import { useParams, Link } from "react-router-dom";
import { GiCalavera, GiFingerPrint, GiIceIris } from "react-icons/gi";
import { IoArrowBackCircle } from "react-icons/io5"
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/PostSlice.jsx";
import { Slide } from "react-awesome-reveal"
import {
  Wrapper,
  PostImgWrap,
  FeaturedImage,
  PostDetailWrap,
  PostDetail,
  PostTitle,
  ContentWrap,
  ContentImage,
  PostContent,
  HomeBtn
} from "../style/SinglePost_style.jsx"


function SinglePost() {

const param = useParams();
const post = useSelector(selectAllPosts);

const GetImage = ()=>{
  const checkImage = post[param.id].featuredImage;
  if(checkImage.charAt(0) === "."){
    return(`.${post[param.id].featuredImage}`)
  }else{
    return(post[param.id].featuredImage)
  }
}

  return (
    <>
        <Wrapper>
            <Header />

        
              <PostImgWrap>
                <Slide direction="up">
                  <FeaturedImage src={GetImage()} alt="image" />
                </Slide>
              </PostImgWrap>

            <PostDetailWrap>
              <Slide direction="up" delay={500}>
                <PostDetail>
                    <div><GiCalavera /> <p>{post[param.id].user}</p></div>
                    <div><GiFingerPrint /> <p>Sep, 2024</p></div> 
                    <div><GiIceIris/> <p>853</p></div>
                </PostDetail>
              </Slide>
            </PostDetailWrap>

            <PostTitle>{post[param.id].title}</PostTitle>
            <ContentWrap>
                <PostContent> {post[param.id].content} </PostContent>
                <ContentImage src="https://source.unsplash.com/a-stack-of-books-sitting-in-front-of-a-computer-1Lt1ny9nGWY"/>
            </ContentWrap>

            <Link to={`/`}><HomeBtn>
              <span><IoArrowBackCircle/></span> Go back
            </HomeBtn></Link>
        </Wrapper>
    </>
  );
}

export default SinglePost;

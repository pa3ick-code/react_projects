import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "../features/PostSlice.jsx";
import { Bounce } from "react-awesome-reveal";
import PostExercpt from "./PostExercpt.jsx";
import { 
    MainWrap,
    TitleWrap,
    Title,
    AppPost,
    AddPostIcon,
    BlogWrap,
    BlogPost,
} from "../style/Post_styled.jsx"
import { useEffect } from "react";

function Post() {
    const dispatch = useDispatch();
    const  post = useSelector(selectAllPosts).toReversed();
    const  postStatus = useSelector(getPostsStatus);
    const  postError = useSelector(getPostsError);

    useEffect(()=>{
        postStatus === "idle"  && dispatch(fetchPosts());
    },[postStatus, dispatch])

    let content;
    if(postStatus === "loading"){
        content =  <Bounce>Loading...</Bounce>;
    }else if (postStatus === "success"){
        content = post.map(item =>{
        return(
            <BlogPost key={item.id}>
                <PostExercpt item={item} />
            </BlogPost>
        )
    }); 
    console.log(post)
    }else if(postStatus==="error"){
        content = <Bounce>Failed</Bounce>
    }
    
  return (
    <MainWrap>
        <TitleWrap>
            <Title>Blog</Title>
            <Bounce>
                <AppPost to="/add-post">Add blog post <AddPostIcon /> </AppPost>
            </Bounce>
        </TitleWrap>
        <BlogWrap>
            {content}
        </BlogWrap>
    </MainWrap>
  );
}

export default Post;

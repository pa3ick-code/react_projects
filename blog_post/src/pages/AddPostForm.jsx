import Header from "../components/Header";
import styled from "styled-components";
import tw from "twin.macro";
import { useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { addPost, selectAllPosts } from "../features/PostSlice";

function AddPostForm() {
  const id =  useSelector(selectAllPosts).length + 1;
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');
  const [author, setAuthor] = useState('');

  const canSubmit = Boolean(title)  && Boolean(content) && Boolean(author) && Boolean(file);

  const  handleSubmit = (e) => {
    e.preventDefault();
    
    if(canSubmit){
        dispatch(
          addPost(id, title, author, file, content)
          );
        document.getElementById("textContent").value = "";
        document.getElementById("feedback").textContent = "Post upload successfull!";
        setTimeout(() => {
        document.getElementById("feedback").style.display ="none";
        }, 3000);
    }
      setTitle('');
      setContent('');
      setAuthor('');
      setFile('')
  }

  return (
    <Wrapper>
      <Header />
      <FormWrap>
        <form onSubmit={handleSubmit}>
          <InputField 
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          />

          <InputField 
          type="text"
          placeholder="Post author name"
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
          />
       
          <InputField
          id="upload"
          multiple={false}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e)=> setFile(URL.createObjectURL(e.target.files[0]))}
          />

          <PostContent 
          id="textContent"
          placeholder="Enter post content" 
          onChange={(e)=>{setContent(e.target.value);}}
          ></PostContent>

          <InputField 
          type="Submit"
          value="Submit"
          disabled={!canSubmit}
          />
           <div id="feedback"></div>
        </form>
      </FormWrap>
    </Wrapper>
  );
}

const Wrapper =styled.section`${tw`w-10/12 m-auto h-screen`}`;

const FormWrap = styled.div`${tw`flex items-center justify-center mt-20 `}`;

const InputField = styled.input`
  ${tw`block bg-zinc-200 w-[30rem] rounded-3xl pt-3 pb-3 mb-3 pl-10 pr-10`}
  &:focus {outline: none;}
  &[type="file"]{ ${tw`relative bg-transparent cursor-pointer w-fit text-center m-auto mb-3`} }
  &[type="file"]::-webkit-file-upload-button{ ${tw`text-green-500 rounded-xl border-none p-2 pr-4 pl-4`} }
  &[type="submit"]{ ${tw`bg-green-500 text-white p-3 pr-4 pl-4 rounded-3xl text-center cursor-pointer`} }
`;
const PostContent = styled.textarea`
  ${tw`block bg-zinc-200 w-[30rem] rounded-3xl pt-3 pb-3 mb-3 pl-10 h-52 resize-none `}
  &:focus {outline: none;}
  `

export default AddPostForm;

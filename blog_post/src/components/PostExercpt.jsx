import { Link } from 'react-router-dom';
import {
    FadeText,
    ContentWrap,
    ReadMore,
    ReadArrow,
    ImageWrap,
    FeaturedImage
} from '../style/Post_styled'

function PostExercpt({ item }) {
  return (
    <div>
        <Link to={`/single-post/${item.id -1}`}>
            <FadeText delay={500}>
            <ContentWrap>
                <h1>{item.title}</h1>
            <p>{`${item.content.slice(0,100)}...`}</p>
                <ReadMore >
                    Read More <ReadArrow/>
                </ReadMore>
                </ContentWrap>
            </FadeText>
            <ImageWrap>
                <FeaturedImage src={item.featuredImage}/>
            </ImageWrap>
        </Link>
    </div>
  );
}

export default PostExercpt;

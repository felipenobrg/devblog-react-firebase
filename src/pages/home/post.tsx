import { Heart } from "phosphor-react";
import { Post as IPost } from "./index";
import "./post.css";
import { addDoc, getDocs, collection, query, where } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

interface Props {
  post: IPost;
}

export const Post = (props: Props) => {
  const { post } = props;
  const { user } = useAuthState(auth)

  

  const likesRef = collection(db, "likes");

  const likesDoc = query(likesRef, where("postId", "==", post.id ))

  const getLikes = async () => {
   const data = getDocs(likesDoc)
  }
  const addLike = async () => {
    await addDoc(likesRef, { userId: user?.uid, postId: post.id })
     
    };


  useEffect(() => {
    getLikes()
  }, [])
  return (
    <div className="posts-container">
      <div className="posts">
      <header>
        <h1 className="title-h1">{post.title}</h1>
      </header>
      <section className="section-posts">
        <div>
          <p>{post.description}</p>
        </div>
      </section>
      <footer>
        <p> @{post.username} </p>
        <button onClick={addLike}><Heart /></button>
        <p>Likes: {}</p>
      </footer>
      </div>
    </div>
  );
};

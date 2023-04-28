import { ThumbsDown, ThumbsUp } from "phosphor-react";
import { Post as IPost } from "./index";
import "./post.css";
import { addDoc, getDocs, deleteDoc, collection, query, where, doc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
  post: IPost;
}

interface Likes {
   likeId: string;
   userId: string;
}

export const Post = (props: Props) => {
  const { post } = props;
  const [ user ] = useAuthState(auth);

  const [likes, setLikes] = useState<Likes[] | null>(null);

  const likesRef = collection(db, "likes");

  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id })));
  };

  const addLike = async () => {
    try {
    const newDoc = await addDoc(likesRef, { userId: user?.uid, postId: post.id });
    if (user) {
    setLikes((prev) =>
     prev 
     ? [...prev, {userId: user?.uid, likeId: newDoc.id}] 
     : [{ userId: user?.uid, likeId: newDoc.id }]
     )
  }
} catch (err) {
  console.log(err)
}
}

const removeLike = async () => {
  try {
    const likeToDeleteQuery = query(
      likesRef,
      where("postId", "==", post.id), 
      where("postId", "==", user?.uid)
    )
    const likeToDeleteData = await getDocs(likeToDeleteQuery)
    const likeId =  likeToDeleteData.docs[0].id
    const likeToDelete = doc(db, "likes", likeId)
    await deleteDoc(likeToDelete)
   if (user) {
   setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId )
   )
}
} catch (err) {
console.log(err)
}
}
  const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

  useEffect(() => {
    getLikes();
  });

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
          <button onClick={hasUserLiked ? removeLike : addLike}>
            { hasUserLiked ?  <ThumbsUp /> : <ThumbsDown />}
          </button>
          {likes && <p>Likes: {likes.length}</p>}
        </footer>
      </div>
    </div>
  );
};

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./style.css";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Home = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="main-page">
      {postsList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

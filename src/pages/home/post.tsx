import { Post as IPost } from "./index";
import "./post.css";

interface Props {
  post: IPost;
}

export const Post = (props: Props) => {
  const { post } = props;
  return (
    <div className="posts-container">
      <div className="teste">
      <header>
        <h1>{post.title}</h1>
      </header>
      <section className="section-posts">
        <div>
          <p>{post.description}</p>
        </div>
      </section>
      <footer>
        <p> @{post.username} </p>
      </footer>
      </div>
    </div>
  );
};

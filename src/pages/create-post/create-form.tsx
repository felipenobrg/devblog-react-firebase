import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./style.css";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onCreatePost)}>
        <div className="section-create">
        <h1 className="create-h1">Create a New Post</h1>
        <div className="create-post">
        <input className="title-create" placeholder="Title..." {...register("title")} />
        <p className="errors"> {errors.title?.message} </p>
        <input className="description-create" placeholder="Description..." {...register("description")} />
        <p className="errors"> {errors.description?.message} </p>
        <input className="button-submit" type="submit" value="Submit" />
        </div>
        </div>
      </form>
    </>
  );
};

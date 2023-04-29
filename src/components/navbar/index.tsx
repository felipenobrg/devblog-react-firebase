import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./style.css";
import { Code, SignOut } from "phosphor-react";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="navbar-container">
       <h4 className="logo-blog"> <a href="/"> Dev Blog <Code size={40} color="#9B06CE" weight="fill"/></a></h4>
       <div className="links">
        <Link className="home" to="/">
          Home
        </Link>
        {!user ? (<Link className="login" to="/login">
          Login
        </Link> ) : (
       <Link className="createPost" to="/createpost">
          Create Post
       </Link> 
        )}
        </div>
        {user && (
          <>
            <p className="user-p">{user?.displayName}</p>
            <img className="img-user" src={user?.photoURL || ""} />
            <button className="logout-button" onClick={signUserOut}>
             <SignOut size={30} weight="fill"/> 
            </button>
          </>
        )}
      </div>
    </>
  );
};

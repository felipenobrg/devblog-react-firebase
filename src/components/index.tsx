import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./style.css";
import { SignOut } from "phosphor-react";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="navbar-container">
        <Link className="home" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link className="login" to="/login">
          {" "}
          Login{" "}
        </Link>

        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} />
            <button className="logout-button" onClick={signUserOut}>
             <SignOut size={28} weight="fill"/> 
            </button>
          </>
        )}
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="navbar-container">
        <Link className="home" to="/"> Home </Link>
        <Link className="login" to="/login"> Login </Link>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} width="100" height="100" />
      </div>
    </>
  );
};

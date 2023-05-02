import { auth, provider } from "../../config/firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import './style.css'

export const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
      await signInWithPopup(auth, provider)
      navigate("/")
    }

    return ( 
    <div className="section-container">
    <div><h4 className="sign-google">Sign In With Google To Continue</h4></div>
    <button className="button-google" onClick={signInWithGoogle}> <img className="google-logo" src="https://img.freepik.com/icones-gratis/procurar_318-265146.jpg" alt="Google Logo" /> Continue with Google </button>
    </div>
    )
}
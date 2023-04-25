import { auth, provider } from "../../config/firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import './style.css'

export const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
      const result = await signInWithPopup(auth, provider)
      navigate("/")
    }

    return ( 
    <div className="section-container">
    <div className="p"><p>Sign In With Google To Continue</p></div>
    <button className="button-google" onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
    )
}
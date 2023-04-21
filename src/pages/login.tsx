import { auth, provider } from "../config/firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
      const result = await signInWithPopup(auth, provider)
      
    }

    return ( 
    <>
    <div><p>Sign In With Google To Continue</p></div>
    <button onClick={signInWithGoogle}>Sign in With Google</button>
    </>
    )
}
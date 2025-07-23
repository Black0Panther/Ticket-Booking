import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
 

// func for sign in us ng firbas
   const handleSignin = async () => {
     
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user.emailVerified) {
        navigate("/booking");
      } else {
        alert("Email not verified. Please check your inbox.");
      }
    } catch (error) {
      alert(error.message);
    }
  };
    return <>
      <div className="bg-[#F0F1FF] min-h-[calc(100vh-70px)] flex items-center justify-center ">
         <div className="bg-white w-80 h-96 rounded-xl shadow-lg p-4 flex items-center justify-center">
            <div className="flex flex-col gap-10 items-center p-8">
                <p className="text-2xl font-bold">Sign In</p>
                <div className="flex flex-col gap-6">
                <input className="rounded px-2 border border-gray-400" type="email" 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)} />
                <input className="rounded px-2 border border-gray-400" type="password"
                placeholder="Password" 
               onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex flex-col gap-4">
                <button onClick={handleSignin} className="bg-[#5664F5] hover:bg-blue-500 text-white rounded-xl px-2 py-1 w-52">Sign In</button>
                <button onClick={()=>nav('/signup')} className="bg-gray-600 hover:bg-blue-500 text-white rounded-xl px-2 py-1 w-52">Sign Up</button>
</div>
            </div>
         </div>
      </div>
    
    </>
}

export default Login
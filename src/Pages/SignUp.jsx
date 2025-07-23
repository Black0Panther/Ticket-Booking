import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = ()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
    const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert("Verification email sent. Please verify before logging in.");
       navigate("/login"); 
    } catch (error) {
      alert(error.message);
    }
    setEmail("");
    setPassword("")
  };

    return <>
      <div className="bg-[#F0F1FF] min-h-[calc(100vh-70px)] flex items-center justify-center">
         <div className="bg-white w-80 h-96 rounded-xl shadow-lg p-4 flex items-center justify-center">
            <div className="flex flex-col gap-10 items-center p-8">
                <p className="text-2xl font-bold">Sign Up</p>
                <div className="flex flex-col gap-6">
                <input className="rounded px-2 border border-gray-400" type="email"
                 placeholder="Email"
                 onChange={(e)=>setEmail(e.target.value)} />
                <input className="rounded px-2 border border-gray-400" type="password"
                placeholder="Password" 
                onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                  <div className="flex flex-col gap-4">
                <button onClick={handleSignup} className="bg-[#5664F5] hover:bg-blue-500 text-white rounded-xl px-2 py-1 w-52">Sign Up</button>
          <button onClick={()=>nav('/signin')} className="bg-gray-600 hover:bg-blue-500 text-white rounded-xl px-2 py-1 w-52">Sign In</button>
</div>
            </div>
         </div>
      </div>
    
    </>
}

export default SignUp
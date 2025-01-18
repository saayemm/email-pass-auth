import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../../firebase/firebase.config"
import { useState } from "react"
import { IoIosEye, IoIosEyeOff  } from "react-icons/io";


const Register = () => {

  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPass, setShowPass] = useState(false)

  const hundleRegister = e => {
    e.preventDefault()
    const email = e.target.email.value
    const pass = e.target.password.value

    setRegisterError('')
    setSuccess('')


    if(pass.length < 6){
      setRegisterError("Password must be 6 character or longer")
      return
    }

    
    createUserWithEmailAndPassword(auth, email, pass)
    .then(result=>{
      console.log(result.user)
      setSuccess("You created profile successfully")
    })
    .catch(error=> {
      console.error(error)
      setRegisterError("Already have an account")
    })
  }
  return (
    <div className="flex flex-col max-w-[500px] items-center m-auto bg-slate-800 p-16 rounded-lg text-white ">
        <h2 className="text-2xl font-bold mb-2">Please Register</h2>

        <form  onSubmit={hundleRegister}>
          <input className="mb-2 p-2 bg-transparent border border-zinc-500 rounded-md" 
          type="email" 
          name="email" 
          placeholder="Email" />
          <br />
          <div className="flex items-center">
          <input className="mb-2 p-2 bg-transparent border border-zinc-500 rounded-md" 
          type={showPass ? "text" : "password"}
           name="password" 
           placeholder="Password" />
          <span onClick={()=>setShowPass(!showPass)} className="cursor-pointer -ml-6">
            {
              showPass ? <IoIosEyeOff /> :  <IoIosEye />
            }
          </span>
          </div>
          <br />
          <input className="bg-green-800 px-6 py-2 rounded-md cursor-pointer text-white" 
          type="submit" 
          name="Submit" />
        </form>
        {
          registerError && <p className="text-red-700">{registerError}</p>
        }
        {
          success && <p className="text-green-700">{success}</p>
        }
    </div>
  )
}

export default Register
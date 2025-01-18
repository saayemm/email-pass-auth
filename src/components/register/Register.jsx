import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../../firebase/firebase.config"


const Register = () => {
  const hundleRegister = e => {
    e.preventDefault()
    const email = e.target.email.value
    const pass = e.target.password.value
    createUserWithEmailAndPassword(auth, email, pass)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=> {
      console.error(error)
    })
  }
  return (
    <div className="flex flex-col max-w-[500px] items-center m-auto bg-slate-800 p-16 rounded-lg text-white ">
        <h2 className="text-2xl font-bold mb-2">Please Register</h2>

        <form  onSubmit={hundleRegister}>
          <input className="mb-2 p-2 bg-transparent border border-zinc-500 rounded-md" type="email" name="email" placeholder="Email" />
          <br />
          <input className="mb-2 p-2 bg-transparent border border-zinc-500 rounded-md" type="password" name="password" placeholder="Password" />
          <br />
          <input className="bg-green-800 px-6 py-2 rounded-md cursor-pointer text-white" type="submit" name="Submit" />
        </form>
    </div>
  )
}

export default Register
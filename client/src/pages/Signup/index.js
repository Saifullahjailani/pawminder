import React from 'react'
import "./signup.css"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {useState} from "react"

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className="signup">
      <Input def={"Username"} setState={setUsername} position={{top: "23vh", left:"15vw"}}/>
      <Input def={"Email"} setState={setEmail} position={{top: "33vh", left:"15vw"}}/>
      <Input inpType="password" def={"Password"} setState={setPassword} position={{top: "43vh", left:"15vw"}}/>
      <Input inpType="Confirm Passowrd" def={"Password"} setState={setConfPassword} position={{top: "53vh", left:"15vw"}}/>

      <Button txt="Create Account" position={{top:"68vh", left:"15vw"}} params={{username, password, confPassword, email}} func={createAccount}/>
    </div>
  )
}
function createAccount({username, password}){
    
}

export default Signup
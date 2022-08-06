import React from 'react'
import "./login.css"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {useState} from "react"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
    return (
    <div className='Login'>
    <Input def={"Username"} setState={setUsername} position={{top: "33vh", left:"15vw"}}/>
    <Input inpType="password" def={"Password"} setState={setPassword} position={{top: "43vh", left:"15vw"}}/>

    <Button txt="Login" position={{top:"55vh", left:"15vw"}} params={{username, password}} func={loginFunc}/>
    <Button path={"/signup"} txt="Sign Up" position={{top:"65vh", left:"15vw"}} />
    </div>
)
  }

function loginFunc({username, password}){
    
}
export default Login;
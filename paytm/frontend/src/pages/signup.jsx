import axios from "axios"
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { InputBox } from "../components/inputBox";
import { SubHeading } from "../components/subHeading";
import { BottomWarning } from "../components/bottomWarning"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const navigate = useNavigate() 
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
    <div className="flex justify-center h-screen bg-gradient-to-br from-black to-transparent">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg text-center p-2 h-max px-4 w-80">
                
                <Heading label={'Sign up'}/>
                <SubHeading label={'Enter your information to create an account'}/>
                <InputBox label={'First Name'} placeholder={'John'} onChange={e => setFirstname(e.target.value)} />

                <InputBox label={'Last Name'} placeholder={'Doe'} onChange={e => setLastname(e.target.value)} /> 

                <InputBox label={'Email'} placeholder={'johndoe@example.com'} onChange={e => setUsername(e.target.value)} />

                <InputBox label={'Password'} placeholder={'abc@123'} onChange={e => setPassword(e.target.value)} />

                <div className="pt-4">
                    <Button label={'Sing up'} onClick={async () => {
                        const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                            firstName,
                            lastName, 
                            username,
                            password
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate('/dashboard')
                    }} />
                </div>

                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>  
        </div>
    </div>
    )
} 
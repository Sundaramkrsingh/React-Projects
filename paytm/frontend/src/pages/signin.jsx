import { BottomWarning } from "../components/bottomWarning";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { InputBox } from "../components/inputBox";
import { SubHeading } from "../components/subHeading";

export function Signin() {
    return(
    <div className="flex justify-center h-screen bg-gradient-to-br from-black to-transparent">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg text-center p-2 h-max px-4 w-80">
                
                <Heading label={'Sign in'} />
                <SubHeading label={'Enter your credentials to access your account'} />
                <InputBox label={'Email'} placeholder={'johndoe@example.com'} />
                <InputBox label={'Password'} placeholder={'abc@123'} />
                <div className="pt-4">
                    <Button label={'Sign in'} />
                </div>
                <BottomWarning label={'Don\'t have an account?'} buttonText={'Sign up'} to={'/signup'} />
            </div>  
        </div>
    </div>
    )
}
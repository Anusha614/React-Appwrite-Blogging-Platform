import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import authService from '../Appwrite/Auth'
import { login } from "../src/store/authSlice";
import Button from './button.jsx'
import Input from './input.jsx'  
import Logo from './logo.jsx'    
import { useDispatch } from "react-redux";
import{ useForm} from 'react-hook-form'

export default function SignIn () {

    const navigate = useNavigate ()
    const dispatch = useDispatch ()
    const [error, setError] = useState ()
    const {register, handleSubmit} = useForm ()

    const handleSignup = async(data) => {
        setError("")
        try {
           const userData = await authService.createAccount(data)

           if (userData) {

            await authService.getCurrentUser()

            if (userData) dispatch(login(userData));
            navigate('/')
           }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center w-full">
                    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                    <div className="mb-2 flex justify-center">
                        <span className="imline-block w-full max-w-[100px]">
                            <Logo width='100%'/>
                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight">
                        Create your account
                    </h2>
                     <p className="mt-2 text-center text-base text-black/60">
                            Already have an account?&nbsp;
                            <Link
                                to="/login"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                login
                            </Link>
                </p>
                {error &&<p className="text-red-500 text-center">
                    {error}</p>}
        
                    <form onSubmit={handleSubmit(handleSignup)} className="mt-4">
                        <div className="space-y-5">
                            <Input
                            label="name: "
                            placeholder="Enter your name"
                            type="name"
                            {...register("name", {
                                required: true,
                            
                            })}
                            />
                            <Input 
                            label="Email: "
                            type= "email"
                            placeholder= "Enter your email"
                            {...register("email", {
                                required:true,
                                validate: {
                            matchPattern: (value) => 
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                "Email address must be a valid address",
                            
                        }
                            })}
                            />
                             <Input
                            label="password: "
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            
                            })}
                            />
        
                            <Button type="submit" className="w-full">Log in</Button>
                        </div>
                    </form>
                    </div>
                </div>
    )
}
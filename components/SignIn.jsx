import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import {authService} from '../Appwrite/Auth'
import { login } from "../src/store/authSlice";
import {Button, Input, Logo} from './index'
import { useDispatch } from "react-redux";
import{register, handleSubmit, useForm} from 'react-hook-form'

export default function SignIn () {

    const navigate = useNavigate ()
    const dispatch = useDispatch ()
    const [error, setError] = useState ()
    const {register, handleSubmit} = useForm ()

    const create = async(data) => {
        setError("")
        try {

        } catch (error) {
            setError(error.message)
        }
    }
}
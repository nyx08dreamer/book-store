'use client'

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";


const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues:{
            name: " ",
            email: " ",
            password: " ",
        }
    });

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
        console.log(data);
    };

    return (
        <>
            <Heading title = "Regístrate para poder acceder a la Tienda" />
            <Button
            outline
            label = "Iniciar sesión con Google"
            icon = {AiOutlineGoogle}
            onClick={() => {}}            
            />
            <hr className="bg-slate-300 w-full h-px"/>
            <Input
            id ="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
            <Input
            id ="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
            <Input
            id ="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="password"
            />
            <Button label = {isLoading ? "Loading" : 'Sign Up'} onClick={handleSubmit(onSubmit)}/>
            <p className="text-sm">
                ¿Ya tienes una cuenta? <Link className= "underline" href = '/login'>
                Inicia Sesión
                </Link>
            </p>
        </>
    );

}

export default RegisterForm;
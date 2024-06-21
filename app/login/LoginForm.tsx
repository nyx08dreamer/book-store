'use client'

import { useState } from "react";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Input from "../components/inputs/Input";

const LoginForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues:{
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
            <Heading title = "Inicia Sesión para poder acceder a la Tienda" />
            <Button
            outline
            label = "Iniciar Sesión con Google"
            icon = {AiOutlineGoogle}
            onClick={() => {}}            
            />
            <hr className="bg-slate-300 w-full h-px"/>
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
            <Button label = {isLoading ? "Cargando" : "Entrar"} onClick={handleSubmit(onSubmit)}/>
            <p className="text-sm">
                ¿Aún no tienes una cuenta? <Link className= "underline" href = '/register'>
                Regístrate
                </Link>
            </p>
        </>
    );

}

export default LoginForm;
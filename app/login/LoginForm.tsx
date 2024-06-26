'use client'

import React, { useEffect, useState } from "react";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Input from "../components/inputs/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User } from "@prisma/client";

interface LoginFormProps{
    currentUser: User | null
}

//Apartado del Login con su manera en como está hecha

const LoginForm: React.FC<LoginFormProps> = ({currentUser}) => {

    const [isLoading, setIsLoading] = useState(false)
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues:{
            email: "",
            password: "",
        }
    });

    const router = useRouter();

    useEffect(() => {
        if(currentUser){
            router.push("/cart");
            router.refresh();
        }
    }, [])

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
        console.log(data)
        signIn('credentials', {
            ...data,
            redirect: false,
        }).then((callback) => {
            setIsLoading(false)

            if(callback?.ok){
                router.push('/cart');
                router.refresh();
                toast.success('Sesión Iniciada');
            }

            if(callback?.error){
                toast.error(callback.error);
            }
        })
    };

    if(currentUser){
        return <p className="text-center">Sesión Iniciada. Redireccionando...</p>
    }

    return (
        <>
            <Heading title = "Inicia Sesión para poder acceder a la Tienda" />
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
            label="Contraseña"
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
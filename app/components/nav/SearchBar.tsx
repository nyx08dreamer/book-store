'use client'

import { useRouter } from "next/router";
import queryString from "query-string";
import { Field, FieldValues, useForm } from "react-hook-form";


const SearchBar = () => {

    const router = useRouter; //Con los parentesis en useRouter no se quejan los push pero no levanta el sistema

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}

    } = useForm<FieldValues> ({
        defaultValues: {
            searchTerm: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) =>{
        if(!data.searchTerm) return router.push('/')
        
        const url = queryString.stringifyUrl({
            url: '/',
            query: {
                searchTerm: data.searchTerm
            }
        }, {skipNull: true})

        router.push(url)
        reset()
    }

    return <div className="flex items-center">
        <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Explora los libros de tu gusto"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
        />
        <button onClick={handleSubmit(onSubmit)} className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md">Buscar</button>
    </div>;
}

export default SearchBar;
'use client'

import Heading from "@/app/components/Heading";
import CustomCheckBox from "@/app/components/inputs/CustomCheckbox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const AddProductsForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, setValue, watch, reset, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            title: "",
            author: "",
            categories: "",
            description: "", 
            publisher: "",
            publication: "",  
            quantity: "", 
            selled: "", 
            images: [],
            price: "",
        }
    })

    return <>
        <Heading title="Agrega un Libro" center/>
        <Input
        id="title"
        label="Nombre"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input
        id="price"
        label="Precio"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
        />
        <Input
        id="author"
        label="Autor"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <TextArea
        id="description"
        label="Descripción del Libro"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input
        id="publisher"
        label="Editorial"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input
        id="publication"
        label="Año de Publicación"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <CustomCheckBox id="quantity" register={register} label="Este producto está disponible"
        />
        <div className="w-full font-medium">
            <div className="mb-2 font-semibold">Selecciona la Categoría</div>
            <div className="grid grid-cols-2 md:grid-cols-3 max-h[50vh] overflow-y-auto">
                {}
            </div>
        </div>
    </>;
}

export	default AddProductsForm;
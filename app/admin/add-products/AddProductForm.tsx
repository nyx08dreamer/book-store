'use client'

import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CustomCheckBox from "@/app/components/inputs/CustomCheckBox";
import Input from "@/app/components/inputs/Input";
import SelectColor from "@/app/components/inputs/SelectColor";
import TextArea from "@/app/components/inputs/TextArea";
import firebaseApp from "@/libs/firebase";
import { categories } from "@/utils/Categories";
import { colors } from "@/utils/Colors";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";


export type ImageType = {
    image: File | null;
    color: string;
    colorCode: string,
}

export type UploadedImageType = {
    image: string;
    color: string;
    colorCode: string,
}

const AddProductsForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [images, setImages] = useState<ImageType[] | null>();
    const [isProductCreated, setIsProductCreated] = useState(false);

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
        },
    });

    useEffect(() => {
        setCustomValue('images', images)
    }, [images]);

    useEffect(() => {
        if(isProductCreated){
            reset();
            setImages(null);
            setIsProductCreated(false);
        }
    }, [isProductCreated])

    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        console.log("Product Data", data);

        setIsLoading(true)
        let UploadedImages: UploadedImageType[] = []

        if(!data.category){
            setIsLoading(false)
            return toast.error("La categoría no ha sido seleccionada")
        }

        if(!data.images || data.images.length === 0){
            setIsLoading(false)
            return toast.error("No se ha seleccionado una imagen")
        }

        const handleImageUploads = async () => {
            toast("Creando producto, por favor espere");
            try{
                for(const item of data.images)
                    if(item.image){
                        const fileName = new Date().getTime() + '-' + item.image.name
                        const storage = getStorage(firebaseApp)
                        const storageRef = ref(storage, `products/${fileName}`);
                        const uploadTask = uploadBytesResumable(storageRef, item.image);

                        await new Promise<void>((resolve, reject) =>{
                            
                        })
                    }
            } catch (error) {

            }
        }
    }

    const category = watch("category");

    const setCustomValue = (id: string, value: any) =>{
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    const addImageToState = useCallback((value: ImageType) => {
        setImages((prev) => {
            if(!prev){
                return [value];
            } 

            return [...prev, value];
        })
    }, []);

    const removeImageFromState = useCallback((value: ImageType) => {
        setImages((prev) => {
            if(prev){
                const filteredImages = prev.filter((item) => item.color != value.color)
                return filteredImages;
            }
            return prev;
        })
    }, []);


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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h[50vh] overflow-y-auto">
                {categories.map((item) =>{
                    if(item.label === 'Todas'){
                        return null;
                    }
                    
                    return (
                    <div key={item.label} className="col-span">
                        <CategoryInput
                        onClick={(category) => setCustomValue('category', category)}
                        selected={category === item.label}
                        label={item.label}
                        icon = {item.icon}
                        />
                    </div>
                );
                })}
            </div>
        </div>
        <div className="w-full flex flex-col flex-wrap gap-4">
            <div>
                <div className="font-bold">
                Selecciona la imagen del producto
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {colors.map((item, index) => {
                        return (<SelectColor key={index} item={item} 
                        addImageToState={addImageToState} 
                        removeImageFromState={removeImageFromState} 
                        isProductCreated={isProductCreated}/>
                    );
                    })}
                </div>
            </div>
            <Button
            label={isLoading ? "Procesando..." : "Agregar Libro"}
            onClick={handleSubmit(onSubmit)}
            />
        </div>
    </>;
}

export	default AddProductsForm;
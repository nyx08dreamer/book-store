'use client'

import { ImageType } from "@/app/admin/add-products/AddProductForm";
import { get } from "http";
import { useCallback } from "react";
import {useDropzone} from 'react-dropzone'

interface SelectImageProps{
    item?: ImageType;
    handleFileChange: (value: File) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({item, handleFileChange}) => {
    const onDrop = useCallback((acceptedFiles: File[])=> {
       if(acceptedFiles.length > 0){
        handleFileChange(acceptedFiles[0])
       }
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop, 
        accept: {'image/*': ['.jpeg', '.png', '.jpg']}
    });
    

    return <div {...getRootProps()} className="border-2 border-slate-400 p-2 border-dashed cursor-poiner text-sm font-normal text-slate-400 flex items-center justify-center">
        <input {...getInputProps()} />
        {isDragActive ? (<p>Sube la imagen</p>) : (<p>+ {item?.check} Image</p>)}
    </div>  
}

export default SelectImage;
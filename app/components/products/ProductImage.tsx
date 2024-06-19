'use client';

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType,
    product: any,
    handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelect,
}) => {
    return <div className="grid 
            grid-cols-6
            gap-2
            h-full
            max-h-[500px]
            min-h-[300px]
            sm:min-h-[400px]
        ">
        <div className="col-span-5 relative aspect-square">
            
        </div>
    </div>;
};


export default ProductImage;
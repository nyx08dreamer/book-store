import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddProductsForm from "./AddProductForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const AddProducts = async() => {
    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role != 'USER'){
        return <NullData title="Acceso denegado"/>
    }

    return <div className="p-8">
        <Container>
            <FormWrap>
                <AddProductsForm>
                </AddProductsForm>
            </FormWrap>
        </Container>
    </div>;
};

export default AddProducts;
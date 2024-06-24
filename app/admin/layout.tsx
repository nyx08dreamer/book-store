import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: "Book Store Admin",
    description: "E~Shop Admin Dashboard",
};

const AdminLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <AdminNav/>
            {children}
        </div>
    );
};

export default AdminLayout;
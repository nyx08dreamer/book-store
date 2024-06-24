"use client";

import { Container } from "@mui/material";
import Link from "next/link";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNav = () => {

    const pathname = usePathname()

    return (
        <div className="w-full shadown-sm top-20 border-b-[1px] pt-4">
            <Container>
                <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
                    <Link href="/admin">
                    <AdminNavItem 
                    label="Resumen" 
                    icon={MdDashboard} 
                    selected={pathname === "/admin"}/>
                    </Link>
                    <Link href="/admin/add-products">
                    <AdminNavItem 
                    label="Agregar Productos" 
                    icon={MdLibraryAdd} 
                    selected={pathname === "/admin/add-products"}/>
                    </Link>
                    <Link href="/admin/manage-products">
                    <AdminNavItem 
                    label="Gestionar productos" 
                    icon={MdDns} 
                    selected={pathname === "/admin/manage-products"}/>
                    </Link>
                    <Link href="/admin/manage-orders">
                    <AdminNavItem 
                    label="Administrar órdenes" 
                    icon={MdFormatListBulleted} 
                    selected={pathname === "/admin/manage-orders"}/>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default AdminNav;
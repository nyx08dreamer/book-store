import { User } from "@prisma/client";

export type SafeUser = Omit<User,"id" | "firstName" | "lastName" | "email" | "hashedPassword" |"role"> & {
    id: string;
    firstName: string | null
    lasttName: string | null
    email: string | null
    hashedPassword: string | null
    role: string;
}
import { User } from "./User";

export type LoginRequest = {
    email: string;
    password: string;
};

export type CreateAdmin = {
    name: string;
    password: string;
    email: string;
};

export type AuthContextData = {
    user: User | null;
    isAuthenticcated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

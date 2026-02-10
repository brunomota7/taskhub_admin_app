import { AuthContextData } from "@/types/auth";
import { User } from "@/types/User";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadUser = async 
    }, []);
}
    
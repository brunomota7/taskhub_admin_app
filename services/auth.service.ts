import { LoginRequest } from "@/types/Auth";
import { api } from "./api";

export async function login(data: LoginRequest) {
    await api.post("/auth/login", data);
}

export async function logout() {
    await api.post("/auth/logout");
}

export async function getMe() {
    return api.get("/auth/me");
}

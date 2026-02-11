import { postRequest } from "../../lib/api";
import { SignupData, LoginData, AuthResponse } from "@/types/auth";

export const signup = (data: SignupData) => {
    return postRequest("/auth/signup", data);
};

export const login = (data: LoginData) => {
    return postRequest<AuthResponse>("/auth/login", data);
};

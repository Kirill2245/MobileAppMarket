import { Role } from "@/types/role.enum";

export interface LoginDto {
  email: string;
  password: string;
  code?: string; // Для двухфакторной аутентификации
}

export interface RegisterDto {
    firstName: string,
    lastName?:string,
    middleName?:string,
    email:string
    password: string
    passwordReapeat:string
    role: Role
}



export interface LoginResponse {
  user: User;
  message?: string; // Для случая с 2FA
}
export interface RegistrResponse {
  message:string;
  error?:string;
  statusCode?:string;
}
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  emailVerified: boolean;
  isTwoFactorEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthError {
  message: string;
  statusCode: number;
  error?: string;
}

export interface TwoFactorRequired {
  message: string;
  requiresTwoFactor: true;
}
export interface EmployerCredentials {
  email: string;
  password: string;
  companyName?: string;
  rememberMe: boolean;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  companyName?: string;
}
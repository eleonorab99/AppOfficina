export enum UserRole {
    ADMIN = 'admin',
    STAFF = 'staff',
    USER = 'user'
  }
  
  export interface User {
    id: string;
    email: string;
    password: string;
    role: UserRole;
  }
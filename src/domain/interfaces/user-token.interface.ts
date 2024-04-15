export interface UserToken {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    isActive: boolean;
    role: string[];
  }
}

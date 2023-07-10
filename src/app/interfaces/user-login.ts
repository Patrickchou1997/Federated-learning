export interface UserLogin {
  stateError: boolean;
  message: string;
  userID: string;
  FName: string;
  LName: string;
  username: string;
  password: string;
  email: string;
  accStatus: string;
  roleID: string;
  siteID: string;
  token: string;
}
export interface UserRegister {
  stateError: boolean;
  message: string;
}
export interface UsersManagement {
  userID: string;
  FName: string;
  LName: string;
  username: string;
  email: string;
  accStatus: string;
  roleID: string;
  roleName: string;
  siteID: string;
  siteName: string;
}

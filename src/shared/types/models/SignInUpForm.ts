export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  uid: number;
  username: string;
  email: string;
  password: string;
  tokens: IAccessInfo[] | null;
}

export interface IAccessInfo {
  accessToken: string | null;
  refreshToken: string | null;
  timestamp: number | null;
}

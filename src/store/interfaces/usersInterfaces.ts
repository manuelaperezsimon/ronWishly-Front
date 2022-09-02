export interface ProtoUser {
  userName: string;
  password: string;
}

export interface RegisterUserData extends ProtoUser {
  repeatPassword: string;
}

export interface UserToken {
  token: string;
}

export interface User {
  id: string;
  userName: string;
  token: string;
}

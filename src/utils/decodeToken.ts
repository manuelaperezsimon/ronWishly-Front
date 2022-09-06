import jwt from "jwt-decode";

const decodeToken = (token: string) => {
  const payloadToken: {
    id: string;
    userName: string;
    iat: string;
  } = jwt(token);

  return {
    token: token,
    id: payloadToken.id,
    userName: payloadToken.userName,
  };
};

export default decodeToken;

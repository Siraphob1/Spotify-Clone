export type LoginResponse = {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
};

export type RefreshResponse = {
  accessToken: string;
  expiresIn: number;
};

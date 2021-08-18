export interface Security {
  loggedIn: boolean;
  userId?: string;
  token?: string;
  unauthorized?: boolean;
}

export interface IUserRepository {
  saveAuthenticatedUser(username: string): void;
}

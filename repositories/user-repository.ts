import { IUserRepository } from "../interfaces/user-repository.interface";

export class UserRepository implements IUserRepository {
  saveAuthenticatedUser(username: string): void {
    //lógica para salvar o usuário autenticado
  }
}

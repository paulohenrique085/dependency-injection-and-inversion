import { IAuthenticator } from "../interfaces/authenticator.interface";

export class AuthenticatorService implements IAuthenticator {
  authenticate(username: string, password: string): boolean {
    //lógica da autenticação mock
    return true || false;
  }
}

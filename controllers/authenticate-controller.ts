import { IAuthenticator } from "../interfaces/authenticator.interface";
import { IUserRepository } from "../interfaces/user-repository.interface";

/*
--inversão de dependências--
Aaqui estamos aplicando ideia de que ao invés dessa classe depender de outras
classes ela deve depender de abstrações que defina um contrato com todos os métodos.*/
export class AuthenticateController {
  private authenticatorService: IAuthenticator;
  private userRepository: IUserRepository;

  /*A injeção da dependência é feita via construtor quando essa classe for
  chamada em outro lugar passando de fato o serviço que irá ter contrato assinado 
  com a interface*/
  constructor(
    authenticatorService: IAuthenticator,
    userRepository: IUserRepository
  ) {
    this.authenticatorService = authenticatorService;
    this.userRepository = userRepository;
  }

  login(username: string, password: string) {
    if (this.authenticatorService.authenticate(username, password)) {
      this.userRepository.saveAuthenticatedUser(username);
      return true;
    }
    return false;
  }
}

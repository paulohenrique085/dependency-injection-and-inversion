import { AuthenticateController } from "./controllers/authenticate-controller";
import { UserRepository } from "./repositories/user-repository";
import { AuthenticatorService } from "./services/authenticator-service";
import { GoogleAuthenticatorService } from "./services/google-authenticator-service copy";

const userRepository = new UserRepository();
//posso ter varios authenticadores
const googleAuthenticatorService = new GoogleAuthenticatorService();
const defaultAuthenticatorService = new AuthenticatorService();

/*injetado no controller as dependências necessárias para uma autenticação,
que são: um serviço de autenticação qualquer que implmente a authenticator-interface 
e um user repository qualquer que implemente o user-repository-interface*/
const authenticateController = new AuthenticateController(
  defaultAuthenticatorService,
  userRepository
);

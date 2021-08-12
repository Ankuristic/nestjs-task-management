import { UsersRepository } from './users.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    signup(AuthCredentialsDto: AuthCredentialsDto): Promise<void>;
}

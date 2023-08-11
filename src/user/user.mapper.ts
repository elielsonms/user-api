import { UserRequestDTO } from "./dto/userRequest.dto";
import { UserResponseDTO } from "./dto/userResponse.dto";
import { User } from "./model/user.schema";

export class UserMapper {
    map(userRequest: UserRequestDTO) : User {
        const user = new User();
        user.name = user.name
        user.email = user.email

        return user;
    }

    mapToResponse(user: User) : UserResponseDTO {
        return {
            userId: user.userId,
            name: user.name,
            email: user.email
        }
    }
}
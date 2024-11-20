import UserRepository from "../repository/UserRepository.js";
import { validatePassword } from "../utils/bcrypt.js";
import LoginController from "./LoginController.js";

class UserController {
    async create(request,response) {
        try {
            const createUser = await UserRepository.create(request.body);
            console.log(createUser);
            
            return response.status(201).json(createUser)
        }
        catch(error) {
            return response.status(400).json(error)
        }  
    }

    async getAll(request,response) {
        try{
            const users = await UserRepository.getAll();
            return response.status(200).json(users);
        }
        catch (error) {
            return response.status(400).json(error);
        }
 
    }

    async getUnique(request,response) {
        try {
            const getUser = await UserRepository.getUnique(request.body);

            if(!getUser) {
                return response.status(400).json("Usuário não cadastrado no sistema!")
            }
            console.log("oi");
            const verifyPassword = validatePassword(request.body.password, getUser.senha)
            console.log(verifyPassword);
            

            if(verifyPassword === false) {
                return response.status(404).json("Senha Inválida!")
            }

            return response.status(200).json("Login efetuado")

            // return response.status(200).json(getUser);
        }

        catch(error) {
            console.log(error);
            
            return response.status(400).json(error);
        }
    }

}

export default new UserController();



import prisma from "../connection/connection.js";
import cryptPassword from "../utils/bcrypt.js";

class UserRepository {

    async create(body) {
        try {

            const hashPassword = cryptPassword(body.password);
            const createResult = await prisma.users.create({
                data: {
                    nome: body.nome,
                    email: body.email,
                    senha : hashPassword,
                    cpf: body.cpf,
                    celular: body.celular,
                    endereco: body.endereco,
                    bairro: body.bairro,
                    cidade: body.cidade,
                    cep: body.cep,
                    complemento: body.complemento

                }
            })
            return createResult
        }
        catch(erro) {
            return erro;
        }
        
        // return await prisma.users.create()
    }


    async getAll() {
        try {
           const dataAll = await prisma.users.findMany();
           return dataAll; 
        
        } catch (erro) {
            return erro;
        }
    }
}


export default new UserRepository();
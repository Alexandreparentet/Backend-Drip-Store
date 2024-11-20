import LoginRepository from "../repository/LoginRepository.js"

class LoginController {
    async login(request, response) {
        try {
          const { login, senha } = request.body;
    
          if (!login || !senha) {
            return response.status(400).json({ error: "Login e senha são obrigatórios" });
          }
    
          const user = await LoginRepository.findByEmailOrName(login);
    
          if (!user) {
            return response.status(400).json({ error: "Usuário não encontrado" });
          }
    
          const isPasswordValid = await bcrypt.compare(senha, user.senha);
    
          if (!isPasswordValid) {
            return response.status(400).json({ error: "Senha inválida" });
          }
    
          return response.status(200).json({ message: "Login bem-sucedido" });
        } catch (error) {
          return response.status(500).json({ error: "Erro ao fazer login" });
        }
      }
    }
    
    export default new LoginController();
    
   
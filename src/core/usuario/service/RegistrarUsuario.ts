import CasoDeUso from "@/core/shared/CasoDeUso"
import Usuario from "../model/Usuario"
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria"
import Erros from "@/core/shared/Erros"
import Id from "@/core/shared/Id"

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>{
    async executar(Usuario: Usuario): Promise<void> {
        const senhaCripto = Usuario.senha.split('').reverse().join('')
        const repo = new RepositorioUsuarioEmMemoria()

        const usuarioExistente = repo.buscarPorEmail(Usuario.email)
        if (usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE)

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: Usuario.nome,
            email: Usuario.email,
            senha: senhaCripto
        }        

        repo.inserir(novoUsuario)
        console.log(`\n\n${JSON.stringify(senhaCripto)}`)
    }
}
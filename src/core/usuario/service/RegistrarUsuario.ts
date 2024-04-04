import CasoDeUso from "@/core/shared/CasoDeUso"
import Usuario from "../model/Usuario"
import Erros from "@/core/shared/Erros"
import Id from "@/core/shared/Id"
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria"
import ProvedorCriptografia from "./ProvedorCriptografia"

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>{
    constructor(
        private provedorCripto: ProvedorCriptografia
    ){}

    async executar(Usuario: Usuario): Promise<void> {        
        const repo = new RepositorioUsuarioEmMemoria()

        const senhaCripto = this.provedorCripto.criptografar(Usuario.senha)

        const usuarioExistente = await repo.buscarPorEmail(Usuario.email)
        if (usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE)

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: Usuario.nome,
            email: Usuario.email,
            senha: senhaCripto
        }        

        repo.inserir(novoUsuario)
        console.log(`\n\n${JSON.stringify(novoUsuario)}`)
    }
}
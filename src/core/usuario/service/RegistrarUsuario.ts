import CasoDeUso from "@/core/shared/CasoDeUso"
import Usuario from "../model/Usuario"
import Erros from "@/core/shared/Erros"
import Id from "@/core/shared/Id"
import ProvedorCriptografia from "./ProvedorCriptografia"
import RepositorioUsuario from "./RepositorioUsuario"

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>{
    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ){}

    async executar(Usuario: Usuario): Promise<void> {        
        const senhaCripto = this.provedorCripto.criptografar(Usuario.senha)

        const usuarioExistente = await this.repositorio.buscarPorEmail(Usuario.email)
        if (usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE)

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: Usuario.nome,
            email: Usuario.email,
            senha: senhaCripto
        }        

        this.repositorio.inserir(novoUsuario)
        console.log(`\n\n${JSON.stringify(novoUsuario)}`)
    }
}
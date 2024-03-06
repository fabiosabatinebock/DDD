import CasoDeUso from "@/core/shared/CasoDeUso"
import Usuario from "../model/Usuario"
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria"

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>{
    async executar(Usuario: Usuario): Promise<void> {
        const senhaCripto = Usuario.senha.split('').reverse().join('')
        const repo = new RepositorioUsuarioEmMemoria()
        const usuarioExistente = repo.buscarPorEmail(Usuario.email)

        console.log(`\n\n${senhaCripto}`)
    }
}
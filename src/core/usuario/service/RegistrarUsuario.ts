import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>{
    async executar(Usuario: Usuario): Promise<void> {
        const senhaCripto = Usuario.senha.split('').reverse().join('')
        console.log(`\n\n${senhaCripto}`)
    }
}
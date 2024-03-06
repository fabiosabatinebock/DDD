import Usuario from "@/core/usuario/model/Usuario";
import terminalUtil from "../util/terminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario(){
    terminalUtil.titulo("Registrar Usuário")

    const id = await terminalUtil.campoRequerido("Id: ", "faseiffoea-sfasdlfs")
    const nome = await terminalUtil.campoRequerido("Nome: ", "Ana da Silva")
    const email = await terminalUtil.campoRequerido("Email: ", "ana.silva@empresa.com.br")
    const senha = await terminalUtil.campoRequerido("Senha: ", "123456")

    const usuario: Usuario = {id, nome, email, senha}

    await new RegistrarUsuario().executar(usuario)
    terminalUtil.sucesso('Usuário registrado com sucesso.')
    await terminalUtil.esperarEnter()
}
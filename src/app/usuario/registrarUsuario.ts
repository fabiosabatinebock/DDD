import Usuario from "@/core/usuario/model/Usuario";
import terminalUtil from "../util/terminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioEmMemoria from "@/adapter/db/RepositorioUsuarioEmMemoria";

export default async function registrarUsuario(){
    terminalUtil.titulo("Registrar Usuário")

    const nome = await terminalUtil.campoRequerido("Nome: ", "Ana da Silva")
    const email = await terminalUtil.campoRequerido("Email: ", "ana.silva@empresa.com.br")
    const senha = await terminalUtil.campoRequerido("Senha: ", "123456")

    const usuario: Usuario = {nome, email, senha}

    const repositorio = new RepositorioUsuarioEmMemoria()
    const provedorCripto = new SenhaCripto() 
    const CasoDeUso = new RegistrarUsuario(repositorio, provedorCripto)

    await CasoDeUso.executar(usuario)

    terminalUtil.sucesso('Usuário registrado com sucesso.')
    await terminalUtil.esperarEnter()

    try{
      await CasoDeUso.executar(usuario)    
    } catch(e: any){
      terminalUtil.erro(e.message)   
    } finally{
      await terminalUtil.esperarEnter()
    }
}
import terminalUtil from "@/app/util/terminalUtil";
import polimorfismo from "../fundamentos/polimorfismo";
import menuPrincipal from "./menuPrincipal";
import registrarUsuario from "../usuario/registrarUsuario";

export default async function menuUsuario(){
    terminalUtil.titulo('Usuário')

    const [indice] = await terminalUtil.menu([
        '1. Registrar Usuário',
        'Voltar'
    ])

    switch(indice){
        case 0: 
            await registrarUsuario()
            break
        default: 
            return menuPrincipal()        
    }    

    await menuUsuario()
}
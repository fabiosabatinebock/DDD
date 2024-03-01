import terminalUtil from "@/app/util/terminalUtil";
import menuFundamentos from "./menuFundamentos";
import menuUsuario from "./menuUsuario";

export default async function menuPrincipal() {
    terminalUtil.titulo('Menu Principal')
    
    const [indice] = await terminalUtil.menu([
        '1. Fundamentos',
        '2. Usuário',
        'Sair'
    ])

    switch(indice){
        case 0: 
          await menuFundamentos() 
          break
        case 1: 
          await menuUsuario()
          break 
        default: 
          process.exit(0)
    }
}

menuPrincipal()
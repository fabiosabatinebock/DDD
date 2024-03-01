import terminalUtil from "@/app/util/terminalUtil";
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";
import menuPrincipal from "./menuPrincipal";

export default async function menuFundamentos(){
    terminalUtil.titulo('Fundamentos')

    const [indice] = await terminalUtil.menu([
        '1. Polimorfismo',
        '2. DIP',
        'Voltar'
    ])

    switch(indice){
        case 0: 
            await polimorfismo()
            break
        case 1: 
            await dip()
            break    
        default: 
            return menuPrincipal()        
    }    

    await menuFundamentos()
}
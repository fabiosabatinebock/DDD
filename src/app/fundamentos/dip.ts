import corrida from "@/core/fundamentos/corrida";
import terminalUtil from "../util/terminalUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";
import Carro from "@/core/fundamentos/Carro";
import Civic from "@/core/fundamentos/Civic";
import { terminal } from "terminal-kit";

export default async function dip() {
    terminalUtil.titulo('DIP')

    const [tipo] = await terminalUtil.selecao("Tipo de carro?", [
        "Fusca", "Civic", "Ferrari"
    ])

    let carro: Carro

    switch (tipo) {
        case 0:
            carro = new Fusca()            
            break
        case 1:
            carro = new Civic()            
            break
        default:
            carro = new Ferrari
            break
    }

    corrida(carro)
    await terminalUtil.esperarEnter()
}
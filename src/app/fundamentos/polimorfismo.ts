import Carro from "@/core/fundamentos/Carro";
import terminalUtil from "../util/terminalUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";

export default async function polimorfismo(){
    terminalUtil.titulo("Polimorfismo")

    const [tipoCarro] = await terminalUtil.selecao(
        'Tipo de Carro?', 
        ['Ferrari', 'Fusca'])

    const carro: Carro = 
        tipoCarro === 0 ? new Ferrari() : new Fusca() 

    while(true){
        terminalUtil.limpar()
        terminalUtil.exibirChaveValor(
            'Velocidade Máxima: ', 
            `${carro.velocidadeMaxima} km/h`
        )

        terminalUtil.exibirChaveValor(
            'Velocidade Atual: ', 
            `${carro.velocidadeAtual} km/h`
        )

        const [opcao] = await terminalUtil.selecao(
            "Qual opção?", 
            ["Acelerar", "Frear"]
        )

        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar = await terminalUtil.confirmacao(
            "Deseja continuar?"
        )
        if(!continuar) return
    }
}
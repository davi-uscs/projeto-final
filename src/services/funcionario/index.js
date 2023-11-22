import { fetchWrapper } from "@/functions";

const FuncionarioService = {
    listaFuncionarios() {
        return fetchWrapper("funcionarios")
    },

    criarFuncionario(data) {
        return fetchWrapper("funcionarios", {method: "post", body: JSON.stringify(data)})
    },

    atualizaFuncionario(data) {
        return fetchWrapper("funcionarios", {method: "put", body: JSON.stringify(data)})
    },

    deletaFuncionario(idFuncionario) {
        return fetchWrapper(`funcionario/${idFuncionario}`, {method: "delete"}) 
    },

    buscarFuncionario(idFuncionario) {
        return fetchWrapper(`funcionario/${idFuncionario}`)
    }
}

export default FuncionarioService;
import { FuncionarioService } from "@/services";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const useFuncionario = () => {
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        FuncionarioService.listaFuncionarios().then((res) => {
            if (res.errno) {
                toast.error(res.mensagem || res.sqlMessage);
                return;
            }
            
            setFuncionarios(res);
        });
    }, []);

    const deletaFuncionario = (idFuncionario) => {
        FuncionarioService.deletaFuncionario(idFuncionario).then((res) => {
            if (res.errno) {
                toast.error(res.mensagem || res.sqlMessage);
                return;
            }

            setFuncionarios(valorAnterior => valorAnterior.filter(funcionario => funcionario.idFuncionario != idFuncionario));
            toast.success(res.mensagem);
        });
    }

    return {funcionarios, deletaFuncionario}
}
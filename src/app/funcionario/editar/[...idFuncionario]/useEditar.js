import { FuncionarioService } from "@/services"
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react"
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

export const useEditar = () => {
    const router = useRouter();
    const params = useParams();
    const {register, handleSubmit, setValue  } = useForm({});

   useEffect(() => {
    FuncionarioService.buscarFuncionario(params.idFuncionario).then((res) => {
        setValue("idFuncionario", res.idFuncionario);
        setValue("nome", res.nome);
        setValue("cpf", res.cpf);
        setValue("email", res.email);
        setValue("comissao", res.comissao);
    });
   }, [params.idFuncionario, setValue]);

   const atualizarFuncionario = (data) => {
    FuncionarioService.atualizaFuncionario(data).then((res) => {
        if (res.errno) {
            toast.error(res.mensagem || res.sqlMessage);
            return;
        }

        toast.success(res.mensagem);
        router.push("/funcionario");
    });
   }

   return { register, handleSubmit, atualizarFuncionario }
} 
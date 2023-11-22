import { FuncionarioService } from "@/services";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

export const useCadastrar = () => {
    const router = useRouter();

    const cadastrarFuncionario = (data) => {
        FuncionarioService.criarFuncionario(data).then((res) => {
            if (res.errno) {
                toast.error(res.mensagem || res.sqlMessage);
                return;
            }

            toast.success(res.mensagem);
            router.push("/funcionario");
        })
    }

    return {cadastrarFuncionario}
} 
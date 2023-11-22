'use client'

import { useForm } from "react-hook-form";
import { useCadastrar } from "./useCadastrar";
import { Input } from "@/components";

export default function Cadastrar() {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            comissao: null
        }
    });
    const {cadastrarFuncionario} = useCadastrar();

    return (
        <main className="container mx-auto mt-10">
            <h1 className="text-xl font-bold">Cadastrar Funcionário</h1>
            <form className="mt-10" onSubmit={handleSubmit(cadastrarFuncionario)}>
                <Input type="text" placeholder="Digite o nome do funcionário" register={register} label={'nome'} required />

                <div className="mt-5">
                    <Input type="text" placeholder="Digite o cpf do funcionário" register={register} label={'cpf'} required />
                </div>
                

               <div className="mt-5">
                    <Input type="email" placeholder="Digite o e-mail do funcionário" register={register} label={'email'} required />
               </div>
                

                <div className="mt-5">
                    <Input type="number" placeholder="Digite a comissão do funcionário" register={register} label={'comissao'} />
                </div>
                
                <button className="mt-10 bg-purple-600 text-white rounded-full p-2" type="submit">Cadastrar</button>
            </form>
        </main>
    )

}
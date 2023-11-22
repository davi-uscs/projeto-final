"use client";

import { useEditar } from "./useEditar";
import { Input } from "@/components";

export default function Editar() {
  const { register, handleSubmit, atualizarFuncionario } = useEditar();

  return (
    <main>
      <h1 className="text-xl font-bold">Editar Funcionário </h1>
      <form className="mt-10" onSubmit={handleSubmit(atualizarFuncionario)}>
        <Input
          type="text"
          placeholder="Digite o nome do funcionário"
          register={register}
          label={"nome"}
          required
        />
        <div className="mt-5">
          <Input
            type="text"
            placeholder="Digite o cpf do funcionário"
            register={register}
            label={"cpf"}
            required
          />
        </div>

        <div className="mt-5">
          <Input
            type="email"
            placeholder="Digite o e-mail do funcionário"
            register={register}
            label={"email"}
            required
          />
        </div>

        <div className="mt-5">
          <Input
            type="number"
            placeholder="Digite a comissão do funcionário"
            register={register}
            label={"comissao"}
          />
        </div>

        <button
          className="mt-10 bg-purple-600 text-white rounded-full p-2"
          type="submit"
        >
          Atualizar
        </button>
      </form>
    </main>
  );
}

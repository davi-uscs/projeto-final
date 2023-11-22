"use client";

import Link from "next/link";
import { useFuncionario } from "./useFuncionario";

export default function Funcionario() {
  const { funcionarios, deletaFuncionario } = useFuncionario();

  return (
    <main>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Funcionários</h1>
        <Link
          className="bg-purple-600 text-white rounded-full p-2"
          href={"/funcionario/cadastrar"}
        >
          Adicionar funcionário
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mt-10 p-5 border border-black">
          <thead>
            <tr className="bg-gray-400 border border-black">
              <th className="border border-black">Nome</th>
              <th className="border border-black">CPF</th>
              <th className="border border-black">E-mail</th>
              <th className="border border-black">Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.length == 0 && (
              <tr className="border border-black">
                <td colSpan={3}>Nenhum funcionário cadastrado.</td>
              </tr>
            )}

            {funcionarios.length > 0 &&
              funcionarios.map((funcionario) => (
                <tr
                  className="border border-black"
                  key={funcionario.idFuncionario}
                >
                  <td className="border border-black">{funcionario.nome}</td>
                  <td className="border border-black">{funcionario.cpf}</td>
                  <td className="border border-black">{funcionario.email}</td>
                  <td className="border border-black text-center">
                    <Link
                      href={"/funcionario/editar/" + funcionario.idFuncionario}
                      className="material-symbols-outlined cursor-pointer"
                    >
                      edit
                    </Link>
                    <button
                      className="material-symbols-outlined cursor-pointer text-red-500"
                      onClick={() =>
                        deletaFuncionario(funcionario.idFuncionario)
                      }
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

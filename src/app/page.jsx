import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-bold">Projeto Final</h1>
      <h2 className="mt-10 text-lg font-semibold">Integrantes do Grupo</h2>
      <ul className="mt-10 list-disc">
        <li>Davi Elias Teixeira</li>
        <li>Paula Maria</li>
        <li>Ruth Kikuko Kakazu</li>
        <li>William Shoji Kudaka</li>
      </ul>
      <h2 className="mt-10 text-lg font-semibold">Descrição sucinta</h2>
      <span>Módulo do sistema para gerenciamento de funcionários</span>
      <h2 className="mt-10 text-lg font-semibold">Tabela do sistema</h2>
      <Image
        src={"/tabela.png"}
        alt="Tabela do sistema"
        width={600}
        height={600}
      />
      <h2 className="mt-10 text-lg font-semibold">Protótipo do sistema</h2>
      <Image
        src={"/prototipo-listagem.png"}
        className="mt-2"
        alt="Protótipo tela de listagem"
        width={600}
        height={600}
      />
      <Image
        src={"/prototipo-cadastro.png"}
        className="mt-2"
        alt="Protótipo tela de cadastro"
        width={600}
        height={600}
      />
    </main>
  );
}

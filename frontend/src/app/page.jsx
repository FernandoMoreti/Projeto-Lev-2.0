import Image from "next/image";
import Header from "./components/header";
import { LuUpload } from "react-icons/lu";

export default function Home() {

  const col_opcoes = [
    "NUM_BANCO",
    "NOM_BANCO",
    "NUM_PROPOSTA",
    "NUM_CONTRATO",
    "DAT_CREDITO",
    "VAL_BRUTO",
    "VAL_LIQUIDO",
    "VAL_BASE_COMISSAO",
    "VAL_COMISSAO",
    "PCL_COMISSAO",
    "DSC_TIPO_COMISSAO",
    "COD_LOJA",
    "COD_UNIDADE_EMPRESA",
    "COD_BANCO",
    "COD_TIPO_PROPOSTA_EMPRESTIMO",
    "DSC_TIPO_PROPOSTA_EMPRESTIMO",
    "NIC_CTR_USUARIO",
    "COD_PRODUTO",
    "COD_PRODUTOR_VENDA",
    "COD_PRODUTOR_VENDA_BANCO",
    "COD_TIPO_COMISSAO",
    "COD_SITUACAO_EMPRESTIMO",
    "QTD_PARCELA",
    "NUM_PARCELA_DIFERIDA_EMPRESA",
    "DAT_EMPRESTIMO",
    "DAT_CONFIRMACAO",
    "DAT_ESTORNO",
    "DAT_CTR_INCLUSAO",
    "TIPO_COMISSAO_BANCO",
    "PCL_TAXA_EMPRESTIMO"
  ]

  return (
    <>
      <Header />
      <section className="grid grid-cols-2 p-10 gap-2">
        <div className="flex flex-col gap-5">
          <div className="border-1 border-gray-300 p-5 rounded-xl shadow-xl">
            <h1 className="flex items-center text-xl font-semibold gap-2"><LuUpload size={20} className="text-purple-500" /> Upload do Arquivo</h1>
            <p className="text-sm text-gray-500 pt-1 pb-5">Selecione um arquivo Excel (.xlsx, .xls)</p>
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition"
            >
              <LuUpload size={40} className="text-gray-500" />
              <p className="text-sm font-medium text-gray-700">Clique para fazer upload</p>
              <p className="text-xs text-gray-500">Arquivos Excel (.xlsx, .xls)</p>
              <input
                id="file-upload"
                type="file"
                accept=".xlsx,.xls"
                className="hidden"
              />
            </label>
          </div>
          <div className="border-1 border-gray-300 p-5 rounded-xl shadow-xl">
            <h1 className="flex items-center text-lg font-semibold">Coluna so sistema</h1>
            <p className="text-sm text-gray-500 pt-1 pb-1">Colunas disponiveis para mapeamento</p>
            {
              col_opcoes.map((col) => (
                <p className="border-1 border-gray-300 inset-shadow-sm inset-shadow-gray-400 py-2 px-5 rounded-xl mt-4">{col}</p>
              ))
            }
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}

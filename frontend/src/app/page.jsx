"use client";

import Image from "next/image";
import Header from "./components/header";
import Input from "./components/Input";
import { LuUpload } from "react-icons/lu";
import { FiSave } from "react-icons/fi";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState()

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
              className="cursor-pointer flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 hover:bg-gray-50 transition"
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
                <p className="border-1 border-gray-200 inset-shadow-2xs inset-shadow-gray-400 py-2 px-5 rounded-xl mt-4">{col}</p>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="border-1 border-gray-300 p-5 rounded-xl shadow-xl">
              <h1 className="flex items-center text-xl font-semibold gap-2"><FiSave size={20} className="text-purple-500" /> Salvar Mapeamento</h1>
              <p className="text-sm text-gray-500 pt-1 pb-5">Dê um nome para este mapeamento</p>
              <p className="flex items-center text-sm font-semibold pb-2">Nome do Mapeamento</p>
              <Input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Itau"
              />
              <button className="flex items-center justify-center gap-2 w-full mt-3 bg-gradient-to-r from-purple-700 to-purple-400 rounded-xl px-5 py-2 transition-all duration-300 cursor-pointer text-white hover:-translate-y-1"><FiSave size={15} /> Salvar Mapeamento</button>
            </div>
        </div>
      </section>
    </>
  );
}

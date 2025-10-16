"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

import Header from "./components/header";
import Input from "./components/Input";
import { LuUpload } from "react-icons/lu";
import { FiSave } from "react-icons/fi";

export default function Home() {

  const [name, setName] = useState("")
  const [file, setFile] = useState([])
  const [columns, setColumns] = useState([]);
  const [nome, setNome] = useState();
  const [NUM_BANCO, setNUM_BANCO] = useState();
  const [NOM_BANCO, setNOM_BANCO] = useState();
  const [NUM_PROPOSTA, setNUM_PROPOSTA] = useState();
  const [NUM_CONTRATO, setNUM_CONTRATO] = useState();
  const [DAT_CREDITO, setDAT_CREDITO] = useState();
  const [VAL_BRUTO, setVAL_BRUTO] = useState();
  const [VAL_LIQUIDO, setVAL_LIQUIDO] = useState();
  const [VAL_BASE_COMISSAO, setVAL_BASE_COMISSAO] = useState();
  const [VAL_COMISSAO, setVAL_COMISSAO] = useState();
  const [PCL_COMISSAO, setPCL_COMISSAO] = useState();
  const [DSC_TIPO_COMISSAO, setDSC_TIPO_COMISSAO] = useState();
  const [COD_LOJA, setCOD_LOJA] = useState();
  const [COD_UNIDADE_EMPRESA, setCOD_UNIDADE_EMPRESA] = useState();
  const [COD_BANCO, setCOD_BANCO] = useState();
  const [COD_TIPO_PROPOSTA_EMPRESTIMO, setCOD_TIPO_PROPOSTA_EMPRESTIMO] = useState();
  const [DSC_TIPO_PROPOSTA_EMPRESTIMO, setDSC_TIPO_PROPOSTA_EMPRESTIMO] = useState();
  const [NIC_CTR_USUARIO, setNIC_CTR_USUARIO] = useState();
  const [COD_PRODUTO, setCOD_PRODUTO] = useState();
  const [COD_PRODUTOR_VENDA, setCOD_PRODUTOR_VENDA] = useState();
  const [COD_PRODUTOR_VENDA_BANCO, setCOD_PRODUTOR_VENDA_BANCO] = useState();
  const [COD_TIPO_COMISSAO, setCOD_TIPO_COMISSAO] = useState();
  const [COD_SITUACAO_EMPRESTIMO, setCOD_SITUACAO_EMPRESTIMO] = useState();
  const [QTD_PARCELA, setQTD_PARCELA] = useState();
  const [NUM_PARCELA_DIFERIDA_EMPRESA, setNUM_PARCELA_DIFERIDA_EMPRESA] = useState();
  const [DAT_EMPRESTIMO, setDAT_EMPRESTIMO] = useState();
  const [DAT_CONFIRMACAO, setDAT_CONFIRMACAO] = useState();
  const [DAT_ESTORNO, setDAT_ESTORNO] = useState();
  const [DAT_CTR_INCLUSAO, setDAT_CTR_INCLUSAO] = useState();
  const [TIPO_COMISSAO_BANCO, setTIPO_COMISSAO_BANCO] = useState();
  const [PCL_TAXA_EMPRESTIMO, setPCL_TAXA_EMPRESTIMO] = useState();

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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const isAcertoProducao = file.name.toLowerCase().startsWith("acerto da producao");

      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        defval: "",
        range: isAcertoProducao ? 2 : 0
      });

      setFile(jsonData);

      if (jsonData.length > 0) {
        const colunas = Object.keys(jsonData[0]);
        setColumns(colunas);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleCreateModelo = async () => {
    try {
      const response = await fetch("http://localhost:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,
          NUM_BANCO,
          NOM_BANCO,
          NUM_PROPOSTA,
          NUM_CONTRATO,
          DAT_CREDITO,
          VAL_BRUTO,
          VAL_LIQUIDO,
          VAL_BASE_COMISSAO,
          VAL_COMISSAO,
          PCL_COMISSAO,
          DSC_TIPO_COMISSAO,
          COD_LOJA,
          COD_UNIDADE_EMPRESA,
          COD_BANCO,
          COD_TIPO_PROPOSTA_EMPRESTIMO,
          DSC_TIPO_PROPOSTA_EMPRESTIMO,
          NIC_CTR_USUARIO,
          COD_PRODUTO,
          COD_PRODUTOR_VENDA,
          COD_PRODUTOR_VENDA_BANCO,
          COD_TIPO_COMISSAO,
          COD_SITUACAO_EMPRESTIMO,
          QTD_PARCELA,
          NUM_PARCELA_DIFERIDA_EMPRESA,
          DAT_EMPRESTIMO,
          DAT_CONFIRMACAO,
          DAT_ESTORNO,
          DAT_CTR_INCLUSAO,
          TIPO_COMISSAO_BANCO,
          PCL_TAXA_EMPRESTIMO
        })
      });

      const data = await response.json();
      console.log("Modelo salvo:", data);
    } catch (error) {
      console.error("Erro ao salvar modelo:", error);
    }
  };



  return (
    <>
      <Header />
      <section className="grid md:grid-cols-2 p-10 gap-2">
        <div className="flex flex-col gap-5">
          <div className="border-1 bg-white border-gray-300 p-5 rounded-xl shadow-xl">
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
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
          <div className="border-1 bg-white border-gray-300 p-5 rounded-xl shadow-xl">
            <h1 className="flex items-center text-lg font-semibold">Coluna do Upload</h1>
            <p className="text-sm text-gray-500 pt-1 pb-1">Colunas disponiveis para mapeamento</p>
            {
              columns.length > 0 ? (
                columns.map((col) => (
                  <p className="border-1 border-gray-200 inset-shadow-2xs inset-shadow-gray-400 py-2 px-5 rounded-xl mt-4">{col}</p>
                ))
              ) : (
                <p className="text-sm text-gray-400">Nenhum arquivo carregado.</p>
              )
            }
          </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="border-1 bg-white border-gray-300 p-5 rounded-xl shadow-xl">
              <h1 className="flex items-center text-xl font-semibold gap-2"><FiSave size={20} className="text-purple-500" /> Salvar Mapeamento</h1>
              <p className="text-sm text-gray-500 pt-1 pb-5">Dê um nome para este mapeamento</p>
              <p className="flex items-center text-sm font-semibold pb-2">Nome do Mapeamento</p>
              <Input
                value={nome}
                type="text"
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Itau"
              />
              <button onClick={handleCreateModelo} className="flex items-center justify-center gap-2 w-full mt-3 bg-gradient-to-r from-purple-700 to-purple-400 rounded-xl px-5 py-2 transition-all duration-300 cursor-pointer text-white hover:-translate-y-1"><FiSave size={15} /> Salvar Mapeamento</button>
            </div>
        </div>
      </section>
    </>
  );
}

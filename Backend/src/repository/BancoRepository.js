const xlsx = require("xlsx");
const path = require("path");
const fs = require('fs');

class BancoRepository {
    executar(banco, file, bancoName) {

        if (!file) {
            return res.status(400).json({ error: "Nenhum arquivo enviado" });
        }

        const workbook = xlsx.readFile(path.resolve(file.path));
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const rows = xlsx.utils.sheet_to_json(sheet, { defval: null });

        const colunas = [
            "NUM_BANCO",
            "NOM_BANCO",
            "NUM_PROPOSTA",
            "NUM_CONTRATO",
            "NOM_CLIENTE",
            "COD_CPF_CLIENTE",
            "DSC_PRODUTO",
            "DSC_SITUACAO_BANCO",
            "DSC_OBSERVACAO",
            "DAT_CREDITO",
            "VAL_BRUTO",
            "VAL_LIQUIDO",
            "VAL_SALDO_REFINANCIAMENTO",
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
        ];

        const mapeamento = {};
        for (const coluna of colunas) {
            mapeamento[coluna] = banco[coluna] || null;
        }

        const linhasTransformadas = rows.map((row) => {
            const novaLinha = {};

            for (const [colunaDestino, colunaOrigem] of Object.entries(mapeamento)) {
                if (colunaOrigem) {
                    novaLinha[colunaDestino] = row.hasOwnProperty(colunaOrigem)
                        ? row[colunaOrigem]
                        : null;
                } else {
                    novaLinha[colunaDestino] = null;
                }
            }

            if (bancoName === "V8") {
                novaLinha['TIPO_COMISSAO_BANCO'] = "DIRETA"
                novaLinha['NUM_BANCO'] = "1725"
            }
            return novaLinha;
        });

        const newSheet = xlsx.utils.json_to_sheet(linhasTransformadas);
        const newWorkbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(newWorkbook, newSheet, "Transformado");

        console.log(file)

        const outputPath = path.resolve("C:/Users/ferna/projeto/ProjetoLev/output", `${bancoName}.xlsx`);

        xlsx.writeFile(newWorkbook, outputPath);

        console.log(`✅ Arquivo transformado salvo em: ${outputPath}`);

        return linhasTransformadas;

    }
}

module.exports = new BancoRepository();
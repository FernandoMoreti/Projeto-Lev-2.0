const XLSX = require('xlsx');
const fs = require('fs');

class BancoRepository {
    executar(banco, file) {
        console.log(banco)
        console.log("CHEGUEI BUCETA")

        const mapeamento = {
        "Cliente": "Nome do Cliente",
        "Produto": "Item",
        "Valor Total": "Preço"
        };

        // Caminhos dos arquivos:
        const arquivoEntrada = file;
        const arquivoSaida = 'saida.xlsx';

        // Lê o arquivo Excel de entrada:
        const workbook = XLSX.readFile(arquivoEntrada);
        const primeiraAba = workbook.SheetNames[0];
        const dados = XLSX.utils.sheet_to_json(workbook.Sheets[primeiraAba]);

        // Transforma os dados conforme o mapeamento:
        const dadosTransformados = dados.map(linha => {
        const novaLinha = {};
        for (const [colunaOriginal, novaColuna] of Object.entries(mapeamento)) {
            novaLinha[novaColuna] = linha[colunaOriginal] || '';
        }
        return novaLinha;
        });

        // Cria uma nova planilha com o resultado:
        const novoWorkbook = XLSX.utils.book_new();
        const novaPlanilha = XLSX.utils.json_to_sheet(dadosTransformados);
        XLSX.utils.book_append_sheet(novoWorkbook, novaPlanilha, 'Resultado');

        // Salva o novo arquivo Excel:
        XLSX.writeFile(novoWorkbook, arquivoSaida);

        console.log(`✅ Arquivo criado com sucesso: ${arquivoSaida}`);

    }
}

module.exports = new BancoRepository();
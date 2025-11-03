const sequelize = require("../config/database")
const { DataTypes } = require("sequelize")

const Bancos = sequelize.define("bancos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NUM_BANCO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    NOM_BANCO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    NUM_PROPOSTA: {
        type: DataTypes.STRING,
        allowNull: true
    },
    NUM_CONTRATO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    NOM_CLIENTE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_CPF_CLIENTE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DSC_PRODUTO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DSC_SITUACAO_BANCO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DSC_OBSERVACAO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DAT_CREDITO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    VAL_BRUTO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    VAL_LIQUIDO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    VAL_SALDO_REFINANCIAMENTO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    VAL_BASE_COMISSAO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    VAL_COMISSAO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PCL_COMISSAO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DSC_TIPO_COMISSAO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_LOJA: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_UNIDADE_EMPRESA: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_BANCO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_TIPO_PROPOSTA_EMPRESTIMO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DSC_TIPO_PROPOSTA_EMPRESTIMO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    NIC_CTR_USUARIO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_PRODUTO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_PRODUTOR_VENDA: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_PRODUTOR_VENDA_BANCO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_TIPO_COMISSAO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    COD_SITUACAO_EMPRESTIMO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    QTD_PARCELA: {
        type: DataTypes.STRING,
        allowNull: true
    },
    NUM_PARCELA_DIFERIDA_EMPRESA: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DAT_EMPRESTIMO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DAT_CONFIRMACAO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DAT_ESTORNO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DAT_CTR_INCLUSAO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TIPO_COMISSAO_BANCO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PCL_TAXA_EMPRESTIMO: {
       type:  DataTypes.STRING,
       allowNull: true
    }
}, {
    tableName: "bancos",
    timestamps: true
});

module.exports = Bancos;

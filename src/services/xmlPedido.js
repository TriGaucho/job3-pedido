export default {
    montaXML: (param) => {

        let item = ''
        param.itens.forEach(i => {
             item += `
                <item>
                <codigo>${i.codigo}</codigo>
                <descricao>${i.descricao}</descricao>
                <un>${i.un}</un>
                <qtde>${i.qtde}</qtde>
                <vlr_unit>${i.vlr_unit}</vlr_unit>
                </item>
            `
        })

        let dados = `
        <?xml version="1.0" encoding="UTF-8"?>
        <pedido>
        <cliente>
        <nome>${param.nome}</nome>
        <tipoPessoa>${param.tipoPessoa}</tipoPessoa>
        <endereco>${param.endereco}</endereco>
        <cpf_cnpj>${param.cpf_cnpj}</cpf_cnpj>
        <numero>${param.numero}</numero>
        <complemento>${param.complemento}</complemento>
        <bairro>${param.bairro}</bairro>
        <cep>${param.cep}</cep>
        <cidade>${param.cidade}</cidade>
        <uf>${param.uf}</uf>
        <fone>${param.fone}</fone>
        </cliente>
        <itens>
        ${item}
        </itens>
        <obs>${param.obs}</obs>
        <obs_internas>${param.obs_internas}</obs_internas>
        </pedido>
        `

        return dados
    }
}
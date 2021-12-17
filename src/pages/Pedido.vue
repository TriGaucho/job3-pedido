<template>
    <div>
        <h1>Pedidos</h1>

        <form method="POST" @submit="enviarPedido">
            <!-- Dados do Cliente -->
            <div>
                <label for="cpf">CPF: </label>
                <input type="number" v-model='cpf_cnpj' id="cpf" name="cpf" maxlength="11"> <br>

                <label for="nome">Nome: </label>
                <input type="text" v-model='nome' id="nome" name="nome"> <br>
                
                <label for="fone">Nº WhatsApp: </label>
                <input type="number" v-model='fone' id="fone" name="fone"> <br>
            </div>
            <!-- Dados do endereço -->
            <div>
                <label for="cep">CEP: </label>
                <input type="number" v-model='cep' id="cep" name="cep" maxlength="8"> <br>

                <label for="endereco">Endereço: </label>
                <input type="text" id="endereco" name="endereco" v-model="enderecoCEP.logradouro">

                <label for="bairro">Bairro: </label>
                <input type="bairro" id="bairro" name="bairro" v-model="enderecoCEP.bairro"> <br>

                <label for="cidade">Cidade: </label>
                <input type="cidade" id="cidade" name="cidade" v-model="enderecoCEP.localidade">

                <label for="uf">UF: </label>
                <input type="uf" id="uf" name="uf" v-model="enderecoCEP.uf">

                <label for="numero">Nº: </label>
                <input type="number" id="numero" name="numero" v-model="numero">
                
                <label for="complemento">Compl: </label>
                <input type="text" id="complemento" name="complemento" v-model="complemento"> <br>
            </div>
            <!-- Seleção de Produto -->
            <div>
                <label for="produto">Produto: </label>
                <select name="produto" id="produto" v-model="produto">
                    <option value="" selected>Selecione os produtos...</option>
                    <option v-for="produto in produtos" :key="produto.codigo" :value="produto" >{{produto.descricao}} - R$ {{produto.preco}}</option>
                </select>

                <label for="qtde">Qtd: </label>
                <input type="number" id="qtde" name="qtde" v-model="qtdeTemp">
                
                <label for="un">Un.</label>
                <input type="text" id="un" name="un" v-if="!produto" value="   Un." disabled>
                <input type="text" id="un" name="un" v-else :value="produto.unidade" disabled>
                
                
                <label for="preco" v-if="!produto">Preço: R$ 0,00</label>
                <label for="preco" v-else>Preço: R$ {{produto.preco * qtdeTemp}}</label>

                <button v-on:click.prevent="inlcuirItem">Incluir</button>
                <!-- Tabela com os Produtos -->
                <table>
                    <tr>
                        <td>Descrição</td>
                        <td>Quantidade</td>
                        <td>Preço</td>
                        <td>Total</td>
                        <td></td>
                    </tr>
                    <tr v-for="(item, index) in itens" :key="item.index">
                        <td>{{item.descricao}}</td>
                        <td>{{item.qtde}}{{item.un}}</td>
                        <td>{{item.vlr_unit}}</td>
                        <td>{{item.vlr_unit * item.qtde}}</td>
                        <td><button v-on:click.prevent="excluirItem(index)">Excluir</button></td>
                    </tr>
                </table>
            </div>

            <input type="submit" value="Enviar Pedido" >
        </form>

    </div>
</template>

<script>
import apiCep from '../services/apiCep.js'
import xmlPedido from '../services/xmlPedido.js'
import apiBing from '../services/apiBing.js'

export default {
    name: 'Pedido',
    data() {
        return {
            qtdeTemp: null,
            produto:null,
            produtos: null,
            nome: null,
            cpf_cnpj: null,
            fone: null,
            cep: '',
            endereco: null,
            bairro: null,
            cidade: null,
            uf: null,
            numero: null,
            complemento: null,
            enderecoCEP: {
                logradouro: null,
                bairro: null,
                localidade: null,
                uf: null,
                cep: null
            },
            itens: [],
            item: null
        }
    },
    methods: {
        async consultarCEP() {
            if(!this.cep) return alert('Preencher o CEP')

            apiCep.get(this.cep, res => {
               const dadosCEP = res.data
               if(dadosCEP.erro) {
                   return alert(`CEP ${this.cep} inválido !`)
               }
               this.enderecoCEP = {...dadosCEP}
               console.log(this.enderecoCEP)
            }) 
        },

        async getProdutos() {
            apiBing.get('produtos/json/', response => {
                const produtosBling = response.data.retorno.produtos
                this.produtos = produtosBling.map(i => {
                    return {
                        codigo: i.produto.codigo,
                        descricao: i.produto.descricao,
                        unidade: i.produto.unidade,
                        preco: i.produto.preco,
                    }   
                })
                console.log(this.produtos)
            })
        },

        async inlcuirItem() {
            const item = {
                codigo: this.produto.codigo,
                descricao: this.produto.descricao,
                un: this.produto.unidade,
                qtde: this.qtdeTemp,
                vlr_unit: this.produto.preco
            }

            this.produto = null
            this. qtdeTemp = null

            this.itens.push(item)
            const test = this.itens
            console.log(test)
        },

        async excluirItem(index) {
            console.log(`Index: ${index}`)
            const test = this.itens.splice(index, 1)
            console.log(`Novo array: ${test}`)
        },

        async enviarPedido(dadosForm) {
            dadosForm.preventDefault()
            
            const dadosXML = {
                nome: this.nome,
                cpf_cnpj: this.cpf_cnpj,
                fone: this.fone,
                tipoPessoa: 'F',
                cep: this.cep,
                endereco: this.enderecoCEP.logradouro,
                bairro: this.enderecoCEP.bairro,
                cidade: this.enderecoCEP.localidade,
                uf: this.enderecoCEP.uf,
                numero: this.numero,
                complemento: this.complemento,
                itens: this.itens
            }
            const xml = xmlPedido.montaXML(dadosXML)
            
            apiBing.post('pedido/', xml, response => {
                alert(`${response}Salvo com sucesso`)
          })
        }
    },

    mounted() {
        this.getProdutos()
    },

    watch: {
        cep: function (novoCEP) {
            if(novoCEP.length === 8) this.consultarCEP()
            else this.enderecoCEP = null
        },
        
        produto: function () {
            console.log(this.produto)
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <div>
        <h1>Pedidos</h1>

        <form class="row g-3" method="POST" @submit="enviarPedido">
              <p v-if="errors.length">
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error.indice">{{ error }}</li>
                </ul>
            </p>
            <!-- Dados do Cliente -->
            <div class="col-md-2">
                <label class="form-label" for="cpf">CPF</label>
                <input 
                    class="form-control" 
                    type="text" 
                    v-model='cpf_cnpj' 
                    id="cpf" 
                    name="cpf" 
                    v-mask="'###.###.###-##'"
                    
                >
            </div>
            <div class="col-md-8">
                <label class="form-label" for="nome">Nome</label>
                <input 
                    class="form-control" 
                    type="text" 
                    v-model='nome' 
                    id="nome" 
                    name="nome"
                    
                >
            </div>
            <div class="col-md-2">
                <label class="form-label" for="fone">WhatsApp</label>
                <input 
                    class="form-control" 
                    type="text" 
                    v-model='fone' 
                    id="fone" 
                    name="fone" 
                    v-mask="'(##) #####.####'"
                >
            </div>
            <!-- Dados do endereço -->
            <div class="col-md-2">
                <label class="form-label" for="cep">CEP</label>
                <input 
                    class="form-control" 
                    type="text" 
                    v-model='cep' 
                    id="cep" 
                    name="cep" 
                    maxlength="8" 
                    v-mask="'#####-###'"
                    
                >
            </div>
            <div class="col-md-8">
                <label class="form-label" for="endereco">Endereço</label>
                <input 
                    class="form-control" 
                    type="text" 
                    id="endereco" 
                    name="endereco" 
                    v-model="enderecoCEP.logradouro"
                >
            </div>
            <div class="col-md-2">
                <label class="form-label" for="bairro">Bairro</label>
                <input 
                    class="form-control" 
                    type="text" 
                    id="bairro" 
                    name="bairro" 
                    v-model="enderecoCEP.bairro"
                >
            </div>

            <div class="col-md-4">
                <label class="form-label" for="cidade">Cidade</label>
                <input 
                    class="form-control" 
                    type="cidade" 
                    id="cidade" 
                    name="cidade" 
                    v-model="enderecoCEP.localidade"
                >
            </div>


            <div class="col-md-2">
                <label class="form-label" for="uf">UF</label>
                <input 
                    class="form-control" 
                    type="uf" 
                    id="uf" 
                    name="uf" 
                    v-model="enderecoCEP.uf"
                >
            </div>

            <div class="col-md-2">
                <label class="form-label" for="numero">Nº</label>
                <input 
                    class="form-control" 
                    type="number" 
                    id="numero" 
                    name="numero" 
                    v-model="numero"
                >
            </div>
                
            <div class="col-md-2">
                <label class="form-label" for="complemento">Compl.</label>
                <input 
                    class="form-control" 
                    type="text" 
                    id="complemento" 
                    name="complemento" 
                    v-model="complemento"
                >
            </div>
            <!-- Seleção de Produto -->
            <div class="col-md-6">
                <label class="form-label" for="produto">Produto</label>
                <select class="form-select" name="produto" id="produto" v-model="produto">
                    <option 
                        v-for="produto in produtos" 
                        :key="produto.codigo" 
                        :value="produto" >{{produto.descricao}} - R$ {{produto.preco}}
                    </option>
                </select>
            </div>
            <div class="col-md-1">
                <label class="form-label" for="qtde">Qtd: </label>
                <input 
                    class="form-control" 
                    type="number" 
                    id="qtde" 
                    name="qtde" 
                    v-model="qtdeTemp"
                >
            </div>
            <div class="col-md-1">    
                <label class="form-label" for="un">Un</label>
                <input 
                    class="form-control" 
                    type="text" 
                    id="un" 
                    name="un" 
                    v-if="!produto"
                    value="Un." 
                    disabled>
                <input 
                    class="form-control" 
                    type="text" 
                    id="un" 
                    name="un" 
                    v-else 
                    :value="produto.unidade" 
                    disabled>
            </div>   
            <div class="col-md-2">         
                <label class="form-label" for="preco" v-if="!produto">Preço: R$ 0,00</label>
                <label class="form-label" for="preco" v-else>Preço: R$ {{produto.preco * qtdeTemp}}</label>
            </div>
            <div class="col-md-2">  
                <button class="btn btn-primary" v-on:click.prevent="inlcuirItem">Incluir</button>
            </div>
            <!-- Tabela com os Produtos -->
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <td scope="col">Descrição</td>
                            <td scope="col">Quantidade</td>
                            <td scope="col">Preço</td>
                            <td scope="col">Total</td>
                            <td scope="col"></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in itens" :key="item.index">
                            <td>{{item.descricao}}</td>
                            <td>{{item.qtde}} {{item.un}}</td>
                            <td>{{item.vlr_unit}}</td>
                            <td>{{item.vlr_unit * item.qtde}}</td>
                            <td>
                                <button class="btn btn-danger" v-on:click.prevent="excluirItem(index)">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <div class="col-md-2">  
            <button class="btn btn-success">Enviar Pedido</button>
        </div>
        <div class="col-md-2">  
            <button class="btn btn-danger" @click="limpaForm()">Limpar</button>
        </div>
        </form>

    </div>
</template>

<script>
import apiCep from '../services/apiCep.js'
import apiJOB3 from '../services/apiJOB3.js'

export default {
    name: 'Pedido',
    data() {
        return {
            errors: [],
            cpf_cnpj: null,
            nome: null,
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
            produtos: null,
            produto:null,
            item: null,
            itens: [],
            qtdeTemp: null,
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
            apiJOB3.get('produtos', response => {
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
            this.validaForm()
            
            dadosForm.preventDefault()

            const dadosPedido = {
                cliente: {
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
                },
                itens: this.itens
            }
            
            apiJOB3.post('pedido', dadosPedido, response => {
                alert(`${response}Salvo com sucesso`)
          })
        },

        async validaForm() {
            return (!this.cpf_cnpj) ? true : this.errors.push('O nome é obrigatório.')
        },

        async limpaForm() {
                this.qtdeTemp = null
                this.produto=null,
                this.produtos= null,
                this.nome= null,
                this.cpf_cnpj= '',
                this.fone= null,
                this.cep= '',
                this.endereco= null,
                this.bairro= null,
                this.cidade= null,
                this.uf= null,
                this.numero= null,
                this.complemento= null,
                this.enderecoCEP= {
                    logradouro: null,
                    bairro: null,
                    localidade: null,
                    uf: null,
                    cep: null
                },
                this.itens= [],
                this.item= null
            
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
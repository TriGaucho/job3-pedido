<template>
    <div>
        <div>
            <br>
        </div>
        <div class="container">
            <form class="row g-3" method="POST" @submit.prevent="validarForm">

                <!-- Dados do Cliente -->
                <div class="col-md-2">
                    <label class="form-label" for="cpf">CPF</label>
                    <input 
                        class="form-control"
                        :class="{ 'is-invalid': $v.cpf_cnpj.$error }"
                        v-model.trim="$v.cpf_cnpj.$model" 
                        type="text" 
                        id="cpf" 
                        name="cpf" 
                        v-mask="'###.###.###-##'"
                        placeholder="somente números"
                    >
                <div class="invalid-feedback" v-if="!$v.cpf_cnpj.required">Preencher o CPF</div>
                </div>
                <div class="col-md-8">
                    <label class="form-label" for="nome">Nome</label>
                    <input 
                        class="form-control"
                        :class="{ 'is-invalid': $v.nome.$error }"
                        v-model.trim='$v.nome.$model' 
                        type="text" 
                        id="nome" 
                        name="nome"
                        placeholder="digite o nome"
                    >
                    <div class="invalid-feedback" v-if="!$v.nome.required">Preencher o Nome</div>
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
                        placeholder="somente números"
                    >
                </div>
                <!-- Dados do endereço -->
                <div class="col-md-2">
                    <label class="form-label" for="cep">CEP</label>
                    <input 
                        class="form-control" 
                        type="text" 
                        :class="{ 'is-invalid': $v.cep.$error }"
                        v-model.trim='$v.cep.$model' 
                        id="cep"
                        name="cep"
                        v-mask="'#####-###'"
                        placeholder="somente números"
                    >
                    <div class="invalid-feedback" v-if="!$v.cep.required">Preencher o CEP</div>
                </div>
                <div class="col-md-8">
                    <label class="form-label" for="endereco">Endereço</label>
                    <input 
                        class="form-control"
                        type="text" 
                        id="endereco" 
                        name="endereco"
                        :class="{ 'is-invalid': $v.endereco.$error }"
                        v-model.trim='$v.endereco.$model'
                        placeholder="avenida, rua, alameda, etc"
                    >
                    <div class="invalid-feedback" v-if="!$v.endereco.required">Preencher Endereço</div>
                </div>
                <div class="col-md-2">
                    <label class="form-label" for="bairro">Bairro</label>
                    <input 
                        class="form-control" 
                        type="text" 
                        id="bairro" 
                        name="bairro"
                        :class="{ 'is-invalid': $v.bairro.$error }"
                        v-model.trim='$v.bairro.$model' 
                        placeholder="bairro"
                    >
                    <div class="invalid-feedback" v-if="!$v.bairro.required">Preencher Bairro</div>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="cidade">Cidade</label>
                    <input 
                        class="form-control" 
                        type="cidade" 
                        id="cidade" 
                        name="cidade" 
                        :class="{ 'is-invalid': $v.cidade.$error }"
                        v-model.trim='$v.cidade.$model'
                        placeholder="cidade"
                    >
                    <div class="invalid-feedback" v-if="!$v.cidade.required">Preencher Cidade</div>
                </div>
                <div class="col-md-2">
                    <label class="form-label" for="uf">UF</label>
                    <input 
                        class="form-control" 
                        type="uf" 
                        id="uf" 
                        name="uf" 
                        :class="{ 'is-invalid': $v.uf.$error }"
                        v-model.trim='$v.uf.$model'
                        placeholder="uf"
                    >
                    <div class="invalid-feedback" v-if="!$v.uf.required">Preencher UF</div>
                </div>
                <div class="col-md-2">
                    <label class="form-label" for="numero">Nº</label>
                    <input 
                        class="form-control" 
                        type="number" 
                        id="numero" 
                        name="numero" 
                        :class="{ 'is-invalid': $v.numero.$error }"
                        v-model.trim='$v.numero.$model'
                        placeholder="nº"
                    >
                    <div class="invalid-feedback" v-if="!$v.uf.numero">Preencher Número</div>
                </div>
                    
                <div class="col-md-2">
                    <label class="form-label" for="complemento">Compl.</label>
                    <input 
                        class="form-control" 
                        type="text" 
                        id="complemento" 
                        name="complemento" 
                        v-model="complemento"
                        placeholder="apart, bloco, etc"
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
                        disabled
                    >
                    <input 
                        class="form-control" 
                        type="text" 
                        id="un" 
                        name="un" 
                        v-else 
                        :value="produto.unidade" 
                        disabled
                    >
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
                <div class="alert alert-danger alert-dismissible fade show" v-if=$v.itens.$error role="alert">Deve-se incluir ao menos um item no pedido</div>
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
                    <button class="btn btn-success" type="submit">Enviar Pedido</button>
                </div>
                <div class="col-md-2">  
                    <button class="btn btn-danger" @click="limparForm()">Limpar</button>
                </div>
            </form>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
import apiCep from '../services/apiCep.js'
import apiJOB3 from '../services/apiJOB3.js'
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'

export default {
    name: 'Pedido',
    data() {
        return {
            cpf_cnpj: null,
            nome: null,
            fone: null,
            cep: null,
            endereco: null,
            bairro: null,
            cidade: null,
            uf: null,
            numero: null,
            complemento: null,
            produtos: null,
            produto:null,
            item: null,
            itens: [],
            qtdeTemp: null,
        }
    },
    validations: {
        cpf_cnpj: {
            required,
            minLength: minLength(14)
        },
        nome: {
            required
        }, 
        fone: {
            required
        },
        cep: {
           required,
           minLength: minLength(9)
        }, 
        endereco: {
            required
        },
        bairro: {
            required
        },
        cidade: {
            required
        },
        uf: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(2)
        },
        numero: {
            required,
            between: between(1, 9999)
        },
        itens: {
           required, 
           minLength: minLength(1),
        }
    },
    methods: {
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
        },

        async excluirItem(index) {
            this.itens.splice(index, 1)
        },

        async validarForm() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                setTimeout(() => {
                this.enviarPedido()
                }, 500)
            }
        },

        async enviarPedido() {
            const dadosPedido = {
                cliente: {
                    nome: this.nome,
                    cpf_cnpj: this.cpf_cnpj,
                    fone: this.fone,
                    tipoPessoa: 'F',
                    cep: this.cep,
                    endereco: this.endereco,
                    bairro: this.bairro,
                    cidade: this.localidade,
                    uf: this.uf,
                    numero: this.numero,
                    complemento: this.complemento,
                },
                itens: this.itens
            }
            
            apiJOB3.post('pedido', dadosPedido, response => {
                alert(`Pedido criado com sucesso`)
                this.limparForm()
                console.log(response)
          })

        
        },

        async limparForm() {
            this.cpf_cnpj = null
            this.nome = null
            this.fone = null
            this.cep = null
            this.endereco = null
            this.bairro = null
            this.cidade = null
            this.uf = null
            this.numero = null
            this.complemento = null
            this.produtos = null
            this.produto =null
            this.item = null
            this.itens = []
            this.qtdeTemp = null

            document.location.reload()
        }
    },

    mounted() {
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
         })
    },

    watch: {
        cep: function (novoCEP) {
            if(novoCEP.length === 9) {
                apiCep.get(this.cep, res => {
                    const dadosCEP = res.data
                    if(dadosCEP.erro) {
                        return alert(`CEP ${this.cep} inválido !`)
                    }
                    
                    this.endereco = dadosCEP.logradouro
                    this.bairro = dadosCEP.bairro
                    this.cidade = dadosCEP.localidade
                    this.uf = dadosCEP.uf
                })      
            }
        }
    }
}
</script>

<style scoped>

</style>
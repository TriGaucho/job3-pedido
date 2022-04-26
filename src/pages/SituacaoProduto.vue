<template>
    <main class="flex-shrink-0">
        <div class="container">
            <br />
            <div class="d-flex">
                    <div class="col-md-6">
                        <input class="form-control" list="tabelaProdutos" id="produto" 
                        placeholder="Digite a descrição do produto..." v-model="produto" v-on:input="filtraProduto">
                    </div>
                
            </div>
            <br />
            <div class="d-flex">
                <table class="table" id="tabelaProdutos">
                    <thead>
                        <tr class="header">
                            <td scope="col">Codigo</td>
                            <td scope="col">Descrição</td>
                            <td scope="col">Situação</td>
                            <td scope="col">Alterar Situação</td>
                        </tr>
                    </thead>
                    <tbody id="tbodyTabela">
                        <tr v-for="(produto, indice) in produtos" :key="produto.index" id="tabelaProdutos">
                            <td>{{produto.codigo}}</td>
                            <td>{{produto.descricao}}</td>
                            <td>{{produto.situacao}}</td>
                            <td v-if="produto.situacao=='Inativo'">
                                <button class="btn btn-success"  v-on:click.prevent="ativarInativar(produto, 'Ativo', indice)">
                                    Ativar
                                </button>
                            </td>
                            <td v-if="produto.situacao=='Ativo'" v-on:click.prevent="ativarInativar(produto, 'Inativo', indice)">
                                <button class="btn btn-danger">
                                    Inativar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
import apiJOB3 from '../services/apiJOB3.js'

export default {
    name: 'SituacaoProduto',
    data() {
        return {
            produtos: [],
            produto:null,
            itemAtualizar: null
        }
    },
    
    mounted() {
        apiJOB3.get('produtos', response => {
             response.data.forEach((i) => {
                 this.produtos.push(i)
            })
         })

        apiJOB3.get('/produtos/inativos', response => {
            response.data.forEach((i) => {
                 this.produtos.push(i)
            })
         })

         console.log(this.produtos)
    },

    methods: {
        async ativarInativar(prod, novaSituacao, indice) {
            console.log(prod)
            console.log(indice)
            console.log(this.produtos[indice].codigo, this.produtos[indice].situacao)

            const itemAtualizar = {
                codigo: prod.codigo,
                situacao: novaSituacao
            }
            
            console.log(itemAtualizar)

            try {
                apiJOB3.put('produtos/situacao', itemAtualizar, response => {
                    alert(`Produto atualizado!`)
                    console.log( response.data[0].situacao )
                    this.produtos[indice].situacao = response.data[0].situacao
                })
            } catch (error) {
                console.log(error)  
            }

            console.log(this.produtos[indice].codigo, this.produtos[indice].situacao)
        },

        filtraProduto(e){
            let descricaoProduto = e.target.value.toUpperCase()
            console.log(descricaoProduto)
            const tabela = document.getElementById("tbodyTabela")
            
            const tr = tabela.getElementsByTagName("tr");
           
             for (let i = 0; i < tr.length; i++) {
                let td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                let txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(descricaoProduto) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }
}
</script>
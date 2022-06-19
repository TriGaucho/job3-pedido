<template>
    <div>
        <div v-if= 'mensagemAviso' class="alert alert-danger alert-dismissible fade show" role="alert">{{ mensagemAviso }}</div>
        <form class="row g-3 mt-3" method="POST" @submit.prevent="salvarProduto">
            <div class="form-floating mb-3 col-md-8">
                <input type="text" class="form-control" id="inputCodigo" placeholder="Código"
                    :class="{ 'is-invalid': $v.codigo.$error }" v-model.trim='$v.codigo.$model'>
                <label for="inputCodigo">Código</label>
                <div class="invalid-feedback" v-if="!$v.codigo.required">Código é obrigatório</div>
            </div>
            <div class="form-floating mb-3 col-md-2">
                <input type="text" class="form-control" id="inputUnidade" placeholder="Unidade"
                    :class="{ 'is-invalid': $v.unidade.$error }" v-model.trim='$v.unidade.$model'>
                <label for="inputUnidade">Unidade</label>
                <div class="invalid-feedback" v-if="!$v.unidade.required">Unidade é obrigatório</div>
            </div>
            <div class="form-floating mb-3 col-md-2">
                <input type="number" class="form-control" id="inputPrecoUnitario" placeholder="Valor Unitário" min="0.00" max="10000.00" step="0.01"
                    :class="{ 'is-invalid': $v.precoUnitario.$error }" v-model.trim='$v.precoUnitario.$model'>
                <label for="inputPrecoUnitario">Valor Unitário</label>
                <div class="invalid-feedback" v-if="!$v.precoUnitario.required">Preço obrigatório</div>
            </div>
            
            <div class="row">
                <div class="col-md-2">  
                    <button class="btn btn-warning" type="submit">Salvar</button>
                </div>
                <div class="col-md-2">  
                    <button class="btn btn-danger" @click="limparForm()">Limpar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

    export default{
        name: 'Produtos',
        data() {
            return {
                codigo: '',
                unidade: '',
                precoUnitario: '',
                mensagemAviso: '',
            }
        },

        validations: {
            codigo: {
                required
            },
            unidade: {
                required
            },
            precoUnitario: {
                required
            },
        },
        methods: {
            async salvarProduto() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    this.mensagemAviso = 'Cadastro salvo com sucesso!'
                    this.limparForm()
                }
                    
            },

            async limparForm() {
                document.location.reload()
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div v-if= 'mensagemAviso' class="alert alert-danger alert-dismissible fade show" role="alert">{{ mensagemAviso }}</div>
        <form class="row g-3 mt-3" method="POST" @submit.prevent="enviarCadastro">
            <!-- Dados cadastrais -->
            <div class="form-floating mb-3 col-md-8">
                <input type="text" class="form-control" id="inputNome" placeholder="Nome"
                    :class="{ 'is-invalid': $v.nome.$error }" v-model.trim='$v.nome.$model'>
                <label for="inputNome">Nome</label>
                <div class="invalid-feedback" v-if="!$v.nome.required">Nome é obrigadótio</div>
            </div>
            <div class="form-floating mb-3 col-md-4">
                <input type="text" class="form-control" id="inputCPFCNPJ" placeholder="CPF/CNPJ" 
                    v-mask="'###.###.###-##'"  v-model='cpfCnpj' :class="{ 'is-invalid': $v.cpfCnpj.$error }">
                <label for="inputCPFCNPJ">CPF/CNPJ</label>
                <div class="invalid-feedback" v-if="!$v.cpfCnpj.required">Preencher CPF ou CNPJ</div>
            </div>
            <!-- Contato -->
            <div class="form-floating mb-3 col-md-4">
                <input type="text" class="form-control" id="inputTelefone" placeholder="Telefone" 
                    v-model="telefone" v-mask="'(##) #####.####'">
                <label for="inputTelefone">Telefone</label>
            </div>
            <div class="form-floating mb-3 col-md-8">
                <input type="email" class="form-control" id="inputEmail" placeholder="E-Mail"
                    v-model="email">
                <label for="inputEmail">E-mail</label>
            </div>
            <!-- Endereço -->
            <!-- <div class="text-warning">
                <hr>
            </div> -->
            <div class="form-floating mb-3 col-md-2">
                <input type="text" class="form-control" id="inputCEP" placeholder="CEP"
                    v-model="cep" v-mask="'#####-###'">
                <label for="inputCEP">CEP</label>
            </div>
            <div class="form-floating mb-3 col-md-6">
                <input type="text" class="form-control" id="inputLogradouro" placeholder="Endereço/Logradouro"
                    v-model="logradouro">
                <label for="inputLogradouro">Endereço/Logradouro</label>
            </div>
            <div class="form-floating mb-3 col-md-4">
                <input type="text" class="form-control" id="inputBairro" placeholder="Bairro"
                    v-model="bairro">
                <label for="inputBairro">Bairro</label>
            </div>
            <div class="form-floating mb-3 col-md-4">
                <input type="text" class="form-control" id="inputCidade" placeholder="Cidade"
                    v-model="cidade">
                <label for="inputCidade">Cidade</label>
            </div>
            <div class="form-floating mb-3 col-md-2">
                <input type="text" class="form-control" id="inputUF" placeholder="UF"
                    v-model="uf">
                <label for="inputUF">UF</label>
            </div>
            <div class="form-floating mb-3 col-md-2">
                <input type="text" class="form-control" id="inputNumero" placeholder="Número"
                    v-model="numero">
                <label for="inputNumero">Número</label>
            </div>
            <div class="form-floating mb-3 col-md-2">
                <input type="text" class="form-control" id="inputComplemento" placeholder="Complemento"
                    v-model="complemento">
                <label for="inputComplemento">Complemento</label>
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
import { required, minLength } from 'vuelidate/lib/validators'

    export default{
        name: 'Cadastro',
        data() {
            return {
                nome: '',
                cpfCnpj: '',
                telefone: '',
                email: '',
                cep: '',
                logadouro: '',
                bairro: '',
                cidade: '',
                uf: '',
                numero: '',
                complemento: '',
                mensagemAviso: '',
            }
        },

        validations: {
            nome: {
                required
            },
            cpfCnpj: {
                required,
                minLength: minLength(14)
            }

        },
        methods: {
            async enviarCadastro() {
                   this.mensagemAviso = 'Cadastro salvo com sucesso!'
                   this.limparForm()
                    
            },

            async limparForm() {
                document.location.reload()
            }
        }
    }
</script>

<style scoped>

</style>
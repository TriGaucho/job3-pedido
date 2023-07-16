<template>
  <main class="flex-shrink-0">
    <div class="container">
      <div class="row">
        <form class="row g-3 mt-3" method="POST" @submit.prevent="validarForm">
          <!-- Dados do Cliente -->
          <div class="col-md-2">
            <!-- <label class="form-label" for="cpf">CPF</label> -->
            <input
              v-if="editCpfCnpj"
              class="form-control"
              :class="{ 'is-invalid': $v.cpf_cnpj.$error }"
              v-model.trim="$v.cpf_cnpj.$model"
              type="text"
              id="cpf"
              name="cpf"
              placeholder="CPF/CNPJ"
              v-mask="maskFormatada"
              @blur="aplicaMascara"
              @focus="resetarMask"
              maxlength="14"
            />
            <input
              v-else
              class="form-control"
              :class="{ 'is-invalid': $v.cpf_cnpj.$error }"
              v-model.trim="$v.cpf_cnpj.$model"
              type="text"
              id="cpf"
              name="cpf"
              v-mask="'###.###.###-##'"
              placeholder="CPF"
            />
            <div class="invalid-feedback" v-if="!$v.cpf_cnpj.required">
              Campo obrigatório
            </div>
          </div>
          <div class="col-md-8">
            <!-- <label class="form-label" for="nome">Nome</label> -->
            <input
              class="form-control"
              :class="{ 'is-invalid': $v.nome.$error }"
              v-model.trim="$v.nome.$model"
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
            />
            <div class="invalid-feedback" v-if="!$v.fone.required">
              Preencher o Nome
            </div>
          </div>
          <div class="col-md-2">
            <!-- <label class="form-label" for="fone">WhatsApp</label> -->
            <input
              class="form-control"
              :class="{ 'is-invalid': $v.fone.$error }"
              type="text"
              v-model="fone"
              id="fone"
              name="fone"
              v-mask="'(##) #####.####'"
              placeholder="Telefone"
            />
            <div class="invalid-feedback" v-if="!$v.nome.required">
              Preencher o telefone
            </div>
          </div>
          <!-- Dados do endereço -->
          <div class="col-md-2">
            <!-- <label class="form-label" for="cep">CEP</label> -->
            <input
              class="form-control"
              type="text"
              :class="{ 'is-invalid': $v.cep.$error }"
              v-model.trim="$v.cep.$model"
              id="cep"
              name="cep"
              v-mask="'#####-###'"
              placeholder="CEP"
            />
            <div class="invalid-feedback" v-if="!$v.cep.required">
              Preencher o CEP
            </div>
          </div>
          <div class="col-md-8">
            <!-- <label class="form-label" for="endereco">Endereço</label> -->
            <input
              class="form-control"
              type="text"
              id="endereco"
              name="endereco"
              :class="{ 'is-invalid': $v.endereco.$error }"
              v-model.trim="$v.endereco.$model"
              placeholder="Endereço/Logradouro"
            />
            <div class="invalid-feedback" v-if="!$v.endereco.required">
              Preencher Endereço
            </div>
          </div>
          <div class="col-md-2">
            <!-- <label class="form-label" for="bairro">Bairro</label> -->
            <input
              class="form-control"
              type="text"
              id="bairro"
              name="bairro"
              :class="{ 'is-invalid': $v.bairro.$error }"
              v-model.trim="$v.bairro.$model"
              placeholder="Bairro"
            />
            <div class="invalid-feedback" v-if="!$v.bairro.required">
              Preencher Bairro
            </div>
          </div>
          <div class="col-md-4">
            <!-- <label class="form-label" for="cidade">Cidade</label> -->
            <input
              class="form-control"
              type="cidade"
              id="cidade"
              name="cidade"
              :class="{ 'is-invalid': $v.cidade.$error }"
              v-model.trim="$v.cidade.$model"
              placeholder="Cidade"
            />
            <div class="invalid-feedback" v-if="!$v.cidade.required">
              Preencher Cidade
            </div>
          </div>
          <div class="col-md-2">
            <!-- <label class="form-label" for="uf">UF</label> -->
            <input
              class="form-control"
              type="uf"
              id="uf"
              name="uf"
              :class="{ 'is-invalid': $v.uf.$error }"
              v-model.trim="$v.uf.$model"
              placeholder="UF"
            />
            <div class="invalid-feedback" v-if="!$v.uf.required">
              Preencher UF
            </div>
          </div>
          <div class="col-md-2">
            <!-- <label class="form-label" for="numero">Nº</label> -->
            <input
              class="form-control"
              type="number"
              id="numero"
              name="numero"
              :class="{ 'is-invalid': $v.numero.$error }"
              v-model.trim="$v.numero.$model"
              placeholder="Nº"
            />
            <div class="invalid-feedback" v-if="!$v.uf.numero">
              Preencher Número
            </div>
          </div>

          <div class="col-md-2">
            <!-- <label class="form-label" for="complemento">Compl.</label> -->
            <input
              class="form-control"
              :class="{ 'is-invalid': $v.complemento.$error }"
              type="text"
              id="complemento"
              name="complemento"
              v-model="complemento"
              placeholder="Complemento"
            />
            <div class="invalid-feedback" v-if="!$v.complemento.required">
              Indicar se CASA, FUNDOS, LOTE, etc
            </div>
          </div>
          <!-- Seleção de Produto -->
          <div class="col-md-6">
            <input
              autocomplete="off"
              class="form-control"
              list="listaProdutos"
              id="produto"
              :placeholder="
                produtos.length === 0
                  ? 'Aguarde - Buscando produtos ...'
                  : 'Selecione o produto...'
              "
              v-model="produto"
              v-on:input="selecionaProduto"
              :disabled="produtos.length === 0 ? true : false"
            />
            <datalist id="listaProdutos">
              <option
                v-for="produto in produtos"
                v-bind:key="produto.codigo"
                v-bind:value="
                  produto.codigo +
                  ' - ' +
                  produto.descricao +
                  ' - R$ ' +
                  produto.valorTabela4
                "
              ></option>
            </datalist>
          </div>
          <div class="col-md-1">
            <!-- <label class="form-label" for="qtde">Qtd: </label> -->
            <input
              class="form-control"
              type="number"
              id="qtde"
              min="0"
              name="qtde"
              v-model="qtdeTemp"
              placeholder="Qtd."
            />
          </div>
          <div class="col-md-1">
            <!-- <label class="form-label" for="un">Un</label> -->
            <input
              class="form-control"
              type="text"
              id="un"
              name="un"
              v-if="!produtoSelecionado"
              value="Un."
              disabled
            />
            <input
              class="form-control"
              type="text"
              id="un"
              name="un"
              v-else
              v-bind:value="produtoSelecionado.unidade"
              disabled
            />
          </div>
          <div class="col-md-2">
            <!-- <label class="form-label" for="preco" v-if="!produto">Preço: R$ 0,00</label> -->
            <!-- <label class="form-label" for="preco" v-else>Preço: R$ {{produto.preco * qtdeTemp}}</label> -->
            <input
              v-if="!produtoSelecionado.valorTabela4"
              class="form-control"
              type="text"
              id="preco"
              name="preco"
              value="R$"
              disabled
            />
            <input
              class="form-control"
              type="text"
              id="preco"
              name="preco"
              v-else
              v-bind:value="'R$ ' + produtoSelecionado.valorTabela4 * qtdeTemp"
              disabled
            />
          </div>
          <div class="col-md-2">
            <button class="btn btn-primary" v-on:click.prevent="inlcuirItem">
              Incluir
            </button>
          </div>
          <!-- Tabela com os Produtos -->
          <div>
            <div
              v-if="mensagemValidacao"
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {{ mensagemValidacao }}
            </div>
            <div
              class="alert alert-danger alert-dismissible fade show"
              v-if="$v.produtosSelecionados.$error"
              role="alert"
            >
              Deve-se incluir ao menos um item no pedido.
            </div>
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
                <tr
                  v-for="(item, index) in produtosSelecionados"
                  :key="item.index"
                >
                  <td>{{ item.descricao }}</td>
                  <td>{{ item.quantidade }} {{ item.un }}</td>
                  <td>{{ item.valorUnidade }}</td>
                  <td>R$ {{ item.valorUnidade * item.quantidade }}</td>
                  <td>
                    <button
                      class="btn btn-danger"
                      v-on:click.prevent="excluirItem(index)"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Observações -->
          <div>
            <textarea
              class="form-control"
              id="observacoes"
              v-model="observacoes"
              placeholder="Observações do Pedido"
            ></textarea>
          </div>
          <div class="col-md-2">
            <input
              class="form-control"
              type="text"
              id="dataPrevista"
              name="dataPrevista"
              placeholder="Data de Entrega"
              onfocus="(this.type='date')"
              :class="{ 'is-invalid': $v.previsaoPedido.$error }"
              v-model.trim="$v.previsaoPedido.$model"
            />
            <div class="invalid-feedback" v-if="!$v.previsaoPedido.required">
              Preencher Data Previsão.
            </div>
          </div>
          <div class="col-md-2">
            <button class="btn btn-success" type="submit">Enviar Pedido</button>
          </div>
          <div class="col-md-2">
            <button class="btn btn-danger" @click="limparForm()">Limpar</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import apiCep from "../services/apiCep.js";
import apiJOB3 from "../services/apiJOB3.js";

const subclasse = process.env.VUE_APP_SUBCLASSE;
const editCpfCnpj = process.env.VUE_APP_CPFCNPJ;

import {
  required,
  minLength,
  maxLength,
  between,
} from "vuelidate/lib/validators";

export default {
  name: "Pedido",
  data() {
    return {
      editCpfCnpj,
      cliente: null,
      dadosCliente: {},
      fNovoCliente: true,
      cpf_cnpj: null,
      nome: null,
      fone: null,
      cep: null,
      endereco: null,
      bairro: null,
      cidade: null,
      uf: null,
      numero: null,
      complemento: "",
      produtos: [],
      produto: null,
      produtoSelecionado: {},
      item: null,
      produtosSelecionados: [],
      qtdeTemp: null,
      mensagemValidacao: "",
      observacoes: "",
      obsInternas: "",
      previsaoPedido: null,
      produtosPedido: [],
      pedidoCompleto: {},
      maskFormatada: "",
    };
  },
  validations: {
    cpf_cnpj: {
      required,
      minLength: minLength(14),
      maxLength: editCpfCnpj ? maxLength(18) : maxLength(14),
    },
    nome: {
      required,
    },
    fone: {
      required,
      minLength: minLength(14),
    },
    cep: {
      required,
      minLength: minLength(9),
    },
    endereco: {
      required,
    },
    bairro: {
      required,
    },
    cidade: {
      required,
    },
    uf: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(2),
    },
    numero: {
      required,
      between: between(1, 9999),
    },
    complemento: {
      required,
    },
    produtosSelecionados: {
      required,
      minLength: minLength(1),
    },
    previsaoPedido: {
      required,
    },
  },
  methods: {
    async inlcuirItem() {
      if (!this.produtoSelecionado.codigo) {
        return (this.mensagemValidacao = "Produto inválido ou inexistente.");
      }

      if (!this.qtdeTemp || this.qtdeTemp <= 0) {
        return (this.mensagemValidacao =
          "Insira uma quantidade maior que 0(zero).");
      }

      const produto = {
        codigo: this.produtoSelecionado.codigo,
        descricao: this.produtoSelecionado.descricao,
        idProduto: this.produtoSelecionado.idProduto,
        observacao: this.produtoSelecionado.descricao,
        quantidade: this.qtdeTemp,
        valorUnidade: this.produtoSelecionado.valorTabela4,
        unidade: this.produtoSelecionado.unidade,
        total: this.totalProdutoSelecionado,
        desconto: 0.0,
      };

      this.produto = null;
      this.qtdeTemp = null;
      this.mensagemValidacao = "";

      this.produtoSelecionado = {};

      this.produtosSelecionados.push(produto);
    },

    async excluirItem(index) {
      this.produtosSelecionados.splice(index, 1);
    },

    async validarForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        setTimeout(() => {
          this.enviarPedido();
        }, 500);
      }
    },

    async incluiProdutosPedido() {
      const produtosTemp = this.produtosSelecionados;
      this.produtosPedido = produtosTemp.map((p) => {
        delete p.unidade;
        delete p.total;
        delete p.codigo;
        delete p.descricao;
        delete p.descricao;
        return p;
      });
      return this.produtosPedido;
    },

    async enviarPedido() {
      //DADOS DO CLIENTE NOVO
      if (this.fNovoCliente) {
        this.pedidoCompleto.dadosCliente = {
          clienteNome: this.nome,
          clienteCpf: this.cpf_cnpj,
        };
      }

      //DADOS DO PEDIDO
      const logradouro = !this.complemento
        ? `${this.endereco}, ${this.numero}`
        : `${this.endereco}, ${this.numero}/${this.complemento}`;
      this.pedidoCompleto.dadosDocumento = {
        cliente: !this.cliente ? null : this.cliente,
        email: "",
        numeroDocumento: null,
        tipoDocumento: 0,
        planoPagamento: "",
        telefone: this.fone,
        cep: this.cep,
        logradouro: logradouro,
        bairro: this.bairro,
        cidade: this.cidade,
        uf: this.uf,
        observacoes: this.observacoes,
        dataPrevisaoEntrega: this.previsaoPedido,
      };

      await this.incluiProdutosPedido();

      //DADOS DOS PRODUTO
      this.pedidoCompleto.produtosDocumento = this.produtosPedido;

      console.log(this.pedidoCompleto);
      apiJOB3.post("documento-pedido", this.pedidoCompleto, () => {
        alert(`Pedido criado com sucesso`);
        this.limparForm();
      });
    },

    async limparForm() {
      this.cpf_cnpj = null;
      this.nome = null;
      this.fone = null;
      this.cep = null;
      this.endereco = null;
      this.bairro = null;
      this.cidade = null;
      this.uf = null;
      this.numero = null;
      this.complemento = null;
      this.produtos = null;
      this.produto = null;
      this.item = null;
      this.produtosSelecionados = [];
      this.qtdeTemp = null;

      document.location.reload();
    },

    selecionaProduto(e) {
      let descricaoProduto = e.target.value;
      let codigoArray = descricaoProduto.split(" - ");
      let codigo = codigoArray[0];

      if (codigo != this.produtoSelecionado.codigo) {
        this.produtos.forEach((i) => {
          if (i.codigo === codigo) {
            this.produtoSelecionado = i;
          }
        });
        this.$emit("selecionaProduto", this.produtoSelecionado.codigo);
      }
    },

    aplicaMascara() {
      if (this.cpf_cnpj.length === 11) this.maskFormatada = "###.###.###-##";
      if (this.cpf_cnpj.length === 14)
        this.maskFormatada = "##.###.###/####-##";
      this.buscaCliente();
    },

    buscaCliente() {
      this.fNovoCliente = true;
      let cpfCnpjTemp = this.cpf_cnpj.replace(/\D/g, "");

      apiJOB3.get(`cliente-pedido/${cpfCnpjTemp}`, null, (response) => {
        console.log(response)
        if (response.data) {
          this.nome = response.data.clienteNome;
          this.fone = response.data.clienteFone;
          this.cliente = response.data.clienteId;
          this.fNovoCliente = false;
        }
        this.resetarMask();
      });
      
    },

    resetarMask() {
      this.maskFormatada = "";
    },
  },

  mounted() {
    apiJOB3.get("produto-pedido", { subclasse }, (response) => {
      this.produtos = response.data;
    });
  },

  watch: {
    cep: function (novoCEP) {
      if (novoCEP.length === 9) {
        apiCep.get(this.cep, (res) => {
          const dadosCEP = res.data;
          if (dadosCEP.erro) {
            return alert(`CEP ${this.cep} inválido !`);
          }

          this.endereco = dadosCEP.logradouro;
          this.bairro = dadosCEP.bairro;
          this.cidade = dadosCEP.localidade;
          this.uf = dadosCEP.uf;
        });
      }
    },

    // cpf_cnpj: function (novoCPFCNPJ) {
    //   if (novoCPFCNPJ.length === 11 || novoCPFCNPJ.length === 14) {
    //     this.fNovoCliente = true;
    //     const cpfCnpjTemp = novoCPFCNPJ.replace(/\D/g, "");
    //     apiJOB3.get(`cliente-pedido/${cpfCnpjTemp}`, null, (response) => {
    //       if (response.data) {
    //         this.nome = response.data.clienteNome;
    //         this.fone = response.data.clienteFone;
    //         this.cliente = response.data.clienteId;
    //         this.fNovoCliente = false;
    //       }
    //     });
    //   }
    // },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
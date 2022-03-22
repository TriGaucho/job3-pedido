# pedidojob3 - Front-End


### 1. Configurar variaveis de ambiente: 
    a) Criar arquivos 
      .env.development* 
      .env.production*
    b) Configurar variaveis:
        VUE_APP_API_URL
        VUE_APP_PUBLIC_PATH

### 2. Instalar Dependências:
```
npm i
```

### 3. Copilar em Desenvolvimento:
```
npm run serve
```

### 4. Gerar arquivos de Produção:
```
npm run build
```

### 5. Diretórios de publicação 
**__vue.config.js/publicPath__**

------------------------------
Dependências
Vue input mask - https://github.com/probil/v-mask/blob/master/README-pt.md - adiciona as máscara nos inputs.

Vuelidate - https://vuelidate.js.org/ - validação de formulário
  Alterção de classe dinamicamente usando binding do vue com o Vuelidate e as classe do bootstrap
  Exemplo: :class="{ 'is-invalid': $v.numero.$error }"

Bootstrap - https://getbootstrap.com/ - Biblioteca CSS
  Dicas:
    Alterar cor do background: style="background-color: #0D442C"

Bootstrap Icons - https://icons.getbootstrap.com/ - Icones CSS
  Dicas:
    Itens podem ser imagens, dentro da pasta assets, ou podem texto usando elemento <i> de html. 
    Exemplo: <i class="bi bi-facebook" style="font-size: 2rem"></i>

------------------------------

Criar arquivos ENV
1. **.env.development**
   1. *VUE_APP_API_URL*=http://localhost:8081/api/
2. **.env.production**
   1. *VUE_APP_API_URL*=https://job3-backend.herokuapp.com/api/
   2. *VUE_APP_PUBLIC_PATH*=https://job3.com.br/
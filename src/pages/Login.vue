<template>
    <div class="text-center">
        <main class="form-signin">
            <form action="http://localhost:8080/?#/cadastro">
                <img class="mb-4" src="../assets/Job3_2.svg" alt="" width="120" height="120">
                <!-- <h1 class="h3 mb-3 fw-normal">Identifique-se</h1> -->

                <div class="form-floating ">
                    <input type="email" class="form-control" id="floatingInput" placeholder="nome@email.com">
                    <label for="floatingInput">E-mail de acesso</label>
                </div>

                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Senha de acesso">
                    <label for="floatingPassword" >Senha de acesso</label>
                </div>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="Manter logado"> Manter logado
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
                    <p class="mt-5 mb-3 text-muted">v: 22/0.1.5</p>
            </form>
        </main>
    </div>

</template>

<script>
    export default {
        name: 'Login',
    }
</script>
<style scoped>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>    
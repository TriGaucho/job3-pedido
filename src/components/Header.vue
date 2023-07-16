<template>
  <header>
    <nav
      class="navbar navbar-expand-md text-decoration-none bg-gradient"
      style="background-color: #ffab00"
    >
      <div class="container-fluid">
        <div class="d-flex">
          <a :href="inicio" class="navbar-brand col-md-6" target="_blank">
            <img
              :src="require(`../assets/logo/${logo}`)"
              width="100%"
              height="100%"
              class="d-inline-block"
              alt=""
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="bi bi-list" style="font-color"></span>
            </button>
          </a>
        </div>
        <div class="d-flex">
          <span class="fs-2 text-end col-md-0" style="color: #fff">
            <h1 class="h1">JOB3 - Pedido On-Line</h1>
          </span>
        </div>
        <div class="d-flex">
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="nav navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a href="#" class="nav-link px-2" style="color: #fff">Inicio</a>
              </li>
              <li class="nav-item">
                <a
                  :href="urlSobre"
                  class="nav-link px-2"
                  style="color: #fff"
                  target="_blank"
                  >Sobre</a
                >
              </li>
              <li class="nav-item">
                <a
                  :href="urlContato"
                  class="nav-link px-2"
                  style="color: #fff"
                  target="_blank"
                  >Contato</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
const logo = process.env.VUE_APP_LOGO;
const urlInicio = process.env.VUE_APP_URL_INICIO;
const urlSobre = process.env.VUE_APP_URL_SOBRE;
const urlContato = process.env.VUE_APP_URL_CONTATO;
const corPrimaria = process.env.COR_PRIMARIA;
const corSecundaria = process.env.COR_SECUNDARIA;

export default {
  name: "Header",
  data() {
    return {
      logo,
      urlInicio,
      urlSobre,
      urlContato,
      corPrimaria,
      corSecundaria,
    };
  },
};
</script>

<style scoped>
</style>
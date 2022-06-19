<template>
    <header> 
        <nav class="navbar navbar-expand-md text-decoration-none bg-gradient" style="background-color:#F2AC26">
            <div class="container-fluid">
                <div class="d-flex">
                    <a href="http://localhost:8080/?#/intro" class="navbar-brand col-md-6">
                        <img src="../assets/cropped-job3-favicon-02-180x180.png" width="100%" height="100%" class="d-inline-block" alt="">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="bi bi-list" style="font-color"></span>
                        </button>
                    </a>
                </div>
                <div class="d-flex">
                    <span class="fs-2 text-end col-md-0" style="color:whitesmoke">
                        <h1 class="h1">
                            Job 3 - {{ telaAtiva }}
                        </h1>
                    </span>
                </div>
                <div class="d-flex">
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="nav navbar-nav me-auto mb-2 mb-md-0 " >
                            <li class="nav-item">
                                <a href="#" class="nav-link px-2 " style="color:whitesmoke">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a href="http://localhost:8080/?#/cadastro" class="nav-link px-2" style="color:whitesmoke">Cadastro</a>
                            </li>
                            <li class="nav-item">
                                <a href="http://localhost:8080/?#/produtos" class="nav-link px-2" style="color:whitesmoke">Produtos</a>
                            </li>
                            <li class="nav-item">
                                <a href="http://localhost:8080/?#/" class="nav-link px-2" style="color:whitesmoke">Sair</a>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>

</style>
<template>
    <header> 
        <nav class="navbar navbar-expand-md text-decoration-none bg-gradient" style="background-color:#0A3623">
            <div class="container-fluid">
                <div class="d-flex">
                    <a href="http://arvorezinha.com/" class="navbar-brand col-md-6" target="_blank">
                        <img src="../assets/topLogarv.png" width="100%" height="100%" class="d-inline-block" alt="">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="bi bi-list" style="font-color"></span>
                        </button>
                    </a>
                </div>
                <div class="d-flex">
                    <span class="fs-2 text-end col-md-0" style="color:#BB9E68">
                        <h1 class="h1">
                            Pedido On-Line
                        </h1>
                    </span>
                </div>
                <div class="d-flex">
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="nav navbar-nav me-auto mb-2 mb-md-0 " >
                            <li class="nav-item">
                                <a href="#" class="nav-link px-2 " style="color:#BB9E68">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a href="http://arvorezinha.com/sobrenos/" class="nav-link px-2" style="color:#BB9E68" target="_blank">Sobre</a>
                            </li>
                            <li class="nav-item">
                                <a href="http://arvorezinha.com/contato/" class="nav-link px-2" style="color:#BB9E68" target="_blank">Contato</a>
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
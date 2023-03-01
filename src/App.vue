<template>
  <div id="app" class="d-flex flex-column h-100">
      <Header />
        
      <router-view />
        
      <Footer />
  </div>
</template>

<script>
import './styles/global.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}

</script>

<style>

</style>

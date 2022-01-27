<template>
  <div id="app">
    <Header />
    
    <body>
      <router-view path="$router.key" />
    </body>

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

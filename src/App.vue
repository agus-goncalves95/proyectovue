<template>
  <div id="app">
    <Navbar/>
    <Banner/>

    <Login/>
    <Register/>


    <div class="row">
      <div class="col p-4">
          <Carrito
        :productos="productos"/>
      </div>
    </div>

    <div class="row">
      <div class="col p-4">
       <!-- Le paso por props el array [] de productos que esta en el json -->
        <CardContainer
        :productos="productos"
        />
      </div>
    </div>
    <Formulario/>
  </div>
</template>

<script>
import productos from './assets/data/productos.json'
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
import CardContainer from './components/Cardcontainer.vue'
import Carrito from './components/Carrito.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import Formulario from './components/FormularioWeb.vue'




export default {
  name: 'App',
  components: {
    Navbar,
    Banner,
    CardContainer,
    Carrito,
    Login,
    Register,
    Formulario,
  },
  data() {
    return {
      productos
    }
  },
  methods: {
    // Declaro la funcion que va ejectuar el boton del hijo
    funcionMaestra(parametro) {
      console.log(parametro)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

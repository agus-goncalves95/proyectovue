<template>
    <div class="center examplex">
      <vs-navbar color="#fafafa" enter-collapsed v-model="active">
        <template #left>
          <img src="/logo2.png" alt="">
        </template>

        <vs-navbar-item :active="active == 'Home'" id="Home">
          Home
        </vs-navbar-item>
          <vs-navbar-item :active="active == 'Tienda'" id="Tienda">
          Tienda
        </vs-navbar-item>
          <vs-navbar-item :active="active == 'Contacto'" id="Contacto">
          Contacto
        </vs-navbar-item>

        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
      data:() => ({
      active: 'Home'
    }),
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lan="scss" scoped>
</style>

<template>
    <div>
        <h4>{{ titulo }}</h4>
        <!-- 1 - Le digo que va a tener un evento click al boton -->
      <vs-button 
        @click="eventoPerzonalizado" 
      >
        Agregar producto
      </vs-button>

    </div>
</template>

<script>
    export default {
        props: {
            titulo: String

        },
        data() {
            return {
                mensajeSidebar: "Este es un msj de side bar"
            }
        },
    methods: {
        // 2-  Le aviso que va hacer una funcion el boton de hijo a padre
        eventoPerzonalizado() {
            this.$emit("nuevoEvento", this.mensajeSidebar);
        }
    }
        
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <h4>Listado de productos</h4>
        <div class="row">
            <div class="col-lg-4 p-4" v-for="(producto,i) in productos" :key="i">
                <!-- Le paso por props el Objeto () de productos -->
                <Card
                :producto="producto"
                ></Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./Cardproducto.vue"
    export default {
    props: {
        productos: Array
    },
    components: {
        Card
    }
    }
</script>

<style scoped>

</style>
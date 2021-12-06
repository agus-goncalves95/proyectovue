<template>
    <div>
        <vs-card>
            <template #title>
                <h3> {{ producto.nombre }}</h3>
            </template>
            <template #img>
                <img :src="producto.imagen" alt="">
            </template>
            <template #text>
                <div class="pl-4">
                <!-- 1- Le paso el valor del filtro -->
                <h5>$ {{  producto.precio | dosDecimales }} </h5>
                <p v-if="producto.cantidad>0"> Stock: {{ producto.cantidad }} </p>
                <span v-else class="badge bg-secondary">Sin stock</span>
                </div>
                <vs-button>
                    Agregar al Carrito
                </vs-button>
            </template>
        </vs-card>
    </div>
</template>

<script>
    export default {
        props: {
            producto: Object
        },
        filters: {
            // Recibe un parametro y computed no
            // 2- Al recibir/retornar un valor le aplica el filtro de dos decimales
            dosDecimales(value) {
                return value.toFixed(2);
            }
        }
    }
</script>

<style scoped>

</style>
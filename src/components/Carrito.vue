<template>
    <div>
        <h5>Mi carrito</h5>
 <vs-table style="width: 100%">
    <template #thead>
      <vs-tr>
        <vs-th width="10">
          ID
        </vs-th>
        <vs-th>
          Nombre del producto
        </vs-th>
        <vs-th >
          Precio
        </vs-th>
        <vs-th>
          Cantidad
        </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr
        :key="i"
        v-for="(producto, i) in productos"
      >
        <vs-td>
          {{ producto.id }}
        </vs-td>
        <vs-td>
         {{ producto.nombre }}
        </vs-td>
        <vs-td>
         $ {{ producto.precio }}
        </vs-td>
         <vs-td>
         {{ producto.cantidad }}
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
    </div>
</template>

<script>
    export default {
        props: {
            productos: Array
        },
        data() {
          return {
            carrito : []
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>
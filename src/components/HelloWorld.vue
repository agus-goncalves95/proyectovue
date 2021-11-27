<template>
      <vs-button
        :active="active == 0"
        @click="active = 0"
      >
        Active
      </vs-button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lan="scss" scoped>
</style>

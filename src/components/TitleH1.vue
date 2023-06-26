<script >

export default {
  name: 'TitleH1',
  props: {
    title: String
  }
}

</script>

<template>
  <div class="d-sm-flex justify-content-between align-items-center mb-4">
    <h3 class="text-dark mb-0">{{title}}</h3>
  </div>
</template>

<style scoped>

</style>
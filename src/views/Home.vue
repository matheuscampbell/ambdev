<script >
import TitleH1 from "@/components/TitleH1.vue";
import Cards from "@/components/Home/Cards.vue";

export default {
  name: "Home-page",
  components: {
    TitleH1,
    Cards
  }
};

</script>

<template>
  <TitleH1 title="Dashboard"/>
  <Cards/>
</template>

<style scoped>

</style>
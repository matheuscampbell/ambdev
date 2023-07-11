<script >
import TitleH1 from "@/components/TitleH1.vue";
import Cards from "@/components/Home/Cards.vue";

export default {
  name: "Home-page",
  components: {
    TitleH1,
    Cards
  },
  methods: {
    async getFiles() {
      //create a dir projects
      
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('teste');
      window.ipcRenderer.send('message', 'teste2');
    }, 1000);
  }
};
window.ipcRenderer.on('teste', (event, a_new_message) => {
  console.log(a_new_message);
});
</script>

<template>
  <TitleH1 title="Dashboard"/>
  <Cards/>
</template>

<style scoped>

</style>
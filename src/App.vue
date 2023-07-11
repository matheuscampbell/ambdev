<template>
  <PageLoader :message="message" :loading="loading"/>
  <AdminLayout/>
</template>

<script>
import PageLoader from "@/components/PageLoader.vue";
import AdminLayout from "@/components/AdminLayout.vue";
export default {
  name: 'App',
  components: {
    AdminLayout,
    PageLoader
  },
  data: function () {
    return {
      message: 'Carregando...',
      loading: true
    }
  },
  mounted: function () {
    window.ipcRenderer.send('checkCapabilities',true);
    setTimeout(() => {
      this.message = 'Verificando Requisitos...';
    }, 1000);
    window.ipcRenderer.on('checkCapabilities', (event, data) => {
      if(!data.dockerInstalled){
        alert('Docker não instalado, por favor instale o docker e tente novamente!');
      }
      setTimeout(() => {
        this.loading = false;
      }, 2000);
  });
  }
}

</script>
<style>
</style>

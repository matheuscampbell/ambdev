<script>
import { RouterView } from 'vue-router';
import NavBar from "@/components/NavBar/NavBar.vue";
export default {
  name: "AdminLayout",
  components: {
    RouterView,
    NavBar
  },
  props: {
    msg: String,
  },
};
</script>

<template>
  <div id="wrapper">
    <NavBar />
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
          <div class="container-fluid">
            <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div class="input-group"><input class="bg-light form-control border-0 small" type="text"
                                              placeholder="Pesquisar...">
                <button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button>
              </div>
            </form>
          </div>
        </nav>
        <div class="container-fluid">
          <router-view/>
        </div>
      </div>
      <footer class="bg-white sticky-footer">
        <div class="container my-auto">
          <div class="text-center my-auto copyright"><span>Copyright © AmbDev2023</span></div>
        </div>
      </footer>
    </div>
    <a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
  </div>

</template>

<style scoped>

</style>
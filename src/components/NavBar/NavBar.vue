<script setup>

import MenuList from "@/components/NavBar/MenuList.vue";
</script>

<template>
  <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style="border-top-right-radius: 30px;border-bottom-right-radius: 30px;">
    <div class="container-fluid d-flex flex-column p-0">
      <a class="navbar-brand d-inline-flex flex-grow-1 flex-shrink-1 flex-fill justify-content-md-center align-items-md-center sidebar-brand m-0" href="#">
      <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laptop-code"></i></div>
      <div class="sidebar-brand-text mx-3">
        <span>AMB-DEV</span>
      </div><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
    </a>
      <hr class="sidebar-divider my-0">
      <MenuList></MenuList>
    </div>
  </nav>
</template>

<style scoped>

</style>
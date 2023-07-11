<script setup>

import MenuList from "@/components/NavBar/MenuList.vue";
</script>

<template>
  <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" 
  style="border-top-right-radius: 15px;background-image: linear-gradient( 180deg , rgb(1 96 110) 10%, rgba(0, 47, 54) 100%);border-right:3px solid #009B8E ;box-shadow: 5px 0 10px rgb(158, 158, 158);">
    <div class="container-fluid d-flex flex-column p-0">
      <a class="navbar-brand d-inline-flex flex-grow-1 flex-shrink-1 flex-fill justify-content-md-center align-items-md-center sidebar-brand m-0" href="#">
      <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laptop-code"></i></div>
      <div class="sidebar-brand-text mx-3">
        <span>AMB-DEV</span>
      </div>
    </a>
      <hr class="sidebar-divider my-0">
      <MenuList></MenuList>
    </div>
  </nav>
</template>

<style scoped>

</style>
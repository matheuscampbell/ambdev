<script>

export default {
  name: "MenuList",
  data() {
    return {
      menuList: [
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          link: "/",
        },
        {
          name: "Projetos",
          icon: "fa fa-folder-open",
          link: "/",
        },
        {
          name: "Sobre",
          icon: "fas fa-info-circle",
          link: "/sobre",
        },
      ],
    };
  },
  methods: {
    activeMenu() {
      const menu = document.querySelectorAll(".nav-item");
      menu.forEach((item) => {
        item.addEventListener("click", () => {
          menu.forEach((item) => {
            item.classList.remove("active");
          });
          item.classList.add("active");
        });
      });
    },
  },
  mounted() {
    this.activeMenu();
  },
};

</script>

<template>
<!--  monta o menu com base no arquivo de rotas -->
  <ul class="nav navbar-nav text-light" id="accordionSidebar">
    <li class="nav-item" v-for="(item, index) in menuList" :key="index">
      <router-link :to="item.link" class="nav-link">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.nav-item {
  /*adicona borda bem fina*/
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-in-out;
  border-right: 2px solid transparent;
}
.nav-item:hover {
  background-color: #026f80;
  border-right: 2px solid #51e58a;
}
</style>
<script >

import NginixCard from './NginixCard.vue';
import MysqlCard from './MysqlCard.vue';
import RedisCard from './RedisCard.vue';
export default {
    name: "CardsHome",
    props: {
        title: String
    },
    components: { NginixCard, MysqlCard, RedisCard }
}
</script>

<template>
  <div class="row">
    <div class="col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-start-primary py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
              <div class="text-uppercase text-primary fw-bold text-xs mb-1"><span>Projetos Configurados:</span>
              </div>
              <div class="text-dark fw-bold h5 mb-0"><span>4</span></div>
            </div>
            <div class="col-auto"><i class="fas fa-cogs fa-2x text-gray-300"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-start-success py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
              <div class="text-uppercase text-success fw-bold text-xs mb-1"><span>Projetos Ativos:</span></div>
              <div class="text-dark fw-bold h5 mb-0"><span>2</span></div>
            </div>
            <div class="col-auto"><i class="fas fa-cog fa-2x text-gray-300 fa-spin"></i></div>
          </div>
        </div>
      </div>
    </div>
    <NginixCard/>
    <MysqlCard/>
    <RedisCard/>
  </div>
</template>

<style scoped>

</style>
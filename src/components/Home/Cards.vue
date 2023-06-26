<script >
export default {
  name: 'CardsHome',
  props: {
    title: String
  }
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
    <div class="col-12">
      <div class="card shadow border-start-info py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
              <div class="text-uppercase text-info fw-bold text-xs mb-1"><span>Server status:</span></div>
              <div class="row g-0 align-items-center">
                <div class="col-auto">
                  <div class="text-dark fw-bold h5 mb-0 me-3"><span>Ativo</span></div>
                </div>
                <div class="col-12 d-lg-flex justify-content-between align-items-lg-center">
                  <div class="btn-group btn-group-sm" role="group">
                    <button class="btn btn-success link-light" type="button">Iniciar&nbsp;<i
                        class="fas fa-play"></i>&nbsp;
                    </button>
                    <button class="btn btn-warning link-light" type="button">Reiniciar&nbsp;<i
                        class="fas fa-sync"></i></button>
                    <button class="btn btn-danger" type="button">Parar&nbsp;<i class="fas fa-stop"></i></button>
                  </div>
                  <div class="btn-group btn-group-sm" role="group" style="margin-left: 8px;">
                    <button class="btn btn-info link-light" type="button">Ver Logs&nbsp;<i
                        class="fas fa-list"></i></button>
                    <button class="btn btn-secondary" type="button">Terminal&nbsp;<i
                        class="fas fa-terminal"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto"><i class="fas fa-info-circle fa-2x text-gray-300"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
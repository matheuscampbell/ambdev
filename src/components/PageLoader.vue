<script>
export default {
    name: 'PageLoader',
    props: {
        message: {
            type: String,
            default: 'Carregando...'

        },
        loading: {
            type: Boolean,
            default: true
        }
    }
    
}
</script>
<template>
    <div class="preloader" v-if="loading">
        <img class="circular" src="@/assets/img/sic-load.svg">
        <strong class="circular text-white" style="padding-top: 100px;text-align: center; width: 100%;">{{ message }}</strong>
    </div>
</template>
<style scoped>
.preloader {
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 99999;
    margin: 0 auto;
    background: radial-gradient(rgba(1, 96, 110, 1), rgba(0, 47, 54, 1));
}
.circular {
    /* animation: rotate 2s linear infinite; */
    height: 100px;
    transform-origin: center center;
    width: 100px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
img {
    vertical-align: middle;
    border-style: none;
}
</style>
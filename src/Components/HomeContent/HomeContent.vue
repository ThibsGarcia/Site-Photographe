<script setup lang="ts">
import HeroHome from './HeroHome.vue';
import BeautifulStorie from './BeautifulStorie.vue';
import DesignedEveryone from './DesignedEveryone.vue';
import IdeaPicture from './IdeaPicture.vue';
import Params from './Params.vue';
</script>

<template>
 
    <section>
        <HeroHome/>
        <BeautifulStorie/>
        <DesignedEveryone/>
        <IdeaPicture/>
        <Params />
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
   

@media (min-width: 768px) {

}
@media (min-width: 1023px) {

}
</style>

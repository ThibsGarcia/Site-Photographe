<script setup lang="ts">
import { reactive } from 'vue';
import StoriesHero from './StoriesHero.vue';
import StoriesListePictures from './StoriesListePictures.vue';
import data from '@/Data/product';

import type { ProductInterface } from '@/Interfaces/Product.interface';

const state = reactive<{
    products: ProductInterface[],
}>({
    products: data,
})
</script>

<template>
 
    <section>
        <StoriesHero/>
        <StoriesListePictures
        :products="state.products"/>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
   

@media (min-width: 768px) {

}
@media (min-width: 1023px) {

}
</style>

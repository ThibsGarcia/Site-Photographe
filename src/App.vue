<script setup lang="ts">
import HomeContent from './Components/HomeContent/HomeContent.vue';
import FeatureContent from './Components/Features/FeatureContent.vue';
import Header from './Components/Permanent/Header.vue';
import Footer from './Components/Permanent/Footer.vue';
import PricingContent from './Components/Pricing/PricingContent.vue';
import StoriesContent from './Components/Stories/StoriesContent.vue';

import { reactive } from 'vue';
import type { ProductInterface } from './Interfaces/Product.interface';
import data from '@/Data/product';

const state = reactive<{
    products: ProductInterface[],
}>({
    products: data,
})
</script>

<template>
      <Header></Header>
        <main>
          <router-view></router-view>
        </main>
      <Footer></Footer>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
   

@media (min-width: 768px) {

}
@media (min-width: 1023px) {

}
</style>

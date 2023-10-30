<script setup lang="ts">
import type { ProductInterface } from '@/Interfaces/Product.interface';
import StoriesPictures from './StoriesPictures.vue';

defineProps<{
  products: ProductInterface[],
}>();


</script>

<template>
 
    <section>
        <div class="grid">
            <StoriesPictures
            v-for="product of products"
            :product="product"
            :key="product.id"/>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
   

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); /* Pour la disposition par défaut (mobile) */

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* Pour la disposition tablette (2 colonnes) */
    }

    @media (min-width: 1023px) {
        grid-template-columns: repeat(4, 1fr); /* Pour la disposition desktop (4 colonnes) */
    }

    /* Style pour les images, ajustez selon vos besoins */
    .stories-picture {
        width: 100%;
        max-width: 100%;
        height: auto;
    }
}
</style>

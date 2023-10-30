<script setup lang="ts">
import type { ProductInterface } from '@/Interfaces/Product.interface';

defineProps<{
    product: ProductInterface
}>()

/** <td v-for="(image, imageIndex) in dataInfo.images" :key="imageIndex">
        <div class="test-image">
            <img :src="dataInfo.images" alt="">
        </div>
</td> */
</script>

<template>
    <section>
      <div class="product">
        <div class="product-image" :style="{ backgroundImage: 'url(' + product.image.mobile + ')' }"></div>
                <div class="mt-5">
                    <h4 class="text-2xl pb-5">{{ product.author }}</h4>
                    <p class="text-base description pb-5">{{ product.title }}</p>
                    <div class="d-flex align-items-center space-between">
                        <h5 class="text-xl">Prix: {{ product.id }}</h5>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
.product {
    border: 1px solid var(--border);
    border-radius: var(--border-radius);


    &-image {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        background-size: cover;
        background-position: center;
        height: 400px;
    }
}
@media (min-width: 768px) {

}
@media (min-width: 1023px) {

}
</style>

<script setup lang="ts">
import type { ProductInterface } from '@/Interfaces/Product.interface';

defineProps<{
    product: ProductInterface
}>()
</script>

<template>
 
    <section>
        <div class="container-idea">
            <div class="box-mobile" :style="{ backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url(' + product.image.mobile + ')' }">
                    <div class="text-presentation">
                        <div class="title-presentation">
                            <p>{{ product.date }}</p>
                            <h3>{{product.title}}</h3>
                            <p>{{product.author}}</p>
                        </div>
                        <div class="line-text"></div>
                        <button class="btn-4">Read story</button>
                    </div>
            </div>
            <div class="box-desktop" :style="{ backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url(' + product.image.desktop + ')' }">
                    <div class="text-presentation">
                        <div class="title-presentation">
                            <p>{{ product.date }}</p>
                            <h3>{{product.title}}</h3>
                            <p>{{product.author}}</p>
                        </div>
                        <div class="line-text"></div>
                        <button class="btn-4">Read story</button>
                    </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
   .container-idea {
            .box-mobile, .box-desktop{
                background-size: cover;
                background-repeat: no-repeat;
                width: 100%;
                height: 375px;
                color: var(--secondary-1);
                display: flex;
                align-items: end;
                justify-content: center;

                transition: transform 0.3s ease-in-out;
                .text-presentation {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 80%;
                    height: 35%;
                    margin-bottom: 7%;
                    .title-presentation {
                        height: 50%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .line-text {
                        background-color: var(--secondary-1);
                        height: 1px;
                        width: 100%;
                    }
                    .btn-4 {
                        color: var(--secondary-1);
                        width: 100%;
                    }
                } 
            }
            .box-desktop {
                display: none;
            }
   }

@media (min-width: 768px) {
    .container-idea {
        .box-mobile, .box-desktop {
            height: 500px;
        }
    }
    
    
}
@media (min-width: 1023px) {
    .container-idea {
        .box-desktop {
            display: flex;
            transition: transform 1 ease-in-out;
            &:hover {
                transform: translateY(-20px);
            }
        }
        .box-mobile {
            display: none;
        }
    }
}
</style>

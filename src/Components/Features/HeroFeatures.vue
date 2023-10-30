<script setup lang="ts">

</script>

<template>
 
    <section>
        <div class="hero-container">
            <div class="hero-content">
                <div class="hero-photo">
                </div>
                <div class="text-hero">
                    <div class="content-text">
                        <h2>FEATURES</h2>
                        <p>We make sure all of our features are designed to be loved by every aspiring 
                            and even professional photograpers who wanted to share their stories.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
 .hero-container {
    .hero-content {
        display: flex;
        flex-direction: column;
        .hero-photo {
            background-image: url(../../assets/images/features/mobile/hero.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height:60vh;
        }
        .text-hero {
            height: 60vh;
            background-color: var(--primary-1);
            display: flex;
            align-items: center;
            .content-text {
                height: 50%;
                width: 85%;
                margin: auto;
                display: flex;
                flex-direction: column;
                color: var(--secondary-1);
                justify-content: space-between;
                h2 {
                font-weight: bold;
                font-size: 32px;
                letter-spacing: 3.33px;
                text-transform: uppercase;
                line-height: 40px;
            }
                p {
                    line-height: 25px;
                    font-size: 15px;
                    letter-spacing: 0.5px;
                }
            }
        }
    }
 }

@media (min-width: 768px) {
    .hero-container {
        .hero-content {
            display: flex;
            flex-direction: row-reverse;
            height: 95vh;
            .hero-photo {
                background-image: url(../../assets/images/features/tablet/hero.jpg);
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 40%;
                height: 100%;
            }
            .text-hero { 
                height: 100%;
                width: 60%;
                .content-text {
                    height: 30%;
                    width: 80%;
                }
            }
        }
    }

}
@media (min-width: 1023px) {

    .hero-container {
        .hero-content {
            height: 90vh;
            .hero-photo {
                background-image: url(../../assets/images/features/desktop/hero.jpg);
                background-size: cover;
                width: 55%;
            }
            .text-hero { 
                width: 45%;
                .content-text {
                    height: 30%;
                    width: 60%;
                }
            }
        }
    }
}
</style>

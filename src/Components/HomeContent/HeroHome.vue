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
                        <h2>Create and <br> share your photo stories. </h2>
                        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos,
                            tell stories and connect with others.</p>
                            <button class="btn-4">get an invite</button>
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
            background-image: url(../../assets/images/home/mobile/create-and-share.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height:55vh;
        }
        .text-hero {
            height: 80vh;
            background-color: var(--primary-1);
            display: flex;
            align-items: center;
            .content-text {
                height: 70%;
                width: 90%;
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
                .btn-4 {
                    width: 168px;
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
            height: 90vh;
            .hero-photo {
                background-image: url(../../assets/images/home/tablet/create-and-share.jpg);
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
                    height: 60%;
                    width: 80%;
                }
            }
        }
    }

}
@media (min-width: 1023px) {

    .hero-container {
        .hero-content {
            .hero-photo {
                background-image: url(../../assets/images/home/desktop/create-and-share.jpg);
                background-size: cover;
                width: 55%;
            }
            .text-hero { 
                width: 45%;
                .content-text {
                    height: 50%;
                    width: 60%;
                }
            }
        }
    }
}
</style>

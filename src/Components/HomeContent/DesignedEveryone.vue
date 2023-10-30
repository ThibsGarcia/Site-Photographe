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
                        <h2>DESIGNED FOR EVERYONE</h2>
                        <p>Photosnap can help you create stories that resonate with your audience.  
                        Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
                        <button class="btn-2"><router-link to="/stories">View the stories</router-link></button>
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
            background-image: url(../../assets/images/home/mobile/designed-for-everyone.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height:50vh;
        }
        .text-hero {
            height: 80vh;
            display: flex;
            align-items: center;
            .content-text {
                height: 70%;
                width: 85%;
                margin: auto;
                display: flex;
                flex-direction: column;
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
                }
                .btn-2 {
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
            width: 100%;
            .hero-photo {
                background-image: url(../../assets/images/home/tablet/designed-for-everyone.jpg);
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
                background-image: url(../../assets/images/home/desktop/designed-for-everyone.jpg);
                background-size: cover;
                width: 55%;
            }
            .text-hero { 
                width: 45%;
                .content-text {
                    height: 50%;
                    width: 60%;
                    .btn-2 {
                        width: 205px;
                    }
                }
            }
        }
    }
}
</style>

<script setup lang="ts">

</script>

<template>
 
    <section>
        <div class="container-hero">
            <div class="top-content"></div>
            <div class="down-container">
                <div class="down-content">
                    <h2>HAZY FULL MOON OF APPALACHIA</h2>
                    <div class="down-date">
                        <p>March 2nd 2020</p>
                        <p class="underline">by John Appleseed</p>
                    </div>
                    <p>The dissected plateau area, while not actually made up of geological mountains, 
                        is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
                        and while the ridges are not high, the terrain is extremely rugged.</p>
                    <button class="btn-4">Read the story</button>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
    .container-hero {
        height: 160vh;
        display: flex;
        flex-direction: column;
        .top-content {
            background-image: url(../../assets/images/stories/mobile/moon-of-appalacia.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            height: 40%;
        }
        .down-container {
            height: 60%;
            background-color: var(--primary-1);
            color: var(--secondary-2);
            display: flex;
            .down-content {
                width: 85%;
                height: 80%;
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h2 {
                    font-size: 32px;
                    letter-spacing: 3.33px;
                    line-height: 40px;
                }
                .down-date {
                    display: flex;
                    justify-content: space-between;
                    width: 80%;
                }
                .btn-4 {
                    width: 184px;
                }
            }
        }
    }

@media (min-width: 768px) {
    .container-hero {
        background-image: url(../../assets/images/stories/tablet/moon-of-appalacia.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 125vh;
        .top-content {
            display: none;
        }
        .down-container {
            width: 90%;
            height: 60%;
            margin: auto;
            align-items: center;
            background-color: transparent;
            .down-content {
                width: 50%;
                height: 100%;
                margin: 0px;
            }
        }
    }

}
@media (min-width: 1023px) {
    .container-hero {
        background-image: url(../../assets/images/stories/desktop/moon-of-appalacia.jpg);
        height: 100vh;
        
        .down-container {
            width: 80%;
            
            .down-content {
                width: 30%;
                height: 100%;
                margin: 0px;
            }
        }
    }
}
</style>

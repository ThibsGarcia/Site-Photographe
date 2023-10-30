<script setup lang="ts">

</script>

<template>
 
    <section>
       <div class="params-container">
        <div class="params-content">
            <div class="box">
                <div class="top-box">
                    <img src="../../assets/images/features/desktop/responsive.svg" alt="icone-responsive">
                </div>
                <div class="down-box">
                    <h3>100% Responsive</h3>
                    <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div>
            </div>
            <div class="box">
                <div class="top-box">
                    <img src="../../assets/images/features/desktop/no-limit.svg" alt="icone-responsive">
                </div>
                <div class="down-box">
                    <h3>No Photo Upload Limit</h3>
                    <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                </div>
            </div>
            <div class="box">
                <div class="top-box">
                    <img src="../../assets/images/features/desktop/embed.svg" alt="icone-responsive">
                </div>
                <div class="down-box">
                    <h3>Available to Embed</h3>
                    <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
                </div>
            </div>
        </div>
       </div>
    </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
    .params-container {
        height: 964px;
        display: flex;
        align-items: center;
        .params-content {
            width: 80%;
            margin: auto;
            height: 802px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .box {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                height: 30%;
               
                .down-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    height: 50%;
                    text-align: center;
                }
            }
        }
    }

@media (min-width: 768px) {
    .params-container {
        .params-content {
            width: 60%;
        }
    }
  

}
@media (min-width: 1023px) {

    .params-container {
        height: 500px;
        .params-content {
            flex-direction: row;
            height: 50%;
            width: 75%;
            .box {
                height: auto;
                width: 30%;
            }
        }
    }

}
</style>

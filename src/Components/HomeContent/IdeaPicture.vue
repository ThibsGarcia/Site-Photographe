<script setup lang="ts">
</script>

<template>
 
    <section>
        <div class="container-idea">
            <div class="top-content">
                <div class="box-1">
                    <div class="text-presentation">
                        <div class="title-presentation">
                            <h3>The Mountains</h3>
                            <p>by John Applesead</p>
                        </div>
                        <div class="line-text"></div>
                        <button class="btn-4">Read story</button>
                    </div>
                </div>
                <div class="box-2">
                    <div class="text-presentation">
                        <div class="title-presentation">
                            <h3>Sunset Cityscapes</h3>
                            <p>by Benjamin Cruz</p>
                        </div>
                        <div class="line-text"></div>
                        <button class="btn-4">Read story</button>
                    </div>
                </div>
            </div>
            <div class="down-content">
                <div class="box-3">
                    <div class="text-presentation">
                        <div class="title-presentation">
                            <h3>18 Days Voyage</h3>
                            <p>by Alexei Borodin</p>
                        </div>
                        <div class="line-text"></div>
                        <button class="btn-4">Read story</button>
                    </div>
                </div>
                <div class="box-4">
                    <div class="text-presentation">
                        <div class="title-presentation">
                            <h3>Architecturals</h3>
                            <p>by Samantha Brooke</p>
                        </div>
                        <div class="line-text"></div>
                        <button class="btn-4">Read story</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
   .container-idea {
    height: 290vh;
        .top-content, .down-content {
            height: 50%;
            width: 100%;
            .box-1, .box-2, .box-3, .box-4 {
                background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/mobile/mountains.jpg);
                background-size: cover;
                background-repeat: no-repeat;
                width: 100%;
                height: 50%;
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
                    height: 25%;
                    margin-bottom: 5%;
                    .line-text {
                        background-color: var(--secondary-2);
                        height: 1px;
                        width: 100%;
                    }
                    .btn-4 {
                        color: var(--secondary-1);
                        width: 100%;
                    }
                }
            }
            .box-2 {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/mobile/rage-of-the-sea.jpg);
            }
            .box-3 {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/mobile/18-days-voyage.jpg);
            }
            .box-4 {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/mobile/architecturals.jpg);
            }
            .box-1:hover, .box-2:hover, .box-3:hover, .box-4:hover {
                transform: translateY(-20px);
            }
        }
   }

@media (min-width: 768px) {
    .container-idea {
        height: 195vh;
        .top-content, .down-content {
            display: flex;
            height: 50%;
            .box-1, .box-2, .box-3, .box-4 {
                height: 100%;
            }
        }
            .box-2 {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/tablet/rage-of-the-sea.jpg);
            }
            .box-3 {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/tablet/18-days-voyage.jpg);
            }
            .box-4 {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/tablet/architecturals.jpg);
            }
            .box-1:hover, .box-2:hover, .box-3:hover, .box-4:hover {
                transform: translateY(-20px);
            }
        }
    }
@media (min-width: 1023px) {
    .container-idea {
        display: flex;
        height: 80vh;
        .top-content, .down-content {
            width: 50%;
            height: 100%;
            .box-1 {
                background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/desktop/mountains.jpg);
            }
            .box-2 {
                background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/desktop/rage-of-the-sea.jpg);
            }
            .box-3 {
                background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/desktop/18-days-voyage.jpg);
            }
            .box-4 {
                background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25)) ,url(../../assets/images/stories/desktop/architecturals.jpg);
            }
        }
    }

}
</style>
